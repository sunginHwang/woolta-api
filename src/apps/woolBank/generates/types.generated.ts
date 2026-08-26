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
  deposits: Array<Deposit>;
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

export type AccountBookCategoryImageList = {
  __typename?: 'AccountBookCategoryImageList';
  itemList: Array<AccountBookCategoryImage>;
  totalCount: Scalars['Int']['output'];
};

export type AccountBookCategoryList = {
  __typename?: 'AccountBookCategoryList';
  itemList: Array<AccountBookCategory>;
  totalCount: Scalars['Int']['output'];
};

export type AccountBookCategoryType =
  | 'EXPENDITURE'
  | 'INCOME';

export type AccountBookList = {
  __typename?: 'AccountBookList';
  itemList: Array<AccountBook>;
  totalCount: Scalars['Int']['output'];
};

export type AccountList = {
  __typename?: 'AccountList';
  itemList: Array<Account>;
  totalCount: Scalars['Int']['output'];
};

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
  todoList: Array<BucketListTodo>;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<WoolBankUser>;
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

export type BucketListSummaryList = {
  __typename?: 'BucketListSummaryList';
  itemList: Array<BucketListSummary>;
  totalCount: Scalars['Int']['output'];
};

export type BucketListTodo = {
  __typename?: 'BucketListTodo';
  bucketList?: Maybe<BucketList>;
  bucketListId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isComplete: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<WoolBankUser>;
  userId: Scalars['Int']['output'];
};

export type BucketListTodoInput = {
  isComplete: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};

export type CompleteAccountExpirationInput = {
  id: Scalars['ID']['input'];
};

export type CompleteBucketListInput = {
  id: Scalars['ID']['input'];
};

export type CreateAccountBookCategoryInput = {
  accountBookCategoryImageId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  type: AccountBookCategoryType;
  useStatistic: Scalars['Boolean']['input'];
};

export type CreateAccountBookInput = {
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

export type CreateAccountInput = {
  amount: Scalars['Int']['input'];
  endDate: Scalars['DateTime']['input'];
  rate: Scalars['Float']['input'];
  regularTransferDate: Scalars['Int']['input'];
  savingTypeId: Scalars['Int']['input'];
  startDate: Scalars['DateTime']['input'];
  taxType: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateBucketListInput = {
  completeDate: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  thumbImageUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  todoList?: InputMaybe<Array<BucketListTodoInput>>;
};

export type CreateBucketListTodoInput = {
  bucketListId: Scalars['Int']['input'];
  isComplete: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};

export type CreateDepositInput = {
  accountId: Scalars['Int']['input'];
  amount: Scalars['Int']['input'];
  depositDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateRegularExpenditureInput = {
  amount: Scalars['Int']['input'];
  categoryId: Scalars['Int']['input'];
  isAutoExpenditure: Scalars['Boolean']['input'];
  regularDate: Scalars['Int']['input'];
  title: Scalars['String']['input'];
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

export type DeleteAccountBookCategoryInput = {
  id: Scalars['ID']['input'];
};

export type DeleteAccountBookInput = {
  id: Scalars['ID']['input'];
};

export type DeleteAccountInput = {
  id: Scalars['ID']['input'];
};

export type DeleteBucketListInput = {
  id: Scalars['ID']['input'];
};

export type DeleteBucketListTodoInput = {
  todoId: Scalars['ID']['input'];
};

export type DeleteRegularExpenditureInput = {
  id: Scalars['ID']['input'];
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
  completeAccountExpiration: Scalars['Boolean']['output'];
  completeBucketList: Scalars['Boolean']['output'];
  createAccount: Account;
  createAccountBook: AccountBook;
  createAccountBookCategory: AccountBookCategory;
  createBucketList: BucketList;
  createBucketListTodo: BucketListTodo;
  createDeposit: Deposit;
  createRegularExpenditure: RegularExpenditure;
  deleteAccount: Scalars['Boolean']['output'];
  deleteAccountBook: Scalars['Boolean']['output'];
  deleteAccountBookCategory: Scalars['Boolean']['output'];
  deleteBucketList: Scalars['Boolean']['output'];
  deleteBucketListTodo: Scalars['Boolean']['output'];
  deleteRegularExpenditure: Scalars['Boolean']['output'];
  updateAccountBook: AccountBook;
  updateBucketList: BucketList;
  updateBucketListTodoComplete: BucketListTodo;
};


export type MutationcompleteAccountExpirationArgs = {
  input: CompleteAccountExpirationInput;
};


export type MutationcompleteBucketListArgs = {
  input: CompleteBucketListInput;
};


export type MutationcreateAccountArgs = {
  input: CreateAccountInput;
};


export type MutationcreateAccountBookArgs = {
  input: CreateAccountBookInput;
};


export type MutationcreateAccountBookCategoryArgs = {
  input: CreateAccountBookCategoryInput;
};


export type MutationcreateBucketListArgs = {
  input: CreateBucketListInput;
};


export type MutationcreateBucketListTodoArgs = {
  input: CreateBucketListTodoInput;
};


export type MutationcreateDepositArgs = {
  input: CreateDepositInput;
};


export type MutationcreateRegularExpenditureArgs = {
  input: CreateRegularExpenditureInput;
};


export type MutationdeleteAccountArgs = {
  input: DeleteAccountInput;
};


export type MutationdeleteAccountBookArgs = {
  input: DeleteAccountBookInput;
};


export type MutationdeleteAccountBookCategoryArgs = {
  input: DeleteAccountBookCategoryInput;
};


export type MutationdeleteBucketListArgs = {
  input: DeleteBucketListInput;
};


export type MutationdeleteBucketListTodoArgs = {
  input: DeleteBucketListTodoInput;
};


export type MutationdeleteRegularExpenditureArgs = {
  input: DeleteRegularExpenditureInput;
};


export type MutationupdateAccountBookArgs = {
  input: UpdateAccountBookInput;
};


export type MutationupdateBucketListArgs = {
  input: UpdateBucketListInput;
};


export type MutationupdateBucketListTodoCompleteArgs = {
  input: UpdateBucketListTodoCompleteInput;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accountBook?: Maybe<AccountBook>;
  accountBookCategoryImageList: AccountBookCategoryImageList;
  accountBookCategoryList: AccountBookCategoryList;
  accountBookList: AccountBookList;
  accountList: AccountList;
  bucketList?: Maybe<BucketList>;
  bucketListSummaryList: BucketListSummaryList;
  getAccountBookStatisticList: StatisticList;
  getAccountLastUpdatedDate: Scalars['DateTime']['output'];
  getBucketListItemLastUpdatedDate: Scalars['DateTime']['output'];
  getBucketListLastUpdatedDate: Scalars['DateTime']['output'];
  mainInfo: MainInfo;
  regularExpenditureGroupList: RegularExpenditureGroupList;
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


export type QueryaccountListArgs = {
  limitCount?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerybucketListArgs = {
  id: Scalars['ID']['input'];
};


export type QuerybucketListSummaryListArgs = {
  limitCount?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerygetAccountBookStatisticListArgs = {
  endDate: Scalars['DateTime']['input'];
  startDate: Scalars['DateTime']['input'];
  type: AccountBookCategoryType;
};


export type QuerygetBucketListItemLastUpdatedDateArgs = {
  id: Scalars['ID']['input'];
};


export type QueryregularExpenditureGroupListArgs = {
  limitCount?: InputMaybe<Scalars['Int']['input']>;
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

export type RegularExpenditureGroup = {
  __typename?: 'RegularExpenditureGroup';
  imageUrl: Scalars['String']['output'];
  list: Array<CustomRegularExpenditure>;
  name: Scalars['String']['output'];
  type: AccountBookCategoryType;
};

export type RegularExpenditureGroupList = {
  __typename?: 'RegularExpenditureGroupList';
  itemList: Array<RegularExpenditureGroup>;
  totalCount: Scalars['Int']['output'];
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
  | 'INSTALLMENT'
  | 'REPEAT';

export type Statistic = {
  __typename?: 'Statistic';
  amount: Scalars['Int']['output'];
  categoryId: Scalars['String']['output'];
  categoryName: Scalars['String']['output'];
  list: Array<StatisticItem>;
  percentage: Scalars['Float']['output'];
  useStatistic: Scalars['Boolean']['output'];
};

export type StatisticItem = {
  __typename?: 'StatisticItem';
  amount: Scalars['Int']['output'];
  registerDateTime: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
};

export type StatisticList = {
  __typename?: 'StatisticList';
  itemList: Array<Statistic>;
  totalCount: Scalars['Int']['output'];
};

export type UpdateAccountBookInput = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  isDisabledBudget?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  registerDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AccountBookCategoryType>;
};

export type UpdateBucketListInput = {
  completeDate: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  thumbImageUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type UpdateBucketListTodoCompleteInput = {
  isComplete: Scalars['Boolean']['input'];
  todoId: Scalars['ID']['input'];
};

export type UserShareCode = {
  __typename?: 'UserShareCode';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  shareCode: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type WoolBankUser = {
  __typename?: 'WoolBankUser';
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
  profileImg: Scalars['String']['output'];
  regularExpenditures: Array<RegularExpenditure>;
  socialId: Scalars['String']['output'];
  todos: Array<BucketListTodo>;
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
  Account: ResolverTypeWrapper<Account>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  AccountBook: ResolverTypeWrapper<Omit<AccountBook, 'accountBookCategory' | 'type'> & { accountBookCategory: ResolversTypes['AccountBookCategory'], type: ResolversTypes['AccountBookCategoryType'] }>;
  AccountBookCategory: ResolverTypeWrapper<Omit<AccountBookCategory, 'type'> & { type: ResolversTypes['AccountBookCategoryType'] }>;
  AccountBookCategoryImage: ResolverTypeWrapper<AccountBookCategoryImage>;
  AccountBookCategoryImageList: ResolverTypeWrapper<AccountBookCategoryImageList>;
  AccountBookCategoryList: ResolverTypeWrapper<Omit<AccountBookCategoryList, 'itemList'> & { itemList: Array<ResolversTypes['AccountBookCategory']> }>;
  AccountBookCategoryType: ResolverTypeWrapper<'EXPENDITURE' | 'INCOME'>;
  AccountBookList: ResolverTypeWrapper<Omit<AccountBookList, 'itemList'> & { itemList: Array<ResolversTypes['AccountBook']> }>;
  AccountList: ResolverTypeWrapper<AccountList>;
  BucketList: ResolverTypeWrapper<Omit<BucketList, 'todoList' | 'user'> & { todoList: Array<ResolversTypes['BucketListTodo']>, user?: Maybe<ResolversTypes['WoolBankUser']> }>;
  BucketListSummary: ResolverTypeWrapper<BucketListSummary>;
  BucketListSummaryList: ResolverTypeWrapper<BucketListSummaryList>;
  BucketListTodo: ResolverTypeWrapper<Omit<BucketListTodo, 'bucketList' | 'user'> & { bucketList?: Maybe<ResolversTypes['BucketList']>, user?: Maybe<ResolversTypes['WoolBankUser']> }>;
  BucketListTodoInput: BucketListTodoInput;
  CompleteAccountExpirationInput: CompleteAccountExpirationInput;
  CompleteBucketListInput: CompleteBucketListInput;
  CreateAccountBookCategoryInput: CreateAccountBookCategoryInput;
  CreateAccountBookInput: CreateAccountBookInput;
  CreateAccountInput: CreateAccountInput;
  CreateBucketListInput: CreateBucketListInput;
  CreateBucketListTodoInput: CreateBucketListTodoInput;
  CreateDepositInput: CreateDepositInput;
  CreateRegularExpenditureInput: CreateRegularExpenditureInput;
  CustomRegularExpenditure: ResolverTypeWrapper<Omit<CustomRegularExpenditure, 'accountBookCategory'> & { accountBookCategory: ResolversTypes['AccountBookCategory'] }>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DeleteAccountBookCategoryInput: DeleteAccountBookCategoryInput;
  DeleteAccountBookInput: DeleteAccountBookInput;
  DeleteAccountInput: DeleteAccountInput;
  DeleteBucketListInput: DeleteBucketListInput;
  DeleteBucketListTodoInput: DeleteBucketListTodoInput;
  DeleteRegularExpenditureInput: DeleteRegularExpenditureInput;
  Deposit: ResolverTypeWrapper<Deposit>;
  MainInfo: ResolverTypeWrapper<MainInfo>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  RegularExpenditure: ResolverTypeWrapper<Omit<RegularExpenditure, 'accountBookCategory'> & { accountBookCategory: ResolversTypes['AccountBookCategory'] }>;
  RegularExpenditureGroup: ResolverTypeWrapper<Omit<RegularExpenditureGroup, 'list' | 'type'> & { list: Array<ResolversTypes['CustomRegularExpenditure']>, type: ResolversTypes['AccountBookCategoryType'] }>;
  RegularExpenditureGroupList: ResolverTypeWrapper<Omit<RegularExpenditureGroupList, 'itemList'> & { itemList: Array<ResolversTypes['RegularExpenditureGroup']> }>;
  SavingType: ResolverTypeWrapper<SavingType>;
  ScheduledPaymentType: ResolverTypeWrapper<'REPEAT' | 'INSTALLMENT'>;
  Statistic: ResolverTypeWrapper<Statistic>;
  StatisticItem: ResolverTypeWrapper<StatisticItem>;
  StatisticList: ResolverTypeWrapper<StatisticList>;
  UpdateAccountBookInput: UpdateAccountBookInput;
  UpdateBucketListInput: UpdateBucketListInput;
  UpdateBucketListTodoCompleteInput: UpdateBucketListTodoCompleteInput;
  UserShareCode: ResolverTypeWrapper<UserShareCode>;
  WoolBankUser: ResolverTypeWrapper<Omit<WoolBankUser, 'accountBookCategories' | 'accountBooks' | 'bucketLists' | 'regularExpenditures' | 'todos'> & { accountBookCategories: Array<ResolversTypes['AccountBookCategory']>, accountBooks: Array<ResolversTypes['AccountBook']>, bucketLists: Array<ResolversTypes['BucketList']>, regularExpenditures: Array<ResolversTypes['RegularExpenditure']>, todos: Array<ResolversTypes['BucketListTodo']> }>;
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
  AccountBookCategoryImageList: AccountBookCategoryImageList;
  AccountBookCategoryList: Omit<AccountBookCategoryList, 'itemList'> & { itemList: Array<ResolversParentTypes['AccountBookCategory']> };
  AccountBookList: Omit<AccountBookList, 'itemList'> & { itemList: Array<ResolversParentTypes['AccountBook']> };
  AccountList: AccountList;
  BucketList: Omit<BucketList, 'todoList' | 'user'> & { todoList: Array<ResolversParentTypes['BucketListTodo']>, user?: Maybe<ResolversParentTypes['WoolBankUser']> };
  BucketListSummary: BucketListSummary;
  BucketListSummaryList: BucketListSummaryList;
  BucketListTodo: Omit<BucketListTodo, 'bucketList' | 'user'> & { bucketList?: Maybe<ResolversParentTypes['BucketList']>, user?: Maybe<ResolversParentTypes['WoolBankUser']> };
  BucketListTodoInput: BucketListTodoInput;
  CompleteAccountExpirationInput: CompleteAccountExpirationInput;
  CompleteBucketListInput: CompleteBucketListInput;
  CreateAccountBookCategoryInput: CreateAccountBookCategoryInput;
  CreateAccountBookInput: CreateAccountBookInput;
  CreateAccountInput: CreateAccountInput;
  CreateBucketListInput: CreateBucketListInput;
  CreateBucketListTodoInput: CreateBucketListTodoInput;
  CreateDepositInput: CreateDepositInput;
  CreateRegularExpenditureInput: CreateRegularExpenditureInput;
  CustomRegularExpenditure: Omit<CustomRegularExpenditure, 'accountBookCategory'> & { accountBookCategory: ResolversParentTypes['AccountBookCategory'] };
  DateTime: Scalars['DateTime']['output'];
  DeleteAccountBookCategoryInput: DeleteAccountBookCategoryInput;
  DeleteAccountBookInput: DeleteAccountBookInput;
  DeleteAccountInput: DeleteAccountInput;
  DeleteBucketListInput: DeleteBucketListInput;
  DeleteBucketListTodoInput: DeleteBucketListTodoInput;
  DeleteRegularExpenditureInput: DeleteRegularExpenditureInput;
  Deposit: Deposit;
  MainInfo: MainInfo;
  Mutation: Record<PropertyKey, never>;
  Query: Record<PropertyKey, never>;
  RegularExpenditure: Omit<RegularExpenditure, 'accountBookCategory'> & { accountBookCategory: ResolversParentTypes['AccountBookCategory'] };
  RegularExpenditureGroup: Omit<RegularExpenditureGroup, 'list'> & { list: Array<ResolversParentTypes['CustomRegularExpenditure']> };
  RegularExpenditureGroupList: Omit<RegularExpenditureGroupList, 'itemList'> & { itemList: Array<ResolversParentTypes['RegularExpenditureGroup']> };
  SavingType: SavingType;
  Statistic: Statistic;
  StatisticItem: StatisticItem;
  StatisticList: StatisticList;
  UpdateAccountBookInput: UpdateAccountBookInput;
  UpdateBucketListInput: UpdateBucketListInput;
  UpdateBucketListTodoCompleteInput: UpdateBucketListTodoCompleteInput;
  UserShareCode: UserShareCode;
  WoolBankUser: Omit<WoolBankUser, 'accountBookCategories' | 'accountBooks' | 'bucketLists' | 'regularExpenditures' | 'todos'> & { accountBookCategories: Array<ResolversParentTypes['AccountBookCategory']>, accountBooks: Array<ResolversParentTypes['AccountBook']>, bucketLists: Array<ResolversParentTypes['BucketList']>, regularExpenditures: Array<ResolversParentTypes['RegularExpenditure']>, todos: Array<ResolversParentTypes['BucketListTodo']> };
};

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  currentAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  deposits?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType>;
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

export type AccountBookCategoryImageListResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountBookCategoryImageList'] = ResolversParentTypes['AccountBookCategoryImageList']> = {
  itemList?: Resolver<Array<ResolversTypes['AccountBookCategoryImage']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AccountBookCategoryListResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountBookCategoryList'] = ResolversParentTypes['AccountBookCategoryList']> = {
  itemList?: Resolver<Array<ResolversTypes['AccountBookCategory']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AccountBookCategoryTypeResolvers = EnumResolverSignature<{ EXPENDITURE?: any, INCOME?: any }, ResolversTypes['AccountBookCategoryType']>;

export type AccountBookListResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountBookList'] = ResolversParentTypes['AccountBookList']> = {
  itemList?: Resolver<Array<ResolversTypes['AccountBook']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type AccountListResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountList'] = ResolversParentTypes['AccountList']> = {
  itemList?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type BucketListResolvers<ContextType = any, ParentType extends ResolversParentTypes['BucketList'] = ResolversParentTypes['BucketList']> = {
  completeDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isComplete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  thumbImageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  todoList?: Resolver<Array<ResolversTypes['BucketListTodo']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['WoolBankUser']>, ParentType, ContextType>;
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

export type BucketListSummaryListResolvers<ContextType = any, ParentType extends ResolversParentTypes['BucketListSummaryList'] = ResolversParentTypes['BucketListSummaryList']> = {
  itemList?: Resolver<Array<ResolversTypes['BucketListSummary']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type BucketListTodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['BucketListTodo'] = ResolversParentTypes['BucketListTodo']> = {
  bucketList?: Resolver<Maybe<ResolversTypes['BucketList']>, ParentType, ContextType>;
  bucketListId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isComplete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['WoolBankUser']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  completeAccountExpiration?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationcompleteAccountExpirationArgs, 'input'>>;
  completeBucketList?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationcompleteBucketListArgs, 'input'>>;
  createAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationcreateAccountArgs, 'input'>>;
  createAccountBook?: Resolver<ResolversTypes['AccountBook'], ParentType, ContextType, RequireFields<MutationcreateAccountBookArgs, 'input'>>;
  createAccountBookCategory?: Resolver<ResolversTypes['AccountBookCategory'], ParentType, ContextType, RequireFields<MutationcreateAccountBookCategoryArgs, 'input'>>;
  createBucketList?: Resolver<ResolversTypes['BucketList'], ParentType, ContextType, RequireFields<MutationcreateBucketListArgs, 'input'>>;
  createBucketListTodo?: Resolver<ResolversTypes['BucketListTodo'], ParentType, ContextType, RequireFields<MutationcreateBucketListTodoArgs, 'input'>>;
  createDeposit?: Resolver<ResolversTypes['Deposit'], ParentType, ContextType, RequireFields<MutationcreateDepositArgs, 'input'>>;
  createRegularExpenditure?: Resolver<ResolversTypes['RegularExpenditure'], ParentType, ContextType, RequireFields<MutationcreateRegularExpenditureArgs, 'input'>>;
  deleteAccount?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteAccountArgs, 'input'>>;
  deleteAccountBook?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteAccountBookArgs, 'input'>>;
  deleteAccountBookCategory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteAccountBookCategoryArgs, 'input'>>;
  deleteBucketList?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteBucketListArgs, 'input'>>;
  deleteBucketListTodo?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteBucketListTodoArgs, 'input'>>;
  deleteRegularExpenditure?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteRegularExpenditureArgs, 'input'>>;
  updateAccountBook?: Resolver<ResolversTypes['AccountBook'], ParentType, ContextType, RequireFields<MutationupdateAccountBookArgs, 'input'>>;
  updateBucketList?: Resolver<ResolversTypes['BucketList'], ParentType, ContextType, RequireFields<MutationupdateBucketListArgs, 'input'>>;
  updateBucketListTodoComplete?: Resolver<ResolversTypes['BucketListTodo'], ParentType, ContextType, RequireFields<MutationupdateBucketListTodoCompleteArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountArgs, 'id'>>;
  accountBook?: Resolver<Maybe<ResolversTypes['AccountBook']>, ParentType, ContextType, RequireFields<QueryaccountBookArgs, 'id'>>;
  accountBookCategoryImageList?: Resolver<ResolversTypes['AccountBookCategoryImageList'], ParentType, ContextType>;
  accountBookCategoryList?: Resolver<ResolversTypes['AccountBookCategoryList'], ParentType, ContextType>;
  accountBookList?: Resolver<ResolversTypes['AccountBookList'], ParentType, ContextType, RequireFields<QueryaccountBookListArgs, 'dateTime'>>;
  accountList?: Resolver<ResolversTypes['AccountList'], ParentType, ContextType, Partial<QueryaccountListArgs>>;
  bucketList?: Resolver<Maybe<ResolversTypes['BucketList']>, ParentType, ContextType, RequireFields<QuerybucketListArgs, 'id'>>;
  bucketListSummaryList?: Resolver<ResolversTypes['BucketListSummaryList'], ParentType, ContextType, Partial<QuerybucketListSummaryListArgs>>;
  getAccountBookStatisticList?: Resolver<ResolversTypes['StatisticList'], ParentType, ContextType, RequireFields<QuerygetAccountBookStatisticListArgs, 'endDate' | 'startDate' | 'type'>>;
  getAccountLastUpdatedDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  getBucketListItemLastUpdatedDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType, RequireFields<QuerygetBucketListItemLastUpdatedDateArgs, 'id'>>;
  getBucketListLastUpdatedDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  mainInfo?: Resolver<ResolversTypes['MainInfo'], ParentType, ContextType>;
  regularExpenditureGroupList?: Resolver<ResolversTypes['RegularExpenditureGroupList'], ParentType, ContextType, Partial<QueryregularExpenditureGroupListArgs>>;
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

export type RegularExpenditureGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegularExpenditureGroup'] = ResolversParentTypes['RegularExpenditureGroup']> = {
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  list?: Resolver<Array<ResolversTypes['CustomRegularExpenditure']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AccountBookCategoryType'], ParentType, ContextType>;
};

export type RegularExpenditureGroupListResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegularExpenditureGroupList'] = ResolversParentTypes['RegularExpenditureGroupList']> = {
  itemList?: Resolver<Array<ResolversTypes['RegularExpenditureGroup']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type SavingTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SavingType'] = ResolversParentTypes['SavingType']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type ScheduledPaymentTypeResolvers = EnumResolverSignature<{ INSTALLMENT?: any, REPEAT?: any }, ResolversTypes['ScheduledPaymentType']>;

export type StatisticResolvers<ContextType = any, ParentType extends ResolversParentTypes['Statistic'] = ResolversParentTypes['Statistic']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  categoryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categoryName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  list?: Resolver<Array<ResolversTypes['StatisticItem']>, ParentType, ContextType>;
  percentage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  useStatistic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type StatisticItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['StatisticItem'] = ResolversParentTypes['StatisticItem']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  registerDateTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type StatisticListResolvers<ContextType = any, ParentType extends ResolversParentTypes['StatisticList'] = ResolversParentTypes['StatisticList']> = {
  itemList?: Resolver<Array<ResolversTypes['Statistic']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type UserShareCodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserShareCode'] = ResolversParentTypes['UserShareCode']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  shareCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type WoolBankUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['WoolBankUser'] = ResolversParentTypes['WoolBankUser']> = {
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
  profileImg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  regularExpenditures?: Resolver<Array<ResolversTypes['RegularExpenditure']>, ParentType, ContextType>;
  socialId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  todos?: Resolver<Array<ResolversTypes['BucketListTodo']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Account?: AccountResolvers<ContextType>;
  AccountBook?: AccountBookResolvers<ContextType>;
  AccountBookCategory?: AccountBookCategoryResolvers<ContextType>;
  AccountBookCategoryImage?: AccountBookCategoryImageResolvers<ContextType>;
  AccountBookCategoryImageList?: AccountBookCategoryImageListResolvers<ContextType>;
  AccountBookCategoryList?: AccountBookCategoryListResolvers<ContextType>;
  AccountBookCategoryType?: AccountBookCategoryTypeResolvers;
  AccountBookList?: AccountBookListResolvers<ContextType>;
  AccountList?: AccountListResolvers<ContextType>;
  BucketList?: BucketListResolvers<ContextType>;
  BucketListSummary?: BucketListSummaryResolvers<ContextType>;
  BucketListSummaryList?: BucketListSummaryListResolvers<ContextType>;
  BucketListTodo?: BucketListTodoResolvers<ContextType>;
  CustomRegularExpenditure?: CustomRegularExpenditureResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Deposit?: DepositResolvers<ContextType>;
  MainInfo?: MainInfoResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RegularExpenditure?: RegularExpenditureResolvers<ContextType>;
  RegularExpenditureGroup?: RegularExpenditureGroupResolvers<ContextType>;
  RegularExpenditureGroupList?: RegularExpenditureGroupListResolvers<ContextType>;
  SavingType?: SavingTypeResolvers<ContextType>;
  ScheduledPaymentType?: ScheduledPaymentTypeResolvers;
  Statistic?: StatisticResolvers<ContextType>;
  StatisticItem?: StatisticItemResolvers<ContextType>;
  StatisticList?: StatisticListResolvers<ContextType>;
  UserShareCode?: UserShareCodeResolvers<ContextType>;
  WoolBankUser?: WoolBankUserResolvers<ContextType>;
};

