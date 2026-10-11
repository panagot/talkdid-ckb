async function parse(res) {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || `HTTP ${res.status}`);
  }
  return data;
}

export async function requestChallenge({ username, network }) {
  const res = await fetch("/api/challenge", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, network }),
  });
  return parse(res);
}

export async function verifyChallenge({ token, signature, address }) {
  const res = await fetch("/api/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token,
      signature:
        typeof signature === "string" ? signature : JSON.stringify(signature),
      address,
    }),
  });
  return parse(res);
}

export async function fetchBind({ username, network }) {
  const q = new URLSearchParams({ username, network });
  const res = await fetch(`/api/binds?${q}`);
  return parse(res);
}
