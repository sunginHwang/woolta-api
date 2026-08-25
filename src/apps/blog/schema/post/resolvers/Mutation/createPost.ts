import type { MutationResolvers } from './../../../../generates/types.generated';
import { getCurrentUser } from '../../../../middlewares/currentUser';
import { getBoardCategory } from '../../../../services/PostService';
import { allSendPush } from '../../../../services/WebPushService';
import { makePostSubDescription } from '../../../../utils/postContent';
import { prismaBlog } from '../../../../utils/prismaClient';

export const createPost: NonNullable<MutationResolvers['createPost']> = async (_parent, _arg, _ctx) => {
  const boardCategory = await getBoardCategory(_arg.categoryNo);
  const user = await getCurrentUser(_ctx.req);

  const savedPost = await prismaBlog.board.create({
    data: {
      title: _arg.title,
      contents: _arg.contents,
      subDescription: makePostSubDescription(_arg.contents),
      views: 0,
      userNo: user.no,
      categoryNo: boardCategory.no,
    },
  });

  // 원본 @Async pushNewPost: 생성 시에만 fire-and-forget으로 신규 포스트 푸시
  allSendPush({
    title: '신규 포스트 알림',
    content: savedPost.title,
    url: `https://blog.woolta.com/categories/${boardCategory.no}/posts/${savedPost.id}`,
  }).catch((e) => console.log('fail to push new post', e));

  return { postNo: savedPost.id, categoryNo: boardCategory.no };
};
