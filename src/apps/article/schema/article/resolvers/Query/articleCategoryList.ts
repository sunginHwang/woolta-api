import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { getArticleCategoryList } from '../../../../services/ArticleService';

export const articleCategoryList: NonNullable<QueryResolvers['articleCategoryList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  return getArticleCategoryList(userId);
};
