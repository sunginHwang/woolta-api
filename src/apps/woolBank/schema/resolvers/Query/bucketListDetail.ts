import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { prismaWoolBank } from '../../../utils/prismaClient';

// 원본 GET /bucket-list/:id — todoList 포함
export const bucketListDetail: NonNullable<QueryResolvers['bucketListDetail']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);

  return prismaWoolBank.bucketList.findFirst({
    where: { id: Number(_arg.id), userId },
    include: { todoList: true },
  });
};
