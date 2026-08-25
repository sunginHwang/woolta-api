import type { QueryResolvers } from './../../../../generates/types.generated';
import { createAuthToken, requireAuth } from '../../../../../../shared/auth';
import { getUserByIdOrThrow, toUserInfo } from '../../../../services/UserService';

// 원본 GET /auth/check: 유저 정보 + 신규 토큰 재발급
export const checkToken: NonNullable<QueryResolvers['checkToken']> = async (_parent, _arg, _ctx) => {
  const auth = requireAuth(_ctx);
  const user = await getUserByIdOrThrow(auth.userId);
  const authTokens = createAuthToken(user.id);

  return { userInfo: toUserInfo(user, auth.authType), authTokens };
};
