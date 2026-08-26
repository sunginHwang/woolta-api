import type { QueryResolvers } from './../../../../generates/types.generated';
import { toPostSummary } from '../../../../services/PostService';
import { prismaBlog } from '../../../../utils/prismaClient';

export const postList: NonNullable<QueryResolvers['postList']> = async (_parent, _arg) => {
  const where = _arg.categoryId != null ? { categoryNo: _arg.categoryId } : {};

  const boards = await prismaBlog.board.findMany({
    where,
    include: { user: true, category: true },
  });

  const itemList = boards.map(toPostSummary);

  return { totalCount: itemList.length, itemList };
};
