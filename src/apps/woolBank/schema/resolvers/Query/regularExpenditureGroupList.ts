import type { QueryResolvers } from './../../../generates/types.generated';
import { Prisma } from '../../../../../../prisma/generated/woolBank/client';
import { requireAuth } from '../../../../../shared/auth';
import {
  getExpenditureAccountBookCategories,
  getRegularExpenditureListByUserId,
} from '../../../services/RegularExpenditureService';
import { getNowDate, getRemainDate } from '../../../utils/date';
import { dbToGqlAccountBookCategoryType, toGqlAccountBookCategory } from '../../../utils/enums';

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

export const regularExpenditureGroupList: NonNullable<QueryResolvers['regularExpenditureGroupList']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireAuth(_ctx);

  const [expenditureTypeList, regularExpenditures] = await Promise.all([
    getExpenditureAccountBookCategories(userId),
    getRegularExpenditureListByUserId(userId, Number(_arg.limitCount ?? 100)),
  ]);

  const itemList = expenditureTypeList
    .map((expenditureType) => getRegularExpenditureWithType(expenditureType, regularExpenditures))
    .filter((item) => item.list.length > 0);

  return { totalCount: itemList.length, itemList };
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
  const list = [...regularDateList, ...notRegularDateList].map((regularExpenditure) => ({
    ...regularExpenditure,
    accountBookCategory: toGqlAccountBookCategory(regularExpenditure.accountBookCategory),
  }));

  return {
    type: dbToGqlAccountBookCategoryType(type),
    name,
    imageUrl: accountBookCategoryImage.imageUrl,
    list,
  };
};
