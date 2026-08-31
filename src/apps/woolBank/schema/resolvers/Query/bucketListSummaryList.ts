import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getBucketListSummaryList } from '../../../services/BucketListService';

export const bucketListSummaryList: NonNullable<QueryResolvers['bucketListSummaryList']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireAuth(_ctx);

  return getBucketListSummaryList(userId, _arg.limitCount ?? 100);
};
