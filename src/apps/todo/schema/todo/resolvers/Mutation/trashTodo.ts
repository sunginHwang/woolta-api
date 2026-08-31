import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { trashTodo as trashTodoService } from '../../../../services/TodoService';

export const trashTodo: NonNullable<MutationResolvers['trashTodo']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { id } = _arg.input;
  return trashTodoService(id, userId);
};
