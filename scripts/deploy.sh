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

echo "==> node 버전 확인"
# 이 레포는 .nvmrc=24 / engines ">=24" 를 선언한다. 그런데 서버의 nvm 기본 별칭이
# 더 낮은 버전을 가리키고 있으면 비로그인 셸에서 그게 잡힌다.
#
# 낮은 node 로 npm ci 를 돌리면 Prisma 7 이 preinstall 에서 거부하는데, 그 시점엔
# node_modules 가 이미 지워져 있어 **돌던 서버까지 같이 내려간다**(실제로 겪었다).
# 그래서 설치 전에 막는다.
if [[ -s "${NVM_DIR:-$HOME/.nvm}/nvm.sh" ]]; then
  # shellcheck disable=SC1091
  . "${NVM_DIR:-$HOME/.nvm}/nvm.sh" > /dev/null
  nvm use > /dev/null 2>&1 || true   # .nvmrc 를 따른다. 없으면 현재 버전 유지
fi

node_major=$(node -p 'process.versions.node.split(".")[0]')
if [[ "$node_major" -lt 24 ]]; then
  echo "    node $(node -v) 로는 설치가 실패한다. 이 레포는 node 24 이상이 필요하다(.nvmrc)." >&2
  echo "    nvm install 24 && nvm alias default 24 로 맞춘 뒤 다시 실행할 것." >&2
  exit 1
fi

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
# npx 는 로컬에 없으면 레지스트리에서 같은 이름의 **다른 패키지**(tsc@2.0.4)를 받아
# 성공한 척 끝낸다 — 안전장치가 통째로 비어 있었다. 반드시 로컬 바이너리를 쓴다.
if [[ ! -x node_modules/.bin/tsc ]]; then
  echo "    node_modules/.bin/tsc 가 없다. 설치가 끝나지 않았다." >&2
  exit 1
fi
node_modules/.bin/tsc --noEmit

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
