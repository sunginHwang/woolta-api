import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { createAndPush } from '../../../services/NotificationService';

// aiho 봇은 봇 인증(x-woolta-user-id)으로 authType 'user' 가 되어 여기를 통과한다.
export const createWoolBankNotification: NonNullable<MutationResolvers['createWoolBankNotification']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireRealUser(_ctx);
  const { kind, title, summary, content, sendPush } = _arg.input;

  return createAndPush(userId, { kind, title, summary, content, sendPush });
};
