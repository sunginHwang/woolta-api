import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { updateTodo as updateTodoService } from '../../../../services/TodoService';

// 부분 업데이트·멱등 — 상세 패널 자동 저장(debounce)과 칸반 카테고리 이동이 공유하는 진입점
export const updateTodo: NonNullable<MutationResolvers['updateTodo']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { id, title, memo, priority, dueDate, categoryId } = _arg.input;
  return updateTodoService(userId, id, title, memo, priority, dueDate, categoryId);
};
