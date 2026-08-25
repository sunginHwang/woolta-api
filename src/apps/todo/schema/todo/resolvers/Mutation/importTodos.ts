import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { importTodos as importTodosService } from '../../../../services/TodoService';

// 로컬스토리지(woolta:todos) → 서버 1회 이관 — id 재발급 + clientId 매핑 반환
export const importTodos: NonNullable<MutationResolvers['importTodos']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);

  return importTodosService(userId, _arg.categories, _arg.todos);
};
