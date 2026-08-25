import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireRealUser } from '../../../../../../shared/auth';
import { getOwnMemo } from '../../../../services/MemoService';

export const memo: NonNullable<QueryResolvers['memo']> = async (_parent, _arg, _ctx) => {
  const { userId } = requireRealUser(_ctx);

  return getOwnMemo(_arg.id, userId);
};
