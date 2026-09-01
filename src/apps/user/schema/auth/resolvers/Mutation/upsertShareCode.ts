import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { upsertShareCode as upsertShareCodeService } from '../../../../services/ShareCodeService';
import { getUserByIdOrThrow } from '../../../../services/UserService';

export const upsertShareCode: NonNullable<MutationResolvers['upsertShareCode']> = async (_parent, _arg, _ctx) => {
  const auth = requireRealUser(_ctx);
  await getUserByIdOrThrow(auth.userId);

  return upsertShareCodeService(auth.userId);
};
