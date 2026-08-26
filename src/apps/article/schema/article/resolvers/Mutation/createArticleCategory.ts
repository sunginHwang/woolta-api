import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { prismaArticle } from '../../../../utils/prismaClient';

export const createArticleCategory: NonNullable<MutationResolvers['createArticleCategory']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { name } = _arg.input;

  if (name.trim().length === 0) {
    throw new GraphQLError('카테고리 이름을 입력해주세요.', { extensions: { code: 'BAD_REQUEST' } });
  }

  const max = await prismaArticle.articleCategory.aggregate({ where: { userId }, _max: { order: true } });
  return prismaArticle.articleCategory.create({
    data: {
      userId,
      name,
      order: (max._max.order ?? 0) + 1,
    },
  });
};
