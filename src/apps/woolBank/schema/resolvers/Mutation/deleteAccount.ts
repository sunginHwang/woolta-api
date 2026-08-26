import type { MutationResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getAccountByIdAndUserIdOrThrow } from '../../../services/AccountService';
import { prismaWoolBank } from '../../../utils/prismaClient';

// 원본 DELETE /accounts/:id — 입금 내역 동반 삭제 트랜잭션, 실패 시 false (원본 동작)
export const deleteAccount: NonNullable<MutationResolvers['deleteAccount']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);
  const account = await getAccountByIdAndUserIdOrThrow(Number(_arg.input.id), userId);

  try {
    await prismaWoolBank.$transaction([
      prismaWoolBank.deposit.deleteMany({ where: { accountId: account.id } }),
      prismaWoolBank.account.delete({ where: { id: account.id } }),
    ]);
    return true;
  } catch {
    return false;
  }
};
