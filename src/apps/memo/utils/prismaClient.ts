import { PrismaClient } from '../../../../prisma/generated/memo';

// memo 도메인 공유 PrismaClient — 파일마다 new PrismaClient() 금지
export const prismaMemo = new PrismaClient();
