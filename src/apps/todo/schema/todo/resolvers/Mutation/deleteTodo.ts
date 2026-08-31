import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { deleteTodo as deleteTodoService } from '../../../../services/TodoService';

// 영구 삭제
export const deleteTodo: NonNullable<MutationResolvers['deleteTodo']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { id } = _arg.input;
  return deleteTodoService(id, userId);
};
