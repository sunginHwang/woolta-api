import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { getOwnTodo, toTodo } from '../../../../services/TodoService';
import { prismaTodo } from '../../../../utils/prismaClient';

// 토글이 아닌 명시값(동시성 안전) — completedAt 은 서버가 세팅/해제
export const completeTodo: NonNullable<MutationResolvers['completeTodo']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  await getOwnTodo(_arg.id, userId);

  const updated = await prismaTodo.todo.update({
    where: { id: _arg.id },
    data: {
      isCompleted: _arg.isCompleted,
      completedAt: _arg.isCompleted ? new Date() : null,
    },
  });
  return toTodo(updated);
};
