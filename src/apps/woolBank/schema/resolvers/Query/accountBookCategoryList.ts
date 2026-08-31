import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getAccountBookCategoryList } from '../../../services/AccountBookCategoryService';
import { toGqlAccountBookCategory } from '../../../utils/enums';

export const accountBookCategoryList: NonNullable<QueryResolvers['accountBookCategoryList']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireAuth(_ctx);

  const accountBookCategoryList = await getAccountBookCategoryList(userId);

  const itemList = accountBookCategoryList.map((accountBookCategory) =>
    toGqlAccountBookCategory({ ...accountBookCategory, id: String(accountBookCategory.id) }),
  );

  return { totalCount: itemList.length, itemList };
};
