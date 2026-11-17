# Spark Program | TalkDID — Bind did:ckb to Nervos Talk

**Post at:** https://talk.nervos.org/c/daos-funding/spark-program  
**Tag:** `Spark-program`

---

**Problem:** Nervos Talk accounts are ordinary Discourse logins. `did:ckb` exists elsewhere (Metaforo/DAO, Vellum, bbs.fans), but **there is no Discourse × did:ckb plugin** — mods cannot see on-chain identity on Talk without screenshots.

**Solution:** Open-source Discourse plugin + Theme Component. User connects CCC → signs a short nonce → plugin verifies → stores bind on `UserCustomField` → badge on profile/posts.  
**Non-goals:** production Talk install (admin gate); DAO votes; Fiber tips; another DID tutorial.

**Why Spark / CKB:** Committee already redirected a prior DID ask toward [Discourse + CKB DID](https://talk.nervos.org/t/spark-program-did-quickstart-kit-practical-did-consumption-demo/10435). App-layer, Talk-native, OSS.

**Ask: $500** (CKB equiv.) · Spark 20%/80%

- **M1 $250** (week 1): plugin scaffold, challenge/sign/verify, UserCustomField, tests, public repo + Docker Dev README  
- **M2 $250** (week 2): badge UI, unlink/re-link, verify GIF + checklist, MIT, Spark update post  

**How to verify:**

1. Live CCC testnet path — https://talkdid-ckb-j9kz.vercel.app/#/demo  
2. Clone plugin → Docker Dev README → badge on test user  
3. Confirm non-goals in README  

**Demo:** https://talkdid-ckb-j9kz.vercel.app/  
**Repo:** https://github.com/panagot/talkdid-ckb  

Builder: panagot · contact on this thread / GitHub.
