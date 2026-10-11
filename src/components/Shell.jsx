import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import {
  List,
  X,
  ArrowSquareOut,
  CirclesThreePlus,
} from "@phosphor-icons/react";
import { CONTACT, LINKS, PROPOSAL } from "../data/grant.js";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/how", label: "How" },
  { href: "/demo", label: "Demo" },
  { href: "/architecture", label: "Architecture" },
  { href: "/compare", label: "Compare" },
  { href: "/reviewers", label: "Reviewers" },
  { href: "/method", label: "Method" },
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
            <p className="footer-label">Proposal</p>
            <ul>
              <li>
                <Link href="/submit">Spark submit kit</Link>
              </li>
              <li>
                <Link href="/reviewers">For reviewers</Link>
              </li>
              <li>
                <Link href="/risks">Risks & mitigations</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-label">References</p>
            <ul>
              <li>
                <a href={LINKS.talk} target="_blank" rel="noreferrer">
                  talk.nervos.org
                </a>
              </li>
              <li>
                <a href={LINKS.ccc} target="_blank" rel="noreferrer">
                  CCC
                </a>
              </li>
              <li>
                <a href={LINKS.sparkBoard} target="_blank" rel="noreferrer">
                  Talk Spark board
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-label">Contact</p>
            <ul>
              <li>{CONTACT.name}</li>
              <li>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li>{CONTACT.telegram}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bar">
          <span>CKB Eco Fund · Spark demo kit · not affiliated with Nervos Foundation</span>
          <span>Ask {PROPOSAL.amountAsk} · {PROPOSAL.track}</span>
        </div>
      </footer>
    </div>
  );
}
