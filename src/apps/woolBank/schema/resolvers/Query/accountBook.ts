import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { toGqlAccountBook } from '../../../utils/enums';
import { prismaWoolBank } from '../../../utils/prismaClient';

export const accountBook: NonNullable<QueryResolvers['accountBook']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);

  const accountBook = await prismaWoolBank.accountBook.findFirst({
    where: { id: Number(_arg.id), userId },
    include: {
      accountBookCategory: {
        include: {
          accountBookCategoryImage: true,
        },
      },
    },
  });

  return accountBook ? toGqlAccountBook(accountBook) : null;
};
