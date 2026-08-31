import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { createTodo as createTodoService } from '../../../../services/TodoService';

export const createTodo: NonNullable<MutationResolvers['createTodo']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { title, dueDate, categoryId, priority } = _arg.input;
  return createTodoService(userId, title, dueDate, categoryId, priority);
};
