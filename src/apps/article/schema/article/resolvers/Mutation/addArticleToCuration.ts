import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { addArticleToCuration as addArticleToCurationService } from '../../../../services/ArticleService';

export const addArticleToCuration: NonNullable<MutationResolvers['addArticleToCuration']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { weekKey, articleId } = _arg.input;
  return addArticleToCurationService(userId, weekKey, articleId);
};
