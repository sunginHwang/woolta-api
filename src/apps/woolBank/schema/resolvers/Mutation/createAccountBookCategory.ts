import type { MutationResolvers } from './../../../generates/types.generated';
import { PrismaClient as WoolBankPrismaClient } from '../../../../../../prisma/generated/woolBank';
import { isAuthenticated } from '../../../middlewares/isAuthenticated';

const prismaW = new WoolBankPrismaClient();

export const createAccountBookCategory: NonNullable<MutationResolvers['createAccountBookCategory']> = isAuthenticated(
  async (_parent, _arg, _ctx) => {
    return await prismaW.accountBookCategory.create({
      data: {
        delYn: false,
        userId: 13,
        name: _arg.name,
        type: _arg.type,
        accountBookCategoryImageId: _arg.accountBookCategoryImageId,
        useStatistic: _arg.useStatistic,
      },
    });
  },
);
