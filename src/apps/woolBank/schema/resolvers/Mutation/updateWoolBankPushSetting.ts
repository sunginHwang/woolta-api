import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { updateSetting } from '../../../services/PushService';

export const updateWoolBankPushSetting: NonNullable<MutationResolvers['updateWoolBankPushSetting']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireRealUser(_ctx);

  return updateSetting(userId, { regularExpenditure: _arg.input.regularExpenditure });
};
