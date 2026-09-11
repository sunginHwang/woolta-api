import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
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

/**
 * 일정. startAt/endAt 은 UTC 로 오가고 표시 시간대 변환은 클라이언트가 한다.
 * endAt 은 exclusive — 종일 일정 8/1 하루는 endAt = 8/2 00:00 (FullCalendar 종일 end 규약과 동일).
 */
export type CalendarEvent = {
  __typename?: 'CalendarEvent';
  /** UI 색상 토큰 키. null 이면 기본색 */
  color?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  endAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  isAllDay: Scalars['Boolean']['output'];
  /** 내가 소유한 일정인지. false 면 읽기 전용(공유는 읽기 전용이다) */
  isMine: Scalars['Boolean']['output'];
  /** 소유자 — 공유받은 일정은 내 일정과 구분해 표시해야 한다 */
  owner: CalendarUser;
  startAt: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CalendarEventList = {
  __typename?: 'CalendarEventList';
  itemList: Array<CalendarEvent>;
  totalCount: Scalars['Int']['output'];
};

export type CalendarEventRangeInput = {
  /** 조회 끝 (exclusive) */
  endAt: Scalars['DateTime']['input'];
  /** 조회 시작 (inclusive) */
  startAt: Scalars['DateTime']['input'];
};

/**
 * 공유 관계 1행. 양방향이라 수락되면 두 사람이 서로의 일정을 본다(읽기 전용).
 * counterpart 는 항상 '나' 의 반대편이고, isOutgoing 으로 내가 보낸 초대인지 구분한다.
 */
export type CalendarShare = {
  __typename?: 'CalendarShare';
  counterpart: CalendarUser;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  /** 내가 보낸 초대인지 여부. false 면 내가 받은 초대(= 내가 수락/거절 권한자) */
  isOutgoing: Scalars['Boolean']['output'];
  respondedAt?: Maybe<Scalars['DateTime']['output']>;
  status: CalendarShareStatus;
};

export type CalendarShareList = {
  __typename?: 'CalendarShareList';
  itemList: Array<CalendarShare>;
  totalCount: Scalars['Int']['output'];
};

export type CalendarShareStatus =
  | 'ACCEPTED'
  | 'DECLINED'
  | 'PENDING';

/** 공유 상대/소유자 표시에 필요한 최소 사용자 정보 */
export type CalendarUser = {
  __typename?: 'CalendarUser';
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  profileImg: Scalars['String']['output'];
};

/**
 * 공유 해제/취소. 대기 중 초대는 보낸 사람이 취소하고,
 * 수락된 공유는 양쪽 누구나 해제할 수 있다.
 */
export type CancelCalendarShareInput = {
  id: Scalars['Int']['input'];
};

export type CreateCalendarEventInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endAt: Scalars['DateTime']['input'];
  isAllDay?: InputMaybe<Scalars['Boolean']['input']>;
  startAt: Scalars['DateTime']['input'];
  title: Scalars['String']['input'];
};

export type DeleteCalendarEventInput = {
  id: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  cancelCalendarShare: Scalars['Boolean']['output'];
  createCalendarEvent: CalendarEvent;
  deleteCalendarEvent: Scalars['Boolean']['output'];
  requestCalendarShare: RequestCalendarShareResult;
  respondCalendarShare: CalendarShare;
  updateCalendarEvent: CalendarEvent;
};


export type MutationcancelCalendarShareArgs = {
  input: CancelCalendarShareInput;
};


export type MutationcreateCalendarEventArgs = {
  input: CreateCalendarEventInput;
};


export type MutationdeleteCalendarEventArgs = {
  input: DeleteCalendarEventInput;
};


export type MutationrequestCalendarShareArgs = {
  input: RequestCalendarShareInput;
};


export type MutationrespondCalendarShareArgs = {
  input: RespondCalendarShareInput;
};


export type MutationupdateCalendarEventArgs = {
  input: UpdateCalendarEventInput;
};

export type Query = {
  __typename?: 'Query';
  /**
   * 기간과 겹치는 일정 — 내 일정 + 공유 수락된 상대의 일정.
   * 겹침 판정은 startAt < range.endAt AND endAt > range.startAt.
   */
  calendarEventList: CalendarEventList;
  /** 공유 현황 — 수락된 관계 + 내가 보낸 대기 중 초대 */
  calendarShareList: CalendarShareList;
  /** 내가 받은 대기 중 초대. 로그인 직후 알림 배지에 쓴다 */
  pendingCalendarShareList: CalendarShareList;
};


export type QuerycalendarEventListArgs = {
  input: CalendarEventRangeInput;
};

export type RequestCalendarShareInput = {
  /** 초대할 상대의 가입 이메일 */
  email: Scalars['String']['input'];
};

/**
 * 초대 결과. 실패도 에러가 아닌 코드로 돌려준다 — 화면이 상황별 안내를 띄워야 하고,
 * '이미 공유 중' 같은 건 예외 상황이 아니기 때문이다.
 */
export type RequestCalendarShareResult = {
  __typename?: 'RequestCalendarShareResult';
  code: RequestCalendarShareResultCode;
  /** 성사된 경우에만 채워진다 */
  share?: Maybe<CalendarShare>;
};

export type RequestCalendarShareResultCode =
  /** 상대가 이미 나를 초대해 둬서 즉시 수락 처리했다 */
  | 'ACCEPTED_MUTUAL'
  /** 내가 보낸 초대가 이미 대기 중이다 */
  | 'ALREADY_PENDING'
  /** 이미 공유 중이다 */
  | 'ALREADY_SHARED'
  /** 초대를 새로 보냈다 */
  | 'REQUESTED'
  /** 자기 자신은 초대할 수 없다 */
  | 'SELF'
  /** 가입되지 않은 이메일이다 */
  | 'USER_NOT_FOUND';

export type RespondCalendarShareInput = {
  id: Scalars['Int']['input'];
  isAccepted: Scalars['Boolean']['input'];
};

export type UpdateCalendarEventInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['String']['input'];
  isAllDay?: InputMaybe<Scalars['Boolean']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
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
  CalendarEvent: ResolverTypeWrapper<CalendarEvent>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CalendarEventList: ResolverTypeWrapper<CalendarEventList>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  CalendarEventRangeInput: CalendarEventRangeInput;
  CalendarShare: ResolverTypeWrapper<Omit<CalendarShare, 'status'> & { status: ResolversTypes['CalendarShareStatus'] }>;
  CalendarShareList: ResolverTypeWrapper<Omit<CalendarShareList, 'itemList'> & { itemList: Array<ResolversTypes['CalendarShare']> }>;
  CalendarShareStatus: ResolverTypeWrapper<'PENDING' | 'ACCEPTED' | 'DECLINED'>;
  CalendarUser: ResolverTypeWrapper<CalendarUser>;
  CancelCalendarShareInput: CancelCalendarShareInput;
  CreateCalendarEventInput: CreateCalendarEventInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DeleteCalendarEventInput: DeleteCalendarEventInput;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  RequestCalendarShareInput: RequestCalendarShareInput;
  RequestCalendarShareResult: ResolverTypeWrapper<Omit<RequestCalendarShareResult, 'code' | 'share'> & { code: ResolversTypes['RequestCalendarShareResultCode'], share?: Maybe<ResolversTypes['CalendarShare']> }>;
  RequestCalendarShareResultCode: ResolverTypeWrapper<'REQUESTED' | 'ACCEPTED_MUTUAL' | 'ALREADY_SHARED' | 'ALREADY_PENDING' | 'USER_NOT_FOUND' | 'SELF'>;
  RespondCalendarShareInput: RespondCalendarShareInput;
  UpdateCalendarEventInput: UpdateCalendarEventInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  CalendarEvent: CalendarEvent;
  String: Scalars['String']['output'];
  Boolean: Scalars['Boolean']['output'];
  CalendarEventList: CalendarEventList;
  Int: Scalars['Int']['output'];
  CalendarEventRangeInput: CalendarEventRangeInput;
  CalendarShare: CalendarShare;
  CalendarShareList: Omit<CalendarShareList, 'itemList'> & { itemList: Array<ResolversParentTypes['CalendarShare']> };
  CalendarUser: CalendarUser;
  CancelCalendarShareInput: CancelCalendarShareInput;
  CreateCalendarEventInput: CreateCalendarEventInput;
  DateTime: Scalars['DateTime']['output'];
  DeleteCalendarEventInput: DeleteCalendarEventInput;
  Mutation: Record<PropertyKey, never>;
  Query: Record<PropertyKey, never>;
  RequestCalendarShareInput: RequestCalendarShareInput;
  RequestCalendarShareResult: Omit<RequestCalendarShareResult, 'share'> & { share?: Maybe<ResolversParentTypes['CalendarShare']> };
  RespondCalendarShareInput: RespondCalendarShareInput;
  UpdateCalendarEventInput: UpdateCalendarEventInput;
};

export type CalendarEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['CalendarEvent'] = ResolversParentTypes['CalendarEvent']> = {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isAllDay?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isMine?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['CalendarUser'], ParentType, ContextType>;
  startAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type CalendarEventListResolvers<ContextType = any, ParentType extends ResolversParentTypes['CalendarEventList'] = ResolversParentTypes['CalendarEventList']> = {
  itemList?: Resolver<Array<ResolversTypes['CalendarEvent']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type CalendarShareResolvers<ContextType = any, ParentType extends ResolversParentTypes['CalendarShare'] = ResolversParentTypes['CalendarShare']> = {
  counterpart?: Resolver<ResolversTypes['CalendarUser'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isOutgoing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  respondedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['CalendarShareStatus'], ParentType, ContextType>;
};

export type CalendarShareListResolvers<ContextType = any, ParentType extends ResolversParentTypes['CalendarShareList'] = ResolversParentTypes['CalendarShareList']> = {
  itemList?: Resolver<Array<ResolversTypes['CalendarShare']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type CalendarShareStatusResolvers = EnumResolverSignature<{ ACCEPTED?: any, DECLINED?: any, PENDING?: any }, ResolversTypes['CalendarShareStatus']>;

export type CalendarUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['CalendarUser'] = ResolversParentTypes['CalendarUser']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileImg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  cancelCalendarShare?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationcancelCalendarShareArgs, 'input'>>;
  createCalendarEvent?: Resolver<ResolversTypes['CalendarEvent'], ParentType, ContextType, RequireFields<MutationcreateCalendarEventArgs, 'input'>>;
  deleteCalendarEvent?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationdeleteCalendarEventArgs, 'input'>>;
  requestCalendarShare?: Resolver<ResolversTypes['RequestCalendarShareResult'], ParentType, ContextType, RequireFields<MutationrequestCalendarShareArgs, 'input'>>;
  respondCalendarShare?: Resolver<ResolversTypes['CalendarShare'], ParentType, ContextType, RequireFields<MutationrespondCalendarShareArgs, 'input'>>;
  updateCalendarEvent?: Resolver<ResolversTypes['CalendarEvent'], ParentType, ContextType, RequireFields<MutationupdateCalendarEventArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  calendarEventList?: Resolver<ResolversTypes['CalendarEventList'], ParentType, ContextType, RequireFields<QuerycalendarEventListArgs, 'input'>>;
  calendarShareList?: Resolver<ResolversTypes['CalendarShareList'], ParentType, ContextType>;
  pendingCalendarShareList?: Resolver<ResolversTypes['CalendarShareList'], ParentType, ContextType>;
};

export type RequestCalendarShareResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RequestCalendarShareResult'] = ResolversParentTypes['RequestCalendarShareResult']> = {
  code?: Resolver<ResolversTypes['RequestCalendarShareResultCode'], ParentType, ContextType>;
  share?: Resolver<Maybe<ResolversTypes['CalendarShare']>, ParentType, ContextType>;
};

export type RequestCalendarShareResultCodeResolvers = EnumResolverSignature<{ ACCEPTED_MUTUAL?: any, ALREADY_PENDING?: any, ALREADY_SHARED?: any, REQUESTED?: any, SELF?: any, USER_NOT_FOUND?: any }, ResolversTypes['RequestCalendarShareResultCode']>;

export type Resolvers<ContextType = any> = {
  CalendarEvent?: CalendarEventResolvers<ContextType>;
  CalendarEventList?: CalendarEventListResolvers<ContextType>;
  CalendarShare?: CalendarShareResolvers<ContextType>;
  CalendarShareList?: CalendarShareListResolvers<ContextType>;
  CalendarShareStatus?: CalendarShareStatusResolvers;
  CalendarUser?: CalendarUserResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RequestCalendarShareResult?: RequestCalendarShareResultResolvers<ContextType>;
  RequestCalendarShareResultCode?: RequestCalendarShareResultCodeResolvers;
};

