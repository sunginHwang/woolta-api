import type { QueryResolvers } from './../../../generates/types.generated';
import { isAuthenticated } from '../../../middlewares/isAuthenticated';
import { PrismaClient as WoolBankPrismaClient } from '../../../../../../prisma/generated/woolBank';
import { endOfDay, startOfDay } from 'date-fns';
import * as _ from 'lodash';
const prisma = new WoolBankPrismaClient();

export const accountBookStatisticList: NonNullable<QueryResolvers['accountBookStatisticList']> = isAuthenticated(
  async (_parent, _arg, _ctx) => {
    const accountBookList = await prisma.accountBook.findMany({
      include: { accountBookCategory: true },
      where: {
        userId: 13,
        type: _arg.type,
        registerDateTime: {
          gte: startOfDay(new Date(_arg.startDate)),
          lte: endOfDay(new Date(_arg.endDate)),
        },
      },
    });

    const totalAmount = accountBookList.reduce((acc, accountBook) => acc + accountBook.amount, 0);
    const statisticList = _.chain(accountBookList)
      .groupBy('accountBookCategoryId')
      .map((item, key) => {
        const amount = item.reduce((prev, acc) => prev + acc.amount, 0);
        const percentage = Number(((amount / totalAmount) * 100).toFixed(0));
        console.log(item);
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
    return statisticList;
  },
);
