import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { assertContentSize, getOwnMemo } from '../../../../services/MemoService';
import { prismaMemo } from '../../../../utils/prismaClient';

// 에디터 자동 저장 진입점 — 클라이언트 debounce 전제, last-write-wins
export const updateMemo: NonNullable<MutationResolvers['updateMemo']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { id, title, content } = _arg.input;
  await getOwnMemo(id, userId);

  if (content != null) {
    assertContentSize(content);
  }

  return prismaMemo.memo.update({
    where: { id },
    data: {
      title: title ?? undefined,
      content: content ?? undefined,
    },
  });
};
