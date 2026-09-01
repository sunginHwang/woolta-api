import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { completeAccountExpiration as completeAccountExpirationService } from '../../../services/AccountService';

export const completeAccountExpiration: NonNullable<MutationResolvers['completeAccountExpiration']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireRealUser(_ctx);

  return completeAccountExpirationService(userId, Number(_arg.input.id));
};
