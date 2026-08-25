import express, { Request, Response} from "express";
import path from 'path';
import cron from 'node-cron';
import {PrismaClient as BlogPrismaClient, User} from "../prisma/generated/blog";
import {PrismaClient as WoolBankPrismaClient, User as WooltaUser} from "../prisma/generated/woolBank";
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServer } from '@apollo/server';
import { typeDefs as WoolBankTypeDefs } from './apps/woolBank/generates/typeDefs.generated'
import { resolvers as WoolBankResolvers } from './apps/woolBank/generates/resolvers.generated'

import { typeDefs as BlogTypeDefs } from './apps/blog/generates/typeDefs.generated'
import { resolvers as BlogResolvers } from './apps/blog/generates/resolvers.generated'
import { typeDefs as UserTypeDefs } from './apps/user/generates/typeDefs.generated'
import { resolvers as UserResolvers } from './apps/user/generates/resolvers.generated'
import { typeDefs as TodoTypeDefs } from './apps/todo/generates/typeDefs.generated'
import { resolvers as TodoResolvers } from './apps/todo/generates/resolvers.generated'
import { typeDefs as MemoTypeDefs } from './apps/memo/generates/typeDefs.generated'
import { resolvers as MemoResolvers } from './apps/memo/generates/resolvers.generated'
import { typeDefs as ArticleTypeDefs } from './apps/article/generates/typeDefs.generated'
import { resolvers as ArticleResolvers } from './apps/article/generates/resolvers.generated'
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import blogFileUploadRouter from './apps/blog/routes/fileUpload';
import woolBankFileUploadRouter from './apps/woolBank/routes/fileUpload';
import { buildAuthContext } from './shared/auth';
import { scheduleRegularExpenditure } from './apps/woolBank/services/RegularExpenditureService';

async function startServer() {
    const prismaB = new BlogPrismaClient();
    const prismaW = new WoolBankPrismaClient();

    const app: express.Application = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    const blogServer = new ApolloServer<any>({
        typeDefs: BlogTypeDefs,
        resolvers: BlogResolvers,

    });
    const woolBankServer = new ApolloServer<any>({
        typeDefs: WoolBankTypeDefs,
        resolvers: WoolBankResolvers,
    });
    const userServer = new ApolloServer<any>({
        typeDefs: UserTypeDefs,
        resolvers: UserResolvers,
    });
    const todoServer = new ApolloServer<any>({
        typeDefs: TodoTypeDefs,
        resolvers: TodoResolvers,
    });
    const memoServer = new ApolloServer<any>({
        typeDefs: MemoTypeDefs,
        resolvers: MemoResolvers,
    });
    const articleServer = new ApolloServer<any>({
        typeDefs: ArticleTypeDefs,
        resolvers: ArticleResolvers,
    });

    await blogServer.start();
    await woolBankServer.start();
    await userServer.start();
    await todoServer.start();
    await memoServer.start();
    await articleServer.start();

    app.use(
        '/blog/graphql',
        bodyParser.json(),
        expressMiddleware(blogServer, {
            context: async ({ req, res }) => {
                return { req, res }
            },
        }),
    );

    app.use('/blog/file/upload', blogFileUploadRouter);

    app.use(
        '/woolBank/graphql',
        bodyParser.json(),
        expressMiddleware(woolBankServer, {
            context: async ({ req, res }) => {
                return { req, res, auth: await buildAuthContext(req, res) }
            },
        }),
    );

    app.use('/woolBank/file/upload', woolBankFileUploadRouter);
    app.use('/uploads', express.static(process.env.WOOLBANK_UPLOAD_PATH ?? path.join(process.cwd(), 'uploads')));

    app.use(
        '/user/graphql',
        bodyParser.json(),
        expressMiddleware(userServer, {
            context: async ({ req, res }) => {
                return { req, res, auth: await buildAuthContext(req, res) }
            },
        }),
    );

    // 대시보드 3개 앱 (todo / memo / article-curation) — 스펙: woolta/docs/api-spec-todo-memo-article.md
    app.use(
        '/todo/graphql',
        bodyParser.json(),
        expressMiddleware(todoServer, {
            context: async ({ req, res }) => {
                return { req, res, auth: await buildAuthContext(req, res) }
            },
        }),
    );

    app.use(
        '/memo/graphql',
        bodyParser.json(),
        expressMiddleware(memoServer, {
            context: async ({ req, res }) => {
                return { req, res, auth: await buildAuthContext(req, res) }
            },
        }),
    );

    app.use(
        '/article/graphql',
        bodyParser.json(),
        expressMiddleware(articleServer, {
            context: async ({ req, res }) => {
                return { req, res, auth: await buildAuthContext(req, res) }
            },
        }),
    );

    // 매일 자정 정기지출 자동 등록 (원본 woolbankApi cron).
    // 기존 Koa 서버와 중복 실행 방지를 위해 env로 명시 활성화 — Koa 서버 내릴 때 ENABLE_WOOLBANK_CRON=1 로 켠다.
    if (process.env.ENABLE_WOOLBANK_CRON === '1') {
        cron.schedule('0 0 0 * * *', async () => {
            await scheduleRegularExpenditure();
        });
        console.log('woolBank regular expenditure cron enabled');
    }

    app.get("/", (req: Request, res: Response) => {
        prismaB.user.findMany().then((users:User[]) => {
            console.log(users);
            res.json({ users });
        });
    });

    app.get("/blog2", (req: Request, res: Response) => {
        prismaW.user.findMany().then((users:WooltaUser[]) => {
            console.log(users);
            res.json({ users });
        });
    });

// Start the Express server
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
        console.log(`Blog GraphQL endpoint: http://localhost:${PORT}/blog/graphql`);
        console.log(`WoolBank GraphQL endpoint: http://localhost:${PORT}/woolBank/graphql`);
        console.log(`User GraphQL endpoint: http://localhost:${PORT}/user/graphql`);
        console.log(`Todo GraphQL endpoint: http://localhost:${PORT}/todo/graphql`);
        console.log(`Memo GraphQL endpoint: http://localhost:${PORT}/memo/graphql`);
        console.log(`Article GraphQL endpoint: http://localhost:${PORT}/article/graphql`);
    });
}

startServer();
