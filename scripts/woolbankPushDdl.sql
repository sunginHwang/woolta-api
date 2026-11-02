-- woolBank DB — Web Push(PWA 알림) 구독·설정 (woolBank 도메인)
-- 목적: 유저별 기기(구독) 저장과 알림 종류별 on/off. 발송은 PushService.sendToUser.
-- 주의: woolBank DB는 레거시 woolbankApi와 공유하므로 `prisma db push` 금지 — 이 스크립트로만 1회 생성한다.
-- 실행: mysql -h <host> -u <user> -p woolBank < scripts/woolbankPushDdl.sql

-- 기기 1대 = 구독 1건. endpoint 는 TEXT 라 유니크 인덱스를 못 걸어 sha256 해시 컬럼으로 중복을 막는다.
CREATE TABLE IF NOT EXISTS user_push_subscription (
  id              INT           NOT NULL AUTO_INCREMENT,
  user_id         INT           NOT NULL,
  endpoint        TEXT          NOT NULL,              -- 푸시 서비스 URL (PushSubscription.endpoint)
  endpoint_hash   CHAR(64)      NOT NULL,              -- sha256(endpoint) hex
  p256dh          VARCHAR(255)  NOT NULL,              -- PushSubscription.keys.p256dh
  auth            VARCHAR(255)  NOT NULL,              -- PushSubscription.keys.auth
  expiration_time DATETIME(6)   NULL,                  -- PushSubscription.expirationTime (대부분 NULL)
  user_agent      VARCHAR(255)  NULL,
  last_sent_at    DATETIME(6)   NULL,                  -- 마지막 발송 성공 시각
  created_at      DATETIME(6)   NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  updated_at      DATETIME(6)   NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id),
  UNIQUE KEY uk_user_push_subscription_endpoint (endpoint_hash),
  KEY idx_user_push_subscription_user (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 알림 종류별 설정. 행이 없으면 기본값(모두 ON)으로 본다.
CREATE TABLE IF NOT EXISTS user_push_setting (
  user_id             INT         NOT NULL,
  regular_expenditure TINYINT(1)  NOT NULL DEFAULT 1,  -- 정기지출 결제 전날 알림
  created_at          DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  updated_at          DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
