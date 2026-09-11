-- dashboard DB — todo / memo / article-curation 3개 앱 (woolta 대시보드)
-- 스펙: woolta/docs/api-spec-todo-memo-article.md
-- 공통: id = 서버 발급 UUID(CHAR(36)), user_id = woolBank user.id (크로스 DB라 FK 없이 컬럼만)
-- 실행: mysql -h <host> -u <user> -p < scripts/dashboardDdl.sql (1회)

CREATE DATABASE IF NOT EXISTS dashboard DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE dashboard;

CREATE TABLE todo_category (
  id         CHAR(36)     NOT NULL,
  user_id    INT          NOT NULL,
  name       VARCHAR(255) NOT NULL,
  sort_order INT          NOT NULL,
  created_at DATETIME(6)  NOT NULL,
  updated_at DATETIME(6)  NOT NULL,
  PRIMARY KEY (id),
  KEY idx_todo_category_user (user_id)
) ENGINE=InnoDB;

CREATE TABLE todo (
  id           CHAR(36)     NOT NULL,
  user_id      INT          NOT NULL,
  title        VARCHAR(255) NOT NULL,
  memo         TEXT         NOT NULL,
  due_date     VARCHAR(10)  NULL,          -- YYYY-MM-DD (date-only, 시간대 개념 없음)
  category_id  CHAR(36)     NULL,          -- NULL = 기본함(inbox)
  priority     VARCHAR(10)  NOT NULL DEFAULT 'none',
  is_completed TINYINT      NOT NULL DEFAULT 0,
  completed_at DATETIME(6)  NULL,
  deleted_at   DATETIME(6)  NULL,          -- soft delete (휴지통)
  sort_order   INT          NOT NULL,
  created_at   DATETIME(6)  NOT NULL,
  updated_at   DATETIME(6)  NOT NULL,
  PRIMARY KEY (id),
  KEY idx_todo_user (user_id),
  KEY idx_todo_category (category_id)
) ENGINE=InnoDB;

CREATE TABLE memo (
  id         CHAR(36)     NOT NULL,
  user_id    INT          NOT NULL,
  title      VARCHAR(255) NOT NULL DEFAULT '',
  content    JSON         NOT NULL,        -- Tiptap document JSON (opaque)
  created_at DATETIME(6)  NOT NULL,
  updated_at DATETIME(6)  NOT NULL,
  PRIMARY KEY (id),
  KEY idx_memo_user (user_id)
) ENGINE=InnoDB;

CREATE TABLE article_category (
  id         CHAR(36)     NOT NULL,
  user_id    INT          NOT NULL,
  name       VARCHAR(255) NOT NULL,
  sort_order INT          NOT NULL,
  created_at DATETIME(6)  NOT NULL,
  updated_at DATETIME(6)  NOT NULL,
  PRIMARY KEY (id),
  KEY idx_article_category_user (user_id)
) ENGINE=InnoDB;

CREATE TABLE article (
  id             CHAR(36)      NOT NULL,
  user_id        INT           NOT NULL,
  category_id    CHAR(36)      NOT NULL,   -- 아티클은 반드시 카테고리 소속 (기본함 없음)
  title          VARCHAR(255)  NOT NULL,
  url            VARCHAR(2048) NOT NULL,
  normalized_url VARCHAR(500)  NOT NULL,   -- 유저 내 중복 검사 기준
  seo            JSON          NULL,       -- { title?, description?, imageUrl? }
  created_at     DATETIME(6)   NOT NULL,
  updated_at     DATETIME(6)   NOT NULL,
  PRIMARY KEY (id),
  KEY idx_article_user (user_id),
  KEY idx_article_category (category_id),
  KEY idx_article_normalized_url (user_id, normalized_url)
) ENGINE=InnoDB;

-- 주차·아티클당 1행 — WeeklyCuration 은 week_key 그룹핑으로 조립
CREATE TABLE article_curation (
  id         CHAR(36)    NOT NULL,
  user_id    INT         NOT NULL,
  week_key   VARCHAR(10) NOT NULL,         -- ISO 주차 키, 예: 2026-W34
  article_id CHAR(36)    NOT NULL,
  created_at DATETIME(6) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_curation (user_id, week_key, article_id),
  KEY idx_curation_article (article_id)
) ENGINE=InnoDB;

-- ─────────────────────────────────────────────────────────────
-- 캘린더 (woolta 대시보드 4번째 앱)
-- ─────────────────────────────────────────────────────────────

-- 일정은 UTC DATETIME 으로 저장하고 표시 시간대 변환은 클라이언트가 한다.
-- 종일 일정도 start_at/end_at 을 쓰며(is_all_day=1), end_at 은 exclusive 로 둔다
-- (FullCalendar 의 종일 이벤트 end 규약과 동일 — 8/1 하루 종일이면 end_at = 8/2 00:00).
CREATE TABLE calendar_event (
  id          CHAR(36)     NOT NULL,
  user_id     INT          NOT NULL,   -- 일정 소유자 (woolBank user.id, 크로스 DB라 FK 없음)
  title       VARCHAR(255) NOT NULL,
  description TEXT         NULL,
  start_at    DATETIME(6)  NOT NULL,
  end_at      DATETIME(6)  NOT NULL,   -- exclusive
  is_all_day  TINYINT      NOT NULL DEFAULT 0,
  color       VARCHAR(20)  NULL,       -- UI 색상 토큰 키 (null = 기본색)
  created_at  DATETIME(6)  NOT NULL,
  updated_at  DATETIME(6)  NOT NULL,
  PRIMARY KEY (id),
  -- 범위 조회가 항상 (소유자, 기간) 이라 복합 인덱스로 커버한다
  KEY idx_calendar_event_user_start (user_id, start_at)
) ENGINE=InnoDB;

-- 캘린더 공유는 양방향·읽기 전용이다. 수락된 1행이 두 사람 모두의 열람 권한을 뜻하므로
-- (requester, addressee) 를 방향 없는 쌍으로 취급한다 — 조회 시 양쪽 컬럼을 모두 본다.
-- 역방향 중복 초대는 애플리케이션에서 막는다(DB 유니크 키로는 표현 불가).
CREATE TABLE calendar_share (
  id           INT          NOT NULL AUTO_INCREMENT,
  requester_id INT          NOT NULL,   -- 초대를 보낸 사람
  addressee_id INT          NOT NULL,   -- 초대를 받은 사람 (수락/거절 권한자)
  status       VARCHAR(10)  NOT NULL,   -- PENDING / ACCEPTED / DECLINED
  created_at   DATETIME(6)  NOT NULL,
  updated_at   DATETIME(6)  NOT NULL,
  responded_at DATETIME(6)  NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_calendar_share_pair (requester_id, addressee_id),
  -- 로그인 시 "받은 대기 초대" 배지 조회용
  KEY idx_calendar_share_addressee (addressee_id, status),
  KEY idx_calendar_share_requester (requester_id, status)
) ENGINE=InnoDB;
