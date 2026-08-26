/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { checkAccess as Query_checkAccess } from './../schema/auth/resolvers/Query/checkAccess';
import    { checkToken as Query_checkToken } from './../schema/auth/resolvers/Query/checkToken';
import    { getShareCode as Query_getShareCode } from './../schema/auth/resolvers/Query/getShareCode';
import    { me as Query_me } from './../schema/auth/resolvers/Query/me';
import    { checkRefreshToken as Mutation_checkRefreshToken } from './../schema/auth/resolvers/Mutation/checkRefreshToken';
import    { loginByShareCode as Mutation_loginByShareCode } from './../schema/auth/resolvers/Mutation/loginByShareCode';
import    { loginBySocial as Mutation_loginBySocial } from './../schema/auth/resolvers/Mutation/loginBySocial';
import    { logout as Mutation_logout } from './../schema/auth/resolvers/Mutation/logout';
import    { upsertShareCode as Mutation_upsertShareCode } from './../schema/auth/resolvers/Mutation/upsertShareCode';
import    { AuthTokens } from './../schema/auth/resolvers/AuthTokens';
import    { CheckTokenResult } from './../schema/auth/resolvers/CheckTokenResult';
import    { LoginResult } from './../schema/auth/resolvers/LoginResult';
import    { UserInfo } from './../schema/auth/resolvers/UserInfo';
import    { DateTimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { checkAccess: Query_checkAccess,checkToken: Query_checkToken,getShareCode: Query_getShareCode,me: Query_me },
      Mutation: { checkRefreshToken: Mutation_checkRefreshToken,loginByShareCode: Mutation_loginByShareCode,loginBySocial: Mutation_loginBySocial,logout: Mutation_logout,upsertShareCode: Mutation_upsertShareCode },
      
      AuthTokens: AuthTokens,
CheckTokenResult: CheckTokenResult,
LoginResult: LoginResult,
UserInfo: UserInfo,
DateTime: DateTimeResolver
    }