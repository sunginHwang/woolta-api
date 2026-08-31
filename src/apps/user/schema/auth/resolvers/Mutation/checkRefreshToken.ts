import type { MutationResolvers } from './../../../../generates/types.generated';
import { createAuthToken, getRefreshTokenInfo } from '../../../../../../shared/auth';
import { UnauthenticatedError } from '../../../../../../shared/errors';

// 원본 POST /auth/refresh-token-check: refresh 토큰 검증 후 신규 토큰 발급
export const checkRefreshToken: NonNullable<MutationResolvers['checkRefreshToken']> = async (_parent, _arg) => {
  try {
    const tokenInfo = await getRefreshTokenInfo(_arg.input.refreshToken);
    return createAuthToken(tokenInfo.userId);
  } catch (e) {
    throw new UnauthenticatedError(e instanceof Error ? e.message : 'invalid refresh token');
  }
};
