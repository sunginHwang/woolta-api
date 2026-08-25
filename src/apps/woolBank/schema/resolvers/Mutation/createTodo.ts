import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { touchBucketListUpdatedAt } from '../../../services/BucketListService';
import { prismaWoolBank } from '../../../utils/prismaClient';

// 원본 POST /todo — 버킷리스트 존재 검증 + updatedAt 갱신 트랜잭션
export const createTodo: NonNullable<MutationResolvers['createTodo']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);

  const bucketList = await prismaWoolBank.bucketList.findFirst({ where: { id: _arg.bucketListId, userId } });

  if (!bucketList) {
    throw new GraphQLError(`bucketList is not found. bucketListId: ${_arg.bucketListId}`, {
      extensions: { code: 'BAD_REQUEST' },
    });
  }

  const savedTodo = await prismaWoolBank.$transaction(async (tx) => {
    const todo = await tx.todo.create({
      data: {
        title: _arg.title,
        isComplete: _arg.isComplete,
        bucketListId: _arg.bucketListId,
        userId,
      },
    });

    await touchBucketListUpdatedAt(tx, _arg.bucketListId, userId);

    return todo;
  });

  return savedTodo.id;
};
