import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { restoreTodo as restoreTodoService } from '../../../../services/TodoService';

export const restoreTodo: NonNullable<MutationResolvers['restoreTodo']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { id } = _arg.input;
  return restoreTodoService(id, userId);
};
