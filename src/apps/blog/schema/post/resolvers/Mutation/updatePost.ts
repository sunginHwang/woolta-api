import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../../generates/types.generated';
import { getCurrentUser } from '../../../../middlewares/currentUser';
import { getBoardCategory } from '../../../../services/PostService';
import { makePostSubDescription } from '../../../../utils/postContent';
import { prismaBlog } from '../../../../utils/prismaClient';

export const updatePost: NonNullable<MutationResolvers['updatePost']> = async (_parent, _arg, _ctx) => {
  const boardCategory = await getBoardCategory(_arg.categoryNo);

  const originBoard = await prismaBlog.board.findUnique({
    where: { id: _arg.id },
    include: { user: true },
  });

  if (!originBoard) {
    throw new GraphQLError('존재하지 않는 게시글 입니다.', { extensions: { code: 'NOT_FOUND' } });
  }

  const user = await getCurrentUser(_ctx.req);

  if (originBoard.user.userId !== user.userId) {
    throw new GraphQLError('글 작성자만 수정 가능합니다.', { extensions: { code: 'UNAUTHORIZED' } });
  }

  // views는 원본과 동일하게 보존한다
  const savedPost = await prismaBlog.board.update({
    where: { id: originBoard.id },
    data: {
      title: _arg.title,
      contents: _arg.contents,
      subDescription: makePostSubDescription(_arg.contents),
      categoryNo: boardCategory.no,
    },
  });

  return { postNo: savedPost.id, categoryNo: boardCategory.no };
};
