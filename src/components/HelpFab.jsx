import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Question, X } from "@phosphor-icons/react";
import { FAQ } from "../data/grant.js";

export default function HelpFab() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className={`help-fab ${open ? "is-open" : ""}`}>
      {open && (
        <div className="help-panel" role="dialog" aria-label="TalkDID help">
          <div className="help-panel-head">
            <strong>Quick FAQ</strong>
            <button
              type="button"
              className="icon-btn"
              aria-label="Close help"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </div>
          <ul className="help-list">
            {FAQ.slice(0, 4).map((f) => (
              <li key={f.q}>
                <p className="help-q">{f.q}</p>
                <p className="muted">{f.a}</p>
              </li>
            ))}
          </ul>
          <div className="help-links">
            <Link href="/verify" onClick={() => setOpen(false)}>
              How to verify →
            </Link>
            <Link href="/ecosystem" onClick={() => setOpen(false)}>
              Ecosystem map →
            </Link>
          </div>
        </div>
      )}
      <button
        type="button"
        className="help-btn"
        aria-expanded={open}
        aria-label={open ? "Close help" : "Open help"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={22} weight="bold" /> : <Question size={22} weight="bold" />}
      </button>
    </div>
  );
}
