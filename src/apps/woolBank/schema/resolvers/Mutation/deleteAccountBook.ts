import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { deleteAccountBook as deleteAccountBookService } from '../../../services/AccountBookService';

export const deleteAccountBook: NonNullable<MutationResolvers['deleteAccountBook']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);

  return deleteAccountBookService(userId, Number(_arg.input.id));
};
