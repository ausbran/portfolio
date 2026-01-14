#!/usr/bin/env bash
set -euo pipefail

SOURCE_DIR="${1:-${SOURCE_DIR:-src/assets}}"

if [[ -f ".env.r2" ]]; then
  set -a
  # shellcheck disable=SC1091
  source .env.r2
  set +a
fi

if [[ ! -d "${SOURCE_DIR}" ]]; then
  echo "Source directory not found: ${SOURCE_DIR}"
  echo "Usage: R2_ACCOUNT_ID=... R2_ACCESS_KEY_ID=... R2_SECRET_ACCESS_KEY=... R2_BUCKET=... $0 /path/to/media"
  exit 1
fi

: "${R2_ACCOUNT_ID:?Set R2_ACCOUNT_ID}"
: "${R2_ACCESS_KEY_ID:?Set R2_ACCESS_KEY_ID}"
: "${R2_SECRET_ACCESS_KEY:?Set R2_SECRET_ACCESS_KEY}"
: "${R2_BUCKET:?Set R2_BUCKET}"

R2_ENDPOINT="${R2_ENDPOINT:-https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com}"
R2_REGION="${R2_REGION:-auto}"
REMOTE=":s3:${R2_BUCKET}"

echo "Uploading ${SOURCE_DIR} -> ${REMOTE}"
echo "Endpoint: ${R2_ENDPOINT}"

rclone sync "${SOURCE_DIR}" "${REMOTE}" \
  --s3-provider Cloudflare \
  --s3-endpoint "${R2_ENDPOINT}" \
  --s3-access-key-id "${R2_ACCESS_KEY_ID}" \
  --s3-secret-access-key "${R2_SECRET_ACCESS_KEY}" \
  --s3-region "${R2_REGION}" \
  --exclude "fonts/**" \
  --exclude "**/.DS_Store" \
  --fast-list \
  --progress \
  ${RCLONE_EXTRA_FLAGS:-}
