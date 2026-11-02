/**
 * woolbankPushDdl.sql 을 woolBank DB 에 적용한다 (applyCalendarDdl.mjs 와 같은 방식).
 *
 * - SQL 은 woolbankPushDdl.sql 한 곳에만 둔다(단일 소스). 이 스크립트는 파싱만 한다.
 * - 이미 있는 테이블은 건너뛰므로 여러 번 돌려도 안전하다.
 * - woolBank DB 는 레거시 woolbankApi 와 공유하므로 `prisma db push` 는 절대 쓰지 않는다.
 *
 * 사용:
 *   source ~/.woolta-api.env && node scripts/applyWoolbankPushDdl.mjs [--dry-run]
 *
 * 대상은 운영 MySQL(woolta.com:3306)의 woolBank DB 다 — docs/LOCAL-DEV.md 참고.
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import mariadb from 'mariadb';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DDL_PATH = join(ROOT, 'scripts', 'woolbankPushDdl.sql');
const isDryRun = process.argv.includes('--dry-run');

const url = process.env.WOOLBANK_DATABASE_URL;
if (!url) {
  console.error('WOOLBANK_DATABASE_URL 이 없다. `source ~/.woolta-api.env` 후 다시 실행할 것.');
  process.exit(1);
}

/** 주석 줄을 걷어내고 세미콜론으로 자른 CREATE TABLE 문장들 */
const statements = readFileSync(DDL_PATH, 'utf8')
  .split(';')
  .map((chunk) =>
    chunk
      .split('\n')
      .filter((line) => !line.trim().startsWith('--'))
      .join('\n')
      .trim(),
  )
  .filter((chunk) => chunk !== '');

const tableNameOf = (statement) => statement.match(/CREATE TABLE(?:\s+IF NOT EXISTS)?\s+`?(\w+)`?/i)?.[1] ?? null;

const connection = await mariadb.createConnection({ ...parseUrl(url), multipleStatements: false });

try {
  const [{ db }] = await connection.query('SELECT DATABASE() AS db');
  console.log(`대상 DB: ${db}`);

  const created = [];

  for (const statement of statements) {
    const table = tableNameOf(statement);
    if (!table) {
      console.log(`건너뜀 (CREATE TABLE 아님): ${statement.slice(0, 60)}...`);
      continue;
    }

    const existing = await connection.query('SHOW TABLES LIKE ?', [table]);
    if (existing.length > 0) {
      console.log(`이미 존재 — 건너뜀: ${table}`);
      continue;
    }

    if (isDryRun) {
      console.log(`[dry-run] 생성 예정: ${table}`);
      continue;
    }

    await connection.query(statement);
    console.log(`생성: ${table}`);
    created.push(table);
  }

  for (const table of ['user_push_subscription', 'user_push_setting']) {
    const existing = await connection.query('SHOW TABLES LIKE ?', [table]);
    if (existing.length === 0) {
      continue;
    }
    const columns = await connection.query(`SHOW COLUMNS FROM \`${table}\``);
    console.log(`${table}: 컬럼 ${columns.length}개 — ${columns.map((c) => c.Field).join(', ')}`);
  }
} finally {
  await connection.end();
}

/** mysql://user:pass@host:port/db → mariadb 접속 옵션 */
function parseUrl(value) {
  const u = new URL(value);
  return {
    host: u.hostname,
    port: u.port ? Number(u.port) : 3306,
    user: decodeURIComponent(u.username),
    password: decodeURIComponent(u.password),
    database: u.pathname.slice(1),
  };
}
