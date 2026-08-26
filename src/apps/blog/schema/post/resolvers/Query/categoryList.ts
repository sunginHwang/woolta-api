import type { QueryResolvers } from './../../../../generates/types.generated';
import { prismaBlog } from '../../../../utils/prismaClient';

export const categoryList: NonNullable<QueryResolvers['categoryList']> = async () => {
  const boardCategories = await prismaBlog.boardCategory.findMany();

  const itemList = boardCategories.map((category) => ({
    value: category.no,
    label: category.categoryName,
  }));

  return { totalCount: itemList.length, itemList };
};
