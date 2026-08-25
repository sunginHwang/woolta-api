import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { prismaWoolBank } from '../../../utils/prismaClient';

export const createRegularExpenditure: NonNullable<MutationResolvers['createRegularExpenditure']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireRealUser(_ctx);

  // 원본 saveRegularExpenditure: 카테고리 소유 검증
  const accountBookCategory = await prismaWoolBank.accountBookCategory.findFirst({
    where: { id: _arg.categoryId, userId },
  });

  if (!accountBookCategory) {
    throw new GraphQLError('사용가능한 지출 타입이 아닙니다.', { extensions: { code: 'NOT_FOUND' } });
  }

  const newRegularExpenditure = await prismaWoolBank.regularExpenditure.create({
    data: {
      userId,
      title: _arg.title,
      amount: _arg.amount,
      regularDate: _arg.regularDate,
      accountBookCategoryId: _arg.categoryId,
      isAutoExpenditure: _arg.isAutoExpenditure,
    },
  });

  return newRegularExpenditure.id;
};
