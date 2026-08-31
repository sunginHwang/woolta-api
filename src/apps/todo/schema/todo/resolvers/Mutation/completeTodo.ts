import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { completeTodo as completeTodoService } from '../../../../services/TodoService';

// 토글이 아닌 명시값(동시성 안전) — completedAt 은 서버가 세팅/해제
export const completeTodo: NonNullable<MutationResolvers['completeTodo']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { id, isCompleted } = _arg.input;
  return completeTodoService(id, userId, isCompleted);
};
