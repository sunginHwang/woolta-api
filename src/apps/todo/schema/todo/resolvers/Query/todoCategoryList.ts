import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { getTodoCategoryList } from '../../../../services/TodoService';

export const todoCategoryList: NonNullable<QueryResolvers['todoCategoryList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  return getTodoCategoryList(userId);
};
