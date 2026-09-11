import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireBlogAdmin } from '../../../../middlewares/requireBlogAdmin';
import { allSendPush } from '../../../../services/WebPushService';

// 원본 GET /push/notification (수동 전체 발송) — 하드코딩 대신 파라미터로 받는다
// 전체 구독자에게 발송하므로 작성/수정과 동일하게 관리자만 호출할 수 있다.
export const sendPushToAll: NonNullable<MutationResolvers['sendPushToAll']> = async (_parent, _arg, _ctx) => {
  requireBlogAdmin(_ctx);
  const { title, content, url } = _arg.input;
  await allSendPush({ title, content, url });

  return true;
};
