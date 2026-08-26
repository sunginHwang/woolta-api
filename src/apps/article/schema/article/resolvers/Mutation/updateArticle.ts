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
  const { id, title, url, categoryId, seo } = _arg.input;
  await getOwnArticle(id, userId);

  if (categoryId != null) {
    await assertOwnArticleCategory(categoryId, userId);
  }

  let normalizedUrl: string | undefined;
  if (url != null) {
    normalizedUrl = normalizeUrlOrThrow(url);
    await assertNoDuplicateUrl(userId, normalizedUrl, id);
  }

  const updated = await prismaArticle.article.update({
    where: { id },
    data: {
      title: title ?? undefined,
      url: url ?? undefined,
      normalizedUrl,
      categoryId: categoryId ?? undefined,
      seo: seo ?? undefined,
    },
  });
  return toArticle(updated);
};
