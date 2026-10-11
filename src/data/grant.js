/** Spark proposal copy — paste-ready for Talk Spark / Eco Fund form */

/** Builder identity for Submit paste kit only — not shown in site chrome */
export const BUILDER = {
  label: "Independent builder",
  note: "Contact details are provided on the Spark application post / Eco Fund form, not on this public kit.",
};

export const LINKS = {
  talk: "https://talk.nervos.org",
  talkDaos: "https://talk.nervos.org/c/daos-funding",
  sparkBoard: "https://talk.nervos.org/c/eco-fund/spark",
  ccc: "https://github.com/ckb-devrel/ccc",
  cccDocs: "https://docs.nervos.org/docs/sdk-and-devtool/ccc",
  didWip: "https://github.com/web5fans/web5-wips/blob/master/01.md",
  didCkbPkg: "https://github.com/ckb-devrel/ccc/tree/master/packages/did-ckb",
  vellum: "https://talk.nervos.org/t/vellum-a-reference-dashboard-and-sdk-for-did-ckb/10274",
  sparkDidFeedback:
    "https://talk.nervos.org/t/spark-program-did-quickstart-kit-practical-did-consumption-demo/10435",
  daoWeb5:
    "https://talk.nervos.org/t/dao-v1-1-web5-identity-layer-community-led-review/10124",
  demo: "https://talkdid-ckb-j9kz.vercel.app/",
  repo: "https://github.com/panagot/talkdid-ckb",
};

export const PROPOSAL = {
  title: "TalkDID — Link did:ckb to Nervos Talk",
  oneLiner:
    "A Discourse plugin that binds Nervos Talk accounts to did:ckb identities — verified badges where the CKB community already posts.",
  amountAsk: "$1,500",
  track: "Talk Spark · DAOs & Funding",
  problem:
    "Nervos Talk (Discourse) is the public hub for Infrastructure, Applications, and DAOs & Funding — including Spark itself. Accounts there are ordinary Discourse logins. Meanwhile did:ckb lives on-chain (WIP-01 cells) and is already used in DAO / Web5 surfaces (e.g. Metaforo). Contributors cannot prove the same identity on Talk; mods rely on screenshots and social trust.",
  solution:
    "TalkDID ships an open-source Discourse plugin (server challenge + UserCustomField) plus a thin Theme Component for the badge UI. Users connect with CCC, sign a short-lived nonce, the server verifies against did:ckb (via @ckb-ccc/did-ckb patterns), and profiles / post cards show a verified mark. Optional Fiber tip URL is stretch only.",
  whySpark:
    "The Eco Fund has already signaled that Discourse × CKB DID integration matches real community needs better than generic DID demos. TalkDID is Talk-native, app-layer, OSS, and scoped to two small milestones — making did:ckb useful on the forum Spark reviewers already use.",
  committeeSignal:
    "On a prior Spark DID proposal, the committee suggested Discourse + CKB DID integration as a higher-adoption, ecosystem-aligned direction.",
  demoNote:
    "This site is a product mock + grant kit. It does not modify production talk.nervos.org. The funded artifact is the installable plugin + staging Discourse.",
};

export const MILESTONES = [
  {
    id: "m1",
    title: "M1 — Plugin scaffold & DID challenge",
    amount: "$750",
    weeks: "Weeks 1–3",
    deliverables: [
      "Discourse plugin skeleton (Rails) with site settings + admin toggle",
      "Challenge API: nonce → CCC sign → server-side signature verify",
      "Resolve / validate did:ckb using CCC did-ckb helpers (test vectors)",
      "Persist binding on UserCustomField; rate-limit attempts",
      "Unit tests for accept / reject paths",
      "Public repo + README (Discourse Docker Dev install)",
    ],
  },
  {
    id: "m2",
    title: "M2 — Badge UI, staging, OSS",
    amount: "$750",
    weeks: "Weeks 4–6",
    deliverables: [
      "Theme Component / plugin UI: badge on profile + post stream",
      "User unlink / re-link controls",
      "Staging Discourse with plugin enabled (shareable to reviewers)",
      "How-to-verify checklist + short GIF",
      "MIT license, CONTRIBUTING, issue templates",
      "Spark update post linking demo, staging, and repo",
    ],
  },
];

export const TECH_STACK = [
  { name: "Nervos Talk", role: "Discourse host forum" },
  { name: "Discourse plugin", role: "Challenge, verify, store" },
  { name: "Theme Component", role: "Badge UI in posts/profile" },
  { name: "CCC", role: "Wallet connect & signing" },
  { name: "@ckb-ccc/did-ckb", role: "DID resolve / validate" },
  { name: "did:ckb (WIP-01)", role: "On-chain identity cells" },
];

export const TALK_SURFACE = [
  {
    name: "Infrastructure",
    blurb: "Protocol, CKB-VM, Fiber, SDKs — technical truth-seeking.",
  },
  {
    name: "Applications & Ecosystem",
    blurb: "Wallets, dapps, integrations — builder collaboration.",
  },
  {
    name: "DAOs & Funding",
    blurb: "Spark / Eco Fund threads — where this proposal is evaluated.",
  },
  {
    name: "Announcements & Meta",
    blurb: "Forum norms — badge trust helps mods and newcomers.",
  },
];

export const ECOSYSTEM = [
  {
    name: "Nervos Talk",
    role: "Public Discourse hub",
    overlap: "Host surface for TalkDID",
    talkdid: "Adds did:ckb badge to existing accounts",
  },
  {
    name: "CKB DAO / Metaforo Web5",
    role: "Governance DID accounts",
    overlap: "Already uses did:ckb for DAO actions",
    talkdid: "Does not replace DAO login — bridges forum reputation",
  },
  {
    name: "Vellum / @ckb-ccc/did-ckb",
    role: "DID dashboard + SDK",
    overlap: "Create / resolve / history for did:ckb",
    talkdid: "Consumes SDK patterns; does not rebuild resolver UI",
  },
  {
    name: "Generic DID demos",
    role: "Spore claims, toy gates",
    overlap: "Teach consumption patterns",
    talkdid: "Different job: identity on Talk itself",
  },
];

export const COMPARE_ROWS = [
  {
    axis: "Where it lives",
    talkdid: "Nervos Talk (existing hub)",
    walletOnly: "Wallet / SDK apps only",
    newForum: "New siloed forum",
  },
  {
    axis: "Identity proof",
    talkdid: "Cryptographic did:ckb bind",
    walletOnly: "Address shown, no forum link",
    newForum: "Same problem, new place",
  },
  {
    axis: "Moderation value",
    talkdid: "Verified badge for mods",
    walletOnly: "None on Talk",
    newForum: "Rebuild community",
  },
  {
    axis: "Overlap with DAO Web5",
    talkdid: "Complementary (Talk ≠ Metaforo)",
    walletOnly: "N/A",
    newForum: "Competes for attention",
  },
  {
    axis: "Spark fit",
    talkdid: "App-layer · Talk-native · OSS",
    walletOnly: "Often infra-heavy",
    newForum: "High adoption risk",
  },
  {
    axis: "Scope for ~$1.5k",
    talkdid: "Plugin + Theme Component + staging",
    walletOnly: "Easy to overscope",
    newForum: "Too large",
  },
];

export const RISKS = [
  {
    risk: "Discourse plugin / Theme Component API drift",
    mitigation:
      "Pin Discourse version; CI against official Docker image; follow Discourse plugin + Theme Component guides used by other CKB widgets.",
  },
  {
    risk: "did:ckb resolve / signature edge cases",
    mitigation:
      "Reuse @ckb-ccc/did-ckb helpers and fixed test vectors; reject ambiguous or unresolved DIDs; document supported networks (testnet first, mainnet flag).",
  },
  {
    risk: "Low opt-in by Talk users",
    mitigation:
      "One-panel CCC flow; visible badge benefit on Spark / Infrastructure threads; seed staging with volunteer accounts.",
  },
  {
    risk: "talk.nervos.org admin install gate",
    mitigation:
      "Ship staging Discourse + install docs so Eco Fund can evaluate before any production Talk change.",
  },
  {
    risk: "Confused with DAO Web5 / Metaforo identity",
    mitigation:
      "Explicit non-goals: TalkDID does not replace DAO login or AT Proto lexicons — only binds Discourse user ↔ did:ckb.",
  },
  {
    risk: "Scope creep (Fiber tips, vote widgets)",
    mitigation:
      "M1–M2 locked to link + badge + staging; Fiber tip URL and DAO widgets are out of scope for payout.",
  },
];

export const METHOD_STEPS = [
  {
    n: "01",
    title: "Open TalkDID on profile",
    body: "Logged-in Talk user opens the TalkDID preferences panel (plugin UI).",
  },
  {
    n: "02",
    title: "Connect with CCC",
    body: "CCC connector opens; user picks a supported CKB wallet (same stack as other CKB apps).",
  },
  {
    n: "03",
    title: "Sign challenge",
    body: "Plugin issues a short-lived nonce bound to the Discourse user id. Wallet signs the message.",
  },
  {
    n: "04",
    title: "Resolve & store did:ckb",
    body: "Server verifies the signature and resolves did:ckb; stores the DID on UserCustomField.",
  },
  {
    n: "05",
    title: "Badge in stream",
    body: "Theme Component renders verified mark on profile and post cards — mods see it without DMs.",
  },
];

export const ARCH_NODES = [
  { id: "user", label: "Talk user", sub: "Browser" },
  { id: "plugin", label: "TalkDID plugin", sub: "Discourse" },
  { id: "ccc", label: "CCC + wallet", sub: "Sign" },
  { id: "ckb", label: "did:ckb cell", sub: "WIP-01" },
];

export const ARCH_EDGES = [
  "User → Plugin: request challenge (authenticated Discourse session)",
  "Plugin → User: nonce + canonical message (user id + expiry)",
  "User → CCC: sign message with controlling lock",
  "Plugin → did:ckb: verify signature + resolve DID cell",
  "Plugin → UserCustomField: store did:ckb + linked_at",
  "Theme Component → UI: read custom field → badge",
];

export const VERIFY_CHECKS = [
  {
    title: "Committee alignment",
    body: "Read the Spark feedback that pointed builders toward Discourse × DID — TalkDID is that direction, not another toy gate.",
    href: "/ecosystem",
  },
  {
    title: "Click the mock link flow",
    body: "Connect → challenge → sign → badge. Confirm copy is honest that this is a simulation.",
    href: "/demo",
  },
  {
    title: "Check non-overlap",
    body: "TalkDID complements Metaforo/DAO Web5 and Vellum — it does not re-implement DID minting UX.",
    href: "/ecosystem",
  },
  {
    title: "Milestone exits",
    body: "M1 verify path + tests; M2 badge + staging. Total ask matches Spark scale.",
    href: "/submit",
  },
  {
    title: "Risk register",
    body: "Install gate, DID edge cases, opt-in, scope — each mitigated.",
    href: "/risks",
  },
];

export const FAQ = [
  {
    q: "Does this change talk.nervos.org immediately?",
    a: "No. Production install needs Talk admins. Spark funds the plugin + a staging Discourse reviewers can use.",
  },
  {
    q: "Is this the same as DAO Web5 / Metaforo login?",
    a: "No. DAO v1.1 uses did:ckb for governance accounts. TalkDID only binds an existing Discourse user to a did:ckb for forum reputation.",
  },
  {
    q: "Why not only a Theme Component?",
    a: "Badges need a trusted server check. A Theme Component can render UI; the Rails plugin owns nonce issue, verify, and storage so clients cannot forge a bind.",
  },
  {
    q: "Which wallets?",
    a: "CCC-supported CKB wallets — same connector surface other CKB web apps use.",
  },
  {
    q: "Mainnet or testnet?",
    a: "Develop and demo on testnet; mainnet DID binding behind a site setting once vectors are solid.",
  },
];

export const DEMO_POSTS = [
  {
    id: 1,
    cat: "DAOs & Funding",
    title: "Spark Program | TalkDID — Discourse × did:ckb",
    excerpt: "Proposal companion: bind Talk accounts to did:ckb with CCC…",
    author: "builder",
    verified: true,
  },
  {
    id: 2,
    cat: "Infrastructure",
    title: "Notes on WIP-01 did:ckb cell updates",
    excerpt: "Type ID continuity and lock authorization for metadata cells…",
    author: "ckb-dev",
    verified: true,
  },
  {
    id: 3,
    cat: "Applications",
    title: "Looking for wallet QA volunteers",
    excerpt: "Need eyes on CCC connect edge cases on mobile…",
    author: "anon-helper",
    verified: false,
  },
];

export const SUBMIT_FIELDS = {
  projectName: PROPOSAL.title,
  category: "DAOs & Funding / Community tooling",
  shortDescription: PROPOSAL.oneLiner,
  problem: PROPOSAL.problem,
  solution: PROPOSAL.solution,
  milestones: MILESTONES.map(
    (m) =>
      `${m.title} (${m.amount}, ${m.weeks})\n` +
      m.deliverables.map((d) => `• ${d}`).join("\n"),
  ).join("\n\n"),
  budget: `${PROPOSAL.amountAsk} total — M1 $750 / M2 $750`,
  team: `${BUILDER.label}. ${BUILDER.note}`,
  links: `Demo: ${LINKS.demo} · Repo: ${LINKS.repo} · Talk: ${LINKS.talk} · WIP-01: ${LINKS.didWip}`,
  whyNervos: `${PROPOSAL.whySpark}\n\nSignal: ${PROPOSAL.committeeSignal}`,
};
