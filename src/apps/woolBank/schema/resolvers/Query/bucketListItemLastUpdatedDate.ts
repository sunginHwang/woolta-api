import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getBucketListByIdOrThrow } from '../../../services/BucketListService';

// 원본 GET /bucket-list/:id/last-update-date
export const bucketListItemLastUpdatedDate: NonNullable<QueryResolvers['bucketListItemLastUpdatedDate']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireAuth(_ctx);
  const bucket = await getBucketListByIdOrThrow(Number(_arg.id), userId);

  return bucket.updatedAt;
};
