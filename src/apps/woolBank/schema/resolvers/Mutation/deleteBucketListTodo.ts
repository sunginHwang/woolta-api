import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { deleteBucketListTodo as deleteBucketListTodoService } from '../../../services/BucketListService';

export const deleteBucketListTodo: NonNullable<MutationResolvers['deleteBucketListTodo']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireRealUser(_ctx);
  const { todoId } = _arg.input;

  return deleteBucketListTodoService(userId, todoId);
};
