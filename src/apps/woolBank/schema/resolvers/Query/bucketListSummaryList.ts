import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getBucketListByUserId } from '../../../services/BucketListService';
import { prismaWoolBank } from '../../../utils/prismaClient';

export const bucketListSummaryList: NonNullable<QueryResolvers['bucketListSummaryList']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireAuth(_ctx);

  const [itemList, totalCount] = await Promise.all([
    getBucketListByUserId(userId, _arg.limitCount ?? 100),
    prismaWoolBank.bucketList.count({ where: { userId } }),
  ]);

  return { totalCount, itemList };
};
