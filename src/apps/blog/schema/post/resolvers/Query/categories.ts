import type { QueryResolvers } from './../../../../generates/types.generated';
import { prismaBlog } from '../../../../utils/prismaClient';

export const categories: NonNullable<QueryResolvers['categories']> = async () => {
  const boardCategories = await prismaBlog.boardCategory.findMany();

  return boardCategories.map((category) => ({
    value: category.no,
    label: category.categoryName,
  }));
};
