import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { importMemos as importMemosService } from '../../../../services/MemoService';

// 로컬스토리지(woolta:memos) → 서버 1회 이관 — id 재발급 + clientId 매핑 반환
export const importMemos: NonNullable<MutationResolvers['importMemos']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);

  return importMemosService(userId, _arg.memos);
};
