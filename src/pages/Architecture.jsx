import { ARCH_EDGES, ARCH_NODES, TECH_STACK } from "../data/grant.js";

export default function Architecture() {
  return (
    <div className="page">
      <header className="page-hero">
        <p className="eyebrow">System</p>
        <h1>Architecture</h1>
        <p className="lede">
          Rails plugin owns challenge / verify / storage. Theme Component renders
          the badge. Cryptographic truth from did:ckb (WIP-01) via CCC — no custom
          L1 work.
        </p>
      </header>

      <div className="arch-diagram" role="img" aria-label="TalkDID architecture">
        {ARCH_NODES.map((n) => (
          <div key={n.id} className={`arch-node arch-${n.id}`}>
            <strong>{n.label}</strong>
            <span>{n.sub}</span>
          </div>
        ))}
        <svg className="arch-svg" viewBox="0 0 640 200" aria-hidden="true">
          <defs>
            <marker
              id="arr"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L6,3 L0,6 Z" fill="var(--signal)" />
            </marker>
          </defs>
          <path
            d="M90 100 H200"
            stroke="var(--signal)"
            strokeWidth="1.5"
            fill="none"
            markerEnd="url(#arr)"
          />
          <path
            d="M280 70 V40 H360"
            stroke="var(--mint)"
            strokeWidth="1.5"
            fill="none"
            markerEnd="url(#arr)"
          />
          <path
            d="M280 130 V160 H360"
            stroke="var(--mint)"
            strokeWidth="1.5"
            fill="none"
            markerEnd="url(#arr)"
          />
          <path
            d="M440 100 H540"
            stroke="var(--signal)"
            strokeWidth="1.5"
            fill="none"
            markerEnd="url(#arr)"
          />
        </svg>
      </div>

      <div className="two-col">
        <article className="panel">
          <h2>Message path</h2>
          <ol className="edge-list">
            {ARCH_EDGES.map((e) => (
              <li key={e}>
                <code>{e}</code>
              </li>
            ))}
          </ol>
        </article>
        <article className="panel">
          <h2>Components</h2>
          <ul className="stack-list">
            {TECH_STACK.map((t) => (
              <li key={t.name}>
                <strong>{t.name}</strong>
                <span className="muted">{t.role}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="callout">
        <h3>Trust boundary</h3>
        <p>
          Discourse remains the session authority for posting. TalkDID only
          asserts “this Talk user controlled this did:ckb at link time.” It does
          not DAO votes or replace Metaforo Web5. Mods still moderate
          content; the badge reduces impersonation and screenshot theater.
        </p>
      </div>
    </div>
  );
}
