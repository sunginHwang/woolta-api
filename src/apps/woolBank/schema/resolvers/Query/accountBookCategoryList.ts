import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { toGqlAccountBookCategory } from '../../../utils/enums';
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

  const itemList = accountBookCategoryList.map((accountBookCategory) =>
    toGqlAccountBookCategory({ ...accountBookCategory, id: String(accountBookCategory.id) }),
  );

  return { totalCount: itemList.length, itemList };
};
