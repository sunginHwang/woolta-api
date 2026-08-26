import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { toGqlAccountBookCategory } from '../../../utils/enums';
import { prismaWoolBank } from '../../../utils/prismaClient';

export const createRegularExpenditure: NonNullable<MutationResolvers['createRegularExpenditure']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireRealUser(_ctx);
  const { title, amount, regularDate, isAutoExpenditure, categoryId } = _arg.input;

  // 원본 saveRegularExpenditure: 카테고리 소유 검증
  const accountBookCategory = await prismaWoolBank.accountBookCategory.findFirst({
    where: { id: categoryId, userId },
  });

  if (!accountBookCategory) {
    throw new GraphQLError('사용가능한 지출 타입이 아닙니다.', { extensions: { code: 'NOT_FOUND' } });
  }

  const newRegularExpenditure = await prismaWoolBank.regularExpenditure.create({
    include: {
      accountBookCategory: {
        include: {
          accountBookCategoryImage: true,
        },
      },
    },
    data: {
      userId,
      title,
      amount,
      regularDate,
      accountBookCategoryId: categoryId,
      isAutoExpenditure,
    },
  });

  return {
    ...newRegularExpenditure,
    accountBookCategory: toGqlAccountBookCategory(newRegularExpenditure.accountBookCategory),
  };
};
