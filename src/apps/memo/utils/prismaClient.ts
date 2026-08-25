import { PrismaClient } from '../../../../prisma/generated/memo/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

// memo 도메인 공유 PrismaClient — 파일마다 new PrismaClient() 금지
export const prismaMemo = new PrismaClient({
  adapter: new PrismaMariaDb(process.env.DASHBOARD_DATABASE_URL!),
});
