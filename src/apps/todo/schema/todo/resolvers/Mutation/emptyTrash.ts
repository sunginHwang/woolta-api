import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { emptyTrash as emptyTrashService } from '../../../../services/TodoService';

// 휴지통 비우기 — deletedAt NOT NULL 일괄 영구 삭제
export const emptyTrash: NonNullable<MutationResolvers['emptyTrash']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  return emptyTrashService(userId);
};
