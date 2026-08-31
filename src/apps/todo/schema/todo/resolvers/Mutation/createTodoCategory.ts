import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { createTodoCategory as createTodoCategoryService } from '../../../../services/TodoService';

export const createTodoCategory: NonNullable<MutationResolvers['createTodoCategory']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { name } = _arg.input;
  return createTodoCategoryService(userId, name);
};
