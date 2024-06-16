/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { account as Query_account } from './../schema/resolvers/Query/account';
import    { accountBook as Query_accountBook } from './../schema/resolvers/Query/accountBook';
import    { accountBookCategoryList as Query_accountBookCategoryList } from './../schema/resolvers/Query/accountBookCategoryList';
import    { accountBookImageList as Query_accountBookImageList } from './../schema/resolvers/Query/accountBookImageList';
import    { accountBookList as Query_accountBookList } from './../schema/resolvers/Query/accountBookList';
import    { accountBookStatisticList as Query_accountBookStatisticList } from './../schema/resolvers/Query/accountBookStatisticList';
import    { account_list as Query_account_list } from './../schema/resolvers/Query/account_list';
import    { createAccountBook as Mutation_createAccountBook } from './../schema/resolvers/Mutation/createAccountBook';
import    { createAccountBookCategory as Mutation_createAccountBookCategory } from './../schema/resolvers/Mutation/createAccountBookCategory';
import    { deleteAccountBook as Mutation_deleteAccountBook } from './../schema/resolvers/Mutation/deleteAccountBook';
import    { deleteAccountBookCategory as Mutation_deleteAccountBookCategory } from './../schema/resolvers/Mutation/deleteAccountBookCategory';
import    { updateAccountBook as Mutation_updateAccountBook } from './../schema/resolvers/Mutation/updateAccountBook';
import    { Account } from './../schema/resolvers/Account';
import    { AccountBook } from './../schema/resolvers/AccountBook';
import    { AccountBookCategory } from './../schema/resolvers/AccountBookCategory';
import    { AccountBookCategoryImage } from './../schema/resolvers/AccountBookCategoryImage';
import    { BucketList } from './../schema/resolvers/BucketList';
import    { Deposit } from './../schema/resolvers/Deposit';
import    { MinAccount } from './../schema/resolvers/MinAccount';
import    { RegularExpenditure } from './../schema/resolvers/RegularExpenditure';
import    { SavingType } from './../schema/resolvers/SavingType';
import    { Statistic } from './../schema/resolvers/Statistic';
import    { StatisticItem } from './../schema/resolvers/StatisticItem';
import    { Todo } from './../schema/resolvers/Todo';
import    { User } from './../schema/resolvers/User';
import    { UserShareCode } from './../schema/resolvers/UserShareCode';
import    { DateTimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { account: Query_account,accountBook: Query_accountBook,accountBookCategoryList: Query_accountBookCategoryList,accountBookImageList: Query_accountBookImageList,accountBookList: Query_accountBookList,accountBookStatisticList: Query_accountBookStatisticList,account_list: Query_account_list },
      Mutation: { createAccountBook: Mutation_createAccountBook,createAccountBookCategory: Mutation_createAccountBookCategory,deleteAccountBook: Mutation_deleteAccountBook,deleteAccountBookCategory: Mutation_deleteAccountBookCategory,updateAccountBook: Mutation_updateAccountBook },
      
      Account: Account,
AccountBook: AccountBook,
AccountBookCategory: AccountBookCategory,
AccountBookCategoryImage: AccountBookCategoryImage,
BucketList: BucketList,
Deposit: Deposit,
MinAccount: MinAccount,
RegularExpenditure: RegularExpenditure,
SavingType: SavingType,
Statistic: Statistic,
StatisticItem: StatisticItem,
Todo: Todo,
User: User,
UserShareCode: UserShareCode,
DateTime: DateTimeResolver
    }