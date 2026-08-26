import type { MutationResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getBucketListByIdOrThrow } from '../../../services/BucketListService';
import { prismaWoolBank } from '../../../utils/prismaClient';

// 원본 PUT /bucket-list/:id/complete
export const completeBucketList: NonNullable<MutationResolvers['completeBucketList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);
  const bucketList = await getBucketListByIdOrThrow(Number(_arg.input.id), userId);

  await prismaWoolBank.bucketList.update({
    where: { id: bucketList.id },
    data: { isComplete: true },
  });

  return true;
};
