import type { MutationResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getAccountByIdAndUserIdOrThrow } from '../../../services/AccountService';
import { prismaWoolBank } from '../../../utils/prismaClient';

// 원본 PUT /accounts/:id/expiration
export const completeAccountExpiration: NonNullable<MutationResolvers['completeAccountExpiration']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireAuth(_ctx);
  const account = await getAccountByIdAndUserIdOrThrow(Number(_arg.input.id), userId);

  await prismaWoolBank.account.update({
    where: { id: account.id },
    data: { isExpiration: true },
  });

  return true;
};
