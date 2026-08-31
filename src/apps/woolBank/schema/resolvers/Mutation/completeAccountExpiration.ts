import type { MutationResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { completeAccountExpiration as completeAccountExpirationService } from '../../../services/AccountService';

export const completeAccountExpiration: NonNullable<MutationResolvers['completeAccountExpiration']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireAuth(_ctx);

  return completeAccountExpirationService(userId, Number(_arg.input.id));
};
