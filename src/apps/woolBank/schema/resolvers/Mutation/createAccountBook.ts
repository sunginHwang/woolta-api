import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { gqlToDbAccountBookCategoryType, gqlToDbScheduledPaymentType, toGqlAccountBook } from '../../../utils/enums';
import { prismaWoolBank } from '../../../utils/prismaClient';

// 원본 saveAccountBook: scheduledPayment(반복/할부) 지정 시 정기지출 동시 생성 트랜잭션
export const createAccountBook: NonNullable<MutationResolvers['createAccountBook']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const {
    title,
    amount,
    memo,
    type,
    registerDateTime,
    categoryId,
    isDisabledBudget,
    scheduledPaymentType,
    scheduledPaymentDay,
    installmentMonth,
  } = _arg.input;

  const accountBookCategory = await prismaWoolBank.accountBookCategory.findFirst({
    where: { userId, id: categoryId },
  });

  if (!accountBookCategory) {
    throw new GraphQLError('해당 카테고리가 존재하지 않습니다.', {
      extensions: {
        code: 'FORBIDDEN',
        myExtension: 'not found account book category',
      },
    });
  }

  const accountBook = await prismaWoolBank.$transaction(async (tx) => {
    const isRegularExpenditure = !!scheduledPaymentType && !!scheduledPaymentDay;
    const installmentFields: { installmentMonth?: number; paidInstallmentMonth?: number; regularDate?: number } = {};

    if (isRegularExpenditure) {
      installmentFields.regularDate = scheduledPaymentDay;

      const regularExpenditureData = {
        title,
        amount,
        regularDate: scheduledPaymentDay,
        accountBookCategoryId: accountBookCategory.id,
        isAutoExpenditure: true,
        userId,
      };

      // 할부는 1회차 납부로 시작 (원본 로직)
      if (gqlToDbScheduledPaymentType(scheduledPaymentType) === 'installment') {
        const paidInstallmentMonth = 1;
        const savedInstallmentMonth = installmentMonth ?? paidInstallmentMonth;

        installmentFields.installmentMonth = savedInstallmentMonth;
        installmentFields.paidInstallmentMonth = paidInstallmentMonth;

        await tx.regularExpenditure.create({
          data: { ...regularExpenditureData, installmentMonth: savedInstallmentMonth, paidInstallmentMonth },
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
        title,
        memo: memo ?? '',
        amount,
        type: gqlToDbAccountBookCategoryType(type),
        isRegularExpenditure: false,
        isDisabledBudget: isDisabledBudget ?? false,
        registerDateTime: new Date(registerDateTime),
        accountBookCategoryId: categoryId,
        userId,
        ...installmentFields,
      },
    });
  });

  return toGqlAccountBook(accountBook);
};
