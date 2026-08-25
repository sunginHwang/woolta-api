import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireAuth } from '../../../../../../shared/auth';
import { getShareCode } from '../../../../services/ShareCodeService';
import { getUserByIdOrThrow } from '../../../../services/UserService';

export const shareCode: NonNullable<QueryResolvers['shareCode']> = async (_parent, _arg, _ctx) => {
  const auth = requireAuth(_ctx);
  await getUserByIdOrThrow(auth.userId);

  const userShareCode = await getShareCode(auth.userId);

  return userShareCode?.shareCode ?? '';
};
