-- woolBank DB — 주간 예산 저장소 (woolBank 도메인)
-- 목적: 유저가 "한 주에 얼마 쓸지" 반복 예산 금액을 저장한다. 유저당 1행(user_id 유니크).
-- 주의: woolBank DB는 레거시 woolbankApi와 공유하므로 `prisma db push` 금지 — 이 스크립트로만 1회 생성한다.
-- 실행: mysql -h <host> -u <user> -p woolBank < scripts/weeklyBudgetDdl.sql

CREATE TABLE IF NOT EXISTS weekly_budget (
  id         INT          NOT NULL AUTO_INCREMENT,
  user_id    INT          NOT NULL,               -- 유저당 1행
  amount     INT          NOT NULL,               -- 한 주 예산 금액(원)
  created_at DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  UNIQUE KEY uk_weekly_budget_user (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
