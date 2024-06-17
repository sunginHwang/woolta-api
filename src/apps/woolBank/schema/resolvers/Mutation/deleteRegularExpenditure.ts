import type { MutationResolvers } from './../../../generates/types.generated';
import { PrismaClient as WoolBankPrismaClient } from '../../../../../../prisma/generated/woolBank';
import { GraphQLError } from 'graphql';

const prisma = new WoolBankPrismaClient();

export const deleteRegularExpenditure: NonNullable<MutationResolvers['deleteRegularExpenditure']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const regularExpenditure = await prisma.regularExpenditure.findUnique({ where: { id: Number(_arg.id) } });

  if (!regularExpenditure) {
    throw new GraphQLError('삭제할 정기 내역이 존재하지 않습니다.', {
      extensions: {
        code: 'FORBIDDEN',
        myExtension: 'not found regular expenditure',
      },
    });
  }

  try {
    await prisma.regularExpenditure.delete({
      where: { id: Number(_arg.id) },
    });
    return Number(_arg.id);
  } catch {
    return -1;
  }
};
