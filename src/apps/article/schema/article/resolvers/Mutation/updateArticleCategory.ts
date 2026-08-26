import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { assertOwnArticleCategory } from '../../../../services/ArticleService';
import { prismaArticle } from '../../../../utils/prismaClient';

export const updateArticleCategory: NonNullable<MutationResolvers['updateArticleCategory']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  const { id, name } = _arg.input;
  await assertOwnArticleCategory(id, userId);

  if (name.trim().length === 0) {
    throw new GraphQLError('카테고리 이름을 입력해주세요.', { extensions: { code: 'BAD_REQUEST' } });
  }

  return prismaArticle.articleCategory.update({
    where: { id },
    data: { name },
  });
};
