import { GraphQLError } from 'graphql/error';
import type { ImportMemoInput, MemoImportResult } from '../generates/types.generated';
import { prismaMemo } from '../utils/prismaClient';

// 클라이언트 EMPTY_MEMO_CONTENT 와 동일 (libs/memo useMemoStore)
export const EMPTY_MEMO_CONTENT = { type: 'doc', content: [{ type: 'paragraph' }] };

// 이미지가 URL 참조라 본문 자체는 작음 — 직렬화 1MB 상한
const MAX_CONTENT_BYTES = 1024 * 1024;

export const assertContentSize = (content: unknown) => {
  if (Buffer.byteLength(JSON.stringify(content), 'utf8') > MAX_CONTENT_BYTES) {
    throw new GraphQLError('메모 본문이 너무 큽니다. (최대 1MB)', { extensions: { code: 'BAD_REQUEST' } });
  }
};

export const getOwnMemo = async (id: string, userId: number) => {
  const memo = await prismaMemo.memo.findFirst({ where: { id, userId } });
  if (!memo) {
    throw new GraphQLError('존재하지 않는 메모입니다.', { extensions: { code: 'NOT_FOUND' } });
  }
  return memo;
};

// 로컬스토리지(woolta:memos) → 서버 1회 이관 — id 재발급 + clientId 매핑 반환
export const importMemos = async (userId: number, memos: ImportMemoInput[]): Promise<MemoImportResult> => {
  memos.forEach((memo) => assertContentSize(memo.content));

  return prismaMemo.$transaction(async (tx) => {
    const memoIdMap: { from: string; to: string }[] = [];
    for (const memo of memos) {
      const created = await tx.memo.create({
        data: {
          userId,
          title: memo.title,
          content: memo.content,
          ...(memo.createdAt ? { createdAt: memo.createdAt } : {}),
          ...(memo.updatedAt ? { updatedAt: memo.updatedAt } : {}),
        },
      });
      memoIdMap.push({ from: memo.clientId, to: created.id });
    }
    return { memoIdMap };
  });
};
