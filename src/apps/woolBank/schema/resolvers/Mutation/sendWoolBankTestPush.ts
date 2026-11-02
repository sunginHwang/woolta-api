import type { MutationResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { sendTestPush } from '../../../services/PushService';

// 공유코드 세션도 허용 — 세션 userId 가 원 계정이라 자기 기기(endpoint)로 테스트를 보낼 수 있어야 한다.
export const sendWoolBankTestPush: NonNullable<MutationResolvers['sendWoolBankTestPush']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireAuth(_ctx);

  return sendTestPush(userId, _arg.input?.endpoint);
};
