import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { assertOwnCategory } from '../../../../services/TodoService';
import { prismaTodo } from '../../../../utils/prismaClient';

export const updateTodoCategory: NonNullable<MutationResolvers['updateTodoCategory']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { id, name } = _arg.input;
  await assertOwnCategory(id, userId);

  if (name.trim().length === 0) {
    throw new GraphQLError('카테고리 이름을 입력해주세요.', { extensions: { code: 'BAD_REQUEST' } });
  }

  return prismaTodo.todoCategory.update({
    where: { id },
    data: { name },
  });
};
