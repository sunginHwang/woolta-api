import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { toTodo } from '../../../../services/TodoService';
import { prismaTodo } from '../../../../utils/prismaClient';

// v1: 휴지통 포함 전체 1회 조회 — 스마트 리스트 필터/카운트는 클라이언트 유지 (스펙 허용안)
export const todoList: NonNullable<QueryResolvers['todoList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);

  const itemList = await prismaTodo.todo.findMany({
    where: { userId },
    orderBy: { createdAt: 'asc' },
  });
  const mapped = itemList.map(toTodo);
  return { totalCount: mapped.length, itemList: mapped };
};
