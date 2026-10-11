import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

const TTL_MS = 10 * 60 * 1000;

function secret() {
  return (
    process.env.TALKDID_CHALLENGE_SECRET ||
    process.env.CHALLENGE_SECRET ||
    "talkdid-dev-only-change-me"
  );
}

function b64url(buf) {
  return Buffer.from(buf)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function fromB64url(s) {
  const pad = s.length % 4 === 0 ? "" : "=".repeat(4 - (s.length % 4));
  return Buffer.from(s.replace(/-/g, "+").replace(/_/g, "/") + pad, "base64");
}

export function buildMessage({ forum, username, nonce, issued, exp, network }) {
  return [
    "TalkDID verify",
    `forum:${forum}`,
    `user:${username}`,
    `network:${network}`,
    `nonce:${nonce}`,
    `issued:${issued}`,
    `exp:${exp}`,
  ].join("\n");
}

export function issueChallenge({ username, network, forum }) {
  const issued = new Date().toISOString();
  const exp = new Date(Date.now() + TTL_MS).toISOString();
  const nonce = randomBytes(16).toString("hex");
  const payload = {
    v: 1,
    forum,
    username,
    network,
    nonce,
    issued,
    exp,
  };
  const body = b64url(JSON.stringify(payload));
  const sig = b64url(
    createHmac("sha256", secret()).update(body).digest(),
  );
  const token = `${body}.${sig}`;
  const message = buildMessage(payload);
  return { token, message, payload, expiresInSec: Math.floor(TTL_MS / 1000) };
}

export function parseChallenge(token) {
  if (typeof token !== "string" || !token.includes(".")) {
    throw new Error("Invalid challenge token");
  }
  const [body, sig] = token.split(".");
  const expected = createHmac("sha256", secret()).update(body).digest();
  const got = fromB64url(sig);
  if (got.length !== expected.length || !timingSafeEqual(got, expected)) {
    throw new Error("Challenge signature mismatch");
  }
  const payload = JSON.parse(fromB64url(body).toString("utf8"));
  if (!payload?.username || !payload?.nonce || !payload?.exp) {
    throw new Error("Malformed challenge");
  }
  if (Date.parse(payload.exp) < Date.now()) {
    throw new Error("Challenge expired — request a new one");
  }
  const message = buildMessage(payload);
  return { payload, message };
}
