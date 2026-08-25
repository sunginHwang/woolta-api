import type { QueryResolvers } from './../../../../generates/types.generated';
import { toPost } from '../../../../services/PostService';
import { removeMarkupLanguage } from '../../../../utils/postContent';
import { prismaBlog } from '../../../../utils/prismaClient';

// 원본 getAllPosts: 전체 포스트를 마크업 제거된 본문으로 반환
export const allPosts: NonNullable<QueryResolvers['allPosts']> = async () => {
  const boards = await prismaBlog.board.findMany({
    include: { user: true, category: true },
  });

  return boards.map((board) => toPost(board, board.contents && removeMarkupLanguage(board.contents)));
};
