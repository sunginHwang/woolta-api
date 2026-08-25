import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { importArticles as importArticlesService } from '../../../../services/ArticleService';

// 로컬스토리지(woolta:article-curations) → 서버 1회 이관 — id 재발급 + clientId 매핑 반환
export const importArticles: NonNullable<MutationResolvers['importArticles']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);

  return importArticlesService(userId, _arg.categories, _arg.articles, _arg.curations);
};
