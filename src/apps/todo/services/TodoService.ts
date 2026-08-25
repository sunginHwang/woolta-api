import { GraphQLError } from 'graphql/error';
import type { Todo as PrismaTodo } from '../../../../prisma/generated/todo';
import type { Todo, TodoPriority, TodoImportResult } from '../generates/types.generated';
import type { ImportTodoCategoryInput, ImportTodoInput } from '../generates/types.generated';
import { prismaTodo } from '../utils/prismaClient';

// priority 는 DB 에 문자열로 저장 — GraphQL enum 으로 좁혀서 반환
export const toTodo = (todo: PrismaTodo): Todo => ({
  ...todo,
  priority: todo.priority as TodoPriority,
});

export const getOwnTodo = async (id: string, userId: number) => {
  const todo = await prismaTodo.todo.findFirst({ where: { id, userId } });
  if (!todo) {
    throw new GraphQLError('존재하지 않는 할 일입니다.', { extensions: { code: 'NOT_FOUND' } });
  }
  return todo;
};

// categoryId 인자는 본인 소유 카테고리만 허용
export const assertOwnCategory = async (categoryId: string, userId: number) => {
  const category = await prismaTodo.todoCategory.findFirst({ where: { id: categoryId, userId } });
  if (!category) {
    throw new GraphQLError('존재하지 않는 카테고리입니다.', { extensions: { code: 'NOT_FOUND' } });
  }
  return category;
};

export const getNextTodoOrder = async (userId: number) => {
  const max = await prismaTodo.todo.aggregate({ where: { userId }, _max: { order: true } });
  return (max._max.order ?? 0) + 1;
};

export const getNextCategoryOrder = async (userId: number) => {
  const max = await prismaTodo.todoCategory.aggregate({ where: { userId }, _max: { order: true } });
  return (max._max.order ?? 0) + 1;
};

// 로컬스토리지 1회 이관 — 서버가 UUID 재발급, clientId ↔ 서버 id 매핑 반환 (타임스탬프는 입력값 보존)
export const importTodos = async (
  userId: number,
  categories: ImportTodoCategoryInput[],
  todos: ImportTodoInput[],
): Promise<TodoImportResult> => {
  return prismaTodo.$transaction(async (tx) => {
    const categoryIdMap: { from: string; to: string }[] = [];
    const categoryIds = new Map<string, string>();

    for (const category of categories) {
      const created = await tx.todoCategory.create({
        data: {
          userId,
          name: category.name,
          order: category.order,
          ...(category.createdAt ? { createdAt: category.createdAt } : {}),
        },
      });
      categoryIds.set(category.clientId, created.id);
      categoryIdMap.push({ from: category.clientId, to: created.id });
    }

    const todoIdMap: { from: string; to: string }[] = [];
    for (const todo of todos) {
      if (todo.categoryClientId && !categoryIds.has(todo.categoryClientId)) {
        throw new GraphQLError('이관 데이터의 카테고리 참조가 올바르지 않습니다.', {
          extensions: { code: 'BAD_REQUEST' },
        });
      }
      const created = await tx.todo.create({
        data: {
          userId,
          title: todo.title,
          memo: todo.memo,
          dueDate: todo.dueDate ?? null,
          categoryId: todo.categoryClientId ? categoryIds.get(todo.categoryClientId)! : null,
          priority: todo.priority,
          isCompleted: todo.isCompleted,
          completedAt: todo.completedAt ?? null,
          deletedAt: todo.deletedAt ?? null,
          order: todo.order,
          ...(todo.createdAt ? { createdAt: todo.createdAt } : {}),
          ...(todo.updatedAt ? { updatedAt: todo.updatedAt } : {}),
        },
      });
      todoIdMap.push({ from: todo.clientId, to: created.id });
    }

    return { categoryIdMap, todoIdMap };
  });
};
