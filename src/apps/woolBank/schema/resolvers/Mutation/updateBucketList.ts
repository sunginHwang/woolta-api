import type { MutationResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getBucketListByIdOrThrow } from '../../../services/BucketListService';
import { prismaWoolBank } from '../../../utils/prismaClient';

// 원본 PUT /bucket-list/:id — 이미지는 전달된 경우에만 갱신
export const updateBucketList: NonNullable<MutationResolvers['updateBucketList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);
  const bucketList = await getBucketListByIdOrThrow(Number(_arg.id), userId);

  const updated = await prismaWoolBank.bucketList.update({
    where: { id: bucketList.id },
    data: {
      title: _arg.title,
      description: _arg.description,
      completeDate: new Date(_arg.completeDate),
      ...(_arg.imageUrl ? { imageUrl: _arg.imageUrl } : {}),
      ...(_arg.thumbImageUrl ? { thumbImageUrl: _arg.thumbImageUrl } : {}),
    },
  });

  return updated.id;
};
