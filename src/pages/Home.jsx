import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ChatsCircle,
  LinkSimple,
  ArrowRight,
  SealCheck,
} from "@phosphor-icons/react";
import { MILESTONES, PROPOSAL, TECH_STACK } from "../data/grant.js";

const fade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45 },
};

export default function Home() {
  return (
    <div className="page home">
      <section className="hero">
        <motion.div className="hero-copy" {...fade}>
          <p className="eyebrow">CKB Eco Fund · Spark</p>
          <h1>
            TalkDID
            <span className="hero-sub">
              Bind <em>did:ckb</em> to Nervos Talk
            </span>
          </h1>
          <p className="lede">{PROPOSAL.oneLiner}</p>
          <div className="hero-cta">
            <Link href="/demo" className="btn btn-primary">
              Interactive demo <ArrowRight size={18} />
            </Link>
            <Link href="/submit" className="btn btn-secondary">
              Spark submit kit
            </Link>
          </div>
          <div className="hero-meta">
            <span>
              <strong>{PROPOSAL.amountAsk}</strong> ask
            </span>
            <span>
              <strong>2</strong> milestones
            </span>
            <span>
              <strong>OSS</strong> Discourse plugin
            </span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className="forum-card">
            <div className="forum-card-top">
              <ChatsCircle size={20} weight="duotone" />
              <span>Nervos Talk</span>
              <span className="pill">profile</span>
            </div>
            <div className="forum-user">
              <div className="avatar">T</div>
              <div>
                <p className="forum-name">
                  talk-builder
                  <SealCheck className="verified" weight="fill" size={18} />
                </p>
                <p className="mono did-line">did:ckb:…a7f3</p>
              </div>
            </div>
            <div className="forum-flow">
              <div className="flow-node">
                <LinkSimple size={16} /> Discourse
              </div>
              <div className="flow-line" />
              <div className="flow-node accent">
                <ShieldCheck size={16} /> did:ckb
              </div>
            </div>
            <p className="forum-caption">
              Verified identity on the forum CKB already uses.
            </p>
          </div>
        </motion.div>
      </section>

      <div className="callout signal-callout home-signal">
        <h3>Why reviewers asked for this</h3>
        <p>{PROPOSAL.committeeSignal}</p>
        <div className="hero-cta" style={{ marginBottom: 0 }}>
          <Link href="/ecosystem" className="btn btn-secondary btn-sm">
            Ecosystem map
          </Link>
          <Link href="/verify" className="btn btn-ghost btn-sm">
            How to verify
          </Link>
        </div>
      </div>

      <section className="section">
        <div className="section-head">
          <h2>Why this, why now</h2>
          <p className="muted">
            App-layer tooling on Talk — not another protocol island.
          </p>
        </div>
        <div className="tri-grid">
          <article className="panel">
            <h3>Problem</h3>
            <p>{PROPOSAL.problem}</p>
          </article>
          <article className="panel">
            <h3>Solution</h3>
            <p>{PROPOSAL.solution}</p>
          </article>
          <article className="panel accent-panel">
            <h3>Spark fit</h3>
            <p>{PROPOSAL.whySpark}</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Milestones</h2>
          <p className="muted">Scoped for a small Spark grant — ship, then extend.</p>
        </div>
        <div className="mile-grid">
          {MILESTONES.map((m) => (
            <article key={m.id} className="mile-card">
              <div className="mile-top">
                <span className="mono">{m.id.toUpperCase()}</span>
                <span className="amount">{m.amount}</span>
              </div>
              <h3>{m.title}</h3>
              <p className="muted">{m.weeks}</p>
              <ul>
                {m.deliverables.slice(0, 4).map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <Link href="/submit" className="text-link">
                Full deliverables →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Stack</h2>
        </div>
        <div className="stack-row">
          {TECH_STACK.map((t) => (
            <div key={t.name} className="stack-chip">
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div>
          <h2>Review the demo, then the submit kit</h2>
          <p className="muted">{PROPOSAL.demoNote}</p>
        </div>
        <div className="hero-cta">
          <Link href="/demo" className="btn btn-primary">
            Open demo
          </Link>
          <Link href="/reviewers" className="btn btn-secondary">
            Reviewer brief
          </Link>
        </div>
      </section>
    </div>
  );
}
