/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { categoryList as Query_categoryList } from './../schema/post/resolvers/Query/categoryList';
import    { getRecentPostList as Query_getRecentPostList } from './../schema/post/resolvers/Query/getRecentPostList';
import    { post as Query_post } from './../schema/post/resolvers/Query/post';
import    { postList as Query_postList } from './../schema/post/resolvers/Query/postList';
import    { user as Query_user } from './../schema/user/resolvers/Query/user';
import    { createPost as Mutation_createPost } from './../schema/post/resolvers/Mutation/createPost';
import    { deletePost as Mutation_deletePost } from './../schema/post/resolvers/Mutation/deletePost';
import    { sendPushToAll as Mutation_sendPushToAll } from './../schema/push/resolvers/Mutation/sendPushToAll';
import    { subscribeWebPush as Mutation_subscribeWebPush } from './../schema/push/resolvers/Mutation/subscribeWebPush';
import    { unsubscribeWebPush as Mutation_unsubscribeWebPush } from './../schema/push/resolvers/Mutation/unsubscribeWebPush';
import    { updatePost as Mutation_updatePost } from './../schema/post/resolvers/Mutation/updatePost';
import    { Category } from './../schema/post/resolvers/Category';
import    { CategoryList } from './../schema/post/resolvers/CategoryList';
import    { Post } from './../schema/post/resolvers/Post';
import    { PostList } from './../schema/post/resolvers/PostList';
import    { PostSummary } from './../schema/post/resolvers/PostSummary';
import    { PostUpsertResult } from './../schema/post/resolvers/PostUpsertResult';
import    { User } from './../schema/user/resolvers/User';
import    { Writer } from './../schema/post/resolvers/Writer';
import    { DateTimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { categoryList: Query_categoryList,getRecentPostList: Query_getRecentPostList,post: Query_post,postList: Query_postList,user: Query_user },
      Mutation: { createPost: Mutation_createPost,deletePost: Mutation_deletePost,sendPushToAll: Mutation_sendPushToAll,subscribeWebPush: Mutation_subscribeWebPush,unsubscribeWebPush: Mutation_unsubscribeWebPush,updatePost: Mutation_updatePost },
      
      Category: Category,
CategoryList: CategoryList,
Post: Post,
PostList: PostList,
PostSummary: PostSummary,
PostUpsertResult: PostUpsertResult,
User: User,
Writer: Writer,
DateTime: DateTimeResolver
    }