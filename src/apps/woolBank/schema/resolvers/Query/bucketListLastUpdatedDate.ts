import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { prismaWoolBank } from '../../../utils/prismaClient';

// 원본 GET /bucket-list/last-update-date — 없으면 현재일시
export const bucketListLastUpdatedDate: NonNullable<QueryResolvers['bucketListLastUpdatedDate']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireAuth(_ctx);

  const bucket = await prismaWoolBank.bucketList.findFirst({
    where: { userId },
    orderBy: { updatedAt: 'desc' },
  });

  return bucket?.updatedAt ?? new Date();
};
