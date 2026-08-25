import { PrismaClient } from '../../../../prisma/generated/woolBank/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

// woolBank 도메인 공유 PrismaClient — 파일마다 new PrismaClient() 금지
export const prismaWoolBank = new PrismaClient({
  adapter: new PrismaMariaDb(process.env.WOOLBANK_DATABASE_URL!),
});
