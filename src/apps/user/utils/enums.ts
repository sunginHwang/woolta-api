// GraphQL enum SocialLoginType (UPPER_CASE) <-> DB/JWT loginType (legacy string) mapping.
// DB login_type and JWT payload loginType must keep legacy strings for woolbankApi compatibility.
export type DbSocialLoginType = 'facebook' | 'kakaoTalk' | 'google';
export type GqlSocialLoginType = 'FACEBOOK' | 'KAKAO_TALK' | 'GOOGLE';

const GQL_TO_DB: Record<GqlSocialLoginType, DbSocialLoginType> = {
  FACEBOOK: 'facebook',
  KAKAO_TALK: 'kakaoTalk',
  GOOGLE: 'google',
};

export const gqlToDbSocialLoginType = (gql: GqlSocialLoginType): DbSocialLoginType => {
  return GQL_TO_DB[gql];
};
