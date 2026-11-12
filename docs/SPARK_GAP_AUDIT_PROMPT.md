# TalkDID × Spark — Ecosystem Gap Audit Prompt

**Role:** You are a senior CKB ecosystem product reviewer advising an independent builder preparing a Spark Program application for **TalkDID** (Discourse plugin binding Nervos Talk accounts to `did:ckb` via CCC).

**Date context:** November 2026  
**Demo under review:** local/production Vite kit at talkdid (Live CCC path + mock Talk UI + submit paste kit). Funded artifact must be an installable Discourse plugin + staging forum — not the Vite kit alone.

---

## Research inputs you must treat as ground truth

### Official funding rules
- Hub: https://ckbeco.fund/build — Spark is “typically up to **$1,000**”; “exceptionally impactful” up to **$2,000**; 1–2 months; 20%/80% disbursement; decision ~1 week.
- Talk rules: https://talk.nervos.org/t/spark-program-mini-grant-initiative/8752 — 2026 venue is Nervos Talk (`Spark-program`); Mar 2026 clarification: single-category projects may request up to **$2,000** with detailed complexity justification; **overall ceiling remains $2,000**.
- Eco Fund priorities named on /build: AT Protocol, **DID Solutions**, RGB++, Fiber, local-first/P2P, **DAOs & Online Communities**, developer tools.

### Committee signal specific to this pitch
- [DID Quickstart Kit](https://talk.nervos.org/t/spark-program-did-quickstart-kit-practical-did-consumption-demo/10435) was **rejected** (Jul 2026). Reasons: no genuine demand for another DID tutorial; low innovation (toolbox + CCC glue); **explicit redirect:** “exploring the integration of **Discourse with CKB DIDs** … concrete, user-facing … higher adoption potential.”
- Therefore TalkDID is the invited direction — but must not look like another “glue demo” or overclaim a vacuum (xjdao.xyz, bbs.fans, web5fans/modules, Vellum already exist).

### Adjacent rejections / traps
- **DAO Live Widget** (Discourse governance): rejected — no proof voters needed that UI; “build it and they will come.”
- Many Fiber payment wrappers (FiberTap, WooCommerce gateway, Fiber Pay Studio, etc.): rejected for overlap / weak differentiation.
- Generic AI scaffolds / passkey kits: high reject rate; Q3 memo: “Who are you, and what do you really want to do?” — anti–grant-farming, anti–unverified AI fluff.

### What recently got funded (pattern)
- **Spark completions / strong:** fiber-checkout (npm Pay-with-Fiber), ckb-probe, Nervos Brain ($2k), Dular ($2k Fiber + M-Pesa Africa), CKB-UGMP, Corven IDE ($520), NNCBN boot nodes ($1,280), Tranfr ($700 after cut from $1,600).
- **Common win traits:** personal ownership, weekly honesty, reproducible “How to Verify,” live demo before ask, scope committee can shrink, real users or staging evidence.
- **Larger DAO (not Spark):** Fiber Link tipping layer, FiberNuts, Cellula LSP, FNN Safeguard — Fiber/payments dominate big money. TalkDID should not pretend to be that lane; optional Fiber tip URL is stretch only.

### Q4 2026 committee hopes (not a checklist to fake)
- Fiber production/consumption apps; anti-censorship / self-host / light-client / community nodes; self-mining tooling.
- TalkDID maps to **DAOs & Online Communities + DID Solutions** on /build — defend that mapping; do not fake Fiber headline.

### Brand / public surface
- nervos.org: PoW CKB, RGB++, Fiber, Bitcoin isomorphism — identity is secondary; do not pitch TalkDID as L2 narrative.
- @CKBEcoFund / Spark comms: micro-grants, open progress, public Talk decisions; Eco Fund transitioning stewardship messaging — applications still via Talk Spark subsection.

### Current TalkDID demo state (as of Nov 2026 polish)
- Strengths: Live CCC challenge → sign → server verify → DID resolve; mock Talk board; before/after; submit kit; committee-signal quote; honest “not installed on production Talk.”
- Likely gaps vs winning Spark demos: no real Discourse staging instance; no actual Rails plugin repo visible; no short GIF of end-to-end; weak bilingual EN/ZH; mod workflow thin; no named volunteer/mod who wants the badge; ask currently **$1,500** across two $750 milestones without hosting-cost line; risk that Vite kit looks like the product.

---

## Your task

Produce a **professional gap audit** with these sections only:

1. **Ecosystem gap (1 paragraph)** — What is still missing on Nervos Talk / DID adoption that TalkDID uniquely fills, without overclaiming vs xjdao/bbs.fans/Vellum/Metaforo.
2. **Demo gaps ranked P0–P2** — Concrete missing pieces that would make a Spark reviewer say “yes, this is installable and verifiable,” not “nice Vite mock.”
3. **Ask recommendation** — Recommend **$1,000 vs $1,200 vs $1,500 vs $2,000** with one-sentence justification against public rules and 2026 trim patterns (e.g. Tranfr cut). Propose milestone table matching the recommended ask.
4. **Proposal copy traps to avoid** — 5 bullets grounded in real rejects.
5. **Next 7-day build list** — Ordered checklist to upgrade the demo/kit before posting on Talk.

Be blunt, specific, and actionable. Prefer fewer high-leverage fixes over feature sprawl. Do not invent Fiber/DeFi scope. Cite the Discourse×DID committee redirect as the primary license to apply.
