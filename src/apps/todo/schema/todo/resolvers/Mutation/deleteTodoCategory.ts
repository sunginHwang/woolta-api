import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { deleteTodoCategory as deleteTodoCategoryService } from '../../../../services/TodoService';

// 캐스케이드: 소속 todo 는 categoryId = null (기본함 이동) — 현재 클라 동작과 동일
export const deleteTodoCategory: NonNullable<MutationResolvers['deleteTodoCategory']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { id } = _arg.input;
  return deleteTodoCategoryService(id, userId);
};
