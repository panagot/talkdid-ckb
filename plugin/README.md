# TalkDID — Discourse plugin (stub)

**Funded Spark artifact** (not the Vite proposal kit).

Binds a Nervos Talk (Discourse) user to a `did:ckb` identity via CCC wallet
signature verification, then exposes a verified badge through a Theme Component.

> This folder is a **scaffold** for M1 inside
> [talkdid-ckb](https://github.com/panagot/talkdid-ckb/tree/master/plugin).
> It may later move to its own repo. Production `talk.nervos.org` install is
> **out of scope** until Talk admins opt in — M2 ships a **staging** Discourse
> instead.

## Status

| Piece | State |
| --- | --- |
| `plugin.rb` + site settings | Stub |
| Challenge / verify controllers | TODO (M1) |
| UserCustomField bind | TODO (M1) |
| Theme Component badge | TODO (M2) |
| Staging Discourse URL | TODO (M2) |
| Verify GIF | TODO (M2) |

Proposal companion (Live CCC crypto path):
[talkdid-ckb](https://github.com/panagot/talkdid-ckb) ·
[live demo](https://talkdid-ckb-j9kz.vercel.app/)

## Local Discourse (Docker Dev)

```bash
# Official Discourse Docker Dev — mount this plugin
# https://meta.discourse.org/t/install-discourse-for-development-using-docker/102009

cd ~/discourse
bin/ember-cli -u
# In a second shell, symlink:
# ln -s /path/to/talkdid/plugin plugins/talkdid
```

Site settings (planned):

- `talkdid_enabled` (bool)
- `talkdid_network` (`testnet` | `mainnet`)
- `talkdid_challenge_ttl_seconds` (default `300`)

## Verify (once M1 lands)

1. Enable plugin in Admin → Plugins.
2. As a logged-in user, open preferences → TalkDID.
3. Connect CCC wallet → sign challenge → badge on profile.

## License

MIT — same as the Spark proposal kit.
