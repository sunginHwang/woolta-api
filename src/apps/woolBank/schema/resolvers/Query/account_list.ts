import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { prismaWoolBank } from '../../../utils/prismaClient';

// 원본 GET /accounts/ (getAccountsByUserId)
export const account_list: NonNullable<QueryResolvers['account_list']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);

  return prismaWoolBank.account.findMany({
    where: { userId },
    orderBy: { id: 'desc' },
    take: _arg.limit ?? 100,
    include: { savingType: true },
  });
};
