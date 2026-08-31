import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { createBucketListTodo as createBucketListTodoService } from '../../../services/BucketListService';

export const createBucketListTodo: NonNullable<MutationResolvers['createBucketListTodo']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireRealUser(_ctx);
  const { bucketListId, title, isComplete } = _arg.input;

  return createBucketListTodoService(userId, { bucketListId, title, isComplete });
};
