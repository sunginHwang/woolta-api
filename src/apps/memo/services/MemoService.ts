import type { ImportMemoInput, MemoImportResult } from '../generates/types.generated';
import { ValidationError, NotFoundError } from '../../../shared/errors';
import { prismaMemo } from '../utils/prismaClient';

// 클라이언트 EMPTY_MEMO_CONTENT 와 동일 (libs/memo useMemoStore)
export const EMPTY_MEMO_CONTENT = { type: 'doc', content: [{ type: 'paragraph' }] };

// 이미지가 URL 참조라 본문 자체는 작음 — 직렬화 1MB 상한
const MAX_CONTENT_BYTES = 1024 * 1024;

export const assertContentSize = (content: unknown) => {
  if (Buffer.byteLength(JSON.stringify(content), 'utf8') > MAX_CONTENT_BYTES) {
    throw new ValidationError('메모 본문이 너무 큽니다. (최대 1MB)');
  }
};

export const getOwnMemo = async (id: string, userId: number) => {
  const memo = await prismaMemo.memo.findFirst({ where: { id, userId } });
  if (!memo) {
    throw new NotFoundError('존재하지 않는 메모입니다.');
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

// --- 리졸버에서 이관된 서비스 함수 ---

// "새 메모" 클릭 즉시 빈 메모 생성 후 편집 시작하는 UX — 빈 생성 허용 필수
export const createMemo = async (userId: number) => {
  return prismaMemo.memo.create({
    data: { userId, title: '', content: EMPTY_MEMO_CONTENT },
  });
};

// 휴지통 없음 — 즉시 영구 삭제 (현재 클라 동작 동일)
export const deleteMemo = async (id: string, userId: number): Promise<boolean> => {
  await getOwnMemo(id, userId);
  await prismaMemo.memo.delete({ where: { id } });
  return true;
};

// 에디터 자동 저장 진입점 — 클라이언트 debounce 전제, last-write-wins
export const updateMemo = async (
  id: string,
  userId: number,
  title: string | null | undefined,
  content: unknown | null | undefined,
) => {
  await getOwnMemo(id, userId);
  if (content != null) {
    assertContentSize(content);
  }
  return prismaMemo.memo.update({
    where: { id },
    data: { title: title ?? undefined, content: content ?? undefined },
  });
};

// 없으면 에러 대신 null 반환 (공통 규칙 1)
export const getMemo = async (id: string, userId: number) => {
  return prismaMemo.memo.findFirst({ where: { id, userId } }) ?? null;
};

// 목록은 content 제외 (본문이 커질 수 있음 — 스펙 권장)
export const getMemoList = async (userId: number) => {
  const itemList = await prismaMemo.memo.findMany({
    where: { userId },
    select: { id: true, title: true, createdAt: true, updatedAt: true },
    orderBy: { updatedAt: 'desc' },
  });
  return { totalCount: itemList.length, itemList };
};
