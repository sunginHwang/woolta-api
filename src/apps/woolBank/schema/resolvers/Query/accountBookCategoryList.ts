import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { prismaWoolBank } from '../../../utils/prismaClient';

export const accountBookCategoryList: NonNullable<QueryResolvers['accountBookCategoryList']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireAuth(_ctx);

  const accountBookCategoryList = await prismaWoolBank.accountBookCategory.findMany({
    orderBy: { id: 'desc' },
    include: { accountBookCategoryImage: true },
    where: { userId, delYn: false },
  });

  return accountBookCategoryList.map((accountBookCategory) => ({
    ...accountBookCategory,
    id: String(accountBookCategory.id),
  }));
};
