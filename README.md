# TalkDID

**Bind `did:ckb` to Nervos Talk** — a Discourse plugin proposal for the CKB Eco Fund Spark track.

TalkDID makes CKB’s identity stack useful where the community already gathers: [talk.nervos.org](https://talk.nervos.org). Contributors prove wallet control with **CCC**, the plugin stores a `did:ckb` binding, and profiles show a verified badge mods can trust.

> This repository is the **Spark proposal companion** (product narrative + interactive mock + paste-ready form fields).  
> The funded deliverable is an **open-source Discourse plugin**, not this Vite kit alone.

---

## Live demo

**Production:** [https://talkdid-ckb-j9kz.vercel.app/](https://talkdid-ckb-j9kz.vercel.app/)

| Audience | Deep link |
| --- | --- |
| **Spark reviewers** | [/#/reviewers](https://talkdid-ckb-j9kz.vercel.app/#/reviewers) |
| **Interactive mock** | [/#/demo](https://talkdid-ckb-j9kz.vercel.app/#/demo) |
| **Ecosystem map** | [/#/ecosystem](https://talkdid-ckb-j9kz.vercel.app/#/ecosystem) |
| **How to verify** | [/#/verify](https://talkdid-ckb-j9kz.vercel.app/#/verify) |
| **Submit paste kit** | [/#/submit](https://talkdid-ckb-j9kz.vercel.app/#/submit) |
| **Risks** | [/#/risks](https://talkdid-ckb-j9kz.vercel.app/#/risks) |

**Repo (private):** [github.com/panagot/talkdid-ckb](https://github.com/panagot/talkdid-ckb)

Local:

```bash
npm install
npm run dev
```

→ [http://localhost:5303](http://localhost:5303) (hash routes)

```bash
npm run build && npm run preview
```

---

## Why Spark / why Talk

| Constraint | How TalkDID fits |
| --- | --- |
| App-layer, not protocol theater | Thin Discourse plugin + existing `did:ckb` / CCC |
| Talk-native venue | Spark itself runs on Nervos Talk |
| Small budget (~$1–2k) | Two milestones, $1,500 total, clear exits |
| Reviewable OSS | MIT plugin + staging Discourse before prod Talk |

**Ask:** `$1,500` · **M1** `$750` · **M2** `$750` · **Track:** Talk Spark · DAOs & Funding

---

## What reviewers get in this kit

1. **Story** — problem, solution, Spark fit on Home / Compare  
2. **Demo** — challenge → sign → badge mock (no real wallet required)  
3. **Architecture** — trust boundary: Discourse session vs DID proof  
4. **Method** — six-week plan pinned to boring Discourse patterns  
5. **Submit** — copy blocks for Talk Spark / Eco Fund fields  
6. **Risks** — install gate, DID edge cases, opt-in — with mitigations  

---

## App map

| Route | Purpose |
| --- | --- |
| `/` | Hero, committee signal, milestones, stack |
| `/how` | End-user link flow |
| `/demo` | Link flow · post stream · mod view |
| `/ecosystem` | Talk categories + non-overlap map |
| `/architecture` | Plugin + Theme Component + did:ckb |
| `/compare` | TalkDID vs wallet-only vs new forum |
| `/verify` | Honest claims + FAQ |
| `/reviewers` | Evaluation checklist |
| `/method` | Principles + week sketch |
| `/submit` | Paste-ready proposal fields |
| `/risks` | Risks & mitigations |

---

## Live CCC path

Demo → **Live CCC** tab:

1. Connect a wallet via **@ckb-ccc/connector-react** (Neuron, JoyID, …)
2. `POST /api/challenge` — HMAC-signed nonce (server)
3. Wallet `signMessage` on that challenge
4. `POST /api/verify` — `Signer.verifyMessage` + `listDidCkbsByLock` on public CKB RPC
5. Ephemeral bind store (`/api/binds`) for the demo session

Prefer **testnet**. Mainnet works the same once you select it. Creating a `did:ckb` cell (if you have none) still uses ecosystem DID tooling — this kit proves wallet ownership even without a DID cell.

Env (optional on Vercel): `TALKDID_CHALLENGE_SECRET` for production HMAC keys.

```bash
npm run dev   # Vite + /api middleware
```

## Stack (this site)

- Vite 8 · React 19 · wouter (hash) · Phosphor · Framer Motion · CCC  
- API: Vercel serverless `/api/*` (+ Vite middleware in local dev)  
- Deploy: Vercel (`vercel.json` SPA rewrite; hash routing needs no server routes)

## Stack (funded plugin)

- Discourse plugin (Rails) · CCC wallet signing · `did:ckb` verify · UserCustomField storage · optional Fiber tip URL (stretch)

---

## Milestones (summary)

**M1 — Plugin scaffold & DID challenge** ($750, weeks 1–3)  
Plugin skeleton, nonce challenge, CCC sign verify, rate limits, tests, public README + local Discourse setup.

**M2 — Profile badge, OSS, staging** ($750, weeks 4–6)  
Verified badge on profile/posts, unlink/re-link, staging instance, docs/GIF, MIT + Spark update post.

Full acceptance lists live in-app under **Submit** and **Reviewers**.

---

## Contact

Builder contact is provided on the Spark / Eco Fund application form — not in this public kit chrome. Repo maintainers: see GitHub.

---

## License

MIT — proposal kit. The Discourse plugin will ship MIT under the funded repository.

*Independent Spark proposal material. Not affiliated with the Nervos Foundation or CKB Eco Fund.*
