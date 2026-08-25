
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
 * Model Board
 * 
 */
export type Board = $Result.DefaultSelection<Prisma.$BoardPayload>
/**
 * Model BoardCategory
 * 
 */
export type BoardCategory = $Result.DefaultSelection<Prisma.$BoardCategoryPayload>
/**
 * Model PostFile
 * 
 */
export type PostFile = $Result.DefaultSelection<Prisma.$PostFilePayload>
/**
 * Model WebPushSubscription
 * 
 */
export type WebPushSubscription = $Result.DefaultSelection<Prisma.$WebPushSubscriptionPayload>
/**
 * Model WebPushKey
 * 
 */
export type WebPushKey = $Result.DefaultSelection<Prisma.$WebPushKeyPayload>

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
   * `prisma.board`: Exposes CRUD operations for the **Board** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boards
    * const boards = await prisma.board.findMany()
    * ```
    */
  get board(): Prisma.BoardDelegate<ExtArgs>;

  /**
   * `prisma.boardCategory`: Exposes CRUD operations for the **BoardCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoardCategories
    * const boardCategories = await prisma.boardCategory.findMany()
    * ```
    */
  get boardCategory(): Prisma.BoardCategoryDelegate<ExtArgs>;

  /**
   * `prisma.postFile`: Exposes CRUD operations for the **PostFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostFiles
    * const postFiles = await prisma.postFile.findMany()
    * ```
    */
  get postFile(): Prisma.PostFileDelegate<ExtArgs>;

  /**
   * `prisma.webPushSubscription`: Exposes CRUD operations for the **WebPushSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebPushSubscriptions
    * const webPushSubscriptions = await prisma.webPushSubscription.findMany()
    * ```
    */
  get webPushSubscription(): Prisma.WebPushSubscriptionDelegate<ExtArgs>;

  /**
   * `prisma.webPushKey`: Exposes CRUD operations for the **WebPushKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebPushKeys
    * const webPushKeys = await prisma.webPushKey.findMany()
    * ```
    */
  get webPushKey(): Prisma.WebPushKeyDelegate<ExtArgs>;
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
    Board: 'Board',
    BoardCategory: 'BoardCategory',
    PostFile: 'PostFile',
    WebPushSubscription: 'WebPushSubscription',
    WebPushKey: 'WebPushKey'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    blog?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'board' | 'boardCategory' | 'postFile' | 'webPushSubscription' | 'webPushKey'
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
      Board: {
        payload: Prisma.$BoardPayload<ExtArgs>
        fields: Prisma.BoardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoardFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoardFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findFirst: {
            args: Prisma.BoardFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoardFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findMany: {
            args: Prisma.BoardFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          create: {
            args: Prisma.BoardCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          createMany: {
            args: Prisma.BoardCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BoardDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          update: {
            args: Prisma.BoardUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          deleteMany: {
            args: Prisma.BoardDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BoardUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BoardUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          aggregate: {
            args: Prisma.BoardAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBoard>
          }
          groupBy: {
            args: Prisma.BoardGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BoardGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoardCountArgs<ExtArgs>,
            result: $Utils.Optional<BoardCountAggregateOutputType> | number
          }
        }
      }
      BoardCategory: {
        payload: Prisma.$BoardCategoryPayload<ExtArgs>
        fields: Prisma.BoardCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoardCategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoardCategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardCategoryPayload>
          }
          findFirst: {
            args: Prisma.BoardCategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoardCategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardCategoryPayload>
          }
          findMany: {
            args: Prisma.BoardCategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardCategoryPayload>[]
          }
          create: {
            args: Prisma.BoardCategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardCategoryPayload>
          }
          createMany: {
            args: Prisma.BoardCategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BoardCategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardCategoryPayload>
          }
          update: {
            args: Prisma.BoardCategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardCategoryPayload>
          }
          deleteMany: {
            args: Prisma.BoardCategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BoardCategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BoardCategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BoardCategoryPayload>
          }
          aggregate: {
            args: Prisma.BoardCategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBoardCategory>
          }
          groupBy: {
            args: Prisma.BoardCategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BoardCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoardCategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<BoardCategoryCountAggregateOutputType> | number
          }
        }
      }
      PostFile: {
        payload: Prisma.$PostFilePayload<ExtArgs>
        fields: Prisma.PostFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostFilePayload>
          }
          findFirst: {
            args: Prisma.PostFileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostFilePayload>
          }
          findMany: {
            args: Prisma.PostFileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostFilePayload>[]
          }
          create: {
            args: Prisma.PostFileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostFilePayload>
          }
          createMany: {
            args: Prisma.PostFileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PostFileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostFilePayload>
          }
          update: {
            args: Prisma.PostFileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostFilePayload>
          }
          deleteMany: {
            args: Prisma.PostFileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostFileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostFileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostFilePayload>
          }
          aggregate: {
            args: Prisma.PostFileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePostFile>
          }
          groupBy: {
            args: Prisma.PostFileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostFileCountArgs<ExtArgs>,
            result: $Utils.Optional<PostFileCountAggregateOutputType> | number
          }
        }
      }
      WebPushSubscription: {
        payload: Prisma.$WebPushSubscriptionPayload<ExtArgs>
        fields: Prisma.WebPushSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebPushSubscriptionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebPushSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebPushSubscriptionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebPushSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.WebPushSubscriptionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebPushSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebPushSubscriptionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebPushSubscriptionPayload>
          }
          findMany: {
            args: Prisma.WebPushSubscriptionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebPushSubscriptionPayload>[]
          }
          create: {
            args: Prisma.WebPushSubscriptionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebPushSubscriptionPayload>
          }
          createMany: {
            args: Prisma.WebPushSubscriptionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WebPushSubscriptionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebPushSubscriptionPayload>
          }
          update: {
            args: Prisma.WebPushSubscriptionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebPushSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.WebPushSubscriptionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WebPushSubscriptionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WebPushSubscriptionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebPushSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.WebPushSubscriptionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWebPushSubscription>
          }
          groupBy: {
            args: Prisma.WebPushSubscriptionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WebPushSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebPushSubscriptionCountArgs<ExtArgs>,
            result: $Utils.Optional<WebPushSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      WebPushKey: {
        payload: Prisma.$WebPushKeyPayload<ExtArgs>
        fields: Prisma.WebPushKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebPushKeyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebPushKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebPushKeyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebPushKeyPayload>
          }
          findFirst: {
            args: Prisma.WebPushKeyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebPushKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebPushKeyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebPushKeyPayload>
          }
          findMany: {
            args: Prisma.WebPushKeyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebPushKeyPayload>[]
          }
          create: {
            args: Prisma.WebPushKeyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebPushKeyPayload>
          }
          createMany: {
            args: Prisma.WebPushKeyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WebPushKeyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebPushKeyPayload>
          }
          update: {
            args: Prisma.WebPushKeyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebPushKeyPayload>
          }
          deleteMany: {
            args: Prisma.WebPushKeyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WebPushKeyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WebPushKeyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebPushKeyPayload>
          }
          aggregate: {
            args: Prisma.WebPushKeyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWebPushKey>
          }
          groupBy: {
            args: Prisma.WebPushKeyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WebPushKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebPushKeyCountArgs<ExtArgs>,
            result: $Utils.Optional<WebPushKeyCountAggregateOutputType> | number
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
    boards: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boards?: boolean | UserCountOutputTypeCountBoardsArgs
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
  export type UserCountOutputTypeCountBoardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardWhereInput
  }


  /**
   * Count Type BoardCategoryCountOutputType
   */

  export type BoardCategoryCountOutputType = {
    boards: number
  }

  export type BoardCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boards?: boolean | BoardCategoryCountOutputTypeCountBoardsArgs
  }

  // Custom InputTypes
  /**
   * BoardCategoryCountOutputType without action
   */
  export type BoardCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCategoryCountOutputType
     */
    select?: BoardCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoardCategoryCountOutputType without action
   */
  export type BoardCategoryCountOutputTypeCountBoardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardWhereInput
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
    no: number | null
  }

  export type UserSumAggregateOutputType = {
    no: number | null
  }

  export type UserMinAggregateOutputType = {
    no: number | null
    userId: string | null
    userName: string | null
    nickName: string | null
    email: string | null
    password: string | null
    imageUrl: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    no: number | null
    userId: string | null
    userName: string | null
    nickName: string | null
    email: string | null
    password: string | null
    imageUrl: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    no: number
    userId: number
    userName: number
    nickName: number
    email: number
    password: number
    imageUrl: number
    isAdmin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    no?: true
  }

  export type UserSumAggregateInputType = {
    no?: true
  }

  export type UserMinAggregateInputType = {
    no?: true
    userId?: true
    userName?: true
    nickName?: true
    email?: true
    password?: true
    imageUrl?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    no?: true
    userId?: true
    userName?: true
    nickName?: true
    email?: true
    password?: true
    imageUrl?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    no?: true
    userId?: true
    userName?: true
    nickName?: true
    email?: true
    password?: true
    imageUrl?: true
    isAdmin?: true
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
    no: number
    userId: string
    userName: string | null
    nickName: string | null
    email: string | null
    password: string
    imageUrl: string
    isAdmin: boolean
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
    no?: boolean
    userId?: boolean
    userName?: boolean
    nickName?: boolean
    email?: boolean
    password?: boolean
    imageUrl?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    boards?: boolean | User$boardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    no?: boolean
    userId?: boolean
    userName?: boolean
    nickName?: boolean
    email?: boolean
    password?: boolean
    imageUrl?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boards?: boolean | User$boardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      boards: Prisma.$BoardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      no: number
      userId: string
      userName: string | null
      nickName: string | null
      email: string | null
      password: string
      imageUrl: string
      isAdmin: boolean
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
     * // Only select the `no`
     * const userWithNoOnly = await prisma.user.findMany({ select: { no: true } })
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

    boards<T extends User$boardsArgs<ExtArgs> = {}>(args?: Subset<T, User$boardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly no: FieldRef<"User", 'Int'>
    readonly userId: FieldRef<"User", 'String'>
    readonly userName: FieldRef<"User", 'String'>
    readonly nickName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
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
   * User.boards
   */
  export type User$boardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    where?: BoardWhereInput
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    cursor?: BoardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
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
   * Model Board
   */

  export type AggregateBoard = {
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  export type BoardAvgAggregateOutputType = {
    id: number | null
    views: number | null
    userNo: number | null
    categoryNo: number | null
  }

  export type BoardSumAggregateOutputType = {
    id: number | null
    views: number | null
    userNo: number | null
    categoryNo: number | null
  }

  export type BoardMinAggregateOutputType = {
    id: number | null
    title: string | null
    contents: string | null
    subDescription: string | null
    views: number | null
    userNo: number | null
    categoryNo: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoardMaxAggregateOutputType = {
    id: number | null
    title: string | null
    contents: string | null
    subDescription: string | null
    views: number | null
    userNo: number | null
    categoryNo: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoardCountAggregateOutputType = {
    id: number
    title: number
    contents: number
    subDescription: number
    views: number
    userNo: number
    categoryNo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BoardAvgAggregateInputType = {
    id?: true
    views?: true
    userNo?: true
    categoryNo?: true
  }

  export type BoardSumAggregateInputType = {
    id?: true
    views?: true
    userNo?: true
    categoryNo?: true
  }

  export type BoardMinAggregateInputType = {
    id?: true
    title?: true
    contents?: true
    subDescription?: true
    views?: true
    userNo?: true
    categoryNo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoardMaxAggregateInputType = {
    id?: true
    title?: true
    contents?: true
    subDescription?: true
    views?: true
    userNo?: true
    categoryNo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoardCountAggregateInputType = {
    id?: true
    title?: true
    contents?: true
    subDescription?: true
    views?: true
    userNo?: true
    categoryNo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BoardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Board to aggregate.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boards
    **/
    _count?: true | BoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardMaxAggregateInputType
  }

  export type GetBoardAggregateType<T extends BoardAggregateArgs> = {
        [P in keyof T & keyof AggregateBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoard[P]>
      : GetScalarType<T[P], AggregateBoard[P]>
  }




  export type BoardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardWhereInput
    orderBy?: BoardOrderByWithAggregationInput | BoardOrderByWithAggregationInput[]
    by: BoardScalarFieldEnum[] | BoardScalarFieldEnum
    having?: BoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardCountAggregateInputType | true
    _avg?: BoardAvgAggregateInputType
    _sum?: BoardSumAggregateInputType
    _min?: BoardMinAggregateInputType
    _max?: BoardMaxAggregateInputType
  }

  export type BoardGroupByOutputType = {
    id: number
    title: string
    contents: string | null
    subDescription: string | null
    views: number
    userNo: number
    categoryNo: number
    createdAt: Date
    updatedAt: Date
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  type GetBoardGroupByPayload<T extends BoardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardGroupByOutputType[P]>
            : GetScalarType<T[P], BoardGroupByOutputType[P]>
        }
      >
    >


  export type BoardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    contents?: boolean
    subDescription?: boolean
    views?: boolean
    userNo?: boolean
    categoryNo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | BoardCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["board"]>

  export type BoardSelectScalar = {
    id?: boolean
    title?: boolean
    contents?: boolean
    subDescription?: boolean
    views?: boolean
    userNo?: boolean
    categoryNo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type BoardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | BoardCategoryDefaultArgs<ExtArgs>
  }


  export type $BoardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Board"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$BoardCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      contents: string | null
      subDescription: string | null
      views: number
      userNo: number
      categoryNo: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["board"]>
    composites: {}
  }


  type BoardGetPayload<S extends boolean | null | undefined | BoardDefaultArgs> = $Result.GetResult<Prisma.$BoardPayload, S>

  type BoardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BoardFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BoardCountAggregateInputType | true
    }

  export interface BoardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Board'], meta: { name: 'Board' } }
    /**
     * Find zero or one Board that matches the filter.
     * @param {BoardFindUniqueArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BoardFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BoardFindUniqueArgs<ExtArgs>>
    ): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Board that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BoardFindUniqueOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BoardFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Board that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BoardFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardFindFirstArgs<ExtArgs>>
    ): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Board that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BoardFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boards
     * const boards = await prisma.board.findMany()
     * 
     * // Get first 10 Boards
     * const boards = await prisma.board.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardWithIdOnly = await prisma.board.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BoardFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Board.
     * @param {BoardCreateArgs} args - Arguments to create a Board.
     * @example
     * // Create one Board
     * const Board = await prisma.board.create({
     *   data: {
     *     // ... data to create a Board
     *   }
     * })
     * 
    **/
    create<T extends BoardCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BoardCreateArgs<ExtArgs>>
    ): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Boards.
     * @param {BoardCreateManyArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const board = await prisma.board.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends BoardCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Board.
     * @param {BoardDeleteArgs} args - Arguments to delete one Board.
     * @example
     * // Delete one Board
     * const Board = await prisma.board.delete({
     *   where: {
     *     // ... filter to delete one Board
     *   }
     * })
     * 
    **/
    delete<T extends BoardDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BoardDeleteArgs<ExtArgs>>
    ): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Board.
     * @param {BoardUpdateArgs} args - Arguments to update one Board.
     * @example
     * // Update one Board
     * const board = await prisma.board.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BoardUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BoardUpdateArgs<ExtArgs>>
    ): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Boards.
     * @param {BoardDeleteManyArgs} args - Arguments to filter Boards to delete.
     * @example
     * // Delete a few Boards
     * const { count } = await prisma.board.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BoardDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BoardUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BoardUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Board.
     * @param {BoardUpsertArgs} args - Arguments to update or create a Board.
     * @example
     * // Update or create a Board
     * const board = await prisma.board.upsert({
     *   create: {
     *     // ... data to create a Board
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Board we want to update
     *   }
     * })
    **/
    upsert<T extends BoardUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BoardUpsertArgs<ExtArgs>>
    ): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCountArgs} args - Arguments to filter Boards to count.
     * @example
     * // Count the number of Boards
     * const count = await prisma.board.count({
     *   where: {
     *     // ... the filter for the Boards we want to count
     *   }
     * })
    **/
    count<T extends BoardCountArgs>(
      args?: Subset<T, BoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardAggregateArgs>(args: Subset<T, BoardAggregateArgs>): Prisma.PrismaPromise<GetBoardAggregateType<T>>

    /**
     * Group by Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardGroupByArgs} args - Group by arguments.
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
      T extends BoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardGroupByArgs['orderBy'] }
        : { orderBy?: BoardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Board model
   */
  readonly fields: BoardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Board.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    category<T extends BoardCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoardCategoryDefaultArgs<ExtArgs>>): Prisma__BoardCategoryClient<$Result.GetResult<Prisma.$BoardCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Board model
   */ 
  interface BoardFieldRefs {
    readonly id: FieldRef<"Board", 'Int'>
    readonly title: FieldRef<"Board", 'String'>
    readonly contents: FieldRef<"Board", 'String'>
    readonly subDescription: FieldRef<"Board", 'String'>
    readonly views: FieldRef<"Board", 'Int'>
    readonly userNo: FieldRef<"Board", 'Int'>
    readonly categoryNo: FieldRef<"Board", 'Int'>
    readonly createdAt: FieldRef<"Board", 'DateTime'>
    readonly updatedAt: FieldRef<"Board", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Board findUnique
   */
  export type BoardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findUniqueOrThrow
   */
  export type BoardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findFirst
   */
  export type BoardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board findFirstOrThrow
   */
  export type BoardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board findMany
   */
  export type BoardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Boards to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board create
   */
  export type BoardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to create a Board.
     */
    data: XOR<BoardCreateInput, BoardUncheckedCreateInput>
  }

  /**
   * Board createMany
   */
  export type BoardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boards.
     */
    data: BoardCreateManyInput | BoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Board update
   */
  export type BoardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to update a Board.
     */
    data: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
    /**
     * Choose, which Board to update.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board updateMany
   */
  export type BoardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Boards.
     */
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     */
    where?: BoardWhereInput
  }

  /**
   * Board upsert
   */
  export type BoardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The filter to search for the Board to update in case it exists.
     */
    where: BoardWhereUniqueInput
    /**
     * In case the Board found by the `where` argument doesn't exist, create a new Board with this data.
     */
    create: XOR<BoardCreateInput, BoardUncheckedCreateInput>
    /**
     * In case the Board was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
  }

  /**
   * Board delete
   */
  export type BoardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter which Board to delete.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board deleteMany
   */
  export type BoardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boards to delete
     */
    where?: BoardWhereInput
  }

  /**
   * Board without action
   */
  export type BoardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
  }


  /**
   * Model BoardCategory
   */

  export type AggregateBoardCategory = {
    _count: BoardCategoryCountAggregateOutputType | null
    _avg: BoardCategoryAvgAggregateOutputType | null
    _sum: BoardCategorySumAggregateOutputType | null
    _min: BoardCategoryMinAggregateOutputType | null
    _max: BoardCategoryMaxAggregateOutputType | null
  }

  export type BoardCategoryAvgAggregateOutputType = {
    no: number | null
  }

  export type BoardCategorySumAggregateOutputType = {
    no: number | null
  }

  export type BoardCategoryMinAggregateOutputType = {
    no: number | null
    categoryName: string | null
  }

  export type BoardCategoryMaxAggregateOutputType = {
    no: number | null
    categoryName: string | null
  }

  export type BoardCategoryCountAggregateOutputType = {
    no: number
    categoryName: number
    _all: number
  }


  export type BoardCategoryAvgAggregateInputType = {
    no?: true
  }

  export type BoardCategorySumAggregateInputType = {
    no?: true
  }

  export type BoardCategoryMinAggregateInputType = {
    no?: true
    categoryName?: true
  }

  export type BoardCategoryMaxAggregateInputType = {
    no?: true
    categoryName?: true
  }

  export type BoardCategoryCountAggregateInputType = {
    no?: true
    categoryName?: true
    _all?: true
  }

  export type BoardCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoardCategory to aggregate.
     */
    where?: BoardCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardCategories to fetch.
     */
    orderBy?: BoardCategoryOrderByWithRelationInput | BoardCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoardCategories
    **/
    _count?: true | BoardCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardCategoryMaxAggregateInputType
  }

  export type GetBoardCategoryAggregateType<T extends BoardCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBoardCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoardCategory[P]>
      : GetScalarType<T[P], AggregateBoardCategory[P]>
  }




  export type BoardCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardCategoryWhereInput
    orderBy?: BoardCategoryOrderByWithAggregationInput | BoardCategoryOrderByWithAggregationInput[]
    by: BoardCategoryScalarFieldEnum[] | BoardCategoryScalarFieldEnum
    having?: BoardCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardCategoryCountAggregateInputType | true
    _avg?: BoardCategoryAvgAggregateInputType
    _sum?: BoardCategorySumAggregateInputType
    _min?: BoardCategoryMinAggregateInputType
    _max?: BoardCategoryMaxAggregateInputType
  }

  export type BoardCategoryGroupByOutputType = {
    no: number
    categoryName: string
    _count: BoardCategoryCountAggregateOutputType | null
    _avg: BoardCategoryAvgAggregateOutputType | null
    _sum: BoardCategorySumAggregateOutputType | null
    _min: BoardCategoryMinAggregateOutputType | null
    _max: BoardCategoryMaxAggregateOutputType | null
  }

  type GetBoardCategoryGroupByPayload<T extends BoardCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoardCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], BoardCategoryGroupByOutputType[P]>
        }
      >
    >


  export type BoardCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    no?: boolean
    categoryName?: boolean
    boards?: boolean | BoardCategory$boardsArgs<ExtArgs>
    _count?: boolean | BoardCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boardCategory"]>

  export type BoardCategorySelectScalar = {
    no?: boolean
    categoryName?: boolean
  }


  export type BoardCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boards?: boolean | BoardCategory$boardsArgs<ExtArgs>
    _count?: boolean | BoardCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BoardCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BoardCategory"
    objects: {
      boards: Prisma.$BoardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      no: number
      categoryName: string
    }, ExtArgs["result"]["boardCategory"]>
    composites: {}
  }


  type BoardCategoryGetPayload<S extends boolean | null | undefined | BoardCategoryDefaultArgs> = $Result.GetResult<Prisma.$BoardCategoryPayload, S>

  type BoardCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BoardCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BoardCategoryCountAggregateInputType | true
    }

  export interface BoardCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BoardCategory'], meta: { name: 'BoardCategory' } }
    /**
     * Find zero or one BoardCategory that matches the filter.
     * @param {BoardCategoryFindUniqueArgs} args - Arguments to find a BoardCategory
     * @example
     * // Get one BoardCategory
     * const boardCategory = await prisma.boardCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BoardCategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BoardCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__BoardCategoryClient<$Result.GetResult<Prisma.$BoardCategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BoardCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BoardCategoryFindUniqueOrThrowArgs} args - Arguments to find a BoardCategory
     * @example
     * // Get one BoardCategory
     * const boardCategory = await prisma.boardCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BoardCategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BoardCategoryClient<$Result.GetResult<Prisma.$BoardCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BoardCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCategoryFindFirstArgs} args - Arguments to find a BoardCategory
     * @example
     * // Get one BoardCategory
     * const boardCategory = await prisma.boardCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BoardCategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__BoardCategoryClient<$Result.GetResult<Prisma.$BoardCategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BoardCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCategoryFindFirstOrThrowArgs} args - Arguments to find a BoardCategory
     * @example
     * // Get one BoardCategory
     * const boardCategory = await prisma.boardCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BoardCategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BoardCategoryClient<$Result.GetResult<Prisma.$BoardCategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BoardCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoardCategories
     * const boardCategories = await prisma.boardCategory.findMany()
     * 
     * // Get first 10 BoardCategories
     * const boardCategories = await prisma.boardCategory.findMany({ take: 10 })
     * 
     * // Only select the `no`
     * const boardCategoryWithNoOnly = await prisma.boardCategory.findMany({ select: { no: true } })
     * 
    **/
    findMany<T extends BoardCategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardCategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BoardCategory.
     * @param {BoardCategoryCreateArgs} args - Arguments to create a BoardCategory.
     * @example
     * // Create one BoardCategory
     * const BoardCategory = await prisma.boardCategory.create({
     *   data: {
     *     // ... data to create a BoardCategory
     *   }
     * })
     * 
    **/
    create<T extends BoardCategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BoardCategoryCreateArgs<ExtArgs>>
    ): Prisma__BoardCategoryClient<$Result.GetResult<Prisma.$BoardCategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BoardCategories.
     * @param {BoardCategoryCreateManyArgs} args - Arguments to create many BoardCategories.
     * @example
     * // Create many BoardCategories
     * const boardCategory = await prisma.boardCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends BoardCategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BoardCategory.
     * @param {BoardCategoryDeleteArgs} args - Arguments to delete one BoardCategory.
     * @example
     * // Delete one BoardCategory
     * const BoardCategory = await prisma.boardCategory.delete({
     *   where: {
     *     // ... filter to delete one BoardCategory
     *   }
     * })
     * 
    **/
    delete<T extends BoardCategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BoardCategoryDeleteArgs<ExtArgs>>
    ): Prisma__BoardCategoryClient<$Result.GetResult<Prisma.$BoardCategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BoardCategory.
     * @param {BoardCategoryUpdateArgs} args - Arguments to update one BoardCategory.
     * @example
     * // Update one BoardCategory
     * const boardCategory = await prisma.boardCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BoardCategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BoardCategoryUpdateArgs<ExtArgs>>
    ): Prisma__BoardCategoryClient<$Result.GetResult<Prisma.$BoardCategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BoardCategories.
     * @param {BoardCategoryDeleteManyArgs} args - Arguments to filter BoardCategories to delete.
     * @example
     * // Delete a few BoardCategories
     * const { count } = await prisma.boardCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BoardCategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoardCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoardCategories
     * const boardCategory = await prisma.boardCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BoardCategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BoardCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BoardCategory.
     * @param {BoardCategoryUpsertArgs} args - Arguments to update or create a BoardCategory.
     * @example
     * // Update or create a BoardCategory
     * const boardCategory = await prisma.boardCategory.upsert({
     *   create: {
     *     // ... data to create a BoardCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoardCategory we want to update
     *   }
     * })
    **/
    upsert<T extends BoardCategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BoardCategoryUpsertArgs<ExtArgs>>
    ): Prisma__BoardCategoryClient<$Result.GetResult<Prisma.$BoardCategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BoardCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCategoryCountArgs} args - Arguments to filter BoardCategories to count.
     * @example
     * // Count the number of BoardCategories
     * const count = await prisma.boardCategory.count({
     *   where: {
     *     // ... the filter for the BoardCategories we want to count
     *   }
     * })
    **/
    count<T extends BoardCategoryCountArgs>(
      args?: Subset<T, BoardCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoardCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardCategoryAggregateArgs>(args: Subset<T, BoardCategoryAggregateArgs>): Prisma.PrismaPromise<GetBoardCategoryAggregateType<T>>

    /**
     * Group by BoardCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCategoryGroupByArgs} args - Group by arguments.
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
      T extends BoardCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardCategoryGroupByArgs['orderBy'] }
        : { orderBy?: BoardCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BoardCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BoardCategory model
   */
  readonly fields: BoardCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BoardCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoardCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    boards<T extends BoardCategory$boardsArgs<ExtArgs> = {}>(args?: Subset<T, BoardCategory$boardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the BoardCategory model
   */ 
  interface BoardCategoryFieldRefs {
    readonly no: FieldRef<"BoardCategory", 'Int'>
    readonly categoryName: FieldRef<"BoardCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BoardCategory findUnique
   */
  export type BoardCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCategory
     */
    select?: BoardCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BoardCategory to fetch.
     */
    where: BoardCategoryWhereUniqueInput
  }

  /**
   * BoardCategory findUniqueOrThrow
   */
  export type BoardCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCategory
     */
    select?: BoardCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BoardCategory to fetch.
     */
    where: BoardCategoryWhereUniqueInput
  }

  /**
   * BoardCategory findFirst
   */
  export type BoardCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCategory
     */
    select?: BoardCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BoardCategory to fetch.
     */
    where?: BoardCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardCategories to fetch.
     */
    orderBy?: BoardCategoryOrderByWithRelationInput | BoardCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardCategories.
     */
    cursor?: BoardCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardCategories.
     */
    distinct?: BoardCategoryScalarFieldEnum | BoardCategoryScalarFieldEnum[]
  }

  /**
   * BoardCategory findFirstOrThrow
   */
  export type BoardCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCategory
     */
    select?: BoardCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BoardCategory to fetch.
     */
    where?: BoardCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardCategories to fetch.
     */
    orderBy?: BoardCategoryOrderByWithRelationInput | BoardCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardCategories.
     */
    cursor?: BoardCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardCategories.
     */
    distinct?: BoardCategoryScalarFieldEnum | BoardCategoryScalarFieldEnum[]
  }

  /**
   * BoardCategory findMany
   */
  export type BoardCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCategory
     */
    select?: BoardCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BoardCategories to fetch.
     */
    where?: BoardCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardCategories to fetch.
     */
    orderBy?: BoardCategoryOrderByWithRelationInput | BoardCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoardCategories.
     */
    cursor?: BoardCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardCategories.
     */
    skip?: number
    distinct?: BoardCategoryScalarFieldEnum | BoardCategoryScalarFieldEnum[]
  }

  /**
   * BoardCategory create
   */
  export type BoardCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCategory
     */
    select?: BoardCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BoardCategory.
     */
    data: XOR<BoardCategoryCreateInput, BoardCategoryUncheckedCreateInput>
  }

  /**
   * BoardCategory createMany
   */
  export type BoardCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BoardCategories.
     */
    data: BoardCategoryCreateManyInput | BoardCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BoardCategory update
   */
  export type BoardCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCategory
     */
    select?: BoardCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BoardCategory.
     */
    data: XOR<BoardCategoryUpdateInput, BoardCategoryUncheckedUpdateInput>
    /**
     * Choose, which BoardCategory to update.
     */
    where: BoardCategoryWhereUniqueInput
  }

  /**
   * BoardCategory updateMany
   */
  export type BoardCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BoardCategories.
     */
    data: XOR<BoardCategoryUpdateManyMutationInput, BoardCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BoardCategories to update
     */
    where?: BoardCategoryWhereInput
  }

  /**
   * BoardCategory upsert
   */
  export type BoardCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCategory
     */
    select?: BoardCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BoardCategory to update in case it exists.
     */
    where: BoardCategoryWhereUniqueInput
    /**
     * In case the BoardCategory found by the `where` argument doesn't exist, create a new BoardCategory with this data.
     */
    create: XOR<BoardCategoryCreateInput, BoardCategoryUncheckedCreateInput>
    /**
     * In case the BoardCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardCategoryUpdateInput, BoardCategoryUncheckedUpdateInput>
  }

  /**
   * BoardCategory delete
   */
  export type BoardCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCategory
     */
    select?: BoardCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardCategoryInclude<ExtArgs> | null
    /**
     * Filter which BoardCategory to delete.
     */
    where: BoardCategoryWhereUniqueInput
  }

  /**
   * BoardCategory deleteMany
   */
  export type BoardCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoardCategories to delete
     */
    where?: BoardCategoryWhereInput
  }

  /**
   * BoardCategory.boards
   */
  export type BoardCategory$boardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    where?: BoardWhereInput
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    cursor?: BoardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * BoardCategory without action
   */
  export type BoardCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCategory
     */
    select?: BoardCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardCategoryInclude<ExtArgs> | null
  }


  /**
   * Model PostFile
   */

  export type AggregatePostFile = {
    _count: PostFileCountAggregateOutputType | null
    _avg: PostFileAvgAggregateOutputType | null
    _sum: PostFileSumAggregateOutputType | null
    _min: PostFileMinAggregateOutputType | null
    _max: PostFileMaxAggregateOutputType | null
  }

  export type PostFileAvgAggregateOutputType = {
    id: number | null
    size: number | null
  }

  export type PostFileSumAggregateOutputType = {
    id: number | null
    size: number | null
  }

  export type PostFileMinAggregateOutputType = {
    id: number | null
    originFileName: string | null
    fileName: string | null
    fileDir: string | null
    fileExt: string | null
    fullPath: string | null
    size: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostFileMaxAggregateOutputType = {
    id: number | null
    originFileName: string | null
    fileName: string | null
    fileDir: string | null
    fileExt: string | null
    fullPath: string | null
    size: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostFileCountAggregateOutputType = {
    id: number
    originFileName: number
    fileName: number
    fileDir: number
    fileExt: number
    fullPath: number
    size: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostFileAvgAggregateInputType = {
    id?: true
    size?: true
  }

  export type PostFileSumAggregateInputType = {
    id?: true
    size?: true
  }

  export type PostFileMinAggregateInputType = {
    id?: true
    originFileName?: true
    fileName?: true
    fileDir?: true
    fileExt?: true
    fullPath?: true
    size?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostFileMaxAggregateInputType = {
    id?: true
    originFileName?: true
    fileName?: true
    fileDir?: true
    fileExt?: true
    fullPath?: true
    size?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostFileCountAggregateInputType = {
    id?: true
    originFileName?: true
    fileName?: true
    fileDir?: true
    fileExt?: true
    fullPath?: true
    size?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostFile to aggregate.
     */
    where?: PostFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostFiles to fetch.
     */
    orderBy?: PostFileOrderByWithRelationInput | PostFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostFiles
    **/
    _count?: true | PostFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostFileMaxAggregateInputType
  }

  export type GetPostFileAggregateType<T extends PostFileAggregateArgs> = {
        [P in keyof T & keyof AggregatePostFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostFile[P]>
      : GetScalarType<T[P], AggregatePostFile[P]>
  }




  export type PostFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostFileWhereInput
    orderBy?: PostFileOrderByWithAggregationInput | PostFileOrderByWithAggregationInput[]
    by: PostFileScalarFieldEnum[] | PostFileScalarFieldEnum
    having?: PostFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostFileCountAggregateInputType | true
    _avg?: PostFileAvgAggregateInputType
    _sum?: PostFileSumAggregateInputType
    _min?: PostFileMinAggregateInputType
    _max?: PostFileMaxAggregateInputType
  }

  export type PostFileGroupByOutputType = {
    id: number
    originFileName: string
    fileName: string
    fileDir: string
    fileExt: string
    fullPath: string
    size: number
    createdAt: Date
    updatedAt: Date
    _count: PostFileCountAggregateOutputType | null
    _avg: PostFileAvgAggregateOutputType | null
    _sum: PostFileSumAggregateOutputType | null
    _min: PostFileMinAggregateOutputType | null
    _max: PostFileMaxAggregateOutputType | null
  }

  type GetPostFileGroupByPayload<T extends PostFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostFileGroupByOutputType[P]>
            : GetScalarType<T[P], PostFileGroupByOutputType[P]>
        }
      >
    >


  export type PostFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originFileName?: boolean
    fileName?: boolean
    fileDir?: boolean
    fileExt?: boolean
    fullPath?: boolean
    size?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["postFile"]>

  export type PostFileSelectScalar = {
    id?: boolean
    originFileName?: boolean
    fileName?: boolean
    fileDir?: boolean
    fileExt?: boolean
    fullPath?: boolean
    size?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }



  export type $PostFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostFile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      originFileName: string
      fileName: string
      fileDir: string
      fileExt: string
      fullPath: string
      size: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["postFile"]>
    composites: {}
  }


  type PostFileGetPayload<S extends boolean | null | undefined | PostFileDefaultArgs> = $Result.GetResult<Prisma.$PostFilePayload, S>

  type PostFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostFileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostFileCountAggregateInputType | true
    }

  export interface PostFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostFile'], meta: { name: 'PostFile' } }
    /**
     * Find zero or one PostFile that matches the filter.
     * @param {PostFileFindUniqueArgs} args - Arguments to find a PostFile
     * @example
     * // Get one PostFile
     * const postFile = await prisma.postFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostFileFindUniqueArgs<ExtArgs>>
    ): Prisma__PostFileClient<$Result.GetResult<Prisma.$PostFilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PostFile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PostFileFindUniqueOrThrowArgs} args - Arguments to find a PostFile
     * @example
     * // Get one PostFile
     * const postFile = await prisma.postFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostFileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostFileClient<$Result.GetResult<Prisma.$PostFilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PostFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFileFindFirstArgs} args - Arguments to find a PostFile
     * @example
     * // Get one PostFile
     * const postFile = await prisma.postFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFileFindFirstArgs<ExtArgs>>
    ): Prisma__PostFileClient<$Result.GetResult<Prisma.$PostFilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PostFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFileFindFirstOrThrowArgs} args - Arguments to find a PostFile
     * @example
     * // Get one PostFile
     * const postFile = await prisma.postFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostFileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostFileClient<$Result.GetResult<Prisma.$PostFilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PostFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostFiles
     * const postFiles = await prisma.postFile.findMany()
     * 
     * // Get first 10 PostFiles
     * const postFiles = await prisma.postFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postFileWithIdOnly = await prisma.postFile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostFilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PostFile.
     * @param {PostFileCreateArgs} args - Arguments to create a PostFile.
     * @example
     * // Create one PostFile
     * const PostFile = await prisma.postFile.create({
     *   data: {
     *     // ... data to create a PostFile
     *   }
     * })
     * 
    **/
    create<T extends PostFileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostFileCreateArgs<ExtArgs>>
    ): Prisma__PostFileClient<$Result.GetResult<Prisma.$PostFilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PostFiles.
     * @param {PostFileCreateManyArgs} args - Arguments to create many PostFiles.
     * @example
     * // Create many PostFiles
     * const postFile = await prisma.postFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends PostFileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PostFile.
     * @param {PostFileDeleteArgs} args - Arguments to delete one PostFile.
     * @example
     * // Delete one PostFile
     * const PostFile = await prisma.postFile.delete({
     *   where: {
     *     // ... filter to delete one PostFile
     *   }
     * })
     * 
    **/
    delete<T extends PostFileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostFileDeleteArgs<ExtArgs>>
    ): Prisma__PostFileClient<$Result.GetResult<Prisma.$PostFilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PostFile.
     * @param {PostFileUpdateArgs} args - Arguments to update one PostFile.
     * @example
     * // Update one PostFile
     * const postFile = await prisma.postFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostFileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostFileUpdateArgs<ExtArgs>>
    ): Prisma__PostFileClient<$Result.GetResult<Prisma.$PostFilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PostFiles.
     * @param {PostFileDeleteManyArgs} args - Arguments to filter PostFiles to delete.
     * @example
     * // Delete a few PostFiles
     * const { count } = await prisma.postFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostFileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostFiles
     * const postFile = await prisma.postFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostFileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostFileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostFile.
     * @param {PostFileUpsertArgs} args - Arguments to update or create a PostFile.
     * @example
     * // Update or create a PostFile
     * const postFile = await prisma.postFile.upsert({
     *   create: {
     *     // ... data to create a PostFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostFile we want to update
     *   }
     * })
    **/
    upsert<T extends PostFileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostFileUpsertArgs<ExtArgs>>
    ): Prisma__PostFileClient<$Result.GetResult<Prisma.$PostFilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PostFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFileCountArgs} args - Arguments to filter PostFiles to count.
     * @example
     * // Count the number of PostFiles
     * const count = await prisma.postFile.count({
     *   where: {
     *     // ... the filter for the PostFiles we want to count
     *   }
     * })
    **/
    count<T extends PostFileCountArgs>(
      args?: Subset<T, PostFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostFileAggregateArgs>(args: Subset<T, PostFileAggregateArgs>): Prisma.PrismaPromise<GetPostFileAggregateType<T>>

    /**
     * Group by PostFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFileGroupByArgs} args - Group by arguments.
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
      T extends PostFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostFileGroupByArgs['orderBy'] }
        : { orderBy?: PostFileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostFile model
   */
  readonly fields: PostFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PostFile model
   */ 
  interface PostFileFieldRefs {
    readonly id: FieldRef<"PostFile", 'Int'>
    readonly originFileName: FieldRef<"PostFile", 'String'>
    readonly fileName: FieldRef<"PostFile", 'String'>
    readonly fileDir: FieldRef<"PostFile", 'String'>
    readonly fileExt: FieldRef<"PostFile", 'String'>
    readonly fullPath: FieldRef<"PostFile", 'String'>
    readonly size: FieldRef<"PostFile", 'Int'>
    readonly createdAt: FieldRef<"PostFile", 'DateTime'>
    readonly updatedAt: FieldRef<"PostFile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostFile findUnique
   */
  export type PostFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostFile
     */
    select?: PostFileSelect<ExtArgs> | null
    /**
     * Filter, which PostFile to fetch.
     */
    where: PostFileWhereUniqueInput
  }

  /**
   * PostFile findUniqueOrThrow
   */
  export type PostFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostFile
     */
    select?: PostFileSelect<ExtArgs> | null
    /**
     * Filter, which PostFile to fetch.
     */
    where: PostFileWhereUniqueInput
  }

  /**
   * PostFile findFirst
   */
  export type PostFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostFile
     */
    select?: PostFileSelect<ExtArgs> | null
    /**
     * Filter, which PostFile to fetch.
     */
    where?: PostFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostFiles to fetch.
     */
    orderBy?: PostFileOrderByWithRelationInput | PostFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostFiles.
     */
    cursor?: PostFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostFiles.
     */
    distinct?: PostFileScalarFieldEnum | PostFileScalarFieldEnum[]
  }

  /**
   * PostFile findFirstOrThrow
   */
  export type PostFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostFile
     */
    select?: PostFileSelect<ExtArgs> | null
    /**
     * Filter, which PostFile to fetch.
     */
    where?: PostFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostFiles to fetch.
     */
    orderBy?: PostFileOrderByWithRelationInput | PostFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostFiles.
     */
    cursor?: PostFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostFiles.
     */
    distinct?: PostFileScalarFieldEnum | PostFileScalarFieldEnum[]
  }

  /**
   * PostFile findMany
   */
  export type PostFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostFile
     */
    select?: PostFileSelect<ExtArgs> | null
    /**
     * Filter, which PostFiles to fetch.
     */
    where?: PostFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostFiles to fetch.
     */
    orderBy?: PostFileOrderByWithRelationInput | PostFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostFiles.
     */
    cursor?: PostFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostFiles.
     */
    skip?: number
    distinct?: PostFileScalarFieldEnum | PostFileScalarFieldEnum[]
  }

  /**
   * PostFile create
   */
  export type PostFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostFile
     */
    select?: PostFileSelect<ExtArgs> | null
    /**
     * The data needed to create a PostFile.
     */
    data: XOR<PostFileCreateInput, PostFileUncheckedCreateInput>
  }

  /**
   * PostFile createMany
   */
  export type PostFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostFiles.
     */
    data: PostFileCreateManyInput | PostFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostFile update
   */
  export type PostFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostFile
     */
    select?: PostFileSelect<ExtArgs> | null
    /**
     * The data needed to update a PostFile.
     */
    data: XOR<PostFileUpdateInput, PostFileUncheckedUpdateInput>
    /**
     * Choose, which PostFile to update.
     */
    where: PostFileWhereUniqueInput
  }

  /**
   * PostFile updateMany
   */
  export type PostFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostFiles.
     */
    data: XOR<PostFileUpdateManyMutationInput, PostFileUncheckedUpdateManyInput>
    /**
     * Filter which PostFiles to update
     */
    where?: PostFileWhereInput
  }

  /**
   * PostFile upsert
   */
  export type PostFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostFile
     */
    select?: PostFileSelect<ExtArgs> | null
    /**
     * The filter to search for the PostFile to update in case it exists.
     */
    where: PostFileWhereUniqueInput
    /**
     * In case the PostFile found by the `where` argument doesn't exist, create a new PostFile with this data.
     */
    create: XOR<PostFileCreateInput, PostFileUncheckedCreateInput>
    /**
     * In case the PostFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostFileUpdateInput, PostFileUncheckedUpdateInput>
  }

  /**
   * PostFile delete
   */
  export type PostFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostFile
     */
    select?: PostFileSelect<ExtArgs> | null
    /**
     * Filter which PostFile to delete.
     */
    where: PostFileWhereUniqueInput
  }

  /**
   * PostFile deleteMany
   */
  export type PostFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostFiles to delete
     */
    where?: PostFileWhereInput
  }

  /**
   * PostFile without action
   */
  export type PostFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostFile
     */
    select?: PostFileSelect<ExtArgs> | null
  }


  /**
   * Model WebPushSubscription
   */

  export type AggregateWebPushSubscription = {
    _count: WebPushSubscriptionCountAggregateOutputType | null
    _avg: WebPushSubscriptionAvgAggregateOutputType | null
    _sum: WebPushSubscriptionSumAggregateOutputType | null
    _min: WebPushSubscriptionMinAggregateOutputType | null
    _max: WebPushSubscriptionMaxAggregateOutputType | null
  }

  export type WebPushSubscriptionAvgAggregateOutputType = {
    id: number | null
  }

  export type WebPushSubscriptionSumAggregateOutputType = {
    id: number | null
  }

  export type WebPushSubscriptionMinAggregateOutputType = {
    id: number | null
    endPoint: string | null
    pushKey: string | null
    auth: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebPushSubscriptionMaxAggregateOutputType = {
    id: number | null
    endPoint: string | null
    pushKey: string | null
    auth: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebPushSubscriptionCountAggregateOutputType = {
    id: number
    endPoint: number
    pushKey: number
    auth: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WebPushSubscriptionAvgAggregateInputType = {
    id?: true
  }

  export type WebPushSubscriptionSumAggregateInputType = {
    id?: true
  }

  export type WebPushSubscriptionMinAggregateInputType = {
    id?: true
    endPoint?: true
    pushKey?: true
    auth?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebPushSubscriptionMaxAggregateInputType = {
    id?: true
    endPoint?: true
    pushKey?: true
    auth?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebPushSubscriptionCountAggregateInputType = {
    id?: true
    endPoint?: true
    pushKey?: true
    auth?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WebPushSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebPushSubscription to aggregate.
     */
    where?: WebPushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebPushSubscriptions to fetch.
     */
    orderBy?: WebPushSubscriptionOrderByWithRelationInput | WebPushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebPushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebPushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebPushSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebPushSubscriptions
    **/
    _count?: true | WebPushSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebPushSubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebPushSubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebPushSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebPushSubscriptionMaxAggregateInputType
  }

  export type GetWebPushSubscriptionAggregateType<T extends WebPushSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateWebPushSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebPushSubscription[P]>
      : GetScalarType<T[P], AggregateWebPushSubscription[P]>
  }




  export type WebPushSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebPushSubscriptionWhereInput
    orderBy?: WebPushSubscriptionOrderByWithAggregationInput | WebPushSubscriptionOrderByWithAggregationInput[]
    by: WebPushSubscriptionScalarFieldEnum[] | WebPushSubscriptionScalarFieldEnum
    having?: WebPushSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebPushSubscriptionCountAggregateInputType | true
    _avg?: WebPushSubscriptionAvgAggregateInputType
    _sum?: WebPushSubscriptionSumAggregateInputType
    _min?: WebPushSubscriptionMinAggregateInputType
    _max?: WebPushSubscriptionMaxAggregateInputType
  }

  export type WebPushSubscriptionGroupByOutputType = {
    id: number
    endPoint: string
    pushKey: string
    auth: string
    createdAt: Date
    updatedAt: Date
    _count: WebPushSubscriptionCountAggregateOutputType | null
    _avg: WebPushSubscriptionAvgAggregateOutputType | null
    _sum: WebPushSubscriptionSumAggregateOutputType | null
    _min: WebPushSubscriptionMinAggregateOutputType | null
    _max: WebPushSubscriptionMaxAggregateOutputType | null
  }

  type GetWebPushSubscriptionGroupByPayload<T extends WebPushSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebPushSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebPushSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebPushSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], WebPushSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type WebPushSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endPoint?: boolean
    pushKey?: boolean
    auth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["webPushSubscription"]>

  export type WebPushSubscriptionSelectScalar = {
    id?: boolean
    endPoint?: boolean
    pushKey?: boolean
    auth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }



  export type $WebPushSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebPushSubscription"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      endPoint: string
      pushKey: string
      auth: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["webPushSubscription"]>
    composites: {}
  }


  type WebPushSubscriptionGetPayload<S extends boolean | null | undefined | WebPushSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$WebPushSubscriptionPayload, S>

  type WebPushSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WebPushSubscriptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WebPushSubscriptionCountAggregateInputType | true
    }

  export interface WebPushSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebPushSubscription'], meta: { name: 'WebPushSubscription' } }
    /**
     * Find zero or one WebPushSubscription that matches the filter.
     * @param {WebPushSubscriptionFindUniqueArgs} args - Arguments to find a WebPushSubscription
     * @example
     * // Get one WebPushSubscription
     * const webPushSubscription = await prisma.webPushSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WebPushSubscriptionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WebPushSubscriptionFindUniqueArgs<ExtArgs>>
    ): Prisma__WebPushSubscriptionClient<$Result.GetResult<Prisma.$WebPushSubscriptionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one WebPushSubscription that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WebPushSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a WebPushSubscription
     * @example
     * // Get one WebPushSubscription
     * const webPushSubscription = await prisma.webPushSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WebPushSubscriptionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WebPushSubscriptionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WebPushSubscriptionClient<$Result.GetResult<Prisma.$WebPushSubscriptionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first WebPushSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebPushSubscriptionFindFirstArgs} args - Arguments to find a WebPushSubscription
     * @example
     * // Get one WebPushSubscription
     * const webPushSubscription = await prisma.webPushSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WebPushSubscriptionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WebPushSubscriptionFindFirstArgs<ExtArgs>>
    ): Prisma__WebPushSubscriptionClient<$Result.GetResult<Prisma.$WebPushSubscriptionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first WebPushSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebPushSubscriptionFindFirstOrThrowArgs} args - Arguments to find a WebPushSubscription
     * @example
     * // Get one WebPushSubscription
     * const webPushSubscription = await prisma.webPushSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WebPushSubscriptionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WebPushSubscriptionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WebPushSubscriptionClient<$Result.GetResult<Prisma.$WebPushSubscriptionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more WebPushSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebPushSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebPushSubscriptions
     * const webPushSubscriptions = await prisma.webPushSubscription.findMany()
     * 
     * // Get first 10 WebPushSubscriptions
     * const webPushSubscriptions = await prisma.webPushSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webPushSubscriptionWithIdOnly = await prisma.webPushSubscription.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WebPushSubscriptionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WebPushSubscriptionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebPushSubscriptionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a WebPushSubscription.
     * @param {WebPushSubscriptionCreateArgs} args - Arguments to create a WebPushSubscription.
     * @example
     * // Create one WebPushSubscription
     * const WebPushSubscription = await prisma.webPushSubscription.create({
     *   data: {
     *     // ... data to create a WebPushSubscription
     *   }
     * })
     * 
    **/
    create<T extends WebPushSubscriptionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WebPushSubscriptionCreateArgs<ExtArgs>>
    ): Prisma__WebPushSubscriptionClient<$Result.GetResult<Prisma.$WebPushSubscriptionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many WebPushSubscriptions.
     * @param {WebPushSubscriptionCreateManyArgs} args - Arguments to create many WebPushSubscriptions.
     * @example
     * // Create many WebPushSubscriptions
     * const webPushSubscription = await prisma.webPushSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends WebPushSubscriptionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WebPushSubscriptionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WebPushSubscription.
     * @param {WebPushSubscriptionDeleteArgs} args - Arguments to delete one WebPushSubscription.
     * @example
     * // Delete one WebPushSubscription
     * const WebPushSubscription = await prisma.webPushSubscription.delete({
     *   where: {
     *     // ... filter to delete one WebPushSubscription
     *   }
     * })
     * 
    **/
    delete<T extends WebPushSubscriptionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WebPushSubscriptionDeleteArgs<ExtArgs>>
    ): Prisma__WebPushSubscriptionClient<$Result.GetResult<Prisma.$WebPushSubscriptionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one WebPushSubscription.
     * @param {WebPushSubscriptionUpdateArgs} args - Arguments to update one WebPushSubscription.
     * @example
     * // Update one WebPushSubscription
     * const webPushSubscription = await prisma.webPushSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WebPushSubscriptionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WebPushSubscriptionUpdateArgs<ExtArgs>>
    ): Prisma__WebPushSubscriptionClient<$Result.GetResult<Prisma.$WebPushSubscriptionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more WebPushSubscriptions.
     * @param {WebPushSubscriptionDeleteManyArgs} args - Arguments to filter WebPushSubscriptions to delete.
     * @example
     * // Delete a few WebPushSubscriptions
     * const { count } = await prisma.webPushSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WebPushSubscriptionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WebPushSubscriptionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebPushSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebPushSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebPushSubscriptions
     * const webPushSubscription = await prisma.webPushSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WebPushSubscriptionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WebPushSubscriptionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WebPushSubscription.
     * @param {WebPushSubscriptionUpsertArgs} args - Arguments to update or create a WebPushSubscription.
     * @example
     * // Update or create a WebPushSubscription
     * const webPushSubscription = await prisma.webPushSubscription.upsert({
     *   create: {
     *     // ... data to create a WebPushSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebPushSubscription we want to update
     *   }
     * })
    **/
    upsert<T extends WebPushSubscriptionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WebPushSubscriptionUpsertArgs<ExtArgs>>
    ): Prisma__WebPushSubscriptionClient<$Result.GetResult<Prisma.$WebPushSubscriptionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of WebPushSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebPushSubscriptionCountArgs} args - Arguments to filter WebPushSubscriptions to count.
     * @example
     * // Count the number of WebPushSubscriptions
     * const count = await prisma.webPushSubscription.count({
     *   where: {
     *     // ... the filter for the WebPushSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends WebPushSubscriptionCountArgs>(
      args?: Subset<T, WebPushSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebPushSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebPushSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebPushSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebPushSubscriptionAggregateArgs>(args: Subset<T, WebPushSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetWebPushSubscriptionAggregateType<T>>

    /**
     * Group by WebPushSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebPushSubscriptionGroupByArgs} args - Group by arguments.
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
      T extends WebPushSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebPushSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: WebPushSubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WebPushSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebPushSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebPushSubscription model
   */
  readonly fields: WebPushSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebPushSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebPushSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the WebPushSubscription model
   */ 
  interface WebPushSubscriptionFieldRefs {
    readonly id: FieldRef<"WebPushSubscription", 'Int'>
    readonly endPoint: FieldRef<"WebPushSubscription", 'String'>
    readonly pushKey: FieldRef<"WebPushSubscription", 'String'>
    readonly auth: FieldRef<"WebPushSubscription", 'String'>
    readonly createdAt: FieldRef<"WebPushSubscription", 'DateTime'>
    readonly updatedAt: FieldRef<"WebPushSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebPushSubscription findUnique
   */
  export type WebPushSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebPushSubscription
     */
    select?: WebPushSubscriptionSelect<ExtArgs> | null
    /**
     * Filter, which WebPushSubscription to fetch.
     */
    where: WebPushSubscriptionWhereUniqueInput
  }

  /**
   * WebPushSubscription findUniqueOrThrow
   */
  export type WebPushSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebPushSubscription
     */
    select?: WebPushSubscriptionSelect<ExtArgs> | null
    /**
     * Filter, which WebPushSubscription to fetch.
     */
    where: WebPushSubscriptionWhereUniqueInput
  }

  /**
   * WebPushSubscription findFirst
   */
  export type WebPushSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebPushSubscription
     */
    select?: WebPushSubscriptionSelect<ExtArgs> | null
    /**
     * Filter, which WebPushSubscription to fetch.
     */
    where?: WebPushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebPushSubscriptions to fetch.
     */
    orderBy?: WebPushSubscriptionOrderByWithRelationInput | WebPushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebPushSubscriptions.
     */
    cursor?: WebPushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebPushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebPushSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebPushSubscriptions.
     */
    distinct?: WebPushSubscriptionScalarFieldEnum | WebPushSubscriptionScalarFieldEnum[]
  }

  /**
   * WebPushSubscription findFirstOrThrow
   */
  export type WebPushSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebPushSubscription
     */
    select?: WebPushSubscriptionSelect<ExtArgs> | null
    /**
     * Filter, which WebPushSubscription to fetch.
     */
    where?: WebPushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebPushSubscriptions to fetch.
     */
    orderBy?: WebPushSubscriptionOrderByWithRelationInput | WebPushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebPushSubscriptions.
     */
    cursor?: WebPushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebPushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebPushSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebPushSubscriptions.
     */
    distinct?: WebPushSubscriptionScalarFieldEnum | WebPushSubscriptionScalarFieldEnum[]
  }

  /**
   * WebPushSubscription findMany
   */
  export type WebPushSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebPushSubscription
     */
    select?: WebPushSubscriptionSelect<ExtArgs> | null
    /**
     * Filter, which WebPushSubscriptions to fetch.
     */
    where?: WebPushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebPushSubscriptions to fetch.
     */
    orderBy?: WebPushSubscriptionOrderByWithRelationInput | WebPushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebPushSubscriptions.
     */
    cursor?: WebPushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebPushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebPushSubscriptions.
     */
    skip?: number
    distinct?: WebPushSubscriptionScalarFieldEnum | WebPushSubscriptionScalarFieldEnum[]
  }

  /**
   * WebPushSubscription create
   */
  export type WebPushSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebPushSubscription
     */
    select?: WebPushSubscriptionSelect<ExtArgs> | null
    /**
     * The data needed to create a WebPushSubscription.
     */
    data: XOR<WebPushSubscriptionCreateInput, WebPushSubscriptionUncheckedCreateInput>
  }

  /**
   * WebPushSubscription createMany
   */
  export type WebPushSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebPushSubscriptions.
     */
    data: WebPushSubscriptionCreateManyInput | WebPushSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebPushSubscription update
   */
  export type WebPushSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebPushSubscription
     */
    select?: WebPushSubscriptionSelect<ExtArgs> | null
    /**
     * The data needed to update a WebPushSubscription.
     */
    data: XOR<WebPushSubscriptionUpdateInput, WebPushSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which WebPushSubscription to update.
     */
    where: WebPushSubscriptionWhereUniqueInput
  }

  /**
   * WebPushSubscription updateMany
   */
  export type WebPushSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebPushSubscriptions.
     */
    data: XOR<WebPushSubscriptionUpdateManyMutationInput, WebPushSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which WebPushSubscriptions to update
     */
    where?: WebPushSubscriptionWhereInput
  }

  /**
   * WebPushSubscription upsert
   */
  export type WebPushSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebPushSubscription
     */
    select?: WebPushSubscriptionSelect<ExtArgs> | null
    /**
     * The filter to search for the WebPushSubscription to update in case it exists.
     */
    where: WebPushSubscriptionWhereUniqueInput
    /**
     * In case the WebPushSubscription found by the `where` argument doesn't exist, create a new WebPushSubscription with this data.
     */
    create: XOR<WebPushSubscriptionCreateInput, WebPushSubscriptionUncheckedCreateInput>
    /**
     * In case the WebPushSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebPushSubscriptionUpdateInput, WebPushSubscriptionUncheckedUpdateInput>
  }

  /**
   * WebPushSubscription delete
   */
  export type WebPushSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebPushSubscription
     */
    select?: WebPushSubscriptionSelect<ExtArgs> | null
    /**
     * Filter which WebPushSubscription to delete.
     */
    where: WebPushSubscriptionWhereUniqueInput
  }

  /**
   * WebPushSubscription deleteMany
   */
  export type WebPushSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebPushSubscriptions to delete
     */
    where?: WebPushSubscriptionWhereInput
  }

  /**
   * WebPushSubscription without action
   */
  export type WebPushSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebPushSubscription
     */
    select?: WebPushSubscriptionSelect<ExtArgs> | null
  }


  /**
   * Model WebPushKey
   */

  export type AggregateWebPushKey = {
    _count: WebPushKeyCountAggregateOutputType | null
    _avg: WebPushKeyAvgAggregateOutputType | null
    _sum: WebPushKeySumAggregateOutputType | null
    _min: WebPushKeyMinAggregateOutputType | null
    _max: WebPushKeyMaxAggregateOutputType | null
  }

  export type WebPushKeyAvgAggregateOutputType = {
    id: number | null
  }

  export type WebPushKeySumAggregateOutputType = {
    id: number | null
  }

  export type WebPushKeyMinAggregateOutputType = {
    id: number | null
    publicKey: string | null
    privateKey: string | null
  }

  export type WebPushKeyMaxAggregateOutputType = {
    id: number | null
    publicKey: string | null
    privateKey: string | null
  }

  export type WebPushKeyCountAggregateOutputType = {
    id: number
    publicKey: number
    privateKey: number
    _all: number
  }


  export type WebPushKeyAvgAggregateInputType = {
    id?: true
  }

  export type WebPushKeySumAggregateInputType = {
    id?: true
  }

  export type WebPushKeyMinAggregateInputType = {
    id?: true
    publicKey?: true
    privateKey?: true
  }

  export type WebPushKeyMaxAggregateInputType = {
    id?: true
    publicKey?: true
    privateKey?: true
  }

  export type WebPushKeyCountAggregateInputType = {
    id?: true
    publicKey?: true
    privateKey?: true
    _all?: true
  }

  export type WebPushKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebPushKey to aggregate.
     */
    where?: WebPushKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebPushKeys to fetch.
     */
    orderBy?: WebPushKeyOrderByWithRelationInput | WebPushKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebPushKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebPushKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebPushKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebPushKeys
    **/
    _count?: true | WebPushKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebPushKeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebPushKeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebPushKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebPushKeyMaxAggregateInputType
  }

  export type GetWebPushKeyAggregateType<T extends WebPushKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateWebPushKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebPushKey[P]>
      : GetScalarType<T[P], AggregateWebPushKey[P]>
  }




  export type WebPushKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebPushKeyWhereInput
    orderBy?: WebPushKeyOrderByWithAggregationInput | WebPushKeyOrderByWithAggregationInput[]
    by: WebPushKeyScalarFieldEnum[] | WebPushKeyScalarFieldEnum
    having?: WebPushKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebPushKeyCountAggregateInputType | true
    _avg?: WebPushKeyAvgAggregateInputType
    _sum?: WebPushKeySumAggregateInputType
    _min?: WebPushKeyMinAggregateInputType
    _max?: WebPushKeyMaxAggregateInputType
  }

  export type WebPushKeyGroupByOutputType = {
    id: number
    publicKey: string
    privateKey: string
    _count: WebPushKeyCountAggregateOutputType | null
    _avg: WebPushKeyAvgAggregateOutputType | null
    _sum: WebPushKeySumAggregateOutputType | null
    _min: WebPushKeyMinAggregateOutputType | null
    _max: WebPushKeyMaxAggregateOutputType | null
  }

  type GetWebPushKeyGroupByPayload<T extends WebPushKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebPushKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebPushKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebPushKeyGroupByOutputType[P]>
            : GetScalarType<T[P], WebPushKeyGroupByOutputType[P]>
        }
      >
    >


  export type WebPushKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    privateKey?: boolean
  }, ExtArgs["result"]["webPushKey"]>

  export type WebPushKeySelectScalar = {
    id?: boolean
    publicKey?: boolean
    privateKey?: boolean
  }



  export type $WebPushKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebPushKey"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      publicKey: string
      privateKey: string
    }, ExtArgs["result"]["webPushKey"]>
    composites: {}
  }


  type WebPushKeyGetPayload<S extends boolean | null | undefined | WebPushKeyDefaultArgs> = $Result.GetResult<Prisma.$WebPushKeyPayload, S>

  type WebPushKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WebPushKeyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WebPushKeyCountAggregateInputType | true
    }

  export interface WebPushKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebPushKey'], meta: { name: 'WebPushKey' } }
    /**
     * Find zero or one WebPushKey that matches the filter.
     * @param {WebPushKeyFindUniqueArgs} args - Arguments to find a WebPushKey
     * @example
     * // Get one WebPushKey
     * const webPushKey = await prisma.webPushKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WebPushKeyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WebPushKeyFindUniqueArgs<ExtArgs>>
    ): Prisma__WebPushKeyClient<$Result.GetResult<Prisma.$WebPushKeyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one WebPushKey that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WebPushKeyFindUniqueOrThrowArgs} args - Arguments to find a WebPushKey
     * @example
     * // Get one WebPushKey
     * const webPushKey = await prisma.webPushKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WebPushKeyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WebPushKeyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WebPushKeyClient<$Result.GetResult<Prisma.$WebPushKeyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first WebPushKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebPushKeyFindFirstArgs} args - Arguments to find a WebPushKey
     * @example
     * // Get one WebPushKey
     * const webPushKey = await prisma.webPushKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WebPushKeyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WebPushKeyFindFirstArgs<ExtArgs>>
    ): Prisma__WebPushKeyClient<$Result.GetResult<Prisma.$WebPushKeyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first WebPushKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebPushKeyFindFirstOrThrowArgs} args - Arguments to find a WebPushKey
     * @example
     * // Get one WebPushKey
     * const webPushKey = await prisma.webPushKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WebPushKeyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WebPushKeyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WebPushKeyClient<$Result.GetResult<Prisma.$WebPushKeyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more WebPushKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebPushKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebPushKeys
     * const webPushKeys = await prisma.webPushKey.findMany()
     * 
     * // Get first 10 WebPushKeys
     * const webPushKeys = await prisma.webPushKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webPushKeyWithIdOnly = await prisma.webPushKey.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WebPushKeyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WebPushKeyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebPushKeyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a WebPushKey.
     * @param {WebPushKeyCreateArgs} args - Arguments to create a WebPushKey.
     * @example
     * // Create one WebPushKey
     * const WebPushKey = await prisma.webPushKey.create({
     *   data: {
     *     // ... data to create a WebPushKey
     *   }
     * })
     * 
    **/
    create<T extends WebPushKeyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WebPushKeyCreateArgs<ExtArgs>>
    ): Prisma__WebPushKeyClient<$Result.GetResult<Prisma.$WebPushKeyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many WebPushKeys.
     * @param {WebPushKeyCreateManyArgs} args - Arguments to create many WebPushKeys.
     * @example
     * // Create many WebPushKeys
     * const webPushKey = await prisma.webPushKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends WebPushKeyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WebPushKeyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WebPushKey.
     * @param {WebPushKeyDeleteArgs} args - Arguments to delete one WebPushKey.
     * @example
     * // Delete one WebPushKey
     * const WebPushKey = await prisma.webPushKey.delete({
     *   where: {
     *     // ... filter to delete one WebPushKey
     *   }
     * })
     * 
    **/
    delete<T extends WebPushKeyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WebPushKeyDeleteArgs<ExtArgs>>
    ): Prisma__WebPushKeyClient<$Result.GetResult<Prisma.$WebPushKeyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one WebPushKey.
     * @param {WebPushKeyUpdateArgs} args - Arguments to update one WebPushKey.
     * @example
     * // Update one WebPushKey
     * const webPushKey = await prisma.webPushKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WebPushKeyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WebPushKeyUpdateArgs<ExtArgs>>
    ): Prisma__WebPushKeyClient<$Result.GetResult<Prisma.$WebPushKeyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more WebPushKeys.
     * @param {WebPushKeyDeleteManyArgs} args - Arguments to filter WebPushKeys to delete.
     * @example
     * // Delete a few WebPushKeys
     * const { count } = await prisma.webPushKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WebPushKeyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WebPushKeyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebPushKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebPushKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebPushKeys
     * const webPushKey = await prisma.webPushKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WebPushKeyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WebPushKeyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WebPushKey.
     * @param {WebPushKeyUpsertArgs} args - Arguments to update or create a WebPushKey.
     * @example
     * // Update or create a WebPushKey
     * const webPushKey = await prisma.webPushKey.upsert({
     *   create: {
     *     // ... data to create a WebPushKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebPushKey we want to update
     *   }
     * })
    **/
    upsert<T extends WebPushKeyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WebPushKeyUpsertArgs<ExtArgs>>
    ): Prisma__WebPushKeyClient<$Result.GetResult<Prisma.$WebPushKeyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of WebPushKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebPushKeyCountArgs} args - Arguments to filter WebPushKeys to count.
     * @example
     * // Count the number of WebPushKeys
     * const count = await prisma.webPushKey.count({
     *   where: {
     *     // ... the filter for the WebPushKeys we want to count
     *   }
     * })
    **/
    count<T extends WebPushKeyCountArgs>(
      args?: Subset<T, WebPushKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebPushKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebPushKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebPushKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebPushKeyAggregateArgs>(args: Subset<T, WebPushKeyAggregateArgs>): Prisma.PrismaPromise<GetWebPushKeyAggregateType<T>>

    /**
     * Group by WebPushKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebPushKeyGroupByArgs} args - Group by arguments.
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
      T extends WebPushKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebPushKeyGroupByArgs['orderBy'] }
        : { orderBy?: WebPushKeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WebPushKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebPushKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebPushKey model
   */
  readonly fields: WebPushKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebPushKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebPushKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the WebPushKey model
   */ 
  interface WebPushKeyFieldRefs {
    readonly id: FieldRef<"WebPushKey", 'Int'>
    readonly publicKey: FieldRef<"WebPushKey", 'String'>
    readonly privateKey: FieldRef<"WebPushKey", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WebPushKey findUnique
   */
  export type WebPushKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebPushKey
     */
    select?: WebPushKeySelect<ExtArgs> | null
    /**
     * Filter, which WebPushKey to fetch.
     */
    where: WebPushKeyWhereUniqueInput
  }

  /**
   * WebPushKey findUniqueOrThrow
   */
  export type WebPushKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebPushKey
     */
    select?: WebPushKeySelect<ExtArgs> | null
    /**
     * Filter, which WebPushKey to fetch.
     */
    where: WebPushKeyWhereUniqueInput
  }

  /**
   * WebPushKey findFirst
   */
  export type WebPushKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebPushKey
     */
    select?: WebPushKeySelect<ExtArgs> | null
    /**
     * Filter, which WebPushKey to fetch.
     */
    where?: WebPushKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebPushKeys to fetch.
     */
    orderBy?: WebPushKeyOrderByWithRelationInput | WebPushKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebPushKeys.
     */
    cursor?: WebPushKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebPushKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebPushKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebPushKeys.
     */
    distinct?: WebPushKeyScalarFieldEnum | WebPushKeyScalarFieldEnum[]
  }

  /**
   * WebPushKey findFirstOrThrow
   */
  export type WebPushKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebPushKey
     */
    select?: WebPushKeySelect<ExtArgs> | null
    /**
     * Filter, which WebPushKey to fetch.
     */
    where?: WebPushKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebPushKeys to fetch.
     */
    orderBy?: WebPushKeyOrderByWithRelationInput | WebPushKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebPushKeys.
     */
    cursor?: WebPushKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebPushKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebPushKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebPushKeys.
     */
    distinct?: WebPushKeyScalarFieldEnum | WebPushKeyScalarFieldEnum[]
  }

  /**
   * WebPushKey findMany
   */
  export type WebPushKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebPushKey
     */
    select?: WebPushKeySelect<ExtArgs> | null
    /**
     * Filter, which WebPushKeys to fetch.
     */
    where?: WebPushKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebPushKeys to fetch.
     */
    orderBy?: WebPushKeyOrderByWithRelationInput | WebPushKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebPushKeys.
     */
    cursor?: WebPushKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebPushKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebPushKeys.
     */
    skip?: number
    distinct?: WebPushKeyScalarFieldEnum | WebPushKeyScalarFieldEnum[]
  }

  /**
   * WebPushKey create
   */
  export type WebPushKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebPushKey
     */
    select?: WebPushKeySelect<ExtArgs> | null
    /**
     * The data needed to create a WebPushKey.
     */
    data: XOR<WebPushKeyCreateInput, WebPushKeyUncheckedCreateInput>
  }

  /**
   * WebPushKey createMany
   */
  export type WebPushKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebPushKeys.
     */
    data: WebPushKeyCreateManyInput | WebPushKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebPushKey update
   */
  export type WebPushKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebPushKey
     */
    select?: WebPushKeySelect<ExtArgs> | null
    /**
     * The data needed to update a WebPushKey.
     */
    data: XOR<WebPushKeyUpdateInput, WebPushKeyUncheckedUpdateInput>
    /**
     * Choose, which WebPushKey to update.
     */
    where: WebPushKeyWhereUniqueInput
  }

  /**
   * WebPushKey updateMany
   */
  export type WebPushKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebPushKeys.
     */
    data: XOR<WebPushKeyUpdateManyMutationInput, WebPushKeyUncheckedUpdateManyInput>
    /**
     * Filter which WebPushKeys to update
     */
    where?: WebPushKeyWhereInput
  }

  /**
   * WebPushKey upsert
   */
  export type WebPushKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebPushKey
     */
    select?: WebPushKeySelect<ExtArgs> | null
    /**
     * The filter to search for the WebPushKey to update in case it exists.
     */
    where: WebPushKeyWhereUniqueInput
    /**
     * In case the WebPushKey found by the `where` argument doesn't exist, create a new WebPushKey with this data.
     */
    create: XOR<WebPushKeyCreateInput, WebPushKeyUncheckedCreateInput>
    /**
     * In case the WebPushKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebPushKeyUpdateInput, WebPushKeyUncheckedUpdateInput>
  }

  /**
   * WebPushKey delete
   */
  export type WebPushKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebPushKey
     */
    select?: WebPushKeySelect<ExtArgs> | null
    /**
     * Filter which WebPushKey to delete.
     */
    where: WebPushKeyWhereUniqueInput
  }

  /**
   * WebPushKey deleteMany
   */
  export type WebPushKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebPushKeys to delete
     */
    where?: WebPushKeyWhereInput
  }

  /**
   * WebPushKey without action
   */
  export type WebPushKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebPushKey
     */
    select?: WebPushKeySelect<ExtArgs> | null
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
    no: 'no',
    userId: 'userId',
    userName: 'userName',
    nickName: 'nickName',
    email: 'email',
    password: 'password',
    imageUrl: 'imageUrl',
    isAdmin: 'isAdmin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BoardScalarFieldEnum: {
    id: 'id',
    title: 'title',
    contents: 'contents',
    subDescription: 'subDescription',
    views: 'views',
    userNo: 'userNo',
    categoryNo: 'categoryNo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BoardScalarFieldEnum = (typeof BoardScalarFieldEnum)[keyof typeof BoardScalarFieldEnum]


  export const BoardCategoryScalarFieldEnum: {
    no: 'no',
    categoryName: 'categoryName'
  };

  export type BoardCategoryScalarFieldEnum = (typeof BoardCategoryScalarFieldEnum)[keyof typeof BoardCategoryScalarFieldEnum]


  export const PostFileScalarFieldEnum: {
    id: 'id',
    originFileName: 'originFileName',
    fileName: 'fileName',
    fileDir: 'fileDir',
    fileExt: 'fileExt',
    fullPath: 'fullPath',
    size: 'size',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostFileScalarFieldEnum = (typeof PostFileScalarFieldEnum)[keyof typeof PostFileScalarFieldEnum]


  export const WebPushSubscriptionScalarFieldEnum: {
    id: 'id',
    endPoint: 'endPoint',
    pushKey: 'pushKey',
    auth: 'auth',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WebPushSubscriptionScalarFieldEnum = (typeof WebPushSubscriptionScalarFieldEnum)[keyof typeof WebPushSubscriptionScalarFieldEnum]


  export const WebPushKeyScalarFieldEnum: {
    id: 'id',
    publicKey: 'publicKey',
    privateKey: 'privateKey'
  };

  export type WebPushKeyScalarFieldEnum = (typeof WebPushKeyScalarFieldEnum)[keyof typeof WebPushKeyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    no?: IntFilter<"User"> | number
    userId?: StringFilter<"User"> | string
    userName?: StringNullableFilter<"User"> | string | null
    nickName?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    imageUrl?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    boards?: BoardListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    no?: SortOrder
    userId?: SortOrder
    userName?: SortOrderInput | SortOrder
    nickName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    imageUrl?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    boards?: BoardOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    no?: number
    userId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userName?: StringNullableFilter<"User"> | string | null
    nickName?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    imageUrl?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    boards?: BoardListRelationFilter
  }, "no" | "userId">

  export type UserOrderByWithAggregationInput = {
    no?: SortOrder
    userId?: SortOrder
    userName?: SortOrderInput | SortOrder
    nickName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    imageUrl?: SortOrder
    isAdmin?: SortOrder
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
    no?: IntWithAggregatesFilter<"User"> | number
    userId?: StringWithAggregatesFilter<"User"> | string
    userName?: StringNullableWithAggregatesFilter<"User"> | string | null
    nickName?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    imageUrl?: StringWithAggregatesFilter<"User"> | string
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BoardWhereInput = {
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    id?: IntFilter<"Board"> | number
    title?: StringFilter<"Board"> | string
    contents?: StringNullableFilter<"Board"> | string | null
    subDescription?: StringNullableFilter<"Board"> | string | null
    views?: IntFilter<"Board"> | number
    userNo?: IntFilter<"Board"> | number
    categoryNo?: IntFilter<"Board"> | number
    createdAt?: DateTimeFilter<"Board"> | Date | string
    updatedAt?: DateTimeFilter<"Board"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    category?: XOR<BoardCategoryRelationFilter, BoardCategoryWhereInput>
  }

  export type BoardOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    contents?: SortOrderInput | SortOrder
    subDescription?: SortOrderInput | SortOrder
    views?: SortOrder
    userNo?: SortOrder
    categoryNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: BoardCategoryOrderByWithRelationInput
  }

  export type BoardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    title?: StringFilter<"Board"> | string
    contents?: StringNullableFilter<"Board"> | string | null
    subDescription?: StringNullableFilter<"Board"> | string | null
    views?: IntFilter<"Board"> | number
    userNo?: IntFilter<"Board"> | number
    categoryNo?: IntFilter<"Board"> | number
    createdAt?: DateTimeFilter<"Board"> | Date | string
    updatedAt?: DateTimeFilter<"Board"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    category?: XOR<BoardCategoryRelationFilter, BoardCategoryWhereInput>
  }, "id">

  export type BoardOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    contents?: SortOrderInput | SortOrder
    subDescription?: SortOrderInput | SortOrder
    views?: SortOrder
    userNo?: SortOrder
    categoryNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BoardCountOrderByAggregateInput
    _avg?: BoardAvgOrderByAggregateInput
    _max?: BoardMaxOrderByAggregateInput
    _min?: BoardMinOrderByAggregateInput
    _sum?: BoardSumOrderByAggregateInput
  }

  export type BoardScalarWhereWithAggregatesInput = {
    AND?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    OR?: BoardScalarWhereWithAggregatesInput[]
    NOT?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Board"> | number
    title?: StringWithAggregatesFilter<"Board"> | string
    contents?: StringNullableWithAggregatesFilter<"Board"> | string | null
    subDescription?: StringNullableWithAggregatesFilter<"Board"> | string | null
    views?: IntWithAggregatesFilter<"Board"> | number
    userNo?: IntWithAggregatesFilter<"Board"> | number
    categoryNo?: IntWithAggregatesFilter<"Board"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Board"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Board"> | Date | string
  }

  export type BoardCategoryWhereInput = {
    AND?: BoardCategoryWhereInput | BoardCategoryWhereInput[]
    OR?: BoardCategoryWhereInput[]
    NOT?: BoardCategoryWhereInput | BoardCategoryWhereInput[]
    no?: IntFilter<"BoardCategory"> | number
    categoryName?: StringFilter<"BoardCategory"> | string
    boards?: BoardListRelationFilter
  }

  export type BoardCategoryOrderByWithRelationInput = {
    no?: SortOrder
    categoryName?: SortOrder
    boards?: BoardOrderByRelationAggregateInput
  }

  export type BoardCategoryWhereUniqueInput = Prisma.AtLeast<{
    no?: number
    AND?: BoardCategoryWhereInput | BoardCategoryWhereInput[]
    OR?: BoardCategoryWhereInput[]
    NOT?: BoardCategoryWhereInput | BoardCategoryWhereInput[]
    categoryName?: StringFilter<"BoardCategory"> | string
    boards?: BoardListRelationFilter
  }, "no">

  export type BoardCategoryOrderByWithAggregationInput = {
    no?: SortOrder
    categoryName?: SortOrder
    _count?: BoardCategoryCountOrderByAggregateInput
    _avg?: BoardCategoryAvgOrderByAggregateInput
    _max?: BoardCategoryMaxOrderByAggregateInput
    _min?: BoardCategoryMinOrderByAggregateInput
    _sum?: BoardCategorySumOrderByAggregateInput
  }

  export type BoardCategoryScalarWhereWithAggregatesInput = {
    AND?: BoardCategoryScalarWhereWithAggregatesInput | BoardCategoryScalarWhereWithAggregatesInput[]
    OR?: BoardCategoryScalarWhereWithAggregatesInput[]
    NOT?: BoardCategoryScalarWhereWithAggregatesInput | BoardCategoryScalarWhereWithAggregatesInput[]
    no?: IntWithAggregatesFilter<"BoardCategory"> | number
    categoryName?: StringWithAggregatesFilter<"BoardCategory"> | string
  }

  export type PostFileWhereInput = {
    AND?: PostFileWhereInput | PostFileWhereInput[]
    OR?: PostFileWhereInput[]
    NOT?: PostFileWhereInput | PostFileWhereInput[]
    id?: IntFilter<"PostFile"> | number
    originFileName?: StringFilter<"PostFile"> | string
    fileName?: StringFilter<"PostFile"> | string
    fileDir?: StringFilter<"PostFile"> | string
    fileExt?: StringFilter<"PostFile"> | string
    fullPath?: StringFilter<"PostFile"> | string
    size?: IntFilter<"PostFile"> | number
    createdAt?: DateTimeFilter<"PostFile"> | Date | string
    updatedAt?: DateTimeFilter<"PostFile"> | Date | string
  }

  export type PostFileOrderByWithRelationInput = {
    id?: SortOrder
    originFileName?: SortOrder
    fileName?: SortOrder
    fileDir?: SortOrder
    fileExt?: SortOrder
    fullPath?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostFileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostFileWhereInput | PostFileWhereInput[]
    OR?: PostFileWhereInput[]
    NOT?: PostFileWhereInput | PostFileWhereInput[]
    originFileName?: StringFilter<"PostFile"> | string
    fileName?: StringFilter<"PostFile"> | string
    fileDir?: StringFilter<"PostFile"> | string
    fileExt?: StringFilter<"PostFile"> | string
    fullPath?: StringFilter<"PostFile"> | string
    size?: IntFilter<"PostFile"> | number
    createdAt?: DateTimeFilter<"PostFile"> | Date | string
    updatedAt?: DateTimeFilter<"PostFile"> | Date | string
  }, "id">

  export type PostFileOrderByWithAggregationInput = {
    id?: SortOrder
    originFileName?: SortOrder
    fileName?: SortOrder
    fileDir?: SortOrder
    fileExt?: SortOrder
    fullPath?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostFileCountOrderByAggregateInput
    _avg?: PostFileAvgOrderByAggregateInput
    _max?: PostFileMaxOrderByAggregateInput
    _min?: PostFileMinOrderByAggregateInput
    _sum?: PostFileSumOrderByAggregateInput
  }

  export type PostFileScalarWhereWithAggregatesInput = {
    AND?: PostFileScalarWhereWithAggregatesInput | PostFileScalarWhereWithAggregatesInput[]
    OR?: PostFileScalarWhereWithAggregatesInput[]
    NOT?: PostFileScalarWhereWithAggregatesInput | PostFileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostFile"> | number
    originFileName?: StringWithAggregatesFilter<"PostFile"> | string
    fileName?: StringWithAggregatesFilter<"PostFile"> | string
    fileDir?: StringWithAggregatesFilter<"PostFile"> | string
    fileExt?: StringWithAggregatesFilter<"PostFile"> | string
    fullPath?: StringWithAggregatesFilter<"PostFile"> | string
    size?: IntWithAggregatesFilter<"PostFile"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PostFile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PostFile"> | Date | string
  }

  export type WebPushSubscriptionWhereInput = {
    AND?: WebPushSubscriptionWhereInput | WebPushSubscriptionWhereInput[]
    OR?: WebPushSubscriptionWhereInput[]
    NOT?: WebPushSubscriptionWhereInput | WebPushSubscriptionWhereInput[]
    id?: IntFilter<"WebPushSubscription"> | number
    endPoint?: StringFilter<"WebPushSubscription"> | string
    pushKey?: StringFilter<"WebPushSubscription"> | string
    auth?: StringFilter<"WebPushSubscription"> | string
    createdAt?: DateTimeFilter<"WebPushSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"WebPushSubscription"> | Date | string
  }

  export type WebPushSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    endPoint?: SortOrder
    pushKey?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebPushSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WebPushSubscriptionWhereInput | WebPushSubscriptionWhereInput[]
    OR?: WebPushSubscriptionWhereInput[]
    NOT?: WebPushSubscriptionWhereInput | WebPushSubscriptionWhereInput[]
    endPoint?: StringFilter<"WebPushSubscription"> | string
    pushKey?: StringFilter<"WebPushSubscription"> | string
    auth?: StringFilter<"WebPushSubscription"> | string
    createdAt?: DateTimeFilter<"WebPushSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"WebPushSubscription"> | Date | string
  }, "id">

  export type WebPushSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    endPoint?: SortOrder
    pushKey?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WebPushSubscriptionCountOrderByAggregateInput
    _avg?: WebPushSubscriptionAvgOrderByAggregateInput
    _max?: WebPushSubscriptionMaxOrderByAggregateInput
    _min?: WebPushSubscriptionMinOrderByAggregateInput
    _sum?: WebPushSubscriptionSumOrderByAggregateInput
  }

  export type WebPushSubscriptionScalarWhereWithAggregatesInput = {
    AND?: WebPushSubscriptionScalarWhereWithAggregatesInput | WebPushSubscriptionScalarWhereWithAggregatesInput[]
    OR?: WebPushSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: WebPushSubscriptionScalarWhereWithAggregatesInput | WebPushSubscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WebPushSubscription"> | number
    endPoint?: StringWithAggregatesFilter<"WebPushSubscription"> | string
    pushKey?: StringWithAggregatesFilter<"WebPushSubscription"> | string
    auth?: StringWithAggregatesFilter<"WebPushSubscription"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WebPushSubscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WebPushSubscription"> | Date | string
  }

  export type WebPushKeyWhereInput = {
    AND?: WebPushKeyWhereInput | WebPushKeyWhereInput[]
    OR?: WebPushKeyWhereInput[]
    NOT?: WebPushKeyWhereInput | WebPushKeyWhereInput[]
    id?: IntFilter<"WebPushKey"> | number
    publicKey?: StringFilter<"WebPushKey"> | string
    privateKey?: StringFilter<"WebPushKey"> | string
  }

  export type WebPushKeyOrderByWithRelationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
  }

  export type WebPushKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WebPushKeyWhereInput | WebPushKeyWhereInput[]
    OR?: WebPushKeyWhereInput[]
    NOT?: WebPushKeyWhereInput | WebPushKeyWhereInput[]
    publicKey?: StringFilter<"WebPushKey"> | string
    privateKey?: StringFilter<"WebPushKey"> | string
  }, "id">

  export type WebPushKeyOrderByWithAggregationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    _count?: WebPushKeyCountOrderByAggregateInput
    _avg?: WebPushKeyAvgOrderByAggregateInput
    _max?: WebPushKeyMaxOrderByAggregateInput
    _min?: WebPushKeyMinOrderByAggregateInput
    _sum?: WebPushKeySumOrderByAggregateInput
  }

  export type WebPushKeyScalarWhereWithAggregatesInput = {
    AND?: WebPushKeyScalarWhereWithAggregatesInput | WebPushKeyScalarWhereWithAggregatesInput[]
    OR?: WebPushKeyScalarWhereWithAggregatesInput[]
    NOT?: WebPushKeyScalarWhereWithAggregatesInput | WebPushKeyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WebPushKey"> | number
    publicKey?: StringWithAggregatesFilter<"WebPushKey"> | string
    privateKey?: StringWithAggregatesFilter<"WebPushKey"> | string
  }

  export type UserCreateInput = {
    userId: string
    userName?: string | null
    nickName?: string | null
    email?: string | null
    password: string
    imageUrl: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    boards?: BoardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    no?: number
    userId: string
    userName?: string | null
    nickName?: string | null
    email?: string | null
    password: string
    imageUrl: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    boards?: BoardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boards?: BoardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    no?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boards?: BoardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    no?: number
    userId: string
    userName?: string | null
    nickName?: string | null
    email?: string | null
    password: string
    imageUrl: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    no?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardCreateInput = {
    title: string
    contents?: string | null
    subDescription?: string | null
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBoardsInput
    category: BoardCategoryCreateNestedOneWithoutBoardsInput
  }

  export type BoardUncheckedCreateInput = {
    id?: number
    title: string
    contents?: string | null
    subDescription?: string | null
    views?: number
    userNo: number
    categoryNo: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    contents?: NullableStringFieldUpdateOperationsInput | string | null
    subDescription?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBoardsNestedInput
    category?: BoardCategoryUpdateOneRequiredWithoutBoardsNestedInput
  }

  export type BoardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    contents?: NullableStringFieldUpdateOperationsInput | string | null
    subDescription?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    userNo?: IntFieldUpdateOperationsInput | number
    categoryNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardCreateManyInput = {
    id?: number
    title: string
    contents?: string | null
    subDescription?: string | null
    views?: number
    userNo: number
    categoryNo: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    contents?: NullableStringFieldUpdateOperationsInput | string | null
    subDescription?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    contents?: NullableStringFieldUpdateOperationsInput | string | null
    subDescription?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    userNo?: IntFieldUpdateOperationsInput | number
    categoryNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardCategoryCreateInput = {
    categoryName: string
    boards?: BoardCreateNestedManyWithoutCategoryInput
  }

  export type BoardCategoryUncheckedCreateInput = {
    no?: number
    categoryName: string
    boards?: BoardUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type BoardCategoryUpdateInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    boards?: BoardUpdateManyWithoutCategoryNestedInput
  }

  export type BoardCategoryUncheckedUpdateInput = {
    no?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    boards?: BoardUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BoardCategoryCreateManyInput = {
    no?: number
    categoryName: string
  }

  export type BoardCategoryUpdateManyMutationInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
  }

  export type BoardCategoryUncheckedUpdateManyInput = {
    no?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
  }

  export type PostFileCreateInput = {
    originFileName: string
    fileName: string
    fileDir: string
    fileExt: string
    fullPath: string
    size: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostFileUncheckedCreateInput = {
    id?: number
    originFileName: string
    fileName: string
    fileDir: string
    fileExt: string
    fullPath: string
    size: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostFileUpdateInput = {
    originFileName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileDir?: StringFieldUpdateOperationsInput | string
    fileExt?: StringFieldUpdateOperationsInput | string
    fullPath?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostFileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    originFileName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileDir?: StringFieldUpdateOperationsInput | string
    fileExt?: StringFieldUpdateOperationsInput | string
    fullPath?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostFileCreateManyInput = {
    id?: number
    originFileName: string
    fileName: string
    fileDir: string
    fileExt: string
    fullPath: string
    size: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostFileUpdateManyMutationInput = {
    originFileName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileDir?: StringFieldUpdateOperationsInput | string
    fileExt?: StringFieldUpdateOperationsInput | string
    fullPath?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostFileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    originFileName?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileDir?: StringFieldUpdateOperationsInput | string
    fileExt?: StringFieldUpdateOperationsInput | string
    fullPath?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebPushSubscriptionCreateInput = {
    endPoint: string
    pushKey: string
    auth: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebPushSubscriptionUncheckedCreateInput = {
    id?: number
    endPoint: string
    pushKey: string
    auth: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebPushSubscriptionUpdateInput = {
    endPoint?: StringFieldUpdateOperationsInput | string
    pushKey?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebPushSubscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    endPoint?: StringFieldUpdateOperationsInput | string
    pushKey?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebPushSubscriptionCreateManyInput = {
    id?: number
    endPoint: string
    pushKey: string
    auth: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebPushSubscriptionUpdateManyMutationInput = {
    endPoint?: StringFieldUpdateOperationsInput | string
    pushKey?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebPushSubscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    endPoint?: StringFieldUpdateOperationsInput | string
    pushKey?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebPushKeyCreateInput = {
    publicKey: string
    privateKey: string
  }

  export type WebPushKeyUncheckedCreateInput = {
    id?: number
    publicKey: string
    privateKey: string
  }

  export type WebPushKeyUpdateInput = {
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
  }

  export type WebPushKeyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
  }

  export type WebPushKeyCreateManyInput = {
    id?: number
    publicKey: string
    privateKey: string
  }

  export type WebPushKeyUpdateManyMutationInput = {
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
  }

  export type WebPushKeyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type BoardListRelationFilter = {
    every?: BoardWhereInput
    some?: BoardWhereInput
    none?: BoardWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BoardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    no?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    nickName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    imageUrl?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    no?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    no?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    nickName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    imageUrl?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    no?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    nickName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    imageUrl?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    no?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BoardCategoryRelationFilter = {
    is?: BoardCategoryWhereInput
    isNot?: BoardCategoryWhereInput
  }

  export type BoardCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    contents?: SortOrder
    subDescription?: SortOrder
    views?: SortOrder
    userNo?: SortOrder
    categoryNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoardAvgOrderByAggregateInput = {
    id?: SortOrder
    views?: SortOrder
    userNo?: SortOrder
    categoryNo?: SortOrder
  }

  export type BoardMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    contents?: SortOrder
    subDescription?: SortOrder
    views?: SortOrder
    userNo?: SortOrder
    categoryNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoardMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    contents?: SortOrder
    subDescription?: SortOrder
    views?: SortOrder
    userNo?: SortOrder
    categoryNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoardSumOrderByAggregateInput = {
    id?: SortOrder
    views?: SortOrder
    userNo?: SortOrder
    categoryNo?: SortOrder
  }

  export type BoardCategoryCountOrderByAggregateInput = {
    no?: SortOrder
    categoryName?: SortOrder
  }

  export type BoardCategoryAvgOrderByAggregateInput = {
    no?: SortOrder
  }

  export type BoardCategoryMaxOrderByAggregateInput = {
    no?: SortOrder
    categoryName?: SortOrder
  }

  export type BoardCategoryMinOrderByAggregateInput = {
    no?: SortOrder
    categoryName?: SortOrder
  }

  export type BoardCategorySumOrderByAggregateInput = {
    no?: SortOrder
  }

  export type PostFileCountOrderByAggregateInput = {
    id?: SortOrder
    originFileName?: SortOrder
    fileName?: SortOrder
    fileDir?: SortOrder
    fileExt?: SortOrder
    fullPath?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostFileAvgOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
  }

  export type PostFileMaxOrderByAggregateInput = {
    id?: SortOrder
    originFileName?: SortOrder
    fileName?: SortOrder
    fileDir?: SortOrder
    fileExt?: SortOrder
    fullPath?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostFileMinOrderByAggregateInput = {
    id?: SortOrder
    originFileName?: SortOrder
    fileName?: SortOrder
    fileDir?: SortOrder
    fileExt?: SortOrder
    fullPath?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostFileSumOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
  }

  export type WebPushSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    endPoint?: SortOrder
    pushKey?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebPushSubscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WebPushSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    endPoint?: SortOrder
    pushKey?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebPushSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    endPoint?: SortOrder
    pushKey?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebPushSubscriptionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WebPushKeyCountOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
  }

  export type WebPushKeyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WebPushKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
  }

  export type WebPushKeyMinOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
  }

  export type WebPushKeySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoardCreateNestedManyWithoutUserInput = {
    create?: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput> | BoardCreateWithoutUserInput[] | BoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutUserInput | BoardCreateOrConnectWithoutUserInput[]
    createMany?: BoardCreateManyUserInputEnvelope
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
  }

  export type BoardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput> | BoardCreateWithoutUserInput[] | BoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutUserInput | BoardCreateOrConnectWithoutUserInput[]
    createMany?: BoardCreateManyUserInputEnvelope
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoardUpdateManyWithoutUserNestedInput = {
    create?: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput> | BoardCreateWithoutUserInput[] | BoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutUserInput | BoardCreateOrConnectWithoutUserInput[]
    upsert?: BoardUpsertWithWhereUniqueWithoutUserInput | BoardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BoardCreateManyUserInputEnvelope
    set?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    disconnect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    delete?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    update?: BoardUpdateWithWhereUniqueWithoutUserInput | BoardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BoardUpdateManyWithWhereWithoutUserInput | BoardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BoardScalarWhereInput | BoardScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput> | BoardCreateWithoutUserInput[] | BoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutUserInput | BoardCreateOrConnectWithoutUserInput[]
    upsert?: BoardUpsertWithWhereUniqueWithoutUserInput | BoardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BoardCreateManyUserInputEnvelope
    set?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    disconnect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    delete?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    update?: BoardUpdateWithWhereUniqueWithoutUserInput | BoardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BoardUpdateManyWithWhereWithoutUserInput | BoardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BoardScalarWhereInput | BoardScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBoardsInput = {
    create?: XOR<UserCreateWithoutBoardsInput, UserUncheckedCreateWithoutBoardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardsInput
    connect?: UserWhereUniqueInput
  }

  export type BoardCategoryCreateNestedOneWithoutBoardsInput = {
    create?: XOR<BoardCategoryCreateWithoutBoardsInput, BoardCategoryUncheckedCreateWithoutBoardsInput>
    connectOrCreate?: BoardCategoryCreateOrConnectWithoutBoardsInput
    connect?: BoardCategoryWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBoardsNestedInput = {
    create?: XOR<UserCreateWithoutBoardsInput, UserUncheckedCreateWithoutBoardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardsInput
    upsert?: UserUpsertWithoutBoardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBoardsInput, UserUpdateWithoutBoardsInput>, UserUncheckedUpdateWithoutBoardsInput>
  }

  export type BoardCategoryUpdateOneRequiredWithoutBoardsNestedInput = {
    create?: XOR<BoardCategoryCreateWithoutBoardsInput, BoardCategoryUncheckedCreateWithoutBoardsInput>
    connectOrCreate?: BoardCategoryCreateOrConnectWithoutBoardsInput
    upsert?: BoardCategoryUpsertWithoutBoardsInput
    connect?: BoardCategoryWhereUniqueInput
    update?: XOR<XOR<BoardCategoryUpdateToOneWithWhereWithoutBoardsInput, BoardCategoryUpdateWithoutBoardsInput>, BoardCategoryUncheckedUpdateWithoutBoardsInput>
  }

  export type BoardCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BoardCreateWithoutCategoryInput, BoardUncheckedCreateWithoutCategoryInput> | BoardCreateWithoutCategoryInput[] | BoardUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutCategoryInput | BoardCreateOrConnectWithoutCategoryInput[]
    createMany?: BoardCreateManyCategoryInputEnvelope
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
  }

  export type BoardUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BoardCreateWithoutCategoryInput, BoardUncheckedCreateWithoutCategoryInput> | BoardCreateWithoutCategoryInput[] | BoardUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutCategoryInput | BoardCreateOrConnectWithoutCategoryInput[]
    createMany?: BoardCreateManyCategoryInputEnvelope
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
  }

  export type BoardUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BoardCreateWithoutCategoryInput, BoardUncheckedCreateWithoutCategoryInput> | BoardCreateWithoutCategoryInput[] | BoardUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutCategoryInput | BoardCreateOrConnectWithoutCategoryInput[]
    upsert?: BoardUpsertWithWhereUniqueWithoutCategoryInput | BoardUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BoardCreateManyCategoryInputEnvelope
    set?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    disconnect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    delete?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    update?: BoardUpdateWithWhereUniqueWithoutCategoryInput | BoardUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BoardUpdateManyWithWhereWithoutCategoryInput | BoardUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BoardScalarWhereInput | BoardScalarWhereInput[]
  }

  export type BoardUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BoardCreateWithoutCategoryInput, BoardUncheckedCreateWithoutCategoryInput> | BoardCreateWithoutCategoryInput[] | BoardUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutCategoryInput | BoardCreateOrConnectWithoutCategoryInput[]
    upsert?: BoardUpsertWithWhereUniqueWithoutCategoryInput | BoardUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BoardCreateManyCategoryInputEnvelope
    set?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    disconnect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    delete?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    update?: BoardUpdateWithWhereUniqueWithoutCategoryInput | BoardUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BoardUpdateManyWithWhereWithoutCategoryInput | BoardUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BoardScalarWhereInput | BoardScalarWhereInput[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type BoardCreateWithoutUserInput = {
    title: string
    contents?: string | null
    subDescription?: string | null
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: BoardCategoryCreateNestedOneWithoutBoardsInput
  }

  export type BoardUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    contents?: string | null
    subDescription?: string | null
    views?: number
    categoryNo: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardCreateOrConnectWithoutUserInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput>
  }

  export type BoardCreateManyUserInputEnvelope = {
    data: BoardCreateManyUserInput | BoardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BoardUpsertWithWhereUniqueWithoutUserInput = {
    where: BoardWhereUniqueInput
    update: XOR<BoardUpdateWithoutUserInput, BoardUncheckedUpdateWithoutUserInput>
    create: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput>
  }

  export type BoardUpdateWithWhereUniqueWithoutUserInput = {
    where: BoardWhereUniqueInput
    data: XOR<BoardUpdateWithoutUserInput, BoardUncheckedUpdateWithoutUserInput>
  }

  export type BoardUpdateManyWithWhereWithoutUserInput = {
    where: BoardScalarWhereInput
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyWithoutUserInput>
  }

  export type BoardScalarWhereInput = {
    AND?: BoardScalarWhereInput | BoardScalarWhereInput[]
    OR?: BoardScalarWhereInput[]
    NOT?: BoardScalarWhereInput | BoardScalarWhereInput[]
    id?: IntFilter<"Board"> | number
    title?: StringFilter<"Board"> | string
    contents?: StringNullableFilter<"Board"> | string | null
    subDescription?: StringNullableFilter<"Board"> | string | null
    views?: IntFilter<"Board"> | number
    userNo?: IntFilter<"Board"> | number
    categoryNo?: IntFilter<"Board"> | number
    createdAt?: DateTimeFilter<"Board"> | Date | string
    updatedAt?: DateTimeFilter<"Board"> | Date | string
  }

  export type UserCreateWithoutBoardsInput = {
    userId: string
    userName?: string | null
    nickName?: string | null
    email?: string | null
    password: string
    imageUrl: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutBoardsInput = {
    no?: number
    userId: string
    userName?: string | null
    nickName?: string | null
    email?: string | null
    password: string
    imageUrl: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutBoardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBoardsInput, UserUncheckedCreateWithoutBoardsInput>
  }

  export type BoardCategoryCreateWithoutBoardsInput = {
    categoryName: string
  }

  export type BoardCategoryUncheckedCreateWithoutBoardsInput = {
    no?: number
    categoryName: string
  }

  export type BoardCategoryCreateOrConnectWithoutBoardsInput = {
    where: BoardCategoryWhereUniqueInput
    create: XOR<BoardCategoryCreateWithoutBoardsInput, BoardCategoryUncheckedCreateWithoutBoardsInput>
  }

  export type UserUpsertWithoutBoardsInput = {
    update: XOR<UserUpdateWithoutBoardsInput, UserUncheckedUpdateWithoutBoardsInput>
    create: XOR<UserCreateWithoutBoardsInput, UserUncheckedCreateWithoutBoardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBoardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBoardsInput, UserUncheckedUpdateWithoutBoardsInput>
  }

  export type UserUpdateWithoutBoardsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutBoardsInput = {
    no?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardCategoryUpsertWithoutBoardsInput = {
    update: XOR<BoardCategoryUpdateWithoutBoardsInput, BoardCategoryUncheckedUpdateWithoutBoardsInput>
    create: XOR<BoardCategoryCreateWithoutBoardsInput, BoardCategoryUncheckedCreateWithoutBoardsInput>
    where?: BoardCategoryWhereInput
  }

  export type BoardCategoryUpdateToOneWithWhereWithoutBoardsInput = {
    where?: BoardCategoryWhereInput
    data: XOR<BoardCategoryUpdateWithoutBoardsInput, BoardCategoryUncheckedUpdateWithoutBoardsInput>
  }

  export type BoardCategoryUpdateWithoutBoardsInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
  }

  export type BoardCategoryUncheckedUpdateWithoutBoardsInput = {
    no?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
  }

  export type BoardCreateWithoutCategoryInput = {
    title: string
    contents?: string | null
    subDescription?: string | null
    views?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBoardsInput
  }

  export type BoardUncheckedCreateWithoutCategoryInput = {
    id?: number
    title: string
    contents?: string | null
    subDescription?: string | null
    views?: number
    userNo: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardCreateOrConnectWithoutCategoryInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutCategoryInput, BoardUncheckedCreateWithoutCategoryInput>
  }

  export type BoardCreateManyCategoryInputEnvelope = {
    data: BoardCreateManyCategoryInput | BoardCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BoardUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BoardWhereUniqueInput
    update: XOR<BoardUpdateWithoutCategoryInput, BoardUncheckedUpdateWithoutCategoryInput>
    create: XOR<BoardCreateWithoutCategoryInput, BoardUncheckedCreateWithoutCategoryInput>
  }

  export type BoardUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BoardWhereUniqueInput
    data: XOR<BoardUpdateWithoutCategoryInput, BoardUncheckedUpdateWithoutCategoryInput>
  }

  export type BoardUpdateManyWithWhereWithoutCategoryInput = {
    where: BoardScalarWhereInput
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BoardCreateManyUserInput = {
    id?: number
    title: string
    contents?: string | null
    subDescription?: string | null
    views?: number
    categoryNo: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    contents?: NullableStringFieldUpdateOperationsInput | string | null
    subDescription?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: BoardCategoryUpdateOneRequiredWithoutBoardsNestedInput
  }

  export type BoardUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    contents?: NullableStringFieldUpdateOperationsInput | string | null
    subDescription?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    categoryNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    contents?: NullableStringFieldUpdateOperationsInput | string | null
    subDescription?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    categoryNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardCreateManyCategoryInput = {
    id?: number
    title: string
    contents?: string | null
    subDescription?: string | null
    views?: number
    userNo: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    contents?: NullableStringFieldUpdateOperationsInput | string | null
    subDescription?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBoardsNestedInput
  }

  export type BoardUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    contents?: NullableStringFieldUpdateOperationsInput | string | null
    subDescription?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    userNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    contents?: NullableStringFieldUpdateOperationsInput | string | null
    subDescription?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    userNo?: IntFieldUpdateOperationsInput | number
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
     * @deprecated Use BoardCategoryCountOutputTypeDefaultArgs instead
     */
    export type BoardCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BoardCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BoardDefaultArgs instead
     */
    export type BoardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BoardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BoardCategoryDefaultArgs instead
     */
    export type BoardCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BoardCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostFileDefaultArgs instead
     */
    export type PostFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostFileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WebPushSubscriptionDefaultArgs instead
     */
    export type WebPushSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WebPushSubscriptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WebPushKeyDefaultArgs instead
     */
    export type WebPushKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WebPushKeyDefaultArgs<ExtArgs>

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