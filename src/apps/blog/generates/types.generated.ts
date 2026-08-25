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
  ID: { input: string; output: string | number; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: Date | string; output: Date | string; }
};

export type Category = {
  __typename?: 'Category';
  label: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: PostUpsertResult;
  deletePost: Scalars['Boolean']['output'];
  sendPushToAll: Scalars['Boolean']['output'];
  subscribeWebPush: Scalars['Boolean']['output'];
  unsubscribeWebPush: Scalars['Boolean']['output'];
  updatePost: PostUpsertResult;
};


export type MutationcreatePostArgs = {
  categoryNo: Scalars['Int']['input'];
  contents: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationdeletePostArgs = {
  categoryNo: Scalars['Int']['input'];
  postNo: Scalars['Int']['input'];
};


export type MutationsendPushToAllArgs = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};


export type MutationsubscribeWebPushArgs = {
  auth: Scalars['String']['input'];
  endPoint: Scalars['String']['input'];
  key: Scalars['String']['input'];
};


export type MutationunsubscribeWebPushArgs = {
  key: Scalars['String']['input'];
};


export type MutationupdatePostArgs = {
  categoryNo: Scalars['Int']['input'];
  contents: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type Post = {
  __typename?: 'Post';
  categoryLabel: Scalars['String']['output'];
  categoryNo: Scalars['Int']['output'];
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  postNo: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  writer: Writer;
};

export type PostSummary = {
  __typename?: 'PostSummary';
  author?: Maybe<Scalars['String']['output']>;
  categoryLabel: Scalars['String']['output'];
  categoryNo: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  postNo: Scalars['Int']['output'];
  subDescription?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type PostUpsertResult = {
  __typename?: 'PostUpsertResult';
  categoryNo: Scalars['Int']['output'];
  postNo: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  allPosts: Array<Post>;
  categories: Array<Category>;
  post: Post;
  postsByCategory: Array<PostSummary>;
  recentPosts: Array<PostSummary>;
  user?: Maybe<User>;
};


export type QuerypostArgs = {
  categoryNo: Scalars['Int']['input'];
  postNo: Scalars['Int']['input'];
};


export type QuerypostsByCategoryArgs = {
  categoryNo: Scalars['Int']['input'];
};


export type QueryuserArgs = {
  id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  userId: Scalars['String']['output'];
  userName: Scalars['String']['output'];
};

export type Writer = {
  __typename?: 'Writer';
  imageUrl: Scalars['String']['output'];
  nickName?: Maybe<Scalars['String']['output']>;
  no: Scalars['Int']['output'];
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
  Category: ResolverTypeWrapper<Category>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Post: ResolverTypeWrapper<Post>;
  PostSummary: ResolverTypeWrapper<PostSummary>;
  PostUpsertResult: ResolverTypeWrapper<PostUpsertResult>;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  User: ResolverTypeWrapper<User>;
  Writer: ResolverTypeWrapper<Writer>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Category: Category;
  String: Scalars['String']['output'];
  Int: Scalars['Int']['output'];
  DateTime: Scalars['DateTime']['output'];
  Mutation: {};
  Boolean: Scalars['Boolean']['output'];
  Post: Post;
  PostSummary: PostSummary;
  PostUpsertResult: PostUpsertResult;
  Query: {};
  ID: Scalars['ID']['output'];
  User: User;
  Writer: Writer;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createPost?: Resolver<ResolversTypes['PostUpsertResult'], ParentType, ContextType, RequireFields<MutationcreatePostArgs, 'categoryNo' | 'contents' | 'title'>>;
  deletePost?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeletePostArgs, 'categoryNo' | 'postNo'>>;
  sendPushToAll?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationsendPushToAllArgs, 'content' | 'title' | 'url'>>;
  subscribeWebPush?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationsubscribeWebPushArgs, 'auth' | 'endPoint' | 'key'>>;
  unsubscribeWebPush?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationunsubscribeWebPushArgs, 'key'>>;
  updatePost?: Resolver<ResolversTypes['PostUpsertResult'], ParentType, ContextType, RequireFields<MutationupdatePostArgs, 'categoryNo' | 'contents' | 'id' | 'title'>>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  categoryLabel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categoryNo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  postNo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  writer?: Resolver<ResolversTypes['Writer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostSummaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostSummary'] = ResolversParentTypes['PostSummary']> = {
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categoryLabel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categoryNo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  postNo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostUpsertResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostUpsertResult'] = ResolversParentTypes['PostUpsertResult']> = {
  categoryNo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  postNo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allPosts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<QuerypostArgs, 'categoryNo' | 'postNo'>>;
  postsByCategory?: Resolver<Array<ResolversTypes['PostSummary']>, ParentType, ContextType, RequireFields<QuerypostsByCategoryArgs, 'categoryNo'>>;
  recentPosts?: Resolver<Array<ResolversTypes['PostSummary']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id'>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WriterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Writer'] = ResolversParentTypes['Writer']> = {
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nickName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  no?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Category?: CategoryResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostSummary?: PostSummaryResolvers<ContextType>;
  PostUpsertResult?: PostUpsertResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Writer?: WriterResolvers<ContextType>;
};

