import { getDate, isLastDayOfMonth, setDate } from 'date-fns';
import lodash from 'lodash';
const { range } = lodash;
import { prismaWoolBank } from '../utils/prismaClient';

// 원본 regularExpenditureService.scheduleRegularExpenditure — 매일 자정 정기지출을 가계부에 벌크 등록.
// 말일이면서 31일이 아닌 경우 해당일~31일 정기지출을 몰아서 처리(짧은 달 보정).
export const scheduleRegularExpenditure = async () => {
  const now = new Date();
  const nowDate = getDate(now);
  const isNot31 = nowDate !== 31;
  const findDays = isLastDayOfMonth(now) && isNot31 ? range(nowDate, 32) : [nowDate];

  try {
    await prismaWoolBank.$transaction(async (tx) => {
      const regularExpenditureList = await tx.regularExpenditure.findMany({
        where: { regularDate: { in: findDays } },
        orderBy: { id: 'desc' },
      });

      if (regularExpenditureList.length === 0) {
        return;
      }

      const regularExpendituresToDelete: number[] = [];

      for (const regularExpenditure of regularExpenditureList) {
        const { title, amount, userId, accountBookCategoryId, regularDate, installmentMonth, paidInstallmentMonth } =
          regularExpenditure;

        const newAccountBook: Parameters<typeof tx.accountBook.create>[0]['data'] = {
          title,
          amount,
          memo: '',
          regularDate,
          type: 'expenditure',
          isRegularExpenditure: true,
          registerDateTime: setDate(now, regularDate),
          userId,
          accountBookCategoryId,
        };

        // 할부: 납부 횟수 증가, 완납 시 정기지출 삭제 (원본 로직)
        if (installmentMonth && installmentMonth > 0) {
          const nextPaidInstallmentMonth = (paidInstallmentMonth ?? 0) + 1;

          newAccountBook.installmentMonth = installmentMonth;
          newAccountBook.paidInstallmentMonth = nextPaidInstallmentMonth;

          if (nextPaidInstallmentMonth >= installmentMonth) {
            regularExpendituresToDelete.push(regularExpenditure.id);
          } else {
            await tx.regularExpenditure.update({
              where: { id: regularExpenditure.id },
              data: { paidInstallmentMonth: nextPaidInstallmentMonth },
            });
          }
        }

        await tx.accountBook.create({ data: newAccountBook });
      }

      if (regularExpendituresToDelete.length > 0) {
        await tx.regularExpenditure.deleteMany({ where: { id: { in: regularExpendituresToDelete } } });
      }
    });
  } catch (e) {
    console.log(e);
  }
};
