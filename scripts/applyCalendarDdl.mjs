/**
 * dashboardDdl.sql 의 캘린더 블록만 골라 실행한다.
 *
 * 왜 별도 러너인가:
 * - `dashboardDdl.sql` 전체를 다시 돌리면 기존 테이블(todo/memo/article)의 CREATE TABLE 이
 *   `IF NOT EXISTS` 가 없어 에러로 멈춘다. 그래서 새로 추가된 블록만 떼어 실행한다.
 * - SQL 은 dashboardDdl.sql 한 곳에만 둔다(단일 소스). 이 스크립트는 파싱만 한다.
 * - 이미 있는 테이블은 건너뛰므로 여러 번 돌려도 안전하다.
 *
 * 사용:
 *   source ~/.woolta-api.env && node scripts/applyCalendarDdl.mjs
 *
 * 대상은 운영 MySQL(woolta.com:3306)의 dashboard DB 다 — docs/LOCAL-DEV.md 참고.
 * 실행 전 어떤 문장이 나갈지 보려면 --dry-run 을 붙인다.
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import mariadb from 'mariadb';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DDL_PATH = join(ROOT, 'scripts', 'dashboardDdl.sql');
const MARKER = '-- 캘린더 (woolta 대시보드 4번째 앱)';
const isDryRun = process.argv.includes('--dry-run');

const url = process.env.DASHBOARD_DATABASE_URL;
if (!url) {
  console.error('DASHBOARD_DATABASE_URL 이 없다. `source ~/.woolta-api.env` 후 다시 실행할 것.');
  process.exit(1);
}

const sql = readFileSync(DDL_PATH, 'utf8');
const markerIndex = sql.indexOf(MARKER);
if (markerIndex === -1) {
  console.error(`${DDL_PATH} 에서 캘린더 블록을 찾지 못했다. (마커: ${MARKER})`);
  process.exit(1);
}

/** 캘린더 블록의 CREATE TABLE 문장들 — 주석 줄을 걷어내고 세미콜론으로 자른다 */
const statements = sql
  .slice(markerIndex)
  .split(';')
  .map((chunk) =>
    chunk
      .split('\n')
      .filter((line) => !line.trim().startsWith('--'))
      .join('\n')
      .trim(),
  )
  .filter((chunk) => chunk !== '');

const tableNameOf = (statement) => statement.match(/CREATE TABLE\s+`?(\w+)`?/i)?.[1] ?? null;

const connection = await mariadb.createConnection({ ...parseUrl(url), multipleStatements: false });

try {
  const [{ db }] = await connection.query('SELECT DATABASE() AS db');
  console.log(`대상 DB: ${db}`);

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
  }

  if (!isDryRun) {
    for (const table of ['calendar_event', 'calendar_share']) {
      const columns = await connection.query(`SHOW COLUMNS FROM \`${table}\``);
      console.log(`${table}: 컬럼 ${columns.length}개`);
    }
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
