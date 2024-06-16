import type { QueryResolvers } from './../../../generates/types.generated';
import { isAuthenticated } from '../../../middlewares/isAuthenticated';
import { PrismaClient as WoolBankPrismaClient } from '../../../../../../prisma/generated/woolBank';
const prisma = new WoolBankPrismaClient();

export const accountBookCategoryList: NonNullable<QueryResolvers['accountBookCategoryList']> = isAuthenticated(
  async (_parent, _arg, _ctx) => {
    const accountBookCategoryList = await prisma.accountBookCategory.findMany({
      orderBy: { id: 'desc' },
      include: { accountBookCategoryImage: true },
      where: { userId: 13, delYn: false },
    });
    const convertedAccountBookCategoryList = accountBookCategoryList.map((accountBookCategory) => ({
      ...accountBookCategory,
      id: String(accountBookCategory.id),
    }));

    return convertedAccountBookCategoryList;
  },
);
