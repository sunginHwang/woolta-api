import { GraphQLError } from 'graphql/error';
import { Board, BoardCategory, User } from '../../../../prisma/generated/blog/client';
import { prismaBlog } from '../utils/prismaClient';

export type BoardWithRelations = Board & { user: User; category: BoardCategory };

export const throwCategoryNotFound = (): never => {
  throw new GraphQLError('존재 하지 않는 항목 카테고리 입니다.', {
    extensions: { code: 'NOT_FOUND' },
  });
};

export const getBoardCategory = async (categoryNo: number) => {
  const boardCategory = await prismaBlog.boardCategory.findUnique({ where: { no: categoryNo } });

  if (!boardCategory) {
    return throwCategoryNotFound();
  }

  return boardCategory;
};

// 원본 PostService.getBoard: 카테고리 존재 + 게시글-카테고리 일치 검증
export const getBoard = async (categoryNo: number, postNo: number): Promise<BoardWithRelations> => {
  await getBoardCategory(categoryNo);

  const board = await prismaBlog.board.findUnique({
    where: { id: postNo },
    include: { user: true, category: true },
  });

  if (!board || board.categoryNo !== categoryNo) {
    throw new GraphQLError('해당 카테고리에 존재하지 않는 게시글 입니다.', {
      extensions: { code: 'NOT_FOUND' },
    });
  }

  return board;
};

// 원본 PostDto.PostsRes (목록용)
export const toPostSummary = (board: BoardWithRelations) => ({
  postNo: board.id,
  title: board.title,
  subDescription: board.subDescription,
  categoryLabel: board.category.categoryName,
  categoryNo: board.category.no,
  createdAt: board.createdAt,
  author: board.user.nickName,
});

// 원본 PostDto.PostRes (단건/전체용)
export const toPost = (board: BoardWithRelations, content: string | null = board.contents) => ({
  postNo: board.id,
  title: board.title,
  content,
  categoryLabel: board.category.categoryName,
  categoryNo: board.category.no,
  createdAt: board.createdAt,
  writer: {
    no: board.user.no,
    nickName: board.user.nickName,
    imageUrl: board.user.imageUrl,
  },
});
