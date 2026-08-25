import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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
  importArticles: ArticleImportResult;
  removeArticleFromCuration: WeeklyCuration;
  updateArticle: Article;
  updateArticleCategory: ArticleCategory;
};


export type MutationaddArticleToCurationArgs = {
  articleId: Scalars['String']['input'];
  weekKey: Scalars['String']['input'];
};


export type MutationcreateArticleArgs = {
  categoryId: Scalars['String']['input'];
  seo?: InputMaybe<ArticleSeoInput>;
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};


export type MutationcreateArticleCategoryArgs = {
  name: Scalars['String']['input'];
};


export type MutationdeleteArticleArgs = {
  id: Scalars['String']['input'];
};


export type MutationdeleteArticleCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationimportArticlesArgs = {
  articles: Array<ImportArticleInput>;
  categories: Array<ImportArticleCategoryInput>;
  curations: Array<ImportCurationInput>;
};


export type MutationremoveArticleFromCurationArgs = {
  articleId: Scalars['String']['input'];
  weekKey: Scalars['String']['input'];
};


export type MutationupdateArticleArgs = {
  id: Scalars['String']['input'];
  input: UpdateArticleInput;
};


export type MutationupdateArticleCategoryArgs = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  articleCategories: Array<ArticleCategory>;
  articleCurations: Array<WeeklyCuration>;
  articles: Array<Article>;
};


export type QueryarticlesArgs = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateArticleInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Article: ResolverTypeWrapper<Article>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  ArticleCategory: ResolverTypeWrapper<ArticleCategory>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  ArticleIdMapping: ResolverTypeWrapper<ArticleIdMapping>;
  ArticleImportResult: ResolverTypeWrapper<ArticleImportResult>;
  ArticleSeo: ResolverTypeWrapper<ArticleSeo>;
  ArticleSeoInput: ArticleSeoInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  ImportArticleCategoryInput: ImportArticleCategoryInput;
  ImportArticleInput: ImportArticleInput;
  ImportCurationInput: ImportCurationInput;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Query: ResolverTypeWrapper<{}>;
  UpdateArticleInput: UpdateArticleInput;
  WeeklyCuration: ResolverTypeWrapper<WeeklyCuration>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Article: Article;
  String: Scalars['String']['output'];
  ArticleCategory: ArticleCategory;
  Int: Scalars['Int']['output'];
  ArticleIdMapping: ArticleIdMapping;
  ArticleImportResult: ArticleImportResult;
  ArticleSeo: ArticleSeo;
  ArticleSeoInput: ArticleSeoInput;
  DateTime: Scalars['DateTime']['output'];
  ImportArticleCategoryInput: ImportArticleCategoryInput;
  ImportArticleInput: ImportArticleInput;
  ImportCurationInput: ImportCurationInput;
  Mutation: {};
  Boolean: Scalars['Boolean']['output'];
  Query: {};
  UpdateArticleInput: UpdateArticleInput;
  WeeklyCuration: WeeklyCuration;
};

export type ArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = {
  categoryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  seo?: Resolver<Maybe<ResolversTypes['ArticleSeo']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleCategory'] = ResolversParentTypes['ArticleCategory']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleIdMappingResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleIdMapping'] = ResolversParentTypes['ArticleIdMapping']> = {
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleImportResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleImportResult'] = ResolversParentTypes['ArticleImportResult']> = {
  articleIdMap?: Resolver<Array<ResolversTypes['ArticleIdMapping']>, ParentType, ContextType>;
  categoryIdMap?: Resolver<Array<ResolversTypes['ArticleIdMapping']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleSeoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleSeo'] = ResolversParentTypes['ArticleSeo']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addArticleToCuration?: Resolver<ResolversTypes['WeeklyCuration'], ParentType, ContextType, RequireFields<MutationaddArticleToCurationArgs, 'articleId' | 'weekKey'>>;
  createArticle?: Resolver<ResolversTypes['Article'], ParentType, ContextType, RequireFields<MutationcreateArticleArgs, 'categoryId' | 'title' | 'url'>>;
  createArticleCategory?: Resolver<ResolversTypes['ArticleCategory'], ParentType, ContextType, RequireFields<MutationcreateArticleCategoryArgs, 'name'>>;
  deleteArticle?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteArticleArgs, 'id'>>;
  deleteArticleCategory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteArticleCategoryArgs, 'id'>>;
  importArticles?: Resolver<ResolversTypes['ArticleImportResult'], ParentType, ContextType, RequireFields<MutationimportArticlesArgs, 'articles' | 'categories' | 'curations'>>;
  removeArticleFromCuration?: Resolver<ResolversTypes['WeeklyCuration'], ParentType, ContextType, RequireFields<MutationremoveArticleFromCurationArgs, 'articleId' | 'weekKey'>>;
  updateArticle?: Resolver<ResolversTypes['Article'], ParentType, ContextType, RequireFields<MutationupdateArticleArgs, 'id' | 'input'>>;
  updateArticleCategory?: Resolver<ResolversTypes['ArticleCategory'], ParentType, ContextType, RequireFields<MutationupdateArticleCategoryArgs, 'id' | 'name'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  articleCategories?: Resolver<Array<ResolversTypes['ArticleCategory']>, ParentType, ContextType>;
  articleCurations?: Resolver<Array<ResolversTypes['WeeklyCuration']>, ParentType, ContextType>;
  articles?: Resolver<Array<ResolversTypes['Article']>, ParentType, ContextType, Partial<QueryarticlesArgs>>;
};

export type WeeklyCurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['WeeklyCuration'] = ResolversParentTypes['WeeklyCuration']> = {
  articleIds?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  articles?: Resolver<Array<ResolversTypes['Article']>, ParentType, ContextType>;
  weekKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Article?: ArticleResolvers<ContextType>;
  ArticleCategory?: ArticleCategoryResolvers<ContextType>;
  ArticleIdMapping?: ArticleIdMappingResolvers<ContextType>;
  ArticleImportResult?: ArticleImportResultResolvers<ContextType>;
  ArticleSeo?: ArticleSeoResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  WeeklyCuration?: WeeklyCurationResolvers<ContextType>;
};

