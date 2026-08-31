import type { MutationResolvers } from './../../../../generates/types.generated';
import { getCurrentUser } from '../../../../middlewares/currentUser';
import { deleteBoardPost } from '../../../../services/PostService';

export const deletePost: NonNullable<MutationResolvers['deletePost']> = async (_parent, _arg, _ctx) => {
  const { categoryNo, postNo } = _arg.input;
  const user = await getCurrentUser(_ctx.req);

  await deleteBoardPost(categoryNo, postNo, user.userId);

  return true;
};
