import { bindKey, getBind, listBinds } from "./_lib/store.mjs";
import { handleOptions, json } from "./_lib/http.mjs";

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;

  if (req.method !== "GET") {
    return json(res, 405, { error: "GET only" });
  }

  try {
    const url = new URL(req.url, "http://localhost");
    const username = (url.searchParams.get("username") || "").trim();
    const network =
      url.searchParams.get("network") === "mainnet" ? "mainnet" : "testnet";

    if (username) {
      const bind = getBind(bindKey(network, username));
      return json(res, 200, { ok: true, bind });
    }

    return json(res, 200, {
      ok: true,
      binds: listBinds(30),
      note: "Ephemeral demo store — resets on serverless cold start",
    });
  } catch (e) {
    return json(res, 500, { error: e.message || "List failed" });
  }
}
