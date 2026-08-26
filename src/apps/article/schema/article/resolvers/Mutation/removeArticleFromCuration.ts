import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { assertWeekKey, buildWeeklyCuration } from '../../../../services/ArticleService';
import { prismaArticle } from '../../../../utils/prismaClient';

export const removeArticleFromCuration: NonNullable<MutationResolvers['removeArticleFromCuration']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { weekKey, articleId } = _arg.input;
  assertWeekKey(weekKey);

  await prismaArticle.articleCuration.deleteMany({
    where: { userId, weekKey, articleId },
  });

  return buildWeeklyCuration(userId, weekKey);
};
