import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { requestShare } from '../../../../services/CalendarShareService';

// 실패 사유는 에러가 아니라 결과 코드로 나간다 — 화면이 상황별 안내를 띄워야 한다
export const requestCalendarShare: NonNullable<MutationResolvers['requestCalendarShare']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireRealUser(_ctx);
  return requestShare(userId, _arg.input.email);
};
