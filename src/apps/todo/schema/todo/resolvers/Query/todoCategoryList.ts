import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { prismaTodo } from '../../../../utils/prismaClient';

export const todoCategoryList: NonNullable<QueryResolvers['todoCategoryList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);

  const itemList = await prismaTodo.todoCategory.findMany({
    where: { userId },
    orderBy: { order: 'asc' },
  });
  return { totalCount: itemList.length, itemList };
};
