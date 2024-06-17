import { isAuthenticated } from '../../../middlewares/isAuthenticated';
import { PrismaClient as WoolBankPrismaClient } from '../../../../../../prisma/generated/woolBank';
import type { MutationResolvers } from './../../../generates/types.generated';

const prismaW = new WoolBankPrismaClient();

export const createRegularExpenditure: NonNullable<MutationResolvers['createRegularExpenditure']> = isAuthenticated(
  async (_parent, _arg, _ctx) => {
    const new_regular_expenditure = await prismaW.regularExpenditure.create({
      data: {
        userId: 13,
        title: _arg.title,
        amount: _arg.amount,
        regularDate: _arg.regularDate,
        accountBookCategoryId: _arg.categoryId,
        isAutoExpenditure: _arg.isAutoExpenditure,
      },
    });

    return new_regular_expenditure.id;
  },
);
