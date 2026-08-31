import type { QueryResolvers } from './../../../../generates/types.generated';
import { getCategoryList } from '../../../../services/PostService';

export const categoryList: NonNullable<QueryResolvers['categoryList']> = async () => {
  return getCategoryList();
};
