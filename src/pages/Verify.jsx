import { Link } from "wouter";
import { FAQ, LINKS, PROPOSAL, VERIFY_CHECKS } from "../data/grant.js";

export default function Verify() {
  return (
    <div className="page">
      <header className="page-hero">
        <p className="eyebrow">For reviewers</p>
        <h1>How to verify this kit</h1>
        <p className="lede">
          Honest claims only: this is a Spark companion site. The plugin is the
          deliverable. Use this checklist to stress-test fit before reading the
          paste kit.
        </p>
      </header>

      <ol className="verify-steps">
        {VERIFY_CHECKS.map((c, i) => (
          <li key={c.title} className="verify-card">
            <span className="step-n mono">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h2>{c.title}</h2>
              <p className="muted">{c.body}</p>
              <Link href={c.href} className="text-link">
                Open →
              </Link>
            </div>
          </li>
        ))}
      </ol>

      <section className="section">
        <div className="section-head">
          <h2>What is / is not claimed</h2>
        </div>
        <div className="two-col">
          <article className="panel accent-panel">
            <h3>Claimed</h3>
            <ul>
              <li>Clear UX for Discourse ↔ did:ckb bind</li>
              <li>Scoped M1/M2 at {PROPOSAL.amountAsk}</li>
              <li>Non-overlap with DAO Web5 & Vellum stated</li>
              <li>Staging Discourse is the acceptance surface</li>
            </ul>
          </article>
          <article className="panel">
            <h3>Not claimed</h3>
            <ul>
              <li>Live install on production Talk today</li>
              <li>Real CCC signatures in this Vite mock</li>
              <li>Replacement for Metaforo / DAO login</li>
              <li>Fiber tips or vote widgets in M1/M2</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>FAQ</h2>
        </div>
        <div className="faq-grid">
          {FAQ.map((f) => (
            <article key={f.q} className="panel">
              <h3>{f.q}</h3>
              <p className="muted">{f.a}</p>
            </article>
          ))}
        </div>
      </section>

      <p className="muted center-note">
        Live kit:{" "}
        <a href={LINKS.demo} target="_blank" rel="noreferrer">
          {LINKS.demo}
        </a>
      </p>
    </div>
  );
}
