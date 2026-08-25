import { PrismaClient } from '../../../../prisma/generated/todo';

// todo 도메인 공유 PrismaClient — 파일마다 new PrismaClient() 금지
export const prismaTodo = new PrismaClient();
