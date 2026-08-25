
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
 * Model Article
 * 
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>
/**
 * Model ArticleCategory
 * 
 */
export type ArticleCategory = $Result.DefaultSelection<Prisma.$ArticleCategoryPayload>
/**
 * Model ArticleCuration
 * 
 */
export type ArticleCuration = $Result.DefaultSelection<Prisma.$ArticleCurationPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Articles
 * const articles = await prisma.article.findMany()
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
   * // Fetch zero or more Articles
   * const articles = await prisma.article.findMany()
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
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<ExtArgs>;

  /**
   * `prisma.articleCategory`: Exposes CRUD operations for the **ArticleCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleCategories
    * const articleCategories = await prisma.articleCategory.findMany()
    * ```
    */
  get articleCategory(): Prisma.ArticleCategoryDelegate<ExtArgs>;

  /**
   * `prisma.articleCuration`: Exposes CRUD operations for the **ArticleCuration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleCurations
    * const articleCurations = await prisma.articleCuration.findMany()
    * ```
    */
  get articleCuration(): Prisma.ArticleCurationDelegate<ExtArgs>;
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
    Article: 'Article',
    ArticleCategory: 'ArticleCategory',
    ArticleCuration: 'ArticleCuration'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    article?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'article' | 'articleCategory' | 'articleCuration'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Article: {
        payload: Prisma.$ArticlePayload<ExtArgs>
        fields: Prisma.ArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findFirst: {
            args: Prisma.ArticleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findMany: {
            args: Prisma.ArticleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          create: {
            args: Prisma.ArticleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          createMany: {
            args: Prisma.ArticleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ArticleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          update: {
            args: Prisma.ArticleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          deleteMany: {
            args: Prisma.ArticleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ArticleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.ArticleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCountArgs<ExtArgs>,
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
          }
        }
      }
      ArticleCategory: {
        payload: Prisma.$ArticleCategoryPayload<ExtArgs>
        fields: Prisma.ArticleCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleCategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleCategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload>
          }
          findFirst: {
            args: Prisma.ArticleCategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleCategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload>
          }
          findMany: {
            args: Prisma.ArticleCategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload>[]
          }
          create: {
            args: Prisma.ArticleCategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload>
          }
          createMany: {
            args: Prisma.ArticleCategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ArticleCategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload>
          }
          update: {
            args: Prisma.ArticleCategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ArticleCategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleCategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ArticleCategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleCategoryPayload>
          }
          aggregate: {
            args: Prisma.ArticleCategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArticleCategory>
          }
          groupBy: {
            args: Prisma.ArticleCategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArticleCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<ArticleCategoryCountAggregateOutputType> | number
          }
        }
      }
      ArticleCuration: {
        payload: Prisma.$ArticleCurationPayload<ExtArgs>
        fields: Prisma.ArticleCurationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleCurationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleCurationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleCurationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleCurationPayload>
          }
          findFirst: {
            args: Prisma.ArticleCurationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleCurationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleCurationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleCurationPayload>
          }
          findMany: {
            args: Prisma.ArticleCurationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleCurationPayload>[]
          }
          create: {
            args: Prisma.ArticleCurationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleCurationPayload>
          }
          createMany: {
            args: Prisma.ArticleCurationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ArticleCurationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleCurationPayload>
          }
          update: {
            args: Prisma.ArticleCurationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleCurationPayload>
          }
          deleteMany: {
            args: Prisma.ArticleCurationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleCurationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ArticleCurationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArticleCurationPayload>
          }
          aggregate: {
            args: Prisma.ArticleCurationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArticleCuration>
          }
          groupBy: {
            args: Prisma.ArticleCurationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArticleCurationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCurationCountArgs<ExtArgs>,
            result: $Utils.Optional<ArticleCurationCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model Article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleAvgAggregateOutputType = {
    userId: number | null
  }

  export type ArticleSumAggregateOutputType = {
    userId: number | null
  }

  export type ArticleMinAggregateOutputType = {
    id: string | null
    userId: number | null
    categoryId: string | null
    title: string | null
    url: string | null
    normalizedUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    categoryId: string | null
    title: string | null
    url: string | null
    normalizedUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    userId: number
    categoryId: number
    title: number
    url: number
    normalizedUrl: number
    seo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticleAvgAggregateInputType = {
    userId?: true
  }

  export type ArticleSumAggregateInputType = {
    userId?: true
  }

  export type ArticleMinAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    title?: true
    url?: true
    normalizedUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    title?: true
    url?: true
    normalizedUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    title?: true
    url?: true
    normalizedUrl?: true
    seo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Article to aggregate.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type ArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithAggregationInput | ArticleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: ArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _avg?: ArticleAvgAggregateInputType
    _sum?: ArticleSumAggregateInputType
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: string
    userId: number
    categoryId: string
    title: string
    url: string
    normalizedUrl: string
    seo: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type ArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    title?: boolean
    url?: boolean
    normalizedUrl?: boolean
    seo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectScalar = {
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    title?: boolean
    url?: boolean
    normalizedUrl?: boolean
    seo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }



  export type $ArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Article"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      categoryId: string
      title: string
      url: string
      normalizedUrl: string
      seo: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["article"]>
    composites: {}
  }


  type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = $Result.GetResult<Prisma.$ArticlePayload, S>

  type ArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface ArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Article'], meta: { name: 'Article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArticleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>
    ): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArticleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>
    ): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ArticleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
    **/
    create<T extends ArticleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleCreateArgs<ExtArgs>>
    ): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Articles.
     * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ArticleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
    **/
    delete<T extends ArticleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleDeleteArgs<ExtArgs>>
    ): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArticleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleUpdateArgs<ExtArgs>>
    ): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArticleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArticleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
    **/
    upsert<T extends ArticleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleUpsertArgs<ExtArgs>>
    ): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
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
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Article model
   */
  readonly fields: ArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Article model
   */ 
  interface ArticleFieldRefs {
    readonly id: FieldRef<"Article", 'String'>
    readonly userId: FieldRef<"Article", 'Int'>
    readonly categoryId: FieldRef<"Article", 'String'>
    readonly title: FieldRef<"Article", 'String'>
    readonly url: FieldRef<"Article", 'String'>
    readonly normalizedUrl: FieldRef<"Article", 'String'>
    readonly seo: FieldRef<"Article", 'Json'>
    readonly createdAt: FieldRef<"Article", 'DateTime'>
    readonly updatedAt: FieldRef<"Article", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article create
   */
  export type ArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * The data needed to create a Article.
     */
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }

  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Article update
   */
  export type ArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * The data needed to update a Article.
     */
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
  }

  /**
   * Article upsert
   */
  export type ArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * The filter to search for the Article to update in case it exists.
     */
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     */
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }

  /**
   * Article delete
   */
  export type ArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Filter which Article to delete.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticleWhereInput
  }

  /**
   * Article without action
   */
  export type ArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
  }


  /**
   * Model ArticleCategory
   */

  export type AggregateArticleCategory = {
    _count: ArticleCategoryCountAggregateOutputType | null
    _avg: ArticleCategoryAvgAggregateOutputType | null
    _sum: ArticleCategorySumAggregateOutputType | null
    _min: ArticleCategoryMinAggregateOutputType | null
    _max: ArticleCategoryMaxAggregateOutputType | null
  }

  export type ArticleCategoryAvgAggregateOutputType = {
    userId: number | null
    order: number | null
  }

  export type ArticleCategorySumAggregateOutputType = {
    userId: number | null
    order: number | null
  }

  export type ArticleCategoryMinAggregateOutputType = {
    id: string | null
    userId: number | null
    name: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleCategoryMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    name: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticleCategoryCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticleCategoryAvgAggregateInputType = {
    userId?: true
    order?: true
  }

  export type ArticleCategorySumAggregateInputType = {
    userId?: true
    order?: true
  }

  export type ArticleCategoryMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleCategoryMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticleCategoryCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticleCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleCategory to aggregate.
     */
    where?: ArticleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleCategories to fetch.
     */
    orderBy?: ArticleCategoryOrderByWithRelationInput | ArticleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticleCategories
    **/
    _count?: true | ArticleCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleCategoryMaxAggregateInputType
  }

  export type GetArticleCategoryAggregateType<T extends ArticleCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleCategory[P]>
      : GetScalarType<T[P], AggregateArticleCategory[P]>
  }




  export type ArticleCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleCategoryWhereInput
    orderBy?: ArticleCategoryOrderByWithAggregationInput | ArticleCategoryOrderByWithAggregationInput[]
    by: ArticleCategoryScalarFieldEnum[] | ArticleCategoryScalarFieldEnum
    having?: ArticleCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCategoryCountAggregateInputType | true
    _avg?: ArticleCategoryAvgAggregateInputType
    _sum?: ArticleCategorySumAggregateInputType
    _min?: ArticleCategoryMinAggregateInputType
    _max?: ArticleCategoryMaxAggregateInputType
  }

  export type ArticleCategoryGroupByOutputType = {
    id: string
    userId: number
    name: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: ArticleCategoryCountAggregateOutputType | null
    _avg: ArticleCategoryAvgAggregateOutputType | null
    _sum: ArticleCategorySumAggregateOutputType | null
    _min: ArticleCategoryMinAggregateOutputType | null
    _max: ArticleCategoryMaxAggregateOutputType | null
  }

  type GetArticleCategoryGroupByPayload<T extends ArticleCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ArticleCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["articleCategory"]>

  export type ArticleCategorySelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }



  export type $ArticleCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticleCategory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      name: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["articleCategory"]>
    composites: {}
  }


  type ArticleCategoryGetPayload<S extends boolean | null | undefined | ArticleCategoryDefaultArgs> = $Result.GetResult<Prisma.$ArticleCategoryPayload, S>

  type ArticleCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArticleCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArticleCategoryCountAggregateInputType | true
    }

  export interface ArticleCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleCategory'], meta: { name: 'ArticleCategory' } }
    /**
     * Find zero or one ArticleCategory that matches the filter.
     * @param {ArticleCategoryFindUniqueArgs} args - Arguments to find a ArticleCategory
     * @example
     * // Get one ArticleCategory
     * const articleCategory = await prisma.articleCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArticleCategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ArticleCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ArticleCategoryFindUniqueOrThrowArgs} args - Arguments to find a ArticleCategory
     * @example
     * // Get one ArticleCategory
     * const articleCategory = await prisma.articleCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArticleCategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ArticleCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoryFindFirstArgs} args - Arguments to find a ArticleCategory
     * @example
     * // Get one ArticleCategory
     * const articleCategory = await prisma.articleCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArticleCategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ArticleCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoryFindFirstOrThrowArgs} args - Arguments to find a ArticleCategory
     * @example
     * // Get one ArticleCategory
     * const articleCategory = await prisma.articleCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArticleCategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ArticleCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleCategories
     * const articleCategories = await prisma.articleCategory.findMany()
     * 
     * // Get first 10 ArticleCategories
     * const articleCategories = await prisma.articleCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleCategoryWithIdOnly = await prisma.articleCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ArticleCategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ArticleCategory.
     * @param {ArticleCategoryCreateArgs} args - Arguments to create a ArticleCategory.
     * @example
     * // Create one ArticleCategory
     * const ArticleCategory = await prisma.articleCategory.create({
     *   data: {
     *     // ... data to create a ArticleCategory
     *   }
     * })
     * 
    **/
    create<T extends ArticleCategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleCategoryCreateArgs<ExtArgs>>
    ): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ArticleCategories.
     * @param {ArticleCategoryCreateManyArgs} args - Arguments to create many ArticleCategories.
     * @example
     * // Create many ArticleCategories
     * const articleCategory = await prisma.articleCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ArticleCategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ArticleCategory.
     * @param {ArticleCategoryDeleteArgs} args - Arguments to delete one ArticleCategory.
     * @example
     * // Delete one ArticleCategory
     * const ArticleCategory = await prisma.articleCategory.delete({
     *   where: {
     *     // ... filter to delete one ArticleCategory
     *   }
     * })
     * 
    **/
    delete<T extends ArticleCategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleCategoryDeleteArgs<ExtArgs>>
    ): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ArticleCategory.
     * @param {ArticleCategoryUpdateArgs} args - Arguments to update one ArticleCategory.
     * @example
     * // Update one ArticleCategory
     * const articleCategory = await prisma.articleCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArticleCategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleCategoryUpdateArgs<ExtArgs>>
    ): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ArticleCategories.
     * @param {ArticleCategoryDeleteManyArgs} args - Arguments to filter ArticleCategories to delete.
     * @example
     * // Delete a few ArticleCategories
     * const { count } = await prisma.articleCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArticleCategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleCategories
     * const articleCategory = await prisma.articleCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArticleCategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArticleCategory.
     * @param {ArticleCategoryUpsertArgs} args - Arguments to update or create a ArticleCategory.
     * @example
     * // Update or create a ArticleCategory
     * const articleCategory = await prisma.articleCategory.upsert({
     *   create: {
     *     // ... data to create a ArticleCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleCategory we want to update
     *   }
     * })
    **/
    upsert<T extends ArticleCategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleCategoryUpsertArgs<ExtArgs>>
    ): Prisma__ArticleCategoryClient<$Result.GetResult<Prisma.$ArticleCategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ArticleCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoryCountArgs} args - Arguments to filter ArticleCategories to count.
     * @example
     * // Count the number of ArticleCategories
     * const count = await prisma.articleCategory.count({
     *   where: {
     *     // ... the filter for the ArticleCategories we want to count
     *   }
     * })
    **/
    count<T extends ArticleCategoryCountArgs>(
      args?: Subset<T, ArticleCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleCategoryAggregateArgs>(args: Subset<T, ArticleCategoryAggregateArgs>): Prisma.PrismaPromise<GetArticleCategoryAggregateType<T>>

    /**
     * Group by ArticleCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCategoryGroupByArgs} args - Group by arguments.
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
      T extends ArticleCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ArticleCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticleCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticleCategory model
   */
  readonly fields: ArticleCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ArticleCategory model
   */ 
  interface ArticleCategoryFieldRefs {
    readonly id: FieldRef<"ArticleCategory", 'String'>
    readonly userId: FieldRef<"ArticleCategory", 'Int'>
    readonly name: FieldRef<"ArticleCategory", 'String'>
    readonly order: FieldRef<"ArticleCategory", 'Int'>
    readonly createdAt: FieldRef<"ArticleCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"ArticleCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArticleCategory findUnique
   */
  export type ArticleCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Filter, which ArticleCategory to fetch.
     */
    where: ArticleCategoryWhereUniqueInput
  }

  /**
   * ArticleCategory findUniqueOrThrow
   */
  export type ArticleCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Filter, which ArticleCategory to fetch.
     */
    where: ArticleCategoryWhereUniqueInput
  }

  /**
   * ArticleCategory findFirst
   */
  export type ArticleCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Filter, which ArticleCategory to fetch.
     */
    where?: ArticleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleCategories to fetch.
     */
    orderBy?: ArticleCategoryOrderByWithRelationInput | ArticleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleCategories.
     */
    cursor?: ArticleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleCategories.
     */
    distinct?: ArticleCategoryScalarFieldEnum | ArticleCategoryScalarFieldEnum[]
  }

  /**
   * ArticleCategory findFirstOrThrow
   */
  export type ArticleCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Filter, which ArticleCategory to fetch.
     */
    where?: ArticleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleCategories to fetch.
     */
    orderBy?: ArticleCategoryOrderByWithRelationInput | ArticleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleCategories.
     */
    cursor?: ArticleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleCategories.
     */
    distinct?: ArticleCategoryScalarFieldEnum | ArticleCategoryScalarFieldEnum[]
  }

  /**
   * ArticleCategory findMany
   */
  export type ArticleCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Filter, which ArticleCategories to fetch.
     */
    where?: ArticleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleCategories to fetch.
     */
    orderBy?: ArticleCategoryOrderByWithRelationInput | ArticleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticleCategories.
     */
    cursor?: ArticleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleCategories.
     */
    skip?: number
    distinct?: ArticleCategoryScalarFieldEnum | ArticleCategoryScalarFieldEnum[]
  }

  /**
   * ArticleCategory create
   */
  export type ArticleCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * The data needed to create a ArticleCategory.
     */
    data: XOR<ArticleCategoryCreateInput, ArticleCategoryUncheckedCreateInput>
  }

  /**
   * ArticleCategory createMany
   */
  export type ArticleCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleCategories.
     */
    data: ArticleCategoryCreateManyInput | ArticleCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticleCategory update
   */
  export type ArticleCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * The data needed to update a ArticleCategory.
     */
    data: XOR<ArticleCategoryUpdateInput, ArticleCategoryUncheckedUpdateInput>
    /**
     * Choose, which ArticleCategory to update.
     */
    where: ArticleCategoryWhereUniqueInput
  }

  /**
   * ArticleCategory updateMany
   */
  export type ArticleCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleCategories.
     */
    data: XOR<ArticleCategoryUpdateManyMutationInput, ArticleCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ArticleCategories to update
     */
    where?: ArticleCategoryWhereInput
  }

  /**
   * ArticleCategory upsert
   */
  export type ArticleCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * The filter to search for the ArticleCategory to update in case it exists.
     */
    where: ArticleCategoryWhereUniqueInput
    /**
     * In case the ArticleCategory found by the `where` argument doesn't exist, create a new ArticleCategory with this data.
     */
    create: XOR<ArticleCategoryCreateInput, ArticleCategoryUncheckedCreateInput>
    /**
     * In case the ArticleCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleCategoryUpdateInput, ArticleCategoryUncheckedUpdateInput>
  }

  /**
   * ArticleCategory delete
   */
  export type ArticleCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
    /**
     * Filter which ArticleCategory to delete.
     */
    where: ArticleCategoryWhereUniqueInput
  }

  /**
   * ArticleCategory deleteMany
   */
  export type ArticleCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleCategories to delete
     */
    where?: ArticleCategoryWhereInput
  }

  /**
   * ArticleCategory without action
   */
  export type ArticleCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCategory
     */
    select?: ArticleCategorySelect<ExtArgs> | null
  }


  /**
   * Model ArticleCuration
   */

  export type AggregateArticleCuration = {
    _count: ArticleCurationCountAggregateOutputType | null
    _avg: ArticleCurationAvgAggregateOutputType | null
    _sum: ArticleCurationSumAggregateOutputType | null
    _min: ArticleCurationMinAggregateOutputType | null
    _max: ArticleCurationMaxAggregateOutputType | null
  }

  export type ArticleCurationAvgAggregateOutputType = {
    userId: number | null
  }

  export type ArticleCurationSumAggregateOutputType = {
    userId: number | null
  }

  export type ArticleCurationMinAggregateOutputType = {
    id: string | null
    userId: number | null
    weekKey: string | null
    articleId: string | null
    createdAt: Date | null
  }

  export type ArticleCurationMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    weekKey: string | null
    articleId: string | null
    createdAt: Date | null
  }

  export type ArticleCurationCountAggregateOutputType = {
    id: number
    userId: number
    weekKey: number
    articleId: number
    createdAt: number
    _all: number
  }


  export type ArticleCurationAvgAggregateInputType = {
    userId?: true
  }

  export type ArticleCurationSumAggregateInputType = {
    userId?: true
  }

  export type ArticleCurationMinAggregateInputType = {
    id?: true
    userId?: true
    weekKey?: true
    articleId?: true
    createdAt?: true
  }

  export type ArticleCurationMaxAggregateInputType = {
    id?: true
    userId?: true
    weekKey?: true
    articleId?: true
    createdAt?: true
  }

  export type ArticleCurationCountAggregateInputType = {
    id?: true
    userId?: true
    weekKey?: true
    articleId?: true
    createdAt?: true
    _all?: true
  }

  export type ArticleCurationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleCuration to aggregate.
     */
    where?: ArticleCurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleCurations to fetch.
     */
    orderBy?: ArticleCurationOrderByWithRelationInput | ArticleCurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleCurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleCurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleCurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticleCurations
    **/
    _count?: true | ArticleCurationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleCurationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleCurationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleCurationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleCurationMaxAggregateInputType
  }

  export type GetArticleCurationAggregateType<T extends ArticleCurationAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleCuration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleCuration[P]>
      : GetScalarType<T[P], AggregateArticleCuration[P]>
  }




  export type ArticleCurationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleCurationWhereInput
    orderBy?: ArticleCurationOrderByWithAggregationInput | ArticleCurationOrderByWithAggregationInput[]
    by: ArticleCurationScalarFieldEnum[] | ArticleCurationScalarFieldEnum
    having?: ArticleCurationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCurationCountAggregateInputType | true
    _avg?: ArticleCurationAvgAggregateInputType
    _sum?: ArticleCurationSumAggregateInputType
    _min?: ArticleCurationMinAggregateInputType
    _max?: ArticleCurationMaxAggregateInputType
  }

  export type ArticleCurationGroupByOutputType = {
    id: string
    userId: number
    weekKey: string
    articleId: string
    createdAt: Date
    _count: ArticleCurationCountAggregateOutputType | null
    _avg: ArticleCurationAvgAggregateOutputType | null
    _sum: ArticleCurationSumAggregateOutputType | null
    _min: ArticleCurationMinAggregateOutputType | null
    _max: ArticleCurationMaxAggregateOutputType | null
  }

  type GetArticleCurationGroupByPayload<T extends ArticleCurationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleCurationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleCurationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleCurationGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleCurationGroupByOutputType[P]>
        }
      >
    >


  export type ArticleCurationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    weekKey?: boolean
    articleId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["articleCuration"]>

  export type ArticleCurationSelectScalar = {
    id?: boolean
    userId?: boolean
    weekKey?: boolean
    articleId?: boolean
    createdAt?: boolean
  }



  export type $ArticleCurationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticleCuration"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      weekKey: string
      articleId: string
      createdAt: Date
    }, ExtArgs["result"]["articleCuration"]>
    composites: {}
  }


  type ArticleCurationGetPayload<S extends boolean | null | undefined | ArticleCurationDefaultArgs> = $Result.GetResult<Prisma.$ArticleCurationPayload, S>

  type ArticleCurationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArticleCurationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArticleCurationCountAggregateInputType | true
    }

  export interface ArticleCurationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleCuration'], meta: { name: 'ArticleCuration' } }
    /**
     * Find zero or one ArticleCuration that matches the filter.
     * @param {ArticleCurationFindUniqueArgs} args - Arguments to find a ArticleCuration
     * @example
     * // Get one ArticleCuration
     * const articleCuration = await prisma.articleCuration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArticleCurationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleCurationFindUniqueArgs<ExtArgs>>
    ): Prisma__ArticleCurationClient<$Result.GetResult<Prisma.$ArticleCurationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ArticleCuration that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ArticleCurationFindUniqueOrThrowArgs} args - Arguments to find a ArticleCuration
     * @example
     * // Get one ArticleCuration
     * const articleCuration = await prisma.articleCuration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArticleCurationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleCurationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ArticleCurationClient<$Result.GetResult<Prisma.$ArticleCurationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ArticleCuration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCurationFindFirstArgs} args - Arguments to find a ArticleCuration
     * @example
     * // Get one ArticleCuration
     * const articleCuration = await prisma.articleCuration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArticleCurationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleCurationFindFirstArgs<ExtArgs>>
    ): Prisma__ArticleCurationClient<$Result.GetResult<Prisma.$ArticleCurationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ArticleCuration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCurationFindFirstOrThrowArgs} args - Arguments to find a ArticleCuration
     * @example
     * // Get one ArticleCuration
     * const articleCuration = await prisma.articleCuration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArticleCurationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleCurationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ArticleCurationClient<$Result.GetResult<Prisma.$ArticleCurationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ArticleCurations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCurationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleCurations
     * const articleCurations = await prisma.articleCuration.findMany()
     * 
     * // Get first 10 ArticleCurations
     * const articleCurations = await prisma.articleCuration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleCurationWithIdOnly = await prisma.articleCuration.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ArticleCurationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleCurationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleCurationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ArticleCuration.
     * @param {ArticleCurationCreateArgs} args - Arguments to create a ArticleCuration.
     * @example
     * // Create one ArticleCuration
     * const ArticleCuration = await prisma.articleCuration.create({
     *   data: {
     *     // ... data to create a ArticleCuration
     *   }
     * })
     * 
    **/
    create<T extends ArticleCurationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleCurationCreateArgs<ExtArgs>>
    ): Prisma__ArticleCurationClient<$Result.GetResult<Prisma.$ArticleCurationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ArticleCurations.
     * @param {ArticleCurationCreateManyArgs} args - Arguments to create many ArticleCurations.
     * @example
     * // Create many ArticleCurations
     * const articleCuration = await prisma.articleCuration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ArticleCurationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleCurationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ArticleCuration.
     * @param {ArticleCurationDeleteArgs} args - Arguments to delete one ArticleCuration.
     * @example
     * // Delete one ArticleCuration
     * const ArticleCuration = await prisma.articleCuration.delete({
     *   where: {
     *     // ... filter to delete one ArticleCuration
     *   }
     * })
     * 
    **/
    delete<T extends ArticleCurationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleCurationDeleteArgs<ExtArgs>>
    ): Prisma__ArticleCurationClient<$Result.GetResult<Prisma.$ArticleCurationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ArticleCuration.
     * @param {ArticleCurationUpdateArgs} args - Arguments to update one ArticleCuration.
     * @example
     * // Update one ArticleCuration
     * const articleCuration = await prisma.articleCuration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArticleCurationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleCurationUpdateArgs<ExtArgs>>
    ): Prisma__ArticleCurationClient<$Result.GetResult<Prisma.$ArticleCurationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ArticleCurations.
     * @param {ArticleCurationDeleteManyArgs} args - Arguments to filter ArticleCurations to delete.
     * @example
     * // Delete a few ArticleCurations
     * const { count } = await prisma.articleCuration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArticleCurationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArticleCurationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleCurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCurationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleCurations
     * const articleCuration = await prisma.articleCuration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArticleCurationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleCurationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArticleCuration.
     * @param {ArticleCurationUpsertArgs} args - Arguments to update or create a ArticleCuration.
     * @example
     * // Update or create a ArticleCuration
     * const articleCuration = await prisma.articleCuration.upsert({
     *   create: {
     *     // ... data to create a ArticleCuration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleCuration we want to update
     *   }
     * })
    **/
    upsert<T extends ArticleCurationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ArticleCurationUpsertArgs<ExtArgs>>
    ): Prisma__ArticleCurationClient<$Result.GetResult<Prisma.$ArticleCurationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ArticleCurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCurationCountArgs} args - Arguments to filter ArticleCurations to count.
     * @example
     * // Count the number of ArticleCurations
     * const count = await prisma.articleCuration.count({
     *   where: {
     *     // ... the filter for the ArticleCurations we want to count
     *   }
     * })
    **/
    count<T extends ArticleCurationCountArgs>(
      args?: Subset<T, ArticleCurationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCurationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleCuration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCurationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleCurationAggregateArgs>(args: Subset<T, ArticleCurationAggregateArgs>): Prisma.PrismaPromise<GetArticleCurationAggregateType<T>>

    /**
     * Group by ArticleCuration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCurationGroupByArgs} args - Group by arguments.
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
      T extends ArticleCurationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleCurationGroupByArgs['orderBy'] }
        : { orderBy?: ArticleCurationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticleCurationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleCurationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticleCuration model
   */
  readonly fields: ArticleCurationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleCuration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleCurationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ArticleCuration model
   */ 
  interface ArticleCurationFieldRefs {
    readonly id: FieldRef<"ArticleCuration", 'String'>
    readonly userId: FieldRef<"ArticleCuration", 'Int'>
    readonly weekKey: FieldRef<"ArticleCuration", 'String'>
    readonly articleId: FieldRef<"ArticleCuration", 'String'>
    readonly createdAt: FieldRef<"ArticleCuration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArticleCuration findUnique
   */
  export type ArticleCurationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCuration
     */
    select?: ArticleCurationSelect<ExtArgs> | null
    /**
     * Filter, which ArticleCuration to fetch.
     */
    where: ArticleCurationWhereUniqueInput
  }

  /**
   * ArticleCuration findUniqueOrThrow
   */
  export type ArticleCurationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCuration
     */
    select?: ArticleCurationSelect<ExtArgs> | null
    /**
     * Filter, which ArticleCuration to fetch.
     */
    where: ArticleCurationWhereUniqueInput
  }

  /**
   * ArticleCuration findFirst
   */
  export type ArticleCurationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCuration
     */
    select?: ArticleCurationSelect<ExtArgs> | null
    /**
     * Filter, which ArticleCuration to fetch.
     */
    where?: ArticleCurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleCurations to fetch.
     */
    orderBy?: ArticleCurationOrderByWithRelationInput | ArticleCurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleCurations.
     */
    cursor?: ArticleCurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleCurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleCurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleCurations.
     */
    distinct?: ArticleCurationScalarFieldEnum | ArticleCurationScalarFieldEnum[]
  }

  /**
   * ArticleCuration findFirstOrThrow
   */
  export type ArticleCurationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCuration
     */
    select?: ArticleCurationSelect<ExtArgs> | null
    /**
     * Filter, which ArticleCuration to fetch.
     */
    where?: ArticleCurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleCurations to fetch.
     */
    orderBy?: ArticleCurationOrderByWithRelationInput | ArticleCurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleCurations.
     */
    cursor?: ArticleCurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleCurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleCurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleCurations.
     */
    distinct?: ArticleCurationScalarFieldEnum | ArticleCurationScalarFieldEnum[]
  }

  /**
   * ArticleCuration findMany
   */
  export type ArticleCurationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCuration
     */
    select?: ArticleCurationSelect<ExtArgs> | null
    /**
     * Filter, which ArticleCurations to fetch.
     */
    where?: ArticleCurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleCurations to fetch.
     */
    orderBy?: ArticleCurationOrderByWithRelationInput | ArticleCurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticleCurations.
     */
    cursor?: ArticleCurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleCurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleCurations.
     */
    skip?: number
    distinct?: ArticleCurationScalarFieldEnum | ArticleCurationScalarFieldEnum[]
  }

  /**
   * ArticleCuration create
   */
  export type ArticleCurationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCuration
     */
    select?: ArticleCurationSelect<ExtArgs> | null
    /**
     * The data needed to create a ArticleCuration.
     */
    data: XOR<ArticleCurationCreateInput, ArticleCurationUncheckedCreateInput>
  }

  /**
   * ArticleCuration createMany
   */
  export type ArticleCurationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleCurations.
     */
    data: ArticleCurationCreateManyInput | ArticleCurationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticleCuration update
   */
  export type ArticleCurationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCuration
     */
    select?: ArticleCurationSelect<ExtArgs> | null
    /**
     * The data needed to update a ArticleCuration.
     */
    data: XOR<ArticleCurationUpdateInput, ArticleCurationUncheckedUpdateInput>
    /**
     * Choose, which ArticleCuration to update.
     */
    where: ArticleCurationWhereUniqueInput
  }

  /**
   * ArticleCuration updateMany
   */
  export type ArticleCurationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleCurations.
     */
    data: XOR<ArticleCurationUpdateManyMutationInput, ArticleCurationUncheckedUpdateManyInput>
    /**
     * Filter which ArticleCurations to update
     */
    where?: ArticleCurationWhereInput
  }

  /**
   * ArticleCuration upsert
   */
  export type ArticleCurationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCuration
     */
    select?: ArticleCurationSelect<ExtArgs> | null
    /**
     * The filter to search for the ArticleCuration to update in case it exists.
     */
    where: ArticleCurationWhereUniqueInput
    /**
     * In case the ArticleCuration found by the `where` argument doesn't exist, create a new ArticleCuration with this data.
     */
    create: XOR<ArticleCurationCreateInput, ArticleCurationUncheckedCreateInput>
    /**
     * In case the ArticleCuration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleCurationUpdateInput, ArticleCurationUncheckedUpdateInput>
  }

  /**
   * ArticleCuration delete
   */
  export type ArticleCurationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCuration
     */
    select?: ArticleCurationSelect<ExtArgs> | null
    /**
     * Filter which ArticleCuration to delete.
     */
    where: ArticleCurationWhereUniqueInput
  }

  /**
   * ArticleCuration deleteMany
   */
  export type ArticleCurationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleCurations to delete
     */
    where?: ArticleCurationWhereInput
  }

  /**
   * ArticleCuration without action
   */
  export type ArticleCurationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCuration
     */
    select?: ArticleCurationSelect<ExtArgs> | null
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


  export const ArticleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    categoryId: 'categoryId',
    title: 'title',
    url: 'url',
    normalizedUrl: 'normalizedUrl',
    seo: 'seo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const ArticleCategoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticleCategoryScalarFieldEnum = (typeof ArticleCategoryScalarFieldEnum)[keyof typeof ArticleCategoryScalarFieldEnum]


  export const ArticleCurationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    weekKey: 'weekKey',
    articleId: 'articleId',
    createdAt: 'createdAt'
  };

  export type ArticleCurationScalarFieldEnum = (typeof ArticleCurationScalarFieldEnum)[keyof typeof ArticleCurationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


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


  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    id?: StringFilter<"Article"> | string
    userId?: IntFilter<"Article"> | number
    categoryId?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    url?: StringFilter<"Article"> | string
    normalizedUrl?: StringFilter<"Article"> | string
    seo?: JsonNullableFilter<"Article">
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
  }

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    url?: SortOrder
    normalizedUrl?: SortOrder
    seo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    userId?: IntFilter<"Article"> | number
    categoryId?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    url?: StringFilter<"Article"> | string
    normalizedUrl?: StringFilter<"Article"> | string
    seo?: JsonNullableFilter<"Article">
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
  }, "id">

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    url?: SortOrder
    normalizedUrl?: SortOrder
    seo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticleCountOrderByAggregateInput
    _avg?: ArticleAvgOrderByAggregateInput
    _max?: ArticleMaxOrderByAggregateInput
    _min?: ArticleMinOrderByAggregateInput
    _sum?: ArticleSumOrderByAggregateInput
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    OR?: ArticleScalarWhereWithAggregatesInput[]
    NOT?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Article"> | string
    userId?: IntWithAggregatesFilter<"Article"> | number
    categoryId?: StringWithAggregatesFilter<"Article"> | string
    title?: StringWithAggregatesFilter<"Article"> | string
    url?: StringWithAggregatesFilter<"Article"> | string
    normalizedUrl?: StringWithAggregatesFilter<"Article"> | string
    seo?: JsonNullableWithAggregatesFilter<"Article">
    createdAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
  }

  export type ArticleCategoryWhereInput = {
    AND?: ArticleCategoryWhereInput | ArticleCategoryWhereInput[]
    OR?: ArticleCategoryWhereInput[]
    NOT?: ArticleCategoryWhereInput | ArticleCategoryWhereInput[]
    id?: StringFilter<"ArticleCategory"> | string
    userId?: IntFilter<"ArticleCategory"> | number
    name?: StringFilter<"ArticleCategory"> | string
    order?: IntFilter<"ArticleCategory"> | number
    createdAt?: DateTimeFilter<"ArticleCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleCategory"> | Date | string
  }

  export type ArticleCategoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArticleCategoryWhereInput | ArticleCategoryWhereInput[]
    OR?: ArticleCategoryWhereInput[]
    NOT?: ArticleCategoryWhereInput | ArticleCategoryWhereInput[]
    userId?: IntFilter<"ArticleCategory"> | number
    name?: StringFilter<"ArticleCategory"> | string
    order?: IntFilter<"ArticleCategory"> | number
    createdAt?: DateTimeFilter<"ArticleCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ArticleCategory"> | Date | string
  }, "id">

  export type ArticleCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticleCategoryCountOrderByAggregateInput
    _avg?: ArticleCategoryAvgOrderByAggregateInput
    _max?: ArticleCategoryMaxOrderByAggregateInput
    _min?: ArticleCategoryMinOrderByAggregateInput
    _sum?: ArticleCategorySumOrderByAggregateInput
  }

  export type ArticleCategoryScalarWhereWithAggregatesInput = {
    AND?: ArticleCategoryScalarWhereWithAggregatesInput | ArticleCategoryScalarWhereWithAggregatesInput[]
    OR?: ArticleCategoryScalarWhereWithAggregatesInput[]
    NOT?: ArticleCategoryScalarWhereWithAggregatesInput | ArticleCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArticleCategory"> | string
    userId?: IntWithAggregatesFilter<"ArticleCategory"> | number
    name?: StringWithAggregatesFilter<"ArticleCategory"> | string
    order?: IntWithAggregatesFilter<"ArticleCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ArticleCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ArticleCategory"> | Date | string
  }

  export type ArticleCurationWhereInput = {
    AND?: ArticleCurationWhereInput | ArticleCurationWhereInput[]
    OR?: ArticleCurationWhereInput[]
    NOT?: ArticleCurationWhereInput | ArticleCurationWhereInput[]
    id?: StringFilter<"ArticleCuration"> | string
    userId?: IntFilter<"ArticleCuration"> | number
    weekKey?: StringFilter<"ArticleCuration"> | string
    articleId?: StringFilter<"ArticleCuration"> | string
    createdAt?: DateTimeFilter<"ArticleCuration"> | Date | string
  }

  export type ArticleCurationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    weekKey?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
  }

  export type ArticleCurationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_weekKey_articleId?: ArticleCurationUserIdWeekKeyArticleIdCompoundUniqueInput
    AND?: ArticleCurationWhereInput | ArticleCurationWhereInput[]
    OR?: ArticleCurationWhereInput[]
    NOT?: ArticleCurationWhereInput | ArticleCurationWhereInput[]
    userId?: IntFilter<"ArticleCuration"> | number
    weekKey?: StringFilter<"ArticleCuration"> | string
    articleId?: StringFilter<"ArticleCuration"> | string
    createdAt?: DateTimeFilter<"ArticleCuration"> | Date | string
  }, "id" | "userId_weekKey_articleId">

  export type ArticleCurationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    weekKey?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
    _count?: ArticleCurationCountOrderByAggregateInput
    _avg?: ArticleCurationAvgOrderByAggregateInput
    _max?: ArticleCurationMaxOrderByAggregateInput
    _min?: ArticleCurationMinOrderByAggregateInput
    _sum?: ArticleCurationSumOrderByAggregateInput
  }

  export type ArticleCurationScalarWhereWithAggregatesInput = {
    AND?: ArticleCurationScalarWhereWithAggregatesInput | ArticleCurationScalarWhereWithAggregatesInput[]
    OR?: ArticleCurationScalarWhereWithAggregatesInput[]
    NOT?: ArticleCurationScalarWhereWithAggregatesInput | ArticleCurationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArticleCuration"> | string
    userId?: IntWithAggregatesFilter<"ArticleCuration"> | number
    weekKey?: StringWithAggregatesFilter<"ArticleCuration"> | string
    articleId?: StringWithAggregatesFilter<"ArticleCuration"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ArticleCuration"> | Date | string
  }

  export type ArticleCreateInput = {
    id?: string
    userId: number
    categoryId: string
    title: string
    url: string
    normalizedUrl: string
    seo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUncheckedCreateInput = {
    id?: string
    userId: number
    categoryId: string
    title: string
    url: string
    normalizedUrl: string
    seo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    normalizedUrl?: StringFieldUpdateOperationsInput | string
    seo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    normalizedUrl?: StringFieldUpdateOperationsInput | string
    seo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateManyInput = {
    id?: string
    userId: number
    categoryId: string
    title: string
    url: string
    normalizedUrl: string
    seo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    normalizedUrl?: StringFieldUpdateOperationsInput | string
    seo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    normalizedUrl?: StringFieldUpdateOperationsInput | string
    seo?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCategoryCreateInput = {
    id?: string
    userId: number
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCategoryUncheckedCreateInput = {
    id?: string
    userId: number
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCategoryCreateManyInput = {
    id?: string
    userId: number
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCurationCreateInput = {
    id?: string
    userId: number
    weekKey: string
    articleId: string
    createdAt?: Date | string
  }

  export type ArticleCurationUncheckedCreateInput = {
    id?: string
    userId: number
    weekKey: string
    articleId: string
    createdAt?: Date | string
  }

  export type ArticleCurationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    weekKey?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCurationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    weekKey?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCurationCreateManyInput = {
    id?: string
    userId: number
    weekKey: string
    articleId: string
    createdAt?: Date | string
  }

  export type ArticleCurationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    weekKey?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCurationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    weekKey?: StringFieldUpdateOperationsInput | string
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    url?: SortOrder
    normalizedUrl?: SortOrder
    seo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    url?: SortOrder
    normalizedUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    url?: SortOrder
    normalizedUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleSumOrderByAggregateInput = {
    userId?: SortOrder
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type ArticleCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleCategoryAvgOrderByAggregateInput = {
    userId?: SortOrder
    order?: SortOrder
  }

  export type ArticleCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticleCategorySumOrderByAggregateInput = {
    userId?: SortOrder
    order?: SortOrder
  }

  export type ArticleCurationUserIdWeekKeyArticleIdCompoundUniqueInput = {
    userId: number
    weekKey: string
    articleId: string
  }

  export type ArticleCurationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekKey?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
  }

  export type ArticleCurationAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type ArticleCurationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekKey?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
  }

  export type ArticleCurationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekKey?: SortOrder
    articleId?: SortOrder
    createdAt?: SortOrder
  }

  export type ArticleCurationSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ArticleDefaultArgs instead
     */
    export type ArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArticleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArticleCategoryDefaultArgs instead
     */
    export type ArticleCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArticleCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArticleCurationDefaultArgs instead
     */
    export type ArticleCurationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArticleCurationDefaultArgs<ExtArgs>

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