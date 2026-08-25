import type { MutationResolvers } from './../../../generates/types.generated';
import { GraphQLError } from 'graphql';
import { requireRealUser } from '../../../../../shared/auth';
import { prismaWoolBank as prisma } from '../../../utils/prismaClient';

export const deleteRegularExpenditure: NonNullable<MutationResolvers['deleteRegularExpenditure']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  requireRealUser(_ctx);

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
