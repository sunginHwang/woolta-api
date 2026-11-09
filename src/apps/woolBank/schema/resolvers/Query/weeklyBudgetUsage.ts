import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getWeeklyBudgetUsage } from '../../../services/WeeklyBudgetService';

// 해당 주차(월~일) 예산 사용 현황. dateTime 생략 시 이번 주.
export const weeklyBudgetUsage: NonNullable<QueryResolvers['weeklyBudgetUsage']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);

  return getWeeklyBudgetUsage(userId, _arg.dateTime);
};
