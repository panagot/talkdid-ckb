import { Link } from "wouter";
import { METHOD_STEPS, PROPOSAL } from "../data/grant.js";

export default function How() {
  return (
    <div className="page">
      <header className="page-hero">
        <p className="eyebrow">Product flow</p>
        <h1>How TalkDID works</h1>
        <p className="lede">
          From a normal Talk account to a cryptographically bound <em>did:ckb</em>{" "}
          — plugin for trust, Theme Component for the badge. No new forum.
        </p>
      </header>

      <ol className="steps">
        {METHOD_STEPS.map((s) => (
          <li key={s.n} className="step">
            <span className="step-n mono">{s.n}</span>
            <div>
              <h2>{s.title}</h2>
              <p className="muted">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="callout">
        <h3>What reviewers should expect</h3>
        <p>
          M1–M2 deliver a working plugin + staging Discourse — not a production
          install on talk.nervos.org (that needs Talk admins). This kit proves
          the UX and the grant scope. Ask: {PROPOSAL.amountAsk}.
        </p>
        <Link href="/demo" className="btn btn-primary btn-sm">
          Run the mock flow
        </Link>
      </div>
    </div>
  );
}
