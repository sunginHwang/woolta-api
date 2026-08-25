import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getBucketListByUserId } from '../../../services/BucketListService';

export const bucketList: NonNullable<QueryResolvers['bucketList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);

  return getBucketListByUserId(userId, _arg.limit ?? 100);
};
