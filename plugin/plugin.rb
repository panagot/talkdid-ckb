# frozen_string_literal: true

# name: talkdid
# about: Bind Discourse users to did:ckb via CCC wallet signatures
# version: 0.0.1
# authors: panagot
# url: https://github.com/panagot/talkdid-discourse-plugin
# required_version: 3.2.0

enabled_site_setting :talkdid_enabled

register_asset "stylesheets/talkdid.scss"

after_initialize do
  # M1: challenge + verify controllers, UserCustomField bind
  # M2: Theme Component badge, unlink/re-link
  #
  # Crypto path is already proven in the Vite kit Live CCC demo;
  # this plugin ports that flow behind a Discourse session.
end
