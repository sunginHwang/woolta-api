import type { MutationResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { gqlToDbAccountBookCategoryType, toGqlAccountBookCategory } from '../../../utils/enums';
import { prismaWoolBank } from '../../../utils/prismaClient';

export const createAccountBookCategory: NonNullable<MutationResolvers['createAccountBookCategory']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireAuth(_ctx);
  const { name, type, accountBookCategoryImageId, useStatistic } = _arg.input;

  const accountBookCategory = await prismaWoolBank.accountBookCategory.create({
    include: {
      accountBookCategoryImage: true,
    },
    data: {
      delYn: false,
      userId,
      name,
      type: gqlToDbAccountBookCategoryType(type),
      accountBookCategoryImageId,
      useStatistic,
    },
  });

  return toGqlAccountBookCategory(accountBookCategory);
};
