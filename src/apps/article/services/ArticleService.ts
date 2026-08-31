import type { Article as PrismaArticle } from '../../../../prisma/generated/article/client';
import type {
  Article,
  ArticleImportResult,
  ArticleSeo,
  ArticleSeoInput,
  ImportArticleCategoryInput,
  ImportArticleInput,
  ImportCurationInput,
  WeeklyCuration,
} from '../generates/types.generated';
import { ValidationError, NotFoundError, ConflictError } from '../../../shared/errors';
import { prismaArticle } from '../utils/prismaClient';

// 클라이언트 WEEKLY_CURATION_LIMIT (libs/article-curations constants) 와 동일
export const WEEKLY_CURATION_LIMIT = 5;

// 클라이언트 getWeekKey 산출 형식과 동일 — ISO 주차, zero-padded (예: 2026-W34)
const WEEK_KEY_REGEX = /^\d{4}-W(0[1-9]|[1-4]\d|5[0-3])$/;

export const assertWeekKey = (weekKey: string) => {
  if (!WEEK_KEY_REGEX.test(weekKey)) {
    throw new ValidationError('올바르지 않은 주차 키 형식입니다.');
  }
};

// 클라이언트 normalizeArticleUrl (libs/article-curations) 포팅 — 동일 규칙 유지
export const normalizeArticleUrl = (rawUrl: string): string | null => {
  const trimmedUrl = rawUrl.trim();
  if (trimmedUrl.length === 0) {
    return null;
  }

  const urlWithScheme = /^https?:\/\//i.test(trimmedUrl) ? trimmedUrl : `https://${trimmedUrl}`;
  try {
    return new URL(urlWithScheme).toString();
  } catch {
    return null;
  }
};

export const normalizeUrlOrThrow = (rawUrl: string) => {
  const normalized = normalizeArticleUrl(rawUrl);
  if (!normalized) {
    throw new ValidationError('유효하지 않은 URL 입니다.');
  }
  return normalized;
};

// 정규화 URL 기준 유저 내 중복 시 CONFLICT (스펙 409 대응)
export const assertNoDuplicateUrl = async (userId: number, normalizedUrl: string, excludeId?: string) => {
  const duplicate = await prismaArticle.article.findFirst({
    where: { userId, normalizedUrl, ...(excludeId ? { id: { not: excludeId } } : {}) },
  });
  if (duplicate) {
    throw new ConflictError('이미 등록된 아티클입니다.');
  }
};

// seo 는 DB 에 opaque JSON — GraphQL 타입으로 캐스팅해 반환
export const toArticle = (article: PrismaArticle): Article => ({
  ...article,
  seo: (article.seo as ArticleSeo | null) ?? null,
});

export const getOwnArticle = async (id: string, userId: number) => {
  const article = await prismaArticle.article.findFirst({ where: { id, userId } });
  if (!article) {
    throw new NotFoundError('존재하지 않는 아티클입니다.');
  }
  return article;
};

export const assertOwnArticleCategory = async (categoryId: string, userId: number) => {
  const category = await prismaArticle.articleCategory.findFirst({ where: { id: categoryId, userId } });
  if (!category) {
    throw new NotFoundError('존재하지 않는 카테고리입니다.');
  }
  return category;
};

// 주차 큐레이션 조립 — 큐레이션 행(등록순) + 아티클 임베드
export const buildWeeklyCuration = async (userId: number, weekKey: string): Promise<WeeklyCuration> => {
  const rows = await prismaArticle.articleCuration.findMany({
    where: { userId, weekKey },
    orderBy: { createdAt: 'asc' },
  });
  const articleIds = rows.map((row) => row.articleId);
  const articles = await prismaArticle.article.findMany({ where: { id: { in: articleIds } } });
  const articleById = new Map(articles.map((article) => [article.id, article]));

  return {
    weekKey,
    articleIds,
    articles: articleIds
      .map((id) => articleById.get(id))
      .filter((article): article is PrismaArticle => Boolean(article))
      .map(toArticle),
  };
};

// 로컬스토리지(woolta:article-curations) → 서버 1회 이관 — id 재발급 + clientId 매핑 반환
export const importArticles = async (
  userId: number,
  categories: ImportArticleCategoryInput[],
  articles: ImportArticleInput[],
  curations: ImportCurationInput[],
): Promise<ArticleImportResult> => {
  curations.forEach((curation) => assertWeekKey(curation.weekKey));

  return prismaArticle.$transaction(async (tx) => {
    const categoryIdMap: { from: string; to: string }[] = [];
    const categoryIds = new Map<string, string>();
    for (const category of categories) {
      const created = await tx.articleCategory.create({
        data: {
          userId,
          name: category.name,
          order: category.order,
          ...(category.createdAt ? { createdAt: category.createdAt } : {}),
        },
      });
      categoryIds.set(category.clientId, created.id);
      categoryIdMap.push({ from: category.clientId, to: created.id });
    }

    const articleIdMap: { from: string; to: string }[] = [];
    const articleIds = new Map<string, string>();
    for (const article of articles) {
      const categoryId = categoryIds.get(article.categoryClientId);
      if (!categoryId) {
        throw new ValidationError('이관 데이터의 카테고리 참조가 올바르지 않습니다.');
      }
      const created = await tx.article.create({
        data: {
          userId,
          categoryId,
          title: article.title,
          url: article.url,
          normalizedUrl: normalizeArticleUrl(article.url) ?? article.url,
          seo: article.seo ?? undefined,
          ...(article.createdAt ? { createdAt: article.createdAt } : {}),
          ...(article.updatedAt ? { updatedAt: article.updatedAt } : {}),
        },
      });
      articleIds.set(article.clientId, created.id);
      articleIdMap.push({ from: article.clientId, to: created.id });
    }

    for (const curation of curations) {
      // 주차당 최대 개수는 이관 데이터에도 동일 적용
      const clientIds = curation.articleClientIds.slice(0, WEEKLY_CURATION_LIMIT);
      for (const clientId of clientIds) {
        const articleId = articleIds.get(clientId);
        if (!articleId) {
          throw new ValidationError('이관 데이터의 큐레이션 아티클 참조가 올바르지 않습니다.');
        }
        await tx.articleCuration.create({
          data: { userId, weekKey: curation.weekKey, articleId },
        });
      }
    }

    return { categoryIdMap, articleIdMap };
  });
};

// --- 리졸버에서 이관된 서비스 함수 ---

export const addArticleToCuration = async (
  userId: number,
  weekKey: string,
  articleId: string,
): Promise<WeeklyCuration> => {
  assertWeekKey(weekKey);
  await getOwnArticle(articleId, userId);

  const existing = await prismaArticle.articleCuration.findMany({
    where: { userId, weekKey },
  });

  // 이미 등록된 articleId 는 멱등 — 그대로 반환 (클라 토글 UX 대응)
  if (!existing.some((row) => row.articleId === articleId)) {
    // 주차당 최대 5개 — 스펙상 클라는 조용히 무시하지만 서버는 명시 에러 (409 대응)
    if (existing.length >= WEEKLY_CURATION_LIMIT) {
      throw new ConflictError('주간 큐레이션은 최대 5개까지 등록할 수 있습니다.');
    }
    await prismaArticle.articleCuration.create({
      data: { userId, weekKey, articleId },
    });
  }

  return buildWeeklyCuration(userId, weekKey);
};

// SEO 파싱은 클라이언트 플로우 유지 (/api/article-meta 프록시) — 파싱된 seo 를 인자로 받는다
export const createArticle = async (
  userId: number,
  categoryId: string,
  title: string,
  url: string,
  seo: ArticleSeoInput | null | undefined,
): Promise<Article> => {
  await assertOwnArticleCategory(categoryId, userId);
  const normalizedUrl = normalizeUrlOrThrow(url);
  await assertNoDuplicateUrl(userId, normalizedUrl);
  const created = await prismaArticle.article.create({
    data: { userId, categoryId, title, url, normalizedUrl, seo: seo ?? undefined },
  });
  return toArticle(created);
};

export const createArticleCategory = async (userId: number, name: string) => {
  if (name.trim().length === 0) {
    throw new ValidationError('카테고리 이름을 입력해주세요.');
  }
  const max = await prismaArticle.articleCategory.aggregate({ where: { userId }, _max: { order: true } });
  return prismaArticle.articleCategory.create({
    data: { userId, name, order: (max._max.order ?? 0) + 1 },
  });
};

// 캐스케이드: 모든 주차 큐레이션에서 해당 articleId 제거 (빈 주차는 자연히 0행)
export const deleteArticle = async (id: string, userId: number): Promise<boolean> => {
  await getOwnArticle(id, userId);
  await prismaArticle.$transaction([
    prismaArticle.articleCuration.deleteMany({ where: { userId, articleId: id } }),
    prismaArticle.article.delete({ where: { id } }),
  ]);
  return true;
};

// 캐스케이드: 소속 아티클 전체 삭제 + 그 아티클들의 큐레이션 행 제거 (이동 아님, 삭제 — 현재 클라 동작)
export const deleteArticleCategory = async (id: string, userId: number): Promise<boolean> => {
  await assertOwnArticleCategory(id, userId);
  await prismaArticle.$transaction(async (tx) => {
    const articles = await tx.article.findMany({
      where: { userId, categoryId: id },
      select: { id: true },
    });
    const articleIds = articles.map((article) => article.id);
    await tx.articleCuration.deleteMany({ where: { userId, articleId: { in: articleIds } } });
    await tx.article.deleteMany({ where: { userId, categoryId: id } });
    await tx.articleCategory.delete({ where: { id } });
  });
  return true;
};

export const removeArticleFromCuration = async (
  userId: number,
  weekKey: string,
  articleId: string,
): Promise<WeeklyCuration> => {
  assertWeekKey(weekKey);
  await prismaArticle.articleCuration.deleteMany({ where: { userId, weekKey, articleId } });
  return buildWeeklyCuration(userId, weekKey);
};

// 범용 PATCH — 현재 사용처는 seo 재수집 백필(setArticleSeo) 뿐이지만 title/url/categoryId 도 지원
export const updateArticle = async (
  userId: number,
  id: string,
  title: string | null | undefined,
  url: string | null | undefined,
  categoryId: string | null | undefined,
  seo: ArticleSeoInput | null | undefined,
): Promise<Article> => {
  await getOwnArticle(id, userId);
  if (categoryId != null) {
    await assertOwnArticleCategory(categoryId, userId);
  }
  let normalizedUrl: string | undefined;
  if (url != null) {
    normalizedUrl = normalizeUrlOrThrow(url);
    await assertNoDuplicateUrl(userId, normalizedUrl, id);
  }
  const updated = await prismaArticle.article.update({
    where: { id },
    data: {
      title: title ?? undefined,
      url: url ?? undefined,
      normalizedUrl,
      categoryId: categoryId ?? undefined,
      seo: seo ?? undefined,
    },
  });
  return toArticle(updated);
};

export const updateArticleCategory = async (userId: number, id: string, name: string) => {
  await assertOwnArticleCategory(id, userId);
  if (name.trim().length === 0) {
    throw new ValidationError('카테고리 이름을 입력해주세요.');
  }
  return prismaArticle.articleCategory.update({ where: { id }, data: { name } });
};

export const getArticleCategoryList = async (userId: number) => {
  const itemList = await prismaArticle.articleCategory.findMany({
    where: { userId },
    orderBy: { order: 'asc' },
  });
  return { totalCount: itemList.length, itemList };
};

export const getArticleList = async (userId: number, categoryId?: string | null) => {
  const itemList = await prismaArticle.article.findMany({
    where: { userId, ...(categoryId ? { categoryId } : {}) },
    orderBy: { createdAt: 'desc' },
  });
  const mapped = itemList.map(toArticle);
  return { totalCount: mapped.length, itemList: mapped };
};

// 전체 주차 반환 (주차 수 적음 — 스펙) — 최신 주차 먼저, 아티클 임베드
export const getWeeklyCurationList = async (userId: number) => {
  const rows = await prismaArticle.articleCuration.findMany({
    where: { userId },
    orderBy: [{ weekKey: 'desc' }, { createdAt: 'asc' }],
  });
  const articles = await prismaArticle.article.findMany({
    where: { id: { in: rows.map((row) => row.articleId) } },
  });
  const articleById = new Map(articles.map((article) => [article.id, article]));

  const byWeek = new Map<string, string[]>();
  for (const row of rows) {
    const ids = byWeek.get(row.weekKey) ?? [];
    ids.push(row.articleId);
    byWeek.set(row.weekKey, ids);
  }

  const itemList = [...byWeek.entries()].map(([weekKey, articleIds]) => ({
    weekKey,
    articleIds,
    articles: articleIds
      .map((id) => articleById.get(id))
      .filter((article): article is PrismaArticle => Boolean(article))
      .map(toArticle),
  }));

  return { totalCount: itemList.length, itemList };
};
