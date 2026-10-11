import { useEffect, useMemo, useRef, useState } from "react";
import {
  CheckCircle,
  CircleNotch,
  SealCheck,
  Wallet,
  WarningCircle,
} from "@phosphor-icons/react";

const STEPS = ["idle", "connect", "challenge", "sign", "verify", "done"];

function fakeDid(seed) {
  const hex = Array.from(seed)
    .map((c) => c.charCodeAt(0).toString(16))
    .join("")
    .padEnd(10, "0")
    .slice(0, 10);
  return `did:ckb:ckb1q${hex}…${(seed.length * 17).toString(16).slice(0, 4)}`;
}

function validUsername(name) {
  return /^[a-zA-Z0-9._-]{2,20}$/.test(name);
}

export default function Demo() {
  const [username, setUsername] = useState("pollis");
  const [step, setStep] = useState("idle");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [nonce, setNonce] = useState("");
  const [issuedAt, setIssuedAt] = useState("");
  const [did, setDid] = useState("");
  const alive = useRef(true);
  const timers = useRef([]);

  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, []);

  const progress = useMemo(() => STEPS.indexOf(step), [step]);

  function wait(ms) {
    return new Promise((resolve) => {
      const id = setTimeout(resolve, ms);
      timers.current.push(id);
    });
  }

  async function run(next, delay = 700) {
    if (!alive.current) return;
    setBusy(true);
    setError("");
    await wait(delay);
    if (!alive.current) return;
    setStep(next);
    setBusy(false);
  }

  async function onConnect() {
    const name = username.trim();
    if (!name) {
      setError("Enter a Discourse username.");
      return;
    }
    if (!validUsername(name)) {
      setError("Use 2–20 letters, numbers, dots, underscores, or hyphens.");
      return;
    }
    await run("connect", 400);
    if (!alive.current) return;
    const n = `talkdid-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
    setNonce(n);
    setIssuedAt(new Date().toISOString());
    await run("challenge", 500);
  }

  async function onSign() {
    await run("sign", 600);
    if (!alive.current) return;
    await run("verify", 800);
    if (!alive.current) return;
    setDid(fakeDid(username.trim().toLowerCase()));
    await run("done", 500);
  }

  function reset() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setStep("idle");
    setNonce("");
    setIssuedAt("");
    setDid("");
    setError("");
    setBusy(false);
  }

  return (
    <div className="page">
      <header className="page-hero">
        <p className="eyebrow">Interactive mock</p>
        <h1>Link flow demo</h1>
        <p className="lede">
          Simulates the Discourse plugin challenge → CCC sign → DID bind. No
          real wallet or Talk API — safe for reviewers to click through.
        </p>
      </header>

      <div className="demo-layout">
        <div className="demo-panel">
          <div className="progress-track" aria-hidden="true">
            {STEPS.filter((s) => s !== "idle").map((s, i) => (
              <span
                key={s}
                className={`progress-dot ${progress > i ? "on" : ""} ${step === s ? "current" : ""}`}
              />
            ))}
          </div>

          {step === "idle" && (
            <div className="demo-block">
              <label htmlFor="user">Discourse username</label>
              <input
                id="user"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (error) setError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !busy) onConnect();
                }}
                placeholder="your-talk-handle"
                autoComplete="off"
                spellCheck={false}
                maxLength={20}
                aria-invalid={Boolean(error)}
              />
              {error && (
                <p className="err" role="alert">
                  <WarningCircle size={16} /> {error}
                </p>
              )}
              <button
                type="button"
                className="btn btn-primary"
                disabled={busy}
                onClick={onConnect}
              >
                <Wallet size={18} /> Connect CCC & start link
              </button>
            </div>
          )}

          {step === "connect" && (
            <div className="demo-block center">
              <CircleNotch className="spin" size={28} />
              <p>Opening CCC session…</p>
            </div>
          )}

          {(step === "challenge" || step === "sign") && (
            <div className="demo-block">
              <h3>Sign this challenge</h3>
              <pre className="challenge mono">
                {`TalkDID verify\nuser:${username.trim()}\nnonce:${nonce}\nissued:${issuedAt}`}
              </pre>
              <button
                type="button"
                className="btn btn-primary"
                disabled={busy || step === "sign"}
                onClick={onSign}
              >
                {busy || step === "sign" ? (
                  <>
                    <CircleNotch className="spin" size={18} /> Signing…
                  </>
                ) : (
                  <>Sign with wallet</>
                )}
              </button>
            </div>
          )}

          {step === "verify" && (
            <div className="demo-block center">
              <CircleNotch className="spin" size={28} />
              <p>Plugin verifying signature against did:ckb…</p>
            </div>
          )}

          {step === "done" && (
            <div className="demo-block">
              <p className="ok">
                <CheckCircle weight="fill" size={22} /> Linked successfully
              </p>
              <p className="mono did-line">{did}</p>
              <p className="muted">
                Stored on UserCustomField · badge visible on profile & posts.
              </p>
              <button type="button" className="btn btn-secondary" onClick={reset}>
                Reset demo
              </button>
            </div>
          )}
        </div>

        <aside className="demo-preview">
          <div className="forum-card tall">
            <div className="forum-card-top">
              <span>Profile preview</span>
              {step === "done" ? (
                <span className="pill ok-pill">verified</span>
              ) : (
                <span className="pill">unlinked</span>
              )}
            </div>
            <div className="forum-user">
              <div className="avatar">
                {(username || "?").slice(0, 1).toUpperCase()}
              </div>
              <div>
                <p className="forum-name">
                  {username || "username"}
                  {step === "done" && (
                    <SealCheck className="verified" weight="fill" size={18} />
                  )}
                </p>
                {step === "done" ? (
                  <p className="mono did-line">{did}</p>
                ) : (
                  <p className="muted">No did:ckb bound yet</p>
                )}
              </div>
            </div>
            <ul className="preview-list">
              <li className={progress >= 1 ? "done" : ""}>Wallet connected</li>
              <li className={progress >= 2 ? "done" : ""}>Challenge issued</li>
              <li className={progress >= 4 ? "done" : ""}>Signature verified</li>
              <li className={progress >= 5 ? "done" : ""}>Badge published</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
