import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireAuth } from '../../../../../../shared/auth';

export const checkAccess: NonNullable<QueryResolvers['checkAccess']> = async (_parent, _arg, _ctx) => {
  return requireAuth(_ctx).userId;
};
