# woolta-api 아키텍처 & 컨벤션

woolta 서비스군의 통합 GraphQL 백엔드. 기존 두 개의 레거시 REST 서버를 이관해 하나의 Express 앱으로 통합했고, 대시보드 신규 앱 3개를 추가했다.

- `react-tech-blog-api` (Spring Boot) → **blog 도메인**
- `woolbankApi` (Koa + TypeORM) → **woolBank 도메인** + **user 도메인**(인증 분리)
- woolta 대시보드 로컬스토리지 앱(스펙: `woolta/docs/api-spec-todo-memo-article.md`) → **todo / memo / article 도메인** (신규 테이블, DDL: `scripts/dashboardDdl.sql`)

## 1. 전체 구조

하나의 Express 앱(`src/app.ts`)이 **독립된 GraphQL 도메인 6개**를 Apollo Server 4 인스턴스로 각각 호스팅한다.

| 도메인 | 엔드포인트 | 소스 | Prisma 스키마 | 실제 DB |
|---|---|---|---|---|
| blog | `/blog/graphql` | `src/apps/blog/` | `prisma/schemaBlog.prisma` | `woolta.com/test` |
| woolBank | `/woolBank/graphql` | `src/apps/woolBank/` | `prisma/schemaWoolBank.prisma` | `woolta.com/woolBank` |
| user | `/user/graphql` | `src/apps/user/` | `prisma/schemaUser.prisma` | `woolta.com/woolBank` (user, user_share_code 테이블 공유) |
| todo | `/todo/graphql` | `src/apps/todo/` | `prisma/schemaTodo.prisma` | `woolta.com/dashboard` |
| memo | `/memo/graphql` | `src/apps/memo/` | `prisma/schemaMemo.prisma` | `woolta.com/dashboard` |
| article | `/article/graphql` | `src/apps/article/` | `prisma/schemaArticle.prisma` | `woolta.com/dashboard` |

```
src/
├── app.ts                     # Express + Apollo 3개 부팅, REST 업로드 라우트, cron 등록
├── shared/
│   └── auth/                  # ★ 유일한 도메인 간 공유 레이어 (인증)
│       ├── config.ts          #   토큰 이름/시크릿/만료
│       ├── token.ts           #   JWT 생성/검증 (HS512)
│       ├── cookie.ts          #   .woolta.com 쿠키 세팅
│       ├── context.ts         #   buildAuthContext (검증 + refresh 재발급)
│       └── guards.ts          #   requireAuth / requireRealUser
└── apps/
    └── <domain>/
        ├── schema/<module>/schema.graphql   # SDL 원본 (codegen 입력)
        ├── schema/<module>/resolvers/       # Query/·Mutation/·타입 리졸버 (필드당 1파일)
        ├── generates/                       # codegen 산출물 — 직접 수정 금지
        ├── services/                        # 비즈니스 로직·트랜잭션
        ├── utils/prismaClient.ts            # 도메인당 1개의 공유 PrismaClient
        └── routes/                          # multipart 등 GraphQL 부적합 기능의 REST 라우트
```

**도메인 격리 원칙**: `src/apps/*` 간 상호 import 금지. 유일한 예외는 `src/shared/auth`. 각 도메인은 반드시 자기 Prisma 클라이언트만 사용한다 (user와 woolBank가 같은 DB를 봐도 클라이언트는 분리).

## 2. 인증 아키텍처

**user 도메인이 발급하고, 모든 도메인이 `shared/auth`로 소비한다.**

- 토큰: JWT HS512, payload `{ userId, loginType }`. 레거시 woolbankApi 발급분과 완전 호환(동일 시크릿/알고리즘). access 7일 / refresh 60일.
- 쿠키: `w.access` / `w.refresh`, `domain: .woolta.com`, httpOnly + secure + sameSite none, 만료 1년 — FE 전체(blog·bank)가 쿠키만으로 인증.
- `loginType`(=authType): `user`(정상 로그인) | `share`(공유코드 읽기전용 로그인).

요청 처리 플로우:

```
요청 → Apollo context: buildAuthContext(req, res)
         ├─ w.access 검증 성공 → ctx.auth = { userId, authType }
         ├─ 만료 + w.refresh 유효 → 토큰 재발급 + Set-Cookie 후 인증 처리 (무중단 갱신)
         └─ 실패 → ctx.auth = null
리졸버 → requireAuth(ctx)      : 미인증 시 UNAUTHENTICATED "인증 토큰 정보가 존재하지 않습니다."
       → requireRealUser(ctx)  : share 로그인 거부, FORBIDDEN "권한이 없습니다."
```

user 도메인 API: `loginBySocial`(미가입 시 자동 회원가입 — password는 `scrypt(socialId, salt=id)`), `loginByShareCode`, `logout`, `refreshTokenCheck`, `upsertShareCode` / `me`, `accessCheck`, `checkToken`, `shareCode`.

**인증 적용 규칙(woolBank)**: 조회·생성은 `requireAuth`, 파괴적/데이터 소유 변경(가계부 CUD, 카테고리 삭제, 정기지출 CD, 투두 전체)은 `requireRealUser`. 모든 쿼리는 `ctx.auth.userId`로 스코프 — **userId 하드코딩 금지**.

**인증 적용 규칙(todo/memo/article)**: share 로그인은 woolBank 조회 공유 전용이므로 대시보드 개인 데이터는 **전 리졸버 `requireRealUser`**. 타 유저 리소스는 존재 노출 방지를 위해 NOT_FOUND 처리.

## 3. Codegen 워크플로우 (핵심 개발 사이클)

`@eddeee888/gcg-typescript-resolver-files` 기반. 도메인별 설정: `codegenBlog.ts` / `codegenWoolBank.ts` / `codegenUser.ts` / `codegenTodo.ts` / `codegenMemo.ts` / `codegenArticle.ts`.

```
1. schema/<module>/schema.graphql 수정
2. npm run codegen<Domain>          # 누락 리졸버 파일 스캐폴딩 + generates/ 재생성
3. 스캐폴딩된 리졸버 구현
4. npx tsc --noEmit                 # 타입 검증 (테스트 없음 — 타입이 1차 안전망)
```

- 리졸버는 **GraphQL 필드당 1파일**: `resolvers/Query/<field>.ts`, `resolvers/Mutation/<field>.ts`.
- 시그니처 고정: `export const foo: NonNullable<QueryResolvers['foo']> = async (_parent, _arg, _ctx) => ...`
- SDL 규칙: 모듈이 여러 개인 도메인은 `type Query` / `type Mutation` 선언은 한 파일에서만, 나머지는 `extend type`.
- `generates/`는 커밋하되 절대 손수정하지 않는다. `scalar DateTime`은 codegen이 `graphql-scalars`로 자동 연결.

## 4. 리졸버/서비스 컨벤션

- **에러**: `GraphQLError(한글 메시지, { extensions: { code } })`. code는 `UNAUTHENTICATED` | `FORBIDDEN` | `NOT_FOUND` | `BAD_REQUEST` 등. 레거시의 한글 메시지를 그대로 보존한다 ("존재 하지 않는 항목 카테고리 입니다." 등).
- **서비스 레이어**: 2개 이상 리졸버가 공유하거나 트랜잭션이 필요한 로직은 `services/*.ts`로. 리졸버는 인증 → 검증 → 서비스 호출 → 매핑만.
- **트랜잭션**: 다중 쓰기는 반드시 `prisma.$transaction` (예: 입금 생성 + 계좌 잔액 갱신, 버킷 삭제 + 투두 삭제, 가계부 생성 + 정기지출 동시 생성).
- **부수효과 패턴**: fire-and-forget은 `.catch(log)`로 요청 응답과 분리 (예: 포스트 생성 시 웹푸시).
- **PrismaClient**: 도메인당 1개 싱글턴(`utils/prismaClient.ts`)만 사용. 파일마다 `new PrismaClient()` 금지.

## 4.5 런타임/스택 (2026-08 메이저 업데이트)

Node 24 (`.nvmrc`) · **ESM**(`"type": "module"`) · TypeScript 6 · dev 러너 **tsx**(`npm run dev` = tsx watch, tsc는 `noEmit` 타입 체크 전용) · Apollo Server 5(`expressMiddleware`는 `@as-integrations/express5`) · Express 5(body-parser 제거, `express.json()`) · Prisma 7 · codegen CLI 7 + gcg 0.18 · graphql-scalars 2. `graphql`은 Apollo 5 peer dep 제약으로 16.x 유지.

ESM 주의: CJS 패키지의 named import는 tsc를 통과해도 런타임에 실패할 수 있다(jsonwebtoken, lodash는 default import 후 구조분해). 새 CJS 의존성 추가 시 반드시 부팅 확인.

## 5. Prisma 컨벤션

- **마이그레이션 없음** — 레거시 테이블은 Prisma가 매핑만 하고, 신규 테이블(dashboard DB)은 SQL DDL 스크립트(`scripts/dashboardDdl.sql`)로 만든 뒤 매핑한다. `prisma db push`는 쓰지 않는다(한 DB를 여러 스키마가 공유해 타 도메인 테이블 drop 위험). 스키마 작성/수정 시 실 DB에 `prisma db pull`을 스크래치 파일로 떠서 대조 후 확정한다.
- 모델은 PascalCase + `@@map("snake_case_table")`, 필드는 camelCase + `@map("snake_case_column")`.
- `createdAt DateTime @default(now())` / `updatedAt DateTime @updatedAt` — 레거시(JPA @PrePersist, TypeORM)처럼 앱 레벨에서 관리.
- boolean 컬럼이 tinyint(4)여도 `Boolean` 매핑 정상 동작 (실데이터 검증 완료).
- 클라이언트 출력은 `prisma/generated/<domain>` 고정. 스키마 수정 후 `npx prisma generate --schema=prisma/schema<Domain>.prisma`.
- **Prisma 7**: generator는 `prisma-client`(TypeScript 소스 생성), import는 `<output>/client` 단일 entrypoint(모델 타입·Prisma 네임스페이스 포함). datasource 블록에 `url` 금지 — 접속 문자열은 각 도메인 `utils/prismaClient.ts`에서 `new PrismaClient({ adapter: new PrismaMariaDb(env) })`로 런타임 주입.
- **GraphQL 관계 필드는 nullable로**: codegen 타입이 non-null 관계를 재귀적으로 요구해 include 부담이 커지므로, 응답에 항상 싣지 않는 관계(`Deposit.account`, `Todo.user` 등)는 SDL에서 nullable로 선언하고 리졸버는 필요한 include만 한다.

## 6. GraphQL로 옮기지 않는 것 (REST 유지)

multipart 파일 업로드는 Express REST로 분리하고, GraphQL 뮤테이션은 업로드 결과 URL만 인자로 받는다.

| 라우트 | 용도 | 응답 |
|---|---|---|
| `POST /blog/file/upload/image[s]` | 블로그 이미지 (multer) | 레거시 envelope `{code, message, data}` 유지 |
| `POST /woolBank/file/upload/image` | 버킷리스트 이미지 (multer + sharp 80x80 썸네일) | `{imageUrl, thumbImageUrl}` |
| `GET /uploads/*` | 업로드 파일 정적 서빙 | |

## 7. 스케줄러

`node-cron`으로 매일 자정 `scheduleRegularExpenditure` 실행 (정기지출 → 가계부 자동 등록, 할부 회차 관리, 짧은 달 말일 보정). **`ENABLE_WOOLBANK_CRON=1`일 때만 등록** — 레거시 Koa 서버가 살아있는 동안 중복 실행(가계부 이중 등록)을 막기 위한 가드. Koa 서버를 내릴 때 켠다.

## 8. 환경변수

`.env` 로딩이 없으므로 **셸에 직접 export** 해야 한다.

| 변수 | 용도 | 기본값 |
|---|---|---|
| `BLOG_DATABASE_URL` | blog DB (필수) | — |
| `WOOLBANK_DATABASE_URL` | woolBank + user DB (필수) | — |
| `DASHBOARD_DATABASE_URL` | todo + memo + article DB (필수) | — |
| `PORT` | 서버 포트 | 4000 |
| `AUTH_SECRET_TOKEN_KEY` | JWT 시크릿 | 'test' |
| `ENABLE_WOOLBANK_CRON` | 정기지출 cron 활성화 | off |
| `BLOG_UPLOAD_PATH` / `BLOG_AUTHOR_USER_NO` | blog 업로드 경로 / 임시 작성자 | /home/blog/post/upload/ · 1 |
| `WOOLBANK_UPLOAD_PATH` / `WOOLBANK_UPLOAD_URL` | bank 업로드 경로 / URL prefix | ./uploads · https://banketlist-api.woolta.com |

## 9. 검증 방법 (테스트 프레임워크 없음)

1. `npm run codegenAll && npx tsc --noEmit` — 타입 클린 (잔존 에러 0 — 레거시 잔재 파일은 2026-08에 정리 완료)
2. 더미 DB URL로 부팅 → 스키마/배선 검증 (`{ __typename }`)
3. 인증 플로우: `createAuthToken`으로 토큰 생성 → 쿠키로 `accessCheck`, 만료토큰+refresh 재발급, share 토큰의 `requireRealUser` 거부 확인
4. 실 DB 읽기 전용 쿼리로 데이터 검증 (쓰기 뮤테이션은 테스트 DB에서)

## 10. 이관 이력 및 남은 작업

**완료**: blog 100% (인증 제외), bank 100%, user 분리(소셜로그인·공유코드·토큰), 레거시 하드코딩(userId 13, 토큰) 전면 제거, 대시보드 3앱(todo/memo/article-curation) 신설 — 스펙 `woolta/docs/api-spec-todo-memo-article.md` 기준, 로컬스토리지 1회 이관용 import 뮤테이션 포함(id 재발급 + clientId 매핑 반환), URL 정규화·weekKey 규칙은 클라이언트 구현(`libs/article-curations`)과 동일하게 포팅.

**대시보드 v2 후보(스펙에 명시, v1 미구현)**: todos 서버 필터/카운트 쿼리, `reorder`(수동 재정렬 — `order` 필드는 준비됨), 메모 검색·페이지네이션, 서버측 SEO 파싱.

**의도적으로 남긴 것 / TODO**:
- blog 도메인 인증은 임시 스텁(`src/apps/blog/middlewares/currentUser.ts`, env `BLOG_AUTHOR_USER_NO`) — user 서비스 연동 시 이 파일만 교체. 단 blog DB user 테이블 ↔ woolBank user id 매핑 설계 필요.
- blog `post` 쿼리의 조회수 증가는 admin 제외 없이 항상 +1 (원본의 admin 스킵은 인증 연동 후 복원 — 리졸버에 TODO 주석).
- 레거시 서버 다운 시: Koa cron 중단 확인 후 `ENABLE_WOOLBANK_CRON=1` 활성화.
