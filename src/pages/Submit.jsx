import { useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";
import {
  BUILDER,
  MILESTONES,
  NON_OVERLAP,
  PROPOSAL,
  SUBMIT_FIELDS,
} from "../data/grant.js";

function CopyBlock({ label, value }) {
  const [ok, setOk] = useState(false);

  async function copy() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const ta = document.createElement("textarea");
        ta.value = value;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setOk(true);
      setTimeout(() => setOk(false), 1600);
    } catch {
      setOk(false);
    }
  }

  return (
    <div className="copy-block">
      <div className="copy-head">
        <h3>{label}</h3>
        <button type="button" className="btn btn-ghost btn-sm" onClick={copy}>
          {ok ? (
            <>
              <Check size={14} /> Copied
            </>
          ) : (
            <>
              <Copy size={14} /> Copy
            </>
          )}
        </button>
      </div>
      <pre>{value}</pre>
    </div>
  );
}

export default function Submit() {
  const fullPack = [
    `Project: ${SUBMIT_FIELDS.projectName}`,
    `Category: ${SUBMIT_FIELDS.category}`,
    `Budget: ${SUBMIT_FIELDS.budget}`,
    "",
    "Short description:",
    SUBMIT_FIELDS.shortDescription,
    "",
    "Problem:",
    SUBMIT_FIELDS.problem,
    "",
    "Solution:",
    SUBMIT_FIELDS.solution,
    "",
    "Why Nervos / Spark:",
    SUBMIT_FIELDS.whyNervos,
    "",
    "Non-overlap:",
    SUBMIT_FIELDS.nonOverlap,
    "",
    "Milestones:",
    SUBMIT_FIELDS.milestones,
    "",
    "Team:",
    SUBMIT_FIELDS.team,
    "",
    "Links:",
    SUBMIT_FIELDS.links,
  ].join("\n");

  return (
    <div className="page">
      <header className="page-hero">
        <p className="eyebrow">Spark form kit</p>
        <h1>Paste-ready proposal</h1>
        <p className="lede">
          Ask {PROPOSAL.amountAsk} · typical Spark scale. Copy into a Talk post
          under Spark Program with tag <code>Spark-program</code>.
        </p>
      </header>

      <div className="submit-meta">
        <div>
          <span className="muted">Ask</span>
          <strong>{PROPOSAL.amountAsk}</strong>
        </div>
        <div>
          <span className="muted">Track</span>
          <strong>{PROPOSAL.track}</strong>
        </div>
        <div>
          <span className="muted">Team</span>
          <strong>{BUILDER.label}</strong>
        </div>
      </div>

      <CopyBlock label="Full pack (all fields)" value={fullPack} />
      <CopyBlock label="Project name" value={SUBMIT_FIELDS.projectName} />
      <CopyBlock label="Short description" value={SUBMIT_FIELDS.shortDescription} />
      <CopyBlock label="Problem" value={SUBMIT_FIELDS.problem} />
      <CopyBlock label="Solution" value={SUBMIT_FIELDS.solution} />
      <CopyBlock label="Why Spark / Nervos" value={SUBMIT_FIELDS.whyNervos} />
      <CopyBlock label="Non-overlap" value={SUBMIT_FIELDS.nonOverlap} />
      <CopyBlock label="Milestones" value={SUBMIT_FIELDS.milestones} />
      <CopyBlock label="Budget" value={SUBMIT_FIELDS.budget} />
      <CopyBlock label="Team" value={SUBMIT_FIELDS.team} />
      <CopyBlock label="Links" value={SUBMIT_FIELDS.links} />

      <section className="section">
        <div className="section-head">
          <h2>Non-overlap at a glance</h2>
          <p className="muted">
            Same stack, different job — avoid DID Quickstart / DAO widget reject
            patterns.
          </p>
        </div>
        <div className="overlap-grid">
          {NON_OVERLAP.map((row) => (
            <article key={row.name} className="panel">
              <h3>{row.name}</h3>
              <p className="muted">
                <strong>Existing:</strong> {row.theirs}
              </p>
              <p>
                <strong>TalkDID:</strong> {row.ours}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Milestone detail</h2>
        </div>
        <div className="mile-grid">
          {MILESTONES.map((m) => (
            <article key={m.id} className="panel">
              <div className="mile-top">
                <span className="mono">{m.id.toUpperCase()}</span>
                <span className="amount">{m.amount}</span>
              </div>
              <h3>{m.title}</h3>
              <p className="muted">{m.weeks}</p>
              <ul>
                {m.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
