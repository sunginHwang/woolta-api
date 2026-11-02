-- woolBank DB — 알림함 (woolBank 도메인)
-- 목적: 푸시로 보낸 알림의 제목·요약·상세 본문을 저장해 앱의 /notifications 에서 다시 볼 수 있게 한다.
--       aiho 봇이 createWoolBankNotification 으로 넣고, 정기지출 결제 전날 cron 도 같은 경로를 쓴다.
-- 주의: woolBank DB는 레거시 woolbankApi와 공유하므로 `prisma db push` 금지 — 이 스크립트로만 1회 생성한다.
-- 실행: source ~/.woolta-api.env && node scripts/applyWoolbankPushDdl.mjs scripts/woolbankNotificationDdl.sql
--       (또는 mysql -h <host> -u <user> -p woolBank < scripts/woolbankNotificationDdl.sql)

-- 공유코드 세션은 원 계정 userId 로 들어오므로 알림함도 계정 단위로 함께 본다(읽음 표시도 공유).
CREATE TABLE IF NOT EXISTS user_notification (
  id          INT           NOT NULL AUTO_INCREMENT,
  user_id     INT           NOT NULL,
  kind        VARCHAR(40)   NOT NULL,                  -- 알림 종류 (DAILY_DIGEST, REGULAR_EXPENDITURE ...). 푸시 topic/tag 로도 쓴다
  title       VARCHAR(100)  NOT NULL,                  -- 푸시 제목
  summary     VARCHAR(255)  NOT NULL,                  -- 푸시 본문 겸 목록 미리보기
  content     TEXT          NOT NULL,                  -- 상세 페이지 본문 (줄바꿈 포함 plain text)
  read_at     DATETIME(6)   NULL,                      -- NULL 이면 안 읽음
  created_at  DATETIME(6)   NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  updated_at  DATETIME(6)   NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id),
  KEY idx_user_notification_user (user_id, id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
