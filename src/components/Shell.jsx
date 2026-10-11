import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import {
  List,
  X,
  ArrowSquareOut,
  CirclesThreePlus,
} from "@phosphor-icons/react";
import { LINKS, PROPOSAL } from "../data/grant.js";
import HelpFab from "./HelpFab.jsx";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/demo", label: "Demo" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/architecture", label: "Architecture" },
  { href: "/compare", label: "Compare" },
  { href: "/verify", label: "Verify" },
  { href: "/reviewers", label: "Reviewers" },
  { href: "/submit", label: "Submit" },
  { href: "/risks", label: "Risks" },
];

export default function Shell({ children }) {
  const [loc] = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [loc]);

  useEffect(() => {
    if (!open) return undefined;
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="shell">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="shell-grid" aria-hidden="true" />
      <header className="nav">
        <Link href="/" className="brand">
          <span className="brand-mark" aria-hidden="true">
            <CirclesThreePlus weight="duotone" size={22} />
          </span>
          <span className="brand-text">
            <strong>TalkDID</strong>
            <span>Discourse × did:ckb</span>
          </span>
        </Link>

        <nav
          id="primary-nav"
          className={`nav-links ${open ? "is-open" : ""}`}
          aria-label="Primary"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={loc === item.href ? "active" : ""}
              aria-current={loc === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            className="btn btn-ghost btn-sm"
            href={LINKS.talk}
            target="_blank"
            rel="noreferrer"
          >
            Nervos Talk
            <ArrowSquareOut size={14} />
          </a>
          <Link href="/demo" className="btn btn-primary btn-sm">
            Try demo
          </Link>
          <button
            type="button"
            className="nav-burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </header>

      <main id="main-content" className="main" tabIndex={-1}>
        {children}
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <p className="footer-brand">TalkDID</p>
            <p className="muted">{PROPOSAL.oneLiner}</p>
          </div>
          <div>
            <p className="footer-label">Kit</p>
            <ul>
              <li>
                <Link href="/demo">Interactive demo</Link>
              </li>
              <li>
                <Link href="/verify">How to verify</Link>
              </li>
              <li>
                <Link href="/submit">Spark submit kit</Link>
              </li>
              <li>
                <Link href="/how">How it works</Link>
              </li>
              <li>
                <Link href="/method">Build method</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-label">Ecosystem</p>
            <ul>
              <li>
                <a href={LINKS.talk} target="_blank" rel="noreferrer">
                  talk.nervos.org
                </a>
              </li>
              <li>
                <a href={LINKS.cccDocs} target="_blank" rel="noreferrer">
                  CCC docs
                </a>
              </li>
              <li>
                <a href={LINKS.didWip} target="_blank" rel="noreferrer">
                  did:ckb WIP-01
                </a>
              </li>
              <li>
                <a href={LINKS.sparkBoard} target="_blank" rel="noreferrer">
                  Talk Spark
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-label">Project</p>
            <ul>
              <li>
                <a href={LINKS.demo} target="_blank" rel="noreferrer">
                  Live demo
                </a>
              </li>
              <li>
                <a href={LINKS.repo} target="_blank" rel="noreferrer">
                  GitHub (private)
                </a>
              </li>
              <li>License · MIT</li>
              <li>
                <Link href="/risks">Risks & mitigations</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bar">
          <span>
            Independent Spark proposal kit · not affiliated with Nervos Foundation
            or CKB Eco Fund
          </span>
          <span>
            Ask {PROPOSAL.amountAsk} · {PROPOSAL.track}
          </span>
        </div>
      </footer>

      <HelpFab />
    </div>
  );
}
