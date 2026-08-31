import type { QueryResolvers } from './../../../../generates/types.generated';
import { getPost } from '../../../../services/PostService';

export const post: NonNullable<QueryResolvers['post']> = async (_parent, _arg) => {
  return getPost(_arg.postNo, _arg.categoryNo);
};
