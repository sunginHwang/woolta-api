import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { prismaMemo } from '../../../../utils/prismaClient';

// 없으면 에러 대신 null 반환 (공통 규칙 1)
export const memo: NonNullable<QueryResolvers['memo']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);

  return prismaMemo.memo.findFirst({ where: { id: _arg.id, userId } }) ?? null;
};
