import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getAccountBookCategoryImageList } from '../../../services/AccountBookCategoryService';

export const accountBookCategoryImageList: NonNullable<QueryResolvers['accountBookCategoryImageList']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  requireAuth(_ctx);

  const accountBookCategoryImageList = await getAccountBookCategoryImageList();

  const itemList = accountBookCategoryImageList.map((accountBookCategoryImage) => ({
    ...accountBookCategoryImage,
    id: String(accountBookCategoryImage.id),
  }));

  return { totalCount: itemList.length, itemList };
};
