import type { QueryResolvers } from './../../../../generates/types.generated';
import { getRecentPostListService } from '../../../../services/PostService';

// 원본 findTop20ByOrderByCreatedAtDesc
export const getRecentPostList: NonNullable<QueryResolvers['getRecentPostList']> = async (_parent, _arg) => {
  return getRecentPostListService(_arg.limitCount);
};
