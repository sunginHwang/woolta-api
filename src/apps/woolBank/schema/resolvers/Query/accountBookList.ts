import type { QueryResolvers } from './../../../generates/types.generated';
import { endOfMonth, startOfMonth } from 'date-fns';
import { requireAuth } from '../../../../../shared/auth';
import { toGqlAccountBook } from '../../../utils/enums';
import { prismaWoolBank } from '../../../utils/prismaClient';

export const accountBookList: NonNullable<QueryResolvers['accountBookList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);
  const startDate = startOfMonth(new Date(_arg.dateTime));
  const endDate = endOfMonth(new Date(_arg.dateTime));

  const accountBookList = await prismaWoolBank.accountBook.findMany({
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

  const itemList = accountBookList.map(toGqlAccountBook);

  return { totalCount: itemList.length, itemList };
};
