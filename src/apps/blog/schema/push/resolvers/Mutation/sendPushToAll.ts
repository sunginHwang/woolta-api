import type { MutationResolvers } from './../../../../generates/types.generated';
import { allSendPush } from '../../../../services/WebPushService';

// 원본 GET /push/notification (수동 전체 발송) — 하드코딩 대신 파라미터로 받는다
export const sendPushToAll: NonNullable<MutationResolvers['sendPushToAll']> = async (_parent, _arg) => {
  const { title, content, url } = _arg.input;
  await allSendPush({ title, content, url });

  return true;
};
