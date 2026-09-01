import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { completeBucketList as completeBucketListService } from '../../../services/BucketListService';

export const completeBucketList: NonNullable<MutationResolvers['completeBucketList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);

  return completeBucketListService(userId, Number(_arg.input.id));
};
