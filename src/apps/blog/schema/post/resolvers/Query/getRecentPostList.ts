import type { QueryResolvers } from './../../../../generates/types.generated';
import { toPostSummary } from '../../../../services/PostService';
import { prismaBlog } from '../../../../utils/prismaClient';

// 원본 findTop20ByOrderByCreatedAtDesc
export const getRecentPostList: NonNullable<QueryResolvers['getRecentPostList']> = async (_parent, _arg) => {
  const [boards, totalCount] = await Promise.all([
    prismaBlog.board.findMany({
      orderBy: { createdAt: 'desc' },
      take: _arg.limitCount ?? 20,
      include: { user: true, category: true },
    }),
    prismaBlog.board.count(),
  ]);

  return { totalCount, itemList: boards.map(toPostSummary) };
};
