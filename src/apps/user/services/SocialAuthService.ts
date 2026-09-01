import { AppError, UnauthenticatedError } from '../../../shared/errors';
import type { DbSocialLoginType } from '../utils/enums';

/**
 * 소셜 로그인 신원 검증.
 * 클라이언트가 보낸 socialId를 믿지 않고, provider가 발급한 토큰을 provider에게 되물어
 * 확인된 고유 식별자(sub / id)만 socialId로 사용한다. (OAuth 2.0 / OIDC 표준 흐름)
 */
export interface VerifiedSocialIdentity {
  socialId: string;
  name?: string;
  email?: string;
  imageUrl?: string;
}

const FETCH_TIMEOUT_MS = 5000;

const requireEnv = (key: string) => {
  const value = process.env[key];

  if (!value) {
    throw new AppError(`social login is not configured: ${key} is missing`, 'INTERNAL_SERVER_ERROR');
  }

  return value;
};

const fetchJson = async (url: string, init?: RequestInit) => {
  const res = await fetch(url, { ...init, signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) }).catch(() => null);

  if (!res) {
    throw new AppError('social provider request failed', 'INTERNAL_SERVER_ERROR');
  }

  if (!res.ok) {
    throw new UnauthenticatedError('유효하지 않은 소셜 로그인 토큰입니다.');
  }

  return res.json() as Promise<Record<string, unknown>>;
};

// Google: FE가 받은 id_token(JWT)을 tokeninfo로 검증. 서명·만료는 Google이 검증해주고, aud는 여기서 확인한다.
const verifyGoogle = async (idToken: string): Promise<VerifiedSocialIdentity> => {
  const clientId = requireEnv('GOOGLE_CLIENT_ID');
  const payload = await fetchJson(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(idToken)}`);

  if (payload.aud !== clientId) {
    throw new UnauthenticatedError('다른 앱에서 발급된 구글 토큰입니다.');
  }

  if (typeof payload.sub !== 'string') {
    throw new UnauthenticatedError('구글 토큰에서 사용자 식별자를 확인할 수 없습니다.');
  }

  return {
    socialId: payload.sub,
    name: typeof payload.name === 'string' ? payload.name : undefined,
    email: typeof payload.email === 'string' ? payload.email : undefined,
    imageUrl: typeof payload.picture === 'string' ? payload.picture : undefined,
  };
};

// Kakao: access_token_info가 토큰 유효성 + 소유자 id + 발급 앱(app_id)을 한 번에 알려준다.
const verifyKakao = async (accessToken: string): Promise<VerifiedSocialIdentity> => {
  const appId = requireEnv('KAKAO_APP_ID');
  const payload = await fetchJson('https://kapi.kakao.com/v1/user/access_token_info', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (String(payload.app_id) !== appId) {
    throw new UnauthenticatedError('다른 앱에서 발급된 카카오 토큰입니다.');
  }

  if (payload.id === undefined || payload.id === null) {
    throw new UnauthenticatedError('카카오 토큰에서 사용자 식별자를 확인할 수 없습니다.');
  }

  return { socialId: String(payload.id) };
};

// Facebook: debug_token에 앱 토큰(app_id|app_secret)으로 물어 유효성과 소유자 user_id를 확인한다.
const verifyFacebook = async (accessToken: string): Promise<VerifiedSocialIdentity> => {
  const appId = requireEnv('FACEBOOK_APP_ID');
  const appSecret = requireEnv('FACEBOOK_APP_SECRET');
  const appToken = `${appId}|${appSecret}`;
  const payload = await fetchJson(
    `https://graph.facebook.com/debug_token?input_token=${encodeURIComponent(accessToken)}&access_token=${encodeURIComponent(appToken)}`,
  );

  const data = payload.data as Record<string, unknown> | undefined;

  if (!data?.is_valid || String(data.app_id) !== appId || typeof data.user_id !== 'string') {
    throw new UnauthenticatedError('유효하지 않은 페이스북 토큰입니다.');
  }

  return { socialId: data.user_id };
};

export const verifySocialToken = async (
  loginType: DbSocialLoginType,
  token: string,
): Promise<VerifiedSocialIdentity> => {
  switch (loginType) {
    case 'google':
      return verifyGoogle(token);
    case 'kakaoTalk':
      return verifyKakao(token);
    case 'facebook':
      return verifyFacebook(token);
  }
};
