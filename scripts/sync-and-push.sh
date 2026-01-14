#!/usr/bin/env bash
set -euo pipefail

MEDIA_DIR="${1:-src/assets}"

./scripts/rclone-upload.sh "${MEDIA_DIR}"

git add -A

if git diff --cached --quiet; then
  echo "No git changes to commit."
  git push
  exit 0
fi

read -r -p "Commit message: " COMMIT_MSG
if [[ -z "${COMMIT_MSG}" ]]; then
  echo "Commit message required. Aborting."
  exit 1
fi

git commit -m "${COMMIT_MSG}"
git push

# Optional Cloudways deploy (disabled). Uncomment to use.
# SERVER_USER="austin"
# SERVER_HOST="137.184.15.251"
# SERVER_PATH="/applications/xtmhywkwmh/public_html"
# npm run build
# rsync -avz --delete public_html/ "${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}/"
