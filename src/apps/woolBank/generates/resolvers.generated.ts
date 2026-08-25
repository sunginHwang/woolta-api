/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { account as Query_account } from './../schema/resolvers/Query/account';
import    { accountBook as Query_accountBook } from './../schema/resolvers/Query/accountBook';
import    { accountBookCategoryList as Query_accountBookCategoryList } from './../schema/resolvers/Query/accountBookCategoryList';
import    { accountBookImageList as Query_accountBookImageList } from './../schema/resolvers/Query/accountBookImageList';
import    { accountBookList as Query_accountBookList } from './../schema/resolvers/Query/accountBookList';
import    { accountBookStatisticList as Query_accountBookStatisticList } from './../schema/resolvers/Query/accountBookStatisticList';
import    { accountLastUpdatedDate as Query_accountLastUpdatedDate } from './../schema/resolvers/Query/accountLastUpdatedDate';
import    { account_list as Query_account_list } from './../schema/resolvers/Query/account_list';
import    { bucketList as Query_bucketList } from './../schema/resolvers/Query/bucketList';
import    { bucketListDetail as Query_bucketListDetail } from './../schema/resolvers/Query/bucketListDetail';
import    { bucketListItemLastUpdatedDate as Query_bucketListItemLastUpdatedDate } from './../schema/resolvers/Query/bucketListItemLastUpdatedDate';
import    { bucketListLastUpdatedDate as Query_bucketListLastUpdatedDate } from './../schema/resolvers/Query/bucketListLastUpdatedDate';
import    { mainInfo as Query_mainInfo } from './../schema/resolvers/Query/mainInfo';
import    { regularExpenditureList as Query_regularExpenditureList } from './../schema/resolvers/Query/regularExpenditureList';
import    { completeAccountExpiration as Mutation_completeAccountExpiration } from './../schema/resolvers/Mutation/completeAccountExpiration';
import    { completeBucketList as Mutation_completeBucketList } from './../schema/resolvers/Mutation/completeBucketList';
import    { createAccount as Mutation_createAccount } from './../schema/resolvers/Mutation/createAccount';
import    { createAccountBook as Mutation_createAccountBook } from './../schema/resolvers/Mutation/createAccountBook';
import    { createAccountBookCategory as Mutation_createAccountBookCategory } from './../schema/resolvers/Mutation/createAccountBookCategory';
import    { createBucketList as Mutation_createBucketList } from './../schema/resolvers/Mutation/createBucketList';
import    { createDeposit as Mutation_createDeposit } from './../schema/resolvers/Mutation/createDeposit';
import    { createRegularExpenditure as Mutation_createRegularExpenditure } from './../schema/resolvers/Mutation/createRegularExpenditure';
import    { createTodo as Mutation_createTodo } from './../schema/resolvers/Mutation/createTodo';
import    { deleteAccount as Mutation_deleteAccount } from './../schema/resolvers/Mutation/deleteAccount';
import    { deleteAccountBook as Mutation_deleteAccountBook } from './../schema/resolvers/Mutation/deleteAccountBook';
import    { deleteAccountBookCategory as Mutation_deleteAccountBookCategory } from './../schema/resolvers/Mutation/deleteAccountBookCategory';
import    { deleteBucketList as Mutation_deleteBucketList } from './../schema/resolvers/Mutation/deleteBucketList';
import    { deleteRegularExpenditure as Mutation_deleteRegularExpenditure } from './../schema/resolvers/Mutation/deleteRegularExpenditure';
import    { deleteTodo as Mutation_deleteTodo } from './../schema/resolvers/Mutation/deleteTodo';
import    { updateAccountBook as Mutation_updateAccountBook } from './../schema/resolvers/Mutation/updateAccountBook';
import    { updateBucketList as Mutation_updateBucketList } from './../schema/resolvers/Mutation/updateBucketList';
import    { updateTodoComplete as Mutation_updateTodoComplete } from './../schema/resolvers/Mutation/updateTodoComplete';
import    { Account } from './../schema/resolvers/Account';
import    { AccountBook } from './../schema/resolvers/AccountBook';
import    { AccountBookCategory } from './../schema/resolvers/AccountBookCategory';
import    { AccountBookCategoryImage } from './../schema/resolvers/AccountBookCategoryImage';
import    { BucketList } from './../schema/resolvers/BucketList';
import    { BucketListSummary } from './../schema/resolvers/BucketListSummary';
import    { CustomRegularExpenditure } from './../schema/resolvers/CustomRegularExpenditure';
import    { CustomRegularExpenditureResponse } from './../schema/resolvers/CustomRegularExpenditureResponse';
import    { Deposit } from './../schema/resolvers/Deposit';
import    { MainInfo } from './../schema/resolvers/MainInfo';
import    { RegularExpenditure } from './../schema/resolvers/RegularExpenditure';
import    { SavingType } from './../schema/resolvers/SavingType';
import    { Statistic } from './../schema/resolvers/Statistic';
import    { StatisticItem } from './../schema/resolvers/StatisticItem';
import    { Todo } from './../schema/resolvers/Todo';
import    { User } from './../schema/resolvers/User';
import    { UserShareCode } from './../schema/resolvers/UserShareCode';
import    { DateTime } from './../schema/resolvers/DateTime';
    export const resolvers: Resolvers = {
      Query: { account: Query_account,accountBook: Query_accountBook,accountBookCategoryList: Query_accountBookCategoryList,accountBookImageList: Query_accountBookImageList,accountBookList: Query_accountBookList,accountBookStatisticList: Query_accountBookStatisticList,accountLastUpdatedDate: Query_accountLastUpdatedDate,account_list: Query_account_list,bucketList: Query_bucketList,bucketListDetail: Query_bucketListDetail,bucketListItemLastUpdatedDate: Query_bucketListItemLastUpdatedDate,bucketListLastUpdatedDate: Query_bucketListLastUpdatedDate,mainInfo: Query_mainInfo,regularExpenditureList: Query_regularExpenditureList },
      Mutation: { completeAccountExpiration: Mutation_completeAccountExpiration,completeBucketList: Mutation_completeBucketList,createAccount: Mutation_createAccount,createAccountBook: Mutation_createAccountBook,createAccountBookCategory: Mutation_createAccountBookCategory,createBucketList: Mutation_createBucketList,createDeposit: Mutation_createDeposit,createRegularExpenditure: Mutation_createRegularExpenditure,createTodo: Mutation_createTodo,deleteAccount: Mutation_deleteAccount,deleteAccountBook: Mutation_deleteAccountBook,deleteAccountBookCategory: Mutation_deleteAccountBookCategory,deleteBucketList: Mutation_deleteBucketList,deleteRegularExpenditure: Mutation_deleteRegularExpenditure,deleteTodo: Mutation_deleteTodo,updateAccountBook: Mutation_updateAccountBook,updateBucketList: Mutation_updateBucketList,updateTodoComplete: Mutation_updateTodoComplete },
      
      Account: Account,
AccountBook: AccountBook,
AccountBookCategory: AccountBookCategory,
AccountBookCategoryImage: AccountBookCategoryImage,
BucketList: BucketList,
BucketListSummary: BucketListSummary,
CustomRegularExpenditure: CustomRegularExpenditure,
CustomRegularExpenditureResponse: CustomRegularExpenditureResponse,
Deposit: Deposit,
MainInfo: MainInfo,
RegularExpenditure: RegularExpenditure,
SavingType: SavingType,
Statistic: Statistic,
StatisticItem: StatisticItem,
Todo: Todo,
User: User,
UserShareCode: UserShareCode,
DateTime: DateTime
    }