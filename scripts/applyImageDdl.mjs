/**
 * scripts/imageDdl.sql 을 blog DB 에 적용한다.
 *
 * 이미 있는 컬럼·인덱스는 건너뛰므로 여러 번 돌려도 안전하다
 * (MariaDB 는 ADD COLUMN 에 IF NOT EXISTS 를 지원하지만 버전차가 있어 직접 확인한다).
 *
 * 사용:
 *   BLOG_DATABASE_URL=... node scripts/applyImageDdl.mjs [--dry-run]
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import mariadb from 'mariadb';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DDL_PATH = join(ROOT, 'scripts', 'imageDdl.sql');
const isDryRun = process.argv.includes('--dry-run');

const url = process.env.BLOG_DATABASE_URL;
if (!url) {
  console.error('BLOG_DATABASE_URL 이 없다.');
  process.exit(1);
}

const parsed = new URL(url);
const database = parsed.pathname.replace(/^\//, '');

/** SQL 파일에서 주석을 걷어내고 문장 단위로 자른다. */
const statements = readFileSync(DDL_PATH, 'utf8')
  .split('\n')
  .filter((line) => !line.trimStart().startsWith('--'))
  .join('\n')
  .split(';')
  .map((s) => s.trim())
  .filter(Boolean);

const conn = await mariadb.createConnection({
  host: parsed.hostname,
  port: Number(parsed.port || 3306),
  user: decodeURIComponent(parsed.username),
  password: decodeURIComponent(parsed.password),
  database,
});

const existingColumns = new Set(
  (
    await conn.query(
      'SELECT COLUMN_NAME FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?',
      [database, 'post_file'],
    )
  ).map((r) => r.COLUMN_NAME),
);
const existingIndexes = new Set(
  (
    await conn.query(
      'SELECT DISTINCT INDEX_NAME FROM information_schema.STATISTICS WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?',
      [database, 'post_file'],
    )
  ).map((r) => r.INDEX_NAME),
);

/** 이 문장이 이미 반영됐는지 — 컬럼/인덱스 이름으로 판단한다. */
const alreadyApplied = (sql) => {
  const addColumn = sql.match(/ADD COLUMN\s+(\w+)/i);
  if (addColumn) {
    return existingColumns.has(addColumn[1]);
  }

  const createIndex = sql.match(/CREATE INDEX\s+(\w+)/i);
  if (createIndex) {
    return existingIndexes.has(createIndex[1]);
  }

  return false;
};

for (const sql of statements) {
  const label = sql.replace(/\s+/g, ' ').slice(0, 80);

  if (alreadyApplied(sql)) {
    console.log(`건너뜀 (이미 있음): ${label}`);
    continue;
  }

  if (isDryRun) {
    console.log(`[dry-run] ${label}`);
    continue;
  }

  await conn.query(sql);
  console.log(`적용: ${label}`);
}

if (!isDryRun) {
  const [{ total }] = await conn.query('SELECT COUNT(*) AS total FROM post_file');
  const byType = await conn.query('SELECT app_type, COUNT(*) AS c FROM post_file GROUP BY app_type');
  console.log(`\n총 ${total}건 · ${byType.map((r) => `${r.app_type}=${r.c}`).join(', ')}`);
}

await conn.end();
