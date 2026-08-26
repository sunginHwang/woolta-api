import type { QueryResolvers } from './../../../../generates/types.generated';
import { toPost } from '../../../../services/PostService';
import { prismaBlog } from '../../../../utils/prismaClient';

export const post: NonNullable<QueryResolvers['post']> = async (_parent, _arg) => {
  const board = await prismaBlog.board.findUnique({
    where: { id: _arg.postNo },
    include: { user: true, category: true },
  });

  if (!board || board.categoryNo !== _arg.categoryNo) {
    return null;
  }

  // TODO: 인증 서비스 연동 후 admin 사용자는 조회수 증가에서 제외 (원본 increasePostViews 동작)
  await prismaBlog.board.update({
    where: { id: board.id },
    data: { views: board.views + 1 },
  });

  return toPost(board);
};
