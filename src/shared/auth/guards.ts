import { GraphQLError } from 'graphql/error';
import { AuthInfo, AuthedContext } from './context';

// 원본 isAuthenticated: 인증 정보 없으면 401
export const requireAuth = (ctx: AuthedContext): AuthInfo => {
  if (!ctx.auth || !ctx.auth.userId) {
    throw new GraphQLError('인증 토큰 정보가 존재하지 않습니다.', {
      extensions: { code: 'UNAUTHENTICATED' },
    });
  }

  return ctx.auth;
};

// 원본 isRealUserAuthenticated: 공유코드 로그인(share) 등은 쓰기 불가
export const requireRealUser = (ctx: AuthedContext): AuthInfo => {
  const auth = requireAuth(ctx);

  if (auth.authType !== 'user') {
    throw new GraphQLError('권한이 없습니다.', {
      extensions: { code: 'FORBIDDEN' },
    });
  }

  return auth;
};
