import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { deleteArticleCategory as deleteArticleCategoryService } from '../../../../services/ArticleService';

// 캐스케이드: 소속 아티클 전체 삭제 + 그 아티클들의 큐레이션 행 제거 (이동 아님, 삭제 — 현재 클라 동작)
export const deleteArticleCategory: NonNullable<MutationResolvers['deleteArticleCategory']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { id } = _arg.input;
  return deleteArticleCategoryService(id, userId);
};
