import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { getMemoList } from '../../../../services/MemoService';

// 목록은 content 제외 (본문이 커질 수 있음 — 스펙 권장)
export const memoList: NonNullable<QueryResolvers['memoList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  return getMemoList(userId);
};
