#!/usr/bin/env bash
#
# woolta-api 배포 — 서버에서 실행한다.
#
#   ssh <user>@woolta.com
#   cd /home/woolta-api && ./scripts/deploy.sh
#
# 하는 일: git pull → 의존성 설치 → prisma 클라이언트 생성 → 타입체크 → pm2 reload
# 타입체크를 통과해야 reload 한다. 깨진 코드를 올리면 롤백이 더 비싸다.

set -euo pipefail

APP_NAME="woolta-api"
ENV_FILE="/etc/woolta/api.env"
BRANCH="${DEPLOY_BRANCH:-main}"

cd "$(dirname "$0")/.."

echo "==> 환경변수 확인"
if [[ ! -f "$ENV_FILE" ]]; then
  echo "    $ENV_FILE 이 없다. deploy/api.env.example 을 참고해 만들 것." >&2
  exit 1
fi
# shellcheck disable=SC1090
set -a && source "$ENV_FILE" && set +a

for key in BLOG_DATABASE_URL WOOLBANK_DATABASE_URL DASHBOARD_DATABASE_URL AUTH_SECRET_TOKEN_KEY IMAGE_UPLOAD_PATH; do
  if [[ -z "${!key:-}" ]]; then
    echo "    $key 가 비어 있다." >&2
    exit 1
  fi
done

echo "==> 업로드 디렉터리 확인 ($IMAGE_UPLOAD_PATH)"
# nginx(image.woolta.com)가 읽는 바로 그 디렉터리여야 한다. 쓰지 못하면 업로드가 전부 실패한다.
if [[ ! -w "$IMAGE_UPLOAD_PATH" ]]; then
  echo "    $IMAGE_UPLOAD_PATH 에 쓸 수 없다. 경로와 권한을 확인할 것." >&2
  exit 1
fi

# reset --hard 는 미커밋 변경을 되돌릴 수 없게 지운다.
# 서버에서 급히 고친 내용이 있으면 여기서 멈추는 편이 낫다.
if [[ -n "$(git status --porcelain)" ]]; then
  echo "==> 커밋되지 않은 변경이 있다:" >&2
  git status --short >&2
  echo "    git reset --hard 로 지워진다. 커밋하거나 stash 한 뒤 다시 실행할 것." >&2
  echo "    의도한 것이라면: DEPLOY_FORCE=1 ./scripts/deploy.sh" >&2
  [[ "${DEPLOY_FORCE:-}" == "1" ]] || exit 1
fi

echo "==> 코드 갱신 ($BRANCH)"
git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"

echo "==> 의존성 설치"
npm ci

echo "==> Prisma 클라이언트 생성"
for schema in prisma/schema*.prisma; do
  npx prisma generate --schema="$schema"
done

echo "==> 타입체크"
npx tsc --noEmit

echo "==> pm2 반영"
if pm2 describe "$APP_NAME" > /dev/null 2>&1; then
  # --update-env 가 있어야 방금 source 한 값이 프로세스에 들어간다
  pm2 reload ecosystem.config.cjs --update-env
else
  pm2 start ecosystem.config.cjs
fi
pm2 save

echo "==> 헬스체크"
sleep 3
PORT="${PORT:-4500}"
for i in $(seq 1 10); do
  if curl -sf -o /dev/null -X POST "http://127.0.0.1:${PORT}/blog/graphql" \
      -H 'Content-Type: application/json' \
      -d '{"query":"{ categoryList { totalCount } }"}'; then
    echo "    OK (:${PORT})"
    echo "==> 배포 완료"
    exit 0
  fi
  sleep 2
done

echo "    헬스체크 실패. pm2 logs $APP_NAME 확인할 것." >&2
exit 1
