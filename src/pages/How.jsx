import { Link } from "wouter";
import { METHOD_STEPS } from "../data/grant.js";
import usePageTitle from "../hooks/usePageTitle.js";

export default function How() {
  usePageTitle("How");
  return (
    <div className="page">
      <header className="page-hero">
        <p className="eyebrow">Product flow</p>
        <h1>How TalkDID works</h1>
        <p className="lede">
          From a normal Talk account to a cryptographically bound <em>did:ckb</em>{" "}
          — plugin for trust, Theme Component for the badge. No new forum.
        </p>
      </header>

      <ol className="steps">
        {METHOD_STEPS.map((s) => (
          <li key={s.n} className="step">
            <span className="step-n mono">{s.n}</span>
            <div>
              <h2>{s.title}</h2>
              <p className="muted">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="callout">
        <h3>Important</h3>
        <p>
          This demo is not installed on production talk.nervos.org. Admins would
          need to install the Discourse plugin. Try Live CCC and the Talk preview
          to see the intended flow.
        </p>
        <Link href="/demo" className="btn btn-primary btn-sm">
          Open demo
        </Link>
      </div>
    </div>
  );
}
