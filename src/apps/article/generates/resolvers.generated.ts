/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { articleCategories as Query_articleCategories } from './../schema/article/resolvers/Query/articleCategories';
import    { articleCurations as Query_articleCurations } from './../schema/article/resolvers/Query/articleCurations';
import    { articles as Query_articles } from './../schema/article/resolvers/Query/articles';
import    { addArticleToCuration as Mutation_addArticleToCuration } from './../schema/article/resolvers/Mutation/addArticleToCuration';
import    { createArticle as Mutation_createArticle } from './../schema/article/resolvers/Mutation/createArticle';
import    { createArticleCategory as Mutation_createArticleCategory } from './../schema/article/resolvers/Mutation/createArticleCategory';
import    { deleteArticle as Mutation_deleteArticle } from './../schema/article/resolvers/Mutation/deleteArticle';
import    { deleteArticleCategory as Mutation_deleteArticleCategory } from './../schema/article/resolvers/Mutation/deleteArticleCategory';
import    { importArticles as Mutation_importArticles } from './../schema/article/resolvers/Mutation/importArticles';
import    { removeArticleFromCuration as Mutation_removeArticleFromCuration } from './../schema/article/resolvers/Mutation/removeArticleFromCuration';
import    { updateArticle as Mutation_updateArticle } from './../schema/article/resolvers/Mutation/updateArticle';
import    { updateArticleCategory as Mutation_updateArticleCategory } from './../schema/article/resolvers/Mutation/updateArticleCategory';
import    { Article } from './../schema/article/resolvers/Article';
import    { ArticleCategory } from './../schema/article/resolvers/ArticleCategory';
import    { ArticleIdMapping } from './../schema/article/resolvers/ArticleIdMapping';
import    { ArticleImportResult } from './../schema/article/resolvers/ArticleImportResult';
import    { ArticleSeo } from './../schema/article/resolvers/ArticleSeo';
import    { WeeklyCuration } from './../schema/article/resolvers/WeeklyCuration';
import    { DateTimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { articleCategories: Query_articleCategories,articleCurations: Query_articleCurations,articles: Query_articles },
      Mutation: { addArticleToCuration: Mutation_addArticleToCuration,createArticle: Mutation_createArticle,createArticleCategory: Mutation_createArticleCategory,deleteArticle: Mutation_deleteArticle,deleteArticleCategory: Mutation_deleteArticleCategory,importArticles: Mutation_importArticles,removeArticleFromCuration: Mutation_removeArticleFromCuration,updateArticle: Mutation_updateArticle,updateArticleCategory: Mutation_updateArticleCategory },
      
      Article: Article,
ArticleCategory: ArticleCategory,
ArticleIdMapping: ArticleIdMapping,
ArticleImportResult: ArticleImportResult,
ArticleSeo: ArticleSeo,
WeeklyCuration: WeeklyCuration,
DateTime: DateTimeResolver
    }