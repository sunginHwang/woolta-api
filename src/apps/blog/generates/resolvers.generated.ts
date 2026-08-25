/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { allPosts as Query_allPosts } from './../schema/post/resolvers/Query/allPosts';
import    { categories as Query_categories } from './../schema/post/resolvers/Query/categories';
import    { post as Query_post } from './../schema/post/resolvers/Query/post';
import    { postsByCategory as Query_postsByCategory } from './../schema/post/resolvers/Query/postsByCategory';
import    { recentPosts as Query_recentPosts } from './../schema/post/resolvers/Query/recentPosts';
import    { user as Query_user } from './../schema/user/resolvers/Query/user';
import    { createPost as Mutation_createPost } from './../schema/post/resolvers/Mutation/createPost';
import    { deletePost as Mutation_deletePost } from './../schema/post/resolvers/Mutation/deletePost';
import    { sendPushToAll as Mutation_sendPushToAll } from './../schema/push/resolvers/Mutation/sendPushToAll';
import    { subscribeWebPush as Mutation_subscribeWebPush } from './../schema/push/resolvers/Mutation/subscribeWebPush';
import    { unsubscribeWebPush as Mutation_unsubscribeWebPush } from './../schema/push/resolvers/Mutation/unsubscribeWebPush';
import    { updatePost as Mutation_updatePost } from './../schema/post/resolvers/Mutation/updatePost';
import    { Category } from './../schema/post/resolvers/Category';
import    { Post } from './../schema/post/resolvers/Post';
import    { PostSummary } from './../schema/post/resolvers/PostSummary';
import    { PostUpsertResult } from './../schema/post/resolvers/PostUpsertResult';
import    { User } from './../schema/user/resolvers/User';
import    { Writer } from './../schema/post/resolvers/Writer';
import    { DateTimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { allPosts: Query_allPosts,categories: Query_categories,post: Query_post,postsByCategory: Query_postsByCategory,recentPosts: Query_recentPosts,user: Query_user },
      Mutation: { createPost: Mutation_createPost,deletePost: Mutation_deletePost,sendPushToAll: Mutation_sendPushToAll,subscribeWebPush: Mutation_subscribeWebPush,unsubscribeWebPush: Mutation_unsubscribeWebPush,updatePost: Mutation_updatePost },
      
      Category: Category,
Post: Post,
PostSummary: PostSummary,
PostUpsertResult: PostUpsertResult,
User: User,
Writer: Writer,
DateTime: DateTimeResolver
    }