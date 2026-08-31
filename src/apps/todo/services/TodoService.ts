import type { Todo as PrismaTodo } from '../../../../prisma/generated/todo/client';
import type { Todo, TodoImportResult, TodoPriority } from '../generates/types.generated';
import type { ImportTodoCategoryInput, ImportTodoInput } from '../generates/types.generated';
import { ValidationError, NotFoundError } from '../../../shared/errors';
import { prismaTodo } from '../utils/prismaClient';
import { priorityToDb, priorityToGql } from '../utils/enums';

// priority 는 DB 에 소문자 문자열로 저장 — GraphQL 경계에서 UPPER_CASE 로 변환
export const toTodo = (todo: PrismaTodo): Todo => ({
  ...todo,
  priority: priorityToGql(todo.priority),
});

export const getOwnTodo = async (id: string, userId: number) => {
  const todo = await prismaTodo.todo.findFirst({ where: { id, userId } });
  if (!todo) {
    throw new NotFoundError('존재하지 않는 할 일입니다.');
  }
  return todo;
};

// categoryId 인자는 본인 소유 카테고리만 허용
export const assertOwnCategory = async (categoryId: string, userId: number) => {
  const category = await prismaTodo.todoCategory.findFirst({ where: { id: categoryId, userId } });
  if (!category) {
    throw new NotFoundError('존재하지 않는 카테고리입니다.');
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
        throw new ValidationError('이관 데이터의 카테고리 참조가 올바르지 않습니다.');
      }
      const created = await tx.todo.create({
        data: {
          userId,
          title: todo.title,
          memo: todo.memo,
          dueDate: todo.dueDate ?? null,
          categoryId: todo.categoryClientId ? categoryIds.get(todo.categoryClientId)! : null,
          priority: priorityToDb(todo.priority), // GQL UPPER_CASE → DB 소문자
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

// --- 리졸버에서 이관된 서비스 함수 ---

// 토글이 아닌 명시값(동시성 안전) — completedAt 은 서버가 세팅/해제
export const completeTodo = async (id: string, userId: number, isCompleted: boolean): Promise<Todo> => {
  await getOwnTodo(id, userId);
  const updated = await prismaTodo.todo.update({
    where: { id },
    data: { isCompleted, completedAt: isCompleted ? new Date() : null },
  });
  return toTodo(updated);
};

export const createTodo = async (
  userId: number,
  title: string,
  dueDate: string | null | undefined,
  categoryId: string | null | undefined,
  priority: TodoPriority | null | undefined,
): Promise<Todo> => {
  if (title.trim().length === 0) {
    throw new ValidationError('제목을 입력해주세요.');
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

export const createTodoCategory = async (userId: number, name: string) => {
  if (name.trim().length === 0) {
    throw new ValidationError('카테고리 이름을 입력해주세요.');
  }
  return prismaTodo.todoCategory.create({
    data: { userId, name, order: await getNextCategoryOrder(userId) },
  });
};

// 영구 삭제
export const deleteTodo = async (id: string, userId: number): Promise<boolean> => {
  await getOwnTodo(id, userId);
  await prismaTodo.todo.delete({ where: { id } });
  return true;
};

// 캐스케이드: 소속 todo 는 categoryId = null (기본함 이동) — 현재 클라 동작과 동일
export const deleteTodoCategory = async (id: string, userId: number): Promise<boolean> => {
  await assertOwnCategory(id, userId);
  await prismaTodo.$transaction([
    prismaTodo.todo.updateMany({ where: { userId, categoryId: id }, data: { categoryId: null } }),
    prismaTodo.todoCategory.delete({ where: { id } }),
  ]);
  return true;
};

// 휴지통 비우기 — deletedAt NOT NULL 일괄 영구 삭제
export const emptyTrash = async (userId: number): Promise<boolean> => {
  await prismaTodo.todo.deleteMany({ where: { userId, deletedAt: { not: null } } });
  return true;
};

export const restoreTodo = async (id: string, userId: number): Promise<Todo> => {
  await getOwnTodo(id, userId);
  const updated = await prismaTodo.todo.update({ where: { id }, data: { deletedAt: null } });
  return toTodo(updated);
};

export const trashTodo = async (id: string, userId: number): Promise<Todo> => {
  await getOwnTodo(id, userId);
  const updated = await prismaTodo.todo.update({ where: { id }, data: { deletedAt: new Date() } });
  return toTodo(updated);
};

// 부분 업데이트·멱등 — 상세 패널 자동 저장(debounce)과 칸반 카테고리 이동이 공유하는 진입점
export const updateTodo = async (
  userId: number,
  id: string,
  title: string | null | undefined,
  memo: string | null | undefined,
  priority: TodoPriority | null | undefined,
  dueDate: string | null | undefined,
  categoryId: string | null | undefined,
): Promise<Todo> => {
  await getOwnTodo(id, userId);
  if (title != null && title.trim().length === 0) {
    throw new ValidationError('제목을 입력해주세요.');
  }
  // categoryId 는 null(기본함 이동)과 미전달을 구분한다
  if (categoryId != null) {
    await assertOwnCategory(categoryId, userId);
  }
  const updated = await prismaTodo.todo.update({
    where: { id },
    data: {
      title: title ?? undefined,
      memo: memo ?? undefined,
      priority: priority != null ? priorityToDb(priority) : undefined,
      dueDate: dueDate === undefined ? undefined : dueDate,
      categoryId: categoryId === undefined ? undefined : categoryId,
    },
  });
  return toTodo(updated);
};

export const updateTodoCategory = async (userId: number, id: string, name: string) => {
  await assertOwnCategory(id, userId);
  if (name.trim().length === 0) {
    throw new ValidationError('카테고리 이름을 입력해주세요.');
  }
  return prismaTodo.todoCategory.update({ where: { id }, data: { name } });
};

export const getTodoCategoryList = async (userId: number) => {
  const itemList = await prismaTodo.todoCategory.findMany({
    where: { userId },
    orderBy: { order: 'asc' },
  });
  return { totalCount: itemList.length, itemList };
};

// v1: 휴지통 포함 전체 1회 조회 — 스마트 리스트 필터/카운트는 클라이언트 유지 (스펙 허용안)
export const getTodoList = async (userId: number) => {
  const itemList = await prismaTodo.todo.findMany({
    where: { userId },
    orderBy: { createdAt: 'asc' },
  });
  const mapped = itemList.map(toTodo);
  return { totalCount: mapped.length, itemList: mapped };
};
