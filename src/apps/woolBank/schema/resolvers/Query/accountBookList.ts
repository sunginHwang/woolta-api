import type { QueryResolvers } from './../../../generates/types.generated';
import { endOfMonth, startOfMonth } from 'date-fns';
import { requireAuth } from '../../../../../shared/auth';
import { prismaWoolBank } from '../../../utils/prismaClient';

export const accountBookList: NonNullable<QueryResolvers['accountBookList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);
  const startDate = startOfMonth(new Date(_arg.dateTime));
  const endDate = endOfMonth(new Date(_arg.dateTime));

  return prismaWoolBank.accountBook.findMany({
    orderBy: { id: 'desc' },
    include: {
      accountBookCategory: {
        include: {
          accountBookCategoryImage: true,
        },
      },
    },
    where: {
      userId,
      registerDateTime: {
        gte: startDate,
        lte: endDate,
      },
    },
  });
};
