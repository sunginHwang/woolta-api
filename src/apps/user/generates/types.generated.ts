import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: Date | string; output: Date | string; }
};

export type LoginByShareCodeInput = {
  shareCode: Scalars['String']['input'];
};

export type LoginBySocialInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  loginType: SocialLoginType;
  name?: InputMaybe<Scalars['String']['input']>;
  /**
   * provider가 발급한 토큰. GOOGLE = id_token, KAKAO_TALK / FACEBOOK = access token.
   * 서버가 provider에 되물어 검증하며, 여기서 확인된 식별자만 socialId로 쓴다.
   */
  token: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  loginByShareCode: UserInfo;
  loginBySocial: UserInfo;
  logout: Scalars['Boolean']['output'];
  /** refresh 쿠키로 세션 갱신(회전). 토큰 값은 인자로도 응답으로도 오가지 않고 쿠키로만 처리된다. */
  refreshSession: Scalars['Boolean']['output'];
  upsertShareCode: Scalars['String']['output'];
};


export type MutationloginByShareCodeArgs = {
  input: LoginByShareCodeInput;
};


export type MutationloginBySocialArgs = {
  input: LoginBySocialInput;
};

export type Query = {
  __typename?: 'Query';
  checkAccess: Scalars['Int']['output'];
  getShareCode: Scalars['String']['output'];
  me: UserInfo;
};

export type SocialLoginType =
  | 'FACEBOOK'
  | 'GOOGLE'
  | 'KAKAO_TALK';

export type UserInfo = {
  __typename?: 'UserInfo';
  authType?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  loginType: Scalars['String']['output'];
  name: Scalars['String']['output'];
  profileImg: Scalars['String']['output'];
  socialId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
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
  LoginByShareCodeInput: LoginByShareCodeInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  LoginBySocialInput: LoginBySocialInput;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  SocialLoginType: ResolverTypeWrapper<'FACEBOOK' | 'KAKAO_TALK' | 'GOOGLE'>;
  UserInfo: ResolverTypeWrapper<UserInfo>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  DateTime: Scalars['DateTime']['output'];
  LoginByShareCodeInput: LoginByShareCodeInput;
  String: Scalars['String']['output'];
  LoginBySocialInput: LoginBySocialInput;
  Mutation: Record<PropertyKey, never>;
  Boolean: Scalars['Boolean']['output'];
  Query: Record<PropertyKey, never>;
  Int: Scalars['Int']['output'];
  UserInfo: UserInfo;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  loginByShareCode?: Resolver<ResolversTypes['UserInfo'], ParentType, ContextType, RequireFields<MutationloginByShareCodeArgs, 'input'>>;
  loginBySocial?: Resolver<ResolversTypes['UserInfo'], ParentType, ContextType, RequireFields<MutationloginBySocialArgs, 'input'>>;
  logout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  refreshSession?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  upsertShareCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  checkAccess?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  getShareCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  me?: Resolver<ResolversTypes['UserInfo'], ParentType, ContextType>;
};

export type SocialLoginTypeResolvers = EnumResolverSignature<{ FACEBOOK?: any, GOOGLE?: any, KAKAO_TALK?: any }, ResolversTypes['SocialLoginType']>;

export type UserInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserInfo'] = ResolversParentTypes['UserInfo']> = {
  authType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  loginType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileImg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  socialId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SocialLoginType?: SocialLoginTypeResolvers;
  UserInfo?: UserInfoResolvers<ContextType>;
};

