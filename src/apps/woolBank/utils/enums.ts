// GraphQL enum (UPPER_CASE) <-> DB/Prisma enum (소문자) 매핑.
// prisma/schemaWoolBank.prisma 의 AccountBookCategoryType 은 'expenditure' | 'income' 로 저장되므로
// prisma 쿼리 인자·쓰기에는 반드시 Db* 값을 사용하고, GraphQL 응답에만 Gql* 값을 사용한다.
export type DbAccountBookCategoryType = 'expenditure' | 'income';
export type GqlAccountBookCategoryType = 'EXPENDITURE' | 'INCOME';

export type DbScheduledPaymentType = 'repeat' | 'installment';
export type GqlScheduledPaymentType = 'REPEAT' | 'INSTALLMENT';

const ACCOUNT_BOOK_CATEGORY_TYPE_GQL_TO_DB: Record<GqlAccountBookCategoryType, DbAccountBookCategoryType> = {
  EXPENDITURE: 'expenditure',
  INCOME: 'income',
};

const ACCOUNT_BOOK_CATEGORY_TYPE_DB_TO_GQL: Record<DbAccountBookCategoryType, GqlAccountBookCategoryType> = {
  expenditure: 'EXPENDITURE',
  income: 'INCOME',
};

const SCHEDULED_PAYMENT_TYPE_GQL_TO_DB: Record<GqlScheduledPaymentType, DbScheduledPaymentType> = {
  REPEAT: 'repeat',
  INSTALLMENT: 'installment',
};

export const gqlToDbAccountBookCategoryType = (type: GqlAccountBookCategoryType): DbAccountBookCategoryType => {
  return ACCOUNT_BOOK_CATEGORY_TYPE_GQL_TO_DB[type];
};

export const dbToGqlAccountBookCategoryType = (type: DbAccountBookCategoryType): GqlAccountBookCategoryType => {
  return ACCOUNT_BOOK_CATEGORY_TYPE_DB_TO_GQL[type];
};

export const gqlToDbScheduledPaymentType = (type: GqlScheduledPaymentType): DbScheduledPaymentType => {
  return SCHEDULED_PAYMENT_TYPE_GQL_TO_DB[type];
};

// type 필드를 가진 prisma 모델을 GraphQL 응답용으로 변환하는 헬퍼들
export const toGqlAccountBookCategory = <T extends { type: DbAccountBookCategoryType }>(category: T) => ({
  ...category,
  type: dbToGqlAccountBookCategoryType(category.type),
});

export const toGqlAccountBook = <
  T extends {
    type: DbAccountBookCategoryType;
    accountBookCategory: { type: DbAccountBookCategoryType };
  },
>(
  accountBook: T,
) => ({
  ...accountBook,
  type: dbToGqlAccountBookCategoryType(accountBook.type),
  accountBookCategory: toGqlAccountBookCategory(accountBook.accountBookCategory),
});
