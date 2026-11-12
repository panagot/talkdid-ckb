import { Link } from "wouter";
import { FilmStrip } from "@phosphor-icons/react";
import DeskMetrics from "../components/DeskMetrics.jsx";
import { FAQ, VERIFY_STEPS } from "../data/grant.js";
import usePageTitle from "../hooks/usePageTitle.js";

const VERIFY_METRICS = [
  { label: "Path", value: "≤10 min", sub: "Connect → sign → badge" },
  { label: "Network", value: "Testnet", sub: "Preferred first run" },
  { label: "Live CCC", value: "Real", sub: "Wallet + server" },
  { label: "Prod Talk", value: "Not yet", sub: "Plugin is the ship" },
];

export default function Verify() {
  usePageTitle("Verify");

  return (
    <div className="page">
      <header className="page-hero">
        <p className="eyebrow">Verify path</p>
        <h1>How to verify</h1>
        <p className="lede">
          Live CCC proves wallet control on this demo. The Discourse plugin is
          not installed on production talk.nervos.org.
        </p>
      </header>

      <DeskMetrics items={VERIFY_METRICS} label="Verify status" />

      <div className="verify-table" role="table" aria-label="Verify checklist">
        <div className="verify-table-head" role="row">
          <span role="columnheader">Step</span>
          <span role="columnheader">Action</span>
          <span role="columnheader">Time</span>
          <span role="columnheader">Go</span>
        </div>
        {VERIFY_STEPS.map((c, i) => (
          <div key={c.title} className="verify-table-row" role="row">
            <span className="mono" role="cell">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div role="cell">
              <strong>{c.title}</strong>
              <p className="muted">{c.body}</p>
            </div>
            <span className="verify-time" role="cell">
              {c.time}
            </span>
            <span role="cell">
              <Link href={c.href} className="text-link">
                Open →
              </Link>
            </span>
          </div>
        ))}
      </div>

      <section className="section">
        <div className="section-head">
          <h2>Verify capture</h2>
          <p className="muted">
            Optional short recording of Live CCC → verified preview.
          </p>
        </div>
        <div className="gif-slot" role="img" aria-label="Verify GIF placeholder">
          <FilmStrip size={28} weight="duotone" />
          <div>
            <strong>Placeholder</strong>
            <p className="muted">
              Path: Demo → Connect (testnet) → Get challenge → Sign → profile
              flips to verified.
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
              <li>Clear UX for Discourse ↔ did:ckb bind</li>
              <li>Non-overlap with DAO Web5, Vellum, bbs.fans</li>
              <li>Intended product: installable Discourse plugin</li>
            </ul>
          </article>
          <article className="panel">
            <h3>Not claimed</h3>
            <ul>
              <li>Live install on production talk.nervos.org</li>
              <li>This Vite site is the Discourse plugin</li>
              <li>Replacement for Metaforo / DAO login</li>
              <li>Fiber tips or governance voting rights</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Repos</h2>
        </div>
        <div className="link-row">
          <Link href="/demo" className="btn btn-primary btn-sm">
            Open Live CCC
          </Link>
          <Link href="/ecosystem" className="btn btn-secondary btn-sm">
            Ecosystem map
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
    </div>
  );
}
