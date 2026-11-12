import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  SealCheck,
  ShieldCheck,
  UserCircle,
  ChatsCircle,
} from "@phosphor-icons/react";
import DeskMetrics from "../components/DeskMetrics.jsx";
import { NON_OVERLAP, PROPOSAL } from "../data/grant.js";
import usePageTitle from "../hooks/usePageTitle.js";

const HOME_METRICS = [
  { label: "Live CCC", value: "Ready", sub: "Sign · verify · resolve" },
  { label: "Surface", value: "Talk", sub: "Nervos Discourse" },
  { label: "Badge", value: "did:ckb", sub: "Profile + posts" },
  { label: "Plugin", value: "M1–M2", sub: "Installable artifact" },
];

const fade = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
};

const POSTS = [
  {
    user: "newcomer",
    badge: false,
    topic: "First post — feedback welcome",
    meta: "General · 2h",
  },
  {
    user: "talk-builder",
    badge: true,
    did: "did:ckb:…a7f3",
    topic: "Fiber node notes from last week",
    meta: "Infrastructure · 5h",
  },
  {
    user: "mod-anna",
    badge: true,
    did: "did:ckb:…91c2",
    topic: "Community sync — funding & nodes",
    meta: "DAOs & Funding · 1d",
  },
];

export default function Home() {
  usePageTitle("Overview");

  return (
    <div className="page home">
      <section className="hero hero-stage">
        <motion.div className="hero-copy" {...fade}>
          <p className="eyebrow">Nervos Talk · did:ckb</p>
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
            <Link href="/how" className="btn btn-secondary">
              How it works
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
                <ChatsCircle size={14} weight="fill" /> Preview
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

      <DeskMetrics items={HOME_METRICS} label="Kit status" />

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
              Forum accounts are ordinary Discourse logins. Anyone can create
              one; mods rely on social trust.
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
          <h2>Fits beside what already exists</h2>
          <p className="muted">
            did:ckb lives elsewhere today. TalkDID is for Nervos Talk itself.
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

      <section className="cta-band">
        <div>
          <h2>Try the crypto path</h2>
          <p className="muted">{PROPOSAL.demoNote}</p>
        </div>
        <div className="hero-cta">
          <Link href="/demo" className="btn btn-primary">
            Open demo
          </Link>
          <Link href="/architecture" className="btn btn-secondary">
            Architecture
          </Link>
        </div>
      </section>
    </div>
  );
}
