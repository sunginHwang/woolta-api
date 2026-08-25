import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { assertOwnCategory, getNextTodoOrder, toTodo } from '../../../../services/TodoService';
import { prismaTodo } from '../../../../utils/prismaClient';

export const createTodo: NonNullable<MutationResolvers['createTodo']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);

  if (_arg.title.trim().length === 0) {
    throw new GraphQLError('제목을 입력해주세요.', { extensions: { code: 'BAD_REQUEST' } });
  }
  if (_arg.categoryId) {
    await assertOwnCategory(_arg.categoryId, userId);
  }

  const created = await prismaTodo.todo.create({
    data: {
      userId,
      title: _arg.title,
      memo: '',
      dueDate: _arg.dueDate ?? null,
      categoryId: _arg.categoryId ?? null,
      priority: _arg.priority ?? 'none',
      isCompleted: false,
      order: await getNextTodoOrder(userId),
    },
  });
  return toTodo(created);
};
