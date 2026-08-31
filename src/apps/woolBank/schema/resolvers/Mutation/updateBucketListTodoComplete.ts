import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { updateBucketListTodoComplete as updateBucketListTodoCompleteService } from '../../../services/BucketListService';

export const updateBucketListTodoComplete: NonNullable<MutationResolvers['updateBucketListTodoComplete']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireRealUser(_ctx);
  const { todoId, isComplete } = _arg.input;

  return updateBucketListTodoCompleteService(userId, { todoId, isComplete });
};
