import crypto from 'crypto';
import { GraphQLError } from 'graphql/error';
import { User } from '../../../../prisma/generated/user';
import { AuthType, createAuthToken } from '../../../shared/auth';
import { prismaUser } from '../utils/prismaClient';

export const getUserById = async (id: number) => {
  return prismaUser.user.findUnique({ where: { id } });
};

export const getUserByIdOrThrow = async (id: number) => {
  const user = await getUserById(id);

  if (!user) {
    throw new GraphQLError(`userId: ${id} is not exist user`, { extensions: { code: 'UNAUTHENTICATED' } });
  }

  return user;
};

export const getSocialUser = async (socialId: string, loginType: string) => {
  return prismaUser.user.findFirst({ where: { socialId, loginType } });
};

// 원본 userService.saveSocialUser: user 저장 후 password를 scrypt(socialId, salt=id)로 재저장하는 2단계 트랜잭션
export const saveSocialUser = async (req: {
  name?: string | null;
  email?: string | null;
  imageUrl: string;
  loginType: string;
  socialId: string;
}) => {
  return prismaUser.$transaction(async (tx) => {
    const savedUser = await tx.user.create({
      data: {
        name: req.name ?? '',
        password: req.socialId,
        email: req.email ?? '',
        profileImg: req.imageUrl,
        loginType: req.loginType,
        socialId: req.socialId,
      },
    });

    return tx.user.update({
      where: { id: savedUser.id },
      data: { password: getPassword(savedUser.socialId, savedUser.id.toString()) },
    });
  });
};

// 원본 userService.getUserWithToken — 응답에서 password 제거
export const getUserWithToken = (user: User, loginType: AuthType = 'user') => {
  const tokenInfo = createAuthToken(user.id, loginType);
  return { user: toUserInfo(user), ...tokenInfo };
};

export const toUserInfo = (user: User, authType?: AuthType) => {
  const { password: _password, ...userInfo } = user;
  return { ...userInfo, authType: authType ?? null };
};

const getPassword = (id: string, salt: string) => {
  return crypto.scryptSync(id, salt, 64, { N: 1024 }).toString('hex');
};
