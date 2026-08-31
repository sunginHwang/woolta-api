import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { getArticleList } from '../../../../services/ArticleService';

export const articleList: NonNullable<QueryResolvers['articleList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  return getArticleList(userId, _arg.categoryId);
};
