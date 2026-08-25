import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { toArticle } from '../../../../services/ArticleService';
import { prismaArticle } from '../../../../utils/prismaClient';

export const articles: NonNullable<QueryResolvers['articles']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);

  const list = await prismaArticle.article.findMany({
    where: { userId, ...(_arg.categoryId ? { categoryId: _arg.categoryId } : {}) },
    orderBy: { createdAt: 'desc' },
  });
  return list.map(toArticle);
};
