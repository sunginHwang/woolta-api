import { AuthType } from './config';

/**
 * refresh 토큰 저장소 계약.
 * shared 레이어는 Prisma를 모르므로 구현체는 user 도메인이 제공하고 app.ts가 부팅 시 주입한다.
 * (src/apps/* 를 shared가 직접 import 하지 않기 위한 경계)
 */
export interface RefreshTokenRecord {
  userId: number;
  loginType: AuthType;
  /** 로그인 1회 = 1 패밀리. 재사용 감지 시 패밀리 전체를 폐기한다. */
  familyId: string;
}

export type ConsumeResult =
  | { status: 'ok'; record: RefreshTokenRecord }
  /** 이미 사용·폐기된 토큰이 다시 왔다 — 탈취로 간주 */
  | { status: 'reused'; record: RefreshTokenRecord }
  | { status: 'expired'; record: RefreshTokenRecord }
  /** 저장소에 없는 토큰 (레거시 woolbankApi 발급분 등) */
  | { status: 'unknown' };

export interface RefreshTokenStore {
  save(input: {
    userId: number;
    loginType: AuthType;
    familyId: string;
    tokenHash: string;
    expiresAt: Date;
  }): Promise<void>;
  /** 토큰을 1회용으로 소비(폐기 표시)하고 결과를 반환 — 회전(rotation)의 핵심 */
  consume(tokenHash: string): Promise<ConsumeResult>;
  revokeFamily(familyId: string): Promise<void>;
  revokeAllForUser(userId: number): Promise<void>;
}

let store: RefreshTokenStore | null = null;

export const setRefreshTokenStore = (impl: RefreshTokenStore) => {
  store = impl;
};

/** 저장소 미주입 시 null — 기존 stateless 동작으로 폴백한다(부팅 순서 안전장치). */
export const getRefreshTokenStore = (): RefreshTokenStore | null => store;
