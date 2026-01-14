#!/usr/bin/env bash
set -euo pipefail

MEDIA_DIR="${1:-src/assets}"

if [[ ! -d "${MEDIA_DIR}" ]]; then
  echo "Media directory not found: ${MEDIA_DIR}"
  exit 1
fi

echo "Syncing media..."
./scripts/rclone-upload.sh "${MEDIA_DIR}"

echo "Building site..."
npm run build

echo "Done. Deploy the build output from public_html/."
