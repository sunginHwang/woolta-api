import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { getOwnArticle } from '../../../../services/ArticleService';
import { prismaArticle } from '../../../../utils/prismaClient';

// 캐스케이드: 모든 주차 큐레이션에서 해당 articleId 제거 (빈 주차는 자연히 0행)
export const deleteArticle: NonNullable<MutationResolvers['deleteArticle']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  await getOwnArticle(_arg.id, userId);

  await prismaArticle.$transaction([
    prismaArticle.articleCuration.deleteMany({ where: { userId, articleId: _arg.id } }),
    prismaArticle.article.delete({ where: { id: _arg.id } }),
  ]);
  return true;
};
