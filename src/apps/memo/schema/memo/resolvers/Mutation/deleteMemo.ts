import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { getOwnMemo } from '../../../../services/MemoService';
import { prismaMemo } from '../../../../utils/prismaClient';

// 휴지통 없음 — 즉시 영구 삭제 (현재 클라 동작 동일)
export const deleteMemo: NonNullable<MutationResolvers['deleteMemo']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  await getOwnMemo(_arg.id, userId);

  await prismaMemo.memo.delete({ where: { id: _arg.id } });
  return true;
};
