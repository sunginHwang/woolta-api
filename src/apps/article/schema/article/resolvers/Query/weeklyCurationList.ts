import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { getWeeklyCurationList } from '../../../../services/ArticleService';

// 전체 주차 반환 (주차 수 적음 — 스펙) — 최신 주차 먼저, 아티클 임베드
export const weeklyCurationList: NonNullable<QueryResolvers['weeklyCurationList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  return getWeeklyCurationList(userId);
};
