import type { MutationResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { prismaWoolBank } from '../../../utils/prismaClient';

export const createAccountBookCategory: NonNullable<MutationResolvers['createAccountBookCategory']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireAuth(_ctx);

  return prismaWoolBank.accountBookCategory.create({
    include: {
      accountBookCategoryImage: true,
    },
    data: {
      delYn: false,
      userId,
      name: _arg.name,
      type: _arg.type,
      accountBookCategoryImageId: _arg.accountBookCategoryImageId,
      useStatistic: _arg.useStatistic,
    },
  });
};
