import { authConfig } from '../../../shared/auth';
import type { AuthType, ConsumeResult, RefreshTokenRecord, RefreshTokenStore } from '../../../shared/auth';
import { prismaUser } from '../utils/prismaClient';

// 소비 직후 유예창 안이면 동시 요청 레이스로 보고 통과시킨다.
// (그 밖의 재제출만 탈취로 간주 — 유예창이 없으면 정상 사용자가 로그아웃된다)
const judgeRevoked = (revokedAt: Date, record: RefreshTokenRecord): ConsumeResult => {
  const isRace = Date.now() - revokedAt.getTime() <= authConfig.REFRESH_REUSE_GRACE_MS;

  return isRace ? { status: 'ok', record } : { status: 'reused', record };
};

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
      return judgeRevoked(row.revokedAt, record);
    }

    if (row.expiresAt.getTime() <= Date.now()) {
      return { status: 'expired', record };
    }

    // revokedAt이 아직 NULL인 행만 갱신 — 동시 요청 중 하나만 성공한다(회전의 원자성).
    const consumed = await prismaUser.userRefreshToken.updateMany({
      where: { id: row.id, revokedAt: null },
      data: { revokedAt: new Date() },
    });

    if (consumed.count === 1) {
      return { status: 'ok', record };
    }

    // 조회와 갱신 사이에 다른 요청이 먼저 소비했다. 위의 revokedAt 분기와 같은 기준으로 판정해야 한다 —
    // 여기서 바로 reused 로 보면 access 만료 직후 동시에 나간 정상 요청이 탈취로 오판돼
    // 패밀리 전체가 폐기되고 쿠키가 지워진다(= 30분 쉬었다 돌아오면 로그아웃).
    const latest = await prismaUser.userRefreshToken.findUnique({ where: { tokenHash } });

    return judgeRevoked(latest?.revokedAt ?? new Date(), record);
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
