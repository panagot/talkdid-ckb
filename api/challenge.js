import { issueChallenge } from "./_lib/challenge.mjs";
import { handleOptions, json, readJson } from "./_lib/http.mjs";

const FORUM = "talkdid-demo";

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;

  if (req.method !== "POST") {
    return json(res, 405, { error: "POST only" });
  }

  try {
    const body = await readJson(req);
    const username = String(body.username || "")
      .trim()
      .toLowerCase();
    const network = body.network === "mainnet" ? "mainnet" : "testnet";

    if (!/^[a-z0-9._-]{2,20}$/.test(username)) {
      return json(res, 400, {
        error: "Username must be 2–20 letters, numbers, dots, _ or -",
      });
    }

    const challenge = issueChallenge({
      username,
      network,
      forum: FORUM,
    });

    return json(res, 200, {
      ok: true,
      mode: "live",
      network,
      forum: FORUM,
      username,
      token: challenge.token,
      message: challenge.message,
      expiresInSec: challenge.expiresInSec,
      issued: challenge.payload.issued,
      exp: challenge.payload.exp,
      nonce: challenge.payload.nonce,
    });
  } catch (e) {
    return json(res, 500, { error: e.message || "Challenge failed" });
  }
}
