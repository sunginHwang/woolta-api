import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { updateTodoCategory as updateTodoCategoryService } from '../../../../services/TodoService';

export const updateTodoCategory: NonNullable<MutationResolvers['updateTodoCategory']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { id, name } = _arg.input;
  return updateTodoCategoryService(userId, id, name);
};
