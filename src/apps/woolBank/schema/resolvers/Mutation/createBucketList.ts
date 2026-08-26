import type { MutationResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { prismaWoolBank } from '../../../utils/prismaClient';

// 원본 POST /bucket-list — todoList 동반 생성 트랜잭션
export const createBucketList: NonNullable<MutationResolvers['createBucketList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);
  const { title, description, completeDate, imageUrl, thumbImageUrl } = _arg.input;
  const todoList = _arg.input.todoList ?? [];

  const savedBucketList = await prismaWoolBank.$transaction(async (tx) => {
    const bucketList = await tx.bucketList.create({
      data: {
        title,
        description,
        completeDate: new Date(completeDate),
        userId,
        imageUrl: imageUrl ?? '',
        thumbImageUrl: thumbImageUrl ?? '',
        isComplete: false,
      },
    });

    if (todoList.length > 0) {
      await tx.todo.createMany({
        data: todoList.map((todo) => ({
          title: todo.title,
          isComplete: todo.isComplete,
          userId,
          bucketListId: bucketList.id,
        })),
      });
    }

    return bucketList;
  });

  return prismaWoolBank.bucketList.findUniqueOrThrow({
    where: { id: savedBucketList.id },
    include: { todoList: true },
  });
};
