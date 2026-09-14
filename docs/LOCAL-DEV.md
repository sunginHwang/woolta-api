# 로컬 개발 가이드 — woolta 대시보드 ↔ woolta-api

`apps/woolta`(대시보드 FE)가 로컬 woolta-api의 todo/memo/article GraphQL 도메인을 호출하도록 띄우는 절차.
2026-09-04 기준으로 전 구간 실측 검증했다.

## 1. 왜 HTTPS가 필요한가

인증 쿠키(`w.access`/`w.refresh`)가 `secure: true` + `domain: .woolta.com` 으로 발급된다
(`src/shared/auth/cookie.ts:6-12`, `src/shared/auth/config.ts:9`). 따라서 브라우저는

- **HTTPS 오리진**이 아니면 쿠키를 저장·전송하지 않고,
- 호스트가 `.woolta.com` 하위가 아니면 도메인 불일치로 쿠키를 거부한다.

`http://localhost:4300` 으로는 로그인 상태가 유지되지 않는다. 그래서 FE를 `https://local.woolta.com:4433` 으로 띄운다.

**반대로 API는 평문 HTTP로 충분하다.** `apps/woolta/next.config.js` 의 rewrites가
`/api/gql/*` → `${NEXT_PUBLIC_GRAPHQL_API}/*` 로 프록시하므로 브라우저는 API를 직접 치지 않는다.
HTTPS는 FE의 4433에서 종료되고, API 구간은 서버↔서버 통신이다. 결과적으로

- API용 인증서·hosts 항목·ssl-proxy 프로세스가 **전부 불필요**
- CORS도 불필요 — 브라우저 입장에선 same-origin (`CORS_ORIGINS` 미설정 유지)

> `apps/woolbank`(4200/433)은 rewrites가 없어 브라우저가 API를 직접 호출한다.
> 그 앱까지 로컬 연동하려면 API에 HTTPS + `CORS_ORIGINS`가 필요하다 — 이 문서 범위 밖.

## 2. 요청 경로

```
브라우저
  └─ https://local.woolta.com:4433          local-ssl-proxy (HTTPS 종료)
       └─ http://localhost:4300             Next dev (apps/woolta)
            ├─ /api/gql/*  → rewrite
            │    └─ http://localhost:4500   woolta-api (GraphQL)
            │         └─ MySQL (woolta.com:3306)
            ├─ /api/blog/* → rewrite
            │    └─ https://api-blog.woolta.com   레거시 Spring blog REST (운영)
            └─ SSR fetch → http://localhost:4500 직접 호출
```

fetcher는 `libs/common/src/lib/utils/graphqlFetch.ts` 의 `getGraphqlHost()` 에서 갈린다 — 브라우저는
`NEXT_PUBLIC_GRAPHQL_API_BROWSER`, SSR은 `NEXT_PUBLIC_GRAPHQL_API`(미설정 시 레거시
`NEXT_PUBLIC_BLOG_API*` 로 폴백). 최종 URL은 `{host}/{domain}/graphql` 이며 6개 도메인 공통이다.

> **GraphQL과 blog REST는 서로 다른 서버다.** woolta-api는 blog GraphQL을 이미 갖고 있지만
> FE의 blog 화면은 아직 레거시 Spring REST(`/post/...`)를 쓴다. 이관이 끝나면 `/api/blog` rewrite와
> `NEXT_PUBLIC_BLOG_API` 는 함께 사라진다.

## 3. 최초 1회 세팅

이 맥은 1~3번이 이미 완료돼 있다. 새 환경에서만 필요하다.

**1) hosts 등록**

```bash
echo "127.0.0.1 local.woolta.com" | sudo tee -a /etc/hosts
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

**2) mkcert CA 신뢰 등록**

```bash
brew install mkcert
mkcert -install
```

**3) 인증서 확인** — `woolta/cert/local.woolta.com+2.pem` 이 본인 머신 CA로 검증되는지:

```bash
openssl verify -CAfile "$(mkcert -CAROOT)/rootCA.pem" cert/local.woolta.com+2.pem   # → OK
```

`OK`가 아니면 다른 개발자 CA로 서명된 것이므로 재발급한다(재발급본은 커밋하지 않음):

```bash
mkcert -cert-file cert/local.woolta.com+2.pem \
  -key-file cert/local.woolta.com+2-key.pem \
  local.woolta.com localhost 127.0.0.1
```

**4) FE env 파일** — `apps/woolta/.env.local` (커밋 대상, 비밀정보 없음):

```
NEXT_PUBLIC_GRAPHQL_API=http://localhost:4500
NEXT_PUBLIC_GRAPHQL_API_BROWSER=/api/gql
```

`NEXT_PUBLIC_BLOG_API`는 **건드리지 않는다** — 그 변수는 레거시 Spring blog REST(`/post/...`)용이고
아직 운영에만 존재한다. 로컬로 돌리면 blog 화면이 404로 깨진다.
자세한 배경은 `woolta/docs/rest-to-graphql-migration.md` 참고.

**5) API env** — 이 레포는 `.env`를 로드하지 않으므로 셸에 직접 넣는다.
아래를 `~/.woolta-api.env` 같은 **레포 밖** 파일에 두고 `source` 한다 (비밀번호가 커밋되면 안 됨):

```bash
export PORT=4500
export BLOG_DATABASE_URL="mysql://root:<PASSWORD>@woolta.com:3306/test"
export WOOLBANK_DATABASE_URL="mysql://root:<PASSWORD>@woolta.com:3306/woolBank"
export DASHBOARD_DATABASE_URL="mysql://root:<PASSWORD>@woolta.com:3306/dashboard"
export AUTH_SECRET_TOKEN_KEY="test"

# 이미지 업로드 — 로컬은 아무 디렉터리나 쓰면 된다.
# 운영은 nginx(image.woolta.com)가 읽는 디렉터리와 **같은 경로**여야 한다:
#   IMAGE_UPLOAD_PATH=/home/blog/post/upload/
#   IMAGE_PUBLIC_URL=https://image.woolta.com
export IMAGE_UPLOAD_PATH="/tmp/woolta-uploads"
export IMAGE_PUBLIC_URL="http://localhost:4500/local-uploads"
```

> **업로드는 woolta-api, 조회는 nginx** 다. woolta-api 는 파일을 쓰기만 하고
> `image.woolta.com` 이 같은 디렉터리를 직접 읽어 내려준다. 그래서 업로드 서버는
> nginx 와 디스크를 공유해야 한다 — 다른 서버에 띄우면 새 이미지가 조회되지 않는다.

DB 이름 매핑 (운영 MySQL `woolta.com:3306`):

| env | DB | 담는 것 |
|---|---|---|
| `BLOG_DATABASE_URL` | `test` | board, board_category, post_file, web_push_* |
| `WOOLBANK_DATABASE_URL` | `woolBank` | account_book, bucket_list, user, user_share_code |
| `DASHBOARD_DATABASE_URL` | `dashboard` | todo, memo, article_curation |

> `woolBank` 는 **대소문자 구분**. 소문자 `woolbank` DB도 존재하지만 비어 있다.
> 운영 DB이므로 `prisma db push` 금지 — 스키마 변경은 `scripts/*.sql` 을 수동 실행한다.

## 4. 매번 기동 (터미널 3개)

```bash
# ① woolta-api — Node 24 필수
cd woolta-api && nvm use && source ~/.woolta-api.env && npm run dev

# ② 대시보드 FE (4300)
cd woolta && pnpm turbo run dev --filter=woolta

# ③ HTTPS 프록시 (4433 → 4300)
cd woolta && pnpm dev:woolta-ssl
```

접속: **https://local.woolta.com:4433**

## 5. 검증

```bash
# 가드 — 쿠키 없으면 UNAUTHENTICATED
curl -s -X POST https://local.woolta.com:4433/api/gql/todo/graphql \
  -H 'Content-Type: application/json' -d '{"query":"{ todoList { totalCount } }"}'

# 로컬 API에 도달했는지 — 에러 stacktrace 경로가 woolta-api 로컬 경로여야 한다.
# 운영(api-blog.woolta.com)으로 새면 Spring 형식의 404 JSON이 돌아온다.

# 실 데이터 (인증 불필요)
curl -s -X POST https://local.woolta.com:4433/api/gql/blog/graphql \
  -H 'Content-Type: application/json' \
  -d '{"query":"{ categoryList { totalCount itemList { value label } } }"}'
```

쿠키 인증까지 확인하려면 테스트 토큰을 직접 발급한다 (`AUTH_SECRET_TOKEN_KEY` 기본값 `test`):

```bash
TOKEN=$(node -e "const j=require('jsonwebtoken');console.log(j.sign({userId:13,loginType:'user'},'test',{algorithm:'HS512',expiresIn:'15m'}))")
curl -s -X POST https://local.woolta.com:4433/api/gql/woolBank/graphql \
  -H 'Content-Type: application/json' --cookie "w.access=$TOKEN" \
  -d '{"query":"{ accountList { totalCount } }"}'
```

실측 결과: blog `categoryList` 9건, woolBank `accountList` 4건, todo `todoList` 0건
(dashboard 테이블이 아직 비어 있음 — localStorage 이관 전이라 정상).

## 6. 함정

**woolta-api 는 4500 을 쓴다.** 레거시 woolbankApi 가 4000 을 하드코딩(`woolbankApi/src/index.ts:37`,
`process.env.PORT` 무시)해 두어 겹치지 않도록 기본값 자체를 옮겼다. 포트를 다시 바꾸려면
`.env.local` 의 `NEXT_PUBLIC_GRAPHQL_API` 와 배포측 nginx 도 함께 고쳐야 한다.

**`NEXT_PUBLIC_*` 는 컴파일 시 인라인된다.** `.env.local` 을 만들거나 고친 뒤에는 Next dev 서버를
**재시작**해야 한다. 부팅 로그의 `- Environments: .env.local, .env` 줄로 반영 여부를 확인한다.

**Next는 같은 디렉토리의 dev 서버 중복 실행을 거부한다.** 포트를 바꿔도 막힌다
(`You can access the existing server at ... or run kill <PID>`). 기존 프로세스를 먼저 정리한다.

```bash
lsof -nP -iTCP:4300 -sTCP:LISTEN
```

**Node 버전.** woolta-api는 `.nvmrc`/`engines` 모두 24를 요구한다(`nvm use`). FE는 20으로 동작한다.
npm engines는 경고만 내고 통과시키므로 20에서도 부팅은 되지만 맞춰두는 게 안전하다.

**`allowedDevOrigins` 에 호스트명이 있어야 한다.** HTTPS 도메인으로 접속하면 Next dev가 `/_next`
요청을 cross-origin으로 보고 403을 준다. `apps/woolta/next.config.js:8` 에 `['local.woolta.com']` 이
이미 들어 있다 — 다른 호스트명으로 띄우려면 여기에 추가해야 페이지가 뜬다.

**`user_refresh_token` 테이블은 적용 완료(2026-09-04).** 없으면 refresh 회전이
`INTERNAL_SERVER_ERROR`(`prismaUser.userRefreshToken.findUnique()` 실패)로 깨지고 소셜 로그인도
`save()` 에서 실패한다. 새 DB 환경을 만들 때는 아래를 1회 적용한다:

```bash
mysql -h <host> -u <user> -p woolBank < scripts/userRefreshTokenDdl.sql
```

**blog 쓰기는 `BLOG_ADMIN_USER_IDS` 가 없으면 닫힌다.** 미설정 시 `createPost`/`updatePost`/`deletePost`/
`sendPushToAll` 이 `FORBIDDEN`(`myExtension: BLOG_ADMIN_NOT_CONFIGURED`)으로 떨어진다 — 설정 누락이
전체 공개가 되지 않도록 의도한 동작이다. 로컬에서 blog 쓰기를 테스트하려면 API env에 추가한다:

```bash
export BLOG_ADMIN_USER_IDS=13   # 쉼표 구분, woolBank user.id 기준
```

## 7. 스키마 동기화

API 스키마를 고쳤으면 FE codegen까지 이어서 돌린다.

```bash
# woolta-api
npm run codegenAll        # 6개 도메인 codegen + 루트 schema.generated.graphqls 병합

# FE로 복사 (경로 고정)
cp woolta-api/schema.generated.graphqls woolta/tools/external-schema/api-autogen.graphql

# woolta
pnpm codegen              # 도메인별 gql.generated.ts (타입 + TanStack Query 훅)
```

`mergeSchema` 는 도메인 간 Query/Mutation 필드명·타입명이 겹치면 실패하므로, 새 타입을 추가했으면
반드시 `codegenAll` 로 검증한다. 두 파일이 같은지는 `diff` 로 확인:

```bash
diff woolta-api/schema.generated.graphqls woolta/tools/external-schema/api-autogen.graphql
```
