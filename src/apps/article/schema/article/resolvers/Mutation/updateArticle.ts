import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { updateArticle as updateArticleService } from '../../../../services/ArticleService';

// 범용 PATCH — 현재 사용처는 seo 재수집 백필(setArticleSeo) 뿐이지만 title/url/categoryId 도 지원
export const updateArticle: NonNullable<MutationResolvers['updateArticle']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { id, title, url, categoryId, seo } = _arg.input;
  return updateArticleService(userId, id, title, url, categoryId, seo);
};
