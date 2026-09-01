import type { MutationResolvers } from './../../../../generates/types.generated';
import { endAuthSession } from '../../../../../../shared/auth';

// 쿠키 삭제 + 서버 측 refresh 무효화 — 유출된 토큰까지 실제로 죽인다.
export const logout: NonNullable<MutationResolvers['logout']> = async (_parent, _arg, _ctx) => {
  await endAuthSession(_ctx.res, _ctx.auth?.userId);

  return true;
};
