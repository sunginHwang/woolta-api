# woolta-api 배포

전체 그림(서버 구성 · 배포 순서 · 레거시 종료)은 **`woolta/docs/DEPLOY.md`** 에 있다.
여기는 이 레포만의 절차다.

---

## 한 줄

```bash
ssh <user>@woolta.com
cd /home/woolta-api && ./scripts/deploy.sh
```

`git pull` → `npm ci` → prisma 생성 → 타입체크 → `pm2 reload` → 헬스체크.
타입체크를 통과해야 reload 한다.

---

## 최초 1회

```bash
nvm install 24          # package.json engines: >=24
npm i -g pm2

sudo mkdir -p /etc/woolta
sudo cp deploy/api.env.example /etc/woolta/api.env
sudo chmod 600 /etc/woolta/api.env      # DB 비밀번호가 들어간다
sudo chown $USER /etc/woolta/api.env
$EDITOR /etc/woolta/api.env

sudo cp deploy/nginx/api.woolta.com.conf   /etc/nginx/sites-available/
sudo cp deploy/nginx/image.woolta.com.conf /etc/nginx/sites-available/
# sites-enabled 심볼릭 링크 → certbot → nginx -t → reload

pm2 start ecosystem.config.cjs && pm2 save && pm2 startup
```

---

## 포트 4500

레거시 Koa `woolbankApi` 가 **4000** 을 쓰고 있어 피했다. 코드 기본값도 4500 이며(`app.ts`) pm2 와 `api.env` 가 같은 값을 준다.

Koa 를 내린 뒤에도 4500 을 유지한다 — 바꾸면 nginx 와 FE 의 `NEXT_PUBLIC_GRAPHQL_API` 를 함께 고쳐야 한다.

---

## 이미지 업로드 — 디스크를 공유해야 한다

```
쓰기  woolta-api → $IMAGE_UPLOAD_PATH
읽기  nginx(image.woolta.com) → 같은 디렉터리  ← 백엔드 미개입
```

`IMAGE_UPLOAD_PATH` 와 `image.woolta.com` vhost 의 `root` 가 **같은 경로**여야 한다. 기본값은 `/home/blog/post/upload/` — 레거시 Spring 이 쓰던 곳이고, 기존 744건이 이 디렉터리에 있다.

deploy.sh 가 이 디렉터리에 쓸 수 있는지 먼저 확인하고, 못 쓰면 배포를 중단한다.

**API 를 다른 서버로 옮긴다면** 공유 스토리지(NFS 등)나 오브젝트 스토리지가 선행돼야 한다. 그냥 옮기면 업로드는 되는데 조회가 404 난다.

---

## DB 스키마 변경

Prisma migrate 를 쓰지 않는다. DDL 은 `scripts/*.sql` 에 두고 전용 러너로 적용한다.

```bash
source /etc/woolta/api.env
node scripts/applyImageDdl.mjs --dry-run   # 먼저 무엇이 나갈지 본다
node scripts/applyImageDdl.mjs
```

러너는 이미 적용된 컬럼·인덱스를 건너뛰므로 여러 번 돌려도 안전하다.

**레거시와 공존하는 테이블은 컬럼 추가 시 반드시 DEFAULT 를 준다.** `post_file` 은 Spring jar 도 쓰는데, DEFAULT 가 없으면 컬럼을 모르는 jar 의 INSERT 가 실패한다.

---

## 확인

```bash
# 공개 쿼리 — 인증 불필요
curl -sf -X POST https://api.woolta.com/blog/graphql \
  -H 'Content-Type: application/json' \
  -d '{"query":"{ categoryList { totalCount } }"}'

# 인증 게이트 — 401 이어야 정상
curl -s -o /dev/null -w '%{http_code}\n' \
  -X POST https://api.woolta.com/image/upload -F 'file=@test.png'
```

엔드포인트 목록은 기동 로그에 찍힌다:

```
pm2 logs woolta-api --lines 20
```

---

## 롤백

```bash
git log --oneline -10
git reset --hard <직전 커밋>
./scripts/deploy.sh
```

DDL 이 섞인 배포는 코드만 되돌려서는 부족하다. 컬럼 **추가**는 하위호환이라 그대로 둬도 되지만, 삭제·타입 변경이 있었다면 DDL 을 먼저 되돌린다.
