import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getAccountBookByIdAndUserId } from '../../../services/AccountBookService';
import { toGqlAccountBook } from '../../../utils/enums';

export const accountBook: NonNullable<QueryResolvers['accountBook']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);

  const accountBook = await getAccountBookByIdAndUserId(Number(_arg.id), userId);

  return accountBook ? toGqlAccountBook(accountBook) : null;
};
