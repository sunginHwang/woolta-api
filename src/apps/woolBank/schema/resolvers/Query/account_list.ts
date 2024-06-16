import type { QueryResolvers } from './../../../generates/types.generated';
import { PrismaClient as WoolBankPrismaClient } from '../../../../../../prisma/generated/woolBank';
const prisma = new WoolBankPrismaClient();

export const account_list: NonNullable<QueryResolvers['account_list']> = async (_parent, _arg, _ctx) => {
  const account_list = await prisma.account.findMany({
    orderBy: { id: 'desc' },
    include: { savingType: true },
    where: {
      userId: 13,
    },
  });

  return account_list;
};
