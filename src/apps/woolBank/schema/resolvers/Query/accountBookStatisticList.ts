import type { QueryResolvers } from './../../../generates/types.generated';
import { endOfDay, startOfDay } from 'date-fns';
import * as _ from 'lodash';
import { requireAuth } from '../../../../../shared/auth';
import { prismaWoolBank } from '../../../utils/prismaClient';

export const accountBookStatisticList: NonNullable<QueryResolvers['accountBookStatisticList']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireAuth(_ctx);

  const accountBookList = await prismaWoolBank.accountBook.findMany({
    include: { accountBookCategory: true },
    where: {
      userId,
      type: _arg.type,
      registerDateTime: {
        gte: startOfDay(new Date(_arg.startDate)),
        lte: endOfDay(new Date(_arg.endDate)),
      },
    },
  });

  const totalAmount = accountBookList.reduce((acc, accountBook) => acc + accountBook.amount, 0);

  return _.chain(accountBookList)
    .groupBy('accountBookCategoryId')
    .map((item, key) => {
      const amount = item.reduce((prev, acc) => prev + acc.amount, 0);
      const percentage = Number(((amount / totalAmount) * 100).toFixed(0));
      const accountBookCategory = item[0].accountBookCategory;
      return {
        amount,
        percentage,
        categoryId: key,
        useStatistic: accountBookCategory.useStatistic,
        categoryName: accountBookCategory.name,
        list: item
          .map(({ title, amount, registerDateTime }) => {
            return { title, amount, registerDateTime };
          })
          .sort((a, b) => b.amount - a.amount),
      };
    })
    .sort((a, b) => b.amount - a.amount)
    .value();
};
