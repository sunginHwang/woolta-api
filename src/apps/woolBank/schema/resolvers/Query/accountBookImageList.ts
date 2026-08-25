import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { prismaWoolBank } from '../../../utils/prismaClient';

export const accountBookImageList: NonNullable<QueryResolvers['accountBookImageList']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  requireAuth(_ctx);

  const accountBookImageList = await prismaWoolBank.accountBookCategoryImage.findMany({ orderBy: { id: 'desc' } });

  return accountBookImageList.map((accountBookImage) => ({
    ...accountBookImage,
    id: String(accountBookImage.id),
  }));
};
