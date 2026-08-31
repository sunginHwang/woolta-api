import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { updateArticleCategory as updateArticleCategoryService } from '../../../../services/ArticleService';

export const updateArticleCategory: NonNullable<MutationResolvers['updateArticleCategory']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { id, name } = _arg.input;
  return updateArticleCategoryService(userId, id, name);
};
