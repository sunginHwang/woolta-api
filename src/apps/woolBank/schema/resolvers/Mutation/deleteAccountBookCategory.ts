import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { prismaWoolBank } from '../../../utils/prismaClient';

// 원본 removeAccountBookCategory: delYn 소프트 삭제
export const deleteAccountBookCategory: NonNullable<MutationResolvers['deleteAccountBookCategory']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireRealUser(_ctx);

  try {
    const accountBookCategory = await prismaWoolBank.accountBookCategory.findFirst({
      where: { id: Number(_arg.input.id), userId },
    });

    if (!accountBookCategory) {
      return false;
    }

    await prismaWoolBank.accountBookCategory.update({
      where: { id: accountBookCategory.id },
      data: { delYn: true },
    });
    return true;
  } catch {
    return false;
  }
};
