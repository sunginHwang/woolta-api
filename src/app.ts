import express, { Request, Response} from "express";
import {PrismaClient as BlogPrismaClient, User} from "../prisma/generated/blog";
import {PrismaClient as WoolBankPrismaClient, User as WooltaUser} from "../prisma/generated/woolBank";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

import { typeDefs as WoolBankTypeDefs } from './apps/woolBank/generates/typeDefs.generated'
import { resolvers as WoolBankResolvers } from './apps/woolBank/generates/resolvers.generated'

import { typeDefs as BlogTypeDefs } from './apps/blog/generates/typeDefs.generated'
import { resolvers as BlogResolvers } from './apps/blog/generates/resolvers.generated'


async function startServer() {
    const prismaB = new BlogPrismaClient();
    const prismaW = new WoolBankPrismaClient();

    const app: express.Application = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    const blogServer = new ApolloServer<any>({ typeDefs: BlogTypeDefs, resolvers: BlogResolvers});
    const woolBankServer = new ApolloServer<any>({ typeDefs: WoolBankTypeDefs, resolvers: WoolBankResolvers});

    await blogServer.start();
    await woolBankServer.start();


    app.use(
        '/blog/graphql',
        express.json(),
        expressMiddleware(blogServer),
    );

    app.use(
        '/woolBank/graphql',
        express.json(),
        expressMiddleware(woolBankServer),
    );


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
        console.log(`Wool GraphQL endpoint: http://localhost:${PORT}/wool/graphql`);
    });
}

startServer();
