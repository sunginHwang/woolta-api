import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { deleteBucketList as deleteBucketListService } from '../../../services/BucketListService';

export const deleteBucketList: NonNullable<MutationResolvers['deleteBucketList']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);

  return deleteBucketListService(userId, Number(_arg.input.id));
};
