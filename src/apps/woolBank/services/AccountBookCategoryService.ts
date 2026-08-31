import { DbAccountBookCategoryType } from '../utils/enums';
import { prismaWoolBank } from '../utils/prismaClient';

export const getAccountBookCategoryList = async (userId: number) => {
  return prismaWoolBank.accountBookCategory.findMany({
    orderBy: { id: 'desc' },
    include: { accountBookCategoryImage: true },
    where: { userId, delYn: false },
  });
};

export const getAccountBookCategoryImageList = async () => {
  return prismaWoolBank.accountBookCategoryImage.findMany({
    orderBy: { id: 'desc' },
  });
};

export const createAccountBookCategory = async (
  userId: number,
  {
    name,
    type,
    accountBookCategoryImageId,
    useStatistic,
  }: {
    name: string;
    type: DbAccountBookCategoryType;
    accountBookCategoryImageId: number;
    useStatistic: boolean;
  },
) => {
  return prismaWoolBank.accountBookCategory.create({
    include: {
      accountBookCategoryImage: true,
    },
    data: {
      delYn: false,
      userId,
      name,
      type,
      accountBookCategoryImageId,
      useStatistic,
    },
  });
};

// 원본 removeAccountBookCategory: delYn 소프트 삭제
export const deleteAccountBookCategory = async (userId: number, id: number) => {
  try {
    const accountBookCategory = await prismaWoolBank.accountBookCategory.findFirst({
      where: { id, userId },
    });

    if (!accountBookCategory) {
      return false;
    }

    await prismaWoolBank.accountBookCategory.update({
      where: { id: accountBookCategory.id },
      data: { delYn: true },
    });
    return true;
  } catch {
    return false;
  }
};
