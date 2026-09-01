/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { checkAccess as Query_checkAccess } from './../schema/auth/resolvers/Query/checkAccess';
import    { getShareCode as Query_getShareCode } from './../schema/auth/resolvers/Query/getShareCode';
import    { me as Query_me } from './../schema/auth/resolvers/Query/me';
import    { loginByShareCode as Mutation_loginByShareCode } from './../schema/auth/resolvers/Mutation/loginByShareCode';
import    { loginBySocial as Mutation_loginBySocial } from './../schema/auth/resolvers/Mutation/loginBySocial';
import    { logout as Mutation_logout } from './../schema/auth/resolvers/Mutation/logout';
import    { refreshSession as Mutation_refreshSession } from './../schema/auth/resolvers/Mutation/refreshSession';
import    { upsertShareCode as Mutation_upsertShareCode } from './../schema/auth/resolvers/Mutation/upsertShareCode';
import    { UserInfo } from './../schema/auth/resolvers/UserInfo';
import    { DateTimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { checkAccess: Query_checkAccess,getShareCode: Query_getShareCode,me: Query_me },
      Mutation: { loginByShareCode: Mutation_loginByShareCode,loginBySocial: Mutation_loginBySocial,logout: Mutation_logout,refreshSession: Mutation_refreshSession,upsertShareCode: Mutation_upsertShareCode },
      
      UserInfo: UserInfo,
DateTime: DateTimeResolver
    }