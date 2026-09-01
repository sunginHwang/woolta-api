-- woolBank DB — refresh 토큰 저장소 (user 도메인)
-- 목적: 로그아웃/탈취 시 서버 측 무효화, refresh 회전(rotation)과 재사용 감지.
-- 주의: woolBank DB는 레거시 woolbankApi와 공유하므로 `prisma db push` 금지 — 이 스크립트로만 1회 생성한다.
-- 실행: mysql -h <host> -u <user> -p woolBank < scripts/userRefreshTokenDdl.sql

CREATE TABLE IF NOT EXISTS user_refresh_token (
  id          INT          NOT NULL AUTO_INCREMENT,
  user_id     INT          NOT NULL,
  family_id   CHAR(36)     NOT NULL,               -- 로그인 1회 = 1 패밀리
  token_hash  CHAR(64)     NOT NULL,               -- sha256(refresh token) hex
  login_type  VARCHAR(20)  NOT NULL,               -- user | share
  expires_at  DATETIME(6)  NOT NULL,
  revoked_at  DATETIME(6)  NULL,                   -- 소비/폐기 시각. NULL 이면 유효
  created_at  DATETIME(6)  NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id),
  UNIQUE KEY uk_user_refresh_token_hash (token_hash),
  KEY idx_user_refresh_token_user (user_id),
  KEY idx_user_refresh_token_family (family_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 만료 레코드 정리(선택, 주기 실행):
-- DELETE FROM user_refresh_token WHERE expires_at < NOW() - INTERVAL 7 DAY;
