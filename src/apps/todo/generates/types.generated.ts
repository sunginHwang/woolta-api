import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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

export type CompleteTodoInput = {
  id: Scalars['String']['input'];
  isCompleted: Scalars['Boolean']['input'];
};

export type CreateTodoCategoryInput = {
  name: Scalars['String']['input'];
};

export type CreateTodoInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<TodoPriority>;
  title: Scalars['String']['input'];
};

export type DeleteTodoCategoryInput = {
  id: Scalars['String']['input'];
};

export type DeleteTodoInput = {
  id: Scalars['String']['input'];
};

export type IdMapping = {
  __typename?: 'IdMapping';
  from: Scalars['String']['output'];
  to: Scalars['String']['output'];
};

export type ImportTodoCategoryInput = {
  clientId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  order: Scalars['Int']['input'];
};

export type ImportTodoInput = {
  categoryClientId?: InputMaybe<Scalars['String']['input']>;
  clientId: Scalars['String']['input'];
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  dueDate?: InputMaybe<Scalars['String']['input']>;
  isCompleted: Scalars['Boolean']['input'];
  memo: Scalars['String']['input'];
  order: Scalars['Int']['input'];
  priority: TodoPriority;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ImportTodoListInput = {
  categoryList: Array<ImportTodoCategoryInput>;
  itemList: Array<ImportTodoInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  completeTodo: Todo;
  createTodo: Todo;
  createTodoCategory: TodoCategory;
  deleteTodo: Scalars['Boolean']['output'];
  deleteTodoCategory: Scalars['Boolean']['output'];
  emptyTrash: Scalars['Boolean']['output'];
  importTodoList: TodoImportResult;
  restoreTodo: Todo;
  trashTodo: Todo;
  updateTodo: Todo;
  updateTodoCategory: TodoCategory;
};


export type MutationcompleteTodoArgs = {
  input: CompleteTodoInput;
};


export type MutationcreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationcreateTodoCategoryArgs = {
  input: CreateTodoCategoryInput;
};


export type MutationdeleteTodoArgs = {
  input: DeleteTodoInput;
};


export type MutationdeleteTodoCategoryArgs = {
  input: DeleteTodoCategoryInput;
};


export type MutationimportTodoListArgs = {
  input: ImportTodoListInput;
};


export type MutationrestoreTodoArgs = {
  input: RestoreTodoInput;
};


export type MutationtrashTodoArgs = {
  input: TrashTodoInput;
};


export type MutationupdateTodoArgs = {
  input: UpdateTodoInput;
};


export type MutationupdateTodoCategoryArgs = {
  input: UpdateTodoCategoryInput;
};

export type Query = {
  __typename?: 'Query';
  todoCategoryList: TodoCategoryList;
  todoList: TodoList;
};

export type RestoreTodoInput = {
  id: Scalars['String']['input'];
};

export type Todo = {
  __typename?: 'Todo';
  categoryId?: Maybe<Scalars['String']['output']>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  dueDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isCompleted: Scalars['Boolean']['output'];
  memo: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  priority: TodoPriority;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TodoCategory = {
  __typename?: 'TodoCategory';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
};

export type TodoCategoryList = {
  __typename?: 'TodoCategoryList';
  itemList: Array<TodoCategory>;
  totalCount: Scalars['Int']['output'];
};

export type TodoImportResult = {
  __typename?: 'TodoImportResult';
  categoryIdMap: Array<IdMapping>;
  todoIdMap: Array<IdMapping>;
};

export type TodoList = {
  __typename?: 'TodoList';
  itemList: Array<Todo>;
  totalCount: Scalars['Int']['output'];
};

export type TodoPriority =
  | 'HIGH'
  | 'LOW'
  | 'MEDIUM'
  | 'NONE';

export type TrashTodoInput = {
  id: Scalars['String']['input'];
};

export type UpdateTodoCategoryInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpdateTodoInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  memo?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<TodoPriority>;
  title?: InputMaybe<Scalars['String']['input']>;
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
  CompleteTodoInput: CompleteTodoInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateTodoCategoryInput: CreateTodoCategoryInput;
  CreateTodoInput: CreateTodoInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DeleteTodoCategoryInput: DeleteTodoCategoryInput;
  DeleteTodoInput: DeleteTodoInput;
  IdMapping: ResolverTypeWrapper<IdMapping>;
  ImportTodoCategoryInput: ImportTodoCategoryInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  ImportTodoInput: ImportTodoInput;
  ImportTodoListInput: ImportTodoListInput;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  RestoreTodoInput: RestoreTodoInput;
  Todo: ResolverTypeWrapper<Omit<Todo, 'priority'> & { priority: ResolversTypes['TodoPriority'] }>;
  TodoCategory: ResolverTypeWrapper<TodoCategory>;
  TodoCategoryList: ResolverTypeWrapper<TodoCategoryList>;
  TodoImportResult: ResolverTypeWrapper<TodoImportResult>;
  TodoList: ResolverTypeWrapper<Omit<TodoList, 'itemList'> & { itemList: Array<ResolversTypes['Todo']> }>;
  TodoPriority: ResolverTypeWrapper<'NONE' | 'LOW' | 'MEDIUM' | 'HIGH'>;
  TrashTodoInput: TrashTodoInput;
  UpdateTodoCategoryInput: UpdateTodoCategoryInput;
  UpdateTodoInput: UpdateTodoInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  CompleteTodoInput: CompleteTodoInput;
  String: Scalars['String']['output'];
  Boolean: Scalars['Boolean']['output'];
  CreateTodoCategoryInput: CreateTodoCategoryInput;
  CreateTodoInput: CreateTodoInput;
  DateTime: Scalars['DateTime']['output'];
  DeleteTodoCategoryInput: DeleteTodoCategoryInput;
  DeleteTodoInput: DeleteTodoInput;
  IdMapping: IdMapping;
  ImportTodoCategoryInput: ImportTodoCategoryInput;
  Int: Scalars['Int']['output'];
  ImportTodoInput: ImportTodoInput;
  ImportTodoListInput: ImportTodoListInput;
  Mutation: Record<PropertyKey, never>;
  Query: Record<PropertyKey, never>;
  RestoreTodoInput: RestoreTodoInput;
  Todo: Todo;
  TodoCategory: TodoCategory;
  TodoCategoryList: TodoCategoryList;
  TodoImportResult: TodoImportResult;
  TodoList: Omit<TodoList, 'itemList'> & { itemList: Array<ResolversParentTypes['Todo']> };
  TrashTodoInput: TrashTodoInput;
  UpdateTodoCategoryInput: UpdateTodoCategoryInput;
  UpdateTodoInput: UpdateTodoInput;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type IdMappingResolvers<ContextType = any, ParentType extends ResolversParentTypes['IdMapping'] = ResolversParentTypes['IdMapping']> = {
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  completeTodo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationcompleteTodoArgs, 'input'>>;
  createTodo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationcreateTodoArgs, 'input'>>;
  createTodoCategory?: Resolver<ResolversTypes['TodoCategory'], ParentType, ContextType, RequireFields<MutationcreateTodoCategoryArgs, 'input'>>;
  deleteTodo?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteTodoArgs, 'input'>>;
  deleteTodoCategory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteTodoCategoryArgs, 'input'>>;
  emptyTrash?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  importTodoList?: Resolver<ResolversTypes['TodoImportResult'], ParentType, ContextType, RequireFields<MutationimportTodoListArgs, 'input'>>;
  restoreTodo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationrestoreTodoArgs, 'input'>>;
  trashTodo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationtrashTodoArgs, 'input'>>;
  updateTodo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationupdateTodoArgs, 'input'>>;
  updateTodoCategory?: Resolver<ResolversTypes['TodoCategory'], ParentType, ContextType, RequireFields<MutationupdateTodoCategoryArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  todoCategoryList?: Resolver<ResolversTypes['TodoCategoryList'], ParentType, ContextType>;
  todoList?: Resolver<ResolversTypes['TodoList'], ParentType, ContextType>;
};

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  categoryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  completedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  dueDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isCompleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  memo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  priority?: Resolver<ResolversTypes['TodoPriority'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type TodoCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoCategory'] = ResolversParentTypes['TodoCategory']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type TodoCategoryListResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoCategoryList'] = ResolversParentTypes['TodoCategoryList']> = {
  itemList?: Resolver<Array<ResolversTypes['TodoCategory']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type TodoImportResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoImportResult'] = ResolversParentTypes['TodoImportResult']> = {
  categoryIdMap?: Resolver<Array<ResolversTypes['IdMapping']>, ParentType, ContextType>;
  todoIdMap?: Resolver<Array<ResolversTypes['IdMapping']>, ParentType, ContextType>;
};

export type TodoListResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoList'] = ResolversParentTypes['TodoList']> = {
  itemList?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type TodoPriorityResolvers = EnumResolverSignature<{ HIGH?: any, LOW?: any, MEDIUM?: any, NONE?: any }, ResolversTypes['TodoPriority']>;

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType;
  IdMapping?: IdMappingResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
  TodoCategory?: TodoCategoryResolvers<ContextType>;
  TodoCategoryList?: TodoCategoryListResolvers<ContextType>;
  TodoImportResult?: TodoImportResultResolvers<ContextType>;
  TodoList?: TodoListResolvers<ContextType>;
  TodoPriority?: TodoPriorityResolvers;
};

