import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getWeeklyBudgetAmount } from '../../../services/WeeklyBudgetService';

// 주간 예산 조회 — 미설정이면 0 으로 응답.
export const weeklyBudget: NonNullable<QueryResolvers['weeklyBudget']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);

  const amount = await getWeeklyBudgetAmount(userId);

  return { amount };
};
