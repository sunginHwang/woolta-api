import config from '../config';
import { Request } from 'express';
const {  ACCESS_TOKEN_NAME, REFRESH_TOKEN_NAME } = config.authToken;


export const setAuthCookie = (ctx: Request, accessToken: string, refreshToken: string) => {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1); // Set expires to 1 year later
  ctx.cookies.set(ACCESS_TOKEN_NAME, accessToken,  {expires,httpOnly: true, secure: true, domain: '.woolta.com', sameSite: 'none'});
  ctx.cookies.set(REFRESH_TOKEN_NAME, refreshToken,  {expires,httpOnly: true, secure: true, domain: '.woolta.com', sameSite: 'none'});
}