import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { updateAccountBook as updateAccountBookService } from '../../../services/AccountBookService';
import { gqlToDbAccountBookCategoryType, toGqlAccountBook } from '../../../utils/enums';

export const updateAccountBook: NonNullable<MutationResolvers['updateAccountBook']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { id, title, amount, memo, type, registerDateTime, categoryId, isDisabledBudget } = _arg.input;

  const updatedAccountBook = await updateAccountBookService(userId, {
    id,
    title,
    amount,
    memo,
    type: type ? gqlToDbAccountBookCategoryType(type) : null,
    registerDateTime,
    categoryId,
    isDisabledBudget,
  });

  return toGqlAccountBook(updatedAccountBook);
};
