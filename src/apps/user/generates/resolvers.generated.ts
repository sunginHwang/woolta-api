/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { accessCheck as Query_accessCheck } from './../schema/auth/resolvers/Query/accessCheck';
import    { checkToken as Query_checkToken } from './../schema/auth/resolvers/Query/checkToken';
import    { me as Query_me } from './../schema/auth/resolvers/Query/me';
import    { shareCode as Query_shareCode } from './../schema/auth/resolvers/Query/shareCode';
import    { loginByShareCode as Mutation_loginByShareCode } from './../schema/auth/resolvers/Mutation/loginByShareCode';
import    { loginBySocial as Mutation_loginBySocial } from './../schema/auth/resolvers/Mutation/loginBySocial';
import    { logout as Mutation_logout } from './../schema/auth/resolvers/Mutation/logout';
import    { refreshTokenCheck as Mutation_refreshTokenCheck } from './../schema/auth/resolvers/Mutation/refreshTokenCheck';
import    { upsertShareCode as Mutation_upsertShareCode } from './../schema/auth/resolvers/Mutation/upsertShareCode';
import    { AuthTokens } from './../schema/auth/resolvers/AuthTokens';
import    { CheckTokenResult } from './../schema/auth/resolvers/CheckTokenResult';
import    { LoginResult } from './../schema/auth/resolvers/LoginResult';
import    { UserInfo } from './../schema/auth/resolvers/UserInfo';
import    { DateTimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { accessCheck: Query_accessCheck,checkToken: Query_checkToken,me: Query_me,shareCode: Query_shareCode },
      Mutation: { loginByShareCode: Mutation_loginByShareCode,loginBySocial: Mutation_loginBySocial,logout: Mutation_logout,refreshTokenCheck: Mutation_refreshTokenCheck,upsertShareCode: Mutation_upsertShareCode },
      
      AuthTokens: AuthTokens,
CheckTokenResult: CheckTokenResult,
LoginResult: LoginResult,
UserInfo: UserInfo,
DateTime: DateTimeResolver
    }