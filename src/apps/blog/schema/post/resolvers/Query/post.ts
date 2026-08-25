import type { QueryResolvers } from './../../../../generates/types.generated';
import { getBoard, toPost } from '../../../../services/PostService';
import { prismaBlog } from '../../../../utils/prismaClient';

export const post: NonNullable<QueryResolvers['post']> = async (_parent, _arg) => {
  const board = await getBoard(_arg.categoryNo, _arg.postNo);

  // TODO: 인증 서비스 연동 후 admin 사용자는 조회수 증가에서 제외 (원본 increasePostViews 동작)
  await prismaBlog.board.update({
    where: { id: board.id },
    data: { views: board.views + 1 },
  });

  return toPost(board);
};
