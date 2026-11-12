import { useState } from "react";
import {
  MagnifyingGlass,
  SealCheck,
  ShieldCheck,
  UserCircle,
} from "@phosphor-icons/react";

const TOPICS = [
  {
    id: 1,
    cat: "Infrastructure",
    catColor: "#5b8def",
    title: "Fiber node notes from last week",
    replies: 4,
    views: 128,
    activity: "2h",
    author: "talk-builder",
    you: true,
    verified: true,
    did: "did:ckb:…a7f3",
  },
  {
    id: 2,
    cat: "Applications",
    catColor: "#3dcf9a",
    title: "Looking for wallet QA volunteers",
    replies: 0,
    views: 39,
    activity: "3d",
    author: "newcomer",
    verified: false,
  },
  {
    id: 3,
    cat: "Infrastructure",
    catColor: "#5b8def",
    title: "Notes on WIP-01 did:ckb cell updates",
    replies: 12,
    views: 640,
    activity: "5h",
    author: "ckb-dev",
    verified: true,
    did: "did:ckb:…91c2",
  },
  {
    id: 4,
    cat: "General",
    catColor: "#c9a227",
    title: "First post — feedback welcome",
    replies: 7,
    views: 210,
    activity: "1d",
    author: "anon-helper",
    verified: false,
  },
];

/**
 * Visual mock of talk.nervos.org with TalkDID badges.
 * Not a live Discourse install — shows reviewers how the Theme Component would look.
 */
export default function TalkDiscoursePreview({
  username = "talk-builder",
  linked = false,
  did = "",
}) {
  const [view, setView] = useState("topics"); // topics | profile | prefs
  const [previewLinked, setPreviewLinked] = useState(linked);
  const displayName = username.trim() || "talk-builder";
  const yourDid = did || "did:ckb:…a7f3";
  const isLinked = previewLinked || linked;

  return (
    <div className="dc-wrap">
      <div className="dc-caption-row">
        <p className="dc-caption muted">
          Simulated <strong>talk.nervos.org</strong> chrome — how badges would
          look after the plugin ships. No Discourse × did:ckb plugin exists on
          production Talk today.
        </p>
        <label className="dc-toggle">
          <input
            type="checkbox"
            checked={isLinked}
            onChange={(e) => setPreviewLinked(e.target.checked)}
          />
          Preview as linked
        </label>
      </div>

      <div className="dc-frame" data-theme="talk">
        <header className="dc-header">
          <div className="dc-brand">
            <span className="dc-logo" aria-hidden="true" />
            <span>Nervos Talk</span>
          </div>
          <nav className="dc-nav" aria-label="Talk mock">
            <button
              type="button"
              className={view === "topics" ? "on" : ""}
              onClick={() => setView("topics")}
            >
              Topics
            </button>
            <button
              type="button"
              className={view === "profile" ? "on" : ""}
              onClick={() => setView("profile")}
            >
              Profile
            </button>
            <button
              type="button"
              className={view === "prefs" ? "on" : ""}
              onClick={() => setView("prefs")}
            >
              Preferences
            </button>
          </nav>
          <div className="dc-header-right">
            <MagnifyingGlass size={16} />
            <span className="dc-user-chip">
              <span className={`dc-avatar tiny ${linked ? "ok" : ""}`}>
                {displayName.slice(0, 1).toUpperCase()}
              </span>
              {displayName}
              {isLinked && <SealCheck weight="fill" size={14} className="dc-seal" />}
            </span>
          </div>
        </header>

        <div className="dc-body">
          {view === "topics" && (
            <>
              <div className="dc-breadcrumb">
                <span>Categories</span>
                <span>/</span>
                <span className="dc-strong">Latest</span>
              </div>
              <h2 className="dc-h">Latest</h2>
              <div className="dc-table-head">
                <span>Topic</span>
                <span>Replies</span>
                <span>Views</span>
                <span>Activity</span>
              </div>
              <ul className="dc-topics">
                {TOPICS.map((t) => {
                  const isYou = t.you;
                  const showBadge = t.verified || (isYou && isLinked);
                  const author = isYou ? displayName : t.author;
                  const authorDid = isYou && isLinked ? yourDid : t.did;
                  return (
                    <li key={t.id} className="dc-topic">
                      <div className="dc-topic-main">
                        <span
                          className="dc-cat"
                          style={{ "--cat": t.catColor }}
                        >
                          {t.cat}
                        </span>
                        <p className="dc-topic-title">{t.title}</p>
                        <p className="dc-topic-by">
                          <span className={`dc-avatar sm ${showBadge ? "ok" : ""}`}>
                            {author.slice(0, 1).toUpperCase()}
                          </span>
                          <span className="dc-author">
                            {author}
                            {showBadge && (
                              <SealCheck
                                weight="fill"
                                size={15}
                                className="dc-seal"
                                aria-label="Verified did:ckb"
                              />
                            )}
                          </span>
                          {showBadge ? (
                            <span className="dc-did">{authorDid}</span>
                          ) : (
                            <span className="dc-nodid">no did:ckb</span>
                          )}
                        </p>
                      </div>
                      <span className="dc-num">{t.replies}</span>
                      <span className="dc-num">{t.views}</span>
                      <span className="dc-num">{t.activity}</span>
                    </li>
                  );
                })}
              </ul>
            </>
          )}

          {view === "profile" && (
            <div className="dc-profile">
              <div className="dc-profile-card">
                <div className={`dc-avatar lg ${isLinked ? "ok" : ""}`}>
                  {displayName.slice(0, 1).toUpperCase()}
                </div>
                <div>
                  <h3 className="dc-profile-name">
                    {displayName}
                    {isLinked && (
                      <SealCheck weight="fill" size={20} className="dc-seal" />
                    )}
                  </h3>
                  {isLinked ? (
                    <p className="dc-did big">{yourDid}</p>
                  ) : (
                    <p className="dc-nodid">No did:ckb linked yet</p>
                  )}
                  <p className="dc-meta">
                    Trust level 2 ·{" "}
                    {isLinked ? "Wallet proven" : "Username only"}
                  </p>
                </div>
              </div>
              <div className="dc-profile-note">
                <ShieldCheck size={18} weight="fill" />
                <p>
                  Mods see the seal next to the name on posts and this profile.
                  It proves control of a wallet / did:ckb at link time — not DAO
                  voting rights.
                </p>
              </div>
            </div>
          )}

          {view === "prefs" && (
            <div className="dc-prefs">
              <h2 className="dc-h">Preferences · TalkDID</h2>
              <div className="dc-prefs-panel">
                <div className="dc-prefs-row">
                  <UserCircle size={22} />
                  <div>
                    <strong>Link did:ckb</strong>
                    <p>
                      Connect a CCC wallet, sign a short challenge, store the
                      bind on your Discourse account.
                    </p>
                  </div>
                </div>
                <div className={`dc-status ${isLinked ? "ok" : ""}`}>
                  {isLinked ? (
                    <>
                      <SealCheck weight="fill" size={18} /> Linked · {yourDid}
                    </>
                  ) : (
                    <>Not linked — toggle “Preview as linked” above</>
                  )}
                </div>
                <p className="dc-prefs-hint">
                  Production Talk needs an admin install. This screen is a visual
                  mock only — not connected to talk.nervos.org.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
