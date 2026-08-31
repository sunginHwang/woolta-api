import type { MutationResolvers } from './../../../../generates/types.generated';
import { getCurrentUser } from '../../../../middlewares/currentUser';
import { updateBoardPost } from '../../../../services/PostService';

export const updatePost: NonNullable<MutationResolvers['updatePost']> = async (_parent, _arg, _ctx) => {
  const { id, categoryNo, title, contents } = _arg.input;
  const user = await getCurrentUser(_ctx.req);

  return updateBoardPost({ id, categoryNo, title, contents, userId: user.userId });
};
