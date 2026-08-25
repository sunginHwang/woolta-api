/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { memo as Query_memo } from './../schema/memo/resolvers/Query/memo';
import    { memos as Query_memos } from './../schema/memo/resolvers/Query/memos';
import    { createMemo as Mutation_createMemo } from './../schema/memo/resolvers/Mutation/createMemo';
import    { deleteMemo as Mutation_deleteMemo } from './../schema/memo/resolvers/Mutation/deleteMemo';
import    { importMemos as Mutation_importMemos } from './../schema/memo/resolvers/Mutation/importMemos';
import    { updateMemo as Mutation_updateMemo } from './../schema/memo/resolvers/Mutation/updateMemo';
import    { Memo } from './../schema/memo/resolvers/Memo';
import    { MemoIdMapping } from './../schema/memo/resolvers/MemoIdMapping';
import    { MemoImportResult } from './../schema/memo/resolvers/MemoImportResult';
import    { MemoSummary } from './../schema/memo/resolvers/MemoSummary';
import    { DateTimeResolver,JSONResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { memo: Query_memo,memos: Query_memos },
      Mutation: { createMemo: Mutation_createMemo,deleteMemo: Mutation_deleteMemo,importMemos: Mutation_importMemos,updateMemo: Mutation_updateMemo },
      
      Memo: Memo,
MemoIdMapping: MemoIdMapping,
MemoImportResult: MemoImportResult,
MemoSummary: MemoSummary,
DateTime: DateTimeResolver,
JSON: JSONResolver
    }