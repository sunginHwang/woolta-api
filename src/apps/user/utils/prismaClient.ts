import { PrismaClient } from '../../../../prisma/generated/user/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

// user 도메인 공유 PrismaClient — 파일마다 new PrismaClient() 금지
export const prismaUser = new PrismaClient({
  adapter: new PrismaMariaDb(process.env.WOOLBANK_DATABASE_URL!),
});
