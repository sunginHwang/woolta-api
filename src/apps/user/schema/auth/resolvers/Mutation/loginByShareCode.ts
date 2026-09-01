import type { MutationResolvers } from './../../../../generates/types.generated';
import { startAuthSession } from '../../../../../../shared/auth';
import { UnauthenticatedError } from '../../../../../../shared/errors';
import { getShareCodeInfoByShareCode } from '../../../../services/ShareCodeService';
import { getUserById, toUserInfo } from '../../../../services/UserService';

// 원본 POST /user/share-code-login: 공유코드로 읽기전용(share) 로그인
export const loginByShareCode: NonNullable<MutationResolvers['loginByShareCode']> = async (_parent, _arg, _ctx) => {
  const { shareCode } = _arg.input;
  const userShareCode = await getShareCodeInfoByShareCode(shareCode);

  if (!userShareCode) {
    throw new UnauthenticatedError(`share-code: ${shareCode} is not exist share-code`);
  }

  const userInfo = await getUserById(userShareCode.userId);

  if (!userInfo) {
    throw new UnauthenticatedError(`share-code: ${shareCode} is not exist share-code user-info`);
  }

  await startAuthSession(_ctx.res, userInfo.id, 'share');

  return toUserInfo(userInfo, 'share');
};
