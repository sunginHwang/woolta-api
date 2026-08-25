import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import {
  WEEKLY_CURATION_LIMIT,
  assertWeekKey,
  buildWeeklyCuration,
  getOwnArticle,
} from '../../../../services/ArticleService';
import { prismaArticle } from '../../../../utils/prismaClient';

export const addArticleToCuration: NonNullable<MutationResolvers['addArticleToCuration']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  assertWeekKey(_arg.weekKey);
  await getOwnArticle(_arg.articleId, userId);

  const existing = await prismaArticle.articleCuration.findMany({
    where: { userId, weekKey: _arg.weekKey },
  });

  // 이미 등록된 articleId 는 멱등 — 그대로 반환 (클라 토글 UX 대응)
  if (!existing.some((row) => row.articleId === _arg.articleId)) {
    // 주차당 최대 5개 — 스펙상 클라는 조용히 무시하지만 서버는 명시 에러 (409 대응)
    if (existing.length >= WEEKLY_CURATION_LIMIT) {
      throw new GraphQLError('주간 큐레이션은 최대 5개까지 등록할 수 있습니다.', {
        extensions: { code: 'CONFLICT' },
      });
    }
    await prismaArticle.articleCuration.create({
      data: { userId, weekKey: _arg.weekKey, articleId: _arg.articleId },
    });
  }

  return buildWeeklyCuration(userId, _arg.weekKey);
};
