import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { deleteAccountBookCategory as deleteAccountBookCategoryService } from '../../../services/AccountBookCategoryService';

export const deleteAccountBookCategory: NonNullable<MutationResolvers['deleteAccountBookCategory']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireRealUser(_ctx);

  return deleteAccountBookCategoryService(userId, Number(_arg.input.id));
};
