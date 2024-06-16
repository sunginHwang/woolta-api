import type { MutationResolvers } from './../../../generates/types.generated';
import { PrismaClient as WoolBankPrismaClient } from '../../../../../../prisma/generated/woolBank';
import { isAuthenticated } from '../../../middlewares/isAuthenticated';

const prismaW = new WoolBankPrismaClient();

export const deleteAccountBookCategory: NonNullable<MutationResolvers['deleteAccountBookCategory']> = isAuthenticated(
  async (_parent, _arg, _ctx) => {
    try {
      await prismaW.accountBookCategory.update({
        where: { id: Number(_arg.id) },
        data: { delYn: true },
      });
      return true;
    } catch {
      return false;
    }
  },
);
