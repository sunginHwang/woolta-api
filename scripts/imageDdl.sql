-- 이미지 업로드 도메인 (blog DB 의 post_file 을 재사용)
--
-- 왜 새 테이블이 아니라 기존 post_file 인가:
--   업로드 이력 744건을 그대로 들고 가고, 레거시 Spring(jar)과 공존해야 한다.
--   컬럼을 DEFAULT 로 추가하면 이 컬럼을 모르는 jar 의 INSERT 도 계속 성공한다.
--
-- app_type 기본값이 'blog' 인 이유:
--   레거시 업로드 창구가 blog 에디터 하나뿐이었고 memo 가 그 API 를 빌려 썼다.
--   기존 행은 사후 구분이 불가능하므로 가장 사실에 가까운 값으로 채운다.
--
-- 여러 번 돌려도 안전하도록 러너(applyImageDdl.mjs)가 컬럼 존재 여부를 먼저 확인한다.

ALTER TABLE post_file
  ADD COLUMN app_type VARCHAR(20) NOT NULL DEFAULT 'blog';

ALTER TABLE post_file
  ADD COLUMN mime_type VARCHAR(100) NULL;

CREATE INDEX idx_post_file_app_type_created_at ON post_file (app_type, created_at);
