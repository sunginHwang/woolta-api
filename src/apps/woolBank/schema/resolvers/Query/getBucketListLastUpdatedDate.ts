import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getBucketListLastUpdatedDate as getBucketListLastUpdatedDateService } from '../../../services/BucketListService';

export const getBucketListLastUpdatedDate: NonNullable<QueryResolvers['getBucketListLastUpdatedDate']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireAuth(_ctx);

  return getBucketListLastUpdatedDateService(userId);
};
