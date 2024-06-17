import type { MutationResolvers } from './../../../generates/types.generated';
import { PrismaClient as WoolBankPrismaClient } from '../../../../../../prisma/generated/woolBank';
import { isAuthenticated } from '../../../middlewares/isAuthenticated';

const prismaW = new WoolBankPrismaClient();
export const deleteAccountBook: NonNullable<MutationResolvers['deleteAccountBook']> = isAuthenticated(
  async (_parent, _arg, _ctx) => {
    try {
      await prismaW.accountBook.delete({
        where: { id: Number(_arg.id) },
      });
      return Number(_arg.id);
    } catch {
      return -1;
    }
  },
);
