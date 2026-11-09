import { endOfWeek, startOfWeek } from 'date-fns';
import { ValidationError } from '../../../shared/errors';
import { prismaWoolBank } from '../utils/prismaClient';
// 사용액(지출) 집계는 account_book 을 소유한 AccountBookService 에 위임한다.
import { getBudgetSpentAmount } from './AccountBookService';

// 한 주의 개념: 특정 날짜가 속한 "주차"의 7일(월요일 00:00 ~ 일요일 23:59:59.999).
// 1월 1일부터 7일이 아니라, 매주 월요일에 새로 시작하는 해당 주차 기준이다(설정 화면 문구와 동일).
const WEEK_STARTS_ON = 1 as const; // 1 = 월요일

export const getWeekRange = (dateTime: Date | string = new Date()) => {
  const base = new Date(dateTime);
  return {
    startDate: startOfWeek(base, { weekStartsOn: WEEK_STARTS_ON }),
    endDate: endOfWeek(base, { weekStartsOn: WEEK_STARTS_ON }),
  };
};

// 주간 예산 조회 — 미설정이면 0.
export const getWeeklyBudgetAmount = async (userId: number): Promise<number> => {
  const weeklyBudget = await prismaWoolBank.weeklyBudget.findUnique({ where: { userId } });
  return weeklyBudget?.amount ?? 0;
};

// 주간 예산 생성·수정(upsert). 유저당 1행.
export const saveWeeklyBudget = async (userId: number, amount: number) => {
  if (!Number.isInteger(amount) || amount < 0) {
    throw new ValidationError('예산은 0 이상의 정수여야 합니다.');
  }

  return prismaWoolBank.weeklyBudget.upsert({
    where: { userId },
    create: { userId, amount },
    update: { amount },
  });
};

// 해당 주차 사용 현황. 예산(이 서비스 소유)과 사용액(가계부 소유)을 조합해 비율·잔액을 낸다.
export const getWeeklyBudgetUsage = async (userId: number, dateTime?: Date | string | null) => {
  const { startDate, endDate } = getWeekRange(dateTime ?? new Date());

  const [budget, spent] = await Promise.all([
    getWeeklyBudgetAmount(userId),
    getBudgetSpentAmount(userId, startDate, endDate),
  ]);

  const remaining = budget - spent;
  const percentage = budget > 0 ? Math.round((spent / budget) * 100) : 0;

  return { budget, spent, remaining, percentage, startDate, endDate };
};
