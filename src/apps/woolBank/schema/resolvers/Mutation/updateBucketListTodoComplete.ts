import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { touchBucketListUpdatedAt } from '../../../services/BucketListService';
import { prismaWoolBank } from '../../../utils/prismaClient';

// 원본 PUT /todo/:todoId (changeTodoComplete)
export const updateBucketListTodoComplete: NonNullable<MutationResolvers['updateBucketListTodoComplete']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireRealUser(_ctx);
  const { todoId, isComplete } = _arg.input;

  const todo = await prismaWoolBank.todo.findUnique({ where: { id: Number(todoId) } });

  if (!todo) {
    throw new GraphQLError(`todo is not found. todoId: ${todoId}`, { extensions: { code: 'BAD_REQUEST' } });
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
