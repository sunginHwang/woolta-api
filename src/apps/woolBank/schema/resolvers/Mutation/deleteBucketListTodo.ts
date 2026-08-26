import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { touchBucketListUpdatedAt } from '../../../services/BucketListService';
import { prismaWoolBank } from '../../../utils/prismaClient';

// 원본 DELETE /todo/:todoId
export const deleteBucketListTodo: NonNullable<MutationResolvers['deleteBucketListTodo']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireRealUser(_ctx);
  const { todoId } = _arg.input;

  const todo = await prismaWoolBank.todo.findUnique({ where: { id: Number(todoId) } });

  if (!todo) {
    throw new GraphQLError(`todo is not found. todoId: ${todoId}`, { extensions: { code: 'BAD_REQUEST' } });
  }

  await prismaWoolBank.$transaction(async (tx) => {
    await tx.todo.delete({ where: { id: todo.id } });
    await touchBucketListUpdatedAt(tx, todo.bucketListId, userId);
  });

  return true;
};
