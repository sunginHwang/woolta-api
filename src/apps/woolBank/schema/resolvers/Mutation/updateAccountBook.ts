import type { MutationResolvers } from './../../../generates/types.generated';
import { PrismaClient as WoolBankPrismaClient } from '../../../../../../prisma/generated/woolBank';
import { isAuthenticated } from '../../../middlewares/isAuthenticated';
import { GraphQLError } from 'graphql/error';

const prismaW = new WoolBankPrismaClient();

export const updateAccountBook: NonNullable<MutationResolvers['updateAccountBook']> = isAuthenticated(
  async (_parent, _arg, _ctx) => {
    const accountBookCategory = await prismaW.accountBookCategory.findUnique({
      where: { userId: 13, id: _arg.categoryId },
    });

    if (!accountBookCategory) {
      throw new GraphQLError('해당 카테고리가 존재하지 않습니다.', {
        extensions: {
          code: 'FORBIDDEN',
          myExtension: 'not found account book category',
        },
      });
    }

    return await prismaW.accountBook.update({
      include: {
        accountBookCategory: {
          include: {
            accountBookCategoryImage: true,
          },
        },
      },
      where: { id: Number(_arg.id) },
      data: {
        title: _arg.title,
        memo: _arg.memo,
        amount: _arg.amount,
        type: _arg.type,
        registerDateTime: new Date(_arg.registerDateTime),
        accountBookCategoryId: _arg.categoryId,
      },
    });
  },
);
