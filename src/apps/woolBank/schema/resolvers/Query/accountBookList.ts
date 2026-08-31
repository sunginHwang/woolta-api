import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getAccountBookListByMonth } from '../../../services/AccountBookService';
import { toGqlAccountBook } from '../../../utils/enums';

export const accountBookList: NonNullable<QueryResolvers['accountBookList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);

  const accountBookList = await getAccountBookListByMonth(userId, _arg.dateTime);

  const itemList = accountBookList.map(toGqlAccountBook);

  return { totalCount: itemList.length, itemList };
};
