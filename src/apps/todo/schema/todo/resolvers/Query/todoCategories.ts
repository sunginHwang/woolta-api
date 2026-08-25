import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { prismaTodo } from '../../../../utils/prismaClient';

export const todoCategories: NonNullable<QueryResolvers['todoCategories']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);

  return prismaTodo.todoCategory.findMany({
    where: { userId },
    orderBy: { order: 'asc' },
  });
};
