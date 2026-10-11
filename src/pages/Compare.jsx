import { COMPARE_ROWS } from "../data/grant.js";

export default function Compare() {
  return (
    <div className="page">
      <header className="page-hero">
        <p className="eyebrow">Positioning</p>
        <h1>Why not the alternatives</h1>
        <p className="lede">
          TalkDID is deliberately small: bind identity where CKB already
          discusses — instead of wallet-only proofs or a new forum nobody joins.
        </p>
      </header>

      <div className="table-wrap">
        <table className="compare-table">
          <thead>
            <tr>
              <th>Axis</th>
              <th className="hl">TalkDID</th>
              <th>Wallet-only</th>
              <th>New forum</th>
            </tr>
          </thead>
          <tbody>
            {COMPARE_ROWS.map((r) => (
              <tr key={r.axis}>
                <th scope="row">{r.axis}</th>
                <td className="hl">{r.talkdid}</td>
                <td>{r.walletOnly}</td>
                <td>{r.newForum}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
