import { METHOD_STEPS, PROPOSAL } from "../data/grant.js";

export default function Method() {
  return (
    <div className="page">
      <header className="page-hero">
        <p className="eyebrow">Delivery</p>
        <h1>Method & build plan</h1>
        <p className="lede">
          ~5 weeks, two payout gates at {PROPOSAL.amountAsk}. Prefer boring
          Discourse plugin patterns over novel cryptography.
        </p>
      </header>

      <div className="method-grid">
        <article className="panel">
          <h2>Principles</h2>
          <ul>
            <li>Reuse CCC + did:ckb docs — do not invent a new DID method.</li>
            <li>Pin Discourse version; develop in official Docker dev image.</li>
            <li>Every verify path has a unit test with fixed vectors.</li>
            <li>Staging before any Talk production conversation.</li>
            <li>MIT + public commits from day one of funding.</li>
          </ul>
        </article>
        <article className="panel">
          <h2>Week sketch</h2>
          <ul className="week-list">
            <li>
              <strong>W1</strong> Plugin skeleton, settings, custom fields
            </li>
            <li>
              <strong>W2</strong> Challenge API + CCC client panel
            </li>
            <li>
              <strong>W3</strong> Signature verify + M1 checklist / tests
            </li>
            <li>
              <strong>W4</strong> Badge UI + unlink/re-link
            </li>
            <li>
              <strong>W5</strong> Staging Discourse + verify GIF + Spark post
            </li>
          </ul>
        </article>
      </div>

      <ol className="steps compact">
        {METHOD_STEPS.map((s) => (
          <li key={s.n} className="step">
            <span className="step-n mono">{s.n}</span>
            <div>
              <h3>{s.title}</h3>
              <p className="muted">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="muted center-note">
        Stretch (not required for payout): Fiber tip URL beside the badge. Core
        ask remains {PROPOSAL.amountAsk} for link + verify + OSS.
      </p>
    </div>
  );
}
