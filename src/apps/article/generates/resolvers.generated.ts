/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { articleCategoryList as Query_articleCategoryList } from './../schema/article/resolvers/Query/articleCategoryList';
import    { articleList as Query_articleList } from './../schema/article/resolvers/Query/articleList';
import    { weeklyCurationList as Query_weeklyCurationList } from './../schema/article/resolvers/Query/weeklyCurationList';
import    { addArticleToCuration as Mutation_addArticleToCuration } from './../schema/article/resolvers/Mutation/addArticleToCuration';
import    { createArticle as Mutation_createArticle } from './../schema/article/resolvers/Mutation/createArticle';
import    { createArticleCategory as Mutation_createArticleCategory } from './../schema/article/resolvers/Mutation/createArticleCategory';
import    { deleteArticle as Mutation_deleteArticle } from './../schema/article/resolvers/Mutation/deleteArticle';
import    { deleteArticleCategory as Mutation_deleteArticleCategory } from './../schema/article/resolvers/Mutation/deleteArticleCategory';
import    { importArticleList as Mutation_importArticleList } from './../schema/article/resolvers/Mutation/importArticleList';
import    { removeArticleFromCuration as Mutation_removeArticleFromCuration } from './../schema/article/resolvers/Mutation/removeArticleFromCuration';
import    { updateArticle as Mutation_updateArticle } from './../schema/article/resolvers/Mutation/updateArticle';
import    { updateArticleCategory as Mutation_updateArticleCategory } from './../schema/article/resolvers/Mutation/updateArticleCategory';
import    { Article } from './../schema/article/resolvers/Article';
import    { ArticleCategory } from './../schema/article/resolvers/ArticleCategory';
import    { ArticleCategoryList } from './../schema/article/resolvers/ArticleCategoryList';
import    { ArticleIdMapping } from './../schema/article/resolvers/ArticleIdMapping';
import    { ArticleImportResult } from './../schema/article/resolvers/ArticleImportResult';
import    { ArticleList } from './../schema/article/resolvers/ArticleList';
import    { ArticleSeo } from './../schema/article/resolvers/ArticleSeo';
import    { WeeklyCuration } from './../schema/article/resolvers/WeeklyCuration';
import    { WeeklyCurationList } from './../schema/article/resolvers/WeeklyCurationList';
import    { DateTimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { articleCategoryList: Query_articleCategoryList,articleList: Query_articleList,weeklyCurationList: Query_weeklyCurationList },
      Mutation: { addArticleToCuration: Mutation_addArticleToCuration,createArticle: Mutation_createArticle,createArticleCategory: Mutation_createArticleCategory,deleteArticle: Mutation_deleteArticle,deleteArticleCategory: Mutation_deleteArticleCategory,importArticleList: Mutation_importArticleList,removeArticleFromCuration: Mutation_removeArticleFromCuration,updateArticle: Mutation_updateArticle,updateArticleCategory: Mutation_updateArticleCategory },
      
      Article: Article,
ArticleCategory: ArticleCategory,
ArticleCategoryList: ArticleCategoryList,
ArticleIdMapping: ArticleIdMapping,
ArticleImportResult: ArticleImportResult,
ArticleList: ArticleList,
ArticleSeo: ArticleSeo,
WeeklyCuration: WeeklyCuration,
WeeklyCurationList: WeeklyCurationList,
DateTime: DateTimeResolver
    }