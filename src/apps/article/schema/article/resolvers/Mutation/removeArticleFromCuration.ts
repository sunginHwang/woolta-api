import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { removeArticleFromCuration as removeArticleFromCurationService } from '../../../../services/ArticleService';

export const removeArticleFromCuration: NonNullable<MutationResolvers['removeArticleFromCuration']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { weekKey, articleId } = _arg.input;
  return removeArticleFromCurationService(userId, weekKey, articleId);
};
