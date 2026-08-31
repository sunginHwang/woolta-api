import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { createArticle as createArticleService } from '../../../../services/ArticleService';

// SEO 파싱은 클라이언트 플로우 유지 (/api/article-meta 프록시) — 파싱된 seo 를 인자로 받는다
export const createArticle: NonNullable<MutationResolvers['createArticle']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { categoryId, title, url, seo } = _arg.input;
  return createArticleService(userId, categoryId, title, url, seo);
};
