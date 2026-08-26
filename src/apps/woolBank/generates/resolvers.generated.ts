/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { account as Query_account } from './../schema/resolvers/Query/account';
import    { accountBook as Query_accountBook } from './../schema/resolvers/Query/accountBook';
import    { accountBookCategoryImageList as Query_accountBookCategoryImageList } from './../schema/resolvers/Query/accountBookCategoryImageList';
import    { accountBookCategoryList as Query_accountBookCategoryList } from './../schema/resolvers/Query/accountBookCategoryList';
import    { accountBookList as Query_accountBookList } from './../schema/resolvers/Query/accountBookList';
import    { accountList as Query_accountList } from './../schema/resolvers/Query/accountList';
import    { bucketList as Query_bucketList } from './../schema/resolvers/Query/bucketList';
import    { bucketListSummaryList as Query_bucketListSummaryList } from './../schema/resolvers/Query/bucketListSummaryList';
import    { getAccountBookStatisticList as Query_getAccountBookStatisticList } from './../schema/resolvers/Query/getAccountBookStatisticList';
import    { getAccountLastUpdatedDate as Query_getAccountLastUpdatedDate } from './../schema/resolvers/Query/getAccountLastUpdatedDate';
import    { getBucketListItemLastUpdatedDate as Query_getBucketListItemLastUpdatedDate } from './../schema/resolvers/Query/getBucketListItemLastUpdatedDate';
import    { getBucketListLastUpdatedDate as Query_getBucketListLastUpdatedDate } from './../schema/resolvers/Query/getBucketListLastUpdatedDate';
import    { mainInfo as Query_mainInfo } from './../schema/resolvers/Query/mainInfo';
import    { regularExpenditureGroupList as Query_regularExpenditureGroupList } from './../schema/resolvers/Query/regularExpenditureGroupList';
import    { completeAccountExpiration as Mutation_completeAccountExpiration } from './../schema/resolvers/Mutation/completeAccountExpiration';
import    { completeBucketList as Mutation_completeBucketList } from './../schema/resolvers/Mutation/completeBucketList';
import    { createAccount as Mutation_createAccount } from './../schema/resolvers/Mutation/createAccount';
import    { createAccountBook as Mutation_createAccountBook } from './../schema/resolvers/Mutation/createAccountBook';
import    { createAccountBookCategory as Mutation_createAccountBookCategory } from './../schema/resolvers/Mutation/createAccountBookCategory';
import    { createBucketList as Mutation_createBucketList } from './../schema/resolvers/Mutation/createBucketList';
import    { createBucketListTodo as Mutation_createBucketListTodo } from './../schema/resolvers/Mutation/createBucketListTodo';
import    { createDeposit as Mutation_createDeposit } from './../schema/resolvers/Mutation/createDeposit';
import    { createRegularExpenditure as Mutation_createRegularExpenditure } from './../schema/resolvers/Mutation/createRegularExpenditure';
import    { deleteAccount as Mutation_deleteAccount } from './../schema/resolvers/Mutation/deleteAccount';
import    { deleteAccountBook as Mutation_deleteAccountBook } from './../schema/resolvers/Mutation/deleteAccountBook';
import    { deleteAccountBookCategory as Mutation_deleteAccountBookCategory } from './../schema/resolvers/Mutation/deleteAccountBookCategory';
import    { deleteBucketList as Mutation_deleteBucketList } from './../schema/resolvers/Mutation/deleteBucketList';
import    { deleteBucketListTodo as Mutation_deleteBucketListTodo } from './../schema/resolvers/Mutation/deleteBucketListTodo';
import    { deleteRegularExpenditure as Mutation_deleteRegularExpenditure } from './../schema/resolvers/Mutation/deleteRegularExpenditure';
import    { updateAccountBook as Mutation_updateAccountBook } from './../schema/resolvers/Mutation/updateAccountBook';
import    { updateBucketList as Mutation_updateBucketList } from './../schema/resolvers/Mutation/updateBucketList';
import    { updateBucketListTodoComplete as Mutation_updateBucketListTodoComplete } from './../schema/resolvers/Mutation/updateBucketListTodoComplete';
import    { Account } from './../schema/resolvers/Account';
import    { AccountBook } from './../schema/resolvers/AccountBook';
import    { AccountBookCategory } from './../schema/resolvers/AccountBookCategory';
import    { AccountBookCategoryImage } from './../schema/resolvers/AccountBookCategoryImage';
import    { AccountBookCategoryImageList } from './../schema/resolvers/AccountBookCategoryImageList';
import    { AccountBookCategoryList } from './../schema/resolvers/AccountBookCategoryList';
import    { AccountBookList } from './../schema/resolvers/AccountBookList';
import    { AccountList } from './../schema/resolvers/AccountList';
import    { BucketList } from './../schema/resolvers/BucketList';
import    { BucketListSummary } from './../schema/resolvers/BucketListSummary';
import    { BucketListSummaryList } from './../schema/resolvers/BucketListSummaryList';
import    { BucketListTodo } from './../schema/resolvers/BucketListTodo';
import    { CustomRegularExpenditure } from './../schema/resolvers/CustomRegularExpenditure';
import    { Deposit } from './../schema/resolvers/Deposit';
import    { MainInfo } from './../schema/resolvers/MainInfo';
import    { RegularExpenditure } from './../schema/resolvers/RegularExpenditure';
import    { RegularExpenditureGroup } from './../schema/resolvers/RegularExpenditureGroup';
import    { RegularExpenditureGroupList } from './../schema/resolvers/RegularExpenditureGroupList';
import    { SavingType } from './../schema/resolvers/SavingType';
import    { Statistic } from './../schema/resolvers/Statistic';
import    { StatisticItem } from './../schema/resolvers/StatisticItem';
import    { StatisticList } from './../schema/resolvers/StatisticList';
import    { UserShareCode } from './../schema/resolvers/UserShareCode';
import    { WoolBankUser } from './../schema/resolvers/WoolBankUser';
import    { DateTime } from './../schema/resolvers/DateTime';
    export const resolvers: Resolvers = {
      Query: { account: Query_account,accountBook: Query_accountBook,accountBookCategoryImageList: Query_accountBookCategoryImageList,accountBookCategoryList: Query_accountBookCategoryList,accountBookList: Query_accountBookList,accountList: Query_accountList,bucketList: Query_bucketList,bucketListSummaryList: Query_bucketListSummaryList,getAccountBookStatisticList: Query_getAccountBookStatisticList,getAccountLastUpdatedDate: Query_getAccountLastUpdatedDate,getBucketListItemLastUpdatedDate: Query_getBucketListItemLastUpdatedDate,getBucketListLastUpdatedDate: Query_getBucketListLastUpdatedDate,mainInfo: Query_mainInfo,regularExpenditureGroupList: Query_regularExpenditureGroupList },
      Mutation: { completeAccountExpiration: Mutation_completeAccountExpiration,completeBucketList: Mutation_completeBucketList,createAccount: Mutation_createAccount,createAccountBook: Mutation_createAccountBook,createAccountBookCategory: Mutation_createAccountBookCategory,createBucketList: Mutation_createBucketList,createBucketListTodo: Mutation_createBucketListTodo,createDeposit: Mutation_createDeposit,createRegularExpenditure: Mutation_createRegularExpenditure,deleteAccount: Mutation_deleteAccount,deleteAccountBook: Mutation_deleteAccountBook,deleteAccountBookCategory: Mutation_deleteAccountBookCategory,deleteBucketList: Mutation_deleteBucketList,deleteBucketListTodo: Mutation_deleteBucketListTodo,deleteRegularExpenditure: Mutation_deleteRegularExpenditure,updateAccountBook: Mutation_updateAccountBook,updateBucketList: Mutation_updateBucketList,updateBucketListTodoComplete: Mutation_updateBucketListTodoComplete },
      
      Account: Account,
AccountBook: AccountBook,
AccountBookCategory: AccountBookCategory,
AccountBookCategoryImage: AccountBookCategoryImage,
AccountBookCategoryImageList: AccountBookCategoryImageList,
AccountBookCategoryList: AccountBookCategoryList,
AccountBookList: AccountBookList,
AccountList: AccountList,
BucketList: BucketList,
BucketListSummary: BucketListSummary,
BucketListSummaryList: BucketListSummaryList,
BucketListTodo: BucketListTodo,
CustomRegularExpenditure: CustomRegularExpenditure,
Deposit: Deposit,
MainInfo: MainInfo,
RegularExpenditure: RegularExpenditure,
RegularExpenditureGroup: RegularExpenditureGroup,
RegularExpenditureGroupList: RegularExpenditureGroupList,
SavingType: SavingType,
Statistic: Statistic,
StatisticItem: StatisticItem,
StatisticList: StatisticList,
UserShareCode: UserShareCode,
WoolBankUser: WoolBankUser,
DateTime: DateTime
    }