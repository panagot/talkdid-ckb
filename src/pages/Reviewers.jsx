import { Link } from "wouter";
import { CheckSquare, Eye, GitBranch, SealCheck } from "@phosphor-icons/react";
import { MILESTONES, PROPOSAL } from "../data/grant.js";

const CHECKS = [
  {
    icon: Eye,
    title: "Click the demo",
    body: "Walk the challenge → sign → badge flow. Confirm UX is clear without a real wallet.",
    href: "/demo",
  },
  {
    icon: GitBranch,
    title: "Read milestones",
    body: "M1 plugin + verify path; M2 badge + staging + OSS. Total ask matches Spark scale.",
    href: "/submit",
  },
  {
    icon: SealCheck,
    title: "Check Spark fit",
    body: "Talk-native, app-layer, did:ckb useful on the forum Spark itself uses.",
    href: "/compare",
  },
  {
    icon: CheckSquare,
    title: "Risks page",
    body: "Install gate, DID edge cases, opt-in — each with a mitigation, not hand-waving.",
    href: "/risks",
  },
];

export default function Reviewers() {
  return (
    <div className="page">
      <header className="page-hero">
        <p className="eyebrow">For Eco Fund / Spark reviewers</p>
        <h1>How to evaluate TalkDID</h1>
        <p className="lede">
          This site is the proposal companion: product story, mock verification,
          and paste-ready Spark fields. The funded artifact is an open-source
          Discourse plugin — not this Vite kit alone.
        </p>
      </header>

      <div className="review-grid">
        {CHECKS.map((c) => (
          <Link key={c.title} href={c.href} className="review-card">
            <c.icon size={24} weight="duotone" />
            <h2>{c.title}</h2>
            <p className="muted">{c.body}</p>
          </Link>
        ))}
      </div>

      <section className="section">
        <div className="section-head">
          <h2>Acceptance snapshot</h2>
        </div>
        <div className="mile-grid">
          {MILESTONES.map((m) => (
            <article key={m.id} className="panel">
              <div className="mile-top">
                <span className="mono">{m.id.toUpperCase()}</span>
                <span className="amount">{m.amount}</span>
              </div>
              <h3>{m.title}</h3>
              <ul>
                {m.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <div className="callout">
        <h3>One-line verdict we hope for</h3>
        <p>
          “Small, Talk-native, makes did:ckb useful where CKB already gathers —
          scoped to {PROPOSAL.amountAsk} with clear M1/M2 exits.”
        </p>
      </div>
    </div>
  );
}
