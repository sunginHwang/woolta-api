import type { QueryResolvers } from './../../../../generates/types.generated';
import { getPostList } from '../../../../services/PostService';

export const postList: NonNullable<QueryResolvers['postList']> = async (_parent, _arg) => {
  return getPostList(_arg.categoryId);
};
