import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { saveWeeklyBudget as saveWeeklyBudgetService } from '../../../services/WeeklyBudgetService';

// 주간 예산 생성·수정(upsert). 공유코드 세션은 쓰기 불가.
export const saveWeeklyBudget: NonNullable<MutationResolvers['saveWeeklyBudget']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { amount } = _arg.input;

  const weeklyBudget = await saveWeeklyBudgetService(userId, amount);

  return { amount: weeklyBudget.amount };
};
