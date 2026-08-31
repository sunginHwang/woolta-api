import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { createMemo as createMemoService } from '../../../../services/MemoService';

// "새 메모" 클릭 즉시 빈 메모 생성 후 편집 시작하는 UX — 빈 생성 허용 필수
export const createMemo: NonNullable<MutationResolvers['createMemo']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  return createMemoService(userId);
};
