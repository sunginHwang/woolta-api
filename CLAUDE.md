# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # dev server (nodemon + ts-node, entry: src/app.ts, port 4000)
npm run codegenAll       # graphql-codegen for all domains
npm run codegen<Domain>  # codegen for one domain: Blog / WoolBank / User / Todo / Memo / Article
npx prisma generate --schema=prisma/schema<Domain>.prisma  # regenerate one domain's Prisma client
```

- No tests and no lint script. Formatting is Prettier (`.prettierrc`; generated code is excluded via `.prettierignore`).
- Databases are MySQL, configured via `BLOG_DATABASE_URL`, `WOOLBANK_DATABASE_URL`, and `DASHBOARD_DATABASE_URL`. Note: `dotenv` is a dependency but `dotenv.config()` is never called — the env vars must already be set in the shell for Prisma to connect.
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

The todo/memo/article domains (woolta dashboard apps, spec: `../woolta/docs/api-spec-todo-memo-article.md`) share the `dashboard` DB via `DASHBOARD_DATABASE_URL`. Unlike the legacy-mapped domains, their tables were created by `scripts/dashboardDdl.sql` (plain SQL — never `prisma db push`, which risks dropping the other domains' tables in the shared DB). All their resolvers use `requireRealUser`, ids are server-issued UUIDs, and each domain has a bulk-import mutation (`importTodos`/`importMemos`/`importArticles`) for the one-time localStorage migration that returns clientId→server-id mappings.

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
