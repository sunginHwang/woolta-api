import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { getOwnTodo, toTodo } from '../../../../services/TodoService';
import { prismaTodo } from '../../../../utils/prismaClient';

export const restoreTodo: NonNullable<MutationResolvers['restoreTodo']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { id } = _arg.input;
  await getOwnTodo(id, userId);

  const updated = await prismaTodo.todo.update({
    where: { id },
    data: { deletedAt: null },
  });
  return toTodo(updated);
};
