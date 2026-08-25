import type { QueryResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { getNotExpirationAccounts, getSavedAmount } from '../../../services/AccountService';
import { getBucketListByUserId } from '../../../services/BucketListService';

// 원본 GET /main/: 미만기 계좌 3건 + 버킷리스트 3건 + 총저축액
export const mainInfo: NonNullable<QueryResolvers['mainInfo']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);

  const [accounts, bucketList, { totalSavedAmount, totalSavedAmountExceptCurrentMonth }] = await Promise.all([
    getNotExpirationAccounts(userId, 3),
    getBucketListByUserId(userId, 3),
    getSavedAmount(userId),
  ]);

  return { totalSavedAmount, totalSavedAmountExceptCurrentMonth, accounts, bucketList };
};
