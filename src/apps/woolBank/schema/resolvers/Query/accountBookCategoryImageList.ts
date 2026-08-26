import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { prismaWoolBank } from '../../../utils/prismaClient';

export const accountBookCategoryImageList: NonNullable<QueryResolvers['accountBookCategoryImageList']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  requireAuth(_ctx);

  const accountBookCategoryImageList = await prismaWoolBank.accountBookCategoryImage.findMany({
    orderBy: { id: 'desc' },
  });

  const itemList = accountBookCategoryImageList.map((accountBookCategoryImage) => ({
    ...accountBookCategoryImage,
    id: String(accountBookCategoryImage.id),
  }));

  return { totalCount: itemList.length, itemList };
};
