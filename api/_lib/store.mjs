/** Ephemeral in-memory binds for the demo API (resets on cold start). */
const binds = new Map();

export function saveBind(key, record) {
  binds.set(key, record);
  return record;
}

export function getBind(key) {
  return binds.get(key) || null;
}

export function listBinds(limit = 20) {
  return Array.from(binds.values())
    .sort((a, b) => (b.linkedAt || "").localeCompare(a.linkedAt || ""))
    .slice(0, limit);
}

export function bindKey(network, username) {
  return `${network}:${username.toLowerCase()}`;
}
