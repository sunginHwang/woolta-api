import type { MutationResolvers } from './../../../generates/types.generated';
import { requireAuth } from '../../../../../shared/auth';
import { completeBucketList as completeBucketListService } from '../../../services/BucketListService';

export const completeBucketList: NonNullable<MutationResolvers['completeBucketList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireAuth(_ctx);

  return completeBucketListService(userId, Number(_arg.input.id));
};
