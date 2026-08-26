import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
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

export type CategoryList = {
  __typename?: 'CategoryList';
  itemList: Array<Category>;
  totalCount: Scalars['Int']['output'];
};

export type CreatePostInput = {
  categoryNo: Scalars['Int']['input'];
  contents: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type DeletePostInput = {
  categoryNo: Scalars['Int']['input'];
  postNo: Scalars['Int']['input'];
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
  input: CreatePostInput;
};


export type MutationdeletePostArgs = {
  input: DeletePostInput;
};


export type MutationsendPushToAllArgs = {
  input: SendPushToAllInput;
};


export type MutationsubscribeWebPushArgs = {
  input: SubscribeWebPushInput;
};


export type MutationunsubscribeWebPushArgs = {
  input: UnsubscribeWebPushInput;
};


export type MutationupdatePostArgs = {
  input: UpdatePostInput;
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

export type PostList = {
  __typename?: 'PostList';
  itemList: Array<PostSummary>;
  totalCount: Scalars['Int']['output'];
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
  categoryList: CategoryList;
  getRecentPostList: PostList;
  post?: Maybe<Post>;
  postList: PostList;
  user?: Maybe<User>;
};


export type QuerygetRecentPostListArgs = {
  limitCount?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerypostArgs = {
  categoryNo: Scalars['Int']['input'];
  postNo: Scalars['Int']['input'];
};


export type QuerypostListArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserArgs = {
  id: Scalars['ID']['input'];
};

export type SendPushToAllInput = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type SubscribeWebPushInput = {
  auth: Scalars['String']['input'];
  endPoint: Scalars['String']['input'];
  key: Scalars['String']['input'];
};

export type UnsubscribeWebPushInput = {
  key: Scalars['String']['input'];
};

export type UpdatePostInput = {
  categoryNo: Scalars['Int']['input'];
  contents: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  title: Scalars['String']['input'];
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
  Category: ResolverTypeWrapper<Category>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  CategoryList: ResolverTypeWrapper<CategoryList>;
  CreatePostInput: CreatePostInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DeletePostInput: DeletePostInput;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Post: ResolverTypeWrapper<Post>;
  PostList: ResolverTypeWrapper<PostList>;
  PostSummary: ResolverTypeWrapper<PostSummary>;
  PostUpsertResult: ResolverTypeWrapper<PostUpsertResult>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  SendPushToAllInput: SendPushToAllInput;
  SubscribeWebPushInput: SubscribeWebPushInput;
  UnsubscribeWebPushInput: UnsubscribeWebPushInput;
  UpdatePostInput: UpdatePostInput;
  User: ResolverTypeWrapper<User>;
  Writer: ResolverTypeWrapper<Writer>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Category: Category;
  String: Scalars['String']['output'];
  Int: Scalars['Int']['output'];
  CategoryList: CategoryList;
  CreatePostInput: CreatePostInput;
  DateTime: Scalars['DateTime']['output'];
  DeletePostInput: DeletePostInput;
  Mutation: Record<PropertyKey, never>;
  Boolean: Scalars['Boolean']['output'];
  Post: Post;
  PostList: PostList;
  PostSummary: PostSummary;
  PostUpsertResult: PostUpsertResult;
  Query: Record<PropertyKey, never>;
  ID: Scalars['ID']['output'];
  SendPushToAllInput: SendPushToAllInput;
  SubscribeWebPushInput: SubscribeWebPushInput;
  UnsubscribeWebPushInput: UnsubscribeWebPushInput;
  UpdatePostInput: UpdatePostInput;
  User: User;
  Writer: Writer;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type CategoryListResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryList'] = ResolversParentTypes['CategoryList']> = {
  itemList?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createPost?: Resolver<ResolversTypes['PostUpsertResult'], ParentType, ContextType, RequireFields<MutationcreatePostArgs, 'input'>>;
  deletePost?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeletePostArgs, 'input'>>;
  sendPushToAll?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationsendPushToAllArgs, 'input'>>;
  subscribeWebPush?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationsubscribeWebPushArgs, 'input'>>;
  unsubscribeWebPush?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationunsubscribeWebPushArgs, 'input'>>;
  updatePost?: Resolver<ResolversTypes['PostUpsertResult'], ParentType, ContextType, RequireFields<MutationupdatePostArgs, 'input'>>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  categoryLabel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categoryNo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  postNo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  writer?: Resolver<ResolversTypes['Writer'], ParentType, ContextType>;
};

export type PostListResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostList'] = ResolversParentTypes['PostList']> = {
  itemList?: Resolver<Array<ResolversTypes['PostSummary']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type PostSummaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostSummary'] = ResolversParentTypes['PostSummary']> = {
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categoryLabel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categoryNo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  postNo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PostUpsertResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostUpsertResult'] = ResolversParentTypes['PostUpsertResult']> = {
  categoryNo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  postNo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  categoryList?: Resolver<ResolversTypes['CategoryList'], ParentType, ContextType>;
  getRecentPostList?: Resolver<ResolversTypes['PostList'], ParentType, ContextType, Partial<QuerygetRecentPostListArgs>>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QuerypostArgs, 'categoryNo' | 'postNo'>>;
  postList?: Resolver<ResolversTypes['PostList'], ParentType, ContextType, Partial<QuerypostListArgs>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id'>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type WriterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Writer'] = ResolversParentTypes['Writer']> = {
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nickName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  no?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Category?: CategoryResolvers<ContextType>;
  CategoryList?: CategoryListResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostList?: PostListResolvers<ContextType>;
  PostSummary?: PostSummaryResolvers<ContextType>;
  PostUpsertResult?: PostUpsertResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Writer?: WriterResolvers<ContextType>;
};

