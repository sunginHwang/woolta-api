import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: Date | string; output: Date | string; }
  JSON: { input: any; output: any; }
};

export type ImportMemoInput = {
  clientId: Scalars['String']['input'];
  content: Scalars['JSON']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Memo = {
  __typename?: 'Memo';
  content: Scalars['JSON']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type MemoIdMapping = {
  __typename?: 'MemoIdMapping';
  from: Scalars['String']['output'];
  to: Scalars['String']['output'];
};

export type MemoImportResult = {
  __typename?: 'MemoImportResult';
  memoIdMap: Array<MemoIdMapping>;
};

export type MemoSummary = {
  __typename?: 'MemoSummary';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMemo: Memo;
  deleteMemo: Scalars['Boolean']['output'];
  importMemos: MemoImportResult;
  updateMemo: Memo;
};


export type MutationdeleteMemoArgs = {
  id: Scalars['String']['input'];
};


export type MutationimportMemosArgs = {
  memos: Array<ImportMemoInput>;
};


export type MutationupdateMemoArgs = {
  content?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  memo: Memo;
  memos: Array<MemoSummary>;
};


export type QuerymemoArgs = {
  id: Scalars['String']['input'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;





/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  ImportMemoInput: ImportMemoInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  Memo: ResolverTypeWrapper<Memo>;
  MemoIdMapping: ResolverTypeWrapper<MemoIdMapping>;
  MemoImportResult: ResolverTypeWrapper<MemoImportResult>;
  MemoSummary: ResolverTypeWrapper<MemoSummary>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  DateTime: Scalars['DateTime']['output'];
  ImportMemoInput: ImportMemoInput;
  String: Scalars['String']['output'];
  JSON: Scalars['JSON']['output'];
  Memo: Memo;
  MemoIdMapping: MemoIdMapping;
  MemoImportResult: MemoImportResult;
  MemoSummary: MemoSummary;
  Mutation: Record<PropertyKey, never>;
  Boolean: Scalars['Boolean']['output'];
  Query: Record<PropertyKey, never>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MemoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Memo'] = ResolversParentTypes['Memo']> = {
  content?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type MemoIdMappingResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemoIdMapping'] = ResolversParentTypes['MemoIdMapping']> = {
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MemoImportResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemoImportResult'] = ResolversParentTypes['MemoImportResult']> = {
  memoIdMap?: Resolver<Array<ResolversTypes['MemoIdMapping']>, ParentType, ContextType>;
};

export type MemoSummaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemoSummary'] = ResolversParentTypes['MemoSummary']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createMemo?: Resolver<ResolversTypes['Memo'], ParentType, ContextType>;
  deleteMemo?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteMemoArgs, 'id'>>;
  importMemos?: Resolver<ResolversTypes['MemoImportResult'], ParentType, ContextType, RequireFields<MutationimportMemosArgs, 'memos'>>;
  updateMemo?: Resolver<ResolversTypes['Memo'], ParentType, ContextType, RequireFields<MutationupdateMemoArgs, 'id'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  memo?: Resolver<ResolversTypes['Memo'], ParentType, ContextType, RequireFields<QuerymemoArgs, 'id'>>;
  memos?: Resolver<Array<ResolversTypes['MemoSummary']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  Memo?: MemoResolvers<ContextType>;
  MemoIdMapping?: MemoIdMappingResolvers<ContextType>;
  MemoImportResult?: MemoImportResultResolvers<ContextType>;
  MemoSummary?: MemoSummaryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

