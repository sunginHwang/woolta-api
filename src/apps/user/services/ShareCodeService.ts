import crypto from 'crypto';
import { prismaUser } from '../utils/prismaClient';

// 원본 woolbankApi authService의 공유코드 로직
export const getShareCode = async (userId: number) => {
  return prismaUser.userShareCode.findFirst({ where: { userId } });
};

export const getShareCodeInfoByShareCode = async (shareCode: string) => {
  return prismaUser.userShareCode.findFirst({ where: { shareCode } });
};

export const upsertShareCode = async (userId: number) => {
  const userShareCode = await getShareCode(userId);

  if (!userShareCode) {
    const created = await prismaUser.userShareCode.create({
      data: { userId, shareCode: crypto.randomUUID() },
    });
    return created.shareCode;
  }

  const updated = await prismaUser.userShareCode.update({
    where: { id: userShareCode.id },
    data: { shareCode: crypto.randomUUID() },
  });
  return updated.shareCode;
};
