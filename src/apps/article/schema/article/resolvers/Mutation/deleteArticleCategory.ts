import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { assertOwnArticleCategory } from '../../../../services/ArticleService';
import { prismaArticle } from '../../../../utils/prismaClient';

// 캐스케이드: 소속 아티클 전체 삭제 + 그 아티클들의 큐레이션 행 제거 (이동 아님, 삭제 — 현재 클라 동작)
export const deleteArticleCategory: NonNullable<MutationResolvers['deleteArticleCategory']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  await assertOwnArticleCategory(_arg.id, userId);

  await prismaArticle.$transaction(async (tx) => {
    const articles = await tx.article.findMany({
      where: { userId, categoryId: _arg.id },
      select: { id: true },
    });
    const articleIds = articles.map((article) => article.id);

    await tx.articleCuration.deleteMany({ where: { userId, articleId: { in: articleIds } } });
    await tx.article.deleteMany({ where: { userId, categoryId: _arg.id } });
    await tx.articleCategory.delete({ where: { id: _arg.id } });
  });
  return true;
};
