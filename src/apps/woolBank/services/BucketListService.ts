import { BucketList, Todo } from '../../../../prisma/generated/woolBank/client';
import { NotFoundError, ValidationError } from '../../../shared/errors';
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
    throw new NotFoundError(`bucketListId:${id} is not found`);
  }

  return bucketList;
};

export const getBucketListSummaryList = async (userId: number, limit: number = 100) => {
  const [itemList, totalCount] = await Promise.all([
    getBucketListByUserId(userId, limit),
    prismaWoolBank.bucketList.count({ where: { userId } }),
  ]);

  return { totalCount, itemList };
};

// 원본 GET /bucket-list/:id — todoList 포함
export const getBucketListById = async (id: number, userId: number) => {
  return prismaWoolBank.bucketList.findFirst({
    where: { id, userId },
    include: { todoList: true },
  });
};

// 원본 GET /bucket-list/last-update-date — 없으면 현재일시
export const getBucketListLastUpdatedDate = async (userId: number) => {
  const bucket = await prismaWoolBank.bucketList.findFirst({
    where: { userId },
    orderBy: { updatedAt: 'desc' },
  });

  return bucket?.updatedAt ?? new Date();
};

// 원본 POST /bucket-list — todoList 동반 생성 트랜잭션
export const createBucketList = async (
  userId: number,
  {
    title,
    description,
    completeDate,
    imageUrl,
    thumbImageUrl,
    todoList,
  }: {
    title: string;
    description: string;
    completeDate: Date | string;
    imageUrl?: string | null;
    thumbImageUrl?: string | null;
    todoList: { title: string; isComplete: boolean }[];
  },
) => {
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

// 원본 PUT /bucket-list/:id — 이미지는 전달된 경우에만 갱신
export const updateBucketList = async (
  userId: number,
  {
    id,
    title,
    description,
    completeDate,
    imageUrl,
    thumbImageUrl,
  }: {
    id: number;
    title: string;
    description: string;
    completeDate: Date | string;
    imageUrl?: string | null;
    thumbImageUrl?: string | null;
  },
) => {
  const bucketList = await getBucketListByIdOrThrow(id, userId);

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

// 원본 DELETE /bucket-list/:id — todo 동반 삭제 트랜잭션, 실패 시 false
export const deleteBucketList = async (userId: number, id: number) => {
  const bucketList = await getBucketListByIdOrThrow(id, userId);

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

// 원본 PUT /bucket-list/:id/complete
export const completeBucketList = async (userId: number, id: number) => {
  const bucketList = await getBucketListByIdOrThrow(id, userId);

  await prismaWoolBank.bucketList.update({
    where: { id: bucketList.id },
    data: { isComplete: true },
  });

  return true;
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

// 원본 POST /todo — 버킷리스트 존재 검증 + updatedAt 갱신 트랜잭션
export const createBucketListTodo = async (
  userId: number,
  { bucketListId, title, isComplete }: { bucketListId: number; title: string; isComplete: boolean },
) => {
  const bucketList = await prismaWoolBank.bucketList.findFirst({ where: { id: bucketListId, userId } });

  if (!bucketList) {
    throw new ValidationError(`bucketList is not found. bucketListId: ${bucketListId}`);
  }

  return prismaWoolBank.$transaction(async (tx) => {
    const todo = await tx.todo.create({
      data: {
        title,
        isComplete,
        bucketListId,
        userId,
      },
    });

    await touchBucketListUpdatedAt(tx, bucketListId, userId);

    return todo;
  });
};

// 원본 DELETE /todo/:todoId
export const deleteBucketListTodo = async (userId: number, todoId: string) => {
  const todo = await prismaWoolBank.todo.findUnique({ where: { id: Number(todoId) } });

  if (!todo) {
    throw new ValidationError(`todo is not found. todoId: ${todoId}`);
  }

  await prismaWoolBank.$transaction(async (tx) => {
    await tx.todo.delete({ where: { id: todo.id } });
    await touchBucketListUpdatedAt(tx, todo.bucketListId, userId);
  });

  return true;
};

// 원본 PUT /todo/:todoId (changeTodoComplete)
export const updateBucketListTodoComplete = async (
  userId: number,
  { todoId, isComplete }: { todoId: string; isComplete: boolean },
) => {
  const todo = await prismaWoolBank.todo.findUnique({ where: { id: Number(todoId) } });

  if (!todo) {
    throw new ValidationError(`todo is not found. todoId: ${todoId}`);
  }

  return prismaWoolBank.$transaction(async (tx) => {
    const updatedTodo = await tx.todo.update({
      where: { id: todo.id },
      data: { isComplete },
    });

    await touchBucketListUpdatedAt(tx, updatedTodo.bucketListId, userId);

    return updatedTodo;
  });
};
