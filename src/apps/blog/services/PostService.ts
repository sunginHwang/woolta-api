import { Board, BoardCategory, User } from '../../../../prisma/generated/blog/client';
import { AppError, NotFoundError } from '../../../shared/errors';
import { makePostSubDescription } from '../utils/postContent';
import { prismaBlog } from '../utils/prismaClient';

export type BoardWithRelations = Board & { user: User; category: BoardCategory };

export const throwCategoryNotFound = (): never => {
  throw new NotFoundError('존재 하지 않는 항목 카테고리 입니다.');
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
    throw new NotFoundError('해당 카테고리에 존재하지 않는 게시글 입니다.');
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

export const createBoardPost = async (userNo: number, categoryNo: number, title: string, contents: string) => {
  const boardCategory = await getBoardCategory(categoryNo);

  const savedPost = await prismaBlog.board.create({
    data: {
      title,
      contents,
      subDescription: makePostSubDescription(contents),
      views: 0,
      userNo,
      categoryNo: boardCategory.no,
    },
  });

  return { postNo: savedPost.id, categoryNo: boardCategory.no, title: savedPost.title };
};

export const deleteBoardPost = async (categoryNo: number, postNo: number, userId: string) => {
  const board = await getBoard(categoryNo, postNo);

  if (board.user.userId !== userId) {
    throw new AppError('글 작성자만 삭제 가능합니다.', 'UNAUTHORIZED');
  }

  await prismaBlog.board.delete({ where: { id: board.id } });
};

export const updateBoardPost = async (params: {
  id: number;
  categoryNo: number;
  title: string;
  contents: string;
  userId: string;
}) => {
  const { id, categoryNo, title, contents, userId } = params;
  const boardCategory = await getBoardCategory(categoryNo);

  const originBoard = await prismaBlog.board.findUnique({
    where: { id },
    include: { user: true },
  });

  if (!originBoard) {
    throw new NotFoundError('존재하지 않는 게시글 입니다.');
  }

  if (originBoard.user.userId !== userId) {
    throw new AppError('글 작성자만 수정 가능합니다.', 'UNAUTHORIZED');
  }

  // views는 원본과 동일하게 보존한다
  const savedPost = await prismaBlog.board.update({
    where: { id: originBoard.id },
    data: {
      title,
      contents,
      subDescription: makePostSubDescription(contents),
      categoryNo: boardCategory.no,
    },
  });

  return { postNo: savedPost.id, categoryNo: savedPost.categoryNo };
};

export const getCategoryList = async () => {
  const boardCategories = await prismaBlog.boardCategory.findMany();

  const itemList = boardCategories.map((category) => ({
    value: category.no,
    label: category.categoryName,
  }));

  return { totalCount: itemList.length, itemList };
};

// 원본 findTop20ByOrderByCreatedAtDesc
export const getRecentPostListService = async (limitCount?: number | null) => {
  const [boards, totalCount] = await Promise.all([
    prismaBlog.board.findMany({
      orderBy: { createdAt: 'desc' },
      take: limitCount ?? 20,
      include: { user: true, category: true },
    }),
    prismaBlog.board.count(),
  ]);

  return { totalCount, itemList: boards.map(toPostSummary) };
};

export const getPost = async (postNo: number, categoryNo: number) => {
  const board = await prismaBlog.board.findUnique({
    where: { id: postNo },
    include: { user: true, category: true },
  });

  if (!board || board.categoryNo !== categoryNo) {
    return null;
  }

  // TODO: 인증 서비스 연동 후 admin 사용자는 조회수 증가에서 제외 (원본 increasePostViews 동작)
  await prismaBlog.board.update({
    where: { id: board.id },
    data: { views: board.views + 1 },
  });

  return toPost(board);
};

export const getPostList = async (categoryId?: number | null) => {
  const where = categoryId != null ? { categoryNo: categoryId } : {};

  const boards = await prismaBlog.board.findMany({
    where,
    include: { user: true, category: true },
  });

  const itemList = boards.map(toPostSummary);

  return { totalCount: itemList.length, itemList };
};
