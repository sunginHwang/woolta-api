import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getAccountBookStatisticList as getAccountBookStatisticListService } from '../../../services/AccountBookService';
import { gqlToDbAccountBookCategoryType } from '../../../utils/enums';

export const getAccountBookStatisticList: NonNullable<QueryResolvers['getAccountBookStatisticList']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireAuth(_ctx);

  const itemList = await getAccountBookStatisticListService(userId, {
    type: gqlToDbAccountBookCategoryType(_arg.type),
    startDate: _arg.startDate,
    endDate: _arg.endDate,
  });

  return { totalCount: itemList.length, itemList };
};
