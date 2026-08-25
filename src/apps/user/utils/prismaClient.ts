import { PrismaClient as UserPrismaClient } from '../../../../prisma/generated/user';

export const prismaUser = new UserPrismaClient();
