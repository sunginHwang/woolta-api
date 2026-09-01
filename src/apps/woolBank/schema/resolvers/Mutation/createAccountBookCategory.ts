import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { createAccountBookCategory as createAccountBookCategoryService } from '../../../services/AccountBookCategoryService';
import { gqlToDbAccountBookCategoryType, toGqlAccountBookCategory } from '../../../utils/enums';

export const createAccountBookCategory: NonNullable<MutationResolvers['createAccountBookCategory']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireRealUser(_ctx);
  const { name, type, accountBookCategoryImageId, useStatistic } = _arg.input;

  const accountBookCategory = await createAccountBookCategoryService(userId, {
    name,
    type: gqlToDbAccountBookCategoryType(type),
    accountBookCategoryImageId,
    useStatistic,
  });

  return toGqlAccountBookCategory(accountBookCategory);
};
