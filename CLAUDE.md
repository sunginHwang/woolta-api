# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # dev server (tsx watch, entry: src/app.ts, port 4000)
npm run codegenAll       # graphql-codegen for all domains + merged FE schema (mergeSchema)
npm run codegen<Domain>  # codegen for one domain: Blog / WoolBank / User / Todo / Memo / Article
npm run mergeSchema      # merge all domain SDLs into schema.generated.graphqls (repo root, for FE codegen)
npx prisma generate --schema=prisma/schema<Domain>.prisma  # regenerate one domain's Prisma client
```

- Runtime: **Node 24** (`.nvmrc`, `engines`), **ESM** (`"type": "module"`), TypeScript 6, dev runner **tsx** (tsc is typecheck-only via `noEmit`; `module: "preserve"` allows extensionless relative imports). ESM gotcha: named imports from CJS packages can fail at runtime even when tsc passes (e.g. use `import jwt from 'jsonwebtoken'` + `jwt.TokenExpiredError`, default-import lodash) — always boot-test after adding a CJS dependency.
- Stack: Apollo Server 5 (`expressMiddleware` comes from `@as-integrations/express5`, not `@apollo/server/express4`), Express 5 (no body-parser — use `express.json()`), Prisma 7, graphql-codegen CLI 7 + `@eddeee888/gcg-typescript-resolver-files` 0.18. `graphql` stays on 16.x (Apollo 5 peer dep).
- No tests and no lint script. Formatting is Prettier (`.prettierrc`; generated code is excluded via `.prettierignore`).
- Databases are MySQL, configured via `BLOG_DATABASE_URL`, `WOOLBANK_DATABASE_URL`, and `DASHBOARD_DATABASE_URL`. Nothing loads `.env` files — the env vars must already be set in the shell.
- **Prisma 7 specifics**: schemas use the `prisma-client` generator (emits TypeScript into `prisma/generated/<domain>`); import everything from the `<output>/client` entrypoint. Datasource blocks have **no `url`** — the connection string is passed at runtime via `new PrismaClient({ adapter: new PrismaMariaDb(process.env.<DOMAIN>_DATABASE_URL!) })` in each domain's `utils/prismaClient.ts`.
- Blog domain extras: `BLOG_AUTHOR_USER_NO` (temporary author identity until the external auth service is wired in, see `src/apps/blog/middlewares/currentUser.ts`) and `BLOG_UPLOAD_PATH` (image upload dir, defaults to `/home/blog/post/upload/`).

## Architecture

Detailed patterns, conventions, and migration history live in `docs/ARCHITECTURE.md` — read it before adding domains, resolvers, or Prisma models. The summary below covers the essentials.

A single Express app (`src/app.ts`) hosts **six independent GraphQL domains**, each with its own Apollo Server 4 instance, schema, generated code, and Prisma schema:

| Domain | Endpoint | Source | Prisma schema / client |
|---|---|---|---|
| blog | `/blog/graphql` | `src/apps/blog/` | `prisma/schemaBlog.prisma` → `prisma/generated/blog` |
| woolBank | `/woolBank/graphql` | `src/apps/woolBank/` | `prisma/schemaWoolBank.prisma` → `prisma/generated/woolBank` |
| user | `/user/graphql` | `src/apps/user/` | `prisma/schemaUser.prisma` → `prisma/generated/user` (same `WOOLBANK_DATABASE_URL` — user/user_share_code tables live in the woolbank DB) |
| todo | `/todo/graphql` | `src/apps/todo/` | `prisma/schemaTodo.prisma` → `prisma/generated/todo` |
| memo | `/memo/graphql` | `src/apps/memo/` | `prisma/schemaMemo.prisma` → `prisma/generated/memo` |
| article | `/article/graphql` | `src/apps/article/` | `prisma/schemaArticle.prisma` → `prisma/generated/article` |

The todo/memo/article domains (woolta dashboard apps, spec: `../woolta/docs/api-spec-todo-memo-article.md`) share the `dashboard` DB via `DASHBOARD_DATABASE_URL`. Unlike the legacy-mapped domains, their tables were created by `scripts/dashboardDdl.sql` (plain SQL — never `prisma db push`, which risks dropping the other domains' tables in the shared DB). All their resolvers use `requireRealUser`, ids are server-issued UUIDs, and each domain has a bulk-import mutation (`importTodoList`/`importMemoList`/`importArticleList`) for the one-time localStorage migration that returns clientId→server-id mappings.

### GraphQL conventions & merged FE schema

All domain schemas follow the Croquis GraphQL style guide **minus snake_case** (see `docs/ARCHITECTURE.md` §4.6 for the full rules): single-model queries are the camelCase model name returning a nullable type; list queries are `<model>List` returning a `<Model>List { totalCount, itemList }` wrapper; non-model/special queries and all mutations are verb-first camelCase; every mutation with arguments takes a single `input: <MutationName>Input!`; mutations return a model or `Boolean!` (never bare `Int`); arrays in return types are `[X!]!`; enum values are UPPER_CASE with bidirectional DB mapping in each domain's `utils/enums.ts` (DB keeps the original lowercase/camel values — critical for `SocialLoginType`, whose legacy strings `facebook|kakaoTalk|google` must reach the DB and JWT `loginType` unchanged).

`npm run mergeSchema` (chained at the end of `codegenAll`, script: `scripts/mergeSchema.ts`) merges the six per-domain `generates/schema.generated.graphqls` into root-level **`schema.generated.graphqls`** — the single schema the FE points its codegen at. It fails the build on any cross-domain Query/Mutation-field or type-name collision, so **type and root-field names must stay unique across domains** (that's why woolBank uses `BucketListTodo`/`WoolBankUser`/`createBucketListTodo` instead of `Todo`/`User`/`createTodo`). It is a build artifact only; runtime still serves six separate endpoints.

Keep domains separate — never import across `src/apps/*` boundaries, and always use each domain's own Prisma client (`src/apps/<domain>/utils/prismaClient.ts`). The one shared layer is `src/shared/auth/`.

### Shared auth (`src/shared/auth/`)

Cookie-based JWT shared across `.woolta.com` (cookies `w.access`/`w.refresh`, HS512, payload `{userId, loginType}` — compatible with tokens issued by the legacy `woolbankApi`). `buildAuthContext(req, res)` verifies the access cookie and transparently re-issues from the refresh cookie on expiry; Apollo context functions inject it as `ctx.auth`. Resolvers call `requireAuth(ctx)` / `requireRealUser(ctx)` (the latter rejects share-code logins). The user domain issues tokens (`loginBySocial`, `loginByShareCode`, `checkToken`, `refreshTokenCheck`); woolBank consumes them. Secret comes from `AUTH_SECRET_TOKEN_KEY` (default 'test').

### Codegen-driven resolver layout

Codegen uses `@eddeee888/gcg-typescript-resolver-files` (configs: `codegenBlog.ts` / `codegenWoolBank.ts` at the root), which enforces a file-per-field convention inside each domain:

- `schema/schema.graphql` (blog nests it per module, e.g. `schema/user/schema.graphql`) — the SDL source of truth.
- `schema/resolvers/Query/<field>.ts`, `schema/resolvers/Mutation/<field>.ts`, and `schema/resolvers/<Type>.ts` — one file per resolver, each exporting a resolver typed as `NonNullable<QueryResolvers['<field>']>` etc.
- `generates/` — generated `typeDefs.generated.ts`, `resolvers.generated.ts` (auto-wires the resolver files), `types.generated.ts`. Never edit these by hand.

**Workflow for schema changes**: edit the `.graphql` file → run the domain's codegen script → it scaffolds missing resolver files and rewires `resolvers.generated.ts` → implement the resolver body. Resolver files import types from `./../../../generates/types.generated` and instantiate their own `PrismaClient` at module scope.

### Blog domain

Full migration of the legacy Spring API (`../react-tech-blog-api`) minus auth: posts/categories under `schema/post/`, web push under `schema/push/` (`web-push` npm, VAPID keys read from the `web_push_key` DB table). Shared pieces live in `src/apps/blog/`: `utils/prismaClient.ts` (single shared PrismaClient), `services/PostService.ts` (category/post validation + response mapping), `services/WebPushService.ts`, `utils/postContent.ts` (markup stripping / subDescription rules ported verbatim). Image upload stayed REST (multipart): `POST /blog/file/upload/image[s]` via `routes/fileUpload.ts`, mounted in `app.ts`, responding in the legacy `{code, message, data}` envelope. Author identity is stubbed in `middlewares/currentUser.ts` (TODO: external auth service) — resolvers needing the author call `getCurrentUser(ctx.req)`.

### woolBank domain

Full migration of the legacy `../woolbankApi` (Koa REST): account book (with installment/scheduledPayment), categories/statistics, accounts + deposits, bucket list + todos, regular expenditures, and `mainInfo`. Notes:
- The daily regular-expenditure cron (`scheduleRegularExpenditure`, midnight) is registered in `app.ts` only when `ENABLE_WOOLBANK_CRON=1` — keep it off while the legacy Koa server still runs its own cron.
- Bucket-list image upload is REST: `POST /woolBank/file/upload/image` (multer + sharp 80x80 thumbnail) returns `{imageUrl, thumbImageUrl}` which the mutations take as plain args. Env: `WOOLBANK_UPLOAD_PATH`, `WOOLBANK_UPLOAD_URL`; uploads are served at `/uploads`.
- All resolvers take identity from `ctx.auth` via the shared guards — never hardcode userIds.

### Errors

Resolvers throw `GraphQLError` (from `graphql/error`) with `extensions: { code, myExtension }` for expected failures — follow that pattern rather than returning error payloads.

## Workspace context

This repo lives inside the `study/` workspace (see `../CLAUDE.md`): the `woolta/` Next.js frontends consume this API alongside the `woolbankApi` REST backend, sharing cookie-based JWT auth across the `.woolta.com` domain.
