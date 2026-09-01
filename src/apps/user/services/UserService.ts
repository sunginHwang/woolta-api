import { User } from '../../../../prisma/generated/user/client';
import { UnauthenticatedError } from '../../../shared/errors';
import { AuthType } from '../../../shared/auth';
import { prismaUser } from '../utils/prismaClient';

export const getUserById = async (id: number) => {
  return prismaUser.user.findUnique({ where: { id } });
};

export const getUserByIdOrThrow = async (id: number) => {
  const user = await getUserById(id);

  if (!user) {
    throw new UnauthenticatedError(`userId: ${id} is not exist user`);
  }

  return user;
};

export const getSocialUser = async (socialId: string, loginType: string) => {
  return prismaUser.user.findFirst({ where: { socialId, loginType } });
};

// 소셜 전용 계정이라 password는 사용하지 않는다.
// (원본 woolbankApi는 scrypt(socialId, salt=id)를 2단계 트랜잭션으로 넣었으나 인증에 쓰이지 않는 잔재였다.
//  컬럼이 NOT NULL이라 빈 문자열로 채운다 — 레거시 서버 정리 후 nullable로 변경 예정.)
export const saveSocialUser = async (req: {
  name?: string | null;
  email?: string | null;
  imageUrl?: string | null;
  loginType: string;
  socialId: string;
}) => {
  return prismaUser.user.create({
    data: {
      name: req.name ?? '',
      password: '',
      email: req.email ?? '',
      profileImg: req.imageUrl ?? '',
      loginType: req.loginType,
      socialId: req.socialId,
    },
  });
};

// 원본 userService.getUserWithToken — 응답에서 password 제거
export const toUserInfo = (user: User, authType?: AuthType) => {
  const { password: _password, ...userInfo } = user;
  return { ...userInfo, authType: authType ?? null };
};
