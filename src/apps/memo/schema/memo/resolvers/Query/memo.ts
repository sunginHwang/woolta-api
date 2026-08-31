import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { getMemo } from '../../../../services/MemoService';

// 없으면 에러 대신 null 반환 (공통 규칙 1)
export const memo: NonNullable<QueryResolvers['memo']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  return getMemo(_arg.id, userId);
};
