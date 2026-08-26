import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { getOwnArticle } from '../../../../services/ArticleService';
import { prismaArticle } from '../../../../utils/prismaClient';

// 캐스케이드: 모든 주차 큐레이션에서 해당 articleId 제거 (빈 주차는 자연히 0행)
export const deleteArticle: NonNullable<MutationResolvers['deleteArticle']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { id } = _arg.input;
  await getOwnArticle(id, userId);

  await prismaArticle.$transaction([
    prismaArticle.articleCuration.deleteMany({ where: { userId, articleId: id } }),
    prismaArticle.article.delete({ where: { id } }),
  ]);
  return true;
};
