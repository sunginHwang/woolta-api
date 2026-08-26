import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { gqlToDbAccountBookCategoryType, toGqlAccountBook } from '../../../utils/enums';
import { prismaWoolBank } from '../../../utils/prismaClient';

export const updateAccountBook: NonNullable<MutationResolvers['updateAccountBook']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { id, title, amount, memo, type, registerDateTime, categoryId, isDisabledBudget } = _arg.input;

  const accountBookCategory = await prismaWoolBank.accountBookCategory.findFirst({
    where: { userId, id: Number(categoryId) },
  });

  if (!accountBookCategory) {
    throw new GraphQLError('해당 카테고리가 존재하지 않습니다.', {
      extensions: {
        code: 'FORBIDDEN',
        myExtension: 'not found account book category',
      },
    });
  }

  const accountBook = await prismaWoolBank.accountBook.findFirst({ where: { id: Number(id), userId } });

  if (!accountBook) {
    throw new GraphQLError('해당 가계부 내역이 존재하지 않습니다.', {
      extensions: {
        code: 'FORBIDDEN',
        myExtension: 'not found account book',
      },
    });
  }

  const updatedAccountBook = await prismaWoolBank.accountBook.update({
    include: {
      accountBookCategory: {
        include: {
          accountBookCategoryImage: true,
        },
      },
    },
    where: { id: accountBook.id },
    data: {
      title: title ?? accountBook.title,
      memo: memo ?? accountBook.memo,
      amount: amount ?? accountBook.amount,
      type: type ? gqlToDbAccountBookCategoryType(type) : accountBook.type,
      isDisabledBudget: isDisabledBudget ?? accountBook.isDisabledBudget,
      registerDateTime: new Date(registerDateTime ?? accountBook.registerDateTime),
      accountBookCategoryId: Number(categoryId ?? accountBook.accountBookCategoryId),
    },
  });

  return toGqlAccountBook(updatedAccountBook);
};
