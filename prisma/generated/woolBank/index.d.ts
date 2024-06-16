
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserShareCode
 * 
 */
export type UserShareCode = $Result.DefaultSelection<Prisma.$UserShareCodePayload>
/**
 * Model SavingType
 * 
 */
export type SavingType = $Result.DefaultSelection<Prisma.$SavingTypePayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model AccountBook
 * 
 */
export type AccountBook = $Result.DefaultSelection<Prisma.$AccountBookPayload>
/**
 * Model AccountBookCategory
 * 
 */
export type AccountBookCategory = $Result.DefaultSelection<Prisma.$AccountBookCategoryPayload>
/**
 * Model Deposit
 * 
 */
export type Deposit = $Result.DefaultSelection<Prisma.$DepositPayload>
/**
 * Model AccountBookCategoryImage
 * 
 */
export type AccountBookCategoryImage = $Result.DefaultSelection<Prisma.$AccountBookCategoryImagePayload>
/**
 * Model BucketList
 * 
 */
export type BucketList = $Result.DefaultSelection<Prisma.$BucketListPayload>
/**
 * Model RegularExpenditure
 * 
 */
export type RegularExpenditure = $Result.DefaultSelection<Prisma.$RegularExpenditurePayload>
/**
 * Model Todo
 * 
 */
export type Todo = $Result.DefaultSelection<Prisma.$TodoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AccountBookCategoryType: {
  expenditure: 'expenditure',
  income: 'income'
};

export type AccountBookCategoryType = (typeof AccountBookCategoryType)[keyof typeof AccountBookCategoryType]

}

export type AccountBookCategoryType = $Enums.AccountBookCategoryType

export const AccountBookCategoryType: typeof $Enums.AccountBookCategoryType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userShareCode`: Exposes CRUD operations for the **UserShareCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserShareCodes
    * const userShareCodes = await prisma.userShareCode.findMany()
    * ```
    */
  get userShareCode(): Prisma.UserShareCodeDelegate<ExtArgs>;

  /**
   * `prisma.savingType`: Exposes CRUD operations for the **SavingType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavingTypes
    * const savingTypes = await prisma.savingType.findMany()
    * ```
    */
  get savingType(): Prisma.SavingTypeDelegate<ExtArgs>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.accountBook`: Exposes CRUD operations for the **AccountBook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountBooks
    * const accountBooks = await prisma.accountBook.findMany()
    * ```
    */
  get accountBook(): Prisma.AccountBookDelegate<ExtArgs>;

  /**
   * `prisma.accountBookCategory`: Exposes CRUD operations for the **AccountBookCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountBookCategories
    * const accountBookCategories = await prisma.accountBookCategory.findMany()
    * ```
    */
  get accountBookCategory(): Prisma.AccountBookCategoryDelegate<ExtArgs>;

  /**
   * `prisma.deposit`: Exposes CRUD operations for the **Deposit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deposits
    * const deposits = await prisma.deposit.findMany()
    * ```
    */
  get deposit(): Prisma.DepositDelegate<ExtArgs>;

  /**
   * `prisma.accountBookCategoryImage`: Exposes CRUD operations for the **AccountBookCategoryImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountBookCategoryImages
    * const accountBookCategoryImages = await prisma.accountBookCategoryImage.findMany()
    * ```
    */
  get accountBookCategoryImage(): Prisma.AccountBookCategoryImageDelegate<ExtArgs>;

  /**
   * `prisma.bucketList`: Exposes CRUD operations for the **BucketList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BucketLists
    * const bucketLists = await prisma.bucketList.findMany()
    * ```
    */
  get bucketList(): Prisma.BucketListDelegate<ExtArgs>;

  /**
   * `prisma.regularExpenditure`: Exposes CRUD operations for the **RegularExpenditure** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegularExpenditures
    * const regularExpenditures = await prisma.regularExpenditure.findMany()
    * ```
    */
  get regularExpenditure(): Prisma.RegularExpenditureDelegate<ExtArgs>;

  /**
   * `prisma.todo`: Exposes CRUD operations for the **Todo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Todos
    * const todos = await prisma.todo.findMany()
    * ```
    */
  get todo(): Prisma.TodoDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserShareCode: 'UserShareCode',
    SavingType: 'SavingType',
    Account: 'Account',
    AccountBook: 'AccountBook',
    AccountBookCategory: 'AccountBookCategory',
    Deposit: 'Deposit',
    AccountBookCategoryImage: 'AccountBookCategoryImage',
    BucketList: 'BucketList',
    RegularExpenditure: 'RegularExpenditure',
    Todo: 'Todo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    woolbank?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'userShareCode' | 'savingType' | 'account' | 'accountBook' | 'accountBookCategory' | 'deposit' | 'accountBookCategoryImage' | 'bucketList' | 'regularExpenditure' | 'todo'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserShareCode: {
        payload: Prisma.$UserShareCodePayload<ExtArgs>
        fields: Prisma.UserShareCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserShareCodeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserShareCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserShareCodeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserShareCodePayload>
          }
          findFirst: {
            args: Prisma.UserShareCodeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserShareCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserShareCodeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserShareCodePayload>
          }
          findMany: {
            args: Prisma.UserShareCodeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserShareCodePayload>[]
          }
          create: {
            args: Prisma.UserShareCodeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserShareCodePayload>
          }
          createMany: {
            args: Prisma.UserShareCodeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserShareCodeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserShareCodePayload>
          }
          update: {
            args: Prisma.UserShareCodeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserShareCodePayload>
          }
          deleteMany: {
            args: Prisma.UserShareCodeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserShareCodeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserShareCodeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserShareCodePayload>
          }
          aggregate: {
            args: Prisma.UserShareCodeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserShareCode>
          }
          groupBy: {
            args: Prisma.UserShareCodeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserShareCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserShareCodeCountArgs<ExtArgs>,
            result: $Utils.Optional<UserShareCodeCountAggregateOutputType> | number
          }
        }
      }
      SavingType: {
        payload: Prisma.$SavingTypePayload<ExtArgs>
        fields: Prisma.SavingTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavingTypeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SavingTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavingTypeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SavingTypePayload>
          }
          findFirst: {
            args: Prisma.SavingTypeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SavingTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavingTypeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SavingTypePayload>
          }
          findMany: {
            args: Prisma.SavingTypeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SavingTypePayload>[]
          }
          create: {
            args: Prisma.SavingTypeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SavingTypePayload>
          }
          createMany: {
            args: Prisma.SavingTypeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SavingTypeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SavingTypePayload>
          }
          update: {
            args: Prisma.SavingTypeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SavingTypePayload>
          }
          deleteMany: {
            args: Prisma.SavingTypeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SavingTypeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SavingTypeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SavingTypePayload>
          }
          aggregate: {
            args: Prisma.SavingTypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSavingType>
          }
          groupBy: {
            args: Prisma.SavingTypeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SavingTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavingTypeCountArgs<ExtArgs>,
            result: $Utils.Optional<SavingTypeCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      AccountBook: {
        payload: Prisma.$AccountBookPayload<ExtArgs>
        fields: Prisma.AccountBookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountBookFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountBookFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookPayload>
          }
          findFirst: {
            args: Prisma.AccountBookFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountBookFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookPayload>
          }
          findMany: {
            args: Prisma.AccountBookFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookPayload>[]
          }
          create: {
            args: Prisma.AccountBookCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookPayload>
          }
          createMany: {
            args: Prisma.AccountBookCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountBookDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookPayload>
          }
          update: {
            args: Prisma.AccountBookUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookPayload>
          }
          deleteMany: {
            args: Prisma.AccountBookDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountBookUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountBookUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookPayload>
          }
          aggregate: {
            args: Prisma.AccountBookAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccountBook>
          }
          groupBy: {
            args: Prisma.AccountBookGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountBookGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountBookCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountBookCountAggregateOutputType> | number
          }
        }
      }
      AccountBookCategory: {
        payload: Prisma.$AccountBookCategoryPayload<ExtArgs>
        fields: Prisma.AccountBookCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountBookCategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountBookCategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookCategoryPayload>
          }
          findFirst: {
            args: Prisma.AccountBookCategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountBookCategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookCategoryPayload>
          }
          findMany: {
            args: Prisma.AccountBookCategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookCategoryPayload>[]
          }
          create: {
            args: Prisma.AccountBookCategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookCategoryPayload>
          }
          createMany: {
            args: Prisma.AccountBookCategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountBookCategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookCategoryPayload>
          }
          update: {
            args: Prisma.AccountBookCategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookCategoryPayload>
          }
          deleteMany: {
            args: Prisma.AccountBookCategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountBookCategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountBookCategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookCategoryPayload>
          }
          aggregate: {
            args: Prisma.AccountBookCategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccountBookCategory>
          }
          groupBy: {
            args: Prisma.AccountBookCategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountBookCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountBookCategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountBookCategoryCountAggregateOutputType> | number
          }
        }
      }
      Deposit: {
        payload: Prisma.$DepositPayload<ExtArgs>
        fields: Prisma.DepositFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepositFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepositPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepositFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          findFirst: {
            args: Prisma.DepositFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepositPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepositFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          findMany: {
            args: Prisma.DepositFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          create: {
            args: Prisma.DepositCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          createMany: {
            args: Prisma.DepositCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DepositDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          update: {
            args: Prisma.DepositUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          deleteMany: {
            args: Prisma.DepositDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DepositUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DepositUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          aggregate: {
            args: Prisma.DepositAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDeposit>
          }
          groupBy: {
            args: Prisma.DepositGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DepositGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepositCountArgs<ExtArgs>,
            result: $Utils.Optional<DepositCountAggregateOutputType> | number
          }
        }
      }
      AccountBookCategoryImage: {
        payload: Prisma.$AccountBookCategoryImagePayload<ExtArgs>
        fields: Prisma.AccountBookCategoryImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountBookCategoryImageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookCategoryImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountBookCategoryImageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookCategoryImagePayload>
          }
          findFirst: {
            args: Prisma.AccountBookCategoryImageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookCategoryImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountBookCategoryImageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookCategoryImagePayload>
          }
          findMany: {
            args: Prisma.AccountBookCategoryImageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookCategoryImagePayload>[]
          }
          create: {
            args: Prisma.AccountBookCategoryImageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookCategoryImagePayload>
          }
          createMany: {
            args: Prisma.AccountBookCategoryImageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountBookCategoryImageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookCategoryImagePayload>
          }
          update: {
            args: Prisma.AccountBookCategoryImageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookCategoryImagePayload>
          }
          deleteMany: {
            args: Prisma.AccountBookCategoryImageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountBookCategoryImageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountBookCategoryImageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountBookCategoryImagePayload>
          }
          aggregate: {
            args: Prisma.AccountBookCategoryImageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccountBookCategoryImage>
          }
          groupBy: {
            args: Prisma.AccountBookCategoryImageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountBookCategoryImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountBookCategoryImageCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountBookCategoryImageCountAggregateOutputType> | number
          }
        }
      }
      BucketList: {
        payload: Prisma.$BucketListPayload<ExtArgs>
        fields: Prisma.BucketListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BucketListFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BucketListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BucketListFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BucketListPayload>
          }
          findFirst: {
            args: Prisma.BucketListFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BucketListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BucketListFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BucketListPayload>
          }
          findMany: {
            args: Prisma.BucketListFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BucketListPayload>[]
          }
          create: {
            args: Prisma.BucketListCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BucketListPayload>
          }
          createMany: {
            args: Prisma.BucketListCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BucketListDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BucketListPayload>
          }
          update: {
            args: Prisma.BucketListUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BucketListPayload>
          }
          deleteMany: {
            args: Prisma.BucketListDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BucketListUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BucketListUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BucketListPayload>
          }
          aggregate: {
            args: Prisma.BucketListAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBucketList>
          }
          groupBy: {
            args: Prisma.BucketListGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BucketListGroupByOutputType>[]
          }
          count: {
            args: Prisma.BucketListCountArgs<ExtArgs>,
            result: $Utils.Optional<BucketListCountAggregateOutputType> | number
          }
        }
      }
      RegularExpenditure: {
        payload: Prisma.$RegularExpenditurePayload<ExtArgs>
        fields: Prisma.RegularExpenditureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegularExpenditureFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegularExpenditurePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegularExpenditureFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegularExpenditurePayload>
          }
          findFirst: {
            args: Prisma.RegularExpenditureFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegularExpenditurePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegularExpenditureFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegularExpenditurePayload>
          }
          findMany: {
            args: Prisma.RegularExpenditureFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegularExpenditurePayload>[]
          }
          create: {
            args: Prisma.RegularExpenditureCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegularExpenditurePayload>
          }
          createMany: {
            args: Prisma.RegularExpenditureCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RegularExpenditureDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegularExpenditurePayload>
          }
          update: {
            args: Prisma.RegularExpenditureUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegularExpenditurePayload>
          }
          deleteMany: {
            args: Prisma.RegularExpenditureDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RegularExpenditureUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RegularExpenditureUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegularExpenditurePayload>
          }
          aggregate: {
            args: Prisma.RegularExpenditureAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRegularExpenditure>
          }
          groupBy: {
            args: Prisma.RegularExpenditureGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RegularExpenditureGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegularExpenditureCountArgs<ExtArgs>,
            result: $Utils.Optional<RegularExpenditureCountAggregateOutputType> | number
          }
        }
      }
      Todo: {
        payload: Prisma.$TodoPayload<ExtArgs>
        fields: Prisma.TodoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TodoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TodoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TodoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          findFirst: {
            args: Prisma.TodoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TodoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TodoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          findMany: {
            args: Prisma.TodoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>[]
          }
          create: {
            args: Prisma.TodoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          createMany: {
            args: Prisma.TodoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TodoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          update: {
            args: Prisma.TodoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          deleteMany: {
            args: Prisma.TodoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TodoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TodoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TodoPayload>
          }
          aggregate: {
            args: Prisma.TodoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTodo>
          }
          groupBy: {
            args: Prisma.TodoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TodoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TodoCountArgs<ExtArgs>,
            result: $Utils.Optional<TodoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    bucketLists: number
    deposits: number
    todos: number
    accountBooks: number
    accountBookCategories: number
    accountBookCategoryImages: number
    regularExpenditures: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    bucketLists?: boolean | UserCountOutputTypeCountBucketListsArgs
    deposits?: boolean | UserCountOutputTypeCountDepositsArgs
    todos?: boolean | UserCountOutputTypeCountTodosArgs
    accountBooks?: boolean | UserCountOutputTypeCountAccountBooksArgs
    accountBookCategories?: boolean | UserCountOutputTypeCountAccountBookCategoriesArgs
    accountBookCategoryImages?: boolean | UserCountOutputTypeCountAccountBookCategoryImagesArgs
    regularExpenditures?: boolean | UserCountOutputTypeCountRegularExpendituresArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBucketListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BucketListWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDepositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTodosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountBookWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountBookCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountBookCategoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountBookCategoryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountBookCategoryImageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRegularExpendituresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegularExpenditureWhereInput
  }


  /**
   * Count Type SavingTypeCountOutputType
   */

  export type SavingTypeCountOutputType = {
    accounts: number
  }

  export type SavingTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | SavingTypeCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * SavingTypeCountOutputType without action
   */
  export type SavingTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingTypeCountOutputType
     */
    select?: SavingTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SavingTypeCountOutputType without action
   */
  export type SavingTypeCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    deposits: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deposits?: boolean | AccountCountOutputTypeCountDepositsArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountDepositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositWhereInput
  }


  /**
   * Count Type AccountBookCategoryCountOutputType
   */

  export type AccountBookCategoryCountOutputType = {
    accountBooks: number
    RegularExpenditures: number
  }

  export type AccountBookCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accountBooks?: boolean | AccountBookCategoryCountOutputTypeCountAccountBooksArgs
    RegularExpenditures?: boolean | AccountBookCategoryCountOutputTypeCountRegularExpendituresArgs
  }

  // Custom InputTypes
  /**
   * AccountBookCategoryCountOutputType without action
   */
  export type AccountBookCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategoryCountOutputType
     */
    select?: AccountBookCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountBookCategoryCountOutputType without action
   */
  export type AccountBookCategoryCountOutputTypeCountAccountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountBookWhereInput
  }

  /**
   * AccountBookCategoryCountOutputType without action
   */
  export type AccountBookCategoryCountOutputTypeCountRegularExpendituresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegularExpenditureWhereInput
  }


  /**
   * Count Type AccountBookCategoryImageCountOutputType
   */

  export type AccountBookCategoryImageCountOutputType = {
    accountBookCategorys: number
  }

  export type AccountBookCategoryImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accountBookCategorys?: boolean | AccountBookCategoryImageCountOutputTypeCountAccountBookCategorysArgs
  }

  // Custom InputTypes
  /**
   * AccountBookCategoryImageCountOutputType without action
   */
  export type AccountBookCategoryImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategoryImageCountOutputType
     */
    select?: AccountBookCategoryImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountBookCategoryImageCountOutputType without action
   */
  export type AccountBookCategoryImageCountOutputTypeCountAccountBookCategorysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountBookCategoryWhereInput
  }


  /**
   * Count Type BucketListCountOutputType
   */

  export type BucketListCountOutputType = {
    todoList: number
  }

  export type BucketListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    todoList?: boolean | BucketListCountOutputTypeCountTodoListArgs
  }

  // Custom InputTypes
  /**
   * BucketListCountOutputType without action
   */
  export type BucketListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketListCountOutputType
     */
    select?: BucketListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BucketListCountOutputType without action
   */
  export type BucketListCountOutputTypeCountTodoListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    loginType: string | null
    socialId: string | null
    profileImg: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    loginType: string | null
    socialId: string | null
    profileImg: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    loginType: number
    socialId: number
    profileImg: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    loginType?: true
    socialId?: true
    profileImg?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    loginType?: true
    socialId?: true
    profileImg?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    loginType?: true
    socialId?: true
    profileImg?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    loginType: string
    socialId: string
    profileImg: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    loginType?: boolean
    socialId?: boolean
    profileImg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    bucketLists?: boolean | User$bucketListsArgs<ExtArgs>
    deposits?: boolean | User$depositsArgs<ExtArgs>
    todos?: boolean | User$todosArgs<ExtArgs>
    accountBooks?: boolean | User$accountBooksArgs<ExtArgs>
    accountBookCategories?: boolean | User$accountBookCategoriesArgs<ExtArgs>
    accountBookCategoryImages?: boolean | User$accountBookCategoryImagesArgs<ExtArgs>
    regularExpenditures?: boolean | User$regularExpendituresArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    loginType?: boolean
    socialId?: boolean
    profileImg?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    bucketLists?: boolean | User$bucketListsArgs<ExtArgs>
    deposits?: boolean | User$depositsArgs<ExtArgs>
    todos?: boolean | User$todosArgs<ExtArgs>
    accountBooks?: boolean | User$accountBooksArgs<ExtArgs>
    accountBookCategories?: boolean | User$accountBookCategoriesArgs<ExtArgs>
    accountBookCategoryImages?: boolean | User$accountBookCategoryImagesArgs<ExtArgs>
    regularExpenditures?: boolean | User$regularExpendituresArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      bucketLists: Prisma.$BucketListPayload<ExtArgs>[]
      deposits: Prisma.$DepositPayload<ExtArgs>[]
      todos: Prisma.$TodoPayload<ExtArgs>[]
      accountBooks: Prisma.$AccountBookPayload<ExtArgs>[]
      accountBookCategories: Prisma.$AccountBookCategoryPayload<ExtArgs>[]
      accountBookCategoryImages: Prisma.$AccountBookCategoryImagePayload<ExtArgs>[]
      regularExpenditures: Prisma.$RegularExpenditurePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      loginType: string
      socialId: string
      profileImg: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null>;

    bucketLists<T extends User$bucketListsArgs<ExtArgs> = {}>(args?: Subset<T, User$bucketListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BucketListPayload<ExtArgs>, T, 'findMany'> | Null>;

    deposits<T extends User$depositsArgs<ExtArgs> = {}>(args?: Subset<T, User$depositsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, 'findMany'> | Null>;

    todos<T extends User$todosArgs<ExtArgs> = {}>(args?: Subset<T, User$todosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, 'findMany'> | Null>;

    accountBooks<T extends User$accountBooksArgs<ExtArgs> = {}>(args?: Subset<T, User$accountBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountBookPayload<ExtArgs>, T, 'findMany'> | Null>;

    accountBookCategories<T extends User$accountBookCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$accountBookCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountBookCategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    accountBookCategoryImages<T extends User$accountBookCategoryImagesArgs<ExtArgs> = {}>(args?: Subset<T, User$accountBookCategoryImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountBookCategoryImagePayload<ExtArgs>, T, 'findMany'> | Null>;

    regularExpenditures<T extends User$regularExpendituresArgs<ExtArgs> = {}>(args?: Subset<T, User$regularExpendituresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegularExpenditurePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly loginType: FieldRef<"User", 'String'>
    readonly socialId: FieldRef<"User", 'String'>
    readonly profileImg: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.bucketLists
   */
  export type User$bucketListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketList
     */
    select?: BucketListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketListInclude<ExtArgs> | null
    where?: BucketListWhereInput
    orderBy?: BucketListOrderByWithRelationInput | BucketListOrderByWithRelationInput[]
    cursor?: BucketListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BucketListScalarFieldEnum | BucketListScalarFieldEnum[]
  }

  /**
   * User.deposits
   */
  export type User$depositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    where?: DepositWhereInput
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    cursor?: DepositWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * User.todos
   */
  export type User$todosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    where?: TodoWhereInput
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    cursor?: TodoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * User.accountBooks
   */
  export type User$accountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBook
     */
    select?: AccountBookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookInclude<ExtArgs> | null
    where?: AccountBookWhereInput
    orderBy?: AccountBookOrderByWithRelationInput | AccountBookOrderByWithRelationInput[]
    cursor?: AccountBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountBookScalarFieldEnum | AccountBookScalarFieldEnum[]
  }

  /**
   * User.accountBookCategories
   */
  export type User$accountBookCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategory
     */
    select?: AccountBookCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookCategoryInclude<ExtArgs> | null
    where?: AccountBookCategoryWhereInput
    orderBy?: AccountBookCategoryOrderByWithRelationInput | AccountBookCategoryOrderByWithRelationInput[]
    cursor?: AccountBookCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountBookCategoryScalarFieldEnum | AccountBookCategoryScalarFieldEnum[]
  }

  /**
   * User.accountBookCategoryImages
   */
  export type User$accountBookCategoryImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategoryImage
     */
    select?: AccountBookCategoryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookCategoryImageInclude<ExtArgs> | null
    where?: AccountBookCategoryImageWhereInput
    orderBy?: AccountBookCategoryImageOrderByWithRelationInput | AccountBookCategoryImageOrderByWithRelationInput[]
    cursor?: AccountBookCategoryImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountBookCategoryImageScalarFieldEnum | AccountBookCategoryImageScalarFieldEnum[]
  }

  /**
   * User.regularExpenditures
   */
  export type User$regularExpendituresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularExpenditure
     */
    select?: RegularExpenditureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularExpenditureInclude<ExtArgs> | null
    where?: RegularExpenditureWhereInput
    orderBy?: RegularExpenditureOrderByWithRelationInput | RegularExpenditureOrderByWithRelationInput[]
    cursor?: RegularExpenditureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegularExpenditureScalarFieldEnum | RegularExpenditureScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserShareCode
   */

  export type AggregateUserShareCode = {
    _count: UserShareCodeCountAggregateOutputType | null
    _avg: UserShareCodeAvgAggregateOutputType | null
    _sum: UserShareCodeSumAggregateOutputType | null
    _min: UserShareCodeMinAggregateOutputType | null
    _max: UserShareCodeMaxAggregateOutputType | null
  }

  export type UserShareCodeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserShareCodeSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserShareCodeMinAggregateOutputType = {
    id: number | null
    userId: number | null
    shareCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserShareCodeMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    shareCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserShareCodeCountAggregateOutputType = {
    id: number
    userId: number
    shareCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserShareCodeAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserShareCodeSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserShareCodeMinAggregateInputType = {
    id?: true
    userId?: true
    shareCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserShareCodeMaxAggregateInputType = {
    id?: true
    userId?: true
    shareCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserShareCodeCountAggregateInputType = {
    id?: true
    userId?: true
    shareCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserShareCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserShareCode to aggregate.
     */
    where?: UserShareCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserShareCodes to fetch.
     */
    orderBy?: UserShareCodeOrderByWithRelationInput | UserShareCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserShareCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserShareCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserShareCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserShareCodes
    **/
    _count?: true | UserShareCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserShareCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserShareCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserShareCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserShareCodeMaxAggregateInputType
  }

  export type GetUserShareCodeAggregateType<T extends UserShareCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserShareCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserShareCode[P]>
      : GetScalarType<T[P], AggregateUserShareCode[P]>
  }




  export type UserShareCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserShareCodeWhereInput
    orderBy?: UserShareCodeOrderByWithAggregationInput | UserShareCodeOrderByWithAggregationInput[]
    by: UserShareCodeScalarFieldEnum[] | UserShareCodeScalarFieldEnum
    having?: UserShareCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserShareCodeCountAggregateInputType | true
    _avg?: UserShareCodeAvgAggregateInputType
    _sum?: UserShareCodeSumAggregateInputType
    _min?: UserShareCodeMinAggregateInputType
    _max?: UserShareCodeMaxAggregateInputType
  }

  export type UserShareCodeGroupByOutputType = {
    id: number
    userId: number
    shareCode: string
    createdAt: Date
    updatedAt: Date
    _count: UserShareCodeCountAggregateOutputType | null
    _avg: UserShareCodeAvgAggregateOutputType | null
    _sum: UserShareCodeSumAggregateOutputType | null
    _min: UserShareCodeMinAggregateOutputType | null
    _max: UserShareCodeMaxAggregateOutputType | null
  }

  type GetUserShareCodeGroupByPayload<T extends UserShareCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserShareCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserShareCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserShareCodeGroupByOutputType[P]>
            : GetScalarType<T[P], UserShareCodeGroupByOutputType[P]>
        }
      >
    >


  export type UserShareCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shareCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userShareCode"]>

  export type UserShareCodeSelectScalar = {
    id?: boolean
    userId?: boolean
    shareCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }



  export type $UserShareCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserShareCode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      shareCode: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userShareCode"]>
    composites: {}
  }


  type UserShareCodeGetPayload<S extends boolean | null | undefined | UserShareCodeDefaultArgs> = $Result.GetResult<Prisma.$UserShareCodePayload, S>

  type UserShareCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserShareCodeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserShareCodeCountAggregateInputType | true
    }

  export interface UserShareCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserShareCode'], meta: { name: 'UserShareCode' } }
    /**
     * Find zero or one UserShareCode that matches the filter.
     * @param {UserShareCodeFindUniqueArgs} args - Arguments to find a UserShareCode
     * @example
     * // Get one UserShareCode
     * const userShareCode = await prisma.userShareCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserShareCodeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserShareCodeFindUniqueArgs<ExtArgs>>
    ): Prisma__UserShareCodeClient<$Result.GetResult<Prisma.$UserShareCodePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserShareCode that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserShareCodeFindUniqueOrThrowArgs} args - Arguments to find a UserShareCode
     * @example
     * // Get one UserShareCode
     * const userShareCode = await prisma.userShareCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserShareCodeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserShareCodeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserShareCodeClient<$Result.GetResult<Prisma.$UserShareCodePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserShareCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserShareCodeFindFirstArgs} args - Arguments to find a UserShareCode
     * @example
     * // Get one UserShareCode
     * const userShareCode = await prisma.userShareCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserShareCodeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserShareCodeFindFirstArgs<ExtArgs>>
    ): Prisma__UserShareCodeClient<$Result.GetResult<Prisma.$UserShareCodePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserShareCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserShareCodeFindFirstOrThrowArgs} args - Arguments to find a UserShareCode
     * @example
     * // Get one UserShareCode
     * const userShareCode = await prisma.userShareCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserShareCodeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserShareCodeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserShareCodeClient<$Result.GetResult<Prisma.$UserShareCodePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserShareCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserShareCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserShareCodes
     * const userShareCodes = await prisma.userShareCode.findMany()
     * 
     * // Get first 10 UserShareCodes
     * const userShareCodes = await prisma.userShareCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userShareCodeWithIdOnly = await prisma.userShareCode.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserShareCodeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserShareCodeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserShareCodePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserShareCode.
     * @param {UserShareCodeCreateArgs} args - Arguments to create a UserShareCode.
     * @example
     * // Create one UserShareCode
     * const UserShareCode = await prisma.userShareCode.create({
     *   data: {
     *     // ... data to create a UserShareCode
     *   }
     * })
     * 
    **/
    create<T extends UserShareCodeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserShareCodeCreateArgs<ExtArgs>>
    ): Prisma__UserShareCodeClient<$Result.GetResult<Prisma.$UserShareCodePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserShareCodes.
     * @param {UserShareCodeCreateManyArgs} args - Arguments to create many UserShareCodes.
     * @example
     * // Create many UserShareCodes
     * const userShareCode = await prisma.userShareCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserShareCodeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserShareCodeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserShareCode.
     * @param {UserShareCodeDeleteArgs} args - Arguments to delete one UserShareCode.
     * @example
     * // Delete one UserShareCode
     * const UserShareCode = await prisma.userShareCode.delete({
     *   where: {
     *     // ... filter to delete one UserShareCode
     *   }
     * })
     * 
    **/
    delete<T extends UserShareCodeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserShareCodeDeleteArgs<ExtArgs>>
    ): Prisma__UserShareCodeClient<$Result.GetResult<Prisma.$UserShareCodePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserShareCode.
     * @param {UserShareCodeUpdateArgs} args - Arguments to update one UserShareCode.
     * @example
     * // Update one UserShareCode
     * const userShareCode = await prisma.userShareCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserShareCodeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserShareCodeUpdateArgs<ExtArgs>>
    ): Prisma__UserShareCodeClient<$Result.GetResult<Prisma.$UserShareCodePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserShareCodes.
     * @param {UserShareCodeDeleteManyArgs} args - Arguments to filter UserShareCodes to delete.
     * @example
     * // Delete a few UserShareCodes
     * const { count } = await prisma.userShareCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserShareCodeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserShareCodeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserShareCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserShareCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserShareCodes
     * const userShareCode = await prisma.userShareCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserShareCodeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserShareCodeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserShareCode.
     * @param {UserShareCodeUpsertArgs} args - Arguments to update or create a UserShareCode.
     * @example
     * // Update or create a UserShareCode
     * const userShareCode = await prisma.userShareCode.upsert({
     *   create: {
     *     // ... data to create a UserShareCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserShareCode we want to update
     *   }
     * })
    **/
    upsert<T extends UserShareCodeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserShareCodeUpsertArgs<ExtArgs>>
    ): Prisma__UserShareCodeClient<$Result.GetResult<Prisma.$UserShareCodePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserShareCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserShareCodeCountArgs} args - Arguments to filter UserShareCodes to count.
     * @example
     * // Count the number of UserShareCodes
     * const count = await prisma.userShareCode.count({
     *   where: {
     *     // ... the filter for the UserShareCodes we want to count
     *   }
     * })
    **/
    count<T extends UserShareCodeCountArgs>(
      args?: Subset<T, UserShareCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserShareCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserShareCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserShareCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserShareCodeAggregateArgs>(args: Subset<T, UserShareCodeAggregateArgs>): Prisma.PrismaPromise<GetUserShareCodeAggregateType<T>>

    /**
     * Group by UserShareCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserShareCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserShareCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserShareCodeGroupByArgs['orderBy'] }
        : { orderBy?: UserShareCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserShareCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserShareCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserShareCode model
   */
  readonly fields: UserShareCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserShareCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserShareCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserShareCode model
   */ 
  interface UserShareCodeFieldRefs {
    readonly id: FieldRef<"UserShareCode", 'Int'>
    readonly userId: FieldRef<"UserShareCode", 'Int'>
    readonly shareCode: FieldRef<"UserShareCode", 'String'>
    readonly createdAt: FieldRef<"UserShareCode", 'DateTime'>
    readonly updatedAt: FieldRef<"UserShareCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserShareCode findUnique
   */
  export type UserShareCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserShareCode
     */
    select?: UserShareCodeSelect<ExtArgs> | null
    /**
     * Filter, which UserShareCode to fetch.
     */
    where: UserShareCodeWhereUniqueInput
  }

  /**
   * UserShareCode findUniqueOrThrow
   */
  export type UserShareCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserShareCode
     */
    select?: UserShareCodeSelect<ExtArgs> | null
    /**
     * Filter, which UserShareCode to fetch.
     */
    where: UserShareCodeWhereUniqueInput
  }

  /**
   * UserShareCode findFirst
   */
  export type UserShareCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserShareCode
     */
    select?: UserShareCodeSelect<ExtArgs> | null
    /**
     * Filter, which UserShareCode to fetch.
     */
    where?: UserShareCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserShareCodes to fetch.
     */
    orderBy?: UserShareCodeOrderByWithRelationInput | UserShareCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserShareCodes.
     */
    cursor?: UserShareCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserShareCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserShareCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserShareCodes.
     */
    distinct?: UserShareCodeScalarFieldEnum | UserShareCodeScalarFieldEnum[]
  }

  /**
   * UserShareCode findFirstOrThrow
   */
  export type UserShareCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserShareCode
     */
    select?: UserShareCodeSelect<ExtArgs> | null
    /**
     * Filter, which UserShareCode to fetch.
     */
    where?: UserShareCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserShareCodes to fetch.
     */
    orderBy?: UserShareCodeOrderByWithRelationInput | UserShareCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserShareCodes.
     */
    cursor?: UserShareCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserShareCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserShareCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserShareCodes.
     */
    distinct?: UserShareCodeScalarFieldEnum | UserShareCodeScalarFieldEnum[]
  }

  /**
   * UserShareCode findMany
   */
  export type UserShareCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserShareCode
     */
    select?: UserShareCodeSelect<ExtArgs> | null
    /**
     * Filter, which UserShareCodes to fetch.
     */
    where?: UserShareCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserShareCodes to fetch.
     */
    orderBy?: UserShareCodeOrderByWithRelationInput | UserShareCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserShareCodes.
     */
    cursor?: UserShareCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserShareCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserShareCodes.
     */
    skip?: number
    distinct?: UserShareCodeScalarFieldEnum | UserShareCodeScalarFieldEnum[]
  }

  /**
   * UserShareCode create
   */
  export type UserShareCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserShareCode
     */
    select?: UserShareCodeSelect<ExtArgs> | null
    /**
     * The data needed to create a UserShareCode.
     */
    data: XOR<UserShareCodeCreateInput, UserShareCodeUncheckedCreateInput>
  }

  /**
   * UserShareCode createMany
   */
  export type UserShareCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserShareCodes.
     */
    data: UserShareCodeCreateManyInput | UserShareCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserShareCode update
   */
  export type UserShareCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserShareCode
     */
    select?: UserShareCodeSelect<ExtArgs> | null
    /**
     * The data needed to update a UserShareCode.
     */
    data: XOR<UserShareCodeUpdateInput, UserShareCodeUncheckedUpdateInput>
    /**
     * Choose, which UserShareCode to update.
     */
    where: UserShareCodeWhereUniqueInput
  }

  /**
   * UserShareCode updateMany
   */
  export type UserShareCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserShareCodes.
     */
    data: XOR<UserShareCodeUpdateManyMutationInput, UserShareCodeUncheckedUpdateManyInput>
    /**
     * Filter which UserShareCodes to update
     */
    where?: UserShareCodeWhereInput
  }

  /**
   * UserShareCode upsert
   */
  export type UserShareCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserShareCode
     */
    select?: UserShareCodeSelect<ExtArgs> | null
    /**
     * The filter to search for the UserShareCode to update in case it exists.
     */
    where: UserShareCodeWhereUniqueInput
    /**
     * In case the UserShareCode found by the `where` argument doesn't exist, create a new UserShareCode with this data.
     */
    create: XOR<UserShareCodeCreateInput, UserShareCodeUncheckedCreateInput>
    /**
     * In case the UserShareCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserShareCodeUpdateInput, UserShareCodeUncheckedUpdateInput>
  }

  /**
   * UserShareCode delete
   */
  export type UserShareCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserShareCode
     */
    select?: UserShareCodeSelect<ExtArgs> | null
    /**
     * Filter which UserShareCode to delete.
     */
    where: UserShareCodeWhereUniqueInput
  }

  /**
   * UserShareCode deleteMany
   */
  export type UserShareCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserShareCodes to delete
     */
    where?: UserShareCodeWhereInput
  }

  /**
   * UserShareCode without action
   */
  export type UserShareCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserShareCode
     */
    select?: UserShareCodeSelect<ExtArgs> | null
  }


  /**
   * Model SavingType
   */

  export type AggregateSavingType = {
    _count: SavingTypeCountAggregateOutputType | null
    _avg: SavingTypeAvgAggregateOutputType | null
    _sum: SavingTypeSumAggregateOutputType | null
    _min: SavingTypeMinAggregateOutputType | null
    _max: SavingTypeMaxAggregateOutputType | null
  }

  export type SavingTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type SavingTypeSumAggregateOutputType = {
    id: number | null
  }

  export type SavingTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SavingTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SavingTypeCountAggregateOutputType = {
    id: number
    name: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SavingTypeAvgAggregateInputType = {
    id?: true
  }

  export type SavingTypeSumAggregateInputType = {
    id?: true
  }

  export type SavingTypeMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SavingTypeMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SavingTypeCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SavingTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavingType to aggregate.
     */
    where?: SavingTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingTypes to fetch.
     */
    orderBy?: SavingTypeOrderByWithRelationInput | SavingTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavingTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavingTypes
    **/
    _count?: true | SavingTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavingTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavingTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavingTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavingTypeMaxAggregateInputType
  }

  export type GetSavingTypeAggregateType<T extends SavingTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateSavingType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavingType[P]>
      : GetScalarType<T[P], AggregateSavingType[P]>
  }




  export type SavingTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavingTypeWhereInput
    orderBy?: SavingTypeOrderByWithAggregationInput | SavingTypeOrderByWithAggregationInput[]
    by: SavingTypeScalarFieldEnum[] | SavingTypeScalarFieldEnum
    having?: SavingTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavingTypeCountAggregateInputType | true
    _avg?: SavingTypeAvgAggregateInputType
    _sum?: SavingTypeSumAggregateInputType
    _min?: SavingTypeMinAggregateInputType
    _max?: SavingTypeMaxAggregateInputType
  }

  export type SavingTypeGroupByOutputType = {
    id: number
    name: string
    type: string
    createdAt: Date
    updatedAt: Date
    _count: SavingTypeCountAggregateOutputType | null
    _avg: SavingTypeAvgAggregateOutputType | null
    _sum: SavingTypeSumAggregateOutputType | null
    _min: SavingTypeMinAggregateOutputType | null
    _max: SavingTypeMaxAggregateOutputType | null
  }

  type GetSavingTypeGroupByPayload<T extends SavingTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavingTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavingTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavingTypeGroupByOutputType[P]>
            : GetScalarType<T[P], SavingTypeGroupByOutputType[P]>
        }
      >
    >


  export type SavingTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | SavingType$accountsArgs<ExtArgs>
    _count?: boolean | SavingTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savingType"]>

  export type SavingTypeSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type SavingTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | SavingType$accountsArgs<ExtArgs>
    _count?: boolean | SavingTypeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SavingTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavingType"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["savingType"]>
    composites: {}
  }


  type SavingTypeGetPayload<S extends boolean | null | undefined | SavingTypeDefaultArgs> = $Result.GetResult<Prisma.$SavingTypePayload, S>

  type SavingTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SavingTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SavingTypeCountAggregateInputType | true
    }

  export interface SavingTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavingType'], meta: { name: 'SavingType' } }
    /**
     * Find zero or one SavingType that matches the filter.
     * @param {SavingTypeFindUniqueArgs} args - Arguments to find a SavingType
     * @example
     * // Get one SavingType
     * const savingType = await prisma.savingType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SavingTypeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SavingTypeFindUniqueArgs<ExtArgs>>
    ): Prisma__SavingTypeClient<$Result.GetResult<Prisma.$SavingTypePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SavingType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SavingTypeFindUniqueOrThrowArgs} args - Arguments to find a SavingType
     * @example
     * // Get one SavingType
     * const savingType = await prisma.savingType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SavingTypeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SavingTypeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SavingTypeClient<$Result.GetResult<Prisma.$SavingTypePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SavingType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingTypeFindFirstArgs} args - Arguments to find a SavingType
     * @example
     * // Get one SavingType
     * const savingType = await prisma.savingType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SavingTypeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SavingTypeFindFirstArgs<ExtArgs>>
    ): Prisma__SavingTypeClient<$Result.GetResult<Prisma.$SavingTypePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SavingType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingTypeFindFirstOrThrowArgs} args - Arguments to find a SavingType
     * @example
     * // Get one SavingType
     * const savingType = await prisma.savingType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SavingTypeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SavingTypeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SavingTypeClient<$Result.GetResult<Prisma.$SavingTypePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SavingTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavingTypes
     * const savingTypes = await prisma.savingType.findMany()
     * 
     * // Get first 10 SavingTypes
     * const savingTypes = await prisma.savingType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savingTypeWithIdOnly = await prisma.savingType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SavingTypeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SavingTypeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavingTypePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SavingType.
     * @param {SavingTypeCreateArgs} args - Arguments to create a SavingType.
     * @example
     * // Create one SavingType
     * const SavingType = await prisma.savingType.create({
     *   data: {
     *     // ... data to create a SavingType
     *   }
     * })
     * 
    **/
    create<T extends SavingTypeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SavingTypeCreateArgs<ExtArgs>>
    ): Prisma__SavingTypeClient<$Result.GetResult<Prisma.$SavingTypePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SavingTypes.
     * @param {SavingTypeCreateManyArgs} args - Arguments to create many SavingTypes.
     * @example
     * // Create many SavingTypes
     * const savingType = await prisma.savingType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SavingTypeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SavingTypeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SavingType.
     * @param {SavingTypeDeleteArgs} args - Arguments to delete one SavingType.
     * @example
     * // Delete one SavingType
     * const SavingType = await prisma.savingType.delete({
     *   where: {
     *     // ... filter to delete one SavingType
     *   }
     * })
     * 
    **/
    delete<T extends SavingTypeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SavingTypeDeleteArgs<ExtArgs>>
    ): Prisma__SavingTypeClient<$Result.GetResult<Prisma.$SavingTypePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SavingType.
     * @param {SavingTypeUpdateArgs} args - Arguments to update one SavingType.
     * @example
     * // Update one SavingType
     * const savingType = await prisma.savingType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SavingTypeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SavingTypeUpdateArgs<ExtArgs>>
    ): Prisma__SavingTypeClient<$Result.GetResult<Prisma.$SavingTypePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SavingTypes.
     * @param {SavingTypeDeleteManyArgs} args - Arguments to filter SavingTypes to delete.
     * @example
     * // Delete a few SavingTypes
     * const { count } = await prisma.savingType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SavingTypeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SavingTypeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavingTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavingTypes
     * const savingType = await prisma.savingType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SavingTypeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SavingTypeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SavingType.
     * @param {SavingTypeUpsertArgs} args - Arguments to update or create a SavingType.
     * @example
     * // Update or create a SavingType
     * const savingType = await prisma.savingType.upsert({
     *   create: {
     *     // ... data to create a SavingType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavingType we want to update
     *   }
     * })
    **/
    upsert<T extends SavingTypeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SavingTypeUpsertArgs<ExtArgs>>
    ): Prisma__SavingTypeClient<$Result.GetResult<Prisma.$SavingTypePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SavingTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingTypeCountArgs} args - Arguments to filter SavingTypes to count.
     * @example
     * // Count the number of SavingTypes
     * const count = await prisma.savingType.count({
     *   where: {
     *     // ... the filter for the SavingTypes we want to count
     *   }
     * })
    **/
    count<T extends SavingTypeCountArgs>(
      args?: Subset<T, SavingTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavingTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavingType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavingTypeAggregateArgs>(args: Subset<T, SavingTypeAggregateArgs>): Prisma.PrismaPromise<GetSavingTypeAggregateType<T>>

    /**
     * Group by SavingType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavingTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavingTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavingTypeGroupByArgs['orderBy'] }
        : { orderBy?: SavingTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavingTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavingTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavingType model
   */
  readonly fields: SavingTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavingType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavingTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    accounts<T extends SavingType$accountsArgs<ExtArgs> = {}>(args?: Subset<T, SavingType$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SavingType model
   */ 
  interface SavingTypeFieldRefs {
    readonly id: FieldRef<"SavingType", 'Int'>
    readonly name: FieldRef<"SavingType", 'String'>
    readonly type: FieldRef<"SavingType", 'String'>
    readonly createdAt: FieldRef<"SavingType", 'DateTime'>
    readonly updatedAt: FieldRef<"SavingType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavingType findUnique
   */
  export type SavingTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingType
     */
    select?: SavingTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingTypeInclude<ExtArgs> | null
    /**
     * Filter, which SavingType to fetch.
     */
    where: SavingTypeWhereUniqueInput
  }

  /**
   * SavingType findUniqueOrThrow
   */
  export type SavingTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingType
     */
    select?: SavingTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingTypeInclude<ExtArgs> | null
    /**
     * Filter, which SavingType to fetch.
     */
    where: SavingTypeWhereUniqueInput
  }

  /**
   * SavingType findFirst
   */
  export type SavingTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingType
     */
    select?: SavingTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingTypeInclude<ExtArgs> | null
    /**
     * Filter, which SavingType to fetch.
     */
    where?: SavingTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingTypes to fetch.
     */
    orderBy?: SavingTypeOrderByWithRelationInput | SavingTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavingTypes.
     */
    cursor?: SavingTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavingTypes.
     */
    distinct?: SavingTypeScalarFieldEnum | SavingTypeScalarFieldEnum[]
  }

  /**
   * SavingType findFirstOrThrow
   */
  export type SavingTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingType
     */
    select?: SavingTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingTypeInclude<ExtArgs> | null
    /**
     * Filter, which SavingType to fetch.
     */
    where?: SavingTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingTypes to fetch.
     */
    orderBy?: SavingTypeOrderByWithRelationInput | SavingTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavingTypes.
     */
    cursor?: SavingTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavingTypes.
     */
    distinct?: SavingTypeScalarFieldEnum | SavingTypeScalarFieldEnum[]
  }

  /**
   * SavingType findMany
   */
  export type SavingTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingType
     */
    select?: SavingTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingTypeInclude<ExtArgs> | null
    /**
     * Filter, which SavingTypes to fetch.
     */
    where?: SavingTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavingTypes to fetch.
     */
    orderBy?: SavingTypeOrderByWithRelationInput | SavingTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavingTypes.
     */
    cursor?: SavingTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavingTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavingTypes.
     */
    skip?: number
    distinct?: SavingTypeScalarFieldEnum | SavingTypeScalarFieldEnum[]
  }

  /**
   * SavingType create
   */
  export type SavingTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingType
     */
    select?: SavingTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a SavingType.
     */
    data: XOR<SavingTypeCreateInput, SavingTypeUncheckedCreateInput>
  }

  /**
   * SavingType createMany
   */
  export type SavingTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavingTypes.
     */
    data: SavingTypeCreateManyInput | SavingTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavingType update
   */
  export type SavingTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingType
     */
    select?: SavingTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a SavingType.
     */
    data: XOR<SavingTypeUpdateInput, SavingTypeUncheckedUpdateInput>
    /**
     * Choose, which SavingType to update.
     */
    where: SavingTypeWhereUniqueInput
  }

  /**
   * SavingType updateMany
   */
  export type SavingTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavingTypes.
     */
    data: XOR<SavingTypeUpdateManyMutationInput, SavingTypeUncheckedUpdateManyInput>
    /**
     * Filter which SavingTypes to update
     */
    where?: SavingTypeWhereInput
  }

  /**
   * SavingType upsert
   */
  export type SavingTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingType
     */
    select?: SavingTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the SavingType to update in case it exists.
     */
    where: SavingTypeWhereUniqueInput
    /**
     * In case the SavingType found by the `where` argument doesn't exist, create a new SavingType with this data.
     */
    create: XOR<SavingTypeCreateInput, SavingTypeUncheckedCreateInput>
    /**
     * In case the SavingType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavingTypeUpdateInput, SavingTypeUncheckedUpdateInput>
  }

  /**
   * SavingType delete
   */
  export type SavingTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingType
     */
    select?: SavingTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingTypeInclude<ExtArgs> | null
    /**
     * Filter which SavingType to delete.
     */
    where: SavingTypeWhereUniqueInput
  }

  /**
   * SavingType deleteMany
   */
  export type SavingTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavingTypes to delete
     */
    where?: SavingTypeWhereInput
  }

  /**
   * SavingType.accounts
   */
  export type SavingType$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * SavingType without action
   */
  export type SavingTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavingType
     */
    select?: SavingTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavingTypeInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    id: number | null
    regularTransferDate: number | null
    rate: number | null
    amount: number | null
    currentAmount: number | null
    userId: number | null
    savingTypeId: number | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
    regularTransferDate: number | null
    rate: number | null
    amount: number | null
    currentAmount: number | null
    userId: number | null
    savingTypeId: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    taxType: string | null
    regularTransferDate: number | null
    rate: number | null
    title: string | null
    amount: number | null
    currentAmount: number | null
    userId: number | null
    isExpiration: boolean | null
    startDate: Date | null
    endDate: Date | null
    savingTypeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    taxType: string | null
    regularTransferDate: number | null
    rate: number | null
    title: string | null
    amount: number | null
    currentAmount: number | null
    userId: number | null
    isExpiration: boolean | null
    startDate: Date | null
    endDate: Date | null
    savingTypeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    taxType: number
    regularTransferDate: number
    rate: number
    title: number
    amount: number
    currentAmount: number
    userId: number
    isExpiration: number
    startDate: number
    endDate: number
    savingTypeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
    regularTransferDate?: true
    rate?: true
    amount?: true
    currentAmount?: true
    userId?: true
    savingTypeId?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
    regularTransferDate?: true
    rate?: true
    amount?: true
    currentAmount?: true
    userId?: true
    savingTypeId?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    taxType?: true
    regularTransferDate?: true
    rate?: true
    title?: true
    amount?: true
    currentAmount?: true
    userId?: true
    isExpiration?: true
    startDate?: true
    endDate?: true
    savingTypeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    taxType?: true
    regularTransferDate?: true
    rate?: true
    title?: true
    amount?: true
    currentAmount?: true
    userId?: true
    isExpiration?: true
    startDate?: true
    endDate?: true
    savingTypeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    taxType?: true
    regularTransferDate?: true
    rate?: true
    title?: true
    amount?: true
    currentAmount?: true
    userId?: true
    isExpiration?: true
    startDate?: true
    endDate?: true
    savingTypeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: number
    taxType: string
    regularTransferDate: number
    rate: number
    title: string
    amount: number
    currentAmount: number
    userId: number
    isExpiration: boolean
    startDate: Date
    endDate: Date
    savingTypeId: number
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taxType?: boolean
    regularTransferDate?: boolean
    rate?: boolean
    title?: boolean
    amount?: boolean
    currentAmount?: boolean
    userId?: boolean
    isExpiration?: boolean
    startDate?: boolean
    endDate?: boolean
    savingTypeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    savingType?: boolean | SavingTypeDefaultArgs<ExtArgs>
    deposits?: boolean | Account$depositsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    taxType?: boolean
    regularTransferDate?: boolean
    rate?: boolean
    title?: boolean
    amount?: boolean
    currentAmount?: boolean
    userId?: boolean
    isExpiration?: boolean
    startDate?: boolean
    endDate?: boolean
    savingTypeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    savingType?: boolean | SavingTypeDefaultArgs<ExtArgs>
    deposits?: boolean | Account$depositsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      savingType: Prisma.$SavingTypePayload<ExtArgs>
      deposits: Prisma.$DepositPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taxType: string
      regularTransferDate: number
      rate: number
      title: string
      amount: number
      currentAmount: number
      userId: number
      isExpiration: boolean
      startDate: Date
      endDate: Date
      savingTypeId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }


  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    savingType<T extends SavingTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SavingTypeDefaultArgs<ExtArgs>>): Prisma__SavingTypeClient<$Result.GetResult<Prisma.$SavingTypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    deposits<T extends Account$depositsArgs<ExtArgs> = {}>(args?: Subset<T, Account$depositsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'Int'>
    readonly taxType: FieldRef<"Account", 'String'>
    readonly regularTransferDate: FieldRef<"Account", 'Int'>
    readonly rate: FieldRef<"Account", 'Float'>
    readonly title: FieldRef<"Account", 'String'>
    readonly amount: FieldRef<"Account", 'Int'>
    readonly currentAmount: FieldRef<"Account", 'Int'>
    readonly userId: FieldRef<"Account", 'Int'>
    readonly isExpiration: FieldRef<"Account", 'Boolean'>
    readonly startDate: FieldRef<"Account", 'DateTime'>
    readonly endDate: FieldRef<"Account", 'DateTime'>
    readonly savingTypeId: FieldRef<"Account", 'Int'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account.deposits
   */
  export type Account$depositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    where?: DepositWhereInput
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    cursor?: DepositWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model AccountBook
   */

  export type AggregateAccountBook = {
    _count: AccountBookCountAggregateOutputType | null
    _avg: AccountBookAvgAggregateOutputType | null
    _sum: AccountBookSumAggregateOutputType | null
    _min: AccountBookMinAggregateOutputType | null
    _max: AccountBookMaxAggregateOutputType | null
  }

  export type AccountBookAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
    accountBookCategoryId: number | null
  }

  export type AccountBookSumAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
    accountBookCategoryId: number | null
  }

  export type AccountBookMinAggregateOutputType = {
    id: number | null
    title: string | null
    amount: number | null
    memo: string | null
    type: $Enums.AccountBookCategoryType | null
    isRegularExpenditure: boolean | null
    registerDateTime: Date | null
    userId: number | null
    accountBookCategoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountBookMaxAggregateOutputType = {
    id: number | null
    title: string | null
    amount: number | null
    memo: string | null
    type: $Enums.AccountBookCategoryType | null
    isRegularExpenditure: boolean | null
    registerDateTime: Date | null
    userId: number | null
    accountBookCategoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountBookCountAggregateOutputType = {
    id: number
    title: number
    amount: number
    memo: number
    type: number
    isRegularExpenditure: number
    registerDateTime: number
    userId: number
    accountBookCategoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountBookAvgAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
    accountBookCategoryId?: true
  }

  export type AccountBookSumAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
    accountBookCategoryId?: true
  }

  export type AccountBookMinAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    memo?: true
    type?: true
    isRegularExpenditure?: true
    registerDateTime?: true
    userId?: true
    accountBookCategoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountBookMaxAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    memo?: true
    type?: true
    isRegularExpenditure?: true
    registerDateTime?: true
    userId?: true
    accountBookCategoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountBookCountAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    memo?: true
    type?: true
    isRegularExpenditure?: true
    registerDateTime?: true
    userId?: true
    accountBookCategoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountBookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountBook to aggregate.
     */
    where?: AccountBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountBooks to fetch.
     */
    orderBy?: AccountBookOrderByWithRelationInput | AccountBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountBooks
    **/
    _count?: true | AccountBookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountBookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountBookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountBookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountBookMaxAggregateInputType
  }

  export type GetAccountBookAggregateType<T extends AccountBookAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountBook[P]>
      : GetScalarType<T[P], AggregateAccountBook[P]>
  }




  export type AccountBookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountBookWhereInput
    orderBy?: AccountBookOrderByWithAggregationInput | AccountBookOrderByWithAggregationInput[]
    by: AccountBookScalarFieldEnum[] | AccountBookScalarFieldEnum
    having?: AccountBookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountBookCountAggregateInputType | true
    _avg?: AccountBookAvgAggregateInputType
    _sum?: AccountBookSumAggregateInputType
    _min?: AccountBookMinAggregateInputType
    _max?: AccountBookMaxAggregateInputType
  }

  export type AccountBookGroupByOutputType = {
    id: number
    title: string
    amount: number
    memo: string
    type: $Enums.AccountBookCategoryType
    isRegularExpenditure: boolean
    registerDateTime: Date
    userId: number
    accountBookCategoryId: number
    createdAt: Date
    updatedAt: Date
    _count: AccountBookCountAggregateOutputType | null
    _avg: AccountBookAvgAggregateOutputType | null
    _sum: AccountBookSumAggregateOutputType | null
    _min: AccountBookMinAggregateOutputType | null
    _max: AccountBookMaxAggregateOutputType | null
  }

  type GetAccountBookGroupByPayload<T extends AccountBookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountBookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountBookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountBookGroupByOutputType[P]>
            : GetScalarType<T[P], AccountBookGroupByOutputType[P]>
        }
      >
    >


  export type AccountBookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    amount?: boolean
    memo?: boolean
    type?: boolean
    isRegularExpenditure?: boolean
    registerDateTime?: boolean
    userId?: boolean
    accountBookCategoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    accountBookCategory?: boolean | AccountBookCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountBook"]>

  export type AccountBookSelectScalar = {
    id?: boolean
    title?: boolean
    amount?: boolean
    memo?: boolean
    type?: boolean
    isRegularExpenditure?: boolean
    registerDateTime?: boolean
    userId?: boolean
    accountBookCategoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type AccountBookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    accountBookCategory?: boolean | AccountBookCategoryDefaultArgs<ExtArgs>
  }


  export type $AccountBookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountBook"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      accountBookCategory: Prisma.$AccountBookCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      amount: number
      memo: string
      type: $Enums.AccountBookCategoryType
      isRegularExpenditure: boolean
      registerDateTime: Date
      userId: number
      accountBookCategoryId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accountBook"]>
    composites: {}
  }


  type AccountBookGetPayload<S extends boolean | null | undefined | AccountBookDefaultArgs> = $Result.GetResult<Prisma.$AccountBookPayload, S>

  type AccountBookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountBookFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountBookCountAggregateInputType | true
    }

  export interface AccountBookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountBook'], meta: { name: 'AccountBook' } }
    /**
     * Find zero or one AccountBook that matches the filter.
     * @param {AccountBookFindUniqueArgs} args - Arguments to find a AccountBook
     * @example
     * // Get one AccountBook
     * const accountBook = await prisma.accountBook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountBookFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountBookFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountBookClient<$Result.GetResult<Prisma.$AccountBookPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AccountBook that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountBookFindUniqueOrThrowArgs} args - Arguments to find a AccountBook
     * @example
     * // Get one AccountBook
     * const accountBook = await prisma.accountBook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountBookFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountBookFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountBookClient<$Result.GetResult<Prisma.$AccountBookPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AccountBook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBookFindFirstArgs} args - Arguments to find a AccountBook
     * @example
     * // Get one AccountBook
     * const accountBook = await prisma.accountBook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountBookFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountBookFindFirstArgs<ExtArgs>>
    ): Prisma__AccountBookClient<$Result.GetResult<Prisma.$AccountBookPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AccountBook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBookFindFirstOrThrowArgs} args - Arguments to find a AccountBook
     * @example
     * // Get one AccountBook
     * const accountBook = await prisma.accountBook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountBookFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountBookFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountBookClient<$Result.GetResult<Prisma.$AccountBookPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AccountBooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountBooks
     * const accountBooks = await prisma.accountBook.findMany()
     * 
     * // Get first 10 AccountBooks
     * const accountBooks = await prisma.accountBook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountBookWithIdOnly = await prisma.accountBook.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountBookFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountBookFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountBookPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AccountBook.
     * @param {AccountBookCreateArgs} args - Arguments to create a AccountBook.
     * @example
     * // Create one AccountBook
     * const AccountBook = await prisma.accountBook.create({
     *   data: {
     *     // ... data to create a AccountBook
     *   }
     * })
     * 
    **/
    create<T extends AccountBookCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountBookCreateArgs<ExtArgs>>
    ): Prisma__AccountBookClient<$Result.GetResult<Prisma.$AccountBookPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AccountBooks.
     * @param {AccountBookCreateManyArgs} args - Arguments to create many AccountBooks.
     * @example
     * // Create many AccountBooks
     * const accountBook = await prisma.accountBook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AccountBookCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountBookCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AccountBook.
     * @param {AccountBookDeleteArgs} args - Arguments to delete one AccountBook.
     * @example
     * // Delete one AccountBook
     * const AccountBook = await prisma.accountBook.delete({
     *   where: {
     *     // ... filter to delete one AccountBook
     *   }
     * })
     * 
    **/
    delete<T extends AccountBookDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountBookDeleteArgs<ExtArgs>>
    ): Prisma__AccountBookClient<$Result.GetResult<Prisma.$AccountBookPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AccountBook.
     * @param {AccountBookUpdateArgs} args - Arguments to update one AccountBook.
     * @example
     * // Update one AccountBook
     * const accountBook = await prisma.accountBook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountBookUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountBookUpdateArgs<ExtArgs>>
    ): Prisma__AccountBookClient<$Result.GetResult<Prisma.$AccountBookPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AccountBooks.
     * @param {AccountBookDeleteManyArgs} args - Arguments to filter AccountBooks to delete.
     * @example
     * // Delete a few AccountBooks
     * const { count } = await prisma.accountBook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountBookDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountBookDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountBooks
     * const accountBook = await prisma.accountBook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountBookUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountBookUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AccountBook.
     * @param {AccountBookUpsertArgs} args - Arguments to update or create a AccountBook.
     * @example
     * // Update or create a AccountBook
     * const accountBook = await prisma.accountBook.upsert({
     *   create: {
     *     // ... data to create a AccountBook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountBook we want to update
     *   }
     * })
    **/
    upsert<T extends AccountBookUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountBookUpsertArgs<ExtArgs>>
    ): Prisma__AccountBookClient<$Result.GetResult<Prisma.$AccountBookPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AccountBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBookCountArgs} args - Arguments to filter AccountBooks to count.
     * @example
     * // Count the number of AccountBooks
     * const count = await prisma.accountBook.count({
     *   where: {
     *     // ... the filter for the AccountBooks we want to count
     *   }
     * })
    **/
    count<T extends AccountBookCountArgs>(
      args?: Subset<T, AccountBookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountBookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountBookAggregateArgs>(args: Subset<T, AccountBookAggregateArgs>): Prisma.PrismaPromise<GetAccountBookAggregateType<T>>

    /**
     * Group by AccountBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountBookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountBookGroupByArgs['orderBy'] }
        : { orderBy?: AccountBookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountBookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountBook model
   */
  readonly fields: AccountBookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountBook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountBookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    accountBookCategory<T extends AccountBookCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountBookCategoryDefaultArgs<ExtArgs>>): Prisma__AccountBookCategoryClient<$Result.GetResult<Prisma.$AccountBookCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AccountBook model
   */ 
  interface AccountBookFieldRefs {
    readonly id: FieldRef<"AccountBook", 'Int'>
    readonly title: FieldRef<"AccountBook", 'String'>
    readonly amount: FieldRef<"AccountBook", 'Int'>
    readonly memo: FieldRef<"AccountBook", 'String'>
    readonly type: FieldRef<"AccountBook", 'AccountBookCategoryType'>
    readonly isRegularExpenditure: FieldRef<"AccountBook", 'Boolean'>
    readonly registerDateTime: FieldRef<"AccountBook", 'DateTime'>
    readonly userId: FieldRef<"AccountBook", 'Int'>
    readonly accountBookCategoryId: FieldRef<"AccountBook", 'Int'>
    readonly createdAt: FieldRef<"AccountBook", 'DateTime'>
    readonly updatedAt: FieldRef<"AccountBook", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccountBook findUnique
   */
  export type AccountBookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBook
     */
    select?: AccountBookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookInclude<ExtArgs> | null
    /**
     * Filter, which AccountBook to fetch.
     */
    where: AccountBookWhereUniqueInput
  }

  /**
   * AccountBook findUniqueOrThrow
   */
  export type AccountBookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBook
     */
    select?: AccountBookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookInclude<ExtArgs> | null
    /**
     * Filter, which AccountBook to fetch.
     */
    where: AccountBookWhereUniqueInput
  }

  /**
   * AccountBook findFirst
   */
  export type AccountBookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBook
     */
    select?: AccountBookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookInclude<ExtArgs> | null
    /**
     * Filter, which AccountBook to fetch.
     */
    where?: AccountBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountBooks to fetch.
     */
    orderBy?: AccountBookOrderByWithRelationInput | AccountBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountBooks.
     */
    cursor?: AccountBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountBooks.
     */
    distinct?: AccountBookScalarFieldEnum | AccountBookScalarFieldEnum[]
  }

  /**
   * AccountBook findFirstOrThrow
   */
  export type AccountBookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBook
     */
    select?: AccountBookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookInclude<ExtArgs> | null
    /**
     * Filter, which AccountBook to fetch.
     */
    where?: AccountBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountBooks to fetch.
     */
    orderBy?: AccountBookOrderByWithRelationInput | AccountBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountBooks.
     */
    cursor?: AccountBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountBooks.
     */
    distinct?: AccountBookScalarFieldEnum | AccountBookScalarFieldEnum[]
  }

  /**
   * AccountBook findMany
   */
  export type AccountBookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBook
     */
    select?: AccountBookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookInclude<ExtArgs> | null
    /**
     * Filter, which AccountBooks to fetch.
     */
    where?: AccountBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountBooks to fetch.
     */
    orderBy?: AccountBookOrderByWithRelationInput | AccountBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountBooks.
     */
    cursor?: AccountBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountBooks.
     */
    skip?: number
    distinct?: AccountBookScalarFieldEnum | AccountBookScalarFieldEnum[]
  }

  /**
   * AccountBook create
   */
  export type AccountBookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBook
     */
    select?: AccountBookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookInclude<ExtArgs> | null
    /**
     * The data needed to create a AccountBook.
     */
    data: XOR<AccountBookCreateInput, AccountBookUncheckedCreateInput>
  }

  /**
   * AccountBook createMany
   */
  export type AccountBookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountBooks.
     */
    data: AccountBookCreateManyInput | AccountBookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountBook update
   */
  export type AccountBookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBook
     */
    select?: AccountBookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookInclude<ExtArgs> | null
    /**
     * The data needed to update a AccountBook.
     */
    data: XOR<AccountBookUpdateInput, AccountBookUncheckedUpdateInput>
    /**
     * Choose, which AccountBook to update.
     */
    where: AccountBookWhereUniqueInput
  }

  /**
   * AccountBook updateMany
   */
  export type AccountBookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountBooks.
     */
    data: XOR<AccountBookUpdateManyMutationInput, AccountBookUncheckedUpdateManyInput>
    /**
     * Filter which AccountBooks to update
     */
    where?: AccountBookWhereInput
  }

  /**
   * AccountBook upsert
   */
  export type AccountBookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBook
     */
    select?: AccountBookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookInclude<ExtArgs> | null
    /**
     * The filter to search for the AccountBook to update in case it exists.
     */
    where: AccountBookWhereUniqueInput
    /**
     * In case the AccountBook found by the `where` argument doesn't exist, create a new AccountBook with this data.
     */
    create: XOR<AccountBookCreateInput, AccountBookUncheckedCreateInput>
    /**
     * In case the AccountBook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountBookUpdateInput, AccountBookUncheckedUpdateInput>
  }

  /**
   * AccountBook delete
   */
  export type AccountBookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBook
     */
    select?: AccountBookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookInclude<ExtArgs> | null
    /**
     * Filter which AccountBook to delete.
     */
    where: AccountBookWhereUniqueInput
  }

  /**
   * AccountBook deleteMany
   */
  export type AccountBookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountBooks to delete
     */
    where?: AccountBookWhereInput
  }

  /**
   * AccountBook without action
   */
  export type AccountBookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBook
     */
    select?: AccountBookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookInclude<ExtArgs> | null
  }


  /**
   * Model AccountBookCategory
   */

  export type AggregateAccountBookCategory = {
    _count: AccountBookCategoryCountAggregateOutputType | null
    _avg: AccountBookCategoryAvgAggregateOutputType | null
    _sum: AccountBookCategorySumAggregateOutputType | null
    _min: AccountBookCategoryMinAggregateOutputType | null
    _max: AccountBookCategoryMaxAggregateOutputType | null
  }

  export type AccountBookCategoryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    accountBookCategoryImageId: number | null
  }

  export type AccountBookCategorySumAggregateOutputType = {
    id: number | null
    userId: number | null
    accountBookCategoryImageId: number | null
  }

  export type AccountBookCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    delYn: boolean | null
    type: $Enums.AccountBookCategoryType | null
    useStatistic: boolean | null
    userId: number | null
    accountBookCategoryImageId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountBookCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    delYn: boolean | null
    type: $Enums.AccountBookCategoryType | null
    useStatistic: boolean | null
    userId: number | null
    accountBookCategoryImageId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountBookCategoryCountAggregateOutputType = {
    id: number
    name: number
    delYn: number
    type: number
    useStatistic: number
    userId: number
    accountBookCategoryImageId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountBookCategoryAvgAggregateInputType = {
    id?: true
    userId?: true
    accountBookCategoryImageId?: true
  }

  export type AccountBookCategorySumAggregateInputType = {
    id?: true
    userId?: true
    accountBookCategoryImageId?: true
  }

  export type AccountBookCategoryMinAggregateInputType = {
    id?: true
    name?: true
    delYn?: true
    type?: true
    useStatistic?: true
    userId?: true
    accountBookCategoryImageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountBookCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    delYn?: true
    type?: true
    useStatistic?: true
    userId?: true
    accountBookCategoryImageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountBookCategoryCountAggregateInputType = {
    id?: true
    name?: true
    delYn?: true
    type?: true
    useStatistic?: true
    userId?: true
    accountBookCategoryImageId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountBookCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountBookCategory to aggregate.
     */
    where?: AccountBookCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountBookCategories to fetch.
     */
    orderBy?: AccountBookCategoryOrderByWithRelationInput | AccountBookCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountBookCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountBookCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountBookCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountBookCategories
    **/
    _count?: true | AccountBookCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountBookCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountBookCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountBookCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountBookCategoryMaxAggregateInputType
  }

  export type GetAccountBookCategoryAggregateType<T extends AccountBookCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountBookCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountBookCategory[P]>
      : GetScalarType<T[P], AggregateAccountBookCategory[P]>
  }




  export type AccountBookCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountBookCategoryWhereInput
    orderBy?: AccountBookCategoryOrderByWithAggregationInput | AccountBookCategoryOrderByWithAggregationInput[]
    by: AccountBookCategoryScalarFieldEnum[] | AccountBookCategoryScalarFieldEnum
    having?: AccountBookCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountBookCategoryCountAggregateInputType | true
    _avg?: AccountBookCategoryAvgAggregateInputType
    _sum?: AccountBookCategorySumAggregateInputType
    _min?: AccountBookCategoryMinAggregateInputType
    _max?: AccountBookCategoryMaxAggregateInputType
  }

  export type AccountBookCategoryGroupByOutputType = {
    id: number
    name: string
    delYn: boolean
    type: $Enums.AccountBookCategoryType
    useStatistic: boolean
    userId: number
    accountBookCategoryImageId: number
    createdAt: Date
    updatedAt: Date
    _count: AccountBookCategoryCountAggregateOutputType | null
    _avg: AccountBookCategoryAvgAggregateOutputType | null
    _sum: AccountBookCategorySumAggregateOutputType | null
    _min: AccountBookCategoryMinAggregateOutputType | null
    _max: AccountBookCategoryMaxAggregateOutputType | null
  }

  type GetAccountBookCategoryGroupByPayload<T extends AccountBookCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountBookCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountBookCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountBookCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], AccountBookCategoryGroupByOutputType[P]>
        }
      >
    >


  export type AccountBookCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    delYn?: boolean
    type?: boolean
    useStatistic?: boolean
    userId?: boolean
    accountBookCategoryImageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    accountBooks?: boolean | AccountBookCategory$accountBooksArgs<ExtArgs>
    RegularExpenditures?: boolean | AccountBookCategory$RegularExpendituresArgs<ExtArgs>
    accountBookCategoryImage?: boolean | AccountBookCategoryImageDefaultArgs<ExtArgs>
    _count?: boolean | AccountBookCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountBookCategory"]>

  export type AccountBookCategorySelectScalar = {
    id?: boolean
    name?: boolean
    delYn?: boolean
    type?: boolean
    useStatistic?: boolean
    userId?: boolean
    accountBookCategoryImageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type AccountBookCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    accountBooks?: boolean | AccountBookCategory$accountBooksArgs<ExtArgs>
    RegularExpenditures?: boolean | AccountBookCategory$RegularExpendituresArgs<ExtArgs>
    accountBookCategoryImage?: boolean | AccountBookCategoryImageDefaultArgs<ExtArgs>
    _count?: boolean | AccountBookCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AccountBookCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountBookCategory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      accountBooks: Prisma.$AccountBookPayload<ExtArgs>[]
      RegularExpenditures: Prisma.$RegularExpenditurePayload<ExtArgs>[]
      accountBookCategoryImage: Prisma.$AccountBookCategoryImagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      delYn: boolean
      type: $Enums.AccountBookCategoryType
      useStatistic: boolean
      userId: number
      accountBookCategoryImageId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accountBookCategory"]>
    composites: {}
  }


  type AccountBookCategoryGetPayload<S extends boolean | null | undefined | AccountBookCategoryDefaultArgs> = $Result.GetResult<Prisma.$AccountBookCategoryPayload, S>

  type AccountBookCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountBookCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountBookCategoryCountAggregateInputType | true
    }

  export interface AccountBookCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountBookCategory'], meta: { name: 'AccountBookCategory' } }
    /**
     * Find zero or one AccountBookCategory that matches the filter.
     * @param {AccountBookCategoryFindUniqueArgs} args - Arguments to find a AccountBookCategory
     * @example
     * // Get one AccountBookCategory
     * const accountBookCategory = await prisma.accountBookCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountBookCategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountBookCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountBookCategoryClient<$Result.GetResult<Prisma.$AccountBookCategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AccountBookCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountBookCategoryFindUniqueOrThrowArgs} args - Arguments to find a AccountBookCategory
     * @example
     * // Get one AccountBookCategory
     * const accountBookCategory = await prisma.accountBookCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountBookCategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountBookCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountBookCategoryClient<$Result.GetResult<Prisma.$AccountBookCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AccountBookCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBookCategoryFindFirstArgs} args - Arguments to find a AccountBookCategory
     * @example
     * // Get one AccountBookCategory
     * const accountBookCategory = await prisma.accountBookCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountBookCategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountBookCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__AccountBookCategoryClient<$Result.GetResult<Prisma.$AccountBookCategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AccountBookCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBookCategoryFindFirstOrThrowArgs} args - Arguments to find a AccountBookCategory
     * @example
     * // Get one AccountBookCategory
     * const accountBookCategory = await prisma.accountBookCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountBookCategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountBookCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountBookCategoryClient<$Result.GetResult<Prisma.$AccountBookCategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AccountBookCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBookCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountBookCategories
     * const accountBookCategories = await prisma.accountBookCategory.findMany()
     * 
     * // Get first 10 AccountBookCategories
     * const accountBookCategories = await prisma.accountBookCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountBookCategoryWithIdOnly = await prisma.accountBookCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountBookCategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountBookCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountBookCategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AccountBookCategory.
     * @param {AccountBookCategoryCreateArgs} args - Arguments to create a AccountBookCategory.
     * @example
     * // Create one AccountBookCategory
     * const AccountBookCategory = await prisma.accountBookCategory.create({
     *   data: {
     *     // ... data to create a AccountBookCategory
     *   }
     * })
     * 
    **/
    create<T extends AccountBookCategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountBookCategoryCreateArgs<ExtArgs>>
    ): Prisma__AccountBookCategoryClient<$Result.GetResult<Prisma.$AccountBookCategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AccountBookCategories.
     * @param {AccountBookCategoryCreateManyArgs} args - Arguments to create many AccountBookCategories.
     * @example
     * // Create many AccountBookCategories
     * const accountBookCategory = await prisma.accountBookCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AccountBookCategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountBookCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AccountBookCategory.
     * @param {AccountBookCategoryDeleteArgs} args - Arguments to delete one AccountBookCategory.
     * @example
     * // Delete one AccountBookCategory
     * const AccountBookCategory = await prisma.accountBookCategory.delete({
     *   where: {
     *     // ... filter to delete one AccountBookCategory
     *   }
     * })
     * 
    **/
    delete<T extends AccountBookCategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountBookCategoryDeleteArgs<ExtArgs>>
    ): Prisma__AccountBookCategoryClient<$Result.GetResult<Prisma.$AccountBookCategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AccountBookCategory.
     * @param {AccountBookCategoryUpdateArgs} args - Arguments to update one AccountBookCategory.
     * @example
     * // Update one AccountBookCategory
     * const accountBookCategory = await prisma.accountBookCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountBookCategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountBookCategoryUpdateArgs<ExtArgs>>
    ): Prisma__AccountBookCategoryClient<$Result.GetResult<Prisma.$AccountBookCategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AccountBookCategories.
     * @param {AccountBookCategoryDeleteManyArgs} args - Arguments to filter AccountBookCategories to delete.
     * @example
     * // Delete a few AccountBookCategories
     * const { count } = await prisma.accountBookCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountBookCategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountBookCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountBookCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBookCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountBookCategories
     * const accountBookCategory = await prisma.accountBookCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountBookCategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountBookCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AccountBookCategory.
     * @param {AccountBookCategoryUpsertArgs} args - Arguments to update or create a AccountBookCategory.
     * @example
     * // Update or create a AccountBookCategory
     * const accountBookCategory = await prisma.accountBookCategory.upsert({
     *   create: {
     *     // ... data to create a AccountBookCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountBookCategory we want to update
     *   }
     * })
    **/
    upsert<T extends AccountBookCategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountBookCategoryUpsertArgs<ExtArgs>>
    ): Prisma__AccountBookCategoryClient<$Result.GetResult<Prisma.$AccountBookCategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AccountBookCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBookCategoryCountArgs} args - Arguments to filter AccountBookCategories to count.
     * @example
     * // Count the number of AccountBookCategories
     * const count = await prisma.accountBookCategory.count({
     *   where: {
     *     // ... the filter for the AccountBookCategories we want to count
     *   }
     * })
    **/
    count<T extends AccountBookCategoryCountArgs>(
      args?: Subset<T, AccountBookCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountBookCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountBookCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBookCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountBookCategoryAggregateArgs>(args: Subset<T, AccountBookCategoryAggregateArgs>): Prisma.PrismaPromise<GetAccountBookCategoryAggregateType<T>>

    /**
     * Group by AccountBookCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBookCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountBookCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountBookCategoryGroupByArgs['orderBy'] }
        : { orderBy?: AccountBookCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountBookCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountBookCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountBookCategory model
   */
  readonly fields: AccountBookCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountBookCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountBookCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    accountBooks<T extends AccountBookCategory$accountBooksArgs<ExtArgs> = {}>(args?: Subset<T, AccountBookCategory$accountBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountBookPayload<ExtArgs>, T, 'findMany'> | Null>;

    RegularExpenditures<T extends AccountBookCategory$RegularExpendituresArgs<ExtArgs> = {}>(args?: Subset<T, AccountBookCategory$RegularExpendituresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegularExpenditurePayload<ExtArgs>, T, 'findMany'> | Null>;

    accountBookCategoryImage<T extends AccountBookCategoryImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountBookCategoryImageDefaultArgs<ExtArgs>>): Prisma__AccountBookCategoryImageClient<$Result.GetResult<Prisma.$AccountBookCategoryImagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AccountBookCategory model
   */ 
  interface AccountBookCategoryFieldRefs {
    readonly id: FieldRef<"AccountBookCategory", 'Int'>
    readonly name: FieldRef<"AccountBookCategory", 'String'>
    readonly delYn: FieldRef<"AccountBookCategory", 'Boolean'>
    readonly type: FieldRef<"AccountBookCategory", 'AccountBookCategoryType'>
    readonly useStatistic: FieldRef<"AccountBookCategory", 'Boolean'>
    readonly userId: FieldRef<"AccountBookCategory", 'Int'>
    readonly accountBookCategoryImageId: FieldRef<"AccountBookCategory", 'Int'>
    readonly createdAt: FieldRef<"AccountBookCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"AccountBookCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccountBookCategory findUnique
   */
  export type AccountBookCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategory
     */
    select?: AccountBookCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AccountBookCategory to fetch.
     */
    where: AccountBookCategoryWhereUniqueInput
  }

  /**
   * AccountBookCategory findUniqueOrThrow
   */
  export type AccountBookCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategory
     */
    select?: AccountBookCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AccountBookCategory to fetch.
     */
    where: AccountBookCategoryWhereUniqueInput
  }

  /**
   * AccountBookCategory findFirst
   */
  export type AccountBookCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategory
     */
    select?: AccountBookCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AccountBookCategory to fetch.
     */
    where?: AccountBookCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountBookCategories to fetch.
     */
    orderBy?: AccountBookCategoryOrderByWithRelationInput | AccountBookCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountBookCategories.
     */
    cursor?: AccountBookCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountBookCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountBookCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountBookCategories.
     */
    distinct?: AccountBookCategoryScalarFieldEnum | AccountBookCategoryScalarFieldEnum[]
  }

  /**
   * AccountBookCategory findFirstOrThrow
   */
  export type AccountBookCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategory
     */
    select?: AccountBookCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AccountBookCategory to fetch.
     */
    where?: AccountBookCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountBookCategories to fetch.
     */
    orderBy?: AccountBookCategoryOrderByWithRelationInput | AccountBookCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountBookCategories.
     */
    cursor?: AccountBookCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountBookCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountBookCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountBookCategories.
     */
    distinct?: AccountBookCategoryScalarFieldEnum | AccountBookCategoryScalarFieldEnum[]
  }

  /**
   * AccountBookCategory findMany
   */
  export type AccountBookCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategory
     */
    select?: AccountBookCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AccountBookCategories to fetch.
     */
    where?: AccountBookCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountBookCategories to fetch.
     */
    orderBy?: AccountBookCategoryOrderByWithRelationInput | AccountBookCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountBookCategories.
     */
    cursor?: AccountBookCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountBookCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountBookCategories.
     */
    skip?: number
    distinct?: AccountBookCategoryScalarFieldEnum | AccountBookCategoryScalarFieldEnum[]
  }

  /**
   * AccountBookCategory create
   */
  export type AccountBookCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategory
     */
    select?: AccountBookCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a AccountBookCategory.
     */
    data: XOR<AccountBookCategoryCreateInput, AccountBookCategoryUncheckedCreateInput>
  }

  /**
   * AccountBookCategory createMany
   */
  export type AccountBookCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountBookCategories.
     */
    data: AccountBookCategoryCreateManyInput | AccountBookCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountBookCategory update
   */
  export type AccountBookCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategory
     */
    select?: AccountBookCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a AccountBookCategory.
     */
    data: XOR<AccountBookCategoryUpdateInput, AccountBookCategoryUncheckedUpdateInput>
    /**
     * Choose, which AccountBookCategory to update.
     */
    where: AccountBookCategoryWhereUniqueInput
  }

  /**
   * AccountBookCategory updateMany
   */
  export type AccountBookCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountBookCategories.
     */
    data: XOR<AccountBookCategoryUpdateManyMutationInput, AccountBookCategoryUncheckedUpdateManyInput>
    /**
     * Filter which AccountBookCategories to update
     */
    where?: AccountBookCategoryWhereInput
  }

  /**
   * AccountBookCategory upsert
   */
  export type AccountBookCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategory
     */
    select?: AccountBookCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the AccountBookCategory to update in case it exists.
     */
    where: AccountBookCategoryWhereUniqueInput
    /**
     * In case the AccountBookCategory found by the `where` argument doesn't exist, create a new AccountBookCategory with this data.
     */
    create: XOR<AccountBookCategoryCreateInput, AccountBookCategoryUncheckedCreateInput>
    /**
     * In case the AccountBookCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountBookCategoryUpdateInput, AccountBookCategoryUncheckedUpdateInput>
  }

  /**
   * AccountBookCategory delete
   */
  export type AccountBookCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategory
     */
    select?: AccountBookCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookCategoryInclude<ExtArgs> | null
    /**
     * Filter which AccountBookCategory to delete.
     */
    where: AccountBookCategoryWhereUniqueInput
  }

  /**
   * AccountBookCategory deleteMany
   */
  export type AccountBookCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountBookCategories to delete
     */
    where?: AccountBookCategoryWhereInput
  }

  /**
   * AccountBookCategory.accountBooks
   */
  export type AccountBookCategory$accountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBook
     */
    select?: AccountBookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookInclude<ExtArgs> | null
    where?: AccountBookWhereInput
    orderBy?: AccountBookOrderByWithRelationInput | AccountBookOrderByWithRelationInput[]
    cursor?: AccountBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountBookScalarFieldEnum | AccountBookScalarFieldEnum[]
  }

  /**
   * AccountBookCategory.RegularExpenditures
   */
  export type AccountBookCategory$RegularExpendituresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularExpenditure
     */
    select?: RegularExpenditureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularExpenditureInclude<ExtArgs> | null
    where?: RegularExpenditureWhereInput
    orderBy?: RegularExpenditureOrderByWithRelationInput | RegularExpenditureOrderByWithRelationInput[]
    cursor?: RegularExpenditureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegularExpenditureScalarFieldEnum | RegularExpenditureScalarFieldEnum[]
  }

  /**
   * AccountBookCategory without action
   */
  export type AccountBookCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategory
     */
    select?: AccountBookCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Deposit
   */

  export type AggregateDeposit = {
    _count: DepositCountAggregateOutputType | null
    _avg: DepositAvgAggregateOutputType | null
    _sum: DepositSumAggregateOutputType | null
    _min: DepositMinAggregateOutputType | null
    _max: DepositMaxAggregateOutputType | null
  }

  export type DepositAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    prevTotalAmount: number | null
    userId: number | null
    accountId: number | null
  }

  export type DepositSumAggregateOutputType = {
    id: number | null
    amount: number | null
    prevTotalAmount: number | null
    userId: number | null
    accountId: number | null
  }

  export type DepositMinAggregateOutputType = {
    id: number | null
    amount: number | null
    prevTotalAmount: number | null
    userId: number | null
    accountId: number | null
    depositDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepositMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    prevTotalAmount: number | null
    userId: number | null
    accountId: number | null
    depositDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepositCountAggregateOutputType = {
    id: number
    amount: number
    prevTotalAmount: number
    userId: number
    accountId: number
    depositDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepositAvgAggregateInputType = {
    id?: true
    amount?: true
    prevTotalAmount?: true
    userId?: true
    accountId?: true
  }

  export type DepositSumAggregateInputType = {
    id?: true
    amount?: true
    prevTotalAmount?: true
    userId?: true
    accountId?: true
  }

  export type DepositMinAggregateInputType = {
    id?: true
    amount?: true
    prevTotalAmount?: true
    userId?: true
    accountId?: true
    depositDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepositMaxAggregateInputType = {
    id?: true
    amount?: true
    prevTotalAmount?: true
    userId?: true
    accountId?: true
    depositDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepositCountAggregateInputType = {
    id?: true
    amount?: true
    prevTotalAmount?: true
    userId?: true
    accountId?: true
    depositDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepositAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deposit to aggregate.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deposits
    **/
    _count?: true | DepositCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepositAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepositSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepositMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepositMaxAggregateInputType
  }

  export type GetDepositAggregateType<T extends DepositAggregateArgs> = {
        [P in keyof T & keyof AggregateDeposit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeposit[P]>
      : GetScalarType<T[P], AggregateDeposit[P]>
  }




  export type DepositGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositWhereInput
    orderBy?: DepositOrderByWithAggregationInput | DepositOrderByWithAggregationInput[]
    by: DepositScalarFieldEnum[] | DepositScalarFieldEnum
    having?: DepositScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepositCountAggregateInputType | true
    _avg?: DepositAvgAggregateInputType
    _sum?: DepositSumAggregateInputType
    _min?: DepositMinAggregateInputType
    _max?: DepositMaxAggregateInputType
  }

  export type DepositGroupByOutputType = {
    id: number
    amount: number
    prevTotalAmount: number
    userId: number
    accountId: number
    depositDate: Date
    createdAt: Date
    updatedAt: Date
    _count: DepositCountAggregateOutputType | null
    _avg: DepositAvgAggregateOutputType | null
    _sum: DepositSumAggregateOutputType | null
    _min: DepositMinAggregateOutputType | null
    _max: DepositMaxAggregateOutputType | null
  }

  type GetDepositGroupByPayload<T extends DepositGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepositGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepositGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepositGroupByOutputType[P]>
            : GetScalarType<T[P], DepositGroupByOutputType[P]>
        }
      >
    >


  export type DepositSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    prevTotalAmount?: boolean
    userId?: boolean
    accountId?: boolean
    depositDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectScalar = {
    id?: boolean
    amount?: boolean
    prevTotalAmount?: boolean
    userId?: boolean
    accountId?: boolean
    depositDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type DepositInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }


  export type $DepositPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deposit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      prevTotalAmount: number
      userId: number
      accountId: number
      depositDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deposit"]>
    composites: {}
  }


  type DepositGetPayload<S extends boolean | null | undefined | DepositDefaultArgs> = $Result.GetResult<Prisma.$DepositPayload, S>

  type DepositCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DepositFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DepositCountAggregateInputType | true
    }

  export interface DepositDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deposit'], meta: { name: 'Deposit' } }
    /**
     * Find zero or one Deposit that matches the filter.
     * @param {DepositFindUniqueArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DepositFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DepositFindUniqueArgs<ExtArgs>>
    ): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Deposit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DepositFindUniqueOrThrowArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DepositFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DepositFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Deposit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindFirstArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DepositFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DepositFindFirstArgs<ExtArgs>>
    ): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Deposit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindFirstOrThrowArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DepositFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DepositFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Deposits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deposits
     * const deposits = await prisma.deposit.findMany()
     * 
     * // Get first 10 Deposits
     * const deposits = await prisma.deposit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const depositWithIdOnly = await prisma.deposit.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DepositFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DepositFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Deposit.
     * @param {DepositCreateArgs} args - Arguments to create a Deposit.
     * @example
     * // Create one Deposit
     * const Deposit = await prisma.deposit.create({
     *   data: {
     *     // ... data to create a Deposit
     *   }
     * })
     * 
    **/
    create<T extends DepositCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DepositCreateArgs<ExtArgs>>
    ): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Deposits.
     * @param {DepositCreateManyArgs} args - Arguments to create many Deposits.
     * @example
     * // Create many Deposits
     * const deposit = await prisma.deposit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DepositCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DepositCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Deposit.
     * @param {DepositDeleteArgs} args - Arguments to delete one Deposit.
     * @example
     * // Delete one Deposit
     * const Deposit = await prisma.deposit.delete({
     *   where: {
     *     // ... filter to delete one Deposit
     *   }
     * })
     * 
    **/
    delete<T extends DepositDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DepositDeleteArgs<ExtArgs>>
    ): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Deposit.
     * @param {DepositUpdateArgs} args - Arguments to update one Deposit.
     * @example
     * // Update one Deposit
     * const deposit = await prisma.deposit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DepositUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DepositUpdateArgs<ExtArgs>>
    ): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Deposits.
     * @param {DepositDeleteManyArgs} args - Arguments to filter Deposits to delete.
     * @example
     * // Delete a few Deposits
     * const { count } = await prisma.deposit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DepositDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DepositDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deposits
     * const deposit = await prisma.deposit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DepositUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DepositUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Deposit.
     * @param {DepositUpsertArgs} args - Arguments to update or create a Deposit.
     * @example
     * // Update or create a Deposit
     * const deposit = await prisma.deposit.upsert({
     *   create: {
     *     // ... data to create a Deposit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deposit we want to update
     *   }
     * })
    **/
    upsert<T extends DepositUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DepositUpsertArgs<ExtArgs>>
    ): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositCountArgs} args - Arguments to filter Deposits to count.
     * @example
     * // Count the number of Deposits
     * const count = await prisma.deposit.count({
     *   where: {
     *     // ... the filter for the Deposits we want to count
     *   }
     * })
    **/
    count<T extends DepositCountArgs>(
      args?: Subset<T, DepositCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepositCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepositAggregateArgs>(args: Subset<T, DepositAggregateArgs>): Prisma.PrismaPromise<GetDepositAggregateType<T>>

    /**
     * Group by Deposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepositGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepositGroupByArgs['orderBy'] }
        : { orderBy?: DepositGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepositGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepositGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deposit model
   */
  readonly fields: DepositFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deposit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepositClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Deposit model
   */ 
  interface DepositFieldRefs {
    readonly id: FieldRef<"Deposit", 'Int'>
    readonly amount: FieldRef<"Deposit", 'Int'>
    readonly prevTotalAmount: FieldRef<"Deposit", 'Int'>
    readonly userId: FieldRef<"Deposit", 'Int'>
    readonly accountId: FieldRef<"Deposit", 'Int'>
    readonly depositDate: FieldRef<"Deposit", 'DateTime'>
    readonly createdAt: FieldRef<"Deposit", 'DateTime'>
    readonly updatedAt: FieldRef<"Deposit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deposit findUnique
   */
  export type DepositFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit findUniqueOrThrow
   */
  export type DepositFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit findFirst
   */
  export type DepositFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deposits.
     */
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit findFirstOrThrow
   */
  export type DepositFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deposits.
     */
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit findMany
   */
  export type DepositFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposits to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit create
   */
  export type DepositCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The data needed to create a Deposit.
     */
    data: XOR<DepositCreateInput, DepositUncheckedCreateInput>
  }

  /**
   * Deposit createMany
   */
  export type DepositCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deposits.
     */
    data: DepositCreateManyInput | DepositCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deposit update
   */
  export type DepositUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The data needed to update a Deposit.
     */
    data: XOR<DepositUpdateInput, DepositUncheckedUpdateInput>
    /**
     * Choose, which Deposit to update.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit updateMany
   */
  export type DepositUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deposits.
     */
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyInput>
    /**
     * Filter which Deposits to update
     */
    where?: DepositWhereInput
  }

  /**
   * Deposit upsert
   */
  export type DepositUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The filter to search for the Deposit to update in case it exists.
     */
    where: DepositWhereUniqueInput
    /**
     * In case the Deposit found by the `where` argument doesn't exist, create a new Deposit with this data.
     */
    create: XOR<DepositCreateInput, DepositUncheckedCreateInput>
    /**
     * In case the Deposit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepositUpdateInput, DepositUncheckedUpdateInput>
  }

  /**
   * Deposit delete
   */
  export type DepositDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter which Deposit to delete.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit deleteMany
   */
  export type DepositDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deposits to delete
     */
    where?: DepositWhereInput
  }

  /**
   * Deposit without action
   */
  export type DepositDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
  }


  /**
   * Model AccountBookCategoryImage
   */

  export type AggregateAccountBookCategoryImage = {
    _count: AccountBookCategoryImageCountAggregateOutputType | null
    _avg: AccountBookCategoryImageAvgAggregateOutputType | null
    _sum: AccountBookCategoryImageSumAggregateOutputType | null
    _min: AccountBookCategoryImageMinAggregateOutputType | null
    _max: AccountBookCategoryImageMaxAggregateOutputType | null
  }

  export type AccountBookCategoryImageAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AccountBookCategoryImageSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AccountBookCategoryImageMinAggregateOutputType = {
    id: number | null
    name: string | null
    imageUrl: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountBookCategoryImageMaxAggregateOutputType = {
    id: number | null
    name: string | null
    imageUrl: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountBookCategoryImageCountAggregateOutputType = {
    id: number
    name: number
    imageUrl: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountBookCategoryImageAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AccountBookCategoryImageSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AccountBookCategoryImageMinAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountBookCategoryImageMaxAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountBookCategoryImageCountAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountBookCategoryImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountBookCategoryImage to aggregate.
     */
    where?: AccountBookCategoryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountBookCategoryImages to fetch.
     */
    orderBy?: AccountBookCategoryImageOrderByWithRelationInput | AccountBookCategoryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountBookCategoryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountBookCategoryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountBookCategoryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountBookCategoryImages
    **/
    _count?: true | AccountBookCategoryImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountBookCategoryImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountBookCategoryImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountBookCategoryImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountBookCategoryImageMaxAggregateInputType
  }

  export type GetAccountBookCategoryImageAggregateType<T extends AccountBookCategoryImageAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountBookCategoryImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountBookCategoryImage[P]>
      : GetScalarType<T[P], AggregateAccountBookCategoryImage[P]>
  }




  export type AccountBookCategoryImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountBookCategoryImageWhereInput
    orderBy?: AccountBookCategoryImageOrderByWithAggregationInput | AccountBookCategoryImageOrderByWithAggregationInput[]
    by: AccountBookCategoryImageScalarFieldEnum[] | AccountBookCategoryImageScalarFieldEnum
    having?: AccountBookCategoryImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountBookCategoryImageCountAggregateInputType | true
    _avg?: AccountBookCategoryImageAvgAggregateInputType
    _sum?: AccountBookCategoryImageSumAggregateInputType
    _min?: AccountBookCategoryImageMinAggregateInputType
    _max?: AccountBookCategoryImageMaxAggregateInputType
  }

  export type AccountBookCategoryImageGroupByOutputType = {
    id: number
    name: string
    imageUrl: string
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: AccountBookCategoryImageCountAggregateOutputType | null
    _avg: AccountBookCategoryImageAvgAggregateOutputType | null
    _sum: AccountBookCategoryImageSumAggregateOutputType | null
    _min: AccountBookCategoryImageMinAggregateOutputType | null
    _max: AccountBookCategoryImageMaxAggregateOutputType | null
  }

  type GetAccountBookCategoryImageGroupByPayload<T extends AccountBookCategoryImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountBookCategoryImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountBookCategoryImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountBookCategoryImageGroupByOutputType[P]>
            : GetScalarType<T[P], AccountBookCategoryImageGroupByOutputType[P]>
        }
      >
    >


  export type AccountBookCategoryImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    accountBookCategorys?: boolean | AccountBookCategoryImage$accountBookCategorysArgs<ExtArgs>
    _count?: boolean | AccountBookCategoryImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountBookCategoryImage"]>

  export type AccountBookCategoryImageSelectScalar = {
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type AccountBookCategoryImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    accountBookCategorys?: boolean | AccountBookCategoryImage$accountBookCategorysArgs<ExtArgs>
    _count?: boolean | AccountBookCategoryImageCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AccountBookCategoryImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountBookCategoryImage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      accountBookCategorys: Prisma.$AccountBookCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      imageUrl: string
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accountBookCategoryImage"]>
    composites: {}
  }


  type AccountBookCategoryImageGetPayload<S extends boolean | null | undefined | AccountBookCategoryImageDefaultArgs> = $Result.GetResult<Prisma.$AccountBookCategoryImagePayload, S>

  type AccountBookCategoryImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountBookCategoryImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountBookCategoryImageCountAggregateInputType | true
    }

  export interface AccountBookCategoryImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountBookCategoryImage'], meta: { name: 'AccountBookCategoryImage' } }
    /**
     * Find zero or one AccountBookCategoryImage that matches the filter.
     * @param {AccountBookCategoryImageFindUniqueArgs} args - Arguments to find a AccountBookCategoryImage
     * @example
     * // Get one AccountBookCategoryImage
     * const accountBookCategoryImage = await prisma.accountBookCategoryImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountBookCategoryImageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountBookCategoryImageFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountBookCategoryImageClient<$Result.GetResult<Prisma.$AccountBookCategoryImagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AccountBookCategoryImage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountBookCategoryImageFindUniqueOrThrowArgs} args - Arguments to find a AccountBookCategoryImage
     * @example
     * // Get one AccountBookCategoryImage
     * const accountBookCategoryImage = await prisma.accountBookCategoryImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountBookCategoryImageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountBookCategoryImageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountBookCategoryImageClient<$Result.GetResult<Prisma.$AccountBookCategoryImagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AccountBookCategoryImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBookCategoryImageFindFirstArgs} args - Arguments to find a AccountBookCategoryImage
     * @example
     * // Get one AccountBookCategoryImage
     * const accountBookCategoryImage = await prisma.accountBookCategoryImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountBookCategoryImageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountBookCategoryImageFindFirstArgs<ExtArgs>>
    ): Prisma__AccountBookCategoryImageClient<$Result.GetResult<Prisma.$AccountBookCategoryImagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AccountBookCategoryImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBookCategoryImageFindFirstOrThrowArgs} args - Arguments to find a AccountBookCategoryImage
     * @example
     * // Get one AccountBookCategoryImage
     * const accountBookCategoryImage = await prisma.accountBookCategoryImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountBookCategoryImageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountBookCategoryImageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountBookCategoryImageClient<$Result.GetResult<Prisma.$AccountBookCategoryImagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AccountBookCategoryImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBookCategoryImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountBookCategoryImages
     * const accountBookCategoryImages = await prisma.accountBookCategoryImage.findMany()
     * 
     * // Get first 10 AccountBookCategoryImages
     * const accountBookCategoryImages = await prisma.accountBookCategoryImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountBookCategoryImageWithIdOnly = await prisma.accountBookCategoryImage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountBookCategoryImageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountBookCategoryImageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountBookCategoryImagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AccountBookCategoryImage.
     * @param {AccountBookCategoryImageCreateArgs} args - Arguments to create a AccountBookCategoryImage.
     * @example
     * // Create one AccountBookCategoryImage
     * const AccountBookCategoryImage = await prisma.accountBookCategoryImage.create({
     *   data: {
     *     // ... data to create a AccountBookCategoryImage
     *   }
     * })
     * 
    **/
    create<T extends AccountBookCategoryImageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountBookCategoryImageCreateArgs<ExtArgs>>
    ): Prisma__AccountBookCategoryImageClient<$Result.GetResult<Prisma.$AccountBookCategoryImagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AccountBookCategoryImages.
     * @param {AccountBookCategoryImageCreateManyArgs} args - Arguments to create many AccountBookCategoryImages.
     * @example
     * // Create many AccountBookCategoryImages
     * const accountBookCategoryImage = await prisma.accountBookCategoryImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AccountBookCategoryImageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountBookCategoryImageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AccountBookCategoryImage.
     * @param {AccountBookCategoryImageDeleteArgs} args - Arguments to delete one AccountBookCategoryImage.
     * @example
     * // Delete one AccountBookCategoryImage
     * const AccountBookCategoryImage = await prisma.accountBookCategoryImage.delete({
     *   where: {
     *     // ... filter to delete one AccountBookCategoryImage
     *   }
     * })
     * 
    **/
    delete<T extends AccountBookCategoryImageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountBookCategoryImageDeleteArgs<ExtArgs>>
    ): Prisma__AccountBookCategoryImageClient<$Result.GetResult<Prisma.$AccountBookCategoryImagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AccountBookCategoryImage.
     * @param {AccountBookCategoryImageUpdateArgs} args - Arguments to update one AccountBookCategoryImage.
     * @example
     * // Update one AccountBookCategoryImage
     * const accountBookCategoryImage = await prisma.accountBookCategoryImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountBookCategoryImageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountBookCategoryImageUpdateArgs<ExtArgs>>
    ): Prisma__AccountBookCategoryImageClient<$Result.GetResult<Prisma.$AccountBookCategoryImagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AccountBookCategoryImages.
     * @param {AccountBookCategoryImageDeleteManyArgs} args - Arguments to filter AccountBookCategoryImages to delete.
     * @example
     * // Delete a few AccountBookCategoryImages
     * const { count } = await prisma.accountBookCategoryImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountBookCategoryImageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountBookCategoryImageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountBookCategoryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBookCategoryImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountBookCategoryImages
     * const accountBookCategoryImage = await prisma.accountBookCategoryImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountBookCategoryImageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountBookCategoryImageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AccountBookCategoryImage.
     * @param {AccountBookCategoryImageUpsertArgs} args - Arguments to update or create a AccountBookCategoryImage.
     * @example
     * // Update or create a AccountBookCategoryImage
     * const accountBookCategoryImage = await prisma.accountBookCategoryImage.upsert({
     *   create: {
     *     // ... data to create a AccountBookCategoryImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountBookCategoryImage we want to update
     *   }
     * })
    **/
    upsert<T extends AccountBookCategoryImageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountBookCategoryImageUpsertArgs<ExtArgs>>
    ): Prisma__AccountBookCategoryImageClient<$Result.GetResult<Prisma.$AccountBookCategoryImagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AccountBookCategoryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBookCategoryImageCountArgs} args - Arguments to filter AccountBookCategoryImages to count.
     * @example
     * // Count the number of AccountBookCategoryImages
     * const count = await prisma.accountBookCategoryImage.count({
     *   where: {
     *     // ... the filter for the AccountBookCategoryImages we want to count
     *   }
     * })
    **/
    count<T extends AccountBookCategoryImageCountArgs>(
      args?: Subset<T, AccountBookCategoryImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountBookCategoryImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountBookCategoryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBookCategoryImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountBookCategoryImageAggregateArgs>(args: Subset<T, AccountBookCategoryImageAggregateArgs>): Prisma.PrismaPromise<GetAccountBookCategoryImageAggregateType<T>>

    /**
     * Group by AccountBookCategoryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountBookCategoryImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountBookCategoryImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountBookCategoryImageGroupByArgs['orderBy'] }
        : { orderBy?: AccountBookCategoryImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountBookCategoryImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountBookCategoryImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountBookCategoryImage model
   */
  readonly fields: AccountBookCategoryImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountBookCategoryImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountBookCategoryImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    accountBookCategorys<T extends AccountBookCategoryImage$accountBookCategorysArgs<ExtArgs> = {}>(args?: Subset<T, AccountBookCategoryImage$accountBookCategorysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountBookCategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AccountBookCategoryImage model
   */ 
  interface AccountBookCategoryImageFieldRefs {
    readonly id: FieldRef<"AccountBookCategoryImage", 'Int'>
    readonly name: FieldRef<"AccountBookCategoryImage", 'String'>
    readonly imageUrl: FieldRef<"AccountBookCategoryImage", 'String'>
    readonly userId: FieldRef<"AccountBookCategoryImage", 'Int'>
    readonly createdAt: FieldRef<"AccountBookCategoryImage", 'DateTime'>
    readonly updatedAt: FieldRef<"AccountBookCategoryImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccountBookCategoryImage findUnique
   */
  export type AccountBookCategoryImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategoryImage
     */
    select?: AccountBookCategoryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookCategoryImageInclude<ExtArgs> | null
    /**
     * Filter, which AccountBookCategoryImage to fetch.
     */
    where: AccountBookCategoryImageWhereUniqueInput
  }

  /**
   * AccountBookCategoryImage findUniqueOrThrow
   */
  export type AccountBookCategoryImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategoryImage
     */
    select?: AccountBookCategoryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookCategoryImageInclude<ExtArgs> | null
    /**
     * Filter, which AccountBookCategoryImage to fetch.
     */
    where: AccountBookCategoryImageWhereUniqueInput
  }

  /**
   * AccountBookCategoryImage findFirst
   */
  export type AccountBookCategoryImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategoryImage
     */
    select?: AccountBookCategoryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookCategoryImageInclude<ExtArgs> | null
    /**
     * Filter, which AccountBookCategoryImage to fetch.
     */
    where?: AccountBookCategoryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountBookCategoryImages to fetch.
     */
    orderBy?: AccountBookCategoryImageOrderByWithRelationInput | AccountBookCategoryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountBookCategoryImages.
     */
    cursor?: AccountBookCategoryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountBookCategoryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountBookCategoryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountBookCategoryImages.
     */
    distinct?: AccountBookCategoryImageScalarFieldEnum | AccountBookCategoryImageScalarFieldEnum[]
  }

  /**
   * AccountBookCategoryImage findFirstOrThrow
   */
  export type AccountBookCategoryImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategoryImage
     */
    select?: AccountBookCategoryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookCategoryImageInclude<ExtArgs> | null
    /**
     * Filter, which AccountBookCategoryImage to fetch.
     */
    where?: AccountBookCategoryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountBookCategoryImages to fetch.
     */
    orderBy?: AccountBookCategoryImageOrderByWithRelationInput | AccountBookCategoryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountBookCategoryImages.
     */
    cursor?: AccountBookCategoryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountBookCategoryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountBookCategoryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountBookCategoryImages.
     */
    distinct?: AccountBookCategoryImageScalarFieldEnum | AccountBookCategoryImageScalarFieldEnum[]
  }

  /**
   * AccountBookCategoryImage findMany
   */
  export type AccountBookCategoryImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategoryImage
     */
    select?: AccountBookCategoryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookCategoryImageInclude<ExtArgs> | null
    /**
     * Filter, which AccountBookCategoryImages to fetch.
     */
    where?: AccountBookCategoryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountBookCategoryImages to fetch.
     */
    orderBy?: AccountBookCategoryImageOrderByWithRelationInput | AccountBookCategoryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountBookCategoryImages.
     */
    cursor?: AccountBookCategoryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountBookCategoryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountBookCategoryImages.
     */
    skip?: number
    distinct?: AccountBookCategoryImageScalarFieldEnum | AccountBookCategoryImageScalarFieldEnum[]
  }

  /**
   * AccountBookCategoryImage create
   */
  export type AccountBookCategoryImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategoryImage
     */
    select?: AccountBookCategoryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookCategoryImageInclude<ExtArgs> | null
    /**
     * The data needed to create a AccountBookCategoryImage.
     */
    data: XOR<AccountBookCategoryImageCreateInput, AccountBookCategoryImageUncheckedCreateInput>
  }

  /**
   * AccountBookCategoryImage createMany
   */
  export type AccountBookCategoryImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountBookCategoryImages.
     */
    data: AccountBookCategoryImageCreateManyInput | AccountBookCategoryImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountBookCategoryImage update
   */
  export type AccountBookCategoryImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategoryImage
     */
    select?: AccountBookCategoryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookCategoryImageInclude<ExtArgs> | null
    /**
     * The data needed to update a AccountBookCategoryImage.
     */
    data: XOR<AccountBookCategoryImageUpdateInput, AccountBookCategoryImageUncheckedUpdateInput>
    /**
     * Choose, which AccountBookCategoryImage to update.
     */
    where: AccountBookCategoryImageWhereUniqueInput
  }

  /**
   * AccountBookCategoryImage updateMany
   */
  export type AccountBookCategoryImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountBookCategoryImages.
     */
    data: XOR<AccountBookCategoryImageUpdateManyMutationInput, AccountBookCategoryImageUncheckedUpdateManyInput>
    /**
     * Filter which AccountBookCategoryImages to update
     */
    where?: AccountBookCategoryImageWhereInput
  }

  /**
   * AccountBookCategoryImage upsert
   */
  export type AccountBookCategoryImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategoryImage
     */
    select?: AccountBookCategoryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookCategoryImageInclude<ExtArgs> | null
    /**
     * The filter to search for the AccountBookCategoryImage to update in case it exists.
     */
    where: AccountBookCategoryImageWhereUniqueInput
    /**
     * In case the AccountBookCategoryImage found by the `where` argument doesn't exist, create a new AccountBookCategoryImage with this data.
     */
    create: XOR<AccountBookCategoryImageCreateInput, AccountBookCategoryImageUncheckedCreateInput>
    /**
     * In case the AccountBookCategoryImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountBookCategoryImageUpdateInput, AccountBookCategoryImageUncheckedUpdateInput>
  }

  /**
   * AccountBookCategoryImage delete
   */
  export type AccountBookCategoryImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategoryImage
     */
    select?: AccountBookCategoryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookCategoryImageInclude<ExtArgs> | null
    /**
     * Filter which AccountBookCategoryImage to delete.
     */
    where: AccountBookCategoryImageWhereUniqueInput
  }

  /**
   * AccountBookCategoryImage deleteMany
   */
  export type AccountBookCategoryImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountBookCategoryImages to delete
     */
    where?: AccountBookCategoryImageWhereInput
  }

  /**
   * AccountBookCategoryImage.accountBookCategorys
   */
  export type AccountBookCategoryImage$accountBookCategorysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategory
     */
    select?: AccountBookCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookCategoryInclude<ExtArgs> | null
    where?: AccountBookCategoryWhereInput
    orderBy?: AccountBookCategoryOrderByWithRelationInput | AccountBookCategoryOrderByWithRelationInput[]
    cursor?: AccountBookCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountBookCategoryScalarFieldEnum | AccountBookCategoryScalarFieldEnum[]
  }

  /**
   * AccountBookCategoryImage without action
   */
  export type AccountBookCategoryImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountBookCategoryImage
     */
    select?: AccountBookCategoryImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountBookCategoryImageInclude<ExtArgs> | null
  }


  /**
   * Model BucketList
   */

  export type AggregateBucketList = {
    _count: BucketListCountAggregateOutputType | null
    _avg: BucketListAvgAggregateOutputType | null
    _sum: BucketListSumAggregateOutputType | null
    _min: BucketListMinAggregateOutputType | null
    _max: BucketListMaxAggregateOutputType | null
  }

  export type BucketListAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BucketListSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BucketListMinAggregateOutputType = {
    isComplete: boolean | null
    id: number | null
    title: string | null
    description: string | null
    userId: number | null
    completeDate: Date | null
    thumbImageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BucketListMaxAggregateOutputType = {
    isComplete: boolean | null
    id: number | null
    title: string | null
    description: string | null
    userId: number | null
    completeDate: Date | null
    thumbImageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BucketListCountAggregateOutputType = {
    isComplete: number
    id: number
    title: number
    description: number
    userId: number
    completeDate: number
    thumbImageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BucketListAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BucketListSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BucketListMinAggregateInputType = {
    isComplete?: true
    id?: true
    title?: true
    description?: true
    userId?: true
    completeDate?: true
    thumbImageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BucketListMaxAggregateInputType = {
    isComplete?: true
    id?: true
    title?: true
    description?: true
    userId?: true
    completeDate?: true
    thumbImageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BucketListCountAggregateInputType = {
    isComplete?: true
    id?: true
    title?: true
    description?: true
    userId?: true
    completeDate?: true
    thumbImageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BucketListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BucketList to aggregate.
     */
    where?: BucketListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BucketLists to fetch.
     */
    orderBy?: BucketListOrderByWithRelationInput | BucketListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BucketListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BucketLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BucketLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BucketLists
    **/
    _count?: true | BucketListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BucketListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BucketListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BucketListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BucketListMaxAggregateInputType
  }

  export type GetBucketListAggregateType<T extends BucketListAggregateArgs> = {
        [P in keyof T & keyof AggregateBucketList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBucketList[P]>
      : GetScalarType<T[P], AggregateBucketList[P]>
  }




  export type BucketListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BucketListWhereInput
    orderBy?: BucketListOrderByWithAggregationInput | BucketListOrderByWithAggregationInput[]
    by: BucketListScalarFieldEnum[] | BucketListScalarFieldEnum
    having?: BucketListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BucketListCountAggregateInputType | true
    _avg?: BucketListAvgAggregateInputType
    _sum?: BucketListSumAggregateInputType
    _min?: BucketListMinAggregateInputType
    _max?: BucketListMaxAggregateInputType
  }

  export type BucketListGroupByOutputType = {
    isComplete: boolean
    id: number
    title: string
    description: string
    userId: number
    completeDate: Date
    thumbImageUrl: string
    createdAt: Date
    updatedAt: Date
    _count: BucketListCountAggregateOutputType | null
    _avg: BucketListAvgAggregateOutputType | null
    _sum: BucketListSumAggregateOutputType | null
    _min: BucketListMinAggregateOutputType | null
    _max: BucketListMaxAggregateOutputType | null
  }

  type GetBucketListGroupByPayload<T extends BucketListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BucketListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BucketListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BucketListGroupByOutputType[P]>
            : GetScalarType<T[P], BucketListGroupByOutputType[P]>
        }
      >
    >


  export type BucketListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    isComplete?: boolean
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    completeDate?: boolean
    thumbImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    todoList?: boolean | BucketList$todoListArgs<ExtArgs>
    _count?: boolean | BucketListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bucketList"]>

  export type BucketListSelectScalar = {
    isComplete?: boolean
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    completeDate?: boolean
    thumbImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type BucketListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    todoList?: boolean | BucketList$todoListArgs<ExtArgs>
    _count?: boolean | BucketListCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BucketListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BucketList"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      todoList: Prisma.$TodoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      isComplete: boolean
      id: number
      title: string
      description: string
      userId: number
      completeDate: Date
      thumbImageUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bucketList"]>
    composites: {}
  }


  type BucketListGetPayload<S extends boolean | null | undefined | BucketListDefaultArgs> = $Result.GetResult<Prisma.$BucketListPayload, S>

  type BucketListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BucketListFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BucketListCountAggregateInputType | true
    }

  export interface BucketListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BucketList'], meta: { name: 'BucketList' } }
    /**
     * Find zero or one BucketList that matches the filter.
     * @param {BucketListFindUniqueArgs} args - Arguments to find a BucketList
     * @example
     * // Get one BucketList
     * const bucketList = await prisma.bucketList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BucketListFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BucketListFindUniqueArgs<ExtArgs>>
    ): Prisma__BucketListClient<$Result.GetResult<Prisma.$BucketListPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BucketList that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BucketListFindUniqueOrThrowArgs} args - Arguments to find a BucketList
     * @example
     * // Get one BucketList
     * const bucketList = await prisma.bucketList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BucketListFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BucketListFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BucketListClient<$Result.GetResult<Prisma.$BucketListPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BucketList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketListFindFirstArgs} args - Arguments to find a BucketList
     * @example
     * // Get one BucketList
     * const bucketList = await prisma.bucketList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BucketListFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BucketListFindFirstArgs<ExtArgs>>
    ): Prisma__BucketListClient<$Result.GetResult<Prisma.$BucketListPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BucketList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketListFindFirstOrThrowArgs} args - Arguments to find a BucketList
     * @example
     * // Get one BucketList
     * const bucketList = await prisma.bucketList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BucketListFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BucketListFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BucketListClient<$Result.GetResult<Prisma.$BucketListPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BucketLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BucketLists
     * const bucketLists = await prisma.bucketList.findMany()
     * 
     * // Get first 10 BucketLists
     * const bucketLists = await prisma.bucketList.findMany({ take: 10 })
     * 
     * // Only select the `isComplete`
     * const bucketListWithIsCompleteOnly = await prisma.bucketList.findMany({ select: { isComplete: true } })
     * 
    **/
    findMany<T extends BucketListFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BucketListFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BucketListPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BucketList.
     * @param {BucketListCreateArgs} args - Arguments to create a BucketList.
     * @example
     * // Create one BucketList
     * const BucketList = await prisma.bucketList.create({
     *   data: {
     *     // ... data to create a BucketList
     *   }
     * })
     * 
    **/
    create<T extends BucketListCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BucketListCreateArgs<ExtArgs>>
    ): Prisma__BucketListClient<$Result.GetResult<Prisma.$BucketListPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BucketLists.
     * @param {BucketListCreateManyArgs} args - Arguments to create many BucketLists.
     * @example
     * // Create many BucketLists
     * const bucketList = await prisma.bucketList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends BucketListCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BucketListCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BucketList.
     * @param {BucketListDeleteArgs} args - Arguments to delete one BucketList.
     * @example
     * // Delete one BucketList
     * const BucketList = await prisma.bucketList.delete({
     *   where: {
     *     // ... filter to delete one BucketList
     *   }
     * })
     * 
    **/
    delete<T extends BucketListDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BucketListDeleteArgs<ExtArgs>>
    ): Prisma__BucketListClient<$Result.GetResult<Prisma.$BucketListPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BucketList.
     * @param {BucketListUpdateArgs} args - Arguments to update one BucketList.
     * @example
     * // Update one BucketList
     * const bucketList = await prisma.bucketList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BucketListUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BucketListUpdateArgs<ExtArgs>>
    ): Prisma__BucketListClient<$Result.GetResult<Prisma.$BucketListPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BucketLists.
     * @param {BucketListDeleteManyArgs} args - Arguments to filter BucketLists to delete.
     * @example
     * // Delete a few BucketLists
     * const { count } = await prisma.bucketList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BucketListDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BucketListDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BucketLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BucketLists
     * const bucketList = await prisma.bucketList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BucketListUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BucketListUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BucketList.
     * @param {BucketListUpsertArgs} args - Arguments to update or create a BucketList.
     * @example
     * // Update or create a BucketList
     * const bucketList = await prisma.bucketList.upsert({
     *   create: {
     *     // ... data to create a BucketList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BucketList we want to update
     *   }
     * })
    **/
    upsert<T extends BucketListUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BucketListUpsertArgs<ExtArgs>>
    ): Prisma__BucketListClient<$Result.GetResult<Prisma.$BucketListPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BucketLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketListCountArgs} args - Arguments to filter BucketLists to count.
     * @example
     * // Count the number of BucketLists
     * const count = await prisma.bucketList.count({
     *   where: {
     *     // ... the filter for the BucketLists we want to count
     *   }
     * })
    **/
    count<T extends BucketListCountArgs>(
      args?: Subset<T, BucketListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BucketListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BucketList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BucketListAggregateArgs>(args: Subset<T, BucketListAggregateArgs>): Prisma.PrismaPromise<GetBucketListAggregateType<T>>

    /**
     * Group by BucketList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BucketListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BucketListGroupByArgs['orderBy'] }
        : { orderBy?: BucketListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BucketListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBucketListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BucketList model
   */
  readonly fields: BucketListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BucketList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BucketListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    todoList<T extends BucketList$todoListArgs<ExtArgs> = {}>(args?: Subset<T, BucketList$todoListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BucketList model
   */ 
  interface BucketListFieldRefs {
    readonly isComplete: FieldRef<"BucketList", 'Boolean'>
    readonly id: FieldRef<"BucketList", 'Int'>
    readonly title: FieldRef<"BucketList", 'String'>
    readonly description: FieldRef<"BucketList", 'String'>
    readonly userId: FieldRef<"BucketList", 'Int'>
    readonly completeDate: FieldRef<"BucketList", 'DateTime'>
    readonly thumbImageUrl: FieldRef<"BucketList", 'String'>
    readonly createdAt: FieldRef<"BucketList", 'DateTime'>
    readonly updatedAt: FieldRef<"BucketList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BucketList findUnique
   */
  export type BucketListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketList
     */
    select?: BucketListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketListInclude<ExtArgs> | null
    /**
     * Filter, which BucketList to fetch.
     */
    where: BucketListWhereUniqueInput
  }

  /**
   * BucketList findUniqueOrThrow
   */
  export type BucketListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketList
     */
    select?: BucketListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketListInclude<ExtArgs> | null
    /**
     * Filter, which BucketList to fetch.
     */
    where: BucketListWhereUniqueInput
  }

  /**
   * BucketList findFirst
   */
  export type BucketListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketList
     */
    select?: BucketListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketListInclude<ExtArgs> | null
    /**
     * Filter, which BucketList to fetch.
     */
    where?: BucketListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BucketLists to fetch.
     */
    orderBy?: BucketListOrderByWithRelationInput | BucketListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BucketLists.
     */
    cursor?: BucketListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BucketLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BucketLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BucketLists.
     */
    distinct?: BucketListScalarFieldEnum | BucketListScalarFieldEnum[]
  }

  /**
   * BucketList findFirstOrThrow
   */
  export type BucketListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketList
     */
    select?: BucketListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketListInclude<ExtArgs> | null
    /**
     * Filter, which BucketList to fetch.
     */
    where?: BucketListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BucketLists to fetch.
     */
    orderBy?: BucketListOrderByWithRelationInput | BucketListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BucketLists.
     */
    cursor?: BucketListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BucketLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BucketLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BucketLists.
     */
    distinct?: BucketListScalarFieldEnum | BucketListScalarFieldEnum[]
  }

  /**
   * BucketList findMany
   */
  export type BucketListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketList
     */
    select?: BucketListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketListInclude<ExtArgs> | null
    /**
     * Filter, which BucketLists to fetch.
     */
    where?: BucketListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BucketLists to fetch.
     */
    orderBy?: BucketListOrderByWithRelationInput | BucketListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BucketLists.
     */
    cursor?: BucketListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BucketLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BucketLists.
     */
    skip?: number
    distinct?: BucketListScalarFieldEnum | BucketListScalarFieldEnum[]
  }

  /**
   * BucketList create
   */
  export type BucketListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketList
     */
    select?: BucketListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketListInclude<ExtArgs> | null
    /**
     * The data needed to create a BucketList.
     */
    data: XOR<BucketListCreateInput, BucketListUncheckedCreateInput>
  }

  /**
   * BucketList createMany
   */
  export type BucketListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BucketLists.
     */
    data: BucketListCreateManyInput | BucketListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BucketList update
   */
  export type BucketListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketList
     */
    select?: BucketListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketListInclude<ExtArgs> | null
    /**
     * The data needed to update a BucketList.
     */
    data: XOR<BucketListUpdateInput, BucketListUncheckedUpdateInput>
    /**
     * Choose, which BucketList to update.
     */
    where: BucketListWhereUniqueInput
  }

  /**
   * BucketList updateMany
   */
  export type BucketListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BucketLists.
     */
    data: XOR<BucketListUpdateManyMutationInput, BucketListUncheckedUpdateManyInput>
    /**
     * Filter which BucketLists to update
     */
    where?: BucketListWhereInput
  }

  /**
   * BucketList upsert
   */
  export type BucketListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketList
     */
    select?: BucketListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketListInclude<ExtArgs> | null
    /**
     * The filter to search for the BucketList to update in case it exists.
     */
    where: BucketListWhereUniqueInput
    /**
     * In case the BucketList found by the `where` argument doesn't exist, create a new BucketList with this data.
     */
    create: XOR<BucketListCreateInput, BucketListUncheckedCreateInput>
    /**
     * In case the BucketList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BucketListUpdateInput, BucketListUncheckedUpdateInput>
  }

  /**
   * BucketList delete
   */
  export type BucketListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketList
     */
    select?: BucketListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketListInclude<ExtArgs> | null
    /**
     * Filter which BucketList to delete.
     */
    where: BucketListWhereUniqueInput
  }

  /**
   * BucketList deleteMany
   */
  export type BucketListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BucketLists to delete
     */
    where?: BucketListWhereInput
  }

  /**
   * BucketList.todoList
   */
  export type BucketList$todoListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    where?: TodoWhereInput
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    cursor?: TodoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * BucketList without action
   */
  export type BucketListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketList
     */
    select?: BucketListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketListInclude<ExtArgs> | null
  }


  /**
   * Model RegularExpenditure
   */

  export type AggregateRegularExpenditure = {
    _count: RegularExpenditureCountAggregateOutputType | null
    _avg: RegularExpenditureAvgAggregateOutputType | null
    _sum: RegularExpenditureSumAggregateOutputType | null
    _min: RegularExpenditureMinAggregateOutputType | null
    _max: RegularExpenditureMaxAggregateOutputType | null
  }

  export type RegularExpenditureAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    regularDate: number | null
    userId: number | null
    accountBookCategoryId: number | null
  }

  export type RegularExpenditureSumAggregateOutputType = {
    id: number | null
    amount: number | null
    regularDate: number | null
    userId: number | null
    accountBookCategoryId: number | null
  }

  export type RegularExpenditureMinAggregateOutputType = {
    id: number | null
    amount: number | null
    regularDate: number | null
    title: string | null
    isAutoExpenditure: boolean | null
    userId: number | null
    accountBookCategoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegularExpenditureMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    regularDate: number | null
    title: string | null
    isAutoExpenditure: boolean | null
    userId: number | null
    accountBookCategoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegularExpenditureCountAggregateOutputType = {
    id: number
    amount: number
    regularDate: number
    title: number
    isAutoExpenditure: number
    userId: number
    accountBookCategoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RegularExpenditureAvgAggregateInputType = {
    id?: true
    amount?: true
    regularDate?: true
    userId?: true
    accountBookCategoryId?: true
  }

  export type RegularExpenditureSumAggregateInputType = {
    id?: true
    amount?: true
    regularDate?: true
    userId?: true
    accountBookCategoryId?: true
  }

  export type RegularExpenditureMinAggregateInputType = {
    id?: true
    amount?: true
    regularDate?: true
    title?: true
    isAutoExpenditure?: true
    userId?: true
    accountBookCategoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegularExpenditureMaxAggregateInputType = {
    id?: true
    amount?: true
    regularDate?: true
    title?: true
    isAutoExpenditure?: true
    userId?: true
    accountBookCategoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegularExpenditureCountAggregateInputType = {
    id?: true
    amount?: true
    regularDate?: true
    title?: true
    isAutoExpenditure?: true
    userId?: true
    accountBookCategoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RegularExpenditureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegularExpenditure to aggregate.
     */
    where?: RegularExpenditureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegularExpenditures to fetch.
     */
    orderBy?: RegularExpenditureOrderByWithRelationInput | RegularExpenditureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegularExpenditureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegularExpenditures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegularExpenditures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegularExpenditures
    **/
    _count?: true | RegularExpenditureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegularExpenditureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegularExpenditureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegularExpenditureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegularExpenditureMaxAggregateInputType
  }

  export type GetRegularExpenditureAggregateType<T extends RegularExpenditureAggregateArgs> = {
        [P in keyof T & keyof AggregateRegularExpenditure]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegularExpenditure[P]>
      : GetScalarType<T[P], AggregateRegularExpenditure[P]>
  }




  export type RegularExpenditureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegularExpenditureWhereInput
    orderBy?: RegularExpenditureOrderByWithAggregationInput | RegularExpenditureOrderByWithAggregationInput[]
    by: RegularExpenditureScalarFieldEnum[] | RegularExpenditureScalarFieldEnum
    having?: RegularExpenditureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegularExpenditureCountAggregateInputType | true
    _avg?: RegularExpenditureAvgAggregateInputType
    _sum?: RegularExpenditureSumAggregateInputType
    _min?: RegularExpenditureMinAggregateInputType
    _max?: RegularExpenditureMaxAggregateInputType
  }

  export type RegularExpenditureGroupByOutputType = {
    id: number
    amount: number
    regularDate: number
    title: string
    isAutoExpenditure: boolean
    userId: number
    accountBookCategoryId: number
    createdAt: Date
    updatedAt: Date
    _count: RegularExpenditureCountAggregateOutputType | null
    _avg: RegularExpenditureAvgAggregateOutputType | null
    _sum: RegularExpenditureSumAggregateOutputType | null
    _min: RegularExpenditureMinAggregateOutputType | null
    _max: RegularExpenditureMaxAggregateOutputType | null
  }

  type GetRegularExpenditureGroupByPayload<T extends RegularExpenditureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegularExpenditureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegularExpenditureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegularExpenditureGroupByOutputType[P]>
            : GetScalarType<T[P], RegularExpenditureGroupByOutputType[P]>
        }
      >
    >


  export type RegularExpenditureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    regularDate?: boolean
    title?: boolean
    isAutoExpenditure?: boolean
    userId?: boolean
    accountBookCategoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    accountBookCategory?: boolean | AccountBookCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regularExpenditure"]>

  export type RegularExpenditureSelectScalar = {
    id?: boolean
    amount?: boolean
    regularDate?: boolean
    title?: boolean
    isAutoExpenditure?: boolean
    userId?: boolean
    accountBookCategoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type RegularExpenditureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    accountBookCategory?: boolean | AccountBookCategoryDefaultArgs<ExtArgs>
  }


  export type $RegularExpenditurePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegularExpenditure"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      accountBookCategory: Prisma.$AccountBookCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      regularDate: number
      title: string
      isAutoExpenditure: boolean
      userId: number
      accountBookCategoryId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["regularExpenditure"]>
    composites: {}
  }


  type RegularExpenditureGetPayload<S extends boolean | null | undefined | RegularExpenditureDefaultArgs> = $Result.GetResult<Prisma.$RegularExpenditurePayload, S>

  type RegularExpenditureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RegularExpenditureFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RegularExpenditureCountAggregateInputType | true
    }

  export interface RegularExpenditureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegularExpenditure'], meta: { name: 'RegularExpenditure' } }
    /**
     * Find zero or one RegularExpenditure that matches the filter.
     * @param {RegularExpenditureFindUniqueArgs} args - Arguments to find a RegularExpenditure
     * @example
     * // Get one RegularExpenditure
     * const regularExpenditure = await prisma.regularExpenditure.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RegularExpenditureFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RegularExpenditureFindUniqueArgs<ExtArgs>>
    ): Prisma__RegularExpenditureClient<$Result.GetResult<Prisma.$RegularExpenditurePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one RegularExpenditure that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RegularExpenditureFindUniqueOrThrowArgs} args - Arguments to find a RegularExpenditure
     * @example
     * // Get one RegularExpenditure
     * const regularExpenditure = await prisma.regularExpenditure.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RegularExpenditureFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RegularExpenditureFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RegularExpenditureClient<$Result.GetResult<Prisma.$RegularExpenditurePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first RegularExpenditure that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularExpenditureFindFirstArgs} args - Arguments to find a RegularExpenditure
     * @example
     * // Get one RegularExpenditure
     * const regularExpenditure = await prisma.regularExpenditure.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RegularExpenditureFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RegularExpenditureFindFirstArgs<ExtArgs>>
    ): Prisma__RegularExpenditureClient<$Result.GetResult<Prisma.$RegularExpenditurePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first RegularExpenditure that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularExpenditureFindFirstOrThrowArgs} args - Arguments to find a RegularExpenditure
     * @example
     * // Get one RegularExpenditure
     * const regularExpenditure = await prisma.regularExpenditure.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RegularExpenditureFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RegularExpenditureFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RegularExpenditureClient<$Result.GetResult<Prisma.$RegularExpenditurePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more RegularExpenditures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularExpenditureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegularExpenditures
     * const regularExpenditures = await prisma.regularExpenditure.findMany()
     * 
     * // Get first 10 RegularExpenditures
     * const regularExpenditures = await prisma.regularExpenditure.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regularExpenditureWithIdOnly = await prisma.regularExpenditure.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RegularExpenditureFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RegularExpenditureFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegularExpenditurePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a RegularExpenditure.
     * @param {RegularExpenditureCreateArgs} args - Arguments to create a RegularExpenditure.
     * @example
     * // Create one RegularExpenditure
     * const RegularExpenditure = await prisma.regularExpenditure.create({
     *   data: {
     *     // ... data to create a RegularExpenditure
     *   }
     * })
     * 
    **/
    create<T extends RegularExpenditureCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RegularExpenditureCreateArgs<ExtArgs>>
    ): Prisma__RegularExpenditureClient<$Result.GetResult<Prisma.$RegularExpenditurePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many RegularExpenditures.
     * @param {RegularExpenditureCreateManyArgs} args - Arguments to create many RegularExpenditures.
     * @example
     * // Create many RegularExpenditures
     * const regularExpenditure = await prisma.regularExpenditure.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends RegularExpenditureCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RegularExpenditureCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RegularExpenditure.
     * @param {RegularExpenditureDeleteArgs} args - Arguments to delete one RegularExpenditure.
     * @example
     * // Delete one RegularExpenditure
     * const RegularExpenditure = await prisma.regularExpenditure.delete({
     *   where: {
     *     // ... filter to delete one RegularExpenditure
     *   }
     * })
     * 
    **/
    delete<T extends RegularExpenditureDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RegularExpenditureDeleteArgs<ExtArgs>>
    ): Prisma__RegularExpenditureClient<$Result.GetResult<Prisma.$RegularExpenditurePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one RegularExpenditure.
     * @param {RegularExpenditureUpdateArgs} args - Arguments to update one RegularExpenditure.
     * @example
     * // Update one RegularExpenditure
     * const regularExpenditure = await prisma.regularExpenditure.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RegularExpenditureUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RegularExpenditureUpdateArgs<ExtArgs>>
    ): Prisma__RegularExpenditureClient<$Result.GetResult<Prisma.$RegularExpenditurePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more RegularExpenditures.
     * @param {RegularExpenditureDeleteManyArgs} args - Arguments to filter RegularExpenditures to delete.
     * @example
     * // Delete a few RegularExpenditures
     * const { count } = await prisma.regularExpenditure.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RegularExpenditureDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RegularExpenditureDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegularExpenditures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularExpenditureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegularExpenditures
     * const regularExpenditure = await prisma.regularExpenditure.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RegularExpenditureUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RegularExpenditureUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RegularExpenditure.
     * @param {RegularExpenditureUpsertArgs} args - Arguments to update or create a RegularExpenditure.
     * @example
     * // Update or create a RegularExpenditure
     * const regularExpenditure = await prisma.regularExpenditure.upsert({
     *   create: {
     *     // ... data to create a RegularExpenditure
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegularExpenditure we want to update
     *   }
     * })
    **/
    upsert<T extends RegularExpenditureUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RegularExpenditureUpsertArgs<ExtArgs>>
    ): Prisma__RegularExpenditureClient<$Result.GetResult<Prisma.$RegularExpenditurePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of RegularExpenditures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularExpenditureCountArgs} args - Arguments to filter RegularExpenditures to count.
     * @example
     * // Count the number of RegularExpenditures
     * const count = await prisma.regularExpenditure.count({
     *   where: {
     *     // ... the filter for the RegularExpenditures we want to count
     *   }
     * })
    **/
    count<T extends RegularExpenditureCountArgs>(
      args?: Subset<T, RegularExpenditureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegularExpenditureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegularExpenditure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularExpenditureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegularExpenditureAggregateArgs>(args: Subset<T, RegularExpenditureAggregateArgs>): Prisma.PrismaPromise<GetRegularExpenditureAggregateType<T>>

    /**
     * Group by RegularExpenditure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularExpenditureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegularExpenditureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegularExpenditureGroupByArgs['orderBy'] }
        : { orderBy?: RegularExpenditureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegularExpenditureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegularExpenditureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegularExpenditure model
   */
  readonly fields: RegularExpenditureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegularExpenditure.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegularExpenditureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    accountBookCategory<T extends AccountBookCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountBookCategoryDefaultArgs<ExtArgs>>): Prisma__AccountBookCategoryClient<$Result.GetResult<Prisma.$AccountBookCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the RegularExpenditure model
   */ 
  interface RegularExpenditureFieldRefs {
    readonly id: FieldRef<"RegularExpenditure", 'Int'>
    readonly amount: FieldRef<"RegularExpenditure", 'Int'>
    readonly regularDate: FieldRef<"RegularExpenditure", 'Int'>
    readonly title: FieldRef<"RegularExpenditure", 'String'>
    readonly isAutoExpenditure: FieldRef<"RegularExpenditure", 'Boolean'>
    readonly userId: FieldRef<"RegularExpenditure", 'Int'>
    readonly accountBookCategoryId: FieldRef<"RegularExpenditure", 'Int'>
    readonly createdAt: FieldRef<"RegularExpenditure", 'DateTime'>
    readonly updatedAt: FieldRef<"RegularExpenditure", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegularExpenditure findUnique
   */
  export type RegularExpenditureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularExpenditure
     */
    select?: RegularExpenditureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularExpenditureInclude<ExtArgs> | null
    /**
     * Filter, which RegularExpenditure to fetch.
     */
    where: RegularExpenditureWhereUniqueInput
  }

  /**
   * RegularExpenditure findUniqueOrThrow
   */
  export type RegularExpenditureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularExpenditure
     */
    select?: RegularExpenditureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularExpenditureInclude<ExtArgs> | null
    /**
     * Filter, which RegularExpenditure to fetch.
     */
    where: RegularExpenditureWhereUniqueInput
  }

  /**
   * RegularExpenditure findFirst
   */
  export type RegularExpenditureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularExpenditure
     */
    select?: RegularExpenditureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularExpenditureInclude<ExtArgs> | null
    /**
     * Filter, which RegularExpenditure to fetch.
     */
    where?: RegularExpenditureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegularExpenditures to fetch.
     */
    orderBy?: RegularExpenditureOrderByWithRelationInput | RegularExpenditureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegularExpenditures.
     */
    cursor?: RegularExpenditureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegularExpenditures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegularExpenditures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegularExpenditures.
     */
    distinct?: RegularExpenditureScalarFieldEnum | RegularExpenditureScalarFieldEnum[]
  }

  /**
   * RegularExpenditure findFirstOrThrow
   */
  export type RegularExpenditureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularExpenditure
     */
    select?: RegularExpenditureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularExpenditureInclude<ExtArgs> | null
    /**
     * Filter, which RegularExpenditure to fetch.
     */
    where?: RegularExpenditureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegularExpenditures to fetch.
     */
    orderBy?: RegularExpenditureOrderByWithRelationInput | RegularExpenditureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegularExpenditures.
     */
    cursor?: RegularExpenditureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegularExpenditures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegularExpenditures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegularExpenditures.
     */
    distinct?: RegularExpenditureScalarFieldEnum | RegularExpenditureScalarFieldEnum[]
  }

  /**
   * RegularExpenditure findMany
   */
  export type RegularExpenditureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularExpenditure
     */
    select?: RegularExpenditureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularExpenditureInclude<ExtArgs> | null
    /**
     * Filter, which RegularExpenditures to fetch.
     */
    where?: RegularExpenditureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegularExpenditures to fetch.
     */
    orderBy?: RegularExpenditureOrderByWithRelationInput | RegularExpenditureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegularExpenditures.
     */
    cursor?: RegularExpenditureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegularExpenditures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegularExpenditures.
     */
    skip?: number
    distinct?: RegularExpenditureScalarFieldEnum | RegularExpenditureScalarFieldEnum[]
  }

  /**
   * RegularExpenditure create
   */
  export type RegularExpenditureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularExpenditure
     */
    select?: RegularExpenditureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularExpenditureInclude<ExtArgs> | null
    /**
     * The data needed to create a RegularExpenditure.
     */
    data: XOR<RegularExpenditureCreateInput, RegularExpenditureUncheckedCreateInput>
  }

  /**
   * RegularExpenditure createMany
   */
  export type RegularExpenditureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegularExpenditures.
     */
    data: RegularExpenditureCreateManyInput | RegularExpenditureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegularExpenditure update
   */
  export type RegularExpenditureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularExpenditure
     */
    select?: RegularExpenditureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularExpenditureInclude<ExtArgs> | null
    /**
     * The data needed to update a RegularExpenditure.
     */
    data: XOR<RegularExpenditureUpdateInput, RegularExpenditureUncheckedUpdateInput>
    /**
     * Choose, which RegularExpenditure to update.
     */
    where: RegularExpenditureWhereUniqueInput
  }

  /**
   * RegularExpenditure updateMany
   */
  export type RegularExpenditureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegularExpenditures.
     */
    data: XOR<RegularExpenditureUpdateManyMutationInput, RegularExpenditureUncheckedUpdateManyInput>
    /**
     * Filter which RegularExpenditures to update
     */
    where?: RegularExpenditureWhereInput
  }

  /**
   * RegularExpenditure upsert
   */
  export type RegularExpenditureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularExpenditure
     */
    select?: RegularExpenditureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularExpenditureInclude<ExtArgs> | null
    /**
     * The filter to search for the RegularExpenditure to update in case it exists.
     */
    where: RegularExpenditureWhereUniqueInput
    /**
     * In case the RegularExpenditure found by the `where` argument doesn't exist, create a new RegularExpenditure with this data.
     */
    create: XOR<RegularExpenditureCreateInput, RegularExpenditureUncheckedCreateInput>
    /**
     * In case the RegularExpenditure was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegularExpenditureUpdateInput, RegularExpenditureUncheckedUpdateInput>
  }

  /**
   * RegularExpenditure delete
   */
  export type RegularExpenditureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularExpenditure
     */
    select?: RegularExpenditureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularExpenditureInclude<ExtArgs> | null
    /**
     * Filter which RegularExpenditure to delete.
     */
    where: RegularExpenditureWhereUniqueInput
  }

  /**
   * RegularExpenditure deleteMany
   */
  export type RegularExpenditureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegularExpenditures to delete
     */
    where?: RegularExpenditureWhereInput
  }

  /**
   * RegularExpenditure without action
   */
  export type RegularExpenditureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularExpenditure
     */
    select?: RegularExpenditureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularExpenditureInclude<ExtArgs> | null
  }


  /**
   * Model Todo
   */

  export type AggregateTodo = {
    _count: TodoCountAggregateOutputType | null
    _avg: TodoAvgAggregateOutputType | null
    _sum: TodoSumAggregateOutputType | null
    _min: TodoMinAggregateOutputType | null
    _max: TodoMaxAggregateOutputType | null
  }

  export type TodoAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    bucketListId: number | null
  }

  export type TodoSumAggregateOutputType = {
    id: number | null
    userId: number | null
    bucketListId: number | null
  }

  export type TodoMinAggregateOutputType = {
    id: number | null
    isComplete: boolean | null
    userId: number | null
    title: string | null
    bucketListId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TodoMaxAggregateOutputType = {
    id: number | null
    isComplete: boolean | null
    userId: number | null
    title: string | null
    bucketListId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TodoCountAggregateOutputType = {
    id: number
    isComplete: number
    userId: number
    title: number
    bucketListId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TodoAvgAggregateInputType = {
    id?: true
    userId?: true
    bucketListId?: true
  }

  export type TodoSumAggregateInputType = {
    id?: true
    userId?: true
    bucketListId?: true
  }

  export type TodoMinAggregateInputType = {
    id?: true
    isComplete?: true
    userId?: true
    title?: true
    bucketListId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TodoMaxAggregateInputType = {
    id?: true
    isComplete?: true
    userId?: true
    title?: true
    bucketListId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TodoCountAggregateInputType = {
    id?: true
    isComplete?: true
    userId?: true
    title?: true
    bucketListId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TodoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Todo to aggregate.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Todos
    **/
    _count?: true | TodoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TodoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TodoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TodoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TodoMaxAggregateInputType
  }

  export type GetTodoAggregateType<T extends TodoAggregateArgs> = {
        [P in keyof T & keyof AggregateTodo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTodo[P]>
      : GetScalarType<T[P], AggregateTodo[P]>
  }




  export type TodoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TodoWhereInput
    orderBy?: TodoOrderByWithAggregationInput | TodoOrderByWithAggregationInput[]
    by: TodoScalarFieldEnum[] | TodoScalarFieldEnum
    having?: TodoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TodoCountAggregateInputType | true
    _avg?: TodoAvgAggregateInputType
    _sum?: TodoSumAggregateInputType
    _min?: TodoMinAggregateInputType
    _max?: TodoMaxAggregateInputType
  }

  export type TodoGroupByOutputType = {
    id: number
    isComplete: boolean
    userId: number
    title: string
    bucketListId: number
    createdAt: Date
    updatedAt: Date
    _count: TodoCountAggregateOutputType | null
    _avg: TodoAvgAggregateOutputType | null
    _sum: TodoSumAggregateOutputType | null
    _min: TodoMinAggregateOutputType | null
    _max: TodoMaxAggregateOutputType | null
  }

  type GetTodoGroupByPayload<T extends TodoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TodoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TodoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TodoGroupByOutputType[P]>
            : GetScalarType<T[P], TodoGroupByOutputType[P]>
        }
      >
    >


  export type TodoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isComplete?: boolean
    userId?: boolean
    title?: boolean
    bucketListId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bucketList?: boolean | BucketListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["todo"]>

  export type TodoSelectScalar = {
    id?: boolean
    isComplete?: boolean
    userId?: boolean
    title?: boolean
    bucketListId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type TodoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bucketList?: boolean | BucketListDefaultArgs<ExtArgs>
  }


  export type $TodoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Todo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      bucketList: Prisma.$BucketListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      isComplete: boolean
      userId: number
      title: string
      bucketListId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["todo"]>
    composites: {}
  }


  type TodoGetPayload<S extends boolean | null | undefined | TodoDefaultArgs> = $Result.GetResult<Prisma.$TodoPayload, S>

  type TodoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TodoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TodoCountAggregateInputType | true
    }

  export interface TodoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Todo'], meta: { name: 'Todo' } }
    /**
     * Find zero or one Todo that matches the filter.
     * @param {TodoFindUniqueArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TodoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TodoFindUniqueArgs<ExtArgs>>
    ): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Todo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TodoFindUniqueOrThrowArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TodoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TodoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Todo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindFirstArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TodoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TodoFindFirstArgs<ExtArgs>>
    ): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Todo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindFirstOrThrowArgs} args - Arguments to find a Todo
     * @example
     * // Get one Todo
     * const todo = await prisma.todo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TodoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TodoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Todos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Todos
     * const todos = await prisma.todo.findMany()
     * 
     * // Get first 10 Todos
     * const todos = await prisma.todo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const todoWithIdOnly = await prisma.todo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TodoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TodoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Todo.
     * @param {TodoCreateArgs} args - Arguments to create a Todo.
     * @example
     * // Create one Todo
     * const Todo = await prisma.todo.create({
     *   data: {
     *     // ... data to create a Todo
     *   }
     * })
     * 
    **/
    create<T extends TodoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TodoCreateArgs<ExtArgs>>
    ): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Todos.
     * @param {TodoCreateManyArgs} args - Arguments to create many Todos.
     * @example
     * // Create many Todos
     * const todo = await prisma.todo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TodoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TodoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Todo.
     * @param {TodoDeleteArgs} args - Arguments to delete one Todo.
     * @example
     * // Delete one Todo
     * const Todo = await prisma.todo.delete({
     *   where: {
     *     // ... filter to delete one Todo
     *   }
     * })
     * 
    **/
    delete<T extends TodoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TodoDeleteArgs<ExtArgs>>
    ): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Todo.
     * @param {TodoUpdateArgs} args - Arguments to update one Todo.
     * @example
     * // Update one Todo
     * const todo = await prisma.todo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TodoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TodoUpdateArgs<ExtArgs>>
    ): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Todos.
     * @param {TodoDeleteManyArgs} args - Arguments to filter Todos to delete.
     * @example
     * // Delete a few Todos
     * const { count } = await prisma.todo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TodoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TodoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Todos
     * const todo = await prisma.todo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TodoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TodoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Todo.
     * @param {TodoUpsertArgs} args - Arguments to update or create a Todo.
     * @example
     * // Update or create a Todo
     * const todo = await prisma.todo.upsert({
     *   create: {
     *     // ... data to create a Todo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Todo we want to update
     *   }
     * })
    **/
    upsert<T extends TodoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TodoUpsertArgs<ExtArgs>>
    ): Prisma__TodoClient<$Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Todos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoCountArgs} args - Arguments to filter Todos to count.
     * @example
     * // Count the number of Todos
     * const count = await prisma.todo.count({
     *   where: {
     *     // ... the filter for the Todos we want to count
     *   }
     * })
    **/
    count<T extends TodoCountArgs>(
      args?: Subset<T, TodoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TodoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Todo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TodoAggregateArgs>(args: Subset<T, TodoAggregateArgs>): Prisma.PrismaPromise<GetTodoAggregateType<T>>

    /**
     * Group by Todo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TodoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TodoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TodoGroupByArgs['orderBy'] }
        : { orderBy?: TodoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TodoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Todo model
   */
  readonly fields: TodoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Todo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TodoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    bucketList<T extends BucketListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BucketListDefaultArgs<ExtArgs>>): Prisma__BucketListClient<$Result.GetResult<Prisma.$BucketListPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Todo model
   */ 
  interface TodoFieldRefs {
    readonly id: FieldRef<"Todo", 'Int'>
    readonly isComplete: FieldRef<"Todo", 'Boolean'>
    readonly userId: FieldRef<"Todo", 'Int'>
    readonly title: FieldRef<"Todo", 'String'>
    readonly bucketListId: FieldRef<"Todo", 'Int'>
    readonly createdAt: FieldRef<"Todo", 'DateTime'>
    readonly updatedAt: FieldRef<"Todo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Todo findUnique
   */
  export type TodoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo findUniqueOrThrow
   */
  export type TodoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo findFirst
   */
  export type TodoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todos.
     */
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Todo findFirstOrThrow
   */
  export type TodoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todo to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Todos.
     */
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Todo findMany
   */
  export type TodoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter, which Todos to fetch.
     */
    where?: TodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Todos to fetch.
     */
    orderBy?: TodoOrderByWithRelationInput | TodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Todos.
     */
    cursor?: TodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Todos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Todos.
     */
    skip?: number
    distinct?: TodoScalarFieldEnum | TodoScalarFieldEnum[]
  }

  /**
   * Todo create
   */
  export type TodoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * The data needed to create a Todo.
     */
    data: XOR<TodoCreateInput, TodoUncheckedCreateInput>
  }

  /**
   * Todo createMany
   */
  export type TodoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Todos.
     */
    data: TodoCreateManyInput | TodoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Todo update
   */
  export type TodoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * The data needed to update a Todo.
     */
    data: XOR<TodoUpdateInput, TodoUncheckedUpdateInput>
    /**
     * Choose, which Todo to update.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo updateMany
   */
  export type TodoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Todos.
     */
    data: XOR<TodoUpdateManyMutationInput, TodoUncheckedUpdateManyInput>
    /**
     * Filter which Todos to update
     */
    where?: TodoWhereInput
  }

  /**
   * Todo upsert
   */
  export type TodoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * The filter to search for the Todo to update in case it exists.
     */
    where: TodoWhereUniqueInput
    /**
     * In case the Todo found by the `where` argument doesn't exist, create a new Todo with this data.
     */
    create: XOR<TodoCreateInput, TodoUncheckedCreateInput>
    /**
     * In case the Todo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TodoUpdateInput, TodoUncheckedUpdateInput>
  }

  /**
   * Todo delete
   */
  export type TodoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
    /**
     * Filter which Todo to delete.
     */
    where: TodoWhereUniqueInput
  }

  /**
   * Todo deleteMany
   */
  export type TodoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Todos to delete
     */
    where?: TodoWhereInput
  }

  /**
   * Todo without action
   */
  export type TodoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Todo
     */
    select?: TodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TodoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    loginType: 'loginType',
    socialId: 'socialId',
    profileImg: 'profileImg',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserShareCodeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    shareCode: 'shareCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserShareCodeScalarFieldEnum = (typeof UserShareCodeScalarFieldEnum)[keyof typeof UserShareCodeScalarFieldEnum]


  export const SavingTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SavingTypeScalarFieldEnum = (typeof SavingTypeScalarFieldEnum)[keyof typeof SavingTypeScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    taxType: 'taxType',
    regularTransferDate: 'regularTransferDate',
    rate: 'rate',
    title: 'title',
    amount: 'amount',
    currentAmount: 'currentAmount',
    userId: 'userId',
    isExpiration: 'isExpiration',
    startDate: 'startDate',
    endDate: 'endDate',
    savingTypeId: 'savingTypeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const AccountBookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    amount: 'amount',
    memo: 'memo',
    type: 'type',
    isRegularExpenditure: 'isRegularExpenditure',
    registerDateTime: 'registerDateTime',
    userId: 'userId',
    accountBookCategoryId: 'accountBookCategoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountBookScalarFieldEnum = (typeof AccountBookScalarFieldEnum)[keyof typeof AccountBookScalarFieldEnum]


  export const AccountBookCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    delYn: 'delYn',
    type: 'type',
    useStatistic: 'useStatistic',
    userId: 'userId',
    accountBookCategoryImageId: 'accountBookCategoryImageId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountBookCategoryScalarFieldEnum = (typeof AccountBookCategoryScalarFieldEnum)[keyof typeof AccountBookCategoryScalarFieldEnum]


  export const DepositScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    prevTotalAmount: 'prevTotalAmount',
    userId: 'userId',
    accountId: 'accountId',
    depositDate: 'depositDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepositScalarFieldEnum = (typeof DepositScalarFieldEnum)[keyof typeof DepositScalarFieldEnum]


  export const AccountBookCategoryImageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imageUrl: 'imageUrl',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountBookCategoryImageScalarFieldEnum = (typeof AccountBookCategoryImageScalarFieldEnum)[keyof typeof AccountBookCategoryImageScalarFieldEnum]


  export const BucketListScalarFieldEnum: {
    isComplete: 'isComplete',
    id: 'id',
    title: 'title',
    description: 'description',
    userId: 'userId',
    completeDate: 'completeDate',
    thumbImageUrl: 'thumbImageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BucketListScalarFieldEnum = (typeof BucketListScalarFieldEnum)[keyof typeof BucketListScalarFieldEnum]


  export const RegularExpenditureScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    regularDate: 'regularDate',
    title: 'title',
    isAutoExpenditure: 'isAutoExpenditure',
    userId: 'userId',
    accountBookCategoryId: 'accountBookCategoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RegularExpenditureScalarFieldEnum = (typeof RegularExpenditureScalarFieldEnum)[keyof typeof RegularExpenditureScalarFieldEnum]


  export const TodoScalarFieldEnum: {
    id: 'id',
    isComplete: 'isComplete',
    userId: 'userId',
    title: 'title',
    bucketListId: 'bucketListId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TodoScalarFieldEnum = (typeof TodoScalarFieldEnum)[keyof typeof TodoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AccountBookCategoryType'
   */
  export type EnumAccountBookCategoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountBookCategoryType'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    loginType?: StringFilter<"User"> | string
    socialId?: StringFilter<"User"> | string
    profileImg?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    bucketLists?: BucketListListRelationFilter
    deposits?: DepositListRelationFilter
    todos?: TodoListRelationFilter
    accountBooks?: AccountBookListRelationFilter
    accountBookCategories?: AccountBookCategoryListRelationFilter
    accountBookCategoryImages?: AccountBookCategoryImageListRelationFilter
    regularExpenditures?: RegularExpenditureListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    loginType?: SortOrder
    socialId?: SortOrder
    profileImg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    bucketLists?: BucketListOrderByRelationAggregateInput
    deposits?: DepositOrderByRelationAggregateInput
    todos?: TodoOrderByRelationAggregateInput
    accountBooks?: AccountBookOrderByRelationAggregateInput
    accountBookCategories?: AccountBookCategoryOrderByRelationAggregateInput
    accountBookCategoryImages?: AccountBookCategoryImageOrderByRelationAggregateInput
    regularExpenditures?: RegularExpenditureOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    loginType?: StringFilter<"User"> | string
    socialId?: StringFilter<"User"> | string
    profileImg?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    bucketLists?: BucketListListRelationFilter
    deposits?: DepositListRelationFilter
    todos?: TodoListRelationFilter
    accountBooks?: AccountBookListRelationFilter
    accountBookCategories?: AccountBookCategoryListRelationFilter
    accountBookCategoryImages?: AccountBookCategoryImageListRelationFilter
    regularExpenditures?: RegularExpenditureListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    loginType?: SortOrder
    socialId?: SortOrder
    profileImg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    loginType?: StringWithAggregatesFilter<"User"> | string
    socialId?: StringWithAggregatesFilter<"User"> | string
    profileImg?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserShareCodeWhereInput = {
    AND?: UserShareCodeWhereInput | UserShareCodeWhereInput[]
    OR?: UserShareCodeWhereInput[]
    NOT?: UserShareCodeWhereInput | UserShareCodeWhereInput[]
    id?: IntFilter<"UserShareCode"> | number
    userId?: IntFilter<"UserShareCode"> | number
    shareCode?: StringFilter<"UserShareCode"> | string
    createdAt?: DateTimeFilter<"UserShareCode"> | Date | string
    updatedAt?: DateTimeFilter<"UserShareCode"> | Date | string
  }

  export type UserShareCodeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    shareCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserShareCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserShareCodeWhereInput | UserShareCodeWhereInput[]
    OR?: UserShareCodeWhereInput[]
    NOT?: UserShareCodeWhereInput | UserShareCodeWhereInput[]
    userId?: IntFilter<"UserShareCode"> | number
    shareCode?: StringFilter<"UserShareCode"> | string
    createdAt?: DateTimeFilter<"UserShareCode"> | Date | string
    updatedAt?: DateTimeFilter<"UserShareCode"> | Date | string
  }, "id">

  export type UserShareCodeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    shareCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserShareCodeCountOrderByAggregateInput
    _avg?: UserShareCodeAvgOrderByAggregateInput
    _max?: UserShareCodeMaxOrderByAggregateInput
    _min?: UserShareCodeMinOrderByAggregateInput
    _sum?: UserShareCodeSumOrderByAggregateInput
  }

  export type UserShareCodeScalarWhereWithAggregatesInput = {
    AND?: UserShareCodeScalarWhereWithAggregatesInput | UserShareCodeScalarWhereWithAggregatesInput[]
    OR?: UserShareCodeScalarWhereWithAggregatesInput[]
    NOT?: UserShareCodeScalarWhereWithAggregatesInput | UserShareCodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserShareCode"> | number
    userId?: IntWithAggregatesFilter<"UserShareCode"> | number
    shareCode?: StringWithAggregatesFilter<"UserShareCode"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserShareCode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserShareCode"> | Date | string
  }

  export type SavingTypeWhereInput = {
    AND?: SavingTypeWhereInput | SavingTypeWhereInput[]
    OR?: SavingTypeWhereInput[]
    NOT?: SavingTypeWhereInput | SavingTypeWhereInput[]
    id?: IntFilter<"SavingType"> | number
    name?: StringFilter<"SavingType"> | string
    type?: StringFilter<"SavingType"> | string
    createdAt?: DateTimeFilter<"SavingType"> | Date | string
    updatedAt?: DateTimeFilter<"SavingType"> | Date | string
    accounts?: AccountListRelationFilter
  }

  export type SavingTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
  }

  export type SavingTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SavingTypeWhereInput | SavingTypeWhereInput[]
    OR?: SavingTypeWhereInput[]
    NOT?: SavingTypeWhereInput | SavingTypeWhereInput[]
    name?: StringFilter<"SavingType"> | string
    type?: StringFilter<"SavingType"> | string
    createdAt?: DateTimeFilter<"SavingType"> | Date | string
    updatedAt?: DateTimeFilter<"SavingType"> | Date | string
    accounts?: AccountListRelationFilter
  }, "id">

  export type SavingTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SavingTypeCountOrderByAggregateInput
    _avg?: SavingTypeAvgOrderByAggregateInput
    _max?: SavingTypeMaxOrderByAggregateInput
    _min?: SavingTypeMinOrderByAggregateInput
    _sum?: SavingTypeSumOrderByAggregateInput
  }

  export type SavingTypeScalarWhereWithAggregatesInput = {
    AND?: SavingTypeScalarWhereWithAggregatesInput | SavingTypeScalarWhereWithAggregatesInput[]
    OR?: SavingTypeScalarWhereWithAggregatesInput[]
    NOT?: SavingTypeScalarWhereWithAggregatesInput | SavingTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SavingType"> | number
    name?: StringWithAggregatesFilter<"SavingType"> | string
    type?: StringWithAggregatesFilter<"SavingType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SavingType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SavingType"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: IntFilter<"Account"> | number
    taxType?: StringFilter<"Account"> | string
    regularTransferDate?: IntFilter<"Account"> | number
    rate?: FloatFilter<"Account"> | number
    title?: StringFilter<"Account"> | string
    amount?: IntFilter<"Account"> | number
    currentAmount?: IntFilter<"Account"> | number
    userId?: IntFilter<"Account"> | number
    isExpiration?: BoolFilter<"Account"> | boolean
    startDate?: DateTimeFilter<"Account"> | Date | string
    endDate?: DateTimeFilter<"Account"> | Date | string
    savingTypeId?: IntFilter<"Account"> | number
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    savingType?: XOR<SavingTypeRelationFilter, SavingTypeWhereInput>
    deposits?: DepositListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    taxType?: SortOrder
    regularTransferDate?: SortOrder
    rate?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    currentAmount?: SortOrder
    userId?: SortOrder
    isExpiration?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    savingTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    savingType?: SavingTypeOrderByWithRelationInput
    deposits?: DepositOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    taxType?: StringFilter<"Account"> | string
    regularTransferDate?: IntFilter<"Account"> | number
    rate?: FloatFilter<"Account"> | number
    title?: StringFilter<"Account"> | string
    amount?: IntFilter<"Account"> | number
    currentAmount?: IntFilter<"Account"> | number
    userId?: IntFilter<"Account"> | number
    isExpiration?: BoolFilter<"Account"> | boolean
    startDate?: DateTimeFilter<"Account"> | Date | string
    endDate?: DateTimeFilter<"Account"> | Date | string
    savingTypeId?: IntFilter<"Account"> | number
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    savingType?: XOR<SavingTypeRelationFilter, SavingTypeWhereInput>
    deposits?: DepositListRelationFilter
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    taxType?: SortOrder
    regularTransferDate?: SortOrder
    rate?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    currentAmount?: SortOrder
    userId?: SortOrder
    isExpiration?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    savingTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Account"> | number
    taxType?: StringWithAggregatesFilter<"Account"> | string
    regularTransferDate?: IntWithAggregatesFilter<"Account"> | number
    rate?: FloatWithAggregatesFilter<"Account"> | number
    title?: StringWithAggregatesFilter<"Account"> | string
    amount?: IntWithAggregatesFilter<"Account"> | number
    currentAmount?: IntWithAggregatesFilter<"Account"> | number
    userId?: IntWithAggregatesFilter<"Account"> | number
    isExpiration?: BoolWithAggregatesFilter<"Account"> | boolean
    startDate?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    savingTypeId?: IntWithAggregatesFilter<"Account"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type AccountBookWhereInput = {
    AND?: AccountBookWhereInput | AccountBookWhereInput[]
    OR?: AccountBookWhereInput[]
    NOT?: AccountBookWhereInput | AccountBookWhereInput[]
    id?: IntFilter<"AccountBook"> | number
    title?: StringFilter<"AccountBook"> | string
    amount?: IntFilter<"AccountBook"> | number
    memo?: StringFilter<"AccountBook"> | string
    type?: EnumAccountBookCategoryTypeFilter<"AccountBook"> | $Enums.AccountBookCategoryType
    isRegularExpenditure?: BoolFilter<"AccountBook"> | boolean
    registerDateTime?: DateTimeFilter<"AccountBook"> | Date | string
    userId?: IntFilter<"AccountBook"> | number
    accountBookCategoryId?: IntFilter<"AccountBook"> | number
    createdAt?: DateTimeFilter<"AccountBook"> | Date | string
    updatedAt?: DateTimeFilter<"AccountBook"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    accountBookCategory?: XOR<AccountBookCategoryRelationFilter, AccountBookCategoryWhereInput>
  }

  export type AccountBookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    memo?: SortOrder
    type?: SortOrder
    isRegularExpenditure?: SortOrder
    registerDateTime?: SortOrder
    userId?: SortOrder
    accountBookCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    accountBookCategory?: AccountBookCategoryOrderByWithRelationInput
  }

  export type AccountBookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AccountBookWhereInput | AccountBookWhereInput[]
    OR?: AccountBookWhereInput[]
    NOT?: AccountBookWhereInput | AccountBookWhereInput[]
    title?: StringFilter<"AccountBook"> | string
    amount?: IntFilter<"AccountBook"> | number
    memo?: StringFilter<"AccountBook"> | string
    type?: EnumAccountBookCategoryTypeFilter<"AccountBook"> | $Enums.AccountBookCategoryType
    isRegularExpenditure?: BoolFilter<"AccountBook"> | boolean
    registerDateTime?: DateTimeFilter<"AccountBook"> | Date | string
    userId?: IntFilter<"AccountBook"> | number
    accountBookCategoryId?: IntFilter<"AccountBook"> | number
    createdAt?: DateTimeFilter<"AccountBook"> | Date | string
    updatedAt?: DateTimeFilter<"AccountBook"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    accountBookCategory?: XOR<AccountBookCategoryRelationFilter, AccountBookCategoryWhereInput>
  }, "id">

  export type AccountBookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    memo?: SortOrder
    type?: SortOrder
    isRegularExpenditure?: SortOrder
    registerDateTime?: SortOrder
    userId?: SortOrder
    accountBookCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountBookCountOrderByAggregateInput
    _avg?: AccountBookAvgOrderByAggregateInput
    _max?: AccountBookMaxOrderByAggregateInput
    _min?: AccountBookMinOrderByAggregateInput
    _sum?: AccountBookSumOrderByAggregateInput
  }

  export type AccountBookScalarWhereWithAggregatesInput = {
    AND?: AccountBookScalarWhereWithAggregatesInput | AccountBookScalarWhereWithAggregatesInput[]
    OR?: AccountBookScalarWhereWithAggregatesInput[]
    NOT?: AccountBookScalarWhereWithAggregatesInput | AccountBookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AccountBook"> | number
    title?: StringWithAggregatesFilter<"AccountBook"> | string
    amount?: IntWithAggregatesFilter<"AccountBook"> | number
    memo?: StringWithAggregatesFilter<"AccountBook"> | string
    type?: EnumAccountBookCategoryTypeWithAggregatesFilter<"AccountBook"> | $Enums.AccountBookCategoryType
    isRegularExpenditure?: BoolWithAggregatesFilter<"AccountBook"> | boolean
    registerDateTime?: DateTimeWithAggregatesFilter<"AccountBook"> | Date | string
    userId?: IntWithAggregatesFilter<"AccountBook"> | number
    accountBookCategoryId?: IntWithAggregatesFilter<"AccountBook"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AccountBook"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccountBook"> | Date | string
  }

  export type AccountBookCategoryWhereInput = {
    AND?: AccountBookCategoryWhereInput | AccountBookCategoryWhereInput[]
    OR?: AccountBookCategoryWhereInput[]
    NOT?: AccountBookCategoryWhereInput | AccountBookCategoryWhereInput[]
    id?: IntFilter<"AccountBookCategory"> | number
    name?: StringFilter<"AccountBookCategory"> | string
    delYn?: BoolFilter<"AccountBookCategory"> | boolean
    type?: EnumAccountBookCategoryTypeFilter<"AccountBookCategory"> | $Enums.AccountBookCategoryType
    useStatistic?: BoolFilter<"AccountBookCategory"> | boolean
    userId?: IntFilter<"AccountBookCategory"> | number
    accountBookCategoryImageId?: IntFilter<"AccountBookCategory"> | number
    createdAt?: DateTimeFilter<"AccountBookCategory"> | Date | string
    updatedAt?: DateTimeFilter<"AccountBookCategory"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    accountBooks?: AccountBookListRelationFilter
    RegularExpenditures?: RegularExpenditureListRelationFilter
    accountBookCategoryImage?: XOR<AccountBookCategoryImageRelationFilter, AccountBookCategoryImageWhereInput>
  }

  export type AccountBookCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    delYn?: SortOrder
    type?: SortOrder
    useStatistic?: SortOrder
    userId?: SortOrder
    accountBookCategoryImageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    accountBooks?: AccountBookOrderByRelationAggregateInput
    RegularExpenditures?: RegularExpenditureOrderByRelationAggregateInput
    accountBookCategoryImage?: AccountBookCategoryImageOrderByWithRelationInput
  }

  export type AccountBookCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AccountBookCategoryWhereInput | AccountBookCategoryWhereInput[]
    OR?: AccountBookCategoryWhereInput[]
    NOT?: AccountBookCategoryWhereInput | AccountBookCategoryWhereInput[]
    name?: StringFilter<"AccountBookCategory"> | string
    delYn?: BoolFilter<"AccountBookCategory"> | boolean
    type?: EnumAccountBookCategoryTypeFilter<"AccountBookCategory"> | $Enums.AccountBookCategoryType
    useStatistic?: BoolFilter<"AccountBookCategory"> | boolean
    userId?: IntFilter<"AccountBookCategory"> | number
    accountBookCategoryImageId?: IntFilter<"AccountBookCategory"> | number
    createdAt?: DateTimeFilter<"AccountBookCategory"> | Date | string
    updatedAt?: DateTimeFilter<"AccountBookCategory"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    accountBooks?: AccountBookListRelationFilter
    RegularExpenditures?: RegularExpenditureListRelationFilter
    accountBookCategoryImage?: XOR<AccountBookCategoryImageRelationFilter, AccountBookCategoryImageWhereInput>
  }, "id">

  export type AccountBookCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    delYn?: SortOrder
    type?: SortOrder
    useStatistic?: SortOrder
    userId?: SortOrder
    accountBookCategoryImageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountBookCategoryCountOrderByAggregateInput
    _avg?: AccountBookCategoryAvgOrderByAggregateInput
    _max?: AccountBookCategoryMaxOrderByAggregateInput
    _min?: AccountBookCategoryMinOrderByAggregateInput
    _sum?: AccountBookCategorySumOrderByAggregateInput
  }

  export type AccountBookCategoryScalarWhereWithAggregatesInput = {
    AND?: AccountBookCategoryScalarWhereWithAggregatesInput | AccountBookCategoryScalarWhereWithAggregatesInput[]
    OR?: AccountBookCategoryScalarWhereWithAggregatesInput[]
    NOT?: AccountBookCategoryScalarWhereWithAggregatesInput | AccountBookCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AccountBookCategory"> | number
    name?: StringWithAggregatesFilter<"AccountBookCategory"> | string
    delYn?: BoolWithAggregatesFilter<"AccountBookCategory"> | boolean
    type?: EnumAccountBookCategoryTypeWithAggregatesFilter<"AccountBookCategory"> | $Enums.AccountBookCategoryType
    useStatistic?: BoolWithAggregatesFilter<"AccountBookCategory"> | boolean
    userId?: IntWithAggregatesFilter<"AccountBookCategory"> | number
    accountBookCategoryImageId?: IntWithAggregatesFilter<"AccountBookCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AccountBookCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccountBookCategory"> | Date | string
  }

  export type DepositWhereInput = {
    AND?: DepositWhereInput | DepositWhereInput[]
    OR?: DepositWhereInput[]
    NOT?: DepositWhereInput | DepositWhereInput[]
    id?: IntFilter<"Deposit"> | number
    amount?: IntFilter<"Deposit"> | number
    prevTotalAmount?: IntFilter<"Deposit"> | number
    userId?: IntFilter<"Deposit"> | number
    accountId?: IntFilter<"Deposit"> | number
    depositDate?: DateTimeFilter<"Deposit"> | Date | string
    createdAt?: DateTimeFilter<"Deposit"> | Date | string
    updatedAt?: DateTimeFilter<"Deposit"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    account?: XOR<AccountRelationFilter, AccountWhereInput>
  }

  export type DepositOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    prevTotalAmount?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    depositDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    account?: AccountOrderByWithRelationInput
  }

  export type DepositWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DepositWhereInput | DepositWhereInput[]
    OR?: DepositWhereInput[]
    NOT?: DepositWhereInput | DepositWhereInput[]
    amount?: IntFilter<"Deposit"> | number
    prevTotalAmount?: IntFilter<"Deposit"> | number
    userId?: IntFilter<"Deposit"> | number
    accountId?: IntFilter<"Deposit"> | number
    depositDate?: DateTimeFilter<"Deposit"> | Date | string
    createdAt?: DateTimeFilter<"Deposit"> | Date | string
    updatedAt?: DateTimeFilter<"Deposit"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    account?: XOR<AccountRelationFilter, AccountWhereInput>
  }, "id">

  export type DepositOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    prevTotalAmount?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    depositDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepositCountOrderByAggregateInput
    _avg?: DepositAvgOrderByAggregateInput
    _max?: DepositMaxOrderByAggregateInput
    _min?: DepositMinOrderByAggregateInput
    _sum?: DepositSumOrderByAggregateInput
  }

  export type DepositScalarWhereWithAggregatesInput = {
    AND?: DepositScalarWhereWithAggregatesInput | DepositScalarWhereWithAggregatesInput[]
    OR?: DepositScalarWhereWithAggregatesInput[]
    NOT?: DepositScalarWhereWithAggregatesInput | DepositScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Deposit"> | number
    amount?: IntWithAggregatesFilter<"Deposit"> | number
    prevTotalAmount?: IntWithAggregatesFilter<"Deposit"> | number
    userId?: IntWithAggregatesFilter<"Deposit"> | number
    accountId?: IntWithAggregatesFilter<"Deposit"> | number
    depositDate?: DateTimeWithAggregatesFilter<"Deposit"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Deposit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Deposit"> | Date | string
  }

  export type AccountBookCategoryImageWhereInput = {
    AND?: AccountBookCategoryImageWhereInput | AccountBookCategoryImageWhereInput[]
    OR?: AccountBookCategoryImageWhereInput[]
    NOT?: AccountBookCategoryImageWhereInput | AccountBookCategoryImageWhereInput[]
    id?: IntFilter<"AccountBookCategoryImage"> | number
    name?: StringFilter<"AccountBookCategoryImage"> | string
    imageUrl?: StringFilter<"AccountBookCategoryImage"> | string
    userId?: IntFilter<"AccountBookCategoryImage"> | number
    createdAt?: DateTimeFilter<"AccountBookCategoryImage"> | Date | string
    updatedAt?: DateTimeFilter<"AccountBookCategoryImage"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    accountBookCategorys?: AccountBookCategoryListRelationFilter
  }

  export type AccountBookCategoryImageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    accountBookCategorys?: AccountBookCategoryOrderByRelationAggregateInput
  }

  export type AccountBookCategoryImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AccountBookCategoryImageWhereInput | AccountBookCategoryImageWhereInput[]
    OR?: AccountBookCategoryImageWhereInput[]
    NOT?: AccountBookCategoryImageWhereInput | AccountBookCategoryImageWhereInput[]
    name?: StringFilter<"AccountBookCategoryImage"> | string
    imageUrl?: StringFilter<"AccountBookCategoryImage"> | string
    userId?: IntFilter<"AccountBookCategoryImage"> | number
    createdAt?: DateTimeFilter<"AccountBookCategoryImage"> | Date | string
    updatedAt?: DateTimeFilter<"AccountBookCategoryImage"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    accountBookCategorys?: AccountBookCategoryListRelationFilter
  }, "id">

  export type AccountBookCategoryImageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountBookCategoryImageCountOrderByAggregateInput
    _avg?: AccountBookCategoryImageAvgOrderByAggregateInput
    _max?: AccountBookCategoryImageMaxOrderByAggregateInput
    _min?: AccountBookCategoryImageMinOrderByAggregateInput
    _sum?: AccountBookCategoryImageSumOrderByAggregateInput
  }

  export type AccountBookCategoryImageScalarWhereWithAggregatesInput = {
    AND?: AccountBookCategoryImageScalarWhereWithAggregatesInput | AccountBookCategoryImageScalarWhereWithAggregatesInput[]
    OR?: AccountBookCategoryImageScalarWhereWithAggregatesInput[]
    NOT?: AccountBookCategoryImageScalarWhereWithAggregatesInput | AccountBookCategoryImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AccountBookCategoryImage"> | number
    name?: StringWithAggregatesFilter<"AccountBookCategoryImage"> | string
    imageUrl?: StringWithAggregatesFilter<"AccountBookCategoryImage"> | string
    userId?: IntWithAggregatesFilter<"AccountBookCategoryImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AccountBookCategoryImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccountBookCategoryImage"> | Date | string
  }

  export type BucketListWhereInput = {
    AND?: BucketListWhereInput | BucketListWhereInput[]
    OR?: BucketListWhereInput[]
    NOT?: BucketListWhereInput | BucketListWhereInput[]
    isComplete?: BoolFilter<"BucketList"> | boolean
    id?: IntFilter<"BucketList"> | number
    title?: StringFilter<"BucketList"> | string
    description?: StringFilter<"BucketList"> | string
    userId?: IntFilter<"BucketList"> | number
    completeDate?: DateTimeFilter<"BucketList"> | Date | string
    thumbImageUrl?: StringFilter<"BucketList"> | string
    createdAt?: DateTimeFilter<"BucketList"> | Date | string
    updatedAt?: DateTimeFilter<"BucketList"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    todoList?: TodoListRelationFilter
  }

  export type BucketListOrderByWithRelationInput = {
    isComplete?: SortOrder
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    completeDate?: SortOrder
    thumbImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    todoList?: TodoOrderByRelationAggregateInput
  }

  export type BucketListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BucketListWhereInput | BucketListWhereInput[]
    OR?: BucketListWhereInput[]
    NOT?: BucketListWhereInput | BucketListWhereInput[]
    isComplete?: BoolFilter<"BucketList"> | boolean
    title?: StringFilter<"BucketList"> | string
    description?: StringFilter<"BucketList"> | string
    userId?: IntFilter<"BucketList"> | number
    completeDate?: DateTimeFilter<"BucketList"> | Date | string
    thumbImageUrl?: StringFilter<"BucketList"> | string
    createdAt?: DateTimeFilter<"BucketList"> | Date | string
    updatedAt?: DateTimeFilter<"BucketList"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    todoList?: TodoListRelationFilter
  }, "id">

  export type BucketListOrderByWithAggregationInput = {
    isComplete?: SortOrder
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    completeDate?: SortOrder
    thumbImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BucketListCountOrderByAggregateInput
    _avg?: BucketListAvgOrderByAggregateInput
    _max?: BucketListMaxOrderByAggregateInput
    _min?: BucketListMinOrderByAggregateInput
    _sum?: BucketListSumOrderByAggregateInput
  }

  export type BucketListScalarWhereWithAggregatesInput = {
    AND?: BucketListScalarWhereWithAggregatesInput | BucketListScalarWhereWithAggregatesInput[]
    OR?: BucketListScalarWhereWithAggregatesInput[]
    NOT?: BucketListScalarWhereWithAggregatesInput | BucketListScalarWhereWithAggregatesInput[]
    isComplete?: BoolWithAggregatesFilter<"BucketList"> | boolean
    id?: IntWithAggregatesFilter<"BucketList"> | number
    title?: StringWithAggregatesFilter<"BucketList"> | string
    description?: StringWithAggregatesFilter<"BucketList"> | string
    userId?: IntWithAggregatesFilter<"BucketList"> | number
    completeDate?: DateTimeWithAggregatesFilter<"BucketList"> | Date | string
    thumbImageUrl?: StringWithAggregatesFilter<"BucketList"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BucketList"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BucketList"> | Date | string
  }

  export type RegularExpenditureWhereInput = {
    AND?: RegularExpenditureWhereInput | RegularExpenditureWhereInput[]
    OR?: RegularExpenditureWhereInput[]
    NOT?: RegularExpenditureWhereInput | RegularExpenditureWhereInput[]
    id?: IntFilter<"RegularExpenditure"> | number
    amount?: IntFilter<"RegularExpenditure"> | number
    regularDate?: IntFilter<"RegularExpenditure"> | number
    title?: StringFilter<"RegularExpenditure"> | string
    isAutoExpenditure?: BoolFilter<"RegularExpenditure"> | boolean
    userId?: IntFilter<"RegularExpenditure"> | number
    accountBookCategoryId?: IntFilter<"RegularExpenditure"> | number
    createdAt?: DateTimeFilter<"RegularExpenditure"> | Date | string
    updatedAt?: DateTimeFilter<"RegularExpenditure"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    accountBookCategory?: XOR<AccountBookCategoryRelationFilter, AccountBookCategoryWhereInput>
  }

  export type RegularExpenditureOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    regularDate?: SortOrder
    title?: SortOrder
    isAutoExpenditure?: SortOrder
    userId?: SortOrder
    accountBookCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    accountBookCategory?: AccountBookCategoryOrderByWithRelationInput
  }

  export type RegularExpenditureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RegularExpenditureWhereInput | RegularExpenditureWhereInput[]
    OR?: RegularExpenditureWhereInput[]
    NOT?: RegularExpenditureWhereInput | RegularExpenditureWhereInput[]
    amount?: IntFilter<"RegularExpenditure"> | number
    regularDate?: IntFilter<"RegularExpenditure"> | number
    title?: StringFilter<"RegularExpenditure"> | string
    isAutoExpenditure?: BoolFilter<"RegularExpenditure"> | boolean
    userId?: IntFilter<"RegularExpenditure"> | number
    accountBookCategoryId?: IntFilter<"RegularExpenditure"> | number
    createdAt?: DateTimeFilter<"RegularExpenditure"> | Date | string
    updatedAt?: DateTimeFilter<"RegularExpenditure"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    accountBookCategory?: XOR<AccountBookCategoryRelationFilter, AccountBookCategoryWhereInput>
  }, "id">

  export type RegularExpenditureOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    regularDate?: SortOrder
    title?: SortOrder
    isAutoExpenditure?: SortOrder
    userId?: SortOrder
    accountBookCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RegularExpenditureCountOrderByAggregateInput
    _avg?: RegularExpenditureAvgOrderByAggregateInput
    _max?: RegularExpenditureMaxOrderByAggregateInput
    _min?: RegularExpenditureMinOrderByAggregateInput
    _sum?: RegularExpenditureSumOrderByAggregateInput
  }

  export type RegularExpenditureScalarWhereWithAggregatesInput = {
    AND?: RegularExpenditureScalarWhereWithAggregatesInput | RegularExpenditureScalarWhereWithAggregatesInput[]
    OR?: RegularExpenditureScalarWhereWithAggregatesInput[]
    NOT?: RegularExpenditureScalarWhereWithAggregatesInput | RegularExpenditureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RegularExpenditure"> | number
    amount?: IntWithAggregatesFilter<"RegularExpenditure"> | number
    regularDate?: IntWithAggregatesFilter<"RegularExpenditure"> | number
    title?: StringWithAggregatesFilter<"RegularExpenditure"> | string
    isAutoExpenditure?: BoolWithAggregatesFilter<"RegularExpenditure"> | boolean
    userId?: IntWithAggregatesFilter<"RegularExpenditure"> | number
    accountBookCategoryId?: IntWithAggregatesFilter<"RegularExpenditure"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RegularExpenditure"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RegularExpenditure"> | Date | string
  }

  export type TodoWhereInput = {
    AND?: TodoWhereInput | TodoWhereInput[]
    OR?: TodoWhereInput[]
    NOT?: TodoWhereInput | TodoWhereInput[]
    id?: IntFilter<"Todo"> | number
    isComplete?: BoolFilter<"Todo"> | boolean
    userId?: IntFilter<"Todo"> | number
    title?: StringFilter<"Todo"> | string
    bucketListId?: IntFilter<"Todo"> | number
    createdAt?: DateTimeFilter<"Todo"> | Date | string
    updatedAt?: DateTimeFilter<"Todo"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    bucketList?: XOR<BucketListRelationFilter, BucketListWhereInput>
  }

  export type TodoOrderByWithRelationInput = {
    id?: SortOrder
    isComplete?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    bucketListId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    bucketList?: BucketListOrderByWithRelationInput
  }

  export type TodoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TodoWhereInput | TodoWhereInput[]
    OR?: TodoWhereInput[]
    NOT?: TodoWhereInput | TodoWhereInput[]
    isComplete?: BoolFilter<"Todo"> | boolean
    userId?: IntFilter<"Todo"> | number
    title?: StringFilter<"Todo"> | string
    bucketListId?: IntFilter<"Todo"> | number
    createdAt?: DateTimeFilter<"Todo"> | Date | string
    updatedAt?: DateTimeFilter<"Todo"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    bucketList?: XOR<BucketListRelationFilter, BucketListWhereInput>
  }, "id">

  export type TodoOrderByWithAggregationInput = {
    id?: SortOrder
    isComplete?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    bucketListId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TodoCountOrderByAggregateInput
    _avg?: TodoAvgOrderByAggregateInput
    _max?: TodoMaxOrderByAggregateInput
    _min?: TodoMinOrderByAggregateInput
    _sum?: TodoSumOrderByAggregateInput
  }

  export type TodoScalarWhereWithAggregatesInput = {
    AND?: TodoScalarWhereWithAggregatesInput | TodoScalarWhereWithAggregatesInput[]
    OR?: TodoScalarWhereWithAggregatesInput[]
    NOT?: TodoScalarWhereWithAggregatesInput | TodoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Todo"> | number
    isComplete?: BoolWithAggregatesFilter<"Todo"> | boolean
    userId?: IntWithAggregatesFilter<"Todo"> | number
    title?: StringWithAggregatesFilter<"Todo"> | string
    bucketListId?: IntWithAggregatesFilter<"Todo"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Todo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Todo"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    loginType: string
    socialId: string
    profileImg: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    bucketLists?: BucketListCreateNestedManyWithoutUserInput
    deposits?: DepositCreateNestedManyWithoutUserInput
    todos?: TodoCreateNestedManyWithoutUserInput
    accountBooks?: AccountBookCreateNestedManyWithoutUserInput
    accountBookCategories?: AccountBookCategoryCreateNestedManyWithoutUserInput
    accountBookCategoryImages?: AccountBookCategoryImageCreateNestedManyWithoutUserInput
    regularExpenditures?: RegularExpenditureCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    loginType: string
    socialId: string
    profileImg: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    bucketLists?: BucketListUncheckedCreateNestedManyWithoutUserInput
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
    accountBooks?: AccountBookUncheckedCreateNestedManyWithoutUserInput
    accountBookCategories?: AccountBookCategoryUncheckedCreateNestedManyWithoutUserInput
    accountBookCategoryImages?: AccountBookCategoryImageUncheckedCreateNestedManyWithoutUserInput
    regularExpenditures?: RegularExpenditureUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    socialId?: StringFieldUpdateOperationsInput | string
    profileImg?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    bucketLists?: BucketListUpdateManyWithoutUserNestedInput
    deposits?: DepositUpdateManyWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutUserNestedInput
    accountBooks?: AccountBookUpdateManyWithoutUserNestedInput
    accountBookCategories?: AccountBookCategoryUpdateManyWithoutUserNestedInput
    accountBookCategoryImages?: AccountBookCategoryImageUpdateManyWithoutUserNestedInput
    regularExpenditures?: RegularExpenditureUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    socialId?: StringFieldUpdateOperationsInput | string
    profileImg?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    bucketLists?: BucketListUncheckedUpdateManyWithoutUserNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
    accountBooks?: AccountBookUncheckedUpdateManyWithoutUserNestedInput
    accountBookCategories?: AccountBookCategoryUncheckedUpdateManyWithoutUserNestedInput
    accountBookCategoryImages?: AccountBookCategoryImageUncheckedUpdateManyWithoutUserNestedInput
    regularExpenditures?: RegularExpenditureUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    loginType: string
    socialId: string
    profileImg: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    socialId?: StringFieldUpdateOperationsInput | string
    profileImg?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    socialId?: StringFieldUpdateOperationsInput | string
    profileImg?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserShareCodeCreateInput = {
    userId: number
    shareCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserShareCodeUncheckedCreateInput = {
    id?: number
    userId: number
    shareCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserShareCodeUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    shareCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserShareCodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    shareCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserShareCodeCreateManyInput = {
    id?: number
    userId: number
    shareCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserShareCodeUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    shareCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserShareCodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    shareCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingTypeCreateInput = {
    name: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutSavingTypeInput
  }

  export type SavingTypeUncheckedCreateInput = {
    id?: number
    name: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutSavingTypeInput
  }

  export type SavingTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutSavingTypeNestedInput
  }

  export type SavingTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutSavingTypeNestedInput
  }

  export type SavingTypeCreateManyInput = {
    id?: number
    name: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavingTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    taxType: string
    regularTransferDate: number
    rate: number
    title: string
    amount: number
    currentAmount: number
    isExpiration: boolean
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
    savingType: SavingTypeCreateNestedOneWithoutAccountsInput
    deposits?: DepositCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: number
    taxType: string
    regularTransferDate: number
    rate: number
    title: string
    amount: number
    currentAmount: number
    userId: number
    isExpiration: boolean
    startDate: Date | string
    endDate: Date | string
    savingTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deposits?: DepositUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    taxType?: StringFieldUpdateOperationsInput | string
    regularTransferDate?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currentAmount?: IntFieldUpdateOperationsInput | number
    isExpiration?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
    savingType?: SavingTypeUpdateOneRequiredWithoutAccountsNestedInput
    deposits?: DepositUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taxType?: StringFieldUpdateOperationsInput | string
    regularTransferDate?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currentAmount?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isExpiration?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    savingTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: number
    taxType: string
    regularTransferDate: number
    rate: number
    title: string
    amount: number
    currentAmount: number
    userId: number
    isExpiration: boolean
    startDate: Date | string
    endDate: Date | string
    savingTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    taxType?: StringFieldUpdateOperationsInput | string
    regularTransferDate?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currentAmount?: IntFieldUpdateOperationsInput | number
    isExpiration?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taxType?: StringFieldUpdateOperationsInput | string
    regularTransferDate?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currentAmount?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isExpiration?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    savingTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountBookCreateInput = {
    title: string
    amount: number
    memo: string
    type: $Enums.AccountBookCategoryType
    isRegularExpenditure: boolean
    registerDateTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountBooksInput
    accountBookCategory: AccountBookCategoryCreateNestedOneWithoutAccountBooksInput
  }

  export type AccountBookUncheckedCreateInput = {
    id?: number
    title: string
    amount: number
    memo: string
    type: $Enums.AccountBookCategoryType
    isRegularExpenditure: boolean
    registerDateTime: Date | string
    userId: number
    accountBookCategoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountBookUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    memo?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    isRegularExpenditure?: BoolFieldUpdateOperationsInput | boolean
    registerDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountBooksNestedInput
    accountBookCategory?: AccountBookCategoryUpdateOneRequiredWithoutAccountBooksNestedInput
  }

  export type AccountBookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    memo?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    isRegularExpenditure?: BoolFieldUpdateOperationsInput | boolean
    registerDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    accountBookCategoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountBookCreateManyInput = {
    id?: number
    title: string
    amount: number
    memo: string
    type: $Enums.AccountBookCategoryType
    isRegularExpenditure: boolean
    registerDateTime: Date | string
    userId: number
    accountBookCategoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountBookUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    memo?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    isRegularExpenditure?: BoolFieldUpdateOperationsInput | boolean
    registerDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountBookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    memo?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    isRegularExpenditure?: BoolFieldUpdateOperationsInput | boolean
    registerDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    accountBookCategoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountBookCategoryCreateInput = {
    name: string
    delYn: boolean
    type: $Enums.AccountBookCategoryType
    useStatistic: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountBookCategoriesInput
    accountBooks?: AccountBookCreateNestedManyWithoutAccountBookCategoryInput
    RegularExpenditures?: RegularExpenditureCreateNestedManyWithoutAccountBookCategoryInput
    accountBookCategoryImage: AccountBookCategoryImageCreateNestedOneWithoutAccountBookCategorysInput
  }

  export type AccountBookCategoryUncheckedCreateInput = {
    id?: number
    name: string
    delYn: boolean
    type: $Enums.AccountBookCategoryType
    useStatistic: boolean
    userId: number
    accountBookCategoryImageId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    accountBooks?: AccountBookUncheckedCreateNestedManyWithoutAccountBookCategoryInput
    RegularExpenditures?: RegularExpenditureUncheckedCreateNestedManyWithoutAccountBookCategoryInput
  }

  export type AccountBookCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    delYn?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    useStatistic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountBookCategoriesNestedInput
    accountBooks?: AccountBookUpdateManyWithoutAccountBookCategoryNestedInput
    RegularExpenditures?: RegularExpenditureUpdateManyWithoutAccountBookCategoryNestedInput
    accountBookCategoryImage?: AccountBookCategoryImageUpdateOneRequiredWithoutAccountBookCategorysNestedInput
  }

  export type AccountBookCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    delYn?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    useStatistic?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    accountBookCategoryImageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountBooks?: AccountBookUncheckedUpdateManyWithoutAccountBookCategoryNestedInput
    RegularExpenditures?: RegularExpenditureUncheckedUpdateManyWithoutAccountBookCategoryNestedInput
  }

  export type AccountBookCategoryCreateManyInput = {
    id?: number
    name: string
    delYn: boolean
    type: $Enums.AccountBookCategoryType
    useStatistic: boolean
    userId: number
    accountBookCategoryImageId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountBookCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    delYn?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    useStatistic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountBookCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    delYn?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    useStatistic?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    accountBookCategoryImageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositCreateInput = {
    amount: number
    prevTotalAmount: number
    depositDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDepositsInput
    account: AccountCreateNestedOneWithoutDepositsInput
  }

  export type DepositUncheckedCreateInput = {
    id?: number
    amount: number
    prevTotalAmount: number
    userId: number
    accountId: number
    depositDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepositUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    prevTotalAmount?: IntFieldUpdateOperationsInput | number
    depositDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDepositsNestedInput
    account?: AccountUpdateOneRequiredWithoutDepositsNestedInput
  }

  export type DepositUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    prevTotalAmount?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    depositDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositCreateManyInput = {
    id?: number
    amount: number
    prevTotalAmount: number
    userId: number
    accountId: number
    depositDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepositUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    prevTotalAmount?: IntFieldUpdateOperationsInput | number
    depositDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    prevTotalAmount?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    depositDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountBookCategoryImageCreateInput = {
    name: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountBookCategoryImagesInput
    accountBookCategorys?: AccountBookCategoryCreateNestedManyWithoutAccountBookCategoryImageInput
  }

  export type AccountBookCategoryImageUncheckedCreateInput = {
    id?: number
    name: string
    imageUrl: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    accountBookCategorys?: AccountBookCategoryUncheckedCreateNestedManyWithoutAccountBookCategoryImageInput
  }

  export type AccountBookCategoryImageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountBookCategoryImagesNestedInput
    accountBookCategorys?: AccountBookCategoryUpdateManyWithoutAccountBookCategoryImageNestedInput
  }

  export type AccountBookCategoryImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountBookCategorys?: AccountBookCategoryUncheckedUpdateManyWithoutAccountBookCategoryImageNestedInput
  }

  export type AccountBookCategoryImageCreateManyInput = {
    id?: number
    name: string
    imageUrl: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountBookCategoryImageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountBookCategoryImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketListCreateInput = {
    isComplete: boolean
    title: string
    description: string
    completeDate: Date | string
    thumbImageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBucketListsInput
    todoList?: TodoCreateNestedManyWithoutBucketListInput
  }

  export type BucketListUncheckedCreateInput = {
    isComplete: boolean
    id?: number
    title: string
    description: string
    userId: number
    completeDate: Date | string
    thumbImageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todoList?: TodoUncheckedCreateNestedManyWithoutBucketListInput
  }

  export type BucketListUpdateInput = {
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBucketListsNestedInput
    todoList?: TodoUpdateManyWithoutBucketListNestedInput
  }

  export type BucketListUncheckedUpdateInput = {
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    completeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todoList?: TodoUncheckedUpdateManyWithoutBucketListNestedInput
  }

  export type BucketListCreateManyInput = {
    isComplete: boolean
    id?: number
    title: string
    description: string
    userId: number
    completeDate: Date | string
    thumbImageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BucketListUpdateManyMutationInput = {
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketListUncheckedUpdateManyInput = {
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    completeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegularExpenditureCreateInput = {
    amount: number
    regularDate: number
    title: string
    isAutoExpenditure: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRegularExpendituresInput
    accountBookCategory: AccountBookCategoryCreateNestedOneWithoutRegularExpendituresInput
  }

  export type RegularExpenditureUncheckedCreateInput = {
    id?: number
    amount: number
    regularDate: number
    title: string
    isAutoExpenditure: boolean
    userId: number
    accountBookCategoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegularExpenditureUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    regularDate?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isAutoExpenditure?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRegularExpendituresNestedInput
    accountBookCategory?: AccountBookCategoryUpdateOneRequiredWithoutRegularExpendituresNestedInput
  }

  export type RegularExpenditureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    regularDate?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isAutoExpenditure?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    accountBookCategoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegularExpenditureCreateManyInput = {
    id?: number
    amount: number
    regularDate: number
    title: string
    isAutoExpenditure: boolean
    userId: number
    accountBookCategoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegularExpenditureUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    regularDate?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isAutoExpenditure?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegularExpenditureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    regularDate?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isAutoExpenditure?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    accountBookCategoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoCreateInput = {
    isComplete: boolean
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTodosInput
    bucketList: BucketListCreateNestedOneWithoutTodoListInput
  }

  export type TodoUncheckedCreateInput = {
    id?: number
    isComplete: boolean
    userId: number
    title: string
    bucketListId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoUpdateInput = {
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTodosNestedInput
    bucketList?: BucketListUpdateOneRequiredWithoutTodoListNestedInput
  }

  export type TodoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    bucketListId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoCreateManyInput = {
    id?: number
    isComplete: boolean
    userId: number
    title: string
    bucketListId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoUpdateManyMutationInput = {
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    bucketListId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type BucketListListRelationFilter = {
    every?: BucketListWhereInput
    some?: BucketListWhereInput
    none?: BucketListWhereInput
  }

  export type DepositListRelationFilter = {
    every?: DepositWhereInput
    some?: DepositWhereInput
    none?: DepositWhereInput
  }

  export type TodoListRelationFilter = {
    every?: TodoWhereInput
    some?: TodoWhereInput
    none?: TodoWhereInput
  }

  export type AccountBookListRelationFilter = {
    every?: AccountBookWhereInput
    some?: AccountBookWhereInput
    none?: AccountBookWhereInput
  }

  export type AccountBookCategoryListRelationFilter = {
    every?: AccountBookCategoryWhereInput
    some?: AccountBookCategoryWhereInput
    none?: AccountBookCategoryWhereInput
  }

  export type AccountBookCategoryImageListRelationFilter = {
    every?: AccountBookCategoryImageWhereInput
    some?: AccountBookCategoryImageWhereInput
    none?: AccountBookCategoryImageWhereInput
  }

  export type RegularExpenditureListRelationFilter = {
    every?: RegularExpenditureWhereInput
    some?: RegularExpenditureWhereInput
    none?: RegularExpenditureWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BucketListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepositOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TodoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountBookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountBookCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountBookCategoryImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegularExpenditureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    loginType?: SortOrder
    socialId?: SortOrder
    profileImg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    loginType?: SortOrder
    socialId?: SortOrder
    profileImg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    loginType?: SortOrder
    socialId?: SortOrder
    profileImg?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserShareCodeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shareCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserShareCodeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserShareCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shareCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserShareCodeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shareCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserShareCodeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SavingTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavingTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SavingTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavingTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavingTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SavingTypeRelationFilter = {
    is?: SavingTypeWhereInput
    isNot?: SavingTypeWhereInput
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    taxType?: SortOrder
    regularTransferDate?: SortOrder
    rate?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    currentAmount?: SortOrder
    userId?: SortOrder
    isExpiration?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    savingTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    id?: SortOrder
    regularTransferDate?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
    currentAmount?: SortOrder
    userId?: SortOrder
    savingTypeId?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    taxType?: SortOrder
    regularTransferDate?: SortOrder
    rate?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    currentAmount?: SortOrder
    userId?: SortOrder
    isExpiration?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    savingTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    taxType?: SortOrder
    regularTransferDate?: SortOrder
    rate?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    currentAmount?: SortOrder
    userId?: SortOrder
    isExpiration?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    savingTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    id?: SortOrder
    regularTransferDate?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
    currentAmount?: SortOrder
    userId?: SortOrder
    savingTypeId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAccountBookCategoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountBookCategoryType | EnumAccountBookCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountBookCategoryType[]
    notIn?: $Enums.AccountBookCategoryType[]
    not?: NestedEnumAccountBookCategoryTypeFilter<$PrismaModel> | $Enums.AccountBookCategoryType
  }

  export type AccountBookCategoryRelationFilter = {
    is?: AccountBookCategoryWhereInput
    isNot?: AccountBookCategoryWhereInput
  }

  export type AccountBookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    memo?: SortOrder
    type?: SortOrder
    isRegularExpenditure?: SortOrder
    registerDateTime?: SortOrder
    userId?: SortOrder
    accountBookCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountBookAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    accountBookCategoryId?: SortOrder
  }

  export type AccountBookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    memo?: SortOrder
    type?: SortOrder
    isRegularExpenditure?: SortOrder
    registerDateTime?: SortOrder
    userId?: SortOrder
    accountBookCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountBookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    memo?: SortOrder
    type?: SortOrder
    isRegularExpenditure?: SortOrder
    registerDateTime?: SortOrder
    userId?: SortOrder
    accountBookCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountBookSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    accountBookCategoryId?: SortOrder
  }

  export type EnumAccountBookCategoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountBookCategoryType | EnumAccountBookCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountBookCategoryType[]
    notIn?: $Enums.AccountBookCategoryType[]
    not?: NestedEnumAccountBookCategoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountBookCategoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountBookCategoryTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountBookCategoryTypeFilter<$PrismaModel>
  }

  export type AccountBookCategoryImageRelationFilter = {
    is?: AccountBookCategoryImageWhereInput
    isNot?: AccountBookCategoryImageWhereInput
  }

  export type AccountBookCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    delYn?: SortOrder
    type?: SortOrder
    useStatistic?: SortOrder
    userId?: SortOrder
    accountBookCategoryImageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountBookCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountBookCategoryImageId?: SortOrder
  }

  export type AccountBookCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    delYn?: SortOrder
    type?: SortOrder
    useStatistic?: SortOrder
    userId?: SortOrder
    accountBookCategoryImageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountBookCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    delYn?: SortOrder
    type?: SortOrder
    useStatistic?: SortOrder
    userId?: SortOrder
    accountBookCategoryImageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountBookCategorySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountBookCategoryImageId?: SortOrder
  }

  export type AccountRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type DepositCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    prevTotalAmount?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    depositDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepositAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    prevTotalAmount?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
  }

  export type DepositMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    prevTotalAmount?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    depositDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepositMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    prevTotalAmount?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    depositDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepositSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    prevTotalAmount?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
  }

  export type AccountBookCategoryImageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountBookCategoryImageAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AccountBookCategoryImageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountBookCategoryImageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountBookCategoryImageSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BucketListCountOrderByAggregateInput = {
    isComplete?: SortOrder
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    completeDate?: SortOrder
    thumbImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BucketListAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BucketListMaxOrderByAggregateInput = {
    isComplete?: SortOrder
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    completeDate?: SortOrder
    thumbImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BucketListMinOrderByAggregateInput = {
    isComplete?: SortOrder
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    completeDate?: SortOrder
    thumbImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BucketListSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type RegularExpenditureCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    regularDate?: SortOrder
    title?: SortOrder
    isAutoExpenditure?: SortOrder
    userId?: SortOrder
    accountBookCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegularExpenditureAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    regularDate?: SortOrder
    userId?: SortOrder
    accountBookCategoryId?: SortOrder
  }

  export type RegularExpenditureMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    regularDate?: SortOrder
    title?: SortOrder
    isAutoExpenditure?: SortOrder
    userId?: SortOrder
    accountBookCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegularExpenditureMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    regularDate?: SortOrder
    title?: SortOrder
    isAutoExpenditure?: SortOrder
    userId?: SortOrder
    accountBookCategoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegularExpenditureSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    regularDate?: SortOrder
    userId?: SortOrder
    accountBookCategoryId?: SortOrder
  }

  export type BucketListRelationFilter = {
    is?: BucketListWhereInput
    isNot?: BucketListWhereInput
  }

  export type TodoCountOrderByAggregateInput = {
    id?: SortOrder
    isComplete?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    bucketListId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodoAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bucketListId?: SortOrder
  }

  export type TodoMaxOrderByAggregateInput = {
    id?: SortOrder
    isComplete?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    bucketListId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodoMinOrderByAggregateInput = {
    id?: SortOrder
    isComplete?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    bucketListId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TodoSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bucketListId?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type BucketListCreateNestedManyWithoutUserInput = {
    create?: XOR<BucketListCreateWithoutUserInput, BucketListUncheckedCreateWithoutUserInput> | BucketListCreateWithoutUserInput[] | BucketListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BucketListCreateOrConnectWithoutUserInput | BucketListCreateOrConnectWithoutUserInput[]
    createMany?: BucketListCreateManyUserInputEnvelope
    connect?: BucketListWhereUniqueInput | BucketListWhereUniqueInput[]
  }

  export type DepositCreateNestedManyWithoutUserInput = {
    create?: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput> | DepositCreateWithoutUserInput[] | DepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutUserInput | DepositCreateOrConnectWithoutUserInput[]
    createMany?: DepositCreateManyUserInputEnvelope
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
  }

  export type TodoCreateNestedManyWithoutUserInput = {
    create?: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput> | TodoCreateWithoutUserInput[] | TodoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutUserInput | TodoCreateOrConnectWithoutUserInput[]
    createMany?: TodoCreateManyUserInputEnvelope
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
  }

  export type AccountBookCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountBookCreateWithoutUserInput, AccountBookUncheckedCreateWithoutUserInput> | AccountBookCreateWithoutUserInput[] | AccountBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountBookCreateOrConnectWithoutUserInput | AccountBookCreateOrConnectWithoutUserInput[]
    createMany?: AccountBookCreateManyUserInputEnvelope
    connect?: AccountBookWhereUniqueInput | AccountBookWhereUniqueInput[]
  }

  export type AccountBookCategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountBookCategoryCreateWithoutUserInput, AccountBookCategoryUncheckedCreateWithoutUserInput> | AccountBookCategoryCreateWithoutUserInput[] | AccountBookCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountBookCategoryCreateOrConnectWithoutUserInput | AccountBookCategoryCreateOrConnectWithoutUserInput[]
    createMany?: AccountBookCategoryCreateManyUserInputEnvelope
    connect?: AccountBookCategoryWhereUniqueInput | AccountBookCategoryWhereUniqueInput[]
  }

  export type AccountBookCategoryImageCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountBookCategoryImageCreateWithoutUserInput, AccountBookCategoryImageUncheckedCreateWithoutUserInput> | AccountBookCategoryImageCreateWithoutUserInput[] | AccountBookCategoryImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountBookCategoryImageCreateOrConnectWithoutUserInput | AccountBookCategoryImageCreateOrConnectWithoutUserInput[]
    createMany?: AccountBookCategoryImageCreateManyUserInputEnvelope
    connect?: AccountBookCategoryImageWhereUniqueInput | AccountBookCategoryImageWhereUniqueInput[]
  }

  export type RegularExpenditureCreateNestedManyWithoutUserInput = {
    create?: XOR<RegularExpenditureCreateWithoutUserInput, RegularExpenditureUncheckedCreateWithoutUserInput> | RegularExpenditureCreateWithoutUserInput[] | RegularExpenditureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegularExpenditureCreateOrConnectWithoutUserInput | RegularExpenditureCreateOrConnectWithoutUserInput[]
    createMany?: RegularExpenditureCreateManyUserInputEnvelope
    connect?: RegularExpenditureWhereUniqueInput | RegularExpenditureWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type BucketListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BucketListCreateWithoutUserInput, BucketListUncheckedCreateWithoutUserInput> | BucketListCreateWithoutUserInput[] | BucketListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BucketListCreateOrConnectWithoutUserInput | BucketListCreateOrConnectWithoutUserInput[]
    createMany?: BucketListCreateManyUserInputEnvelope
    connect?: BucketListWhereUniqueInput | BucketListWhereUniqueInput[]
  }

  export type DepositUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput> | DepositCreateWithoutUserInput[] | DepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutUserInput | DepositCreateOrConnectWithoutUserInput[]
    createMany?: DepositCreateManyUserInputEnvelope
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
  }

  export type TodoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput> | TodoCreateWithoutUserInput[] | TodoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutUserInput | TodoCreateOrConnectWithoutUserInput[]
    createMany?: TodoCreateManyUserInputEnvelope
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
  }

  export type AccountBookUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountBookCreateWithoutUserInput, AccountBookUncheckedCreateWithoutUserInput> | AccountBookCreateWithoutUserInput[] | AccountBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountBookCreateOrConnectWithoutUserInput | AccountBookCreateOrConnectWithoutUserInput[]
    createMany?: AccountBookCreateManyUserInputEnvelope
    connect?: AccountBookWhereUniqueInput | AccountBookWhereUniqueInput[]
  }

  export type AccountBookCategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountBookCategoryCreateWithoutUserInput, AccountBookCategoryUncheckedCreateWithoutUserInput> | AccountBookCategoryCreateWithoutUserInput[] | AccountBookCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountBookCategoryCreateOrConnectWithoutUserInput | AccountBookCategoryCreateOrConnectWithoutUserInput[]
    createMany?: AccountBookCategoryCreateManyUserInputEnvelope
    connect?: AccountBookCategoryWhereUniqueInput | AccountBookCategoryWhereUniqueInput[]
  }

  export type AccountBookCategoryImageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountBookCategoryImageCreateWithoutUserInput, AccountBookCategoryImageUncheckedCreateWithoutUserInput> | AccountBookCategoryImageCreateWithoutUserInput[] | AccountBookCategoryImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountBookCategoryImageCreateOrConnectWithoutUserInput | AccountBookCategoryImageCreateOrConnectWithoutUserInput[]
    createMany?: AccountBookCategoryImageCreateManyUserInputEnvelope
    connect?: AccountBookCategoryImageWhereUniqueInput | AccountBookCategoryImageWhereUniqueInput[]
  }

  export type RegularExpenditureUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RegularExpenditureCreateWithoutUserInput, RegularExpenditureUncheckedCreateWithoutUserInput> | RegularExpenditureCreateWithoutUserInput[] | RegularExpenditureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegularExpenditureCreateOrConnectWithoutUserInput | RegularExpenditureCreateOrConnectWithoutUserInput[]
    createMany?: RegularExpenditureCreateManyUserInputEnvelope
    connect?: RegularExpenditureWhereUniqueInput | RegularExpenditureWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type BucketListUpdateManyWithoutUserNestedInput = {
    create?: XOR<BucketListCreateWithoutUserInput, BucketListUncheckedCreateWithoutUserInput> | BucketListCreateWithoutUserInput[] | BucketListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BucketListCreateOrConnectWithoutUserInput | BucketListCreateOrConnectWithoutUserInput[]
    upsert?: BucketListUpsertWithWhereUniqueWithoutUserInput | BucketListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BucketListCreateManyUserInputEnvelope
    set?: BucketListWhereUniqueInput | BucketListWhereUniqueInput[]
    disconnect?: BucketListWhereUniqueInput | BucketListWhereUniqueInput[]
    delete?: BucketListWhereUniqueInput | BucketListWhereUniqueInput[]
    connect?: BucketListWhereUniqueInput | BucketListWhereUniqueInput[]
    update?: BucketListUpdateWithWhereUniqueWithoutUserInput | BucketListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BucketListUpdateManyWithWhereWithoutUserInput | BucketListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BucketListScalarWhereInput | BucketListScalarWhereInput[]
  }

  export type DepositUpdateManyWithoutUserNestedInput = {
    create?: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput> | DepositCreateWithoutUserInput[] | DepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutUserInput | DepositCreateOrConnectWithoutUserInput[]
    upsert?: DepositUpsertWithWhereUniqueWithoutUserInput | DepositUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DepositCreateManyUserInputEnvelope
    set?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    disconnect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    delete?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    update?: DepositUpdateWithWhereUniqueWithoutUserInput | DepositUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DepositUpdateManyWithWhereWithoutUserInput | DepositUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DepositScalarWhereInput | DepositScalarWhereInput[]
  }

  export type TodoUpdateManyWithoutUserNestedInput = {
    create?: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput> | TodoCreateWithoutUserInput[] | TodoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutUserInput | TodoCreateOrConnectWithoutUserInput[]
    upsert?: TodoUpsertWithWhereUniqueWithoutUserInput | TodoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TodoCreateManyUserInputEnvelope
    set?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    disconnect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    delete?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    update?: TodoUpdateWithWhereUniqueWithoutUserInput | TodoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TodoUpdateManyWithWhereWithoutUserInput | TodoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TodoScalarWhereInput | TodoScalarWhereInput[]
  }

  export type AccountBookUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountBookCreateWithoutUserInput, AccountBookUncheckedCreateWithoutUserInput> | AccountBookCreateWithoutUserInput[] | AccountBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountBookCreateOrConnectWithoutUserInput | AccountBookCreateOrConnectWithoutUserInput[]
    upsert?: AccountBookUpsertWithWhereUniqueWithoutUserInput | AccountBookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountBookCreateManyUserInputEnvelope
    set?: AccountBookWhereUniqueInput | AccountBookWhereUniqueInput[]
    disconnect?: AccountBookWhereUniqueInput | AccountBookWhereUniqueInput[]
    delete?: AccountBookWhereUniqueInput | AccountBookWhereUniqueInput[]
    connect?: AccountBookWhereUniqueInput | AccountBookWhereUniqueInput[]
    update?: AccountBookUpdateWithWhereUniqueWithoutUserInput | AccountBookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountBookUpdateManyWithWhereWithoutUserInput | AccountBookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountBookScalarWhereInput | AccountBookScalarWhereInput[]
  }

  export type AccountBookCategoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountBookCategoryCreateWithoutUserInput, AccountBookCategoryUncheckedCreateWithoutUserInput> | AccountBookCategoryCreateWithoutUserInput[] | AccountBookCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountBookCategoryCreateOrConnectWithoutUserInput | AccountBookCategoryCreateOrConnectWithoutUserInput[]
    upsert?: AccountBookCategoryUpsertWithWhereUniqueWithoutUserInput | AccountBookCategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountBookCategoryCreateManyUserInputEnvelope
    set?: AccountBookCategoryWhereUniqueInput | AccountBookCategoryWhereUniqueInput[]
    disconnect?: AccountBookCategoryWhereUniqueInput | AccountBookCategoryWhereUniqueInput[]
    delete?: AccountBookCategoryWhereUniqueInput | AccountBookCategoryWhereUniqueInput[]
    connect?: AccountBookCategoryWhereUniqueInput | AccountBookCategoryWhereUniqueInput[]
    update?: AccountBookCategoryUpdateWithWhereUniqueWithoutUserInput | AccountBookCategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountBookCategoryUpdateManyWithWhereWithoutUserInput | AccountBookCategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountBookCategoryScalarWhereInput | AccountBookCategoryScalarWhereInput[]
  }

  export type AccountBookCategoryImageUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountBookCategoryImageCreateWithoutUserInput, AccountBookCategoryImageUncheckedCreateWithoutUserInput> | AccountBookCategoryImageCreateWithoutUserInput[] | AccountBookCategoryImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountBookCategoryImageCreateOrConnectWithoutUserInput | AccountBookCategoryImageCreateOrConnectWithoutUserInput[]
    upsert?: AccountBookCategoryImageUpsertWithWhereUniqueWithoutUserInput | AccountBookCategoryImageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountBookCategoryImageCreateManyUserInputEnvelope
    set?: AccountBookCategoryImageWhereUniqueInput | AccountBookCategoryImageWhereUniqueInput[]
    disconnect?: AccountBookCategoryImageWhereUniqueInput | AccountBookCategoryImageWhereUniqueInput[]
    delete?: AccountBookCategoryImageWhereUniqueInput | AccountBookCategoryImageWhereUniqueInput[]
    connect?: AccountBookCategoryImageWhereUniqueInput | AccountBookCategoryImageWhereUniqueInput[]
    update?: AccountBookCategoryImageUpdateWithWhereUniqueWithoutUserInput | AccountBookCategoryImageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountBookCategoryImageUpdateManyWithWhereWithoutUserInput | AccountBookCategoryImageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountBookCategoryImageScalarWhereInput | AccountBookCategoryImageScalarWhereInput[]
  }

  export type RegularExpenditureUpdateManyWithoutUserNestedInput = {
    create?: XOR<RegularExpenditureCreateWithoutUserInput, RegularExpenditureUncheckedCreateWithoutUserInput> | RegularExpenditureCreateWithoutUserInput[] | RegularExpenditureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegularExpenditureCreateOrConnectWithoutUserInput | RegularExpenditureCreateOrConnectWithoutUserInput[]
    upsert?: RegularExpenditureUpsertWithWhereUniqueWithoutUserInput | RegularExpenditureUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RegularExpenditureCreateManyUserInputEnvelope
    set?: RegularExpenditureWhereUniqueInput | RegularExpenditureWhereUniqueInput[]
    disconnect?: RegularExpenditureWhereUniqueInput | RegularExpenditureWhereUniqueInput[]
    delete?: RegularExpenditureWhereUniqueInput | RegularExpenditureWhereUniqueInput[]
    connect?: RegularExpenditureWhereUniqueInput | RegularExpenditureWhereUniqueInput[]
    update?: RegularExpenditureUpdateWithWhereUniqueWithoutUserInput | RegularExpenditureUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RegularExpenditureUpdateManyWithWhereWithoutUserInput | RegularExpenditureUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RegularExpenditureScalarWhereInput | RegularExpenditureScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type BucketListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BucketListCreateWithoutUserInput, BucketListUncheckedCreateWithoutUserInput> | BucketListCreateWithoutUserInput[] | BucketListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BucketListCreateOrConnectWithoutUserInput | BucketListCreateOrConnectWithoutUserInput[]
    upsert?: BucketListUpsertWithWhereUniqueWithoutUserInput | BucketListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BucketListCreateManyUserInputEnvelope
    set?: BucketListWhereUniqueInput | BucketListWhereUniqueInput[]
    disconnect?: BucketListWhereUniqueInput | BucketListWhereUniqueInput[]
    delete?: BucketListWhereUniqueInput | BucketListWhereUniqueInput[]
    connect?: BucketListWhereUniqueInput | BucketListWhereUniqueInput[]
    update?: BucketListUpdateWithWhereUniqueWithoutUserInput | BucketListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BucketListUpdateManyWithWhereWithoutUserInput | BucketListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BucketListScalarWhereInput | BucketListScalarWhereInput[]
  }

  export type DepositUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput> | DepositCreateWithoutUserInput[] | DepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutUserInput | DepositCreateOrConnectWithoutUserInput[]
    upsert?: DepositUpsertWithWhereUniqueWithoutUserInput | DepositUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DepositCreateManyUserInputEnvelope
    set?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    disconnect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    delete?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    update?: DepositUpdateWithWhereUniqueWithoutUserInput | DepositUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DepositUpdateManyWithWhereWithoutUserInput | DepositUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DepositScalarWhereInput | DepositScalarWhereInput[]
  }

  export type TodoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput> | TodoCreateWithoutUserInput[] | TodoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutUserInput | TodoCreateOrConnectWithoutUserInput[]
    upsert?: TodoUpsertWithWhereUniqueWithoutUserInput | TodoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TodoCreateManyUserInputEnvelope
    set?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    disconnect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    delete?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    update?: TodoUpdateWithWhereUniqueWithoutUserInput | TodoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TodoUpdateManyWithWhereWithoutUserInput | TodoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TodoScalarWhereInput | TodoScalarWhereInput[]
  }

  export type AccountBookUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountBookCreateWithoutUserInput, AccountBookUncheckedCreateWithoutUserInput> | AccountBookCreateWithoutUserInput[] | AccountBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountBookCreateOrConnectWithoutUserInput | AccountBookCreateOrConnectWithoutUserInput[]
    upsert?: AccountBookUpsertWithWhereUniqueWithoutUserInput | AccountBookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountBookCreateManyUserInputEnvelope
    set?: AccountBookWhereUniqueInput | AccountBookWhereUniqueInput[]
    disconnect?: AccountBookWhereUniqueInput | AccountBookWhereUniqueInput[]
    delete?: AccountBookWhereUniqueInput | AccountBookWhereUniqueInput[]
    connect?: AccountBookWhereUniqueInput | AccountBookWhereUniqueInput[]
    update?: AccountBookUpdateWithWhereUniqueWithoutUserInput | AccountBookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountBookUpdateManyWithWhereWithoutUserInput | AccountBookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountBookScalarWhereInput | AccountBookScalarWhereInput[]
  }

  export type AccountBookCategoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountBookCategoryCreateWithoutUserInput, AccountBookCategoryUncheckedCreateWithoutUserInput> | AccountBookCategoryCreateWithoutUserInput[] | AccountBookCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountBookCategoryCreateOrConnectWithoutUserInput | AccountBookCategoryCreateOrConnectWithoutUserInput[]
    upsert?: AccountBookCategoryUpsertWithWhereUniqueWithoutUserInput | AccountBookCategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountBookCategoryCreateManyUserInputEnvelope
    set?: AccountBookCategoryWhereUniqueInput | AccountBookCategoryWhereUniqueInput[]
    disconnect?: AccountBookCategoryWhereUniqueInput | AccountBookCategoryWhereUniqueInput[]
    delete?: AccountBookCategoryWhereUniqueInput | AccountBookCategoryWhereUniqueInput[]
    connect?: AccountBookCategoryWhereUniqueInput | AccountBookCategoryWhereUniqueInput[]
    update?: AccountBookCategoryUpdateWithWhereUniqueWithoutUserInput | AccountBookCategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountBookCategoryUpdateManyWithWhereWithoutUserInput | AccountBookCategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountBookCategoryScalarWhereInput | AccountBookCategoryScalarWhereInput[]
  }

  export type AccountBookCategoryImageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountBookCategoryImageCreateWithoutUserInput, AccountBookCategoryImageUncheckedCreateWithoutUserInput> | AccountBookCategoryImageCreateWithoutUserInput[] | AccountBookCategoryImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountBookCategoryImageCreateOrConnectWithoutUserInput | AccountBookCategoryImageCreateOrConnectWithoutUserInput[]
    upsert?: AccountBookCategoryImageUpsertWithWhereUniqueWithoutUserInput | AccountBookCategoryImageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountBookCategoryImageCreateManyUserInputEnvelope
    set?: AccountBookCategoryImageWhereUniqueInput | AccountBookCategoryImageWhereUniqueInput[]
    disconnect?: AccountBookCategoryImageWhereUniqueInput | AccountBookCategoryImageWhereUniqueInput[]
    delete?: AccountBookCategoryImageWhereUniqueInput | AccountBookCategoryImageWhereUniqueInput[]
    connect?: AccountBookCategoryImageWhereUniqueInput | AccountBookCategoryImageWhereUniqueInput[]
    update?: AccountBookCategoryImageUpdateWithWhereUniqueWithoutUserInput | AccountBookCategoryImageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountBookCategoryImageUpdateManyWithWhereWithoutUserInput | AccountBookCategoryImageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountBookCategoryImageScalarWhereInput | AccountBookCategoryImageScalarWhereInput[]
  }

  export type RegularExpenditureUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RegularExpenditureCreateWithoutUserInput, RegularExpenditureUncheckedCreateWithoutUserInput> | RegularExpenditureCreateWithoutUserInput[] | RegularExpenditureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegularExpenditureCreateOrConnectWithoutUserInput | RegularExpenditureCreateOrConnectWithoutUserInput[]
    upsert?: RegularExpenditureUpsertWithWhereUniqueWithoutUserInput | RegularExpenditureUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RegularExpenditureCreateManyUserInputEnvelope
    set?: RegularExpenditureWhereUniqueInput | RegularExpenditureWhereUniqueInput[]
    disconnect?: RegularExpenditureWhereUniqueInput | RegularExpenditureWhereUniqueInput[]
    delete?: RegularExpenditureWhereUniqueInput | RegularExpenditureWhereUniqueInput[]
    connect?: RegularExpenditureWhereUniqueInput | RegularExpenditureWhereUniqueInput[]
    update?: RegularExpenditureUpdateWithWhereUniqueWithoutUserInput | RegularExpenditureUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RegularExpenditureUpdateManyWithWhereWithoutUserInput | RegularExpenditureUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RegularExpenditureScalarWhereInput | RegularExpenditureScalarWhereInput[]
  }

  export type AccountCreateNestedManyWithoutSavingTypeInput = {
    create?: XOR<AccountCreateWithoutSavingTypeInput, AccountUncheckedCreateWithoutSavingTypeInput> | AccountCreateWithoutSavingTypeInput[] | AccountUncheckedCreateWithoutSavingTypeInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutSavingTypeInput | AccountCreateOrConnectWithoutSavingTypeInput[]
    createMany?: AccountCreateManySavingTypeInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutSavingTypeInput = {
    create?: XOR<AccountCreateWithoutSavingTypeInput, AccountUncheckedCreateWithoutSavingTypeInput> | AccountCreateWithoutSavingTypeInput[] | AccountUncheckedCreateWithoutSavingTypeInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutSavingTypeInput | AccountCreateOrConnectWithoutSavingTypeInput[]
    createMany?: AccountCreateManySavingTypeInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type AccountUpdateManyWithoutSavingTypeNestedInput = {
    create?: XOR<AccountCreateWithoutSavingTypeInput, AccountUncheckedCreateWithoutSavingTypeInput> | AccountCreateWithoutSavingTypeInput[] | AccountUncheckedCreateWithoutSavingTypeInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutSavingTypeInput | AccountCreateOrConnectWithoutSavingTypeInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutSavingTypeInput | AccountUpsertWithWhereUniqueWithoutSavingTypeInput[]
    createMany?: AccountCreateManySavingTypeInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutSavingTypeInput | AccountUpdateWithWhereUniqueWithoutSavingTypeInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutSavingTypeInput | AccountUpdateManyWithWhereWithoutSavingTypeInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutSavingTypeNestedInput = {
    create?: XOR<AccountCreateWithoutSavingTypeInput, AccountUncheckedCreateWithoutSavingTypeInput> | AccountCreateWithoutSavingTypeInput[] | AccountUncheckedCreateWithoutSavingTypeInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutSavingTypeInput | AccountCreateOrConnectWithoutSavingTypeInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutSavingTypeInput | AccountUpsertWithWhereUniqueWithoutSavingTypeInput[]
    createMany?: AccountCreateManySavingTypeInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutSavingTypeInput | AccountUpdateWithWhereUniqueWithoutSavingTypeInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutSavingTypeInput | AccountUpdateManyWithWhereWithoutSavingTypeInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type SavingTypeCreateNestedOneWithoutAccountsInput = {
    create?: XOR<SavingTypeCreateWithoutAccountsInput, SavingTypeUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: SavingTypeCreateOrConnectWithoutAccountsInput
    connect?: SavingTypeWhereUniqueInput
  }

  export type DepositCreateNestedManyWithoutAccountInput = {
    create?: XOR<DepositCreateWithoutAccountInput, DepositUncheckedCreateWithoutAccountInput> | DepositCreateWithoutAccountInput[] | DepositUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutAccountInput | DepositCreateOrConnectWithoutAccountInput[]
    createMany?: DepositCreateManyAccountInputEnvelope
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
  }

  export type DepositUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<DepositCreateWithoutAccountInput, DepositUncheckedCreateWithoutAccountInput> | DepositCreateWithoutAccountInput[] | DepositUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutAccountInput | DepositCreateOrConnectWithoutAccountInput[]
    createMany?: DepositCreateManyAccountInputEnvelope
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type SavingTypeUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<SavingTypeCreateWithoutAccountsInput, SavingTypeUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: SavingTypeCreateOrConnectWithoutAccountsInput
    upsert?: SavingTypeUpsertWithoutAccountsInput
    connect?: SavingTypeWhereUniqueInput
    update?: XOR<XOR<SavingTypeUpdateToOneWithWhereWithoutAccountsInput, SavingTypeUpdateWithoutAccountsInput>, SavingTypeUncheckedUpdateWithoutAccountsInput>
  }

  export type DepositUpdateManyWithoutAccountNestedInput = {
    create?: XOR<DepositCreateWithoutAccountInput, DepositUncheckedCreateWithoutAccountInput> | DepositCreateWithoutAccountInput[] | DepositUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutAccountInput | DepositCreateOrConnectWithoutAccountInput[]
    upsert?: DepositUpsertWithWhereUniqueWithoutAccountInput | DepositUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: DepositCreateManyAccountInputEnvelope
    set?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    disconnect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    delete?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    update?: DepositUpdateWithWhereUniqueWithoutAccountInput | DepositUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: DepositUpdateManyWithWhereWithoutAccountInput | DepositUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: DepositScalarWhereInput | DepositScalarWhereInput[]
  }

  export type DepositUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<DepositCreateWithoutAccountInput, DepositUncheckedCreateWithoutAccountInput> | DepositCreateWithoutAccountInput[] | DepositUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutAccountInput | DepositCreateOrConnectWithoutAccountInput[]
    upsert?: DepositUpsertWithWhereUniqueWithoutAccountInput | DepositUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: DepositCreateManyAccountInputEnvelope
    set?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    disconnect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    delete?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    update?: DepositUpdateWithWhereUniqueWithoutAccountInput | DepositUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: DepositUpdateManyWithWhereWithoutAccountInput | DepositUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: DepositScalarWhereInput | DepositScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountBooksInput = {
    create?: XOR<UserCreateWithoutAccountBooksInput, UserUncheckedCreateWithoutAccountBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountBooksInput
    connect?: UserWhereUniqueInput
  }

  export type AccountBookCategoryCreateNestedOneWithoutAccountBooksInput = {
    create?: XOR<AccountBookCategoryCreateWithoutAccountBooksInput, AccountBookCategoryUncheckedCreateWithoutAccountBooksInput>
    connectOrCreate?: AccountBookCategoryCreateOrConnectWithoutAccountBooksInput
    connect?: AccountBookCategoryWhereUniqueInput
  }

  export type EnumAccountBookCategoryTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccountBookCategoryType
  }

  export type UserUpdateOneRequiredWithoutAccountBooksNestedInput = {
    create?: XOR<UserCreateWithoutAccountBooksInput, UserUncheckedCreateWithoutAccountBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountBooksInput
    upsert?: UserUpsertWithoutAccountBooksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountBooksInput, UserUpdateWithoutAccountBooksInput>, UserUncheckedUpdateWithoutAccountBooksInput>
  }

  export type AccountBookCategoryUpdateOneRequiredWithoutAccountBooksNestedInput = {
    create?: XOR<AccountBookCategoryCreateWithoutAccountBooksInput, AccountBookCategoryUncheckedCreateWithoutAccountBooksInput>
    connectOrCreate?: AccountBookCategoryCreateOrConnectWithoutAccountBooksInput
    upsert?: AccountBookCategoryUpsertWithoutAccountBooksInput
    connect?: AccountBookCategoryWhereUniqueInput
    update?: XOR<XOR<AccountBookCategoryUpdateToOneWithWhereWithoutAccountBooksInput, AccountBookCategoryUpdateWithoutAccountBooksInput>, AccountBookCategoryUncheckedUpdateWithoutAccountBooksInput>
  }

  export type UserCreateNestedOneWithoutAccountBookCategoriesInput = {
    create?: XOR<UserCreateWithoutAccountBookCategoriesInput, UserUncheckedCreateWithoutAccountBookCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountBookCategoriesInput
    connect?: UserWhereUniqueInput
  }

  export type AccountBookCreateNestedManyWithoutAccountBookCategoryInput = {
    create?: XOR<AccountBookCreateWithoutAccountBookCategoryInput, AccountBookUncheckedCreateWithoutAccountBookCategoryInput> | AccountBookCreateWithoutAccountBookCategoryInput[] | AccountBookUncheckedCreateWithoutAccountBookCategoryInput[]
    connectOrCreate?: AccountBookCreateOrConnectWithoutAccountBookCategoryInput | AccountBookCreateOrConnectWithoutAccountBookCategoryInput[]
    createMany?: AccountBookCreateManyAccountBookCategoryInputEnvelope
    connect?: AccountBookWhereUniqueInput | AccountBookWhereUniqueInput[]
  }

  export type RegularExpenditureCreateNestedManyWithoutAccountBookCategoryInput = {
    create?: XOR<RegularExpenditureCreateWithoutAccountBookCategoryInput, RegularExpenditureUncheckedCreateWithoutAccountBookCategoryInput> | RegularExpenditureCreateWithoutAccountBookCategoryInput[] | RegularExpenditureUncheckedCreateWithoutAccountBookCategoryInput[]
    connectOrCreate?: RegularExpenditureCreateOrConnectWithoutAccountBookCategoryInput | RegularExpenditureCreateOrConnectWithoutAccountBookCategoryInput[]
    createMany?: RegularExpenditureCreateManyAccountBookCategoryInputEnvelope
    connect?: RegularExpenditureWhereUniqueInput | RegularExpenditureWhereUniqueInput[]
  }

  export type AccountBookCategoryImageCreateNestedOneWithoutAccountBookCategorysInput = {
    create?: XOR<AccountBookCategoryImageCreateWithoutAccountBookCategorysInput, AccountBookCategoryImageUncheckedCreateWithoutAccountBookCategorysInput>
    connectOrCreate?: AccountBookCategoryImageCreateOrConnectWithoutAccountBookCategorysInput
    connect?: AccountBookCategoryImageWhereUniqueInput
  }

  export type AccountBookUncheckedCreateNestedManyWithoutAccountBookCategoryInput = {
    create?: XOR<AccountBookCreateWithoutAccountBookCategoryInput, AccountBookUncheckedCreateWithoutAccountBookCategoryInput> | AccountBookCreateWithoutAccountBookCategoryInput[] | AccountBookUncheckedCreateWithoutAccountBookCategoryInput[]
    connectOrCreate?: AccountBookCreateOrConnectWithoutAccountBookCategoryInput | AccountBookCreateOrConnectWithoutAccountBookCategoryInput[]
    createMany?: AccountBookCreateManyAccountBookCategoryInputEnvelope
    connect?: AccountBookWhereUniqueInput | AccountBookWhereUniqueInput[]
  }

  export type RegularExpenditureUncheckedCreateNestedManyWithoutAccountBookCategoryInput = {
    create?: XOR<RegularExpenditureCreateWithoutAccountBookCategoryInput, RegularExpenditureUncheckedCreateWithoutAccountBookCategoryInput> | RegularExpenditureCreateWithoutAccountBookCategoryInput[] | RegularExpenditureUncheckedCreateWithoutAccountBookCategoryInput[]
    connectOrCreate?: RegularExpenditureCreateOrConnectWithoutAccountBookCategoryInput | RegularExpenditureCreateOrConnectWithoutAccountBookCategoryInput[]
    createMany?: RegularExpenditureCreateManyAccountBookCategoryInputEnvelope
    connect?: RegularExpenditureWhereUniqueInput | RegularExpenditureWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutAccountBookCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutAccountBookCategoriesInput, UserUncheckedCreateWithoutAccountBookCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountBookCategoriesInput
    upsert?: UserUpsertWithoutAccountBookCategoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountBookCategoriesInput, UserUpdateWithoutAccountBookCategoriesInput>, UserUncheckedUpdateWithoutAccountBookCategoriesInput>
  }

  export type AccountBookUpdateManyWithoutAccountBookCategoryNestedInput = {
    create?: XOR<AccountBookCreateWithoutAccountBookCategoryInput, AccountBookUncheckedCreateWithoutAccountBookCategoryInput> | AccountBookCreateWithoutAccountBookCategoryInput[] | AccountBookUncheckedCreateWithoutAccountBookCategoryInput[]
    connectOrCreate?: AccountBookCreateOrConnectWithoutAccountBookCategoryInput | AccountBookCreateOrConnectWithoutAccountBookCategoryInput[]
    upsert?: AccountBookUpsertWithWhereUniqueWithoutAccountBookCategoryInput | AccountBookUpsertWithWhereUniqueWithoutAccountBookCategoryInput[]
    createMany?: AccountBookCreateManyAccountBookCategoryInputEnvelope
    set?: AccountBookWhereUniqueInput | AccountBookWhereUniqueInput[]
    disconnect?: AccountBookWhereUniqueInput | AccountBookWhereUniqueInput[]
    delete?: AccountBookWhereUniqueInput | AccountBookWhereUniqueInput[]
    connect?: AccountBookWhereUniqueInput | AccountBookWhereUniqueInput[]
    update?: AccountBookUpdateWithWhereUniqueWithoutAccountBookCategoryInput | AccountBookUpdateWithWhereUniqueWithoutAccountBookCategoryInput[]
    updateMany?: AccountBookUpdateManyWithWhereWithoutAccountBookCategoryInput | AccountBookUpdateManyWithWhereWithoutAccountBookCategoryInput[]
    deleteMany?: AccountBookScalarWhereInput | AccountBookScalarWhereInput[]
  }

  export type RegularExpenditureUpdateManyWithoutAccountBookCategoryNestedInput = {
    create?: XOR<RegularExpenditureCreateWithoutAccountBookCategoryInput, RegularExpenditureUncheckedCreateWithoutAccountBookCategoryInput> | RegularExpenditureCreateWithoutAccountBookCategoryInput[] | RegularExpenditureUncheckedCreateWithoutAccountBookCategoryInput[]
    connectOrCreate?: RegularExpenditureCreateOrConnectWithoutAccountBookCategoryInput | RegularExpenditureCreateOrConnectWithoutAccountBookCategoryInput[]
    upsert?: RegularExpenditureUpsertWithWhereUniqueWithoutAccountBookCategoryInput | RegularExpenditureUpsertWithWhereUniqueWithoutAccountBookCategoryInput[]
    createMany?: RegularExpenditureCreateManyAccountBookCategoryInputEnvelope
    set?: RegularExpenditureWhereUniqueInput | RegularExpenditureWhereUniqueInput[]
    disconnect?: RegularExpenditureWhereUniqueInput | RegularExpenditureWhereUniqueInput[]
    delete?: RegularExpenditureWhereUniqueInput | RegularExpenditureWhereUniqueInput[]
    connect?: RegularExpenditureWhereUniqueInput | RegularExpenditureWhereUniqueInput[]
    update?: RegularExpenditureUpdateWithWhereUniqueWithoutAccountBookCategoryInput | RegularExpenditureUpdateWithWhereUniqueWithoutAccountBookCategoryInput[]
    updateMany?: RegularExpenditureUpdateManyWithWhereWithoutAccountBookCategoryInput | RegularExpenditureUpdateManyWithWhereWithoutAccountBookCategoryInput[]
    deleteMany?: RegularExpenditureScalarWhereInput | RegularExpenditureScalarWhereInput[]
  }

  export type AccountBookCategoryImageUpdateOneRequiredWithoutAccountBookCategorysNestedInput = {
    create?: XOR<AccountBookCategoryImageCreateWithoutAccountBookCategorysInput, AccountBookCategoryImageUncheckedCreateWithoutAccountBookCategorysInput>
    connectOrCreate?: AccountBookCategoryImageCreateOrConnectWithoutAccountBookCategorysInput
    upsert?: AccountBookCategoryImageUpsertWithoutAccountBookCategorysInput
    connect?: AccountBookCategoryImageWhereUniqueInput
    update?: XOR<XOR<AccountBookCategoryImageUpdateToOneWithWhereWithoutAccountBookCategorysInput, AccountBookCategoryImageUpdateWithoutAccountBookCategorysInput>, AccountBookCategoryImageUncheckedUpdateWithoutAccountBookCategorysInput>
  }

  export type AccountBookUncheckedUpdateManyWithoutAccountBookCategoryNestedInput = {
    create?: XOR<AccountBookCreateWithoutAccountBookCategoryInput, AccountBookUncheckedCreateWithoutAccountBookCategoryInput> | AccountBookCreateWithoutAccountBookCategoryInput[] | AccountBookUncheckedCreateWithoutAccountBookCategoryInput[]
    connectOrCreate?: AccountBookCreateOrConnectWithoutAccountBookCategoryInput | AccountBookCreateOrConnectWithoutAccountBookCategoryInput[]
    upsert?: AccountBookUpsertWithWhereUniqueWithoutAccountBookCategoryInput | AccountBookUpsertWithWhereUniqueWithoutAccountBookCategoryInput[]
    createMany?: AccountBookCreateManyAccountBookCategoryInputEnvelope
    set?: AccountBookWhereUniqueInput | AccountBookWhereUniqueInput[]
    disconnect?: AccountBookWhereUniqueInput | AccountBookWhereUniqueInput[]
    delete?: AccountBookWhereUniqueInput | AccountBookWhereUniqueInput[]
    connect?: AccountBookWhereUniqueInput | AccountBookWhereUniqueInput[]
    update?: AccountBookUpdateWithWhereUniqueWithoutAccountBookCategoryInput | AccountBookUpdateWithWhereUniqueWithoutAccountBookCategoryInput[]
    updateMany?: AccountBookUpdateManyWithWhereWithoutAccountBookCategoryInput | AccountBookUpdateManyWithWhereWithoutAccountBookCategoryInput[]
    deleteMany?: AccountBookScalarWhereInput | AccountBookScalarWhereInput[]
  }

  export type RegularExpenditureUncheckedUpdateManyWithoutAccountBookCategoryNestedInput = {
    create?: XOR<RegularExpenditureCreateWithoutAccountBookCategoryInput, RegularExpenditureUncheckedCreateWithoutAccountBookCategoryInput> | RegularExpenditureCreateWithoutAccountBookCategoryInput[] | RegularExpenditureUncheckedCreateWithoutAccountBookCategoryInput[]
    connectOrCreate?: RegularExpenditureCreateOrConnectWithoutAccountBookCategoryInput | RegularExpenditureCreateOrConnectWithoutAccountBookCategoryInput[]
    upsert?: RegularExpenditureUpsertWithWhereUniqueWithoutAccountBookCategoryInput | RegularExpenditureUpsertWithWhereUniqueWithoutAccountBookCategoryInput[]
    createMany?: RegularExpenditureCreateManyAccountBookCategoryInputEnvelope
    set?: RegularExpenditureWhereUniqueInput | RegularExpenditureWhereUniqueInput[]
    disconnect?: RegularExpenditureWhereUniqueInput | RegularExpenditureWhereUniqueInput[]
    delete?: RegularExpenditureWhereUniqueInput | RegularExpenditureWhereUniqueInput[]
    connect?: RegularExpenditureWhereUniqueInput | RegularExpenditureWhereUniqueInput[]
    update?: RegularExpenditureUpdateWithWhereUniqueWithoutAccountBookCategoryInput | RegularExpenditureUpdateWithWhereUniqueWithoutAccountBookCategoryInput[]
    updateMany?: RegularExpenditureUpdateManyWithWhereWithoutAccountBookCategoryInput | RegularExpenditureUpdateManyWithWhereWithoutAccountBookCategoryInput[]
    deleteMany?: RegularExpenditureScalarWhereInput | RegularExpenditureScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDepositsInput = {
    create?: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepositsInput
    connect?: UserWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutDepositsInput = {
    create?: XOR<AccountCreateWithoutDepositsInput, AccountUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutDepositsInput
    connect?: AccountWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDepositsNestedInput = {
    create?: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepositsInput
    upsert?: UserUpsertWithoutDepositsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDepositsInput, UserUpdateWithoutDepositsInput>, UserUncheckedUpdateWithoutDepositsInput>
  }

  export type AccountUpdateOneRequiredWithoutDepositsNestedInput = {
    create?: XOR<AccountCreateWithoutDepositsInput, AccountUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutDepositsInput
    upsert?: AccountUpsertWithoutDepositsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutDepositsInput, AccountUpdateWithoutDepositsInput>, AccountUncheckedUpdateWithoutDepositsInput>
  }

  export type UserCreateNestedOneWithoutAccountBookCategoryImagesInput = {
    create?: XOR<UserCreateWithoutAccountBookCategoryImagesInput, UserUncheckedCreateWithoutAccountBookCategoryImagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountBookCategoryImagesInput
    connect?: UserWhereUniqueInput
  }

  export type AccountBookCategoryCreateNestedManyWithoutAccountBookCategoryImageInput = {
    create?: XOR<AccountBookCategoryCreateWithoutAccountBookCategoryImageInput, AccountBookCategoryUncheckedCreateWithoutAccountBookCategoryImageInput> | AccountBookCategoryCreateWithoutAccountBookCategoryImageInput[] | AccountBookCategoryUncheckedCreateWithoutAccountBookCategoryImageInput[]
    connectOrCreate?: AccountBookCategoryCreateOrConnectWithoutAccountBookCategoryImageInput | AccountBookCategoryCreateOrConnectWithoutAccountBookCategoryImageInput[]
    createMany?: AccountBookCategoryCreateManyAccountBookCategoryImageInputEnvelope
    connect?: AccountBookCategoryWhereUniqueInput | AccountBookCategoryWhereUniqueInput[]
  }

  export type AccountBookCategoryUncheckedCreateNestedManyWithoutAccountBookCategoryImageInput = {
    create?: XOR<AccountBookCategoryCreateWithoutAccountBookCategoryImageInput, AccountBookCategoryUncheckedCreateWithoutAccountBookCategoryImageInput> | AccountBookCategoryCreateWithoutAccountBookCategoryImageInput[] | AccountBookCategoryUncheckedCreateWithoutAccountBookCategoryImageInput[]
    connectOrCreate?: AccountBookCategoryCreateOrConnectWithoutAccountBookCategoryImageInput | AccountBookCategoryCreateOrConnectWithoutAccountBookCategoryImageInput[]
    createMany?: AccountBookCategoryCreateManyAccountBookCategoryImageInputEnvelope
    connect?: AccountBookCategoryWhereUniqueInput | AccountBookCategoryWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutAccountBookCategoryImagesNestedInput = {
    create?: XOR<UserCreateWithoutAccountBookCategoryImagesInput, UserUncheckedCreateWithoutAccountBookCategoryImagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountBookCategoryImagesInput
    upsert?: UserUpsertWithoutAccountBookCategoryImagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountBookCategoryImagesInput, UserUpdateWithoutAccountBookCategoryImagesInput>, UserUncheckedUpdateWithoutAccountBookCategoryImagesInput>
  }

  export type AccountBookCategoryUpdateManyWithoutAccountBookCategoryImageNestedInput = {
    create?: XOR<AccountBookCategoryCreateWithoutAccountBookCategoryImageInput, AccountBookCategoryUncheckedCreateWithoutAccountBookCategoryImageInput> | AccountBookCategoryCreateWithoutAccountBookCategoryImageInput[] | AccountBookCategoryUncheckedCreateWithoutAccountBookCategoryImageInput[]
    connectOrCreate?: AccountBookCategoryCreateOrConnectWithoutAccountBookCategoryImageInput | AccountBookCategoryCreateOrConnectWithoutAccountBookCategoryImageInput[]
    upsert?: AccountBookCategoryUpsertWithWhereUniqueWithoutAccountBookCategoryImageInput | AccountBookCategoryUpsertWithWhereUniqueWithoutAccountBookCategoryImageInput[]
    createMany?: AccountBookCategoryCreateManyAccountBookCategoryImageInputEnvelope
    set?: AccountBookCategoryWhereUniqueInput | AccountBookCategoryWhereUniqueInput[]
    disconnect?: AccountBookCategoryWhereUniqueInput | AccountBookCategoryWhereUniqueInput[]
    delete?: AccountBookCategoryWhereUniqueInput | AccountBookCategoryWhereUniqueInput[]
    connect?: AccountBookCategoryWhereUniqueInput | AccountBookCategoryWhereUniqueInput[]
    update?: AccountBookCategoryUpdateWithWhereUniqueWithoutAccountBookCategoryImageInput | AccountBookCategoryUpdateWithWhereUniqueWithoutAccountBookCategoryImageInput[]
    updateMany?: AccountBookCategoryUpdateManyWithWhereWithoutAccountBookCategoryImageInput | AccountBookCategoryUpdateManyWithWhereWithoutAccountBookCategoryImageInput[]
    deleteMany?: AccountBookCategoryScalarWhereInput | AccountBookCategoryScalarWhereInput[]
  }

  export type AccountBookCategoryUncheckedUpdateManyWithoutAccountBookCategoryImageNestedInput = {
    create?: XOR<AccountBookCategoryCreateWithoutAccountBookCategoryImageInput, AccountBookCategoryUncheckedCreateWithoutAccountBookCategoryImageInput> | AccountBookCategoryCreateWithoutAccountBookCategoryImageInput[] | AccountBookCategoryUncheckedCreateWithoutAccountBookCategoryImageInput[]
    connectOrCreate?: AccountBookCategoryCreateOrConnectWithoutAccountBookCategoryImageInput | AccountBookCategoryCreateOrConnectWithoutAccountBookCategoryImageInput[]
    upsert?: AccountBookCategoryUpsertWithWhereUniqueWithoutAccountBookCategoryImageInput | AccountBookCategoryUpsertWithWhereUniqueWithoutAccountBookCategoryImageInput[]
    createMany?: AccountBookCategoryCreateManyAccountBookCategoryImageInputEnvelope
    set?: AccountBookCategoryWhereUniqueInput | AccountBookCategoryWhereUniqueInput[]
    disconnect?: AccountBookCategoryWhereUniqueInput | AccountBookCategoryWhereUniqueInput[]
    delete?: AccountBookCategoryWhereUniqueInput | AccountBookCategoryWhereUniqueInput[]
    connect?: AccountBookCategoryWhereUniqueInput | AccountBookCategoryWhereUniqueInput[]
    update?: AccountBookCategoryUpdateWithWhereUniqueWithoutAccountBookCategoryImageInput | AccountBookCategoryUpdateWithWhereUniqueWithoutAccountBookCategoryImageInput[]
    updateMany?: AccountBookCategoryUpdateManyWithWhereWithoutAccountBookCategoryImageInput | AccountBookCategoryUpdateManyWithWhereWithoutAccountBookCategoryImageInput[]
    deleteMany?: AccountBookCategoryScalarWhereInput | AccountBookCategoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBucketListsInput = {
    create?: XOR<UserCreateWithoutBucketListsInput, UserUncheckedCreateWithoutBucketListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBucketListsInput
    connect?: UserWhereUniqueInput
  }

  export type TodoCreateNestedManyWithoutBucketListInput = {
    create?: XOR<TodoCreateWithoutBucketListInput, TodoUncheckedCreateWithoutBucketListInput> | TodoCreateWithoutBucketListInput[] | TodoUncheckedCreateWithoutBucketListInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutBucketListInput | TodoCreateOrConnectWithoutBucketListInput[]
    createMany?: TodoCreateManyBucketListInputEnvelope
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
  }

  export type TodoUncheckedCreateNestedManyWithoutBucketListInput = {
    create?: XOR<TodoCreateWithoutBucketListInput, TodoUncheckedCreateWithoutBucketListInput> | TodoCreateWithoutBucketListInput[] | TodoUncheckedCreateWithoutBucketListInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutBucketListInput | TodoCreateOrConnectWithoutBucketListInput[]
    createMany?: TodoCreateManyBucketListInputEnvelope
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutBucketListsNestedInput = {
    create?: XOR<UserCreateWithoutBucketListsInput, UserUncheckedCreateWithoutBucketListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBucketListsInput
    upsert?: UserUpsertWithoutBucketListsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBucketListsInput, UserUpdateWithoutBucketListsInput>, UserUncheckedUpdateWithoutBucketListsInput>
  }

  export type TodoUpdateManyWithoutBucketListNestedInput = {
    create?: XOR<TodoCreateWithoutBucketListInput, TodoUncheckedCreateWithoutBucketListInput> | TodoCreateWithoutBucketListInput[] | TodoUncheckedCreateWithoutBucketListInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutBucketListInput | TodoCreateOrConnectWithoutBucketListInput[]
    upsert?: TodoUpsertWithWhereUniqueWithoutBucketListInput | TodoUpsertWithWhereUniqueWithoutBucketListInput[]
    createMany?: TodoCreateManyBucketListInputEnvelope
    set?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    disconnect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    delete?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    update?: TodoUpdateWithWhereUniqueWithoutBucketListInput | TodoUpdateWithWhereUniqueWithoutBucketListInput[]
    updateMany?: TodoUpdateManyWithWhereWithoutBucketListInput | TodoUpdateManyWithWhereWithoutBucketListInput[]
    deleteMany?: TodoScalarWhereInput | TodoScalarWhereInput[]
  }

  export type TodoUncheckedUpdateManyWithoutBucketListNestedInput = {
    create?: XOR<TodoCreateWithoutBucketListInput, TodoUncheckedCreateWithoutBucketListInput> | TodoCreateWithoutBucketListInput[] | TodoUncheckedCreateWithoutBucketListInput[]
    connectOrCreate?: TodoCreateOrConnectWithoutBucketListInput | TodoCreateOrConnectWithoutBucketListInput[]
    upsert?: TodoUpsertWithWhereUniqueWithoutBucketListInput | TodoUpsertWithWhereUniqueWithoutBucketListInput[]
    createMany?: TodoCreateManyBucketListInputEnvelope
    set?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    disconnect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    delete?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    connect?: TodoWhereUniqueInput | TodoWhereUniqueInput[]
    update?: TodoUpdateWithWhereUniqueWithoutBucketListInput | TodoUpdateWithWhereUniqueWithoutBucketListInput[]
    updateMany?: TodoUpdateManyWithWhereWithoutBucketListInput | TodoUpdateManyWithWhereWithoutBucketListInput[]
    deleteMany?: TodoScalarWhereInput | TodoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRegularExpendituresInput = {
    create?: XOR<UserCreateWithoutRegularExpendituresInput, UserUncheckedCreateWithoutRegularExpendituresInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegularExpendituresInput
    connect?: UserWhereUniqueInput
  }

  export type AccountBookCategoryCreateNestedOneWithoutRegularExpendituresInput = {
    create?: XOR<AccountBookCategoryCreateWithoutRegularExpendituresInput, AccountBookCategoryUncheckedCreateWithoutRegularExpendituresInput>
    connectOrCreate?: AccountBookCategoryCreateOrConnectWithoutRegularExpendituresInput
    connect?: AccountBookCategoryWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRegularExpendituresNestedInput = {
    create?: XOR<UserCreateWithoutRegularExpendituresInput, UserUncheckedCreateWithoutRegularExpendituresInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegularExpendituresInput
    upsert?: UserUpsertWithoutRegularExpendituresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRegularExpendituresInput, UserUpdateWithoutRegularExpendituresInput>, UserUncheckedUpdateWithoutRegularExpendituresInput>
  }

  export type AccountBookCategoryUpdateOneRequiredWithoutRegularExpendituresNestedInput = {
    create?: XOR<AccountBookCategoryCreateWithoutRegularExpendituresInput, AccountBookCategoryUncheckedCreateWithoutRegularExpendituresInput>
    connectOrCreate?: AccountBookCategoryCreateOrConnectWithoutRegularExpendituresInput
    upsert?: AccountBookCategoryUpsertWithoutRegularExpendituresInput
    connect?: AccountBookCategoryWhereUniqueInput
    update?: XOR<XOR<AccountBookCategoryUpdateToOneWithWhereWithoutRegularExpendituresInput, AccountBookCategoryUpdateWithoutRegularExpendituresInput>, AccountBookCategoryUncheckedUpdateWithoutRegularExpendituresInput>
  }

  export type UserCreateNestedOneWithoutTodosInput = {
    create?: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
    connectOrCreate?: UserCreateOrConnectWithoutTodosInput
    connect?: UserWhereUniqueInput
  }

  export type BucketListCreateNestedOneWithoutTodoListInput = {
    create?: XOR<BucketListCreateWithoutTodoListInput, BucketListUncheckedCreateWithoutTodoListInput>
    connectOrCreate?: BucketListCreateOrConnectWithoutTodoListInput
    connect?: BucketListWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTodosNestedInput = {
    create?: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
    connectOrCreate?: UserCreateOrConnectWithoutTodosInput
    upsert?: UserUpsertWithoutTodosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTodosInput, UserUpdateWithoutTodosInput>, UserUncheckedUpdateWithoutTodosInput>
  }

  export type BucketListUpdateOneRequiredWithoutTodoListNestedInput = {
    create?: XOR<BucketListCreateWithoutTodoListInput, BucketListUncheckedCreateWithoutTodoListInput>
    connectOrCreate?: BucketListCreateOrConnectWithoutTodoListInput
    upsert?: BucketListUpsertWithoutTodoListInput
    connect?: BucketListWhereUniqueInput
    update?: XOR<XOR<BucketListUpdateToOneWithWhereWithoutTodoListInput, BucketListUpdateWithoutTodoListInput>, BucketListUncheckedUpdateWithoutTodoListInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAccountBookCategoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountBookCategoryType | EnumAccountBookCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountBookCategoryType[]
    notIn?: $Enums.AccountBookCategoryType[]
    not?: NestedEnumAccountBookCategoryTypeFilter<$PrismaModel> | $Enums.AccountBookCategoryType
  }

  export type NestedEnumAccountBookCategoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountBookCategoryType | EnumAccountBookCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountBookCategoryType[]
    notIn?: $Enums.AccountBookCategoryType[]
    not?: NestedEnumAccountBookCategoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountBookCategoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountBookCategoryTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountBookCategoryTypeFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    taxType: string
    regularTransferDate: number
    rate: number
    title: string
    amount: number
    currentAmount: number
    isExpiration: boolean
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    savingType: SavingTypeCreateNestedOneWithoutAccountsInput
    deposits?: DepositCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: number
    taxType: string
    regularTransferDate: number
    rate: number
    title: string
    amount: number
    currentAmount: number
    isExpiration: boolean
    startDate: Date | string
    endDate: Date | string
    savingTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deposits?: DepositUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BucketListCreateWithoutUserInput = {
    isComplete: boolean
    title: string
    description: string
    completeDate: Date | string
    thumbImageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todoList?: TodoCreateNestedManyWithoutBucketListInput
  }

  export type BucketListUncheckedCreateWithoutUserInput = {
    isComplete: boolean
    id?: number
    title: string
    description: string
    completeDate: Date | string
    thumbImageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    todoList?: TodoUncheckedCreateNestedManyWithoutBucketListInput
  }

  export type BucketListCreateOrConnectWithoutUserInput = {
    where: BucketListWhereUniqueInput
    create: XOR<BucketListCreateWithoutUserInput, BucketListUncheckedCreateWithoutUserInput>
  }

  export type BucketListCreateManyUserInputEnvelope = {
    data: BucketListCreateManyUserInput | BucketListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DepositCreateWithoutUserInput = {
    amount: number
    prevTotalAmount: number
    depositDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    account: AccountCreateNestedOneWithoutDepositsInput
  }

  export type DepositUncheckedCreateWithoutUserInput = {
    id?: number
    amount: number
    prevTotalAmount: number
    accountId: number
    depositDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepositCreateOrConnectWithoutUserInput = {
    where: DepositWhereUniqueInput
    create: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput>
  }

  export type DepositCreateManyUserInputEnvelope = {
    data: DepositCreateManyUserInput | DepositCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TodoCreateWithoutUserInput = {
    isComplete: boolean
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bucketList: BucketListCreateNestedOneWithoutTodoListInput
  }

  export type TodoUncheckedCreateWithoutUserInput = {
    id?: number
    isComplete: boolean
    title: string
    bucketListId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoCreateOrConnectWithoutUserInput = {
    where: TodoWhereUniqueInput
    create: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput>
  }

  export type TodoCreateManyUserInputEnvelope = {
    data: TodoCreateManyUserInput | TodoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountBookCreateWithoutUserInput = {
    title: string
    amount: number
    memo: string
    type: $Enums.AccountBookCategoryType
    isRegularExpenditure: boolean
    registerDateTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountBookCategory: AccountBookCategoryCreateNestedOneWithoutAccountBooksInput
  }

  export type AccountBookUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    amount: number
    memo: string
    type: $Enums.AccountBookCategoryType
    isRegularExpenditure: boolean
    registerDateTime: Date | string
    accountBookCategoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountBookCreateOrConnectWithoutUserInput = {
    where: AccountBookWhereUniqueInput
    create: XOR<AccountBookCreateWithoutUserInput, AccountBookUncheckedCreateWithoutUserInput>
  }

  export type AccountBookCreateManyUserInputEnvelope = {
    data: AccountBookCreateManyUserInput | AccountBookCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountBookCategoryCreateWithoutUserInput = {
    name: string
    delYn: boolean
    type: $Enums.AccountBookCategoryType
    useStatistic: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accountBooks?: AccountBookCreateNestedManyWithoutAccountBookCategoryInput
    RegularExpenditures?: RegularExpenditureCreateNestedManyWithoutAccountBookCategoryInput
    accountBookCategoryImage: AccountBookCategoryImageCreateNestedOneWithoutAccountBookCategorysInput
  }

  export type AccountBookCategoryUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    delYn: boolean
    type: $Enums.AccountBookCategoryType
    useStatistic: boolean
    accountBookCategoryImageId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    accountBooks?: AccountBookUncheckedCreateNestedManyWithoutAccountBookCategoryInput
    RegularExpenditures?: RegularExpenditureUncheckedCreateNestedManyWithoutAccountBookCategoryInput
  }

  export type AccountBookCategoryCreateOrConnectWithoutUserInput = {
    where: AccountBookCategoryWhereUniqueInput
    create: XOR<AccountBookCategoryCreateWithoutUserInput, AccountBookCategoryUncheckedCreateWithoutUserInput>
  }

  export type AccountBookCategoryCreateManyUserInputEnvelope = {
    data: AccountBookCategoryCreateManyUserInput | AccountBookCategoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountBookCategoryImageCreateWithoutUserInput = {
    name: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountBookCategorys?: AccountBookCategoryCreateNestedManyWithoutAccountBookCategoryImageInput
  }

  export type AccountBookCategoryImageUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accountBookCategorys?: AccountBookCategoryUncheckedCreateNestedManyWithoutAccountBookCategoryImageInput
  }

  export type AccountBookCategoryImageCreateOrConnectWithoutUserInput = {
    where: AccountBookCategoryImageWhereUniqueInput
    create: XOR<AccountBookCategoryImageCreateWithoutUserInput, AccountBookCategoryImageUncheckedCreateWithoutUserInput>
  }

  export type AccountBookCategoryImageCreateManyUserInputEnvelope = {
    data: AccountBookCategoryImageCreateManyUserInput | AccountBookCategoryImageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RegularExpenditureCreateWithoutUserInput = {
    amount: number
    regularDate: number
    title: string
    isAutoExpenditure: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accountBookCategory: AccountBookCategoryCreateNestedOneWithoutRegularExpendituresInput
  }

  export type RegularExpenditureUncheckedCreateWithoutUserInput = {
    id?: number
    amount: number
    regularDate: number
    title: string
    isAutoExpenditure: boolean
    accountBookCategoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegularExpenditureCreateOrConnectWithoutUserInput = {
    where: RegularExpenditureWhereUniqueInput
    create: XOR<RegularExpenditureCreateWithoutUserInput, RegularExpenditureUncheckedCreateWithoutUserInput>
  }

  export type RegularExpenditureCreateManyUserInputEnvelope = {
    data: RegularExpenditureCreateManyUserInput | RegularExpenditureCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: IntFilter<"Account"> | number
    taxType?: StringFilter<"Account"> | string
    regularTransferDate?: IntFilter<"Account"> | number
    rate?: FloatFilter<"Account"> | number
    title?: StringFilter<"Account"> | string
    amount?: IntFilter<"Account"> | number
    currentAmount?: IntFilter<"Account"> | number
    userId?: IntFilter<"Account"> | number
    isExpiration?: BoolFilter<"Account"> | boolean
    startDate?: DateTimeFilter<"Account"> | Date | string
    endDate?: DateTimeFilter<"Account"> | Date | string
    savingTypeId?: IntFilter<"Account"> | number
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type BucketListUpsertWithWhereUniqueWithoutUserInput = {
    where: BucketListWhereUniqueInput
    update: XOR<BucketListUpdateWithoutUserInput, BucketListUncheckedUpdateWithoutUserInput>
    create: XOR<BucketListCreateWithoutUserInput, BucketListUncheckedCreateWithoutUserInput>
  }

  export type BucketListUpdateWithWhereUniqueWithoutUserInput = {
    where: BucketListWhereUniqueInput
    data: XOR<BucketListUpdateWithoutUserInput, BucketListUncheckedUpdateWithoutUserInput>
  }

  export type BucketListUpdateManyWithWhereWithoutUserInput = {
    where: BucketListScalarWhereInput
    data: XOR<BucketListUpdateManyMutationInput, BucketListUncheckedUpdateManyWithoutUserInput>
  }

  export type BucketListScalarWhereInput = {
    AND?: BucketListScalarWhereInput | BucketListScalarWhereInput[]
    OR?: BucketListScalarWhereInput[]
    NOT?: BucketListScalarWhereInput | BucketListScalarWhereInput[]
    isComplete?: BoolFilter<"BucketList"> | boolean
    id?: IntFilter<"BucketList"> | number
    title?: StringFilter<"BucketList"> | string
    description?: StringFilter<"BucketList"> | string
    userId?: IntFilter<"BucketList"> | number
    completeDate?: DateTimeFilter<"BucketList"> | Date | string
    thumbImageUrl?: StringFilter<"BucketList"> | string
    createdAt?: DateTimeFilter<"BucketList"> | Date | string
    updatedAt?: DateTimeFilter<"BucketList"> | Date | string
  }

  export type DepositUpsertWithWhereUniqueWithoutUserInput = {
    where: DepositWhereUniqueInput
    update: XOR<DepositUpdateWithoutUserInput, DepositUncheckedUpdateWithoutUserInput>
    create: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput>
  }

  export type DepositUpdateWithWhereUniqueWithoutUserInput = {
    where: DepositWhereUniqueInput
    data: XOR<DepositUpdateWithoutUserInput, DepositUncheckedUpdateWithoutUserInput>
  }

  export type DepositUpdateManyWithWhereWithoutUserInput = {
    where: DepositScalarWhereInput
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyWithoutUserInput>
  }

  export type DepositScalarWhereInput = {
    AND?: DepositScalarWhereInput | DepositScalarWhereInput[]
    OR?: DepositScalarWhereInput[]
    NOT?: DepositScalarWhereInput | DepositScalarWhereInput[]
    id?: IntFilter<"Deposit"> | number
    amount?: IntFilter<"Deposit"> | number
    prevTotalAmount?: IntFilter<"Deposit"> | number
    userId?: IntFilter<"Deposit"> | number
    accountId?: IntFilter<"Deposit"> | number
    depositDate?: DateTimeFilter<"Deposit"> | Date | string
    createdAt?: DateTimeFilter<"Deposit"> | Date | string
    updatedAt?: DateTimeFilter<"Deposit"> | Date | string
  }

  export type TodoUpsertWithWhereUniqueWithoutUserInput = {
    where: TodoWhereUniqueInput
    update: XOR<TodoUpdateWithoutUserInput, TodoUncheckedUpdateWithoutUserInput>
    create: XOR<TodoCreateWithoutUserInput, TodoUncheckedCreateWithoutUserInput>
  }

  export type TodoUpdateWithWhereUniqueWithoutUserInput = {
    where: TodoWhereUniqueInput
    data: XOR<TodoUpdateWithoutUserInput, TodoUncheckedUpdateWithoutUserInput>
  }

  export type TodoUpdateManyWithWhereWithoutUserInput = {
    where: TodoScalarWhereInput
    data: XOR<TodoUpdateManyMutationInput, TodoUncheckedUpdateManyWithoutUserInput>
  }

  export type TodoScalarWhereInput = {
    AND?: TodoScalarWhereInput | TodoScalarWhereInput[]
    OR?: TodoScalarWhereInput[]
    NOT?: TodoScalarWhereInput | TodoScalarWhereInput[]
    id?: IntFilter<"Todo"> | number
    isComplete?: BoolFilter<"Todo"> | boolean
    userId?: IntFilter<"Todo"> | number
    title?: StringFilter<"Todo"> | string
    bucketListId?: IntFilter<"Todo"> | number
    createdAt?: DateTimeFilter<"Todo"> | Date | string
    updatedAt?: DateTimeFilter<"Todo"> | Date | string
  }

  export type AccountBookUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountBookWhereUniqueInput
    update: XOR<AccountBookUpdateWithoutUserInput, AccountBookUncheckedUpdateWithoutUserInput>
    create: XOR<AccountBookCreateWithoutUserInput, AccountBookUncheckedCreateWithoutUserInput>
  }

  export type AccountBookUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountBookWhereUniqueInput
    data: XOR<AccountBookUpdateWithoutUserInput, AccountBookUncheckedUpdateWithoutUserInput>
  }

  export type AccountBookUpdateManyWithWhereWithoutUserInput = {
    where: AccountBookScalarWhereInput
    data: XOR<AccountBookUpdateManyMutationInput, AccountBookUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountBookScalarWhereInput = {
    AND?: AccountBookScalarWhereInput | AccountBookScalarWhereInput[]
    OR?: AccountBookScalarWhereInput[]
    NOT?: AccountBookScalarWhereInput | AccountBookScalarWhereInput[]
    id?: IntFilter<"AccountBook"> | number
    title?: StringFilter<"AccountBook"> | string
    amount?: IntFilter<"AccountBook"> | number
    memo?: StringFilter<"AccountBook"> | string
    type?: EnumAccountBookCategoryTypeFilter<"AccountBook"> | $Enums.AccountBookCategoryType
    isRegularExpenditure?: BoolFilter<"AccountBook"> | boolean
    registerDateTime?: DateTimeFilter<"AccountBook"> | Date | string
    userId?: IntFilter<"AccountBook"> | number
    accountBookCategoryId?: IntFilter<"AccountBook"> | number
    createdAt?: DateTimeFilter<"AccountBook"> | Date | string
    updatedAt?: DateTimeFilter<"AccountBook"> | Date | string
  }

  export type AccountBookCategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountBookCategoryWhereUniqueInput
    update: XOR<AccountBookCategoryUpdateWithoutUserInput, AccountBookCategoryUncheckedUpdateWithoutUserInput>
    create: XOR<AccountBookCategoryCreateWithoutUserInput, AccountBookCategoryUncheckedCreateWithoutUserInput>
  }

  export type AccountBookCategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountBookCategoryWhereUniqueInput
    data: XOR<AccountBookCategoryUpdateWithoutUserInput, AccountBookCategoryUncheckedUpdateWithoutUserInput>
  }

  export type AccountBookCategoryUpdateManyWithWhereWithoutUserInput = {
    where: AccountBookCategoryScalarWhereInput
    data: XOR<AccountBookCategoryUpdateManyMutationInput, AccountBookCategoryUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountBookCategoryScalarWhereInput = {
    AND?: AccountBookCategoryScalarWhereInput | AccountBookCategoryScalarWhereInput[]
    OR?: AccountBookCategoryScalarWhereInput[]
    NOT?: AccountBookCategoryScalarWhereInput | AccountBookCategoryScalarWhereInput[]
    id?: IntFilter<"AccountBookCategory"> | number
    name?: StringFilter<"AccountBookCategory"> | string
    delYn?: BoolFilter<"AccountBookCategory"> | boolean
    type?: EnumAccountBookCategoryTypeFilter<"AccountBookCategory"> | $Enums.AccountBookCategoryType
    useStatistic?: BoolFilter<"AccountBookCategory"> | boolean
    userId?: IntFilter<"AccountBookCategory"> | number
    accountBookCategoryImageId?: IntFilter<"AccountBookCategory"> | number
    createdAt?: DateTimeFilter<"AccountBookCategory"> | Date | string
    updatedAt?: DateTimeFilter<"AccountBookCategory"> | Date | string
  }

  export type AccountBookCategoryImageUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountBookCategoryImageWhereUniqueInput
    update: XOR<AccountBookCategoryImageUpdateWithoutUserInput, AccountBookCategoryImageUncheckedUpdateWithoutUserInput>
    create: XOR<AccountBookCategoryImageCreateWithoutUserInput, AccountBookCategoryImageUncheckedCreateWithoutUserInput>
  }

  export type AccountBookCategoryImageUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountBookCategoryImageWhereUniqueInput
    data: XOR<AccountBookCategoryImageUpdateWithoutUserInput, AccountBookCategoryImageUncheckedUpdateWithoutUserInput>
  }

  export type AccountBookCategoryImageUpdateManyWithWhereWithoutUserInput = {
    where: AccountBookCategoryImageScalarWhereInput
    data: XOR<AccountBookCategoryImageUpdateManyMutationInput, AccountBookCategoryImageUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountBookCategoryImageScalarWhereInput = {
    AND?: AccountBookCategoryImageScalarWhereInput | AccountBookCategoryImageScalarWhereInput[]
    OR?: AccountBookCategoryImageScalarWhereInput[]
    NOT?: AccountBookCategoryImageScalarWhereInput | AccountBookCategoryImageScalarWhereInput[]
    id?: IntFilter<"AccountBookCategoryImage"> | number
    name?: StringFilter<"AccountBookCategoryImage"> | string
    imageUrl?: StringFilter<"AccountBookCategoryImage"> | string
    userId?: IntFilter<"AccountBookCategoryImage"> | number
    createdAt?: DateTimeFilter<"AccountBookCategoryImage"> | Date | string
    updatedAt?: DateTimeFilter<"AccountBookCategoryImage"> | Date | string
  }

  export type RegularExpenditureUpsertWithWhereUniqueWithoutUserInput = {
    where: RegularExpenditureWhereUniqueInput
    update: XOR<RegularExpenditureUpdateWithoutUserInput, RegularExpenditureUncheckedUpdateWithoutUserInput>
    create: XOR<RegularExpenditureCreateWithoutUserInput, RegularExpenditureUncheckedCreateWithoutUserInput>
  }

  export type RegularExpenditureUpdateWithWhereUniqueWithoutUserInput = {
    where: RegularExpenditureWhereUniqueInput
    data: XOR<RegularExpenditureUpdateWithoutUserInput, RegularExpenditureUncheckedUpdateWithoutUserInput>
  }

  export type RegularExpenditureUpdateManyWithWhereWithoutUserInput = {
    where: RegularExpenditureScalarWhereInput
    data: XOR<RegularExpenditureUpdateManyMutationInput, RegularExpenditureUncheckedUpdateManyWithoutUserInput>
  }

  export type RegularExpenditureScalarWhereInput = {
    AND?: RegularExpenditureScalarWhereInput | RegularExpenditureScalarWhereInput[]
    OR?: RegularExpenditureScalarWhereInput[]
    NOT?: RegularExpenditureScalarWhereInput | RegularExpenditureScalarWhereInput[]
    id?: IntFilter<"RegularExpenditure"> | number
    amount?: IntFilter<"RegularExpenditure"> | number
    regularDate?: IntFilter<"RegularExpenditure"> | number
    title?: StringFilter<"RegularExpenditure"> | string
    isAutoExpenditure?: BoolFilter<"RegularExpenditure"> | boolean
    userId?: IntFilter<"RegularExpenditure"> | number
    accountBookCategoryId?: IntFilter<"RegularExpenditure"> | number
    createdAt?: DateTimeFilter<"RegularExpenditure"> | Date | string
    updatedAt?: DateTimeFilter<"RegularExpenditure"> | Date | string
  }

  export type AccountCreateWithoutSavingTypeInput = {
    taxType: string
    regularTransferDate: number
    rate: number
    title: string
    amount: number
    currentAmount: number
    isExpiration: boolean
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
    deposits?: DepositCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutSavingTypeInput = {
    id?: number
    taxType: string
    regularTransferDate: number
    rate: number
    title: string
    amount: number
    currentAmount: number
    userId: number
    isExpiration: boolean
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deposits?: DepositUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutSavingTypeInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutSavingTypeInput, AccountUncheckedCreateWithoutSavingTypeInput>
  }

  export type AccountCreateManySavingTypeInputEnvelope = {
    data: AccountCreateManySavingTypeInput | AccountCreateManySavingTypeInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutSavingTypeInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutSavingTypeInput, AccountUncheckedUpdateWithoutSavingTypeInput>
    create: XOR<AccountCreateWithoutSavingTypeInput, AccountUncheckedCreateWithoutSavingTypeInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutSavingTypeInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutSavingTypeInput, AccountUncheckedUpdateWithoutSavingTypeInput>
  }

  export type AccountUpdateManyWithWhereWithoutSavingTypeInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutSavingTypeInput>
  }

  export type UserCreateWithoutAccountsInput = {
    name: string
    email: string
    password: string
    loginType: string
    socialId: string
    profileImg: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bucketLists?: BucketListCreateNestedManyWithoutUserInput
    deposits?: DepositCreateNestedManyWithoutUserInput
    todos?: TodoCreateNestedManyWithoutUserInput
    accountBooks?: AccountBookCreateNestedManyWithoutUserInput
    accountBookCategories?: AccountBookCategoryCreateNestedManyWithoutUserInput
    accountBookCategoryImages?: AccountBookCategoryImageCreateNestedManyWithoutUserInput
    regularExpenditures?: RegularExpenditureCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: number
    name: string
    email: string
    password: string
    loginType: string
    socialId: string
    profileImg: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bucketLists?: BucketListUncheckedCreateNestedManyWithoutUserInput
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
    accountBooks?: AccountBookUncheckedCreateNestedManyWithoutUserInput
    accountBookCategories?: AccountBookCategoryUncheckedCreateNestedManyWithoutUserInput
    accountBookCategoryImages?: AccountBookCategoryImageUncheckedCreateNestedManyWithoutUserInput
    regularExpenditures?: RegularExpenditureUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type SavingTypeCreateWithoutAccountsInput = {
    name: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavingTypeUncheckedCreateWithoutAccountsInput = {
    id?: number
    name: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavingTypeCreateOrConnectWithoutAccountsInput = {
    where: SavingTypeWhereUniqueInput
    create: XOR<SavingTypeCreateWithoutAccountsInput, SavingTypeUncheckedCreateWithoutAccountsInput>
  }

  export type DepositCreateWithoutAccountInput = {
    amount: number
    prevTotalAmount: number
    depositDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDepositsInput
  }

  export type DepositUncheckedCreateWithoutAccountInput = {
    id?: number
    amount: number
    prevTotalAmount: number
    userId: number
    depositDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepositCreateOrConnectWithoutAccountInput = {
    where: DepositWhereUniqueInput
    create: XOR<DepositCreateWithoutAccountInput, DepositUncheckedCreateWithoutAccountInput>
  }

  export type DepositCreateManyAccountInputEnvelope = {
    data: DepositCreateManyAccountInput | DepositCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    socialId?: StringFieldUpdateOperationsInput | string
    profileImg?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bucketLists?: BucketListUpdateManyWithoutUserNestedInput
    deposits?: DepositUpdateManyWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutUserNestedInput
    accountBooks?: AccountBookUpdateManyWithoutUserNestedInput
    accountBookCategories?: AccountBookCategoryUpdateManyWithoutUserNestedInput
    accountBookCategoryImages?: AccountBookCategoryImageUpdateManyWithoutUserNestedInput
    regularExpenditures?: RegularExpenditureUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    socialId?: StringFieldUpdateOperationsInput | string
    profileImg?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bucketLists?: BucketListUncheckedUpdateManyWithoutUserNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
    accountBooks?: AccountBookUncheckedUpdateManyWithoutUserNestedInput
    accountBookCategories?: AccountBookCategoryUncheckedUpdateManyWithoutUserNestedInput
    accountBookCategoryImages?: AccountBookCategoryImageUncheckedUpdateManyWithoutUserNestedInput
    regularExpenditures?: RegularExpenditureUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SavingTypeUpsertWithoutAccountsInput = {
    update: XOR<SavingTypeUpdateWithoutAccountsInput, SavingTypeUncheckedUpdateWithoutAccountsInput>
    create: XOR<SavingTypeCreateWithoutAccountsInput, SavingTypeUncheckedCreateWithoutAccountsInput>
    where?: SavingTypeWhereInput
  }

  export type SavingTypeUpdateToOneWithWhereWithoutAccountsInput = {
    where?: SavingTypeWhereInput
    data: XOR<SavingTypeUpdateWithoutAccountsInput, SavingTypeUncheckedUpdateWithoutAccountsInput>
  }

  export type SavingTypeUpdateWithoutAccountsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavingTypeUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUpsertWithWhereUniqueWithoutAccountInput = {
    where: DepositWhereUniqueInput
    update: XOR<DepositUpdateWithoutAccountInput, DepositUncheckedUpdateWithoutAccountInput>
    create: XOR<DepositCreateWithoutAccountInput, DepositUncheckedCreateWithoutAccountInput>
  }

  export type DepositUpdateWithWhereUniqueWithoutAccountInput = {
    where: DepositWhereUniqueInput
    data: XOR<DepositUpdateWithoutAccountInput, DepositUncheckedUpdateWithoutAccountInput>
  }

  export type DepositUpdateManyWithWhereWithoutAccountInput = {
    where: DepositScalarWhereInput
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyWithoutAccountInput>
  }

  export type UserCreateWithoutAccountBooksInput = {
    name: string
    email: string
    password: string
    loginType: string
    socialId: string
    profileImg: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    bucketLists?: BucketListCreateNestedManyWithoutUserInput
    deposits?: DepositCreateNestedManyWithoutUserInput
    todos?: TodoCreateNestedManyWithoutUserInput
    accountBookCategories?: AccountBookCategoryCreateNestedManyWithoutUserInput
    accountBookCategoryImages?: AccountBookCategoryImageCreateNestedManyWithoutUserInput
    regularExpenditures?: RegularExpenditureCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountBooksInput = {
    id?: number
    name: string
    email: string
    password: string
    loginType: string
    socialId: string
    profileImg: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    bucketLists?: BucketListUncheckedCreateNestedManyWithoutUserInput
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
    accountBookCategories?: AccountBookCategoryUncheckedCreateNestedManyWithoutUserInput
    accountBookCategoryImages?: AccountBookCategoryImageUncheckedCreateNestedManyWithoutUserInput
    regularExpenditures?: RegularExpenditureUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountBooksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountBooksInput, UserUncheckedCreateWithoutAccountBooksInput>
  }

  export type AccountBookCategoryCreateWithoutAccountBooksInput = {
    name: string
    delYn: boolean
    type: $Enums.AccountBookCategoryType
    useStatistic: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountBookCategoriesInput
    RegularExpenditures?: RegularExpenditureCreateNestedManyWithoutAccountBookCategoryInput
    accountBookCategoryImage: AccountBookCategoryImageCreateNestedOneWithoutAccountBookCategorysInput
  }

  export type AccountBookCategoryUncheckedCreateWithoutAccountBooksInput = {
    id?: number
    name: string
    delYn: boolean
    type: $Enums.AccountBookCategoryType
    useStatistic: boolean
    userId: number
    accountBookCategoryImageId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    RegularExpenditures?: RegularExpenditureUncheckedCreateNestedManyWithoutAccountBookCategoryInput
  }

  export type AccountBookCategoryCreateOrConnectWithoutAccountBooksInput = {
    where: AccountBookCategoryWhereUniqueInput
    create: XOR<AccountBookCategoryCreateWithoutAccountBooksInput, AccountBookCategoryUncheckedCreateWithoutAccountBooksInput>
  }

  export type UserUpsertWithoutAccountBooksInput = {
    update: XOR<UserUpdateWithoutAccountBooksInput, UserUncheckedUpdateWithoutAccountBooksInput>
    create: XOR<UserCreateWithoutAccountBooksInput, UserUncheckedCreateWithoutAccountBooksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountBooksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountBooksInput, UserUncheckedUpdateWithoutAccountBooksInput>
  }

  export type UserUpdateWithoutAccountBooksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    socialId?: StringFieldUpdateOperationsInput | string
    profileImg?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    bucketLists?: BucketListUpdateManyWithoutUserNestedInput
    deposits?: DepositUpdateManyWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutUserNestedInput
    accountBookCategories?: AccountBookCategoryUpdateManyWithoutUserNestedInput
    accountBookCategoryImages?: AccountBookCategoryImageUpdateManyWithoutUserNestedInput
    regularExpenditures?: RegularExpenditureUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    socialId?: StringFieldUpdateOperationsInput | string
    profileImg?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    bucketLists?: BucketListUncheckedUpdateManyWithoutUserNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
    accountBookCategories?: AccountBookCategoryUncheckedUpdateManyWithoutUserNestedInput
    accountBookCategoryImages?: AccountBookCategoryImageUncheckedUpdateManyWithoutUserNestedInput
    regularExpenditures?: RegularExpenditureUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountBookCategoryUpsertWithoutAccountBooksInput = {
    update: XOR<AccountBookCategoryUpdateWithoutAccountBooksInput, AccountBookCategoryUncheckedUpdateWithoutAccountBooksInput>
    create: XOR<AccountBookCategoryCreateWithoutAccountBooksInput, AccountBookCategoryUncheckedCreateWithoutAccountBooksInput>
    where?: AccountBookCategoryWhereInput
  }

  export type AccountBookCategoryUpdateToOneWithWhereWithoutAccountBooksInput = {
    where?: AccountBookCategoryWhereInput
    data: XOR<AccountBookCategoryUpdateWithoutAccountBooksInput, AccountBookCategoryUncheckedUpdateWithoutAccountBooksInput>
  }

  export type AccountBookCategoryUpdateWithoutAccountBooksInput = {
    name?: StringFieldUpdateOperationsInput | string
    delYn?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    useStatistic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountBookCategoriesNestedInput
    RegularExpenditures?: RegularExpenditureUpdateManyWithoutAccountBookCategoryNestedInput
    accountBookCategoryImage?: AccountBookCategoryImageUpdateOneRequiredWithoutAccountBookCategorysNestedInput
  }

  export type AccountBookCategoryUncheckedUpdateWithoutAccountBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    delYn?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    useStatistic?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    accountBookCategoryImageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RegularExpenditures?: RegularExpenditureUncheckedUpdateManyWithoutAccountBookCategoryNestedInput
  }

  export type UserCreateWithoutAccountBookCategoriesInput = {
    name: string
    email: string
    password: string
    loginType: string
    socialId: string
    profileImg: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    bucketLists?: BucketListCreateNestedManyWithoutUserInput
    deposits?: DepositCreateNestedManyWithoutUserInput
    todos?: TodoCreateNestedManyWithoutUserInput
    accountBooks?: AccountBookCreateNestedManyWithoutUserInput
    accountBookCategoryImages?: AccountBookCategoryImageCreateNestedManyWithoutUserInput
    regularExpenditures?: RegularExpenditureCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountBookCategoriesInput = {
    id?: number
    name: string
    email: string
    password: string
    loginType: string
    socialId: string
    profileImg: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    bucketLists?: BucketListUncheckedCreateNestedManyWithoutUserInput
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
    accountBooks?: AccountBookUncheckedCreateNestedManyWithoutUserInput
    accountBookCategoryImages?: AccountBookCategoryImageUncheckedCreateNestedManyWithoutUserInput
    regularExpenditures?: RegularExpenditureUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountBookCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountBookCategoriesInput, UserUncheckedCreateWithoutAccountBookCategoriesInput>
  }

  export type AccountBookCreateWithoutAccountBookCategoryInput = {
    title: string
    amount: number
    memo: string
    type: $Enums.AccountBookCategoryType
    isRegularExpenditure: boolean
    registerDateTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountBooksInput
  }

  export type AccountBookUncheckedCreateWithoutAccountBookCategoryInput = {
    id?: number
    title: string
    amount: number
    memo: string
    type: $Enums.AccountBookCategoryType
    isRegularExpenditure: boolean
    registerDateTime: Date | string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountBookCreateOrConnectWithoutAccountBookCategoryInput = {
    where: AccountBookWhereUniqueInput
    create: XOR<AccountBookCreateWithoutAccountBookCategoryInput, AccountBookUncheckedCreateWithoutAccountBookCategoryInput>
  }

  export type AccountBookCreateManyAccountBookCategoryInputEnvelope = {
    data: AccountBookCreateManyAccountBookCategoryInput | AccountBookCreateManyAccountBookCategoryInput[]
    skipDuplicates?: boolean
  }

  export type RegularExpenditureCreateWithoutAccountBookCategoryInput = {
    amount: number
    regularDate: number
    title: string
    isAutoExpenditure: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRegularExpendituresInput
  }

  export type RegularExpenditureUncheckedCreateWithoutAccountBookCategoryInput = {
    id?: number
    amount: number
    regularDate: number
    title: string
    isAutoExpenditure: boolean
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegularExpenditureCreateOrConnectWithoutAccountBookCategoryInput = {
    where: RegularExpenditureWhereUniqueInput
    create: XOR<RegularExpenditureCreateWithoutAccountBookCategoryInput, RegularExpenditureUncheckedCreateWithoutAccountBookCategoryInput>
  }

  export type RegularExpenditureCreateManyAccountBookCategoryInputEnvelope = {
    data: RegularExpenditureCreateManyAccountBookCategoryInput | RegularExpenditureCreateManyAccountBookCategoryInput[]
    skipDuplicates?: boolean
  }

  export type AccountBookCategoryImageCreateWithoutAccountBookCategorysInput = {
    name: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountBookCategoryImagesInput
  }

  export type AccountBookCategoryImageUncheckedCreateWithoutAccountBookCategorysInput = {
    id?: number
    name: string
    imageUrl: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountBookCategoryImageCreateOrConnectWithoutAccountBookCategorysInput = {
    where: AccountBookCategoryImageWhereUniqueInput
    create: XOR<AccountBookCategoryImageCreateWithoutAccountBookCategorysInput, AccountBookCategoryImageUncheckedCreateWithoutAccountBookCategorysInput>
  }

  export type UserUpsertWithoutAccountBookCategoriesInput = {
    update: XOR<UserUpdateWithoutAccountBookCategoriesInput, UserUncheckedUpdateWithoutAccountBookCategoriesInput>
    create: XOR<UserCreateWithoutAccountBookCategoriesInput, UserUncheckedCreateWithoutAccountBookCategoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountBookCategoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountBookCategoriesInput, UserUncheckedUpdateWithoutAccountBookCategoriesInput>
  }

  export type UserUpdateWithoutAccountBookCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    socialId?: StringFieldUpdateOperationsInput | string
    profileImg?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    bucketLists?: BucketListUpdateManyWithoutUserNestedInput
    deposits?: DepositUpdateManyWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutUserNestedInput
    accountBooks?: AccountBookUpdateManyWithoutUserNestedInput
    accountBookCategoryImages?: AccountBookCategoryImageUpdateManyWithoutUserNestedInput
    regularExpenditures?: RegularExpenditureUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountBookCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    socialId?: StringFieldUpdateOperationsInput | string
    profileImg?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    bucketLists?: BucketListUncheckedUpdateManyWithoutUserNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
    accountBooks?: AccountBookUncheckedUpdateManyWithoutUserNestedInput
    accountBookCategoryImages?: AccountBookCategoryImageUncheckedUpdateManyWithoutUserNestedInput
    regularExpenditures?: RegularExpenditureUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountBookUpsertWithWhereUniqueWithoutAccountBookCategoryInput = {
    where: AccountBookWhereUniqueInput
    update: XOR<AccountBookUpdateWithoutAccountBookCategoryInput, AccountBookUncheckedUpdateWithoutAccountBookCategoryInput>
    create: XOR<AccountBookCreateWithoutAccountBookCategoryInput, AccountBookUncheckedCreateWithoutAccountBookCategoryInput>
  }

  export type AccountBookUpdateWithWhereUniqueWithoutAccountBookCategoryInput = {
    where: AccountBookWhereUniqueInput
    data: XOR<AccountBookUpdateWithoutAccountBookCategoryInput, AccountBookUncheckedUpdateWithoutAccountBookCategoryInput>
  }

  export type AccountBookUpdateManyWithWhereWithoutAccountBookCategoryInput = {
    where: AccountBookScalarWhereInput
    data: XOR<AccountBookUpdateManyMutationInput, AccountBookUncheckedUpdateManyWithoutAccountBookCategoryInput>
  }

  export type RegularExpenditureUpsertWithWhereUniqueWithoutAccountBookCategoryInput = {
    where: RegularExpenditureWhereUniqueInput
    update: XOR<RegularExpenditureUpdateWithoutAccountBookCategoryInput, RegularExpenditureUncheckedUpdateWithoutAccountBookCategoryInput>
    create: XOR<RegularExpenditureCreateWithoutAccountBookCategoryInput, RegularExpenditureUncheckedCreateWithoutAccountBookCategoryInput>
  }

  export type RegularExpenditureUpdateWithWhereUniqueWithoutAccountBookCategoryInput = {
    where: RegularExpenditureWhereUniqueInput
    data: XOR<RegularExpenditureUpdateWithoutAccountBookCategoryInput, RegularExpenditureUncheckedUpdateWithoutAccountBookCategoryInput>
  }

  export type RegularExpenditureUpdateManyWithWhereWithoutAccountBookCategoryInput = {
    where: RegularExpenditureScalarWhereInput
    data: XOR<RegularExpenditureUpdateManyMutationInput, RegularExpenditureUncheckedUpdateManyWithoutAccountBookCategoryInput>
  }

  export type AccountBookCategoryImageUpsertWithoutAccountBookCategorysInput = {
    update: XOR<AccountBookCategoryImageUpdateWithoutAccountBookCategorysInput, AccountBookCategoryImageUncheckedUpdateWithoutAccountBookCategorysInput>
    create: XOR<AccountBookCategoryImageCreateWithoutAccountBookCategorysInput, AccountBookCategoryImageUncheckedCreateWithoutAccountBookCategorysInput>
    where?: AccountBookCategoryImageWhereInput
  }

  export type AccountBookCategoryImageUpdateToOneWithWhereWithoutAccountBookCategorysInput = {
    where?: AccountBookCategoryImageWhereInput
    data: XOR<AccountBookCategoryImageUpdateWithoutAccountBookCategorysInput, AccountBookCategoryImageUncheckedUpdateWithoutAccountBookCategorysInput>
  }

  export type AccountBookCategoryImageUpdateWithoutAccountBookCategorysInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountBookCategoryImagesNestedInput
  }

  export type AccountBookCategoryImageUncheckedUpdateWithoutAccountBookCategorysInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutDepositsInput = {
    name: string
    email: string
    password: string
    loginType: string
    socialId: string
    profileImg: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    bucketLists?: BucketListCreateNestedManyWithoutUserInput
    todos?: TodoCreateNestedManyWithoutUserInput
    accountBooks?: AccountBookCreateNestedManyWithoutUserInput
    accountBookCategories?: AccountBookCategoryCreateNestedManyWithoutUserInput
    accountBookCategoryImages?: AccountBookCategoryImageCreateNestedManyWithoutUserInput
    regularExpenditures?: RegularExpenditureCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDepositsInput = {
    id?: number
    name: string
    email: string
    password: string
    loginType: string
    socialId: string
    profileImg: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    bucketLists?: BucketListUncheckedCreateNestedManyWithoutUserInput
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
    accountBooks?: AccountBookUncheckedCreateNestedManyWithoutUserInput
    accountBookCategories?: AccountBookCategoryUncheckedCreateNestedManyWithoutUserInput
    accountBookCategoryImages?: AccountBookCategoryImageUncheckedCreateNestedManyWithoutUserInput
    regularExpenditures?: RegularExpenditureUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDepositsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
  }

  export type AccountCreateWithoutDepositsInput = {
    taxType: string
    regularTransferDate: number
    rate: number
    title: string
    amount: number
    currentAmount: number
    isExpiration: boolean
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
    savingType: SavingTypeCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateWithoutDepositsInput = {
    id?: number
    taxType: string
    regularTransferDate: number
    rate: number
    title: string
    amount: number
    currentAmount: number
    userId: number
    isExpiration: boolean
    startDate: Date | string
    endDate: Date | string
    savingTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutDepositsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutDepositsInput, AccountUncheckedCreateWithoutDepositsInput>
  }

  export type UserUpsertWithoutDepositsInput = {
    update: XOR<UserUpdateWithoutDepositsInput, UserUncheckedUpdateWithoutDepositsInput>
    create: XOR<UserCreateWithoutDepositsInput, UserUncheckedCreateWithoutDepositsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDepositsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDepositsInput, UserUncheckedUpdateWithoutDepositsInput>
  }

  export type UserUpdateWithoutDepositsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    socialId?: StringFieldUpdateOperationsInput | string
    profileImg?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    bucketLists?: BucketListUpdateManyWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutUserNestedInput
    accountBooks?: AccountBookUpdateManyWithoutUserNestedInput
    accountBookCategories?: AccountBookCategoryUpdateManyWithoutUserNestedInput
    accountBookCategoryImages?: AccountBookCategoryImageUpdateManyWithoutUserNestedInput
    regularExpenditures?: RegularExpenditureUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDepositsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    socialId?: StringFieldUpdateOperationsInput | string
    profileImg?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    bucketLists?: BucketListUncheckedUpdateManyWithoutUserNestedInput
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
    accountBooks?: AccountBookUncheckedUpdateManyWithoutUserNestedInput
    accountBookCategories?: AccountBookCategoryUncheckedUpdateManyWithoutUserNestedInput
    accountBookCategoryImages?: AccountBookCategoryImageUncheckedUpdateManyWithoutUserNestedInput
    regularExpenditures?: RegularExpenditureUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountUpsertWithoutDepositsInput = {
    update: XOR<AccountUpdateWithoutDepositsInput, AccountUncheckedUpdateWithoutDepositsInput>
    create: XOR<AccountCreateWithoutDepositsInput, AccountUncheckedCreateWithoutDepositsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutDepositsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutDepositsInput, AccountUncheckedUpdateWithoutDepositsInput>
  }

  export type AccountUpdateWithoutDepositsInput = {
    taxType?: StringFieldUpdateOperationsInput | string
    regularTransferDate?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currentAmount?: IntFieldUpdateOperationsInput | number
    isExpiration?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
    savingType?: SavingTypeUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateWithoutDepositsInput = {
    id?: IntFieldUpdateOperationsInput | number
    taxType?: StringFieldUpdateOperationsInput | string
    regularTransferDate?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currentAmount?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isExpiration?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    savingTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAccountBookCategoryImagesInput = {
    name: string
    email: string
    password: string
    loginType: string
    socialId: string
    profileImg: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    bucketLists?: BucketListCreateNestedManyWithoutUserInput
    deposits?: DepositCreateNestedManyWithoutUserInput
    todos?: TodoCreateNestedManyWithoutUserInput
    accountBooks?: AccountBookCreateNestedManyWithoutUserInput
    accountBookCategories?: AccountBookCategoryCreateNestedManyWithoutUserInput
    regularExpenditures?: RegularExpenditureCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountBookCategoryImagesInput = {
    id?: number
    name: string
    email: string
    password: string
    loginType: string
    socialId: string
    profileImg: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    bucketLists?: BucketListUncheckedCreateNestedManyWithoutUserInput
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
    accountBooks?: AccountBookUncheckedCreateNestedManyWithoutUserInput
    accountBookCategories?: AccountBookCategoryUncheckedCreateNestedManyWithoutUserInput
    regularExpenditures?: RegularExpenditureUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountBookCategoryImagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountBookCategoryImagesInput, UserUncheckedCreateWithoutAccountBookCategoryImagesInput>
  }

  export type AccountBookCategoryCreateWithoutAccountBookCategoryImageInput = {
    name: string
    delYn: boolean
    type: $Enums.AccountBookCategoryType
    useStatistic: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountBookCategoriesInput
    accountBooks?: AccountBookCreateNestedManyWithoutAccountBookCategoryInput
    RegularExpenditures?: RegularExpenditureCreateNestedManyWithoutAccountBookCategoryInput
  }

  export type AccountBookCategoryUncheckedCreateWithoutAccountBookCategoryImageInput = {
    id?: number
    name: string
    delYn: boolean
    type: $Enums.AccountBookCategoryType
    useStatistic: boolean
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    accountBooks?: AccountBookUncheckedCreateNestedManyWithoutAccountBookCategoryInput
    RegularExpenditures?: RegularExpenditureUncheckedCreateNestedManyWithoutAccountBookCategoryInput
  }

  export type AccountBookCategoryCreateOrConnectWithoutAccountBookCategoryImageInput = {
    where: AccountBookCategoryWhereUniqueInput
    create: XOR<AccountBookCategoryCreateWithoutAccountBookCategoryImageInput, AccountBookCategoryUncheckedCreateWithoutAccountBookCategoryImageInput>
  }

  export type AccountBookCategoryCreateManyAccountBookCategoryImageInputEnvelope = {
    data: AccountBookCategoryCreateManyAccountBookCategoryImageInput | AccountBookCategoryCreateManyAccountBookCategoryImageInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAccountBookCategoryImagesInput = {
    update: XOR<UserUpdateWithoutAccountBookCategoryImagesInput, UserUncheckedUpdateWithoutAccountBookCategoryImagesInput>
    create: XOR<UserCreateWithoutAccountBookCategoryImagesInput, UserUncheckedCreateWithoutAccountBookCategoryImagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountBookCategoryImagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountBookCategoryImagesInput, UserUncheckedUpdateWithoutAccountBookCategoryImagesInput>
  }

  export type UserUpdateWithoutAccountBookCategoryImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    socialId?: StringFieldUpdateOperationsInput | string
    profileImg?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    bucketLists?: BucketListUpdateManyWithoutUserNestedInput
    deposits?: DepositUpdateManyWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutUserNestedInput
    accountBooks?: AccountBookUpdateManyWithoutUserNestedInput
    accountBookCategories?: AccountBookCategoryUpdateManyWithoutUserNestedInput
    regularExpenditures?: RegularExpenditureUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountBookCategoryImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    socialId?: StringFieldUpdateOperationsInput | string
    profileImg?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    bucketLists?: BucketListUncheckedUpdateManyWithoutUserNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
    accountBooks?: AccountBookUncheckedUpdateManyWithoutUserNestedInput
    accountBookCategories?: AccountBookCategoryUncheckedUpdateManyWithoutUserNestedInput
    regularExpenditures?: RegularExpenditureUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountBookCategoryUpsertWithWhereUniqueWithoutAccountBookCategoryImageInput = {
    where: AccountBookCategoryWhereUniqueInput
    update: XOR<AccountBookCategoryUpdateWithoutAccountBookCategoryImageInput, AccountBookCategoryUncheckedUpdateWithoutAccountBookCategoryImageInput>
    create: XOR<AccountBookCategoryCreateWithoutAccountBookCategoryImageInput, AccountBookCategoryUncheckedCreateWithoutAccountBookCategoryImageInput>
  }

  export type AccountBookCategoryUpdateWithWhereUniqueWithoutAccountBookCategoryImageInput = {
    where: AccountBookCategoryWhereUniqueInput
    data: XOR<AccountBookCategoryUpdateWithoutAccountBookCategoryImageInput, AccountBookCategoryUncheckedUpdateWithoutAccountBookCategoryImageInput>
  }

  export type AccountBookCategoryUpdateManyWithWhereWithoutAccountBookCategoryImageInput = {
    where: AccountBookCategoryScalarWhereInput
    data: XOR<AccountBookCategoryUpdateManyMutationInput, AccountBookCategoryUncheckedUpdateManyWithoutAccountBookCategoryImageInput>
  }

  export type UserCreateWithoutBucketListsInput = {
    name: string
    email: string
    password: string
    loginType: string
    socialId: string
    profileImg: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    deposits?: DepositCreateNestedManyWithoutUserInput
    todos?: TodoCreateNestedManyWithoutUserInput
    accountBooks?: AccountBookCreateNestedManyWithoutUserInput
    accountBookCategories?: AccountBookCategoryCreateNestedManyWithoutUserInput
    accountBookCategoryImages?: AccountBookCategoryImageCreateNestedManyWithoutUserInput
    regularExpenditures?: RegularExpenditureCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBucketListsInput = {
    id?: number
    name: string
    email: string
    password: string
    loginType: string
    socialId: string
    profileImg: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
    accountBooks?: AccountBookUncheckedCreateNestedManyWithoutUserInput
    accountBookCategories?: AccountBookCategoryUncheckedCreateNestedManyWithoutUserInput
    accountBookCategoryImages?: AccountBookCategoryImageUncheckedCreateNestedManyWithoutUserInput
    regularExpenditures?: RegularExpenditureUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBucketListsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBucketListsInput, UserUncheckedCreateWithoutBucketListsInput>
  }

  export type TodoCreateWithoutBucketListInput = {
    isComplete: boolean
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTodosInput
  }

  export type TodoUncheckedCreateWithoutBucketListInput = {
    id?: number
    isComplete: boolean
    userId: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoCreateOrConnectWithoutBucketListInput = {
    where: TodoWhereUniqueInput
    create: XOR<TodoCreateWithoutBucketListInput, TodoUncheckedCreateWithoutBucketListInput>
  }

  export type TodoCreateManyBucketListInputEnvelope = {
    data: TodoCreateManyBucketListInput | TodoCreateManyBucketListInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBucketListsInput = {
    update: XOR<UserUpdateWithoutBucketListsInput, UserUncheckedUpdateWithoutBucketListsInput>
    create: XOR<UserCreateWithoutBucketListsInput, UserUncheckedCreateWithoutBucketListsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBucketListsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBucketListsInput, UserUncheckedUpdateWithoutBucketListsInput>
  }

  export type UserUpdateWithoutBucketListsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    socialId?: StringFieldUpdateOperationsInput | string
    profileImg?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    deposits?: DepositUpdateManyWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutUserNestedInput
    accountBooks?: AccountBookUpdateManyWithoutUserNestedInput
    accountBookCategories?: AccountBookCategoryUpdateManyWithoutUserNestedInput
    accountBookCategoryImages?: AccountBookCategoryImageUpdateManyWithoutUserNestedInput
    regularExpenditures?: RegularExpenditureUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBucketListsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    socialId?: StringFieldUpdateOperationsInput | string
    profileImg?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
    accountBooks?: AccountBookUncheckedUpdateManyWithoutUserNestedInput
    accountBookCategories?: AccountBookCategoryUncheckedUpdateManyWithoutUserNestedInput
    accountBookCategoryImages?: AccountBookCategoryImageUncheckedUpdateManyWithoutUserNestedInput
    regularExpenditures?: RegularExpenditureUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TodoUpsertWithWhereUniqueWithoutBucketListInput = {
    where: TodoWhereUniqueInput
    update: XOR<TodoUpdateWithoutBucketListInput, TodoUncheckedUpdateWithoutBucketListInput>
    create: XOR<TodoCreateWithoutBucketListInput, TodoUncheckedCreateWithoutBucketListInput>
  }

  export type TodoUpdateWithWhereUniqueWithoutBucketListInput = {
    where: TodoWhereUniqueInput
    data: XOR<TodoUpdateWithoutBucketListInput, TodoUncheckedUpdateWithoutBucketListInput>
  }

  export type TodoUpdateManyWithWhereWithoutBucketListInput = {
    where: TodoScalarWhereInput
    data: XOR<TodoUpdateManyMutationInput, TodoUncheckedUpdateManyWithoutBucketListInput>
  }

  export type UserCreateWithoutRegularExpendituresInput = {
    name: string
    email: string
    password: string
    loginType: string
    socialId: string
    profileImg: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    bucketLists?: BucketListCreateNestedManyWithoutUserInput
    deposits?: DepositCreateNestedManyWithoutUserInput
    todos?: TodoCreateNestedManyWithoutUserInput
    accountBooks?: AccountBookCreateNestedManyWithoutUserInput
    accountBookCategories?: AccountBookCategoryCreateNestedManyWithoutUserInput
    accountBookCategoryImages?: AccountBookCategoryImageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRegularExpendituresInput = {
    id?: number
    name: string
    email: string
    password: string
    loginType: string
    socialId: string
    profileImg: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    bucketLists?: BucketListUncheckedCreateNestedManyWithoutUserInput
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    todos?: TodoUncheckedCreateNestedManyWithoutUserInput
    accountBooks?: AccountBookUncheckedCreateNestedManyWithoutUserInput
    accountBookCategories?: AccountBookCategoryUncheckedCreateNestedManyWithoutUserInput
    accountBookCategoryImages?: AccountBookCategoryImageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRegularExpendituresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRegularExpendituresInput, UserUncheckedCreateWithoutRegularExpendituresInput>
  }

  export type AccountBookCategoryCreateWithoutRegularExpendituresInput = {
    name: string
    delYn: boolean
    type: $Enums.AccountBookCategoryType
    useStatistic: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountBookCategoriesInput
    accountBooks?: AccountBookCreateNestedManyWithoutAccountBookCategoryInput
    accountBookCategoryImage: AccountBookCategoryImageCreateNestedOneWithoutAccountBookCategorysInput
  }

  export type AccountBookCategoryUncheckedCreateWithoutRegularExpendituresInput = {
    id?: number
    name: string
    delYn: boolean
    type: $Enums.AccountBookCategoryType
    useStatistic: boolean
    userId: number
    accountBookCategoryImageId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    accountBooks?: AccountBookUncheckedCreateNestedManyWithoutAccountBookCategoryInput
  }

  export type AccountBookCategoryCreateOrConnectWithoutRegularExpendituresInput = {
    where: AccountBookCategoryWhereUniqueInput
    create: XOR<AccountBookCategoryCreateWithoutRegularExpendituresInput, AccountBookCategoryUncheckedCreateWithoutRegularExpendituresInput>
  }

  export type UserUpsertWithoutRegularExpendituresInput = {
    update: XOR<UserUpdateWithoutRegularExpendituresInput, UserUncheckedUpdateWithoutRegularExpendituresInput>
    create: XOR<UserCreateWithoutRegularExpendituresInput, UserUncheckedCreateWithoutRegularExpendituresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRegularExpendituresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRegularExpendituresInput, UserUncheckedUpdateWithoutRegularExpendituresInput>
  }

  export type UserUpdateWithoutRegularExpendituresInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    socialId?: StringFieldUpdateOperationsInput | string
    profileImg?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    bucketLists?: BucketListUpdateManyWithoutUserNestedInput
    deposits?: DepositUpdateManyWithoutUserNestedInput
    todos?: TodoUpdateManyWithoutUserNestedInput
    accountBooks?: AccountBookUpdateManyWithoutUserNestedInput
    accountBookCategories?: AccountBookCategoryUpdateManyWithoutUserNestedInput
    accountBookCategoryImages?: AccountBookCategoryImageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRegularExpendituresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    socialId?: StringFieldUpdateOperationsInput | string
    profileImg?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    bucketLists?: BucketListUncheckedUpdateManyWithoutUserNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    todos?: TodoUncheckedUpdateManyWithoutUserNestedInput
    accountBooks?: AccountBookUncheckedUpdateManyWithoutUserNestedInput
    accountBookCategories?: AccountBookCategoryUncheckedUpdateManyWithoutUserNestedInput
    accountBookCategoryImages?: AccountBookCategoryImageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountBookCategoryUpsertWithoutRegularExpendituresInput = {
    update: XOR<AccountBookCategoryUpdateWithoutRegularExpendituresInput, AccountBookCategoryUncheckedUpdateWithoutRegularExpendituresInput>
    create: XOR<AccountBookCategoryCreateWithoutRegularExpendituresInput, AccountBookCategoryUncheckedCreateWithoutRegularExpendituresInput>
    where?: AccountBookCategoryWhereInput
  }

  export type AccountBookCategoryUpdateToOneWithWhereWithoutRegularExpendituresInput = {
    where?: AccountBookCategoryWhereInput
    data: XOR<AccountBookCategoryUpdateWithoutRegularExpendituresInput, AccountBookCategoryUncheckedUpdateWithoutRegularExpendituresInput>
  }

  export type AccountBookCategoryUpdateWithoutRegularExpendituresInput = {
    name?: StringFieldUpdateOperationsInput | string
    delYn?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    useStatistic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountBookCategoriesNestedInput
    accountBooks?: AccountBookUpdateManyWithoutAccountBookCategoryNestedInput
    accountBookCategoryImage?: AccountBookCategoryImageUpdateOneRequiredWithoutAccountBookCategorysNestedInput
  }

  export type AccountBookCategoryUncheckedUpdateWithoutRegularExpendituresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    delYn?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    useStatistic?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    accountBookCategoryImageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountBooks?: AccountBookUncheckedUpdateManyWithoutAccountBookCategoryNestedInput
  }

  export type UserCreateWithoutTodosInput = {
    name: string
    email: string
    password: string
    loginType: string
    socialId: string
    profileImg: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    bucketLists?: BucketListCreateNestedManyWithoutUserInput
    deposits?: DepositCreateNestedManyWithoutUserInput
    accountBooks?: AccountBookCreateNestedManyWithoutUserInput
    accountBookCategories?: AccountBookCategoryCreateNestedManyWithoutUserInput
    accountBookCategoryImages?: AccountBookCategoryImageCreateNestedManyWithoutUserInput
    regularExpenditures?: RegularExpenditureCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTodosInput = {
    id?: number
    name: string
    email: string
    password: string
    loginType: string
    socialId: string
    profileImg: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    bucketLists?: BucketListUncheckedCreateNestedManyWithoutUserInput
    deposits?: DepositUncheckedCreateNestedManyWithoutUserInput
    accountBooks?: AccountBookUncheckedCreateNestedManyWithoutUserInput
    accountBookCategories?: AccountBookCategoryUncheckedCreateNestedManyWithoutUserInput
    accountBookCategoryImages?: AccountBookCategoryImageUncheckedCreateNestedManyWithoutUserInput
    regularExpenditures?: RegularExpenditureUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTodosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
  }

  export type BucketListCreateWithoutTodoListInput = {
    isComplete: boolean
    title: string
    description: string
    completeDate: Date | string
    thumbImageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBucketListsInput
  }

  export type BucketListUncheckedCreateWithoutTodoListInput = {
    isComplete: boolean
    id?: number
    title: string
    description: string
    userId: number
    completeDate: Date | string
    thumbImageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BucketListCreateOrConnectWithoutTodoListInput = {
    where: BucketListWhereUniqueInput
    create: XOR<BucketListCreateWithoutTodoListInput, BucketListUncheckedCreateWithoutTodoListInput>
  }

  export type UserUpsertWithoutTodosInput = {
    update: XOR<UserUpdateWithoutTodosInput, UserUncheckedUpdateWithoutTodosInput>
    create: XOR<UserCreateWithoutTodosInput, UserUncheckedCreateWithoutTodosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTodosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTodosInput, UserUncheckedUpdateWithoutTodosInput>
  }

  export type UserUpdateWithoutTodosInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    socialId?: StringFieldUpdateOperationsInput | string
    profileImg?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    bucketLists?: BucketListUpdateManyWithoutUserNestedInput
    deposits?: DepositUpdateManyWithoutUserNestedInput
    accountBooks?: AccountBookUpdateManyWithoutUserNestedInput
    accountBookCategories?: AccountBookCategoryUpdateManyWithoutUserNestedInput
    accountBookCategoryImages?: AccountBookCategoryImageUpdateManyWithoutUserNestedInput
    regularExpenditures?: RegularExpenditureUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTodosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    loginType?: StringFieldUpdateOperationsInput | string
    socialId?: StringFieldUpdateOperationsInput | string
    profileImg?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    bucketLists?: BucketListUncheckedUpdateManyWithoutUserNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutUserNestedInput
    accountBooks?: AccountBookUncheckedUpdateManyWithoutUserNestedInput
    accountBookCategories?: AccountBookCategoryUncheckedUpdateManyWithoutUserNestedInput
    accountBookCategoryImages?: AccountBookCategoryImageUncheckedUpdateManyWithoutUserNestedInput
    regularExpenditures?: RegularExpenditureUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BucketListUpsertWithoutTodoListInput = {
    update: XOR<BucketListUpdateWithoutTodoListInput, BucketListUncheckedUpdateWithoutTodoListInput>
    create: XOR<BucketListCreateWithoutTodoListInput, BucketListUncheckedCreateWithoutTodoListInput>
    where?: BucketListWhereInput
  }

  export type BucketListUpdateToOneWithWhereWithoutTodoListInput = {
    where?: BucketListWhereInput
    data: XOR<BucketListUpdateWithoutTodoListInput, BucketListUncheckedUpdateWithoutTodoListInput>
  }

  export type BucketListUpdateWithoutTodoListInput = {
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBucketListsNestedInput
  }

  export type BucketListUncheckedUpdateWithoutTodoListInput = {
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    completeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: number
    taxType: string
    regularTransferDate: number
    rate: number
    title: string
    amount: number
    currentAmount: number
    isExpiration: boolean
    startDate: Date | string
    endDate: Date | string
    savingTypeId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BucketListCreateManyUserInput = {
    isComplete: boolean
    id?: number
    title: string
    description: string
    completeDate: Date | string
    thumbImageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepositCreateManyUserInput = {
    id?: number
    amount: number
    prevTotalAmount: number
    accountId: number
    depositDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoCreateManyUserInput = {
    id?: number
    isComplete: boolean
    title: string
    bucketListId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountBookCreateManyUserInput = {
    id?: number
    title: string
    amount: number
    memo: string
    type: $Enums.AccountBookCategoryType
    isRegularExpenditure: boolean
    registerDateTime: Date | string
    accountBookCategoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountBookCategoryCreateManyUserInput = {
    id?: number
    name: string
    delYn: boolean
    type: $Enums.AccountBookCategoryType
    useStatistic: boolean
    accountBookCategoryImageId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountBookCategoryImageCreateManyUserInput = {
    id?: number
    name: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegularExpenditureCreateManyUserInput = {
    id?: number
    amount: number
    regularDate: number
    title: string
    isAutoExpenditure: boolean
    accountBookCategoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    taxType?: StringFieldUpdateOperationsInput | string
    regularTransferDate?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currentAmount?: IntFieldUpdateOperationsInput | number
    isExpiration?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savingType?: SavingTypeUpdateOneRequiredWithoutAccountsNestedInput
    deposits?: DepositUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    taxType?: StringFieldUpdateOperationsInput | string
    regularTransferDate?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currentAmount?: IntFieldUpdateOperationsInput | number
    isExpiration?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    savingTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    taxType?: StringFieldUpdateOperationsInput | string
    regularTransferDate?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currentAmount?: IntFieldUpdateOperationsInput | number
    isExpiration?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    savingTypeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketListUpdateWithoutUserInput = {
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todoList?: TodoUpdateManyWithoutBucketListNestedInput
  }

  export type BucketListUncheckedUpdateWithoutUserInput = {
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    todoList?: TodoUncheckedUpdateManyWithoutBucketListNestedInput
  }

  export type BucketListUncheckedUpdateManyWithoutUserInput = {
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbImageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUpdateWithoutUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    prevTotalAmount?: IntFieldUpdateOperationsInput | number
    depositDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutDepositsNestedInput
  }

  export type DepositUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    prevTotalAmount?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    depositDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    prevTotalAmount?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    depositDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoUpdateWithoutUserInput = {
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bucketList?: BucketListUpdateOneRequiredWithoutTodoListNestedInput
  }

  export type TodoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    bucketListId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    bucketListId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountBookUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    memo?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    isRegularExpenditure?: BoolFieldUpdateOperationsInput | boolean
    registerDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountBookCategory?: AccountBookCategoryUpdateOneRequiredWithoutAccountBooksNestedInput
  }

  export type AccountBookUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    memo?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    isRegularExpenditure?: BoolFieldUpdateOperationsInput | boolean
    registerDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    accountBookCategoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountBookUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    memo?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    isRegularExpenditure?: BoolFieldUpdateOperationsInput | boolean
    registerDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    accountBookCategoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountBookCategoryUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    delYn?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    useStatistic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountBooks?: AccountBookUpdateManyWithoutAccountBookCategoryNestedInput
    RegularExpenditures?: RegularExpenditureUpdateManyWithoutAccountBookCategoryNestedInput
    accountBookCategoryImage?: AccountBookCategoryImageUpdateOneRequiredWithoutAccountBookCategorysNestedInput
  }

  export type AccountBookCategoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    delYn?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    useStatistic?: BoolFieldUpdateOperationsInput | boolean
    accountBookCategoryImageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountBooks?: AccountBookUncheckedUpdateManyWithoutAccountBookCategoryNestedInput
    RegularExpenditures?: RegularExpenditureUncheckedUpdateManyWithoutAccountBookCategoryNestedInput
  }

  export type AccountBookCategoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    delYn?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    useStatistic?: BoolFieldUpdateOperationsInput | boolean
    accountBookCategoryImageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountBookCategoryImageUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountBookCategorys?: AccountBookCategoryUpdateManyWithoutAccountBookCategoryImageNestedInput
  }

  export type AccountBookCategoryImageUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountBookCategorys?: AccountBookCategoryUncheckedUpdateManyWithoutAccountBookCategoryImageNestedInput
  }

  export type AccountBookCategoryImageUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegularExpenditureUpdateWithoutUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    regularDate?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isAutoExpenditure?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountBookCategory?: AccountBookCategoryUpdateOneRequiredWithoutRegularExpendituresNestedInput
  }

  export type RegularExpenditureUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    regularDate?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isAutoExpenditure?: BoolFieldUpdateOperationsInput | boolean
    accountBookCategoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegularExpenditureUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    regularDate?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isAutoExpenditure?: BoolFieldUpdateOperationsInput | boolean
    accountBookCategoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManySavingTypeInput = {
    id?: number
    taxType: string
    regularTransferDate: number
    rate: number
    title: string
    amount: number
    currentAmount: number
    userId: number
    isExpiration: boolean
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutSavingTypeInput = {
    taxType?: StringFieldUpdateOperationsInput | string
    regularTransferDate?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currentAmount?: IntFieldUpdateOperationsInput | number
    isExpiration?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
    deposits?: DepositUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutSavingTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    taxType?: StringFieldUpdateOperationsInput | string
    regularTransferDate?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currentAmount?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isExpiration?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposits?: DepositUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateManyWithoutSavingTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    taxType?: StringFieldUpdateOperationsInput | string
    regularTransferDate?: IntFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currentAmount?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isExpiration?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositCreateManyAccountInput = {
    id?: number
    amount: number
    prevTotalAmount: number
    userId: number
    depositDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepositUpdateWithoutAccountInput = {
    amount?: IntFieldUpdateOperationsInput | number
    prevTotalAmount?: IntFieldUpdateOperationsInput | number
    depositDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDepositsNestedInput
  }

  export type DepositUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    prevTotalAmount?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    depositDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    prevTotalAmount?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    depositDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountBookCreateManyAccountBookCategoryInput = {
    id?: number
    title: string
    amount: number
    memo: string
    type: $Enums.AccountBookCategoryType
    isRegularExpenditure: boolean
    registerDateTime: Date | string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegularExpenditureCreateManyAccountBookCategoryInput = {
    id?: number
    amount: number
    regularDate: number
    title: string
    isAutoExpenditure: boolean
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountBookUpdateWithoutAccountBookCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    memo?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    isRegularExpenditure?: BoolFieldUpdateOperationsInput | boolean
    registerDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountBooksNestedInput
  }

  export type AccountBookUncheckedUpdateWithoutAccountBookCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    memo?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    isRegularExpenditure?: BoolFieldUpdateOperationsInput | boolean
    registerDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountBookUncheckedUpdateManyWithoutAccountBookCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    memo?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    isRegularExpenditure?: BoolFieldUpdateOperationsInput | boolean
    registerDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegularExpenditureUpdateWithoutAccountBookCategoryInput = {
    amount?: IntFieldUpdateOperationsInput | number
    regularDate?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isAutoExpenditure?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRegularExpendituresNestedInput
  }

  export type RegularExpenditureUncheckedUpdateWithoutAccountBookCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    regularDate?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isAutoExpenditure?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegularExpenditureUncheckedUpdateManyWithoutAccountBookCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    regularDate?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isAutoExpenditure?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountBookCategoryCreateManyAccountBookCategoryImageInput = {
    id?: number
    name: string
    delYn: boolean
    type: $Enums.AccountBookCategoryType
    useStatistic: boolean
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountBookCategoryUpdateWithoutAccountBookCategoryImageInput = {
    name?: StringFieldUpdateOperationsInput | string
    delYn?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    useStatistic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountBookCategoriesNestedInput
    accountBooks?: AccountBookUpdateManyWithoutAccountBookCategoryNestedInput
    RegularExpenditures?: RegularExpenditureUpdateManyWithoutAccountBookCategoryNestedInput
  }

  export type AccountBookCategoryUncheckedUpdateWithoutAccountBookCategoryImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    delYn?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    useStatistic?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountBooks?: AccountBookUncheckedUpdateManyWithoutAccountBookCategoryNestedInput
    RegularExpenditures?: RegularExpenditureUncheckedUpdateManyWithoutAccountBookCategoryNestedInput
  }

  export type AccountBookCategoryUncheckedUpdateManyWithoutAccountBookCategoryImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    delYn?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumAccountBookCategoryTypeFieldUpdateOperationsInput | $Enums.AccountBookCategoryType
    useStatistic?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoCreateManyBucketListInput = {
    id?: number
    isComplete: boolean
    userId: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TodoUpdateWithoutBucketListInput = {
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTodosNestedInput
  }

  export type TodoUncheckedUpdateWithoutBucketListInput = {
    id?: IntFieldUpdateOperationsInput | number
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TodoUncheckedUpdateManyWithoutBucketListInput = {
    id?: IntFieldUpdateOperationsInput | number
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SavingTypeCountOutputTypeDefaultArgs instead
     */
    export type SavingTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SavingTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountCountOutputTypeDefaultArgs instead
     */
    export type AccountCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountBookCategoryCountOutputTypeDefaultArgs instead
     */
    export type AccountBookCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountBookCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountBookCategoryImageCountOutputTypeDefaultArgs instead
     */
    export type AccountBookCategoryImageCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountBookCategoryImageCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BucketListCountOutputTypeDefaultArgs instead
     */
    export type BucketListCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BucketListCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserShareCodeDefaultArgs instead
     */
    export type UserShareCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserShareCodeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SavingTypeDefaultArgs instead
     */
    export type SavingTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SavingTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountBookDefaultArgs instead
     */
    export type AccountBookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountBookDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountBookCategoryDefaultArgs instead
     */
    export type AccountBookCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountBookCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepositDefaultArgs instead
     */
    export type DepositArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepositDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountBookCategoryImageDefaultArgs instead
     */
    export type AccountBookCategoryImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountBookCategoryImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BucketListDefaultArgs instead
     */
    export type BucketListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BucketListDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegularExpenditureDefaultArgs instead
     */
    export type RegularExpenditureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegularExpenditureDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TodoDefaultArgs instead
     */
    export type TodoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TodoDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}