import { GraphQLError } from 'graphql/error';
import type { Article as PrismaArticle } from '../../../../prisma/generated/article';
import type {
  Article,
  ArticleImportResult,
  ArticleSeo,
  ImportArticleCategoryInput,
  ImportArticleInput,
  ImportCurationInput,
  WeeklyCuration,
} from '../generates/types.generated';
import { prismaArticle } from '../utils/prismaClient';

// 클라이언트 WEEKLY_CURATION_LIMIT (libs/article-curations constants) 와 동일
export const WEEKLY_CURATION_LIMIT = 5;

// 클라이언트 getWeekKey 산출 형식과 동일 — ISO 주차, zero-padded (예: 2026-W34)
const WEEK_KEY_REGEX = /^\d{4}-W(0[1-9]|[1-4]\d|5[0-3])$/;

export const assertWeekKey = (weekKey: string) => {
  if (!WEEK_KEY_REGEX.test(weekKey)) {
    throw new GraphQLError('올바르지 않은 주차 키 형식입니다.', { extensions: { code: 'BAD_REQUEST' } });
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
    throw new GraphQLError('유효하지 않은 URL 입니다.', { extensions: { code: 'BAD_REQUEST' } });
  }
  return normalized;
};

// 정규화 URL 기준 유저 내 중복 시 CONFLICT (스펙 409 대응)
export const assertNoDuplicateUrl = async (userId: number, normalizedUrl: string, excludeId?: string) => {
  const duplicate = await prismaArticle.article.findFirst({
    where: { userId, normalizedUrl, ...(excludeId ? { id: { not: excludeId } } : {}) },
  });
  if (duplicate) {
    throw new GraphQLError('이미 등록된 아티클입니다.', { extensions: { code: 'CONFLICT' } });
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
    throw new GraphQLError('존재하지 않는 아티클입니다.', { extensions: { code: 'NOT_FOUND' } });
  }
  return article;
};

export const assertOwnArticleCategory = async (categoryId: string, userId: number) => {
  const category = await prismaArticle.articleCategory.findFirst({ where: { id: categoryId, userId } });
  if (!category) {
    throw new GraphQLError('존재하지 않는 카테고리입니다.', { extensions: { code: 'NOT_FOUND' } });
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
        throw new GraphQLError('이관 데이터의 카테고리 참조가 올바르지 않습니다.', {
          extensions: { code: 'BAD_REQUEST' },
        });
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
          throw new GraphQLError('이관 데이터의 큐레이션 아티클 참조가 올바르지 않습니다.', {
            extensions: { code: 'BAD_REQUEST' },
          });
        }
        await tx.articleCuration.create({
          data: { userId, weekKey: curation.weekKey, articleId },
        });
      }
    }

    return { categoryIdMap, articleIdMap };
  });
};
