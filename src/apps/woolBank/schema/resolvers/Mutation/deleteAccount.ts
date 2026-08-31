import type { MutationResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { deleteAccount as deleteAccountService } from '../../../services/AccountService';

export const deleteAccount: NonNullable<MutationResolvers['deleteAccount']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);

  return deleteAccountService(userId, Number(_arg.input.id));
};
