import { useEffect, useState } from "react";
import { ccc } from "@ckb-ccc/connector-react";
import {
  CheckCircle,
  CircleNotch,
  SealCheck,
  WarningCircle,
  Wallet,
} from "@phosphor-icons/react";
import { fetchBind, requestChallenge, verifyChallenge } from "../lib/api.js";
import { LINKS } from "../data/grant.js";

function validUsername(name) {
  return /^[a-zA-Z0-9._-]{2,20}$/.test(name);
}

function networkFromClient(client) {
  const url = String(client?.url || client?.addressPrefix || "");
  if (/mainnet/i.test(url) || url.includes("ckb1")) return "mainnet";
  return "testnet";
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

  // Keep challenge network aligned with the CCC client (modal can also switch).
  useEffect(() => {
    if (!client) return;
    const next = networkFromClient(client);
    setNetwork((prev) => {
      if (prev === next) return prev;
      setChallenge(null);
      setBind(null);
      return next;
    });
  }, [client]);

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

  const linked = Boolean(bind);
  const displayName = username.trim() || "username";

  return (
    <div className="live-layout">
      <div className="demo-panel">
        <div className="live-banner">
          <strong>Live path</strong>
          <span className="muted">
            Real CCC sign · server verify · did:ckb on public RPC
          </span>
        </div>

        {apiOk === false && (
          <p className="err" role="alert">
            <WarningCircle size={16} /> API unreachable. Use{" "}
            <code>npm run dev</code> (Vite middleware) or a Vercel deploy with{" "}
            <code>/api/*</code>.
          </p>
        )}

        <ol className="live-steps" aria-label="Link steps">
          <li className={wallet ? "done" : "current"}>Connect wallet</li>
          <li className={challenge ? "done" : wallet ? "current" : ""}>
            Get challenge
          </li>
          <li className={bind ? "done" : challenge ? "current" : ""}>
            Sign & verify
          </li>
        </ol>

        <div className="live-row">
          <label htmlFor="net">Network (for challenge)</label>
          <select
            id="net"
            value={network}
            onChange={(e) => {
              setNetwork(e.target.value === "mainnet" ? "mainnet" : "testnet");
              setChallenge(null);
              setBind(null);
            }}
          >
            <option value="testnet">CKB Testnet (recommended)</option>
            <option value="mainnet">CKB Mainnet</option>
          </select>
          <p className="muted" style={{ margin: "0.35rem 0 0", fontSize: "0.8rem" }}>
            Match this to the network you pick in the CCC wallet modal.
          </p>
        </div>

        <div className="live-row">
          <label htmlFor="live-user">Talk username</label>
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
                {bind.resolveNote}
              </p>
            )}
          </div>
        )}
      </div>

      <aside className="talk-preview-aside">
        <div className={`forum-card tall ${linked ? "is-linked" : ""}`}>
          <div className="forum-card-top">
            <span>Talk profile</span>
            {linked ? (
              <span className="pill ok-pill">verified</span>
            ) : (
              <span className="pill">unlinked</span>
            )}
          </div>
          <div className="forum-user">
            <div className={`avatar ${linked ? "verified-ring" : ""}`}>
              {displayName.slice(0, 1).toUpperCase()}
            </div>
            <div>
              <p className="forum-name">
                {displayName}
                {linked && (
                  <SealCheck className="verified" weight="fill" size={18} />
                )}
              </p>
              {linked && bind?.did ? (
                <p className="mono did-line">{bind.did}</p>
              ) : linked ? (
                <p className="muted">Wallet proven · DID cell optional</p>
              ) : (
                <p className="muted">No did:ckb bound yet</p>
              )}
            </div>
          </div>
          <ul className="preview-list">
            <li className={wallet ? "done" : ""}>CCC wallet connected</li>
            <li className={challenge ? "done" : ""}>Challenge issued</li>
            <li className={bind ? "done" : ""}>Signature verified</li>
            <li className={bind?.did ? "done" : ""}>
              DID cell {bind?.did ? "found" : "(optional)"}
            </li>
          </ul>
          <p className="forum-caption">
            Demo kit only — not installed on production talk.nervos.org. Prefer
            testnet. Signature verify is enough for this demo; a DID cell is
            optional.
          </p>
        </div>
      </aside>
    </div>
  );
}
