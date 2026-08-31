import type { MutationResolvers } from './../../../../generates/types.generated';
import { setAuthCookie } from '../../../../../../shared/auth';
import { AppError } from '../../../../../../shared/errors';
import { getSocialUser, getUserWithToken, saveSocialUser } from '../../../../services/UserService';
import { gqlToDbSocialLoginType } from '../../../../utils/enums';

// 원본 POST /user/login/social: 가입된 유저는 로그인, 미가입이면 자동 회원가입 후 로그인
export const loginBySocial: NonNullable<MutationResolvers['loginBySocial']> = async (_parent, _arg, _ctx) => {
  const { input } = _arg;
  // Map GraphQL UPPER_CASE enum to legacy DB/JWT string
  const dbLoginType = gqlToDbSocialLoginType(input.loginType);

  const userInfo = await getSocialUser(input.socialId, dbLoginType);

  if (userInfo) {
    const userRes = getUserWithToken(userInfo);
    setAuthCookie(_ctx.res, userRes.accessToken, userRes.refreshToken);
    return userRes;
  }

  const savedUser = await saveSocialUser({
    name: input.name,
    email: input.email,
    imageUrl: input.imageUrl,
    loginType: dbLoginType,
    socialId: input.socialId,
  }).catch(() => null);

  if (!savedUser) {
    throw new AppError('social register fail', 'INTERNAL_SERVER_ERROR');
  }

  const userRes = getUserWithToken(savedUser);
  setAuthCookie(_ctx.res, userRes.accessToken, userRes.refreshToken);

  return userRes;
};
