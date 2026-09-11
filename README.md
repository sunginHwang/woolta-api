

## 로컬 실행
> npm run dev

DB 접속 정보(`*_DATABASE_URL`)를 셸에 넣어야 한다 — 이 레포는 `.env` 를 로드하지 않는다.
woolta 대시보드 FE와 함께 띄우는 절차(HTTPS·쿠키 설정 포함)는 [docs/LOCAL-DEV.md](docs/LOCAL-DEV.md) 참고.

## DB 싱크
> npx prisma generate --schema=prisma/{schema_name}.prisma

## graphql-codegen
> npm run codegenAll # graphql-codegen을 통해 typescript type을 생성합니다.