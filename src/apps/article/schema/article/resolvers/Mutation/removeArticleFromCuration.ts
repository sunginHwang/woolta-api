import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { assertWeekKey, buildWeeklyCuration } from '../../../../services/ArticleService';
import { prismaArticle } from '../../../../utils/prismaClient';

export const removeArticleFromCuration: NonNullable<MutationResolvers['removeArticleFromCuration']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  assertWeekKey(_arg.weekKey);

  await prismaArticle.articleCuration.deleteMany({
    where: { userId, weekKey: _arg.weekKey, articleId: _arg.articleId },
  });

  return buildWeeklyCuration(userId, _arg.weekKey);
};
