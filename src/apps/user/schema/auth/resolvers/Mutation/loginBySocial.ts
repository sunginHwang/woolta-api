import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../../generates/types.generated';
import { setAuthCookie } from '../../../../../../shared/auth';
import { getSocialUser, getUserWithToken, saveSocialUser } from '../../../../services/UserService';

// 원본 POST /user/login/social: 가입된 유저는 로그인, 미가입이면 자동 회원가입 후 로그인
export const loginBySocial: NonNullable<MutationResolvers['loginBySocial']> = async (_parent, _arg, _ctx) => {
  const userInfo = await getSocialUser(_arg.socialId, _arg.loginType);

  if (userInfo) {
    const userRes = getUserWithToken(userInfo);
    setAuthCookie(_ctx.res, userRes.accessToken, userRes.refreshToken);
    return userRes;
  }

  const savedUser = await saveSocialUser({
    name: _arg.name,
    email: _arg.email,
    imageUrl: _arg.imageUrl,
    loginType: _arg.loginType,
    socialId: _arg.socialId,
  }).catch(() => null);

  if (!savedUser) {
    throw new GraphQLError('social register fail', { extensions: { code: 'INTERNAL_SERVER_ERROR' } });
  }

  const userRes = getUserWithToken(savedUser);
  setAuthCookie(_ctx.res, userRes.accessToken, userRes.refreshToken);

  return userRes;
};
