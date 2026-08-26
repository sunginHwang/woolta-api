import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../../generates/types.generated';
import { setAuthCookie } from '../../../../../../shared/auth';
import { getShareCodeInfoByShareCode } from '../../../../services/ShareCodeService';
import { getUserById, getUserWithToken } from '../../../../services/UserService';

// 원본 POST /user/share-code-login: 공유코드로 읽기전용(share) 로그인
export const loginByShareCode: NonNullable<MutationResolvers['loginByShareCode']> = async (_parent, _arg, _ctx) => {
  const { shareCode } = _arg.input;
  const userShareCode = await getShareCodeInfoByShareCode(shareCode);

  if (!userShareCode) {
    throw new GraphQLError(`share-code: ${shareCode} is not exist share-code`, {
      extensions: { code: 'UNAUTHENTICATED' },
    });
  }

  const userInfo = await getUserById(userShareCode.userId);

  if (!userInfo) {
    throw new GraphQLError(`share-code: ${shareCode} is not exist share-code user-info`, {
      extensions: { code: 'UNAUTHENTICATED' },
    });
  }

  const userRes = getUserWithToken(userInfo, 'share');
  setAuthCookie(_ctx.res, userRes.accessToken, userRes.refreshToken);

  return userRes;
};
