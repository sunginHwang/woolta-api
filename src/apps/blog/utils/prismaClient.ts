import { PrismaClient } from '../../../../prisma/generated/blog/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

// blog 도메인 공유 PrismaClient — 파일마다 new PrismaClient() 금지
export const prismaBlog = new PrismaClient({
  adapter: new PrismaMariaDb(process.env.BLOG_DATABASE_URL!),
});
