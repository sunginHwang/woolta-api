import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { touchBucketListUpdatedAt } from '../../../services/BucketListService';
import { prismaWoolBank } from '../../../utils/prismaClient';

// 원본 POST /todo — 버킷리스트 존재 검증 + updatedAt 갱신 트랜잭션
export const createBucketListTodo: NonNullable<MutationResolvers['createBucketListTodo']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireRealUser(_ctx);
  const { bucketListId, title, isComplete } = _arg.input;

  const bucketList = await prismaWoolBank.bucketList.findFirst({ where: { id: bucketListId, userId } });

  if (!bucketList) {
    throw new GraphQLError(`bucketList is not found. bucketListId: ${bucketListId}`, {
      extensions: { code: 'BAD_REQUEST' },
    });
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
