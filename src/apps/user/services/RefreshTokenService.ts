import { authConfig } from '../../../shared/auth';
import type { AuthType, ConsumeResult, RefreshTokenStore } from '../../../shared/auth';
import { prismaUser } from '../utils/prismaClient';

// shared/auth의 RefreshTokenStore 구현체. app.ts 부팅 시 setRefreshTokenStore로 주입한다.
export const prismaRefreshTokenStore: RefreshTokenStore = {
  async save({ userId, loginType, familyId, tokenHash, expiresAt }) {
    await prismaUser.userRefreshToken.create({
      data: { userId, loginType, familyId, tokenHash, expiresAt },
    });
  },

  async consume(tokenHash: string): Promise<ConsumeResult> {
    const row = await prismaUser.userRefreshToken.findUnique({ where: { tokenHash } });

    if (!row) {
      return { status: 'unknown' };
    }

    const record = { userId: row.userId, loginType: row.loginType as AuthType, familyId: row.familyId };

    if (row.revokedAt) {
      // 소비 직후 유예창 안이면 동시 요청 레이스로 보고 통과시킨다.
      // (그 밖의 재제출만 탈취로 간주 — 유예창이 없으면 정상 사용자가 로그아웃된다)
      const isRace = Date.now() - row.revokedAt.getTime() <= authConfig.REFRESH_REUSE_GRACE_MS;

      return isRace ? { status: 'ok', record } : { status: 'reused', record };
    }

    if (row.expiresAt.getTime() <= Date.now()) {
      return { status: 'expired', record };
    }

    // revokedAt이 아직 NULL인 행만 갱신 — 동시 요청 중 하나만 성공한다(회전의 원자성).
    const consumed = await prismaUser.userRefreshToken.updateMany({
      where: { id: row.id, revokedAt: null },
      data: { revokedAt: new Date() },
    });

    if (consumed.count === 0) {
      return { status: 'reused', record };
    }

    return { status: 'ok', record };
  },

  async revokeFamily(familyId: string) {
    await prismaUser.userRefreshToken.updateMany({
      where: { familyId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  },

  async revokeAllForUser(userId: number) {
    await prismaUser.userRefreshToken.updateMany({
      where: { userId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  },
};
