import type { TodoPriority } from '../generates/types.generated';

// DB 에는 소문자 저장 ('none'|'low'|'medium'|'high') — GraphQL 경계에서만 UPPER_CASE 사용
const DB_TO_GQL: Record<string, TodoPriority> = {
  none: 'NONE',
  low: 'LOW',
  medium: 'MEDIUM',
  high: 'HIGH',
};

const GQL_TO_DB: Record<TodoPriority, string> = {
  NONE: 'none',
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
};

export const priorityToGql = (dbValue: string): TodoPriority => {
  return (DB_TO_GQL[dbValue] ?? 'NONE') as TodoPriority;
};

export const priorityToDb = (gqlValue: TodoPriority): string => {
  return GQL_TO_DB[gqlValue] ?? 'none';
};
