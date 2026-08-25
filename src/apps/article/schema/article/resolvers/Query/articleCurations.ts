import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { toArticle } from '../../../../services/ArticleService';
import { prismaArticle } from '../../../../utils/prismaClient';
import type { Article as PrismaArticle } from '../../../../../../../prisma/generated/article';

// 전체 주차 반환 (주차 수 적음 — 스펙) — 최신 주차 먼저, 아티클 임베드
export const articleCurations: NonNullable<QueryResolvers['articleCurations']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);

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

  return [...byWeek.entries()].map(([weekKey, articleIds]) => ({
    weekKey,
    articleIds,
    articles: articleIds
      .map((id) => articleById.get(id))
      .filter((article): article is PrismaArticle => Boolean(article))
      .map(toArticle),
  }));
};
