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
};

export type AddArticleToCurationInput = {
  articleId: Scalars['String']['input'];
  weekKey: Scalars['String']['input'];
};

export type Article = {
  __typename?: 'Article';
  categoryId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  seo?: Maybe<ArticleSeo>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type ArticleCategory = {
  __typename?: 'ArticleCategory';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
};

export type ArticleCategoryList = {
  __typename?: 'ArticleCategoryList';
  itemList: Array<ArticleCategory>;
  totalCount: Scalars['Int']['output'];
};

export type ArticleIdMapping = {
  __typename?: 'ArticleIdMapping';
  from: Scalars['String']['output'];
  to: Scalars['String']['output'];
};

export type ArticleImportResult = {
  __typename?: 'ArticleImportResult';
  articleIdMap: Array<ArticleIdMapping>;
  categoryIdMap: Array<ArticleIdMapping>;
};

export type ArticleList = {
  __typename?: 'ArticleList';
  itemList: Array<Article>;
  totalCount: Scalars['Int']['output'];
};

export type ArticleSeo = {
  __typename?: 'ArticleSeo';
  description?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ArticleSeoInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateArticleCategoryInput = {
  name: Scalars['String']['input'];
};

export type CreateArticleInput = {
  categoryId: Scalars['String']['input'];
  seo?: InputMaybe<ArticleSeoInput>;
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type DeleteArticleCategoryInput = {
  id: Scalars['String']['input'];
};

export type DeleteArticleInput = {
  id: Scalars['String']['input'];
};

export type ImportArticleCategoryInput = {
  clientId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  order: Scalars['Int']['input'];
};

export type ImportArticleInput = {
  categoryClientId: Scalars['String']['input'];
  clientId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ArticleSeoInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
};

export type ImportArticleListInput = {
  categoryList: Array<ImportArticleCategoryInput>;
  curationList: Array<ImportCurationInput>;
  itemList: Array<ImportArticleInput>;
};

export type ImportCurationInput = {
  articleClientIds: Array<Scalars['String']['input']>;
  weekKey: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addArticleToCuration: WeeklyCuration;
  createArticle: Article;
  createArticleCategory: ArticleCategory;
  deleteArticle: Scalars['Boolean']['output'];
  deleteArticleCategory: Scalars['Boolean']['output'];
  importArticleList: ArticleImportResult;
  removeArticleFromCuration: WeeklyCuration;
  updateArticle: Article;
  updateArticleCategory: ArticleCategory;
};


export type MutationaddArticleToCurationArgs = {
  input: AddArticleToCurationInput;
};


export type MutationcreateArticleArgs = {
  input: CreateArticleInput;
};


export type MutationcreateArticleCategoryArgs = {
  input: CreateArticleCategoryInput;
};


export type MutationdeleteArticleArgs = {
  input: DeleteArticleInput;
};


export type MutationdeleteArticleCategoryArgs = {
  input: DeleteArticleCategoryInput;
};


export type MutationimportArticleListArgs = {
  input: ImportArticleListInput;
};


export type MutationremoveArticleFromCurationArgs = {
  input: RemoveArticleFromCurationInput;
};


export type MutationupdateArticleArgs = {
  input: UpdateArticleInput;
};


export type MutationupdateArticleCategoryArgs = {
  input: UpdateArticleCategoryInput;
};

export type Query = {
  __typename?: 'Query';
  articleCategoryList: ArticleCategoryList;
  articleList: ArticleList;
  weeklyCurationList: WeeklyCurationList;
};


export type QueryarticleListArgs = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveArticleFromCurationInput = {
  articleId: Scalars['String']['input'];
  weekKey: Scalars['String']['input'];
};

export type UpdateArticleCategoryInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpdateArticleInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  seo?: InputMaybe<ArticleSeoInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type WeeklyCuration = {
  __typename?: 'WeeklyCuration';
  articleIds: Array<Scalars['String']['output']>;
  articles: Array<Article>;
  weekKey: Scalars['String']['output'];
};

export type WeeklyCurationList = {
  __typename?: 'WeeklyCurationList';
  itemList: Array<WeeklyCuration>;
  totalCount: Scalars['Int']['output'];
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
  AddArticleToCurationInput: AddArticleToCurationInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Article: ResolverTypeWrapper<Article>;
  ArticleCategory: ResolverTypeWrapper<ArticleCategory>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  ArticleCategoryList: ResolverTypeWrapper<ArticleCategoryList>;
  ArticleIdMapping: ResolverTypeWrapper<ArticleIdMapping>;
  ArticleImportResult: ResolverTypeWrapper<ArticleImportResult>;
  ArticleList: ResolverTypeWrapper<ArticleList>;
  ArticleSeo: ResolverTypeWrapper<ArticleSeo>;
  ArticleSeoInput: ArticleSeoInput;
  CreateArticleCategoryInput: CreateArticleCategoryInput;
  CreateArticleInput: CreateArticleInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DeleteArticleCategoryInput: DeleteArticleCategoryInput;
  DeleteArticleInput: DeleteArticleInput;
  ImportArticleCategoryInput: ImportArticleCategoryInput;
  ImportArticleInput: ImportArticleInput;
  ImportArticleListInput: ImportArticleListInput;
  ImportCurationInput: ImportCurationInput;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  RemoveArticleFromCurationInput: RemoveArticleFromCurationInput;
  UpdateArticleCategoryInput: UpdateArticleCategoryInput;
  UpdateArticleInput: UpdateArticleInput;
  WeeklyCuration: ResolverTypeWrapper<WeeklyCuration>;
  WeeklyCurationList: ResolverTypeWrapper<WeeklyCurationList>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddArticleToCurationInput: AddArticleToCurationInput;
  String: Scalars['String']['output'];
  Article: Article;
  ArticleCategory: ArticleCategory;
  Int: Scalars['Int']['output'];
  ArticleCategoryList: ArticleCategoryList;
  ArticleIdMapping: ArticleIdMapping;
  ArticleImportResult: ArticleImportResult;
  ArticleList: ArticleList;
  ArticleSeo: ArticleSeo;
  ArticleSeoInput: ArticleSeoInput;
  CreateArticleCategoryInput: CreateArticleCategoryInput;
  CreateArticleInput: CreateArticleInput;
  DateTime: Scalars['DateTime']['output'];
  DeleteArticleCategoryInput: DeleteArticleCategoryInput;
  DeleteArticleInput: DeleteArticleInput;
  ImportArticleCategoryInput: ImportArticleCategoryInput;
  ImportArticleInput: ImportArticleInput;
  ImportArticleListInput: ImportArticleListInput;
  ImportCurationInput: ImportCurationInput;
  Mutation: Record<PropertyKey, never>;
  Boolean: Scalars['Boolean']['output'];
  Query: Record<PropertyKey, never>;
  RemoveArticleFromCurationInput: RemoveArticleFromCurationInput;
  UpdateArticleCategoryInput: UpdateArticleCategoryInput;
  UpdateArticleInput: UpdateArticleInput;
  WeeklyCuration: WeeklyCuration;
  WeeklyCurationList: WeeklyCurationList;
};

export type ArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = {
  categoryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  seo?: Resolver<Maybe<ResolversTypes['ArticleSeo']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ArticleCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleCategory'] = ResolversParentTypes['ArticleCategory']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type ArticleCategoryListResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleCategoryList'] = ResolversParentTypes['ArticleCategoryList']> = {
  itemList?: Resolver<Array<ResolversTypes['ArticleCategory']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type ArticleIdMappingResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleIdMapping'] = ResolversParentTypes['ArticleIdMapping']> = {
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ArticleImportResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleImportResult'] = ResolversParentTypes['ArticleImportResult']> = {
  articleIdMap?: Resolver<Array<ResolversTypes['ArticleIdMapping']>, ParentType, ContextType>;
  categoryIdMap?: Resolver<Array<ResolversTypes['ArticleIdMapping']>, ParentType, ContextType>;
};

export type ArticleListResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleList'] = ResolversParentTypes['ArticleList']> = {
  itemList?: Resolver<Array<ResolversTypes['Article']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type ArticleSeoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleSeo'] = ResolversParentTypes['ArticleSeo']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addArticleToCuration?: Resolver<ResolversTypes['WeeklyCuration'], ParentType, ContextType, RequireFields<MutationaddArticleToCurationArgs, 'input'>>;
  createArticle?: Resolver<ResolversTypes['Article'], ParentType, ContextType, RequireFields<MutationcreateArticleArgs, 'input'>>;
  createArticleCategory?: Resolver<ResolversTypes['ArticleCategory'], ParentType, ContextType, RequireFields<MutationcreateArticleCategoryArgs, 'input'>>;
  deleteArticle?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteArticleArgs, 'input'>>;
  deleteArticleCategory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteArticleCategoryArgs, 'input'>>;
  importArticleList?: Resolver<ResolversTypes['ArticleImportResult'], ParentType, ContextType, RequireFields<MutationimportArticleListArgs, 'input'>>;
  removeArticleFromCuration?: Resolver<ResolversTypes['WeeklyCuration'], ParentType, ContextType, RequireFields<MutationremoveArticleFromCurationArgs, 'input'>>;
  updateArticle?: Resolver<ResolversTypes['Article'], ParentType, ContextType, RequireFields<MutationupdateArticleArgs, 'input'>>;
  updateArticleCategory?: Resolver<ResolversTypes['ArticleCategory'], ParentType, ContextType, RequireFields<MutationupdateArticleCategoryArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  articleCategoryList?: Resolver<ResolversTypes['ArticleCategoryList'], ParentType, ContextType>;
  articleList?: Resolver<ResolversTypes['ArticleList'], ParentType, ContextType, Partial<QueryarticleListArgs>>;
  weeklyCurationList?: Resolver<ResolversTypes['WeeklyCurationList'], ParentType, ContextType>;
};

export type WeeklyCurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['WeeklyCuration'] = ResolversParentTypes['WeeklyCuration']> = {
  articleIds?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  articles?: Resolver<Array<ResolversTypes['Article']>, ParentType, ContextType>;
  weekKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type WeeklyCurationListResolvers<ContextType = any, ParentType extends ResolversParentTypes['WeeklyCurationList'] = ResolversParentTypes['WeeklyCurationList']> = {
  itemList?: Resolver<Array<ResolversTypes['WeeklyCuration']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Article?: ArticleResolvers<ContextType>;
  ArticleCategory?: ArticleCategoryResolvers<ContextType>;
  ArticleCategoryList?: ArticleCategoryListResolvers<ContextType>;
  ArticleIdMapping?: ArticleIdMappingResolvers<ContextType>;
  ArticleImportResult?: ArticleImportResultResolvers<ContextType>;
  ArticleList?: ArticleListResolvers<ContextType>;
  ArticleSeo?: ArticleSeoResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  WeeklyCuration?: WeeklyCurationResolvers<ContextType>;
  WeeklyCurationList?: WeeklyCurationListResolvers<ContextType>;
};

