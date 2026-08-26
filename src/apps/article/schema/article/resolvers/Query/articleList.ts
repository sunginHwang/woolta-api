import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { toArticle } from '../../../../services/ArticleService';
import { prismaArticle } from '../../../../utils/prismaClient';

export const articleList: NonNullable<QueryResolvers['articleList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);

  const itemList = await prismaArticle.article.findMany({
    where: { userId, ...(_arg.categoryId ? { categoryId: _arg.categoryId } : {}) },
    orderBy: { createdAt: 'desc' },
  });
  const mapped = itemList.map(toArticle);
  return { totalCount: mapped.length, itemList: mapped };
};
