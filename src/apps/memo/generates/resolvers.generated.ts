/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { memo as Query_memo } from './../schema/memo/resolvers/Query/memo';
import    { memoList as Query_memoList } from './../schema/memo/resolvers/Query/memoList';
import    { createMemo as Mutation_createMemo } from './../schema/memo/resolvers/Mutation/createMemo';
import    { deleteMemo as Mutation_deleteMemo } from './../schema/memo/resolvers/Mutation/deleteMemo';
import    { importMemoList as Mutation_importMemoList } from './../schema/memo/resolvers/Mutation/importMemoList';
import    { updateMemo as Mutation_updateMemo } from './../schema/memo/resolvers/Mutation/updateMemo';
import    { Memo } from './../schema/memo/resolvers/Memo';
import    { MemoIdMapping } from './../schema/memo/resolvers/MemoIdMapping';
import    { MemoImportResult } from './../schema/memo/resolvers/MemoImportResult';
import    { MemoList } from './../schema/memo/resolvers/MemoList';
import    { MemoSummary } from './../schema/memo/resolvers/MemoSummary';
import    { DateTimeResolver,JSONResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { memo: Query_memo,memoList: Query_memoList },
      Mutation: { createMemo: Mutation_createMemo,deleteMemo: Mutation_deleteMemo,importMemoList: Mutation_importMemoList,updateMemo: Mutation_updateMemo },
      
      Memo: Memo,
MemoIdMapping: MemoIdMapping,
MemoImportResult: MemoImportResult,
MemoList: MemoList,
MemoSummary: MemoSummary,
DateTime: DateTimeResolver,
JSON: JSONResolver
    }