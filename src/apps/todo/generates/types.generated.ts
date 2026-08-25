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

export type Mutation = {
  __typename?: 'Mutation';
  completeTodo: Todo;
  createTodo: Todo;
  createTodoCategory: TodoCategory;
  deleteTodo: Scalars['Boolean']['output'];
  deleteTodoCategory: Scalars['Boolean']['output'];
  emptyTrash: Scalars['Int']['output'];
  importTodos: TodoImportResult;
  restoreTodo: Todo;
  trashTodo: Todo;
  updateTodo: Todo;
  updateTodoCategory: TodoCategory;
};


export type MutationcompleteTodoArgs = {
  id: Scalars['String']['input'];
  isCompleted: Scalars['Boolean']['input'];
};


export type MutationcreateTodoArgs = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<TodoPriority>;
  title: Scalars['String']['input'];
};


export type MutationcreateTodoCategoryArgs = {
  name: Scalars['String']['input'];
};


export type MutationdeleteTodoArgs = {
  id: Scalars['String']['input'];
};


export type MutationdeleteTodoCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationimportTodosArgs = {
  categories: Array<ImportTodoCategoryInput>;
  todos: Array<ImportTodoInput>;
};


export type MutationrestoreTodoArgs = {
  id: Scalars['String']['input'];
};


export type MutationtrashTodoArgs = {
  id: Scalars['String']['input'];
};


export type MutationupdateTodoArgs = {
  id: Scalars['String']['input'];
  input: UpdateTodoInput;
};


export type MutationupdateTodoCategoryArgs = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  todoCategories: Array<TodoCategory>;
  todos: Array<Todo>;
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

export type TodoImportResult = {
  __typename?: 'TodoImportResult';
  categoryIdMap: Array<IdMapping>;
  todoIdMap: Array<IdMapping>;
};

export type TodoPriority =
  | 'high'
  | 'low'
  | 'medium'
  | 'none';

export type UpdateTodoInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['String']['input']>;
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
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  IdMapping: ResolverTypeWrapper<IdMapping>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  ImportTodoCategoryInput: ImportTodoCategoryInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  ImportTodoInput: ImportTodoInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Todo: ResolverTypeWrapper<Omit<Todo, 'priority'> & { priority: ResolversTypes['TodoPriority'] }>;
  TodoCategory: ResolverTypeWrapper<TodoCategory>;
  TodoImportResult: ResolverTypeWrapper<TodoImportResult>;
  TodoPriority: ResolverTypeWrapper<'none' | 'low' | 'medium' | 'high'>;
  UpdateTodoInput: UpdateTodoInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  DateTime: Scalars['DateTime']['output'];
  IdMapping: IdMapping;
  String: Scalars['String']['output'];
  ImportTodoCategoryInput: ImportTodoCategoryInput;
  Int: Scalars['Int']['output'];
  ImportTodoInput: ImportTodoInput;
  Boolean: Scalars['Boolean']['output'];
  Mutation: Record<PropertyKey, never>;
  Query: Record<PropertyKey, never>;
  Todo: Todo;
  TodoCategory: TodoCategory;
  TodoImportResult: TodoImportResult;
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
  completeTodo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationcompleteTodoArgs, 'id' | 'isCompleted'>>;
  createTodo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationcreateTodoArgs, 'title'>>;
  createTodoCategory?: Resolver<ResolversTypes['TodoCategory'], ParentType, ContextType, RequireFields<MutationcreateTodoCategoryArgs, 'name'>>;
  deleteTodo?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteTodoArgs, 'id'>>;
  deleteTodoCategory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteTodoCategoryArgs, 'id'>>;
  emptyTrash?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  importTodos?: Resolver<ResolversTypes['TodoImportResult'], ParentType, ContextType, RequireFields<MutationimportTodosArgs, 'categories' | 'todos'>>;
  restoreTodo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationrestoreTodoArgs, 'id'>>;
  trashTodo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationtrashTodoArgs, 'id'>>;
  updateTodo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationupdateTodoArgs, 'id' | 'input'>>;
  updateTodoCategory?: Resolver<ResolversTypes['TodoCategory'], ParentType, ContextType, RequireFields<MutationupdateTodoCategoryArgs, 'id' | 'name'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  todoCategories?: Resolver<Array<ResolversTypes['TodoCategory']>, ParentType, ContextType>;
  todos?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType>;
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

export type TodoImportResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoImportResult'] = ResolversParentTypes['TodoImportResult']> = {
  categoryIdMap?: Resolver<Array<ResolversTypes['IdMapping']>, ParentType, ContextType>;
  todoIdMap?: Resolver<Array<ResolversTypes['IdMapping']>, ParentType, ContextType>;
};

export type TodoPriorityResolvers = EnumResolverSignature<{ high?: any, low?: any, medium?: any, none?: any }, ResolversTypes['TodoPriority']>;

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType;
  IdMapping?: IdMappingResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
  TodoCategory?: TodoCategoryResolvers<ContextType>;
  TodoImportResult?: TodoImportResultResolvers<ContextType>;
  TodoPriority?: TodoPriorityResolvers;
};

