#!/usr/bin/env bash
# 打包 extension/ 为可上传 Chrome Web Store 的 zip（manifest.json 位于 zip 根目录）
set -euo pipefail

cd "$(dirname "$0")/.."
VERSION=$(node -p "require('./extension/manifest.json').version")
mkdir -p dist
OUT="dist/douyin-link-opener-v${VERSION}.zip"
rm -f "$OUT"
(cd extension && zip -rq "../$OUT" . -x ".*")
echo "Built $OUT"
