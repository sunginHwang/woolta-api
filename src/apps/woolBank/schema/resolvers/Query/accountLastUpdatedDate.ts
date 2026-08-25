import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { prismaWoolBank } from '../../../utils/prismaClient';

// 원본 GET /accounts/last-update-date — 없으면 현재일시(캐시 무효화 목적)
export const accountLastUpdatedDate: NonNullable<QueryResolvers['accountLastUpdatedDate']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireAuth(_ctx);

  const account = await prismaWoolBank.account.findFirst({
    where: { userId },
    orderBy: { updatedAt: 'desc' },
  });

  return account?.updatedAt ?? new Date();
};
