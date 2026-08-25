import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { prismaWoolBank } from '../../../utils/prismaClient';

export const updateAccountBook: NonNullable<MutationResolvers['updateAccountBook']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);

  const accountBookCategory = await prismaWoolBank.accountBookCategory.findFirst({
    where: { userId, id: Number(_arg.categoryId) },
  });

  if (!accountBookCategory) {
    throw new GraphQLError('해당 카테고리가 존재하지 않습니다.', {
      extensions: {
        code: 'FORBIDDEN',
        myExtension: 'not found account book category',
      },
    });
  }

  const accountBook = await prismaWoolBank.accountBook.findFirst({ where: { id: Number(_arg.id), userId } });

  if (!accountBook) {
    throw new GraphQLError('해당 가계부 내역이 존재하지 않습니다.', {
      extensions: {
        code: 'FORBIDDEN',
        myExtension: 'not found account book',
      },
    });
  }

  return prismaWoolBank.accountBook.update({
    include: {
      accountBookCategory: {
        include: {
          accountBookCategoryImage: true,
        },
      },
    },
    where: { id: accountBook.id },
    data: {
      title: _arg.title ?? accountBook.title,
      memo: _arg.memo ?? accountBook.memo,
      amount: _arg.amount ?? accountBook.amount,
      type: _arg.type ?? accountBook.type,
      isDisabledBudget: _arg.isDisabledBudget ?? accountBook.isDisabledBudget,
      registerDateTime: new Date(_arg.registerDateTime ?? accountBook.registerDateTime),
      accountBookCategoryId: Number(_arg.categoryId ?? accountBook.accountBookCategoryId),
    },
  });
};
