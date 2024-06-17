import type { QueryResolvers } from './../../../generates/types.generated';
import { Prisma, PrismaClient as WoolBankPrismaClient } from '../../../../../../prisma/generated/woolBank';
import { getNowDate, getRemainDate } from '../../../utils/date';

const prisma = new WoolBankPrismaClient();

type AccountBookCategoryWithImageType = Prisma.AccountBookCategoryGetPayload<{
  include: { accountBookCategoryImage: true };
}>;

type RegularExpenditure = Prisma.RegularExpenditureGetPayload<{
  include: {
    accountBookCategory: {
      include: {
        accountBookCategoryImage: true;
      };
    };
  };
}>;

export const regularExpenditureList: NonNullable<QueryResolvers['regularExpenditureList']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const [expenditureTypeList, regularExpenditures] = await Promise.all([
    getExpenditureAccountBookCategories(13),
    getRegularExpenditureListByUserId(13, Number(_arg.limit ?? 100)),
  ]);

  return expenditureTypeList
    .map((expenditureType) => getRegularExpenditureWithType(expenditureType, regularExpenditures))
    .filter((item) => item.list.length > 0);
};

export const getRegularExpenditureListByUserId = async (userId: number, limit: number = 100) => {
  return prisma.regularExpenditure.findMany({
    where: { userId },
    orderBy: { id: 'desc' },
    take: limit,
    include: {
      accountBookCategory: {
        include: {
          accountBookCategoryImage: true,
        },
      },
    },
  });
};

export const getExpenditureAccountBookCategories = async (userId: number) => {
  return prisma.accountBookCategory.findMany({
    where: { userId, delYn: false, type: 'expenditure' },
    orderBy: { id: 'desc' },
    include: {
      accountBookCategoryImage: true,
    },
  });
};

export const getRegularExpenditureWithType = (
  category: AccountBookCategoryWithImageType,
  regularExpenditures: RegularExpenditure[],
) => {
  const { id, type, name, accountBookCategoryImage } = category;
  const nowDate = getNowDate();

  const regularExpenditureList = regularExpenditures
    .filter((re) => re.accountBookCategoryId === id)
    .map((r) => Object.assign(r, { regularExpenditureDay: getRemainDate(r.regularDate) }));

  // 정기지출 당일 리스트
  const regularDateList = regularExpenditureList.filter((item) => item.regularDate === nowDate);
  // 지출일까지 날짜 남은 리스트 -> 날짜 순 정렬
  const notRegularDateList = regularExpenditureList
    .filter((item) => item.regularDate !== nowDate)
    .sort((a, b) => {
      // 지출일 아닌건 날짜 정렬
      return a.regularExpenditureDay.getTime() - b.regularExpenditureDay.getTime();
    });

  // 리스트 순서는 당일, 해당 달에 남은날, 다음달 이체일 순서
  const list = [...regularDateList, ...notRegularDateList];
  return Object.assign({ type, name, imageUrl: accountBookCategoryImage.imageUrl }, { list });
};
