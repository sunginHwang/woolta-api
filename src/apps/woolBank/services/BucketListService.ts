import { GraphQLError } from 'graphql/error';
import { BucketList, Todo } from '../../../../prisma/generated/woolBank/client';
import { prismaWoolBank } from '../utils/prismaClient';

// 원본 bucketListService.getBucketListByUserId의 BucketListResType 변환
export const toBucketListSummary = (bucket: BucketList & { todoList: Todo[] }) => ({
  id: bucket.id,
  title: bucket.title,
  isComplete: bucket.isComplete,
  completeDate: bucket.completeDate,
  todoCount: bucket.todoList.length,
  completeTodoCount: bucket.todoList.filter((todo) => todo.isComplete).length,
  thumbImageUrl: bucket.thumbImageUrl,
  updatedAt: bucket.updatedAt,
});

export const getBucketListByUserId = async (userId: number, limit: number = 100) => {
  const bucketList = await prismaWoolBank.bucketList.findMany({
    where: { userId },
    orderBy: { id: 'desc' },
    take: limit,
    include: { todoList: true },
  });

  return bucketList.map(toBucketListSummary);
};

export const getBucketListByIdOrThrow = async (id: number, userId: number) => {
  const bucketList = await prismaWoolBank.bucketList.findFirst({ where: { id, userId } });

  if (!bucketList) {
    throw new GraphQLError(`bucketListId:${id} is not found`, { extensions: { code: 'NOT_FOUND' } });
  }

  return bucketList;
};

// 원본 todoService: todo 변경 시 소속 버킷리스트의 updatedAt 갱신
export const touchBucketListUpdatedAt = async (
  tx: Pick<typeof prismaWoolBank, 'bucketList'>,
  bucketListId: number,
  userId: number,
) => {
  const bucket = await tx.bucketList.findFirst({ where: { id: bucketListId, userId } });

  if (bucket) {
    await tx.bucketList.update({ where: { id: bucket.id }, data: { updatedAt: new Date() } });
  }
};
