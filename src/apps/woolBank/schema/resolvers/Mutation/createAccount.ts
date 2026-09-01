import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { createAccount as createAccountService } from '../../../services/AccountService';

export const createAccount: NonNullable<MutationResolvers['createAccount']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { title, taxType, regularTransferDate, rate, startDate, endDate, amount, savingTypeId } = _arg.input;

  return createAccountService(userId, {
    title,
    taxType,
    regularTransferDate,
    rate,
    startDate,
    endDate,
    amount,
    savingTypeId,
  });
};
