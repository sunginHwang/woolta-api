import type { QueryResolvers } from './../../../generates/types.generated';
import { isAuthenticated } from '../../../middlewares/isAuthenticated';
import { PrismaClient as WoolBankPrismaClient } from '../../../../../../prisma/generated/woolBank';
const prisma = new WoolBankPrismaClient();

export const accountBookImageList: NonNullable<QueryResolvers['accountBookImageList']> = isAuthenticated(
  async (_parent, _arg, _ctx) => {
    const accountBookImageList = await prisma.accountBookCategoryImage.findMany({ orderBy: { id: 'desc' } });
    const convertedAccountBookImageList = accountBookImageList.map((accountBookImage) => ({
      ...accountBookImage,
      id: String(accountBookImage.id),
    }));
    return convertedAccountBookImageList;
  },
);
