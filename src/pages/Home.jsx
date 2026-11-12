import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  SealCheck,
  ShieldCheck,
  UserCircle,
  ChatsCircle,
} from "@phosphor-icons/react";
import { MILESTONES, NON_OVERLAP, PROPOSAL } from "../data/grant.js";

const fade = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
};

const POSTS = [
  {
    user: "newcomer",
    badge: false,
    topic: "First Spark proposal — feedback welcome",
    meta: "Spark Program · 2h",
  },
  {
    user: "talk-builder",
    badge: true,
    did: "did:ckb:…a7f3",
    topic: "TalkDID staging checklist for reviewers",
    meta: "Infrastructure · 5h",
  },
  {
    user: "mod-anna",
    badge: true,
    did: "did:ckb:…91c2",
    topic: "Weekly sync notes — funding & nodes",
    meta: "DAOs & Funding · 1d",
  },
];

export default function Home() {
  return (
    <div className="page home">
      <section className="hero hero-stage">
        <motion.div className="hero-copy" {...fade}>
          <p className="eyebrow">CKB Eco Fund · Spark</p>
          <h1>
            TalkDID
            <span className="hero-sub">
              Prove your wallet on <em>Nervos Talk</em>
            </span>
          </h1>
          <p className="lede">
            Link a Discourse account to <em>did:ckb</em>. Mods see a verified
            badge — not a screenshot in a DM.
          </p>
          <div className="hero-cta">
            <Link href="/demo" className="btn btn-primary">
              Try the live demo <ArrowRight size={18} />
            </Link>
            <Link href="/submit" className="btn btn-secondary">
              Spark submit kit
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="talk-stage"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="talk-chrome" aria-hidden="true">
            <div className="talk-chrome-bar">
              <span className="talk-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="talk-url">talk.nervos.org</span>
              <span className="talk-live">
                <ChatsCircle size={14} weight="fill" /> Live preview
              </span>
            </div>

            <div className="talk-board">
              <div className="talk-board-head">
                <div>
                  <p className="talk-board-kicker">Latest</p>
                  <p className="talk-board-title">Identity on the forum itself</p>
                </div>
                <div className="talk-bind-chip">
                  <ShieldCheck size={16} weight="fill" />
                  Badge from did:ckb
                </div>
              </div>

              <ul className="talk-posts">
                {POSTS.map((p) => (
                  <li key={p.user + p.topic} className="talk-post">
                    <div className={`avatar sm ${p.badge ? "verified-ring" : ""}`}>
                      {p.user.slice(0, 1).toUpperCase()}
                    </div>
                    <div className="talk-post-body">
                      <div className="talk-post-meta">
                        <span className="talk-user">
                          {p.user}
                          {p.badge && (
                            <SealCheck className="verified" weight="fill" size={16} />
                          )}
                        </span>
                        <span className="talk-when">{p.meta}</span>
                      </div>
                      <p className="talk-topic">{p.topic}</p>
                      {p.badge ? (
                        <p className="mono did-line compact">{p.did}</p>
                      ) : (
                        <p className="talk-unlinked">No did:ckb bound</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="signal-strip">
        <p className="signal-label">Committee signal</p>
        <p>{PROPOSAL.committeeSignal}</p>
        <div className="hero-cta signal-actions">
          <Link href="/ecosystem" className="btn btn-ghost btn-sm">
            Ecosystem map
          </Link>
          <Link href="/verify" className="btn btn-ghost btn-sm">
            How to verify
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Before → after</h2>
          <p className="muted">Same forum. One cryptographic link.</p>
        </div>
        <div className="before-after">
          <article className="ba-col">
            <p className="ba-label">Today</p>
            <h3>
              <UserCircle size={22} /> Username only
            </h3>
            <p>
              Spark threads, bug reports, and funding asks rely on social trust.
              Anyone can mint a new Discourse account.
            </p>
          </article>
          <div className="ba-arrow" aria-hidden="true">
            →
          </div>
          <article className="ba-col ba-after">
            <p className="ba-label">With TalkDID</p>
            <h3>
              <SealCheck size={22} weight="fill" /> Account ↔ did:ckb
            </h3>
            <p>
              CCC sign → plugin verify → badge on profile and posts. Mods check
              the mark, not a DM screenshot.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Not another DID tutorial</h2>
          <p className="muted">
            Same ecosystem pieces — different job on Talk itself.
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
          <h2>Scoped for Spark</h2>
          <p className="muted">
            {PROPOSAL.amountAsk} · two milestones · OSS Discourse plugin — not a
            protocol rewrite.
          </p>
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

      <section className="cta-band">
        <div>
          <h2>Review the crypto path, then the paste kit</h2>
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
