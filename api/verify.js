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

    try {
      const identity = sig.identity || address;
      if (!identity) {
        resolveNote = "No identity on signature — DID list skipped";
      } else {
        const addrObj = await ccc.Address.fromString(identity, client);
        const owned = await ccc.didCkb.listDidCkbsByLock({
          client,
          lock: addrObj.script,
        });
        dids = owned.map((d) => d.did);
        primaryDid = dids[0] || null;
        if (!primaryDid) {
          resolveNote =
            "Wallet verified, but no live did:ckb cell for this lock. Create one with DID tooling, then re-verify.";
        }
      }
    } catch (err) {
      resolveNote = `DID resolve warning: ${err.message || String(err)}`;
    }

    const record = {
      username: payload.username,
      network,
      forum: payload.forum,
      address: sig.identity || address || null,
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
