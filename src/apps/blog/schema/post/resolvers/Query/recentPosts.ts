import type { QueryResolvers } from './../../../../generates/types.generated';
import { toPostSummary } from '../../../../services/PostService';
import { prismaBlog } from '../../../../utils/prismaClient';

// 원본 findTop20ByOrderByCreatedAtDesc
export const recentPosts: NonNullable<QueryResolvers['recentPosts']> = async () => {
  const boards = await prismaBlog.board.findMany({
    orderBy: { createdAt: 'desc' },
    take: 20,
    include: { user: true, category: true },
  });

  return boards.map(toPostSummary);
};
