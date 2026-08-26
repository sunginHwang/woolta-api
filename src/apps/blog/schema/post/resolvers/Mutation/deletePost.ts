import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../../generates/types.generated';
import { getCurrentUser } from '../../../../middlewares/currentUser';
import { getBoard } from '../../../../services/PostService';
import { prismaBlog } from '../../../../utils/prismaClient';

export const deletePost: NonNullable<MutationResolvers['deletePost']> = async (_parent, _arg, _ctx) => {
  const { categoryNo, postNo } = _arg.input;
  const board = await getBoard(categoryNo, postNo);
  const user = await getCurrentUser(_ctx.req);

  if (board.user.userId !== user.userId) {
    throw new GraphQLError('글 작성자만 삭제 가능합니다.', { extensions: { code: 'UNAUTHORIZED' } });
  }

  await prismaBlog.board.delete({ where: { id: board.id } });

  return true;
};
