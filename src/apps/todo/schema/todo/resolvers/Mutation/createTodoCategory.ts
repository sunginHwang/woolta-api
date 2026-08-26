import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { getNextCategoryOrder } from '../../../../services/TodoService';
import { prismaTodo } from '../../../../utils/prismaClient';

export const createTodoCategory: NonNullable<MutationResolvers['createTodoCategory']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { name } = _arg.input;

  if (name.trim().length === 0) {
    throw new GraphQLError('카테고리 이름을 입력해주세요.', { extensions: { code: 'BAD_REQUEST' } });
  }

  return prismaTodo.todoCategory.create({
    data: {
      userId,
      name,
      order: await getNextCategoryOrder(userId),
    },
  });
};
