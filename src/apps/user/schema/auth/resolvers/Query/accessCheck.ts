import type { QueryResolvers } from './../../../../generates/types.generated';
import { requireAuth } from '../../../../../../shared/auth';

export const accessCheck: NonNullable<QueryResolvers['accessCheck']> = async (_parent, _arg, _ctx) => {
  return requireAuth(_ctx).userId;
};
