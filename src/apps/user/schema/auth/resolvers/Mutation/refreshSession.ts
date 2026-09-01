import type { MutationResolvers } from './../../../../generates/types.generated';
import { authConfig, rotateFromRefreshToken } from '../../../../../../shared/auth';
import { UnauthenticatedError } from '../../../../../../shared/errors';

// 원본 POST /auth/refresh-token-check 대체.
// refresh 토큰을 인자로 받지 않고 httpOnly 쿠키에서만 읽으며, 새 토큰도 쿠키로만 내려간다.
export const refreshSession: NonNullable<MutationResolvers['refreshSession']> = async (_parent, _arg, _ctx) => {
  const refreshToken = _ctx.req.cookies?.[authConfig.REFRESH_TOKEN_NAME];

  if (!refreshToken) {
    throw new UnauthenticatedError();
  }

  const auth = await rotateFromRefreshToken(_ctx.res, refreshToken);

  if (!auth) {
    throw new UnauthenticatedError('세션이 만료되었습니다. 다시 로그인해 주세요.');
  }

  return true;
};
