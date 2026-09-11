import type { MutationResolvers } from './../../../generates/types.generated';
import { requireRealUser } from '../../../../../shared/auth';
import { createAccountBookList as createAccountBookListService } from '../../../services/AccountBookService';
import { gqlToDbAccountBookCategoryType, toGqlAccountBook } from '../../../utils/enums';

// 카드 내역서 벌크 등록 — 전부 성공하거나 전부 실패한다(서비스가 단일 트랜잭션으로 처리)
export const createAccountBookList: NonNullable<MutationResolvers['createAccountBookList']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { userId } = requireRealUser(_ctx);

  const created = await createAccountBookListService(
    userId,
    _arg.input.itemList.map((item) => ({
      title: item.title,
      amount: item.amount,
      memo: item.memo,
      type: gqlToDbAccountBookCategoryType(item.type),
      registerDateTime: item.registerDateTime,
      categoryId: item.categoryId,
      isDisabledBudget: item.isDisabledBudget,
    })),
  );

  return { createdCount: created.length, itemList: created.map(toGqlAccountBook) };
};
