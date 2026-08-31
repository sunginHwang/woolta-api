import type { GraphQLFormattedError } from 'graphql';
import { unwrapResolverError } from '@apollo/server/errors';
import { AppError } from './errors';

/**
 * 도메인 에러(AppError) → GraphQL 에러 응답 변환.
 * 모든 ApolloServer 인스턴스에 공통 적용하는 유일한 GraphQL 에러 경계.
 * AppError가 아닌 에러는 Apollo 기본 처리(GraphQLError 통과, 그 외 INTERNAL_SERVER_ERROR)에 맡긴다.
 */
export const formatError = (formatted: GraphQLFormattedError, error: unknown): GraphQLFormattedError => {
  const original = unwrapResolverError(error);

  if (original instanceof AppError) {
    return {
      ...formatted,
      message: original.message,
      extensions: {
        ...formatted.extensions,
        code: original.code,
        ...(original.detail !== undefined ? { myExtension: original.detail } : {}),
      },
    };
  }

  return formatted;
};
