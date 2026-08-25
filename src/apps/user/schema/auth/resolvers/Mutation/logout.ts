import type { MutationResolvers } from './../../../../generates/types.generated';
import { setAuthCookie } from '../../../../../../shared/auth';

export const logout: NonNullable<MutationResolvers['logout']> = async (_parent, _arg, _ctx) => {
  setAuthCookie(_ctx.res, '', '');

  return true;
};
