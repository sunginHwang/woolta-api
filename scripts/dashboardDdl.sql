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
