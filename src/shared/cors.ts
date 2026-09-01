import express from 'express';

/**
 * 자격증명(쿠키) 포함 요청용 CORS + Origin 검증.
 * CORS_ORIGINS 미설정 = 동일 오리진(리버스 프록시) 구성으로 보고 아무 것도 하지 않는다(기존 동작).
 * 설정하면 허용 목록 외 Origin은 CORS 헤더를 받지 못하고, 상태변경 요청은 403으로 끊는다(CSRF 방어).
 */
export const buildCorsMiddleware = (): express.RequestHandler | null => {
  const allowList = (process.env.CORS_ORIGINS ?? '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

  if (allowList.length === 0) {
    return null;
  }

  return (req, res, next) => {
    const origin = req.headers.origin;

    if (origin && allowList.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Apollo-Require-Preflight');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      res.setHeader('Access-Control-Max-Age', '600');
    }

    res.setHeader('Vary', 'Origin');

    if (req.method === 'OPTIONS') {
      res.sendStatus(origin && allowList.includes(origin) ? 204 : 403);
      return;
    }

    // 브라우저가 붙인 Origin이 허용 목록에 없으면 쿠키가 실려 있어도 처리하지 않는다.
    if (origin && !allowList.includes(origin)) {
      res.status(403).json({ message: 'origin not allowed' });
      return;
    }

    next();
  };
};
