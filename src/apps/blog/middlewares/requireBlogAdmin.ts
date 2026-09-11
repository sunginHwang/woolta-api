import { requireRealUser } from '../../../shared/auth';
import type { AuthInfo, AuthedContext } from '../../../shared/auth';
import { ForbiddenError } from '../../../shared/errors';

/**
 * blog 쓰기 권한 가드.
 *
 * blog DB(user.no)와 woolBank DB(user.id)의 유저 테이블은 서로 연결되어 있지 않다.
 * 그래서 인증 쿠키의 userId로 blog 작성자 레코드를 찾을 수 없고, 작성자 신원은 여전히
 * BLOG_AUTHOR_USER_NO 스텁(getCurrentUser)이 담당한다.
 * 이 가드는 "누가 쓸 수 있는지"만 판단한다 — 허용된 woolBank userId 목록으로 제한한다.
 *
 * TODO: blog user 테이블에 woolBank userId 매핑 열을 추가하고 isAdmin을 기준으로 삼으면
 *       이 허용목록과 BLOG_AUTHOR_USER_NO 스텁을 동시에 걷어낼 수 있다.
 */
const parseAdminUserIds = (): number[] =>
  (process.env.BLOG_ADMIN_USER_IDS ?? '')
    .split(',')
    .map((id) => id.trim())
    .filter(Boolean)
    .map(Number)
    .filter((id) => Number.isInteger(id) && id > 0);

export const requireBlogAdmin = (ctx: AuthedContext): AuthInfo => {
  const auth = requireRealUser(ctx);
  const adminUserIds = parseAdminUserIds();

  // 미설정 시 닫는다 — 설정 누락이 곧 전체 공개가 되는 상황을 만들지 않는다.
  if (adminUserIds.length === 0) {
    throw new ForbiddenError('블로그 쓰기 권한이 설정되지 않았습니다.', 'BLOG_ADMIN_NOT_CONFIGURED');
  }

  if (!adminUserIds.includes(auth.userId)) {
    throw new ForbiddenError('권한이 없습니다.');
  }

  return auth;
};
