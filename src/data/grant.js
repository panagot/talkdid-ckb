/** Spark proposal copy — paste-ready for Talk Spark / Eco Fund form */

export const CONTACT = {
  name: "POLLIS",
  email: "panagot@gmail.com",
  telegram: "@panagot",
  twitter: "@panagot",
};

export const LINKS = {
  talk: "https://talk.nervos.org",
  didDocs: "https://github.com/ckb-js/ckb-did-sdk",
  ccc: "https://github.com/ckb-js/ccc",
  fiber: "https://www.fiber.network",
  sparkBoard: "https://talk.nervos.org/c/eco-fund/spark",
  demo: "https://talkdid-ckb.vercel.app/",
  repo: "https://github.com/panagot/talkdid-ckb",
};

export const PROPOSAL = {
  title: "TalkDID — Link did:ckb to Nervos Talk",
  oneLiner:
    "A Discourse plugin that binds Nervos Talk accounts to did:ckb identities — portable reputation for the CKB community hub.",
  amountAsk: "$1,500",
  track: "Talk Spark · DAOs & Funding",
  problem:
    "Nervos Talk is the community’s primary Discourse forum, but accounts are siloed from CKB’s on-chain identity stack. Contributors cannot prove wallet ownership or carry reputation across tools; mods cannot verify identity without screenshots and trust.",
  solution:
    "TalkDID ships an open-source Discourse plugin plus a lightweight verification flow: users sign a challenge with CCC / did:ckb, the plugin stores the binding, and the forum shows a verified badge and DID on profiles. Optional Fiber tip links can be added later without blocking the core link.",
  whySpark:
    "Small, concrete, and native to Talk — the venue Spark itself runs on. It makes did:ckb useful where CKB people already gather, with OSS the community can audit and fork.",
  demoNote:
    "This site is a product mock + grant kit. The Discourse plugin is the deliverable; the interactive demo here simulates the link flow without modifying production Talk.",
};

export const MILESTONES = [
  {
    id: "m1",
    title: "M1 — Plugin scaffold & DID challenge",
    amount: "$750",
    weeks: "Weeks 1–3",
    deliverables: [
      "Discourse plugin skeleton (Rails engine) with settings UI",
      "Challenge-response flow: nonce → CCC wallet sign → verify signature",
      "did:ckb parse & store binding on Discourse UserCustomField",
      "Admin toggle + rate limits for verification attempts",
      "Unit tests for signature verification path",
      "Public repo + README with local Discourse Dev setup",
    ],
  },
  {
    id: "m2",
    title: "M2 — Profile badge, OSS, staging",
    amount: "$750",
    weeks: "Weeks 4–6",
    deliverables: [
      "Verified badge + DID display on user profile / post cards",
      "Unlink / re-link controls for the user",
      "Staging Discourse instance with plugin installed",
      "How-to-verify docs + short demo video or GIF",
      "MIT license, contribution guide, issue templates",
      "Spark update post with links for reviewers",
    ],
  },
];

export const TECH_STACK = [
  { name: "Discourse", role: "Host forum (Nervos Talk)" },
  { name: "did:ckb", role: "On-chain / DID identity" },
  { name: "CCC", role: "Wallet connect & signing" },
  { name: "Rails plugin", role: "Server-side verify + store" },
  { name: "Optional Fiber", role: "Tip links (phase 2)" },
];

export const COMPARE_ROWS = [
  {
    axis: "Where it lives",
    talkdid: "Nervos Talk (existing hub)",
    walletOnly: "Wallet apps only",
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
    axis: "Spark fit",
    talkdid: "App-layer · Talk-native · OSS",
    walletOnly: "Infrastructure-heavy",
    newForum: "High adoption risk",
  },
  {
    axis: "Scope for ~$1.5k",
    talkdid: "Realistic plugin + staging",
    walletOnly: "Often overscoped",
    newForum: "Too large",
  },
];

export const RISKS = [
  {
    risk: "Discourse plugin API changes",
    mitigation: "Target a pinned Discourse version; follow official plugin guides; CI against Docker image.",
  },
  {
    risk: "Signature / DID edge cases",
    mitigation: "Reuse ckb-did-sdk patterns; explicit test vectors; reject ambiguous addresses.",
  },
  {
    risk: "Low opt-in by users",
    mitigation: "One-click CCC flow; clear profile benefit; seed with known contributors in staging.",
  },
  {
    risk: "Talk admin install gate",
    mitigation: "Ship as installable plugin + staging demo so Eco Fund can evaluate before Talk prod.",
  },
  {
    risk: "Scope creep (Fiber tips, DAO votes)",
    mitigation: "M1–M2 locked to link + badge; Fiber tip URL is optional stretch, not required for payout.",
  },
];

export const METHOD_STEPS = [
  {
    n: "01",
    title: "Connect wallet",
    body: "User opens TalkDID panel on their Discourse profile and connects via CCC.",
  },
  {
    n: "02",
    title: "Sign challenge",
    body: "Plugin issues a short-lived nonce. Wallet signs; server verifies against did:ckb.",
  },
  {
    n: "03",
    title: "Bind & badge",
    body: "DID is stored on the user record. Profile and posts show a verified CKB identity mark.",
  },
  {
    n: "04",
    title: "Optional tip link",
    body: "Later: expose a Fiber or address tip URL next to the badge — not required for M1/M2.",
  },
];

export const ARCH_NODES = [
  { id: "user", label: "Talk user", sub: "Browser" },
  { id: "plugin", label: "TalkDID plugin", sub: "Discourse" },
  { id: "ccc", label: "CCC wallet", sub: "Sign" },
  { id: "ckb", label: "CKB / did:ckb", sub: "Verify" },
];

export const ARCH_EDGES = [
  "User → Plugin: request challenge",
  "Plugin → User: nonce + message",
  "User → CCC: sign message",
  "Plugin → did:ckb: verify signature",
  "Plugin → UserCustomField: store DID",
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
  team: `${CONTACT.name} — builder; contact ${CONTACT.email} · ${CONTACT.telegram}`,
  links: `Demo: ${LINKS.demo} · Repo: ${LINKS.repo} · Talk: ${LINKS.talk}`,
  whyNervos: PROPOSAL.whySpark,
};
