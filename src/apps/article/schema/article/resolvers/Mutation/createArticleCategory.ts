import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { createArticleCategory as createArticleCategoryService } from '../../../../services/ArticleService';

export const createArticleCategory: NonNullable<MutationResolvers['createArticleCategory']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { name } = _arg.input;
  return createArticleCategoryService(userId, name);
};
