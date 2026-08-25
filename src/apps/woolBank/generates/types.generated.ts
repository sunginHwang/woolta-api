import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
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
  deposits?: Maybe<Array<Deposit>>;
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
  installmentMonth?: Maybe<Scalars['Int']['output']>;
  isDisabledBudget: Scalars['Boolean']['output'];
  isRegularExpenditure: Scalars['Boolean']['output'];
  memo: Scalars['String']['output'];
  paidInstallmentMonth?: Maybe<Scalars['Int']['output']>;
  registerDateTime: Scalars['DateTime']['output'];
  regularDate?: Maybe<Scalars['Int']['output']>;
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
  imageUrl: Scalars['String']['output'];
  isComplete: Scalars['Boolean']['output'];
  thumbImageUrl: Scalars['String']['output'];
  title: Scalars['String']['output'];
  todoList?: Maybe<Array<Todo>>;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type BucketListSummary = {
  __typename?: 'BucketListSummary';
  completeDate: Scalars['DateTime']['output'];
  completeTodoCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  isComplete: Scalars['Boolean']['output'];
  thumbImageUrl: Scalars['String']['output'];
  title: Scalars['String']['output'];
  todoCount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CustomRegularExpenditure = {
  __typename?: 'CustomRegularExpenditure';
  accountBookCategory: AccountBookCategory;
  accountBookCategoryId: Scalars['Int']['output'];
  amount: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isAutoExpenditure: Scalars['Boolean']['output'];
  regularDate: Scalars['Int']['output'];
  regularExpenditureDay: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type CustomRegularExpenditureResponse = {
  __typename?: 'CustomRegularExpenditureResponse';
  imageUrl: Scalars['String']['output'];
  list?: Maybe<Array<CustomRegularExpenditure>>;
  name: Scalars['String']['output'];
  type: AccountBookCategoryType;
};

export type Deposit = {
  __typename?: 'Deposit';
  account?: Maybe<Account>;
  accountId: Scalars['Int']['output'];
  amount: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  depositDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  prevTotalAmount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type MainInfo = {
  __typename?: 'MainInfo';
  accounts: Array<Account>;
  bucketList: Array<BucketListSummary>;
  totalSavedAmount: Scalars['Int']['output'];
  totalSavedAmountExceptCurrentMonth: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  completeAccountExpiration: Scalars['Int']['output'];
  completeBucketList: Scalars['Int']['output'];
  createAccount: Scalars['Int']['output'];
  createAccountBook: AccountBook;
  createAccountBookCategory: AccountBookCategory;
  createBucketList: Scalars['Int']['output'];
  createDeposit: Deposit;
  createRegularExpenditure: Scalars['Int']['output'];
  createTodo: Scalars['Int']['output'];
  deleteAccount: Scalars['Boolean']['output'];
  deleteAccountBook: Scalars['Int']['output'];
  deleteAccountBookCategory: Scalars['Boolean']['output'];
  deleteBucketList: Scalars['Boolean']['output'];
  deleteRegularExpenditure: Scalars['Int']['output'];
  deleteTodo: Scalars['Boolean']['output'];
  updateAccountBook: AccountBook;
  updateBucketList: Scalars['Int']['output'];
  updateTodoComplete: Todo;
};


export type MutationcompleteAccountExpirationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationcompleteBucketListArgs = {
  id: Scalars['ID']['input'];
};


export type MutationcreateAccountArgs = {
  amount: Scalars['Int']['input'];
  endDate: Scalars['DateTime']['input'];
  rate: Scalars['Float']['input'];
  regularTransferDate: Scalars['Int']['input'];
  savingTypeId: Scalars['Int']['input'];
  startDate: Scalars['DateTime']['input'];
  taxType: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationcreateAccountBookArgs = {
  amount: Scalars['Int']['input'];
  categoryId: Scalars['Int']['input'];
  installmentMonth?: InputMaybe<Scalars['Int']['input']>;
  isDisabledBudget?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  registerDateTime: Scalars['DateTime']['input'];
  scheduledPaymentDay?: InputMaybe<Scalars['Int']['input']>;
  scheduledPaymentType?: InputMaybe<ScheduledPaymentType>;
  title: Scalars['String']['input'];
  type: AccountBookCategoryType;
};


export type MutationcreateAccountBookCategoryArgs = {
  accountBookCategoryImageId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  type: AccountBookCategoryType;
  useStatistic: Scalars['Boolean']['input'];
};


export type MutationcreateBucketListArgs = {
  completeDate: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  thumbImageUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  todoList?: InputMaybe<Array<TodoInput>>;
};


export type MutationcreateDepositArgs = {
  accountId: Scalars['Int']['input'];
  amount: Scalars['Int']['input'];
  depositDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MutationcreateRegularExpenditureArgs = {
  amount: Scalars['Int']['input'];
  categoryId: Scalars['Int']['input'];
  isAutoExpenditure: Scalars['Boolean']['input'];
  regularDate: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};


export type MutationcreateTodoArgs = {
  bucketListId: Scalars['Int']['input'];
  isComplete: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};


export type MutationdeleteAccountArgs = {
  id: Scalars['ID']['input'];
};


export type MutationdeleteAccountBookArgs = {
  id: Scalars['ID']['input'];
};


export type MutationdeleteAccountBookCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationdeleteBucketListArgs = {
  id: Scalars['ID']['input'];
};


export type MutationdeleteRegularExpenditureArgs = {
  id: Scalars['ID']['input'];
};


export type MutationdeleteTodoArgs = {
  todoId: Scalars['ID']['input'];
};


export type MutationupdateAccountBookArgs = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  isDisabledBudget?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  registerDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AccountBookCategoryType>;
};


export type MutationupdateBucketListArgs = {
  completeDate: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  thumbImageUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};


export type MutationupdateTodoCompleteArgs = {
  isComplete: Scalars['Boolean']['input'];
  todoId: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accountBook?: Maybe<AccountBook>;
  accountBookCategoryList?: Maybe<Array<AccountBookCategory>>;
  accountBookImageList?: Maybe<Array<AccountBookCategoryImage>>;
  accountBookList?: Maybe<Array<AccountBook>>;
  accountBookStatisticList?: Maybe<Array<Statistic>>;
  accountLastUpdatedDate: Scalars['DateTime']['output'];
  account_list?: Maybe<Array<Account>>;
  bucketList: Array<BucketListSummary>;
  bucketListDetail?: Maybe<BucketList>;
  bucketListItemLastUpdatedDate: Scalars['DateTime']['output'];
  bucketListLastUpdatedDate: Scalars['DateTime']['output'];
  mainInfo: MainInfo;
  regularExpenditureList?: Maybe<Array<CustomRegularExpenditureResponse>>;
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


export type Queryaccount_listArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerybucketListArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerybucketListDetailArgs = {
  id: Scalars['ID']['input'];
};


export type QuerybucketListItemLastUpdatedDateArgs = {
  id: Scalars['ID']['input'];
};


export type QueryregularExpenditureListArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type RegularExpenditure = {
  __typename?: 'RegularExpenditure';
  accountBookCategory: AccountBookCategory;
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

export type ScheduledPaymentType =
  | 'installment'
  | 'repeat';

export type Statistic = {
  __typename?: 'Statistic';
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
  bucketList?: Maybe<BucketList>;
  bucketListId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isComplete: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId: Scalars['Int']['output'];
};

export type TodoInput = {
  isComplete: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
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
  Account: ResolverTypeWrapper<Account>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  AccountBook: ResolverTypeWrapper<Omit<AccountBook, 'accountBookCategory' | 'type'> & { accountBookCategory: ResolversTypes['AccountBookCategory'], type: ResolversTypes['AccountBookCategoryType'] }>;
  AccountBookCategory: ResolverTypeWrapper<Omit<AccountBookCategory, 'type'> & { type: ResolversTypes['AccountBookCategoryType'] }>;
  AccountBookCategoryImage: ResolverTypeWrapper<AccountBookCategoryImage>;
  AccountBookCategoryType: ResolverTypeWrapper<'expenditure' | 'income'>;
  BucketList: ResolverTypeWrapper<Omit<BucketList, 'todoList' | 'user'> & { todoList?: Maybe<Array<ResolversTypes['Todo']>>, user?: Maybe<ResolversTypes['User']> }>;
  BucketListSummary: ResolverTypeWrapper<BucketListSummary>;
  CustomRegularExpenditure: ResolverTypeWrapper<Omit<CustomRegularExpenditure, 'accountBookCategory'> & { accountBookCategory: ResolversTypes['AccountBookCategory'] }>;
  CustomRegularExpenditureResponse: ResolverTypeWrapper<Omit<CustomRegularExpenditureResponse, 'list' | 'type'> & { list?: Maybe<Array<ResolversTypes['CustomRegularExpenditure']>>, type: ResolversTypes['AccountBookCategoryType'] }>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Deposit: ResolverTypeWrapper<Deposit>;
  MainInfo: ResolverTypeWrapper<MainInfo>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  RegularExpenditure: ResolverTypeWrapper<Omit<RegularExpenditure, 'accountBookCategory'> & { accountBookCategory: ResolversTypes['AccountBookCategory'] }>;
  SavingType: ResolverTypeWrapper<SavingType>;
  ScheduledPaymentType: ResolverTypeWrapper<'repeat' | 'installment'>;
  Statistic: ResolverTypeWrapper<Statistic>;
  StatisticItem: ResolverTypeWrapper<StatisticItem>;
  Todo: ResolverTypeWrapper<Omit<Todo, 'bucketList' | 'user'> & { bucketList?: Maybe<ResolversTypes['BucketList']>, user?: Maybe<ResolversTypes['User']> }>;
  TodoInput: TodoInput;
  User: ResolverTypeWrapper<Omit<User, 'accountBookCategories' | 'accountBooks' | 'bucketLists' | 'regularExpenditures' | 'todos'> & { accountBookCategories: Array<ResolversTypes['AccountBookCategory']>, accountBooks: Array<ResolversTypes['AccountBook']>, bucketLists: Array<ResolversTypes['BucketList']>, regularExpenditures: Array<ResolversTypes['RegularExpenditure']>, todos: Array<ResolversTypes['Todo']> }>;
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
  AccountBook: Omit<AccountBook, 'accountBookCategory'> & { accountBookCategory: ResolversParentTypes['AccountBookCategory'] };
  AccountBookCategory: AccountBookCategory;
  AccountBookCategoryImage: AccountBookCategoryImage;
  BucketList: Omit<BucketList, 'todoList' | 'user'> & { todoList?: Maybe<Array<ResolversParentTypes['Todo']>>, user?: Maybe<ResolversParentTypes['User']> };
  BucketListSummary: BucketListSummary;
  CustomRegularExpenditure: Omit<CustomRegularExpenditure, 'accountBookCategory'> & { accountBookCategory: ResolversParentTypes['AccountBookCategory'] };
  CustomRegularExpenditureResponse: Omit<CustomRegularExpenditureResponse, 'list'> & { list?: Maybe<Array<ResolversParentTypes['CustomRegularExpenditure']>> };
  DateTime: Scalars['DateTime']['output'];
  Deposit: Deposit;
  MainInfo: MainInfo;
  Mutation: Record<PropertyKey, never>;
  Query: Record<PropertyKey, never>;
  RegularExpenditure: Omit<RegularExpenditure, 'accountBookCategory'> & { accountBookCategory: ResolversParentTypes['AccountBookCategory'] };
  SavingType: SavingType;
  Statistic: Statistic;
  StatisticItem: StatisticItem;
  Todo: Omit<Todo, 'bucketList' | 'user'> & { bucketList?: Maybe<ResolversParentTypes['BucketList']>, user?: Maybe<ResolversParentTypes['User']> };
  TodoInput: TodoInput;
  User: Omit<User, 'accountBookCategories' | 'accountBooks' | 'bucketLists' | 'regularExpenditures' | 'todos'> & { accountBookCategories: Array<ResolversParentTypes['AccountBookCategory']>, accountBooks: Array<ResolversParentTypes['AccountBook']>, bucketLists: Array<ResolversParentTypes['BucketList']>, regularExpenditures: Array<ResolversParentTypes['RegularExpenditure']>, todos: Array<ResolversParentTypes['Todo']> };
  UserShareCode: UserShareCode;
};

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  currentAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  deposits?: Resolver<Maybe<Array<ResolversTypes['Deposit']>>, ParentType, ContextType>;
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
};

export type AccountBookResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountBook'] = ResolversParentTypes['AccountBook']> = {
  accountBookCategory?: Resolver<ResolversTypes['AccountBookCategory'], ParentType, ContextType>;
  accountBookCategoryId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  installmentMonth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isDisabledBudget?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isRegularExpenditure?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  memo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paidInstallmentMonth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  registerDateTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  regularDate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AccountBookCategoryType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
};

export type AccountBookCategoryImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountBookCategoryImage'] = ResolversParentTypes['AccountBookCategoryImage']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AccountBookCategoryTypeResolvers = EnumResolverSignature<{ expenditure?: any, income?: any }, ResolversTypes['AccountBookCategoryType']>;

export type BucketListResolvers<ContextType = any, ParentType extends ResolversParentTypes['BucketList'] = ResolversParentTypes['BucketList']> = {
  completeDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isComplete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  thumbImageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  todoList?: Resolver<Maybe<Array<ResolversTypes['Todo']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type BucketListSummaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['BucketListSummary'] = ResolversParentTypes['BucketListSummary']> = {
  completeDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  completeTodoCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isComplete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  thumbImageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  todoCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type CustomRegularExpenditureResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomRegularExpenditure'] = ResolversParentTypes['CustomRegularExpenditure']> = {
  accountBookCategory?: Resolver<ResolversTypes['AccountBookCategory'], ParentType, ContextType>;
  accountBookCategoryId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isAutoExpenditure?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  regularDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  regularExpenditureDay?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type CustomRegularExpenditureResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomRegularExpenditureResponse'] = ResolversParentTypes['CustomRegularExpenditureResponse']> = {
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  list?: Resolver<Maybe<Array<ResolversTypes['CustomRegularExpenditure']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AccountBookCategoryType'], ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DepositResolvers<ContextType = any, ParentType extends ResolversParentTypes['Deposit'] = ResolversParentTypes['Deposit']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  accountId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  depositDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  prevTotalAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type MainInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['MainInfo'] = ResolversParentTypes['MainInfo']> = {
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType>;
  bucketList?: Resolver<Array<ResolversTypes['BucketListSummary']>, ParentType, ContextType>;
  totalSavedAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalSavedAmountExceptCurrentMonth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  completeAccountExpiration?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationcompleteAccountExpirationArgs, 'id'>>;
  completeBucketList?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationcompleteBucketListArgs, 'id'>>;
  createAccount?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationcreateAccountArgs, 'amount' | 'endDate' | 'rate' | 'regularTransferDate' | 'savingTypeId' | 'startDate' | 'taxType' | 'title'>>;
  createAccountBook?: Resolver<ResolversTypes['AccountBook'], ParentType, ContextType, RequireFields<MutationcreateAccountBookArgs, 'amount' | 'categoryId' | 'registerDateTime' | 'title' | 'type'>>;
  createAccountBookCategory?: Resolver<ResolversTypes['AccountBookCategory'], ParentType, ContextType, RequireFields<MutationcreateAccountBookCategoryArgs, 'accountBookCategoryImageId' | 'name' | 'type' | 'useStatistic'>>;
  createBucketList?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationcreateBucketListArgs, 'completeDate' | 'description' | 'title'>>;
  createDeposit?: Resolver<ResolversTypes['Deposit'], ParentType, ContextType, RequireFields<MutationcreateDepositArgs, 'accountId' | 'amount'>>;
  createRegularExpenditure?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationcreateRegularExpenditureArgs, 'amount' | 'categoryId' | 'isAutoExpenditure' | 'regularDate' | 'title'>>;
  createTodo?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationcreateTodoArgs, 'bucketListId' | 'isComplete' | 'title'>>;
  deleteAccount?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteAccountArgs, 'id'>>;
  deleteAccountBook?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationdeleteAccountBookArgs, 'id'>>;
  deleteAccountBookCategory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteAccountBookCategoryArgs, 'id'>>;
  deleteBucketList?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteBucketListArgs, 'id'>>;
  deleteRegularExpenditure?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationdeleteRegularExpenditureArgs, 'id'>>;
  deleteTodo?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteTodoArgs, 'todoId'>>;
  updateAccountBook?: Resolver<ResolversTypes['AccountBook'], ParentType, ContextType, RequireFields<MutationupdateAccountBookArgs, 'id'>>;
  updateBucketList?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationupdateBucketListArgs, 'completeDate' | 'description' | 'id' | 'title'>>;
  updateTodoComplete?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationupdateTodoCompleteArgs, 'isComplete' | 'todoId'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountArgs, 'id'>>;
  accountBook?: Resolver<Maybe<ResolversTypes['AccountBook']>, ParentType, ContextType, RequireFields<QueryaccountBookArgs, 'id'>>;
  accountBookCategoryList?: Resolver<Maybe<Array<ResolversTypes['AccountBookCategory']>>, ParentType, ContextType>;
  accountBookImageList?: Resolver<Maybe<Array<ResolversTypes['AccountBookCategoryImage']>>, ParentType, ContextType>;
  accountBookList?: Resolver<Maybe<Array<ResolversTypes['AccountBook']>>, ParentType, ContextType, RequireFields<QueryaccountBookListArgs, 'dateTime'>>;
  accountBookStatisticList?: Resolver<Maybe<Array<ResolversTypes['Statistic']>>, ParentType, ContextType, RequireFields<QueryaccountBookStatisticListArgs, 'endDate' | 'startDate' | 'type'>>;
  accountLastUpdatedDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  account_list?: Resolver<Maybe<Array<ResolversTypes['Account']>>, ParentType, ContextType, Partial<Queryaccount_listArgs>>;
  bucketList?: Resolver<Array<ResolversTypes['BucketListSummary']>, ParentType, ContextType, Partial<QuerybucketListArgs>>;
  bucketListDetail?: Resolver<Maybe<ResolversTypes['BucketList']>, ParentType, ContextType, RequireFields<QuerybucketListDetailArgs, 'id'>>;
  bucketListItemLastUpdatedDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType, RequireFields<QuerybucketListItemLastUpdatedDateArgs, 'id'>>;
  bucketListLastUpdatedDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  mainInfo?: Resolver<ResolversTypes['MainInfo'], ParentType, ContextType>;
  regularExpenditureList?: Resolver<Maybe<Array<ResolversTypes['CustomRegularExpenditureResponse']>>, ParentType, ContextType, Partial<QueryregularExpenditureListArgs>>;
};

export type RegularExpenditureResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegularExpenditure'] = ResolversParentTypes['RegularExpenditure']> = {
  accountBookCategory?: Resolver<ResolversTypes['AccountBookCategory'], ParentType, ContextType>;
  accountBookCategoryId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isAutoExpenditure?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  regularDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type SavingTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SavingType'] = ResolversParentTypes['SavingType']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type ScheduledPaymentTypeResolvers = EnumResolverSignature<{ installment?: any, repeat?: any }, ResolversTypes['ScheduledPaymentType']>;

export type StatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['Statistic'] = ResolversParentTypes['Statistic']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  categoryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categoryName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  list?: Resolver<Maybe<Array<ResolversTypes['StatisticItem']>>, ParentType, ContextType>;
  percentage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  useStatistic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type StatisticItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['StatisticItem'] = ResolversParentTypes['StatisticItem']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  registerDateTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  bucketList?: Resolver<Maybe<ResolversTypes['BucketList']>, ParentType, ContextType>;
  bucketListId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isComplete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
};

export type UserShareCodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserShareCode'] = ResolversParentTypes['UserShareCode']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  shareCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Account?: AccountResolvers<ContextType>;
  AccountBook?: AccountBookResolvers<ContextType>;
  AccountBookCategory?: AccountBookCategoryResolvers<ContextType>;
  AccountBookCategoryImage?: AccountBookCategoryImageResolvers<ContextType>;
  AccountBookCategoryType?: AccountBookCategoryTypeResolvers;
  BucketList?: BucketListResolvers<ContextType>;
  BucketListSummary?: BucketListSummaryResolvers<ContextType>;
  CustomRegularExpenditure?: CustomRegularExpenditureResolvers<ContextType>;
  CustomRegularExpenditureResponse?: CustomRegularExpenditureResponseResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Deposit?: DepositResolvers<ContextType>;
  MainInfo?: MainInfoResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RegularExpenditure?: RegularExpenditureResolvers<ContextType>;
  SavingType?: SavingTypeResolvers<ContextType>;
  ScheduledPaymentType?: ScheduledPaymentTypeResolvers;
  Statistic?: StatisticResolvers<ContextType>;
  StatisticItem?: StatisticItemResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserShareCode?: UserShareCodeResolvers<ContextType>;
};

