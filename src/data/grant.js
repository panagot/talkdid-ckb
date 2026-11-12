/** Spark proposal copy — paste-ready for Talk Spark / Eco Fund form */

/** Builder identity for Submit paste kit only — not shown in site chrome */
export const BUILDER = {
  label: "Independent builder",
  note: "Contact details are provided on the Spark application post / Eco Fund form, not on this public kit.",
};

export const LINKS = {
  talk: "https://talk.nervos.org",
  talkDaos: "https://talk.nervos.org/c/daos-funding",
  sparkBoard: "https://talk.nervos.org/c/daos-funding/spark-program",
  sparkRules: "https://talk.nervos.org/t/spark-program-mini-grant-initiative/8752",
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
  /** Local stub lives in this kit until a separate plugin repo is published */
  pluginRepo: "https://github.com/panagot/talkdid-ckb/tree/master/plugin",
  staging: "", // filled when staging Discourse is live
};

export const PROPOSAL = {
  title: "TalkDID — Link did:ckb to Nervos Talk",
  oneLiner:
    "A Discourse plugin that binds Nervos Talk accounts to did:ckb identities — verified badges where the CKB community already posts.",
  amountAsk: "$500",
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
    "Live CCC here is a real wallet sign + server verify + did:ckb resolve on public RPC. It does not modify production talk.nervos.org. The real product is an installable Discourse plugin.",
};

export const MILESTONES = [
  {
    id: "m1",
    title: "M1 — Plugin scaffold & DID challenge",
    amount: "$200",
    weeks: "Weeks 1–3",
    deliverables: [
      "Discourse plugin skeleton (Rails) with site settings + admin toggle",
      "Challenge API: nonce → CCC sign → server-side signature verify",
      "Resolve / validate did:ckb using CCC did-ckb helpers (test vectors)",
      "Persist binding on UserCustomField; rate-limit attempts",
      "Unit tests for accept / reject paths",
      "Public plugin repo + README (Discourse Docker Dev install)",
    ],
  },
  {
    id: "m2",
    title: "M2 — Badge UI + verify docs",
    amount: "$300",
    weeks: "Week 4",
    deliverables: [
      "Theme Component / plugin UI: badge on profile + post stream",
      "User unlink / re-link controls",
      "Docker Dev install docs (reproducible verify without paid staging host)",
      "How-to-verify checklist + ≤60s GIF/WebM",
      "MIT license, CONTRIBUTING, issue templates",
      "Spark update post linking demo, plugin repo, and verify steps",
    ],
  },
];

export const NON_OVERLAP = [
  {
    name: "Nervos Talk",
    theirs: "Forum accounts today — no Discourse × did:ckb plugin exists yet",
    ours: "Proposed: badge on existing Talk users via installable plugin",
  },
  {
    name: "Vellum / did-ckb SDK",
    theirs: "Create / resolve / history for DID cells",
    ours: "Would consume resolve patterns; no minting UX rebuild",
  },
  {
    name: "bbs.fans / xjdao",
    theirs: "Web5 social apps with DID login",
    ours: "Does not replace them — identity on Talk only",
  },
  {
    name: "Metaforo / DAO Web5",
    theirs: "Governance DID accounts",
    ours: "Forum reputation bind — not DAO voting rights",
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
    blurb: "Community funding threads — where identity trust matters.",
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
    axis: "Delivery shape",
    talkdid: "App-layer · Talk-native · OSS",
    walletOnly: "Often infra-heavy",
    newForum: "High adoption risk",
  },
  {
    axis: "Scope",
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

export const VERIFY_STEPS = [
  {
    title: "Open Live CCC (testnet)",
    body: "Demo → Live CCC. Prefer CKB Testnet. Connect Neuron, JoyID, or another CCC wallet.",
    href: "/demo",
    time: "~1 min",
  },
  {
    title: "Get challenge → Sign & verify",
    body: "Enter a Talk-style username, request a challenge, sign it. Server runs Signer.verifyMessage + did:ckb resolve.",
    href: "/demo",
    time: "~1 min",
  },
  {
    title: "Confirm profile preview updates",
    body: "Aside should flip to verified / wallet-proven. No DID cell still proves ownership; DID attaches when a cell exists.",
    href: "/demo",
    time: "instant",
  },
  {
    title: "Open Talk preview",
    body: "See how badges would look on a Discourse UI like talk.nervos.org. Toggle Preview as linked.",
    href: "/demo",
    time: "~1 min",
  },
  {
    title: "Check non-overlap",
    body: "TalkDID is for Nervos Talk — not Vellum mint UX, Metaforo DAO login, or bbs.fans.",
    href: "/ecosystem",
    time: "~2 min",
  },
];

/** @deprecated use VERIFY_STEPS — kept for any stray imports */
export const VERIFY_CHECKS = VERIFY_STEPS;

export const FAQ = [
  {
    q: "Does this change talk.nervos.org immediately?",
    a: "No. Production install needs Talk admins. A staging Discourse is how the plugin would be demonstrated before any production install.",
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
    q: "Is this website the Discourse plugin?",
    a: "No. This is a public demo of the link flow. The plugin is a separate Rails package (see the plugin/ stub in the repo).",
  },
  {
    q: "Which wallets?",
    a: "CCC-supported CKB wallets — same connector surface other CKB web apps use.",
  },
  {
    q: "Mainnet or testnet?",
    a: "Prefer testnet for demos; mainnet DID binding would sit behind a site setting once vectors are solid.",
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
  projectName: "Spark Program | TalkDID — Bind did:ckb to Nervos Talk",
  category: "DAOs & Funding / Community tooling · DID Solutions",
  shortDescription: PROPOSAL.oneLiner,
  problem: PROPOSAL.problem,
  solution: PROPOSAL.solution,
  milestones: MILESTONES.map(
    (m) =>
      `${m.title} (${m.amount}, ${m.weeks})\n` +
      m.deliverables.map((d) => `• ${d}`).join("\n"),
  ).join("\n\n"),
  budget: `${PROPOSAL.amountAsk} total — M1 $200 / M2 $300. Disbursement follows Spark 20% / 80%.`,
  team: `${BUILDER.label}. ${BUILDER.note}`,
  links: `Demo: ${LINKS.demo} · Kit repo: ${LINKS.repo} · Plugin stub: ${LINKS.pluginRepo} · Submit category: ${LINKS.sparkBoard} · Talk: ${LINKS.talk} · WIP-01: ${LINKS.didWip} · Committee redirect: ${LINKS.sparkDidFeedback}`,
  whyNervos: `${PROPOSAL.whySpark}\n\nSignal: ${PROPOSAL.committeeSignal}`,
  nonOverlap: NON_OVERLAP.map(
    (r) => `${r.name}\n  Existing: ${r.theirs}\n  TalkDID: ${r.ours}`,
  ).join("\n\n"),
};
