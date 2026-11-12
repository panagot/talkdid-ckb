import { Link } from "wouter";
import { FilmStrip, ArrowSquareOut } from "@phosphor-icons/react";
import { FAQ, LINKS, PROPOSAL, VERIFY_STEPS } from "../data/grant.js";

export default function Verify() {
  return (
    <div className="page">
      <header className="page-hero">
        <p className="eyebrow">For reviewers · ≤10 min</p>
        <h1>How to verify</h1>
        <p className="lede">
          One sitting. Live CCC proves wallet control today; the Discourse plugin
          + staging forum are the funded exits at {PROPOSAL.amountAsk}.
        </p>
      </header>

      <ol className="verify-steps">
        {VERIFY_STEPS.map((c, i) => (
          <li key={c.title} className="verify-card">
            <span className="step-n mono">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <div className="verify-card-top">
                <h2>{c.title}</h2>
                <span className="verify-time">{c.time}</span>
              </div>
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
          <h2>Verify GIF</h2>
          <p className="muted">
            Target: ≤60s capture of Live CCC → verified preview. Slot ready for
            M2 deliverable (and for the Talk post).
          </p>
        </div>
        <div className="gif-slot" role="img" aria-label="Verify GIF placeholder">
          <FilmStrip size={28} weight="duotone" />
          <div>
            <strong>Placeholder — record after staging is up</strong>
            <p className="muted">
              Suggested path: Demo → Connect (testnet) → Get challenge → Sign →
              profile flips to verified. Drop <code>public/verify.gif</code>{" "}
              here when ready.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>What is / is not claimed</h2>
        </div>
        <div className="two-col">
          <article className="panel accent-panel">
            <h3>Claimed</h3>
            <ul>
              <li>Live CCC: real sign + server verify on this kit</li>
              <li>Scoped M1/M2 at {PROPOSAL.amountAsk}</li>
              <li>Non-overlap with DAO Web5, Vellum, bbs.fans</li>
              <li>Staging Discourse is the M2 acceptance surface</li>
            </ul>
          </article>
          <article className="panel">
            <h3>Not claimed</h3>
            <ul>
              <li>Live install on production talk.nervos.org today</li>
              <li>Vite kit = the funded Discourse plugin</li>
              <li>Replacement for Metaforo / DAO login</li>
              <li>Fiber tips or vote widgets in M1/M2</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Repos</h2>
        </div>
        <div className="link-row">
          <a
            className="btn btn-secondary btn-sm"
            href={LINKS.pluginRepo}
            target="_blank"
            rel="noreferrer"
          >
            Plugin stub <ArrowSquareOut size={14} />
          </a>
          <a
            className="btn btn-ghost btn-sm"
            href={LINKS.sparkDidFeedback}
            target="_blank"
            rel="noreferrer"
          >
            Committee redirect <ArrowSquareOut size={14} />
          </a>
          <Link href="/demo" className="btn btn-primary btn-sm">
            Open Live CCC
          </Link>
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
