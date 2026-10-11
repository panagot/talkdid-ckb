import { RISKS } from "../data/grant.js";

export default function Risks() {
  return (
    <div className="page">
      <header className="page-hero">
        <p className="eyebrow">Honesty section</p>
        <h1>Risks & mitigations</h1>
        <p className="lede">
          What can go wrong at Spark scale — and how the plan absorbs it without
          rewriting the grant mid-flight.
        </p>
      </header>

      <div className="risk-list">
        {RISKS.map((r) => (
          <article key={r.risk} className="risk-row">
            <div>
              <h2>{r.risk}</h2>
            </div>
            <div>
              <p className="muted-label">Mitigation</p>
              <p>{r.mitigation}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
