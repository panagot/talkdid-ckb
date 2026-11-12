# TalkDID Spark Gap Audit — Result (Nov 12, 2026)

*Run against `SPARK_GAP_AUDIT_PROMPT.md` + live Spark/Talk research.*

---

## 1. Ecosystem gap

CKB already has DID login elsewhere (xjdao, bbs.fans, Metaforo/DAO, Vellum). What it still lacks is **cryptographic identity on Nervos Talk** — the public Discourse where Spark itself is reviewed. Forum accounts are ordinary logins; mods and reviewers cannot see that a poster controls a `did:ckb` without screenshots or side channels. TalkDID fills that single gap: bind Talk user ↔ wallet/`did:ckb` via CCC, show a badge on profile/posts. It does not replace Web5 social apps or DID toolkits; it makes the committee’s own July 2026 redirect real: Discourse × CKB DID as a concrete community surface.

---

## 2. Demo gaps (ranked)

### P0 — Without these, expect “nice mock” skepticism
1. **No installable Discourse plugin in a public repo** — funded artifact is Rails plugin + Theme Component; Vite kit must clearly label itself as proposal companion only, with a skeleton plugin repo (even empty README + Docker Dev instructions) linked from Demo/Submit.
2. **No shareable staging Discourse** — winners ship something reviewers can click without trusting screenshots (fiber-checkout npm, Corven IDE, Dular pilot). Need a cheap hosted Discourse (or documented `discourse_dev` one-liner) with plugin toggled.
3. **How-to-Verify is prose, not a 60s path** — add numbered checklist + short GIF/WebM: connect testnet → challenge → sign → badge appears on staging profile. Match Blackbox/Dular “reproducible evidence” bar.
4. **Ask/story mismatch** — site says **$1,500**; public Eco Fund FAQ still leads with **typically $1,000**. Without a hosting/complexity line, $1,500 invites a trim (see Tranfr $1,600→$700).

### P1 — Credibility & differentiation
5. **Named demand** — one Talk mod / Spark regular quoted (or “I will install on staging for X”) so it doesn’t replay DAO Live Widget’s “build it and they will come.”
6. **Mod view depth** — show what a mod actually gains (filter verified applicants, copy did:ckb, unlink abuse path) beyond a static panel.
7. **Non-overlap table vs Vellum / bbs.fans / Metaforo** — already partly in Ecosystem; surface it on Home/Submit in one scannable block.
8. **EN + short ZH summary** on Submit paste kit (committee reads both; not full bilingual site).

### P2 — Nice, not load-bearing
9. Fiber tip URL stretch — keep out of headline (Fiber wrappers reject often).
10. Hero GIF of badge appearing after live verify.
11. Public test vectors / CI badge on plugin repo.

---

## 3. Ask recommendation

| Option | Verdict |
| --- | --- |
| **$1,000** | **Recommended.** Matches [ckbeco.fund/build](https://ckbeco.fund/build) “typical” ceiling and most clean single-surface apps. Harder to trim; easy “How to Verify.” |
| $1,200 | OK only if **$200** is an explicit staging Discourse hosting line for 2–3 months. |
| $1,500 (current) | Soft — justifiable as 6 weeks + staging, but historically trimmed when scope looks like “kit + hope.” |
| $2,000 | **Do not.** Reserved for clear multi-surface / user-validation complexity (Dular, Nervos Brain). TalkDID is one plugin. |

**$1,000 is not the hard maximum** — the hard cap is **$2,000** (Mar 2026 Talk update). For TalkDID, **$1,000 is the smart ask**.

### Proposed milestones @ $1,000
| ID | Weeks | Amount | Deliverables |
| --- | --- | --- | --- |
| **M1** | 1–3 | **$400** (20% = $200 at approval; rest on progress) | Discourse plugin skeleton, challenge/sign/verify, UserCustomField bind, tests, public repo + Docker Dev README |
| **M2** | 4–5 | **$600** | Theme Component badge (profile + stream), unlink/re-link, **staging Discourse URL**, verify GIF + checklist, Spark completion-ready update post |

*(Align disbursement language with Spark’s 20% upfront / 80% flexible — don’t invent a custom split that fights the program.)*

---

## 4. Proposal copy traps to avoid

1. **“No DID tooling exists”** — false; DID Quickstart died on that framing.
2. **Pitching a generic DID tutorial / CCC glue** — committee already said that lacks innovation; lead with Talk mods + Spark threads.
3. **Implying production install on talk.nervos.org is guaranteed** — admin gate; sell staging + install docs.
4. **DAO voting / governance widget vibes** — DAO Live Widget reject pattern.
5. **Fiber tipping as the headline** — crowded reject lane; optional stretch only.

---

## 5. Next 7-day build list

1. Cut grant copy / site ask to **$1,000**; rewrite milestone amounts.
2. Open public `talkdid-discourse-plugin` repo: README, license, “not the Vite kit,” Docker Dev stub.
3. Spin **staging Discourse** (Fly/Railway/Hetzner) with plugin or Theme Component mock if Rails incomplete — badge visible on a profile URL.
4. Record **≤60s GIF**: Live CCC on kit → staging profile shows badge.
5. Rewrite `/verify` as 5 numbered steps a committee member can finish in one sitting.
6. Add Home/Submit **non-overlap** block (Talk vs Vellum vs bbs.fans vs Metaforo).
7. Add 8–12 line **中文摘要** on Submit paste kit + Talk post template.
8. Soft-ask one Talk-active person for a one-line “I’d try this on staging” quote.
9. Post draft on Talk for pre-review only after P0 items 1–3 exist.

---

## Bottom line

Direction is committee-invited and still unfilled. The demo’s crypto path is ahead of most rejects; what’s missing is **installable + staging + verify-in-one-minute** evidence. Ask **$1,000**, not $1,500 — typical ceiling messaging wins trust; $2k is available in rules but wrong shape for this plugin.
