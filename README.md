# TalkDID

Bind **did:ckb** identities to [Nervos Talk](https://talk.nervos.org) accounts.

TalkDID is an open-source **Discourse plugin** proposal for the CKB Eco Fund Spark track. Users connect a CKB wallet via CCC, sign a short challenge, and get a verified `did:ckb` badge on their Talk profile and posts — so mods can trust on-chain identity instead of screenshots.

**Live demo:** [talkdid-ckb-j9kz.vercel.app](https://talkdid-ckb-j9kz.vercel.app/)

---

## What this repo is

| Piece | Role |
| --- | --- |
| **This site** (`src/`, `api/`) | Public proposal companion — product story, Live CCC demo, Talk UI preview |
| **`plugin/`** | Scaffold for the installable Discourse plugin (funded deliverable) |

Production `talk.nervos.org` is **not** modified by this repo. A staging / Docker Dev Discourse is how the plugin is meant to be reviewed.

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5303](http://localhost:5303).

```bash
npm run build && npm run preview
```

Optional (Vercel): set `TALKDID_CHALLENGE_SECRET` for production HMAC challenge tokens.

---

## Demo highlights

| Link | Purpose |
| --- | --- |
| [/#/demo](https://talkdid-ckb-j9kz.vercel.app/#/demo) | Live CCC connect → challenge → sign → verify |
| [/#/verify](https://talkdid-ckb-j9kz.vercel.app/#/verify) | What this demo proves (and what it does not) |
| [/#/reviewers](https://talkdid-ckb-j9kz.vercel.app/#/reviewers) | Checklist for Spark / Eco Fund reviewers |
| [/#/ecosystem](https://talkdid-ckb-j9kz.vercel.app/#/ecosystem) | Non-overlap with Metaforo, Vellum, bbs.fans |

**Live CCC path (demo):**

1. Connect wallet via `@ckb-ccc/connector-react`
2. `POST /api/challenge` — short-lived HMAC nonce
3. Wallet signs the challenge
4. `POST /api/verify` — signature check + optional `did:ckb` resolve on public RPC
5. Ephemeral bind for the demo session

Prefer **testnet**. Signature verify is enough for the demo; a DID cell is optional.

---

## Plugin (funded artifact)

See [`plugin/`](./plugin/) for the Discourse plugin stub and Docker Dev notes.

Planned flow:

1. Authenticated Talk user requests a challenge
2. CCC signs → server verifies → resolves `did:ckb`
3. Bind stored on `UserCustomField`
4. Theme Component shows badge on profile / posts

**Out of scope until Talk admins opt in:** production install on talk.nervos.org.

---

## Spark ask (summary)

| | |
| --- | --- |
| **Ask** | $500 (CKB equivalent) |
| **Disbursement** | Spark 20% / 80% |
| **M1** | $250 — plugin scaffold, challenge/sign/verify, tests, Docker Dev README |
| **M2** | $250 — badge UI, unlink/re-link, verify GIF + checklist, update post |

Proposal drafts live under [`docs/`](./docs/).

Committee signal for Discourse × CKB DID:  
[talk.nervos.org/t/…/10435/6](https://talk.nervos.org/t/spark-program-did-quickstart-kit-practical-did-consumption-demo/10435/6)

---

## Stack

**Demo kit:** Vite · React · wouter (hash routes) · CCC · Vercel serverless `/api/*`

**Plugin (planned):** Discourse (Rails) plugin + Theme Component · CCC · `@ckb-ccc/did-ckb` patterns · `UserCustomField`

---

## License

MIT

Independent Spark proposal material. Not affiliated with the Nervos Foundation or CKB Eco Fund.
