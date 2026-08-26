import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { prismaArticle } from '../../../../utils/prismaClient';

export const articleCategoryList: NonNullable<QueryResolvers['articleCategoryList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);

  const itemList = await prismaArticle.articleCategory.findMany({
    where: { userId },
    orderBy: { order: 'asc' },
  });
  return { totalCount: itemList.length, itemList };
};
