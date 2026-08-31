import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { createAccountBook as createAccountBookService } from '../../../services/AccountBookService';
import { gqlToDbAccountBookCategoryType, gqlToDbScheduledPaymentType, toGqlAccountBook } from '../../../utils/enums';

export const createAccountBook: NonNullable<MutationResolvers['createAccountBook']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const {
    title,
    amount,
    memo,
    type,
    registerDateTime,
    categoryId,
    isDisabledBudget,
    scheduledPaymentType,
    scheduledPaymentDay,
    installmentMonth,
  } = _arg.input;

  const accountBook = await createAccountBookService(userId, {
    title,
    amount,
    memo,
    type: gqlToDbAccountBookCategoryType(type),
    registerDateTime,
    categoryId,
    isDisabledBudget,
    scheduledPaymentType: scheduledPaymentType ? gqlToDbScheduledPaymentType(scheduledPaymentType) : null,
    scheduledPaymentDay,
    installmentMonth,
  });

  return toGqlAccountBook(accountBook);
};
