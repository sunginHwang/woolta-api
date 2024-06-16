import type { QueryResolvers } from './../../../generates/types.generated';
import { PrismaClient as WoolBankPrismaClient } from '../../../../../../prisma/generated/woolBank';
import { isAuthenticated } from '../../../middlewares/isAuthenticated';
import { GraphQLError } from 'graphql/error';

const prismaW = new WoolBankPrismaClient();

export const account: NonNullable<QueryResolvers['account']> = isAuthenticated(async (_parent, _args, _ctx) => {
  const account = await prismaW.account.findUnique({
    where: { id: Number(_args.id) },
  });
  if (!account) {
    return null;
  }

  if (_args.id === '12') {
    throw new GraphQLError('my message', {
      extensions: {
        code: 'FORBIDDEN',
        myExtension: 'foo',
      },
    });
  }

  const { id, taxType, regularTransferDate, rate, title, amount } = account;
  return {
    id,
    taxType,
    regularTransferDate,
    rate,
    title,
    amount,
  };
});
