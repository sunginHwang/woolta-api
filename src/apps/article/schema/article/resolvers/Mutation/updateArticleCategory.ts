import { GraphQLError } from 'graphql/error';
import type { MutationResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { assertOwnArticleCategory } from '../../../../services/ArticleService';
import { prismaArticle } from '../../../../utils/prismaClient';

export const updateArticleCategory: NonNullable<MutationResolvers['updateArticleCategory']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);
  await assertOwnArticleCategory(_arg.id, userId);

  if (_arg.name.trim().length === 0) {
    throw new GraphQLError('카테고리 이름을 입력해주세요.', { extensions: { code: 'BAD_REQUEST' } });
  }

  return prismaArticle.articleCategory.update({
    where: { id: _arg.id },
    data: { name: _arg.name },
  });
};
