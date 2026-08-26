import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireAuth } from '../../../../../../shared/auth';
import { getShareCode as getShareCodeService } from '../../../../services/ShareCodeService';
import { getUserByIdOrThrow } from '../../../../services/UserService';

export const getShareCode: NonNullable<QueryResolvers['getShareCode']> = async (_parent, _arg, _ctx) => {
  const auth = requireAuth(_ctx);
  await getUserByIdOrThrow(auth.userId);

  const userShareCode = await getShareCodeService(auth.userId);

  return userShareCode?.shareCode ?? '';
};
