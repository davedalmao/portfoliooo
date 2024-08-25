# !/bin/bash
# different build commands per branch: https://developers.cloudflare.com/pages/how-to/build-commands-branches/
# deploying a Remix application to cloudflare pages: https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/

# this will be changed to master once v2's build is completed
if [ "$CF_PAGES_BRANCH" == "v2" ]; then
  build/client
fi