import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { prismaWoolBank } from '../../../utils/prismaClient';

export const deleteAccountBook: NonNullable<MutationResolvers['deleteAccountBook']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);

  try {
    const accountBook = await prismaWoolBank.accountBook.findFirst({ where: { id: Number(_arg.id), userId } });

    if (!accountBook) {
      return -1;
    }

    await prismaWoolBank.accountBook.delete({ where: { id: accountBook.id } });
    return accountBook.id;
  } catch {
    return -1;
  }
};
