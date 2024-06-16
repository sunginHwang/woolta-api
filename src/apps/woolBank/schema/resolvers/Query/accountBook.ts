import type { QueryResolvers } from './../../../generates/types.generated';
import { PrismaClient as WoolBankPrismaClient } from '../../../../../../prisma/generated/woolBank';
import { isAuthenticated } from '../../../middlewares/isAuthenticated';
const prisma = new WoolBankPrismaClient();

export const accountBook: NonNullable<QueryResolvers['accountBook']> = isAuthenticated(async (_parent, _arg, _ctx) => {
  return prisma.accountBook.findUnique({
    where: { id: Number(_arg.id) },
    include: {
      accountBookCategory: {
        include: {
          accountBookCategoryImage: true,
        },
      },
    },
  });
});
