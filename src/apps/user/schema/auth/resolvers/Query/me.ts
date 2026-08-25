import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireAuth } from '../../../../../../shared/auth';
import { getUserByIdOrThrow, toUserInfo } from '../../../../services/UserService';

export const me: NonNullable<QueryResolvers['me']> = async (_parent, _arg, _ctx) => {
  const auth = requireAuth(_ctx);
  const user = await getUserByIdOrThrow(auth.userId);

  return toUserInfo(user, auth.authType);
};
