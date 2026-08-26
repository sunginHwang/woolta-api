import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { assertOwnCategory, getNextTodoOrder, toTodo } from '../../../../services/TodoService';
import { prismaTodo } from '../../../../utils/prismaClient';
import { priorityToDb } from '../../../../utils/enums';

export const createTodo: NonNullable<MutationResolvers['createTodo']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { title, dueDate, categoryId, priority } = _arg.input;

  if (title.trim().length === 0) {
    throw new GraphQLError('제목을 입력해주세요.', { extensions: { code: 'BAD_REQUEST' } });
  }
  if (categoryId) {
    await assertOwnCategory(categoryId, userId);
  }

  const created = await prismaTodo.todo.create({
    data: {
      userId,
      title,
      memo: '',
      dueDate: dueDate ?? null,
      categoryId: categoryId ?? null,
      priority: priority ? priorityToDb(priority) : 'none',
      isCompleted: false,
      order: await getNextTodoOrder(userId),
    },
  });
  return toTodo(created);
};
