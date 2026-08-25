import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { getOwnTodo } from '../../../../services/TodoService';
import { prismaTodo } from '../../../../utils/prismaClient';

// 영구 삭제
export const deleteTodo: NonNullable<MutationResolvers['deleteTodo']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  await getOwnTodo(_arg.id, userId);

  await prismaTodo.todo.delete({ where: { id: _arg.id } });
  return true;
};
