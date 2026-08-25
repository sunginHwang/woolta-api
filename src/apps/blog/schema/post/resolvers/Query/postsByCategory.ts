import type { QueryResolvers } from './../../../../generates/types.generated';
import { getBoardCategory, toPostSummary } from '../../../../services/PostService';
import { prismaBlog } from '../../../../utils/prismaClient';

export const postsByCategory: NonNullable<QueryResolvers['postsByCategory']> = async (_parent, _arg) => {
  await getBoardCategory(_arg.categoryNo);

  const boards = await prismaBlog.board.findMany({
    where: { categoryNo: _arg.categoryNo },
    include: { user: true, category: true },
  });

  return boards.map(toPostSummary);
};
