import type { MutationResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getBucketListByIdOrThrow } from '../../../services/BucketListService';
import { prismaWoolBank } from '../../../utils/prismaClient';

// 원본 PUT /bucket-list/:id — 이미지는 전달된 경우에만 갱신
export const updateBucketList: NonNullable<MutationResolvers['updateBucketList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);
  const { id, title, description, completeDate, imageUrl, thumbImageUrl } = _arg.input;
  const bucketList = await getBucketListByIdOrThrow(Number(id), userId);

  return prismaWoolBank.bucketList.update({
    where: { id: bucketList.id },
    include: { todoList: true },
    data: {
      title,
      description,
      completeDate: new Date(completeDate),
      ...(imageUrl ? { imageUrl } : {}),
      ...(thumbImageUrl ? { thumbImageUrl } : {}),
    },
  });
};
