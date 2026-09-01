import type { MutationResolvers } from './../../../../generates/types.generated';
import { startAuthSession } from '../../../../../../shared/auth';
import { getSocialUser, saveSocialUser, toUserInfo } from '../../../../services/UserService';
import { verifySocialToken } from '../../../../services/SocialAuthService';
import { gqlToDbSocialLoginType } from '../../../../utils/enums';

// 원본 POST /user/login/social: 가입된 유저는 로그인, 미가입이면 자동 회원가입 후 로그인.
// socialId는 클라이언트 입력이 아니라 provider 토큰 검증 결과에서만 얻는다.
export const loginBySocial: NonNullable<MutationResolvers['loginBySocial']> = async (_parent, _arg, _ctx) => {
  const { input } = _arg;
  // Map GraphQL UPPER_CASE enum to legacy DB/JWT string
  const dbLoginType = gqlToDbSocialLoginType(input.loginType);
  const identity = await verifySocialToken(dbLoginType, input.token);

  const user =
    (await getSocialUser(identity.socialId, dbLoginType)) ??
    (await saveSocialUser({
      name: input.name ?? identity.name,
      email: input.email ?? identity.email,
      imageUrl: input.imageUrl ?? identity.imageUrl,
      loginType: dbLoginType,
      socialId: identity.socialId,
    }));

  await startAuthSession(_ctx.res, user.id, 'user');

  return toUserInfo(user, 'user');
};
