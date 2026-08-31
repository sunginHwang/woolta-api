import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { deleteRegularExpenditure as deleteRegularExpenditureService } from '../../../services/RegularExpenditureService';

export const deleteRegularExpenditure: NonNullable<MutationResolvers['deleteRegularExpenditure']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  requireRealUser(_ctx);

  return deleteRegularExpenditureService(Number(_arg.input.id));
};
