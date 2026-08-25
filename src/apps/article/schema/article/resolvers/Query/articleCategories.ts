import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { prismaArticle } from '../../../../utils/prismaClient';

export const articleCategories: NonNullable<QueryResolvers['articleCategories']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);

  return prismaArticle.articleCategory.findMany({
    where: { userId },
    orderBy: { order: 'asc' },
  });
};
