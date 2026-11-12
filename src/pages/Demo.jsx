import { useState } from "react";
import LiveLink from "../components/LiveLink.jsx";
import TalkDiscoursePreview from "../components/TalkDiscoursePreview.jsx";

const TABS = [
  { id: "live", label: "Live CCC" },
  { id: "talk", label: "Talk preview" },
];

export default function Demo() {
  const [tab, setTab] = useState("live");

  return (
    <div className="page demo-page">
      <header className="page-hero">
        <p className="eyebrow">Product path</p>
        <h1>Link a Talk user to did:ckb</h1>
        <p className="lede">
          <strong>Live CCC</strong> proves wallet ownership.{" "}
          <strong>Talk preview</strong> shows how badges would look on a
          Discourse UI like talk.nervos.org (mock — not installed on production
          Talk).
        </p>
      </header>

      <div className="tab-bar" role="tablist" aria-label="Demo views">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            className={`tab ${tab === t.id ? "active" : ""}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "live" && <LiveLink />}

      {tab === "talk" && <TalkDiscoursePreview />}
    </div>
  );
}
