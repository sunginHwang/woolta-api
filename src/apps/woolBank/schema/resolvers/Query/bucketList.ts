import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getBucketListById } from '../../../services/BucketListService';

export const bucketList: NonNullable<QueryResolvers['bucketList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);

  return getBucketListById(Number(_arg.id), userId);
};
