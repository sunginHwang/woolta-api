import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { assertOwnCategory } from '../../../../services/TodoService';
import { prismaTodo } from '../../../../utils/prismaClient';

// 캐스케이드: 소속 todo 는 categoryId = null (기본함 이동) — 현재 클라 동작과 동일
export const deleteTodoCategory: NonNullable<MutationResolvers['deleteTodoCategory']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  await assertOwnCategory(_arg.id, userId);

  await prismaTodo.$transaction([
    prismaTodo.todo.updateMany({
      where: { userId, categoryId: _arg.id },
      data: { categoryId: null },
    }),
    prismaTodo.todoCategory.delete({ where: { id: _arg.id } }),
  ]);
  return true;
};
