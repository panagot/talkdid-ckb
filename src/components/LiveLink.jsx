import { useEffect, useState } from "react";
import { ccc } from "@ckb-ccc/connector-react";
import {
  CheckCircle,
  CircleNotch,
  WarningCircle,
  Wallet,
} from "@phosphor-icons/react";
import { fetchBind, requestChallenge, verifyChallenge } from "../lib/api.js";
import { LINKS } from "../data/grant.js";

function validUsername(name) {
  return /^[a-zA-Z0-9._-]{2,20}$/.test(name);
}

export default function LiveLink() {
  const { open, disconnect, wallet, signerInfo, client } = ccc.useCcc();
  const signer = ccc.useSigner();

  const [username, setUsername] = useState("talk-builder");
  const [network, setNetwork] = useState("testnet");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [challenge, setChallenge] = useState(null);
  const [bind, setBind] = useState(null);
  const [address, setAddress] = useState("");
  const [apiOk, setApiOk] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/binds")
      .then((r) => r.json())
      .then(() => {
        if (!cancelled) setApiOk(true);
      })
      .catch(() => {
        if (!cancelled) setApiOk(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!signerInfo) {
      setAddress("");
      return;
    }
    signerInfo.signer
      .getRecommendedAddress()
      .then(setAddress)
      .catch(() => setAddress(""));
  }, [signerInfo]);

  useEffect(() => {
    const name = client?.url?.includes("mainnet") || network === "mainnet";
    // Prefer explicit toggle; client may already match CCC picker.
    void name;
  }, [client, network]);

  async function onRequestChallenge() {
    setError("");
    setBind(null);
    const name = username.trim();
    if (!validUsername(name)) {
      setError("Use 2–20 letters, numbers, dots, underscores, or hyphens.");
      return;
    }
    if (!signer) {
      setError("Connect a CCC wallet first.");
      return;
    }
    setBusy(true);
    try {
      const data = await requestChallenge({
        username: name,
        network,
      });
      setChallenge(data);
    } catch (e) {
      setError(e.message || "Challenge request failed");
      setChallenge(null);
    } finally {
      setBusy(false);
    }
  }

  async function onSignAndVerify() {
    if (!signer || !challenge) return;
    setBusy(true);
    setError("");
    try {
      const signature = await signer.signMessage(challenge.message);
      const data = await verifyChallenge({
        token: challenge.token,
        signature,
        address,
      });
      setBind(data.bind);
      try {
        localStorage.setItem(
          `talkdid-bind:${network}:${username.trim().toLowerCase()}`,
          JSON.stringify(data.bind),
        );
      } catch {
        /* ignore */
      }
    } catch (e) {
      setError(e.message || "Sign / verify failed");
    } finally {
      setBusy(false);
    }
  }

  async function onReloadBind() {
    setBusy(true);
    setError("");
    try {
      const data = await fetchBind({
        username: username.trim().toLowerCase(),
        network,
      });
      setBind(data.bind);
      if (!data.bind) setError("No server-side bind for this user yet.");
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="live-layout">
      <div className="demo-panel">
        <div className="live-banner">
          <strong>Live path</strong>
          <span className="muted">
            Real CCC sign · server verify · did:ckb resolve on public RPC
          </span>
        </div>

        {apiOk === false && (
          <p className="err" role="alert">
            <WarningCircle size={16} /> API unreachable. Use{" "}
            <code>npm run dev</code> (Vite middleware) or a Vercel deploy with{" "}
            <code>/api/*</code>.
          </p>
        )}

        <div className="live-row">
          <label htmlFor="net">Network</label>
          <select
            id="net"
            value={network}
            onChange={(e) => {
              setNetwork(e.target.value);
              setChallenge(null);
              setBind(null);
            }}
          >
            <option value="testnet">CKB Testnet (recommended)</option>
            <option value="mainnet">CKB Mainnet</option>
          </select>
        </div>

        <div className="live-row">
          <label htmlFor="live-user">Demo username (Talk-style)</label>
          <input
            id="live-user"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            maxLength={20}
            spellCheck={false}
            autoComplete="off"
          />
        </div>

        <div className="live-wallet">
          {wallet ? (
            <>
              <p>
                <strong>{wallet.name}</strong>
                <span className="mono did-line">{address || "…"}</span>
              </p>
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={disconnect}
              >
                Disconnect
              </button>
            </>
          ) : (
            <button type="button" className="btn btn-primary" onClick={open}>
              <Wallet size={18} /> Connect CCC wallet
            </button>
          )}
        </div>

        {error && (
          <p className="err" role="alert">
            <WarningCircle size={16} /> {error}
          </p>
        )}

        <div className="hero-cta">
          <button
            type="button"
            className="btn btn-secondary"
            disabled={busy || !signer}
            onClick={onRequestChallenge}
          >
            {busy ? <CircleNotch className="spin" size={18} /> : null}
            1. Get challenge
          </button>
          <button
            type="button"
            className="btn btn-primary"
            disabled={busy || !challenge || !signer}
            onClick={onSignAndVerify}
          >
            2. Sign & verify
          </button>
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            disabled={busy}
            onClick={onReloadBind}
          >
            Reload bind
          </button>
        </div>

        {challenge && (
          <pre className="challenge mono">{challenge.message}</pre>
        )}

        {bind && (
          <div className="live-result">
            <p className="ok">
              <CheckCircle weight="fill" size={20} /> Wallet ownership proven
            </p>
            <ul className="preview-list">
              <li className="done">User: {bind.username}</li>
              <li className="done">Network: {bind.network}</li>
              <li className={bind.did ? "done" : ""}>
                DID: {bind.did || "none yet"}
              </li>
              {bind.signType && (
                <li className="done">Sign type: {bind.signType}</li>
              )}
            </ul>
            {bind.resolveNote && (
              <p className="muted" style={{ marginTop: "0.75rem" }}>
                {bind.resolveNote}{" "}
                <a href={LINKS.vellum} target="_blank" rel="noreferrer">
                  DID tooling →
                </a>
              </p>
            )}
          </div>
        )}
      </div>

      <aside className="panel">
        <h3>What this proves</h3>
        <ul>
          <li>CCC modal (Neuron, JoyID, …)</li>
          <li>HMAC-signed challenge from our API</li>
          <li>
            <code>Signer.verifyMessage</code> on the server
          </li>
          <li>
            <code>listDidCkbsByLock</code> against public CKB RPC
          </li>
        </ul>
        <p className="muted">
          This is not an install on talk.nervos.org — it is the cryptographic
          core a Discourse plugin would call. Prefer <strong>testnet</strong>{" "}
          first.
        </p>
        <p className="muted">
          No DID cell? Signature still proves wallet control. Create a{" "}
          <em>did:ckb</em> with ecosystem tooling, then re-verify to attach the
          badge id.
        </p>
      </aside>
    </div>
  );
}
