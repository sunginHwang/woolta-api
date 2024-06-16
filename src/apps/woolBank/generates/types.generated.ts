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

export type Account = {
  __typename?: 'Account';
  amount: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  currentAmount: Scalars['Int']['output'];
  endDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isExpiration: Scalars['Boolean']['output'];
  rate: Scalars['Float']['output'];
  regularTransferDate: Scalars['Int']['output'];
  savingType: SavingType;
  savingTypeId: Scalars['Int']['output'];
  startDate: Scalars['DateTime']['output'];
  taxType: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type AccountBook = {
  __typename?: 'AccountBook';
  accountBookCategory: AccountBookCategory;
  accountBookCategoryId: Scalars['Int']['output'];
  amount: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isRegularExpenditure: Scalars['Boolean']['output'];
  memo: Scalars['String']['output'];
  registerDateTime: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
  type: AccountBookCategoryType;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type AccountBookCategory = {
  __typename?: 'AccountBookCategory';
  accountBookCategoryImage: AccountBookCategoryImage;
  accountBookCategoryImageId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  delYn: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: AccountBookCategoryType;
  updatedAt: Scalars['DateTime']['output'];
  useStatistic: Scalars['Boolean']['output'];
  userId: Scalars['Int']['output'];
};

export type AccountBookCategoryImage = {
  __typename?: 'AccountBookCategoryImage';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  imageUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type AccountBookCategoryType =
  | 'expenditure'
  | 'income';

export type BucketList = {
  __typename?: 'BucketList';
  completeDate: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isComplete: Scalars['Boolean']['output'];
  thumbImageUrl: Scalars['String']['output'];
  title: Scalars['String']['output'];
  todoList: Array<Todo>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type Deposit = {
  __typename?: 'Deposit';
  account: Account;
  accountId: Scalars['Int']['output'];
  amount: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  depositDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  prevTotalAmount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type MinAccount = {
  __typename?: 'MinAccount';
  amount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  rate: Scalars['Float']['output'];
  regularTransferDate: Scalars['Int']['output'];
  taxType: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccountBook: AccountBook;
  createAccountBookCategory: AccountBookCategory;
  deleteAccountBook: Scalars['Int']['output'];
  deleteAccountBookCategory: Scalars['Boolean']['output'];
  updateAccountBook: AccountBook;
};


export type MutationcreateAccountBookArgs = {
  amount: Scalars['Int']['input'];
  categoryId: Scalars['Int']['input'];
  memo?: InputMaybe<Scalars['String']['input']>;
  registerDateTime: Scalars['DateTime']['input'];
  title: Scalars['String']['input'];
  type: AccountBookCategoryType;
};


export type MutationcreateAccountBookCategoryArgs = {
  accountBookCategoryImageId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  type: AccountBookCategoryType;
  useStatistic: Scalars['Boolean']['input'];
};


export type MutationdeleteAccountBookArgs = {
  id: Scalars['ID']['input'];
};


export type MutationdeleteAccountBookCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationupdateAccountBookArgs = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  memo?: InputMaybe<Scalars['String']['input']>;
  registerDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AccountBookCategoryType>;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<MinAccount>;
  accountBook?: Maybe<AccountBook>;
  accountBookCategoryList?: Maybe<Array<AccountBookCategory>>;
  accountBookImageList?: Maybe<Array<AccountBookCategoryImage>>;
  accountBookList?: Maybe<Array<AccountBook>>;
  accountBookStatisticList?: Maybe<Array<Statistic>>;
  account_list?: Maybe<Array<Account>>;
};


export type QueryaccountArgs = {
  id: Scalars['ID']['input'];
};


export type QueryaccountBookArgs = {
  id: Scalars['ID']['input'];
};


export type QueryaccountBookListArgs = {
  dateTime: Scalars['DateTime']['input'];
};


export type QueryaccountBookStatisticListArgs = {
  endDate: Scalars['DateTime']['input'];
  startDate: Scalars['DateTime']['input'];
  type: AccountBookCategoryType;
};

export type RegularExpenditure = {
  __typename?: 'RegularExpenditure';
  accountBookCategoryId: Scalars['Int']['output'];
  amount: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isAutoExpenditure: Scalars['Boolean']['output'];
  regularDate: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type SavingType = {
  __typename?: 'SavingType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Statistic = {
  __typename?: 'Statistic';
  accountBookCategory: AccountBookCategory;
  amount: Scalars['Int']['output'];
  categoryId: Scalars['String']['output'];
  categoryName: Scalars['String']['output'];
  list?: Maybe<Array<StatisticItem>>;
  percentage: Scalars['Float']['output'];
  useStatistic: Scalars['Boolean']['output'];
};

export type StatisticItem = {
  __typename?: 'StatisticItem';
  amount: Scalars['Int']['output'];
  registerDateTime: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
};

export type Todo = {
  __typename?: 'Todo';
  bucketList: BucketList;
  bucketListId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isComplete: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type User = {
  __typename?: 'User';
  accountBookCategories: Array<AccountBookCategory>;
  accountBookCategoryImages: Array<AccountBookCategoryImage>;
  accountBooks: Array<AccountBook>;
  accounts: Array<Account>;
  bucketLists: Array<BucketList>;
  createdAt: Scalars['DateTime']['output'];
  deposits: Array<Deposit>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  loginType: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  profileImg: Scalars['String']['output'];
  regularExpenditures: Array<RegularExpenditure>;
  socialId: Scalars['String']['output'];
  todos: Array<Todo>;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserShareCode = {
  __typename?: 'UserShareCode';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  shareCode: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
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
  Account: ResolverTypeWrapper<Account>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  AccountBook: ResolverTypeWrapper<AccountBook>;
  AccountBookCategory: ResolverTypeWrapper<AccountBookCategory>;
  AccountBookCategoryImage: ResolverTypeWrapper<AccountBookCategoryImage>;
  AccountBookCategoryType: AccountBookCategoryType;
  BucketList: ResolverTypeWrapper<BucketList>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Deposit: ResolverTypeWrapper<Deposit>;
  MinAccount: ResolverTypeWrapper<MinAccount>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RegularExpenditure: ResolverTypeWrapper<RegularExpenditure>;
  SavingType: ResolverTypeWrapper<SavingType>;
  Statistic: ResolverTypeWrapper<Statistic>;
  StatisticItem: ResolverTypeWrapper<StatisticItem>;
  Todo: ResolverTypeWrapper<Todo>;
  User: ResolverTypeWrapper<User>;
  UserShareCode: ResolverTypeWrapper<UserShareCode>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Account;
  Int: Scalars['Int']['output'];
  ID: Scalars['ID']['output'];
  Boolean: Scalars['Boolean']['output'];
  Float: Scalars['Float']['output'];
  String: Scalars['String']['output'];
  AccountBook: AccountBook;
  AccountBookCategory: AccountBookCategory;
  AccountBookCategoryImage: AccountBookCategoryImage;
  BucketList: BucketList;
  DateTime: Scalars['DateTime']['output'];
  Deposit: Deposit;
  MinAccount: MinAccount;
  Mutation: {};
  Query: {};
  RegularExpenditure: RegularExpenditure;
  SavingType: SavingType;
  Statistic: Statistic;
  StatisticItem: StatisticItem;
  Todo: Todo;
  User: User;
  UserShareCode: UserShareCode;
};

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  currentAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isExpiration?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  regularTransferDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  savingType?: Resolver<ResolversTypes['SavingType'], ParentType, ContextType>;
  savingTypeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  taxType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountBookResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountBook'] = ResolversParentTypes['AccountBook']> = {
  accountBookCategory?: Resolver<ResolversTypes['AccountBookCategory'], ParentType, ContextType>;
  accountBookCategoryId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isRegularExpenditure?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  memo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  registerDateTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AccountBookCategoryType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountBookCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountBookCategory'] = ResolversParentTypes['AccountBookCategory']> = {
  accountBookCategoryImage?: Resolver<ResolversTypes['AccountBookCategoryImage'], ParentType, ContextType>;
  accountBookCategoryImageId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  delYn?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AccountBookCategoryType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  useStatistic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountBookCategoryImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountBookCategoryImage'] = ResolversParentTypes['AccountBookCategoryImage']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BucketListResolvers<ContextType = any, ParentType extends ResolversParentTypes['BucketList'] = ResolversParentTypes['BucketList']> = {
  completeDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isComplete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  thumbImageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  todoList?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DepositResolvers<ContextType = any, ParentType extends ResolversParentTypes['Deposit'] = ResolversParentTypes['Deposit']> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  accountId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  depositDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  prevTotalAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MinAccount'] = ResolversParentTypes['MinAccount']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  regularTransferDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  taxType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAccountBook?: Resolver<ResolversTypes['AccountBook'], ParentType, ContextType, RequireFields<MutationcreateAccountBookArgs, 'amount' | 'categoryId' | 'registerDateTime' | 'title' | 'type'>>;
  createAccountBookCategory?: Resolver<ResolversTypes['AccountBookCategory'], ParentType, ContextType, RequireFields<MutationcreateAccountBookCategoryArgs, 'accountBookCategoryImageId' | 'name' | 'type' | 'useStatistic'>>;
  deleteAccountBook?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationdeleteAccountBookArgs, 'id'>>;
  deleteAccountBookCategory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteAccountBookCategoryArgs, 'id'>>;
  updateAccountBook?: Resolver<ResolversTypes['AccountBook'], ParentType, ContextType, RequireFields<MutationupdateAccountBookArgs, 'id'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  account?: Resolver<Maybe<ResolversTypes['MinAccount']>, ParentType, ContextType, RequireFields<QueryaccountArgs, 'id'>>;
  accountBook?: Resolver<Maybe<ResolversTypes['AccountBook']>, ParentType, ContextType, RequireFields<QueryaccountBookArgs, 'id'>>;
  accountBookCategoryList?: Resolver<Maybe<Array<ResolversTypes['AccountBookCategory']>>, ParentType, ContextType>;
  accountBookImageList?: Resolver<Maybe<Array<ResolversTypes['AccountBookCategoryImage']>>, ParentType, ContextType>;
  accountBookList?: Resolver<Maybe<Array<ResolversTypes['AccountBook']>>, ParentType, ContextType, RequireFields<QueryaccountBookListArgs, 'dateTime'>>;
  accountBookStatisticList?: Resolver<Maybe<Array<ResolversTypes['Statistic']>>, ParentType, ContextType, RequireFields<QueryaccountBookStatisticListArgs, 'endDate' | 'startDate' | 'type'>>;
  account_list?: Resolver<Maybe<Array<ResolversTypes['Account']>>, ParentType, ContextType>;
};

export type RegularExpenditureResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegularExpenditure'] = ResolversParentTypes['RegularExpenditure']> = {
  accountBookCategoryId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isAutoExpenditure?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  regularDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SavingTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SavingType'] = ResolversParentTypes['SavingType']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['Statistic'] = ResolversParentTypes['Statistic']> = {
  accountBookCategory?: Resolver<ResolversTypes['AccountBookCategory'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  categoryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categoryName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  list?: Resolver<Maybe<Array<ResolversTypes['StatisticItem']>>, ParentType, ContextType>;
  percentage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  useStatistic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatisticItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['StatisticItem'] = ResolversParentTypes['StatisticItem']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  registerDateTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  bucketList?: Resolver<ResolversTypes['BucketList'], ParentType, ContextType>;
  bucketListId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isComplete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  accountBookCategories?: Resolver<Array<ResolversTypes['AccountBookCategory']>, ParentType, ContextType>;
  accountBookCategoryImages?: Resolver<Array<ResolversTypes['AccountBookCategoryImage']>, ParentType, ContextType>;
  accountBooks?: Resolver<Array<ResolversTypes['AccountBook']>, ParentType, ContextType>;
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType>;
  bucketLists?: Resolver<Array<ResolversTypes['BucketList']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deposits?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  loginType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileImg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regularExpenditures?: Resolver<Array<ResolversTypes['RegularExpenditure']>, ParentType, ContextType>;
  socialId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  todos?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserShareCodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserShareCode'] = ResolversParentTypes['UserShareCode']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  shareCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Account?: AccountResolvers<ContextType>;
  AccountBook?: AccountBookResolvers<ContextType>;
  AccountBookCategory?: AccountBookCategoryResolvers<ContextType>;
  AccountBookCategoryImage?: AccountBookCategoryImageResolvers<ContextType>;
  BucketList?: BucketListResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Deposit?: DepositResolvers<ContextType>;
  MinAccount?: MinAccountResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RegularExpenditure?: RegularExpenditureResolvers<ContextType>;
  SavingType?: SavingTypeResolvers<ContextType>;
  Statistic?: StatisticResolvers<ContextType>;
  StatisticItem?: StatisticItemResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserShareCode?: UserShareCodeResolvers<ContextType>;
};

