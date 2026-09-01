import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { updateBucketList as updateBucketListService } from '../../../services/BucketListService';

export const updateBucketList: NonNullable<MutationResolvers['updateBucketList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { id, title, description, completeDate, imageUrl, thumbImageUrl } = _arg.input;

  return updateBucketListService(userId, {
    id: Number(id),
    title,
    description,
    completeDate,
    imageUrl,
    thumbImageUrl,
  });
};
