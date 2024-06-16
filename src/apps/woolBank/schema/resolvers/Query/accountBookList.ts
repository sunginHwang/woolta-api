import type { QueryResolvers } from './../../../generates/types.generated';
import { PrismaClient as WoolBankPrismaClient } from '../../../../../../prisma/generated/woolBank';
import { endOfMonth, startOfMonth, startOfDay, endOfDay } from 'date-fns';

const prisma = new WoolBankPrismaClient();

export const accountBookList: NonNullable<QueryResolvers['accountBookList']> = async (_parent, _arg, _ctx) => {
  const startDate = startOfMonth(new Date(_arg.dateTime));
  const endDate = endOfMonth(new Date(_arg.dateTime));

  const accountBookList = await prisma.accountBook.findMany({
    orderBy: { id: 'desc' },
    include: {
      accountBookCategory: {
        include: {
          accountBookCategoryImage: true,
        },
      },
    },
    where: {
      userId: 13,
      registerDateTime: {
        gte: startDate,
        lte: endDate,
      },
    },
  });

  return accountBookList;
};
