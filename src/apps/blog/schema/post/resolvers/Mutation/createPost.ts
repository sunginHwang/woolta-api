import type { MutationResolvers } from './../../../../generates/types.generated';
import { getCurrentUser } from '../../../../middlewares/currentUser';
import { createBoardPost } from '../../../../services/PostService';
import { allSendPush } from '../../../../services/WebPushService';

export const createPost: NonNullable<MutationResolvers['createPost']> = async (_parent, _arg, _ctx) => {
  const { categoryNo, title, contents } = _arg.input;
  const user = await getCurrentUser(_ctx.req);

  const result = await createBoardPost(user.no, categoryNo, title, contents);

  // 원본 @Async pushNewPost: 생성 시에만 fire-and-forget으로 신규 포스트 푸시
  allSendPush({
    title: '신규 포스트 알림',
    content: result.title,
    url: `https://blog.woolta.com/categories/${result.categoryNo}/posts/${result.postNo}`,
  }).catch((e) => console.log('fail to push new post', e));

  return { postNo: result.postNo, categoryNo: result.categoryNo };
};
