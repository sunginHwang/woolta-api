import type { MutationResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getBucketListByIdOrThrow } from '../../../services/BucketListService';
import { prismaWoolBank } from '../../../utils/prismaClient';

// 원본 DELETE /bucket-list/:id — todo 동반 삭제 트랜잭션, 실패 시 false
export const deleteBucketList: NonNullable<MutationResolvers['deleteBucketList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);
  const bucketList = await getBucketListByIdOrThrow(Number(_arg.id), userId);

  try {
    await prismaWoolBank.$transaction([
      prismaWoolBank.todo.deleteMany({ where: { bucketListId: bucketList.id, userId } }),
      prismaWoolBank.bucketList.delete({ where: { id: bucketList.id } }),
    ]);
    return true;
  } catch {
    return false;
  }
};
