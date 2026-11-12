import { Link } from "wouter";
import { ECOSYSTEM, LINKS, TALK_SURFACE } from "../data/grant.js";

export default function Ecosystem() {
  return (
    <div className="page">
      <header className="page-hero">
        <p className="eyebrow">Network reality</p>
        <h1>Where TalkDID sits</h1>
        <p className="lede">
          Nervos Talk is a public Discourse forum with deep categories —
          Infrastructure, Applications, DAOs & Funding, and more. Identity on
          Talk today is a Discourse account. On-chain identity is{" "}
          <em>did:ckb</em>. TalkDID is the bridge — not a second forum and not a
          DAO login rewrite.
        </p>
      </header>

      <section className="section">
        <div className="section-head">
          <h2>Talk surfaces that benefit</h2>
          <p className="muted">
            Categories on{" "}
            <a href={LINKS.talk} target="_blank" rel="noreferrer">
              talk.nervos.org
            </a>
          </p>
        </div>
        <div className="tri-grid four">
          {TALK_SURFACE.map((s) => (
            <article key={s.name} className="panel">
              <h3>{s.name}</h3>
              <p>{s.blurb}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Complementary — not competing</h2>
        </div>
        <div className="table-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Surface</th>
                <th>Role today</th>
                <th>Overlap risk</th>
                <th className="hl">TalkDID stance</th>
              </tr>
            </thead>
            <tbody>
              {ECOSYSTEM.map((e) => (
                <tr key={e.name}>
                  <th scope="row">{e.name}</th>
                  <td>{e.role}</td>
                  <td>{e.overlap}</td>
                  <td className="hl">{e.talkdid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>References</h2>
        </div>
        <ul className="ref-list">
          <li>
            <a href={LINKS.didWip} target="_blank" rel="noreferrer">
              WIP-01 — did:ckb method
            </a>
          </li>
          <li>
            <a href={LINKS.cccDocs} target="_blank" rel="noreferrer">
              CCC — wallet + JS SDK
            </a>
          </li>
          <li>
            <a href={LINKS.vellum} target="_blank" rel="noreferrer">
              Vellum — did:ckb dashboard / SDK discussion
            </a>
          </li>
          <li>
            <a href={LINKS.daoWeb5} target="_blank" rel="noreferrer">
              DAO v1.1 Web5 identity review
            </a>
          </li>
        </ul>
      </section>

      <div className="cta-band">
        <div>
          <h2>See the bind flow</h2>
          <p className="muted">Live CCC + Talk preview on this demo site.</p>
        </div>
        <Link href="/demo" className="btn btn-primary">
          Open demo
        </Link>
      </div>
    </div>
  );
}
