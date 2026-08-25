import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../../generates/types.generated';
import { createAuthToken, getRefreshTokenInfo } from '../../../../../../shared/auth';

// 원본 POST /auth/refresh-token-check: refresh 토큰 검증 후 신규 토큰 발급
export const refreshTokenCheck: NonNullable<MutationResolvers['refreshTokenCheck']> = async (_parent, _arg) => {
  try {
    const tokenInfo = await getRefreshTokenInfo(_arg.refreshToken);
    return createAuthToken(tokenInfo.userId);
  } catch (e) {
    throw new GraphQLError(e instanceof Error ? e.message : 'invalid refresh token', {
      extensions: { code: 'UNAUTHENTICATED' },
    });
  }
};
