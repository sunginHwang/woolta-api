import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import {
  assertNoDuplicateUrl,
  assertOwnArticleCategory,
  getOwnArticle,
  normalizeUrlOrThrow,
  toArticle,
} from '../../../../services/ArticleService';
import { prismaArticle } from '../../../../utils/prismaClient';

// 범용 PATCH — 현재 사용처는 seo 재수집 백필(setArticleSeo) 뿐이지만 title/url/categoryId 도 지원
export const updateArticle: NonNullable<MutationResolvers['updateArticle']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  await getOwnArticle(_arg.id, userId);

  const { input } = _arg;
  if (input.categoryId != null) {
    await assertOwnArticleCategory(input.categoryId, userId);
  }

  let normalizedUrl: string | undefined;
  if (input.url != null) {
    normalizedUrl = normalizeUrlOrThrow(input.url);
    await assertNoDuplicateUrl(userId, normalizedUrl, _arg.id);
  }

  const updated = await prismaArticle.article.update({
    where: { id: _arg.id },
    data: {
      title: input.title ?? undefined,
      url: input.url ?? undefined,
      normalizedUrl,
      categoryId: input.categoryId ?? undefined,
      seo: input.seo ?? undefined,
    },
  });
  return toArticle(updated);
};
