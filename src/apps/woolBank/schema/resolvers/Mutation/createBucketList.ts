import type { MutationResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { prismaWoolBank } from '../../../utils/prismaClient';

// 원본 POST /bucket-list — todoList 동반 생성 트랜잭션
export const createBucketList: NonNullable<MutationResolvers['createBucketList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);

  const savedBucketList = await prismaWoolBank.$transaction(async (tx) => {
    const bucketList = await tx.bucketList.create({
      data: {
        title: _arg.title,
        description: _arg.description,
        completeDate: new Date(_arg.completeDate),
        userId,
        imageUrl: _arg.imageUrl ?? '',
        thumbImageUrl: _arg.thumbImageUrl ?? '',
        isComplete: false,
      },
    });

    const todoList = _arg.todoList ?? [];

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

  return savedBucketList.id;
};
