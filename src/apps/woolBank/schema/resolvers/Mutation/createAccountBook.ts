import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { prismaWoolBank } from '../../../utils/prismaClient';

// 원본 saveAccountBook: scheduledPayment(반복/할부) 지정 시 정기지출 동시 생성 트랜잭션
export const createAccountBook: NonNullable<MutationResolvers['createAccountBook']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);

  const accountBookCategory = await prismaWoolBank.accountBookCategory.findFirst({
    where: { userId, id: _arg.categoryId },
  });

  if (!accountBookCategory) {
    throw new GraphQLError('해당 카테고리가 존재하지 않습니다.', {
      extensions: {
        code: 'FORBIDDEN',
        myExtension: 'not found account book category',
      },
    });
  }

  return prismaWoolBank.$transaction(async (tx) => {
    const isRegularExpenditure = !!_arg.scheduledPaymentType && !!_arg.scheduledPaymentDay;
    const installmentFields: { installmentMonth?: number; paidInstallmentMonth?: number; regularDate?: number } = {};

    if (isRegularExpenditure) {
      const scheduledPaymentDay = _arg.scheduledPaymentDay as number;
      installmentFields.regularDate = scheduledPaymentDay;

      const regularExpenditureData = {
        title: _arg.title,
        amount: _arg.amount,
        regularDate: scheduledPaymentDay,
        accountBookCategoryId: accountBookCategory.id,
        isAutoExpenditure: true,
        userId,
      };

      // 할부는 1회차 납부로 시작 (원본 로직)
      if (_arg.scheduledPaymentType === 'installment') {
        const paidInstallmentMonth = 1;
        const installmentMonth = _arg.installmentMonth ?? paidInstallmentMonth;

        installmentFields.installmentMonth = installmentMonth;
        installmentFields.paidInstallmentMonth = paidInstallmentMonth;

        await tx.regularExpenditure.create({
          data: { ...regularExpenditureData, installmentMonth, paidInstallmentMonth },
        });
      } else {
        await tx.regularExpenditure.create({ data: regularExpenditureData });
      }
    }

    return tx.accountBook.create({
      include: {
        accountBookCategory: {
          include: {
            accountBookCategoryImage: true,
          },
        },
      },
      data: {
        title: _arg.title,
        memo: _arg.memo ?? '',
        amount: _arg.amount,
        type: _arg.type,
        isRegularExpenditure: false,
        isDisabledBudget: _arg.isDisabledBudget ?? false,
        registerDateTime: new Date(_arg.registerDateTime),
        accountBookCategoryId: _arg.categoryId,
        userId,
        ...installmentFields,
      },
    });
  });
};
