import type { MutationResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { createBucketList as createBucketListService } from '../../../services/BucketListService';

export const createBucketList: NonNullable<MutationResolvers['createBucketList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);
  const { title, description, completeDate, imageUrl, thumbImageUrl } = _arg.input;
  const todoList = _arg.input.todoList ?? [];

  return createBucketListService(userId, {
    title,
    description,
    completeDate,
    imageUrl,
    thumbImageUrl,
    todoList,
  });
};
