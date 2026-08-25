import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { assertOwnCategory, getOwnTodo, toTodo } from '../../../../services/TodoService';
import { prismaTodo } from '../../../../utils/prismaClient';

// 부분 업데이트·멱등 — 상세 패널 자동 저장(debounce)과 칸반 카테고리 이동이 공유하는 진입점
export const updateTodo: NonNullable<MutationResolvers['updateTodo']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  await getOwnTodo(_arg.id, userId);

  const { input } = _arg;
  if (input.title != null && input.title.trim().length === 0) {
    throw new GraphQLError('제목을 입력해주세요.', { extensions: { code: 'BAD_REQUEST' } });
  }
  // categoryId 는 null(기본함 이동)과 미전달을 구분한다
  if (input.categoryId != null) {
    await assertOwnCategory(input.categoryId, userId);
  }

  const updated = await prismaTodo.todo.update({
    where: { id: _arg.id },
    data: {
      title: input.title ?? undefined,
      memo: input.memo ?? undefined,
      priority: input.priority ?? undefined,
      dueDate: input.dueDate === undefined ? undefined : input.dueDate,
      categoryId: input.categoryId === undefined ? undefined : input.categoryId,
    },
  });
  return toTodo(updated);
};
