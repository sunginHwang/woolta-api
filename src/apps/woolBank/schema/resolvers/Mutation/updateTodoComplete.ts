import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { touchBucketListUpdatedAt } from '../../../services/BucketListService';
import { prismaWoolBank } from '../../../utils/prismaClient';

// 원본 PUT /todo/:todoId (changeTodoComplete)
export const updateTodoComplete: NonNullable<MutationResolvers['updateTodoComplete']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);

  const todo = await prismaWoolBank.todo.findUnique({ where: { id: Number(_arg.todoId) } });

  if (!todo) {
    throw new GraphQLError(`todo is not found. todoId: ${_arg.todoId}`, { extensions: { code: 'BAD_REQUEST' } });
  }

  return prismaWoolBank.$transaction(async (tx) => {
    const updatedTodo = await tx.todo.update({
      where: { id: todo.id },
      data: { isComplete: _arg.isComplete },
    });

    await touchBucketListUpdatedAt(tx, updatedTodo.bucketListId, userId);

    return updatedTodo;
  });
};
