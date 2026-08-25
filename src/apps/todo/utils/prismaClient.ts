import { PrismaClient } from '../../../../prisma/generated/todo/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

// todo 도메인 공유 PrismaClient — 파일마다 new PrismaClient() 금지
export const prismaTodo = new PrismaClient({
  adapter: new PrismaMariaDb(process.env.DASHBOARD_DATABASE_URL!),
});
