import { ccc } from "@ckb-ccc/ccc";
import { parseChallenge } from "./_lib/challenge.mjs";
import { bindKey, saveBind } from "./_lib/store.mjs";
import { handleOptions, json, readJson } from "./_lib/http.mjs";

function openClient(network) {
  return network === "mainnet"
    ? ccc.ClientPublicMainnet.open()
    : ccc.ClientPublicTestnet.open();
}

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;

  if (req.method !== "POST") {
    return json(res, 405, { error: "POST only" });
  }

  let owner;
  try {
    const body = await readJson(req);
    const { token, signature, address } = body;

    if (!token || !signature) {
      return json(res, 400, { error: "token and signature required" });
    }

    const { payload, message } = parseChallenge(token);
    const sig =
      typeof signature === "string" ? JSON.parse(signature) : signature;

    const valid = await ccc.Signer.verifyMessage(message, sig);
    if (!valid) {
      return json(res, 401, { error: "Signature verification failed" });
    }

    const network = payload.network === "mainnet" ? "mainnet" : "testnet";
    owner = openClient(network);
    const client = owner.value;

    let dids = [];
    let primaryDid = null;
    let resolveNote = null;

    // Prefer the CKB recommended address from the client (ckt1…/ckb1…).
    // MetaMask CCC signatures often carry an EVM 0x identity that Address.fromString rejects.
    const candidates = [address, sig.identity].filter(Boolean);
    const unique = [...new Set(candidates)];

    if (!unique.length) {
      resolveNote = "Wallet proven. DID lookup skipped (no address on request).";
    } else {
      let resolved = false;
      for (const candidate of unique) {
        try {
          const addrObj = await ccc.Address.fromString(candidate, client);
          const owned = await ccc.didCkb.listDidCkbsByLock({
            client,
            lock: addrObj.script,
          });
          dids = owned.map((d) => d.did);
          primaryDid = dids[0] || null;
          resolved = true;
          if (!primaryDid) {
            resolveNote =
              "Wallet proven. No did:ckb cell for this lock yet — optional for the demo.";
          }
          break;
        } catch {
          /* try next candidate */
        }
      }
      if (!resolved) {
        resolveNote =
          "Wallet proven. DID lookup needs a CKB address (Neuron/JoyID); MetaMask 0x identity alone cannot resolve a DID cell.";
      }
    }

    const record = {
      username: payload.username,
      network,
      forum: payload.forum,
      address: address || sig.identity || null,
      signType: sig.signType || null,
      did: primaryDid,
      dids,
      linkedAt: new Date().toISOString(),
      resolveNote,
      verified: true,
    };

    saveBind(bindKey(network, payload.username), record);

    return json(res, 200, {
      ok: true,
      bind: record,
      message: primaryDid
        ? "Signature valid — did:ckb bound for demo store"
        : "Signature valid — wallet proven; create a did:ckb to complete DID badge",
    });
  } catch (e) {
    return json(res, 400, { error: e.message || "Verify failed" });
  } finally {
    if (owner) {
      try {
        await owner.dispose();
      } catch {
        /* ignore */
      }
    }
  }
}
