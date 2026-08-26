import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { prismaWoolBank } from '../../../utils/prismaClient';

export const deleteAccountBook: NonNullable<MutationResolvers['deleteAccountBook']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);

  try {
    const accountBook = await prismaWoolBank.accountBook.findFirst({ where: { id: Number(_arg.input.id), userId } });

    if (!accountBook) {
      return false;
    }

    await prismaWoolBank.accountBook.delete({ where: { id: accountBook.id } });
    return true;
  } catch {
    return false;
  }
};
