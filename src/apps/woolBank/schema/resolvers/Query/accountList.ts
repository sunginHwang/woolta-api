import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { prismaWoolBank } from '../../../utils/prismaClient';

// 원본 GET /accounts/ (getAccountsByUserId)
export const accountList: NonNullable<QueryResolvers['accountList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);

  const [itemList, totalCount] = await Promise.all([
    prismaWoolBank.account.findMany({
      where: { userId },
      orderBy: { id: 'desc' },
      take: _arg.limitCount ?? 100,
      include: { savingType: true, deposits: true },
    }),
    prismaWoolBank.account.count({ where: { userId } }),
  ]);

  return { totalCount, itemList };
};
