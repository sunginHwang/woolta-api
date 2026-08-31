import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { createRegularExpenditure as createRegularExpenditureService } from '../../../services/RegularExpenditureService';
import { toGqlAccountBookCategory } from '../../../utils/enums';

export const createRegularExpenditure: NonNullable<MutationResolvers['createRegularExpenditure']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireRealUser(_ctx);
  const { title, amount, regularDate, isAutoExpenditure, categoryId } = _arg.input;

  const newRegularExpenditure = await createRegularExpenditureService(userId, {
    title,
    amount,
    regularDate,
    isAutoExpenditure,
    categoryId,
  });

  return {
    ...newRegularExpenditure,
    accountBookCategory: toGqlAccountBookCategory(newRegularExpenditure.accountBookCategory),
  };
};
