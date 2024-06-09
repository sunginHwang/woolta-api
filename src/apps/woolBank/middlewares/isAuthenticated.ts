import express from 'express';
import { GraphQLResolveInfo } from 'graphql';
import config from '../config';
import { createAuthToken, getRefreshTokenInfo } from '../services/AuthService';
import { ITokenInfo } from '../models/ITokenInfo';
import { setAuthCookie } from '../utils/common';
import jwt, { VerifyErrors } from 'jsonwebtoken';

const { SECRET_TOKEN_KEY, ACCESS_TOKEN_NAME, REFRESH_TOKEN_NAME } = config.authToken;


type ResolverFunction<TArgs> = (
  parent: unknown,
  args: TArgs,
  context: { req: express.Request },
  info: GraphQLResolveInfo
) => Promise<any>;

type MiddlewareFunction<TArgs> = (
  resolve: ResolverFunction<TArgs>
) => (
  parent: unknown,
  args: TArgs,
  context: { req: express.Request },
  info: GraphQLResolveInfo
) => Promise<any>;

export const isAuthenticated: MiddlewareFunction<{ id: string }> = (resolve) => async (parent, args, ctx, info) => {


  //const accessToken = ctx.cookies.get(ACCESS_TOKEN_NAME);
  const accessToken = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEzLCJsb2dpblR5cGUiOiJ1c2VyIiwiaWF0IjoxNzE2OTg1MjgxLCJleHAiOjE3MTc1OTAwODF9.Qe4am6ymNlyqU38-NkzR-IqDJMlHZXaR8O4akexah7Mt7ZDmZfcXSSbaJvCfi-AUtTxU7T-h-kvrM2r7gmK3Gg';
  const refreshToken = ctx.req.get(REFRESH_TOKEN_NAME);

  if (!accessToken) {
    new Error('token 인증 실패');
  }

  try {
    let verifyErrorMsg = '인증정보가 다릅니다.';
    //@ts-ignore
    await jwt.verify(accessToken as any, SECRET_TOKEN_KEY, async (err: VerifyErrors | null, decoded: object | undefined) => {

      if (err) {
        if (err.name === 'TokenExpiredError' && refreshToken) {
          const tokenInfo = await getRefreshTokenInfo(refreshToken);
          const authTokens = createAuthToken(tokenInfo.userId, tokenInfo.authType);
          setAuthCookie(ctx.req, authTokens.accessToken, authTokens.refreshToken);
          ctx.req.userId = tokenInfo.userId;
          ctx.req.authType = tokenInfo.authType;

          return resolve(parent, args, ctx, info);
        }
        verifyErrorMsg = err.message;
        console.log(verifyErrorMsg);
        return;
      }

      if (decoded) {
        console.log(decoded);
        ctx.req.userId = (decoded as ITokenInfo).userId;
        ctx.req.authType = (decoded as any).loginType;
        return resolve(parent, args, ctx, info);
      }
    });

    if (!ctx.req.userId) {
      new Error(verifyErrorMsg);
      // return resError({ ctx, errorCode: 401, message: verifyErrorMsg });
    }
  } catch (e) {
    console.log(e);
   //  return resError({ ctx, errorCode: 401, message: '토튼 인증 실패' });
    new Error('token 인증 실패');
  }
  return resolve(parent, args, ctx, info);

};
