
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
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model InventoryItem
 * 
 */
export type InventoryItem = $Result.DefaultSelection<Prisma.$InventoryItemPayload>
/**
 * Model StockMovement
 * 
 */
export type StockMovement = $Result.DefaultSelection<Prisma.$StockMovementPayload>
/**
 * Model AccountEntry
 * 
 */
export type AccountEntry = $Result.DefaultSelection<Prisma.$AccountEntryPayload>
/**
 * Model CashFlowEntry
 * 
 */
export type CashFlowEntry = $Result.DefaultSelection<Prisma.$CashFlowEntryPayload>
/**
 * Model TeamMember
 * 
 */
export type TeamMember = $Result.DefaultSelection<Prisma.$TeamMemberPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const InventoryCategory: {
  peixe: 'peixe',
  arroz: 'arroz',
  embalagem: 'embalagem',
  bebida: 'bebida',
  tempero: 'tempero',
  outros: 'outros'
};

export type InventoryCategory = (typeof InventoryCategory)[keyof typeof InventoryCategory]


export const UnitType: {
  kg: 'kg',
  un: 'un',
  l: 'l'
};

export type UnitType = (typeof UnitType)[keyof typeof UnitType]


export const MovementType: {
  entrada: 'entrada',
  saida: 'saida'
};

export type MovementType = (typeof MovementType)[keyof typeof MovementType]


export const AccountType: {
  pagar: 'pagar',
  receber: 'receber'
};

export type AccountType = (typeof AccountType)[keyof typeof AccountType]


export const AccountStatus: {
  aberta: 'aberta',
  paga: 'paga',
  atrasada: 'atrasada'
};

export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus]


export const CashFlowCategory: {
  venda: 'venda',
  compra: 'compra',
  taxa: 'taxa',
  despesa_fixa: 'despesa_fixa'
};

export type CashFlowCategory = (typeof CashFlowCategory)[keyof typeof CashFlowCategory]


export const TeamUserRole: {
  admin: 'admin',
  gerente: 'gerente',
  financeiro: 'financeiro',
  estoque: 'estoque',
  atendimento: 'atendimento',
  cozinha: 'cozinha'
};

export type TeamUserRole = (typeof TeamUserRole)[keyof typeof TeamUserRole]


export const TeamUserStatus: {
  ativo: 'ativo',
  inativo: 'inativo',
  ferias: 'ferias'
};

export type TeamUserStatus = (typeof TeamUserStatus)[keyof typeof TeamUserStatus]

}

export type InventoryCategory = $Enums.InventoryCategory

export const InventoryCategory: typeof $Enums.InventoryCategory

export type UnitType = $Enums.UnitType

export const UnitType: typeof $Enums.UnitType

export type MovementType = $Enums.MovementType

export const MovementType: typeof $Enums.MovementType

export type AccountType = $Enums.AccountType

export const AccountType: typeof $Enums.AccountType

export type AccountStatus = $Enums.AccountStatus

export const AccountStatus: typeof $Enums.AccountStatus

export type CashFlowCategory = $Enums.CashFlowCategory

export const CashFlowCategory: typeof $Enums.CashFlowCategory

export type TeamUserRole = $Enums.TeamUserRole

export const TeamUserRole: typeof $Enums.TeamUserRole

export type TeamUserStatus = $Enums.TeamUserStatus

export const TeamUserStatus: typeof $Enums.TeamUserStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Suppliers
 * const suppliers = await prisma.supplier.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Suppliers
   * const suppliers = await prisma.supplier.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryItem`: Exposes CRUD operations for the **InventoryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryItems
    * const inventoryItems = await prisma.inventoryItem.findMany()
    * ```
    */
  get inventoryItem(): Prisma.InventoryItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockMovement`: Exposes CRUD operations for the **StockMovement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockMovements
    * const stockMovements = await prisma.stockMovement.findMany()
    * ```
    */
  get stockMovement(): Prisma.StockMovementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accountEntry`: Exposes CRUD operations for the **AccountEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountEntries
    * const accountEntries = await prisma.accountEntry.findMany()
    * ```
    */
  get accountEntry(): Prisma.AccountEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cashFlowEntry`: Exposes CRUD operations for the **CashFlowEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CashFlowEntries
    * const cashFlowEntries = await prisma.cashFlowEntry.findMany()
    * ```
    */
  get cashFlowEntry(): Prisma.CashFlowEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamMember`: Exposes CRUD operations for the **TeamMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamMembers
    * const teamMembers = await prisma.teamMember.findMany()
    * ```
    */
  get teamMember(): Prisma.TeamMemberDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Supplier: 'Supplier',
    InventoryItem: 'InventoryItem',
    StockMovement: 'StockMovement',
    AccountEntry: 'AccountEntry',
    CashFlowEntry: 'CashFlowEntry',
    TeamMember: 'TeamMember'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "supplier" | "inventoryItem" | "stockMovement" | "accountEntry" | "cashFlowEntry" | "teamMember"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      InventoryItem: {
        payload: Prisma.$InventoryItemPayload<ExtArgs>
        fields: Prisma.InventoryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findFirst: {
            args: Prisma.InventoryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findMany: {
            args: Prisma.InventoryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          create: {
            args: Prisma.InventoryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          createMany: {
            args: Prisma.InventoryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          delete: {
            args: Prisma.InventoryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          update: {
            args: Prisma.InventoryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          deleteMany: {
            args: Prisma.InventoryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          upsert: {
            args: Prisma.InventoryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          aggregate: {
            args: Prisma.InventoryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryItem>
          }
          groupBy: {
            args: Prisma.InventoryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryItemCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemCountAggregateOutputType> | number
          }
        }
      }
      StockMovement: {
        payload: Prisma.$StockMovementPayload<ExtArgs>
        fields: Prisma.StockMovementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockMovementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockMovementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          findFirst: {
            args: Prisma.StockMovementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockMovementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          findMany: {
            args: Prisma.StockMovementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>[]
          }
          create: {
            args: Prisma.StockMovementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          createMany: {
            args: Prisma.StockMovementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockMovementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>[]
          }
          delete: {
            args: Prisma.StockMovementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          update: {
            args: Prisma.StockMovementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          deleteMany: {
            args: Prisma.StockMovementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockMovementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockMovementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>[]
          }
          upsert: {
            args: Prisma.StockMovementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          aggregate: {
            args: Prisma.StockMovementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockMovement>
          }
          groupBy: {
            args: Prisma.StockMovementGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockMovementGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockMovementCountArgs<ExtArgs>
            result: $Utils.Optional<StockMovementCountAggregateOutputType> | number
          }
        }
      }
      AccountEntry: {
        payload: Prisma.$AccountEntryPayload<ExtArgs>
        fields: Prisma.AccountEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountEntryPayload>
          }
          findFirst: {
            args: Prisma.AccountEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountEntryPayload>
          }
          findMany: {
            args: Prisma.AccountEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountEntryPayload>[]
          }
          create: {
            args: Prisma.AccountEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountEntryPayload>
          }
          createMany: {
            args: Prisma.AccountEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountEntryPayload>[]
          }
          delete: {
            args: Prisma.AccountEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountEntryPayload>
          }
          update: {
            args: Prisma.AccountEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountEntryPayload>
          }
          deleteMany: {
            args: Prisma.AccountEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountEntryPayload>[]
          }
          upsert: {
            args: Prisma.AccountEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountEntryPayload>
          }
          aggregate: {
            args: Prisma.AccountEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountEntry>
          }
          groupBy: {
            args: Prisma.AccountEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountEntryCountArgs<ExtArgs>
            result: $Utils.Optional<AccountEntryCountAggregateOutputType> | number
          }
        }
      }
      CashFlowEntry: {
        payload: Prisma.$CashFlowEntryPayload<ExtArgs>
        fields: Prisma.CashFlowEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CashFlowEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashFlowEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CashFlowEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashFlowEntryPayload>
          }
          findFirst: {
            args: Prisma.CashFlowEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashFlowEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CashFlowEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashFlowEntryPayload>
          }
          findMany: {
            args: Prisma.CashFlowEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashFlowEntryPayload>[]
          }
          create: {
            args: Prisma.CashFlowEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashFlowEntryPayload>
          }
          createMany: {
            args: Prisma.CashFlowEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CashFlowEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashFlowEntryPayload>[]
          }
          delete: {
            args: Prisma.CashFlowEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashFlowEntryPayload>
          }
          update: {
            args: Prisma.CashFlowEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashFlowEntryPayload>
          }
          deleteMany: {
            args: Prisma.CashFlowEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CashFlowEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CashFlowEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashFlowEntryPayload>[]
          }
          upsert: {
            args: Prisma.CashFlowEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashFlowEntryPayload>
          }
          aggregate: {
            args: Prisma.CashFlowEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCashFlowEntry>
          }
          groupBy: {
            args: Prisma.CashFlowEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CashFlowEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CashFlowEntryCountArgs<ExtArgs>
            result: $Utils.Optional<CashFlowEntryCountAggregateOutputType> | number
          }
        }
      }
      TeamMember: {
        payload: Prisma.$TeamMemberPayload<ExtArgs>
        fields: Prisma.TeamMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findFirst: {
            args: Prisma.TeamMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findMany: {
            args: Prisma.TeamMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          create: {
            args: Prisma.TeamMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          createMany: {
            args: Prisma.TeamMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          delete: {
            args: Prisma.TeamMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          update: {
            args: Prisma.TeamMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          deleteMany: {
            args: Prisma.TeamMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          upsert: {
            args: Prisma.TeamMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          aggregate: {
            args: Prisma.TeamMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamMember>
          }
          groupBy: {
            args: Prisma.TeamMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamMemberCountArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    supplier?: SupplierOmit
    inventoryItem?: InventoryItemOmit
    stockMovement?: StockMovementOmit
    accountEntry?: AccountEntryOmit
    cashFlowEntry?: CashFlowEntryOmit
    teamMember?: TeamMemberOmit
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
    | 'updateManyAndReturn'
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
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    inventory: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | SupplierCountOutputTypeCountInventoryArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
  }


  /**
   * Count Type InventoryItemCountOutputType
   */

  export type InventoryItemCountOutputType = {
    movements: number
  }

  export type InventoryItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movements?: boolean | InventoryItemCountOutputTypeCountMovementsArgs
  }

  // Custom InputTypes
  /**
   * InventoryItemCountOutputType without action
   */
  export type InventoryItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItemCountOutputType
     */
    select?: InventoryItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryItemCountOutputType without action
   */
  export type InventoryItemCountOutputTypeCountMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierMinAggregateOutputType = {
    id: string | null
    nomeFantasia: string | null
    documento: string | null
    contato: string | null
    telefone: string | null
    observacoes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: string | null
    nomeFantasia: string | null
    documento: string | null
    contato: string | null
    telefone: string | null
    observacoes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    nomeFantasia: number
    documento: number
    contato: number
    telefone: number
    observacoes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupplierMinAggregateInputType = {
    id?: true
    nomeFantasia?: true
    documento?: true
    contato?: true
    telefone?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    nomeFantasia?: true
    documento?: true
    contato?: true
    telefone?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    nomeFantasia?: true
    documento?: true
    contato?: true
    telefone?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: string
    nomeFantasia: string
    documento: string
    contato: string
    telefone: string
    observacoes: string | null
    createdAt: Date
    updatedAt: Date
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeFantasia?: boolean
    documento?: boolean
    contato?: boolean
    telefone?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inventory?: boolean | Supplier$inventoryArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeFantasia?: boolean
    documento?: boolean
    contato?: boolean
    telefone?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeFantasia?: boolean
    documento?: boolean
    contato?: boolean
    telefone?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    nomeFantasia?: boolean
    documento?: boolean
    contato?: boolean
    telefone?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeFantasia" | "documento" | "contato" | "telefone" | "observacoes" | "createdAt" | "updatedAt", ExtArgs["result"]["supplier"]>
  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | Supplier$inventoryArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SupplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      inventory: Prisma.$InventoryItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nomeFantasia: string
      documento: string
      contato: string
      telefone: string
      observacoes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SupplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SupplierUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
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
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends Supplier$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Supplier model
   */
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'String'>
    readonly nomeFantasia: FieldRef<"Supplier", 'String'>
    readonly documento: FieldRef<"Supplier", 'String'>
    readonly contato: FieldRef<"Supplier", 'String'>
    readonly telefone: FieldRef<"Supplier", 'String'>
    readonly observacoes: FieldRef<"Supplier", 'String'>
    readonly createdAt: FieldRef<"Supplier", 'DateTime'>
    readonly updatedAt: FieldRef<"Supplier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier updateManyAndReturn
   */
  export type SupplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Supplier.inventory
   */
  export type Supplier$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    cursor?: InventoryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model InventoryItem
   */

  export type AggregateInventoryItem = {
    _count: InventoryItemCountAggregateOutputType | null
    _avg: InventoryItemAvgAggregateOutputType | null
    _sum: InventoryItemSumAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  export type InventoryItemAvgAggregateOutputType = {
    estoqueAtual: Decimal | null
    estoqueMinimo: Decimal | null
    custoUnitario: Decimal | null
  }

  export type InventoryItemSumAggregateOutputType = {
    estoqueAtual: Decimal | null
    estoqueMinimo: Decimal | null
    custoUnitario: Decimal | null
  }

  export type InventoryItemMinAggregateOutputType = {
    id: string | null
    nome: string | null
    categoria: $Enums.InventoryCategory | null
    unidade: $Enums.UnitType | null
    estoqueAtual: Decimal | null
    estoqueMinimo: Decimal | null
    custoUnitario: Decimal | null
    fornecedorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryItemMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    categoria: $Enums.InventoryCategory | null
    unidade: $Enums.UnitType | null
    estoqueAtual: Decimal | null
    estoqueMinimo: Decimal | null
    custoUnitario: Decimal | null
    fornecedorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryItemCountAggregateOutputType = {
    id: number
    nome: number
    categoria: number
    unidade: number
    estoqueAtual: number
    estoqueMinimo: number
    custoUnitario: number
    fornecedorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InventoryItemAvgAggregateInputType = {
    estoqueAtual?: true
    estoqueMinimo?: true
    custoUnitario?: true
  }

  export type InventoryItemSumAggregateInputType = {
    estoqueAtual?: true
    estoqueMinimo?: true
    custoUnitario?: true
  }

  export type InventoryItemMinAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
    unidade?: true
    estoqueAtual?: true
    estoqueMinimo?: true
    custoUnitario?: true
    fornecedorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryItemMaxAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
    unidade?: true
    estoqueAtual?: true
    estoqueMinimo?: true
    custoUnitario?: true
    fornecedorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryItemCountAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
    unidade?: true
    estoqueAtual?: true
    estoqueMinimo?: true
    custoUnitario?: true
    fornecedorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InventoryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItem to aggregate.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryItems
    **/
    _count?: true | InventoryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryItemMaxAggregateInputType
  }

  export type GetInventoryItemAggregateType<T extends InventoryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryItem[P]>
      : GetScalarType<T[P], AggregateInventoryItem[P]>
  }




  export type InventoryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithAggregationInput | InventoryItemOrderByWithAggregationInput[]
    by: InventoryItemScalarFieldEnum[] | InventoryItemScalarFieldEnum
    having?: InventoryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryItemCountAggregateInputType | true
    _avg?: InventoryItemAvgAggregateInputType
    _sum?: InventoryItemSumAggregateInputType
    _min?: InventoryItemMinAggregateInputType
    _max?: InventoryItemMaxAggregateInputType
  }

  export type InventoryItemGroupByOutputType = {
    id: string
    nome: string
    categoria: $Enums.InventoryCategory
    unidade: $Enums.UnitType
    estoqueAtual: Decimal
    estoqueMinimo: Decimal
    custoUnitario: Decimal
    fornecedorId: string | null
    createdAt: Date
    updatedAt: Date
    _count: InventoryItemCountAggregateOutputType | null
    _avg: InventoryItemAvgAggregateOutputType | null
    _sum: InventoryItemSumAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  type GetInventoryItemGroupByPayload<T extends InventoryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
        }
      >
    >


  export type InventoryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    categoria?: boolean
    unidade?: boolean
    estoqueAtual?: boolean
    estoqueMinimo?: boolean
    custoUnitario?: boolean
    fornecedorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fornecedor?: boolean | InventoryItem$fornecedorArgs<ExtArgs>
    movements?: boolean | InventoryItem$movementsArgs<ExtArgs>
    _count?: boolean | InventoryItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    categoria?: boolean
    unidade?: boolean
    estoqueAtual?: boolean
    estoqueMinimo?: boolean
    custoUnitario?: boolean
    fornecedorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fornecedor?: boolean | InventoryItem$fornecedorArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    categoria?: boolean
    unidade?: boolean
    estoqueAtual?: boolean
    estoqueMinimo?: boolean
    custoUnitario?: boolean
    fornecedorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fornecedor?: boolean | InventoryItem$fornecedorArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectScalar = {
    id?: boolean
    nome?: boolean
    categoria?: boolean
    unidade?: boolean
    estoqueAtual?: boolean
    estoqueMinimo?: boolean
    custoUnitario?: boolean
    fornecedorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InventoryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "categoria" | "unidade" | "estoqueAtual" | "estoqueMinimo" | "custoUnitario" | "fornecedorId" | "createdAt" | "updatedAt", ExtArgs["result"]["inventoryItem"]>
  export type InventoryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | InventoryItem$fornecedorArgs<ExtArgs>
    movements?: boolean | InventoryItem$movementsArgs<ExtArgs>
    _count?: boolean | InventoryItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InventoryItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | InventoryItem$fornecedorArgs<ExtArgs>
  }
  export type InventoryItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fornecedor?: boolean | InventoryItem$fornecedorArgs<ExtArgs>
  }

  export type $InventoryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryItem"
    objects: {
      fornecedor: Prisma.$SupplierPayload<ExtArgs> | null
      movements: Prisma.$StockMovementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      categoria: $Enums.InventoryCategory
      unidade: $Enums.UnitType
      estoqueAtual: Prisma.Decimal
      estoqueMinimo: Prisma.Decimal
      custoUnitario: Prisma.Decimal
      fornecedorId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inventoryItem"]>
    composites: {}
  }

  type InventoryItemGetPayload<S extends boolean | null | undefined | InventoryItemDefaultArgs> = $Result.GetResult<Prisma.$InventoryItemPayload, S>

  type InventoryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryItemCountAggregateInputType | true
    }

  export interface InventoryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryItem'], meta: { name: 'InventoryItem' } }
    /**
     * Find zero or one InventoryItem that matches the filter.
     * @param {InventoryItemFindUniqueArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryItemFindUniqueArgs>(args: SelectSubset<T, InventoryItemFindUniqueArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryItemFindUniqueOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryItemFindFirstArgs>(args?: SelectSubset<T, InventoryItemFindFirstArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany()
     * 
     * // Get first 10 InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryItemFindManyArgs>(args?: SelectSubset<T, InventoryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryItem.
     * @param {InventoryItemCreateArgs} args - Arguments to create a InventoryItem.
     * @example
     * // Create one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.create({
     *   data: {
     *     // ... data to create a InventoryItem
     *   }
     * })
     * 
     */
    create<T extends InventoryItemCreateArgs>(args: SelectSubset<T, InventoryItemCreateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryItems.
     * @param {InventoryItemCreateManyArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryItemCreateManyArgs>(args?: SelectSubset<T, InventoryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryItems and returns the data saved in the database.
     * @param {InventoryItemCreateManyAndReturnArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryItems and only return the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InventoryItem.
     * @param {InventoryItemDeleteArgs} args - Arguments to delete one InventoryItem.
     * @example
     * // Delete one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.delete({
     *   where: {
     *     // ... filter to delete one InventoryItem
     *   }
     * })
     * 
     */
    delete<T extends InventoryItemDeleteArgs>(args: SelectSubset<T, InventoryItemDeleteArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryItem.
     * @param {InventoryItemUpdateArgs} args - Arguments to update one InventoryItem.
     * @example
     * // Update one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryItemUpdateArgs>(args: SelectSubset<T, InventoryItemUpdateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryItems.
     * @param {InventoryItemDeleteManyArgs} args - Arguments to filter InventoryItems to delete.
     * @example
     * // Delete a few InventoryItems
     * const { count } = await prisma.inventoryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryItemDeleteManyArgs>(args?: SelectSubset<T, InventoryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryItemUpdateManyArgs>(args: SelectSubset<T, InventoryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryItems and returns the data updated in the database.
     * @param {InventoryItemUpdateManyAndReturnArgs} args - Arguments to update many InventoryItems.
     * @example
     * // Update many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InventoryItems and only return the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventoryItemUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InventoryItem.
     * @param {InventoryItemUpsertArgs} args - Arguments to update or create a InventoryItem.
     * @example
     * // Update or create a InventoryItem
     * const inventoryItem = await prisma.inventoryItem.upsert({
     *   create: {
     *     // ... data to create a InventoryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryItem we want to update
     *   }
     * })
     */
    upsert<T extends InventoryItemUpsertArgs>(args: SelectSubset<T, InventoryItemUpsertArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemCountArgs} args - Arguments to filter InventoryItems to count.
     * @example
     * // Count the number of InventoryItems
     * const count = await prisma.inventoryItem.count({
     *   where: {
     *     // ... the filter for the InventoryItems we want to count
     *   }
     * })
    **/
    count<T extends InventoryItemCountArgs>(
      args?: Subset<T, InventoryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryItemAggregateArgs>(args: Subset<T, InventoryItemAggregateArgs>): Prisma.PrismaPromise<GetInventoryItemAggregateType<T>>

    /**
     * Group by InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemGroupByArgs} args - Group by arguments.
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
      T extends InventoryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryItemGroupByArgs['orderBy'] }
        : { orderBy?: InventoryItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryItem model
   */
  readonly fields: InventoryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fornecedor<T extends InventoryItem$fornecedorArgs<ExtArgs> = {}>(args?: Subset<T, InventoryItem$fornecedorArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    movements<T extends InventoryItem$movementsArgs<ExtArgs> = {}>(args?: Subset<T, InventoryItem$movementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryItem model
   */
  interface InventoryItemFieldRefs {
    readonly id: FieldRef<"InventoryItem", 'String'>
    readonly nome: FieldRef<"InventoryItem", 'String'>
    readonly categoria: FieldRef<"InventoryItem", 'InventoryCategory'>
    readonly unidade: FieldRef<"InventoryItem", 'UnitType'>
    readonly estoqueAtual: FieldRef<"InventoryItem", 'Decimal'>
    readonly estoqueMinimo: FieldRef<"InventoryItem", 'Decimal'>
    readonly custoUnitario: FieldRef<"InventoryItem", 'Decimal'>
    readonly fornecedorId: FieldRef<"InventoryItem", 'String'>
    readonly createdAt: FieldRef<"InventoryItem", 'DateTime'>
    readonly updatedAt: FieldRef<"InventoryItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryItem findUnique
   */
  export type InventoryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findUniqueOrThrow
   */
  export type InventoryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findFirst
   */
  export type InventoryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findFirstOrThrow
   */
  export type InventoryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findMany
   */
  export type InventoryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItems to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem create
   */
  export type InventoryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryItem.
     */
    data: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
  }

  /**
   * InventoryItem createMany
   */
  export type InventoryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemCreateManyInput | InventoryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryItem createManyAndReturn
   */
  export type InventoryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemCreateManyInput | InventoryItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryItem update
   */
  export type InventoryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryItem.
     */
    data: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
    /**
     * Choose, which InventoryItem to update.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem updateMany
   */
  export type InventoryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryItems.
     */
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyInput>
    /**
     * Filter which InventoryItems to update
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to update.
     */
    limit?: number
  }

  /**
   * InventoryItem updateManyAndReturn
   */
  export type InventoryItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * The data used to update InventoryItems.
     */
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyInput>
    /**
     * Filter which InventoryItems to update
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryItem upsert
   */
  export type InventoryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryItem to update in case it exists.
     */
    where: InventoryItemWhereUniqueInput
    /**
     * In case the InventoryItem found by the `where` argument doesn't exist, create a new InventoryItem with this data.
     */
    create: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
    /**
     * In case the InventoryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
  }

  /**
   * InventoryItem delete
   */
  export type InventoryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter which InventoryItem to delete.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem deleteMany
   */
  export type InventoryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItems to delete
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to delete.
     */
    limit?: number
  }

  /**
   * InventoryItem.fornecedor
   */
  export type InventoryItem$fornecedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    where?: SupplierWhereInput
  }

  /**
   * InventoryItem.movements
   */
  export type InventoryItem$movementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    cursor?: StockMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * InventoryItem without action
   */
  export type InventoryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
  }


  /**
   * Model StockMovement
   */

  export type AggregateStockMovement = {
    _count: StockMovementCountAggregateOutputType | null
    _avg: StockMovementAvgAggregateOutputType | null
    _sum: StockMovementSumAggregateOutputType | null
    _min: StockMovementMinAggregateOutputType | null
    _max: StockMovementMaxAggregateOutputType | null
  }

  export type StockMovementAvgAggregateOutputType = {
    quantidade: Decimal | null
  }

  export type StockMovementSumAggregateOutputType = {
    quantidade: Decimal | null
  }

  export type StockMovementMinAggregateOutputType = {
    id: string | null
    data: Date | null
    itemId: string | null
    tipo: $Enums.MovementType | null
    quantidade: Decimal | null
    observacao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StockMovementMaxAggregateOutputType = {
    id: string | null
    data: Date | null
    itemId: string | null
    tipo: $Enums.MovementType | null
    quantidade: Decimal | null
    observacao: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StockMovementCountAggregateOutputType = {
    id: number
    data: number
    itemId: number
    tipo: number
    quantidade: number
    observacao: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StockMovementAvgAggregateInputType = {
    quantidade?: true
  }

  export type StockMovementSumAggregateInputType = {
    quantidade?: true
  }

  export type StockMovementMinAggregateInputType = {
    id?: true
    data?: true
    itemId?: true
    tipo?: true
    quantidade?: true
    observacao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StockMovementMaxAggregateInputType = {
    id?: true
    data?: true
    itemId?: true
    tipo?: true
    quantidade?: true
    observacao?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StockMovementCountAggregateInputType = {
    id?: true
    data?: true
    itemId?: true
    tipo?: true
    quantidade?: true
    observacao?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StockMovementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockMovement to aggregate.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockMovements
    **/
    _count?: true | StockMovementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockMovementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockMovementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMovementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMovementMaxAggregateInputType
  }

  export type GetStockMovementAggregateType<T extends StockMovementAggregateArgs> = {
        [P in keyof T & keyof AggregateStockMovement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockMovement[P]>
      : GetScalarType<T[P], AggregateStockMovement[P]>
  }




  export type StockMovementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithAggregationInput | StockMovementOrderByWithAggregationInput[]
    by: StockMovementScalarFieldEnum[] | StockMovementScalarFieldEnum
    having?: StockMovementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockMovementCountAggregateInputType | true
    _avg?: StockMovementAvgAggregateInputType
    _sum?: StockMovementSumAggregateInputType
    _min?: StockMovementMinAggregateInputType
    _max?: StockMovementMaxAggregateInputType
  }

  export type StockMovementGroupByOutputType = {
    id: string
    data: Date
    itemId: string
    tipo: $Enums.MovementType
    quantidade: Decimal
    observacao: string
    createdAt: Date
    updatedAt: Date
    _count: StockMovementCountAggregateOutputType | null
    _avg: StockMovementAvgAggregateOutputType | null
    _sum: StockMovementSumAggregateOutputType | null
    _min: StockMovementMinAggregateOutputType | null
    _max: StockMovementMaxAggregateOutputType | null
  }

  type GetStockMovementGroupByPayload<T extends StockMovementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockMovementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockMovementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockMovementGroupByOutputType[P]>
            : GetScalarType<T[P], StockMovementGroupByOutputType[P]>
        }
      >
    >


  export type StockMovementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    itemId?: boolean
    tipo?: boolean
    quantidade?: boolean
    observacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    item?: boolean | InventoryItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockMovement"]>

  export type StockMovementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    itemId?: boolean
    tipo?: boolean
    quantidade?: boolean
    observacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    item?: boolean | InventoryItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockMovement"]>

  export type StockMovementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    itemId?: boolean
    tipo?: boolean
    quantidade?: boolean
    observacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    item?: boolean | InventoryItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockMovement"]>

  export type StockMovementSelectScalar = {
    id?: boolean
    data?: boolean
    itemId?: boolean
    tipo?: boolean
    quantidade?: boolean
    observacao?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StockMovementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "itemId" | "tipo" | "quantidade" | "observacao" | "createdAt" | "updatedAt", ExtArgs["result"]["stockMovement"]>
  export type StockMovementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | InventoryItemDefaultArgs<ExtArgs>
  }
  export type StockMovementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | InventoryItemDefaultArgs<ExtArgs>
  }
  export type StockMovementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | InventoryItemDefaultArgs<ExtArgs>
  }

  export type $StockMovementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockMovement"
    objects: {
      item: Prisma.$InventoryItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      data: Date
      itemId: string
      tipo: $Enums.MovementType
      quantidade: Prisma.Decimal
      observacao: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["stockMovement"]>
    composites: {}
  }

  type StockMovementGetPayload<S extends boolean | null | undefined | StockMovementDefaultArgs> = $Result.GetResult<Prisma.$StockMovementPayload, S>

  type StockMovementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockMovementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockMovementCountAggregateInputType | true
    }

  export interface StockMovementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockMovement'], meta: { name: 'StockMovement' } }
    /**
     * Find zero or one StockMovement that matches the filter.
     * @param {StockMovementFindUniqueArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockMovementFindUniqueArgs>(args: SelectSubset<T, StockMovementFindUniqueArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockMovement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockMovementFindUniqueOrThrowArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockMovementFindUniqueOrThrowArgs>(args: SelectSubset<T, StockMovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockMovement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindFirstArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockMovementFindFirstArgs>(args?: SelectSubset<T, StockMovementFindFirstArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockMovement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindFirstOrThrowArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockMovementFindFirstOrThrowArgs>(args?: SelectSubset<T, StockMovementFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockMovements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockMovements
     * const stockMovements = await prisma.stockMovement.findMany()
     * 
     * // Get first 10 StockMovements
     * const stockMovements = await prisma.stockMovement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockMovementWithIdOnly = await prisma.stockMovement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockMovementFindManyArgs>(args?: SelectSubset<T, StockMovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockMovement.
     * @param {StockMovementCreateArgs} args - Arguments to create a StockMovement.
     * @example
     * // Create one StockMovement
     * const StockMovement = await prisma.stockMovement.create({
     *   data: {
     *     // ... data to create a StockMovement
     *   }
     * })
     * 
     */
    create<T extends StockMovementCreateArgs>(args: SelectSubset<T, StockMovementCreateArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockMovements.
     * @param {StockMovementCreateManyArgs} args - Arguments to create many StockMovements.
     * @example
     * // Create many StockMovements
     * const stockMovement = await prisma.stockMovement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockMovementCreateManyArgs>(args?: SelectSubset<T, StockMovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockMovements and returns the data saved in the database.
     * @param {StockMovementCreateManyAndReturnArgs} args - Arguments to create many StockMovements.
     * @example
     * // Create many StockMovements
     * const stockMovement = await prisma.stockMovement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockMovements and only return the `id`
     * const stockMovementWithIdOnly = await prisma.stockMovement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockMovementCreateManyAndReturnArgs>(args?: SelectSubset<T, StockMovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StockMovement.
     * @param {StockMovementDeleteArgs} args - Arguments to delete one StockMovement.
     * @example
     * // Delete one StockMovement
     * const StockMovement = await prisma.stockMovement.delete({
     *   where: {
     *     // ... filter to delete one StockMovement
     *   }
     * })
     * 
     */
    delete<T extends StockMovementDeleteArgs>(args: SelectSubset<T, StockMovementDeleteArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockMovement.
     * @param {StockMovementUpdateArgs} args - Arguments to update one StockMovement.
     * @example
     * // Update one StockMovement
     * const stockMovement = await prisma.stockMovement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockMovementUpdateArgs>(args: SelectSubset<T, StockMovementUpdateArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockMovements.
     * @param {StockMovementDeleteManyArgs} args - Arguments to filter StockMovements to delete.
     * @example
     * // Delete a few StockMovements
     * const { count } = await prisma.stockMovement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockMovementDeleteManyArgs>(args?: SelectSubset<T, StockMovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockMovements
     * const stockMovement = await prisma.stockMovement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockMovementUpdateManyArgs>(args: SelectSubset<T, StockMovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockMovements and returns the data updated in the database.
     * @param {StockMovementUpdateManyAndReturnArgs} args - Arguments to update many StockMovements.
     * @example
     * // Update many StockMovements
     * const stockMovement = await prisma.stockMovement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StockMovements and only return the `id`
     * const stockMovementWithIdOnly = await prisma.stockMovement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StockMovementUpdateManyAndReturnArgs>(args: SelectSubset<T, StockMovementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StockMovement.
     * @param {StockMovementUpsertArgs} args - Arguments to update or create a StockMovement.
     * @example
     * // Update or create a StockMovement
     * const stockMovement = await prisma.stockMovement.upsert({
     *   create: {
     *     // ... data to create a StockMovement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockMovement we want to update
     *   }
     * })
     */
    upsert<T extends StockMovementUpsertArgs>(args: SelectSubset<T, StockMovementUpsertArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StockMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementCountArgs} args - Arguments to filter StockMovements to count.
     * @example
     * // Count the number of StockMovements
     * const count = await prisma.stockMovement.count({
     *   where: {
     *     // ... the filter for the StockMovements we want to count
     *   }
     * })
    **/
    count<T extends StockMovementCountArgs>(
      args?: Subset<T, StockMovementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockMovementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockMovementAggregateArgs>(args: Subset<T, StockMovementAggregateArgs>): Prisma.PrismaPromise<GetStockMovementAggregateType<T>>

    /**
     * Group by StockMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementGroupByArgs} args - Group by arguments.
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
      T extends StockMovementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockMovementGroupByArgs['orderBy'] }
        : { orderBy?: StockMovementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockMovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockMovement model
   */
  readonly fields: StockMovementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockMovement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockMovementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends InventoryItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventoryItemDefaultArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StockMovement model
   */
  interface StockMovementFieldRefs {
    readonly id: FieldRef<"StockMovement", 'String'>
    readonly data: FieldRef<"StockMovement", 'DateTime'>
    readonly itemId: FieldRef<"StockMovement", 'String'>
    readonly tipo: FieldRef<"StockMovement", 'MovementType'>
    readonly quantidade: FieldRef<"StockMovement", 'Decimal'>
    readonly observacao: FieldRef<"StockMovement", 'String'>
    readonly createdAt: FieldRef<"StockMovement", 'DateTime'>
    readonly updatedAt: FieldRef<"StockMovement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StockMovement findUnique
   */
  export type StockMovementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement findUniqueOrThrow
   */
  export type StockMovementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement findFirst
   */
  export type StockMovementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMovements.
     */
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement findFirstOrThrow
   */
  export type StockMovementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMovements.
     */
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement findMany
   */
  export type StockMovementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovements to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement create
   */
  export type StockMovementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The data needed to create a StockMovement.
     */
    data: XOR<StockMovementCreateInput, StockMovementUncheckedCreateInput>
  }

  /**
   * StockMovement createMany
   */
  export type StockMovementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockMovements.
     */
    data: StockMovementCreateManyInput | StockMovementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockMovement createManyAndReturn
   */
  export type StockMovementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * The data used to create many StockMovements.
     */
    data: StockMovementCreateManyInput | StockMovementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockMovement update
   */
  export type StockMovementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The data needed to update a StockMovement.
     */
    data: XOR<StockMovementUpdateInput, StockMovementUncheckedUpdateInput>
    /**
     * Choose, which StockMovement to update.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement updateMany
   */
  export type StockMovementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockMovements.
     */
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyInput>
    /**
     * Filter which StockMovements to update
     */
    where?: StockMovementWhereInput
    /**
     * Limit how many StockMovements to update.
     */
    limit?: number
  }

  /**
   * StockMovement updateManyAndReturn
   */
  export type StockMovementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * The data used to update StockMovements.
     */
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyInput>
    /**
     * Filter which StockMovements to update
     */
    where?: StockMovementWhereInput
    /**
     * Limit how many StockMovements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockMovement upsert
   */
  export type StockMovementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The filter to search for the StockMovement to update in case it exists.
     */
    where: StockMovementWhereUniqueInput
    /**
     * In case the StockMovement found by the `where` argument doesn't exist, create a new StockMovement with this data.
     */
    create: XOR<StockMovementCreateInput, StockMovementUncheckedCreateInput>
    /**
     * In case the StockMovement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockMovementUpdateInput, StockMovementUncheckedUpdateInput>
  }

  /**
   * StockMovement delete
   */
  export type StockMovementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter which StockMovement to delete.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement deleteMany
   */
  export type StockMovementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockMovements to delete
     */
    where?: StockMovementWhereInput
    /**
     * Limit how many StockMovements to delete.
     */
    limit?: number
  }

  /**
   * StockMovement without action
   */
  export type StockMovementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
  }


  /**
   * Model AccountEntry
   */

  export type AggregateAccountEntry = {
    _count: AccountEntryCountAggregateOutputType | null
    _avg: AccountEntryAvgAggregateOutputType | null
    _sum: AccountEntrySumAggregateOutputType | null
    _min: AccountEntryMinAggregateOutputType | null
    _max: AccountEntryMaxAggregateOutputType | null
  }

  export type AccountEntryAvgAggregateOutputType = {
    valor: Decimal | null
  }

  export type AccountEntrySumAggregateOutputType = {
    valor: Decimal | null
  }

  export type AccountEntryMinAggregateOutputType = {
    id: string | null
    descricao: string | null
    tipo: $Enums.AccountType | null
    parceiro: string | null
    vencimento: Date | null
    valor: Decimal | null
    status: $Enums.AccountStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountEntryMaxAggregateOutputType = {
    id: string | null
    descricao: string | null
    tipo: $Enums.AccountType | null
    parceiro: string | null
    vencimento: Date | null
    valor: Decimal | null
    status: $Enums.AccountStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountEntryCountAggregateOutputType = {
    id: number
    descricao: number
    tipo: number
    parceiro: number
    vencimento: number
    valor: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountEntryAvgAggregateInputType = {
    valor?: true
  }

  export type AccountEntrySumAggregateInputType = {
    valor?: true
  }

  export type AccountEntryMinAggregateInputType = {
    id?: true
    descricao?: true
    tipo?: true
    parceiro?: true
    vencimento?: true
    valor?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountEntryMaxAggregateInputType = {
    id?: true
    descricao?: true
    tipo?: true
    parceiro?: true
    vencimento?: true
    valor?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountEntryCountAggregateInputType = {
    id?: true
    descricao?: true
    tipo?: true
    parceiro?: true
    vencimento?: true
    valor?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountEntry to aggregate.
     */
    where?: AccountEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountEntries to fetch.
     */
    orderBy?: AccountEntryOrderByWithRelationInput | AccountEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountEntries
    **/
    _count?: true | AccountEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountEntryMaxAggregateInputType
  }

  export type GetAccountEntryAggregateType<T extends AccountEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountEntry[P]>
      : GetScalarType<T[P], AggregateAccountEntry[P]>
  }




  export type AccountEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountEntryWhereInput
    orderBy?: AccountEntryOrderByWithAggregationInput | AccountEntryOrderByWithAggregationInput[]
    by: AccountEntryScalarFieldEnum[] | AccountEntryScalarFieldEnum
    having?: AccountEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountEntryCountAggregateInputType | true
    _avg?: AccountEntryAvgAggregateInputType
    _sum?: AccountEntrySumAggregateInputType
    _min?: AccountEntryMinAggregateInputType
    _max?: AccountEntryMaxAggregateInputType
  }

  export type AccountEntryGroupByOutputType = {
    id: string
    descricao: string
    tipo: $Enums.AccountType
    parceiro: string
    vencimento: Date
    valor: Decimal
    status: $Enums.AccountStatus
    createdAt: Date
    updatedAt: Date
    _count: AccountEntryCountAggregateOutputType | null
    _avg: AccountEntryAvgAggregateOutputType | null
    _sum: AccountEntrySumAggregateOutputType | null
    _min: AccountEntryMinAggregateOutputType | null
    _max: AccountEntryMaxAggregateOutputType | null
  }

  type GetAccountEntryGroupByPayload<T extends AccountEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountEntryGroupByOutputType[P]>
            : GetScalarType<T[P], AccountEntryGroupByOutputType[P]>
        }
      >
    >


  export type AccountEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    tipo?: boolean
    parceiro?: boolean
    vencimento?: boolean
    valor?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accountEntry"]>

  export type AccountEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    tipo?: boolean
    parceiro?: boolean
    vencimento?: boolean
    valor?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accountEntry"]>

  export type AccountEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    tipo?: boolean
    parceiro?: boolean
    vencimento?: boolean
    valor?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["accountEntry"]>

  export type AccountEntrySelectScalar = {
    id?: boolean
    descricao?: boolean
    tipo?: boolean
    parceiro?: boolean
    vencimento?: boolean
    valor?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "tipo" | "parceiro" | "vencimento" | "valor" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["accountEntry"]>

  export type $AccountEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountEntry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      descricao: string
      tipo: $Enums.AccountType
      parceiro: string
      vencimento: Date
      valor: Prisma.Decimal
      status: $Enums.AccountStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accountEntry"]>
    composites: {}
  }

  type AccountEntryGetPayload<S extends boolean | null | undefined | AccountEntryDefaultArgs> = $Result.GetResult<Prisma.$AccountEntryPayload, S>

  type AccountEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountEntryCountAggregateInputType | true
    }

  export interface AccountEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountEntry'], meta: { name: 'AccountEntry' } }
    /**
     * Find zero or one AccountEntry that matches the filter.
     * @param {AccountEntryFindUniqueArgs} args - Arguments to find a AccountEntry
     * @example
     * // Get one AccountEntry
     * const accountEntry = await prisma.accountEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountEntryFindUniqueArgs>(args: SelectSubset<T, AccountEntryFindUniqueArgs<ExtArgs>>): Prisma__AccountEntryClient<$Result.GetResult<Prisma.$AccountEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccountEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountEntryFindUniqueOrThrowArgs} args - Arguments to find a AccountEntry
     * @example
     * // Get one AccountEntry
     * const accountEntry = await prisma.accountEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountEntryClient<$Result.GetResult<Prisma.$AccountEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountEntryFindFirstArgs} args - Arguments to find a AccountEntry
     * @example
     * // Get one AccountEntry
     * const accountEntry = await prisma.accountEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountEntryFindFirstArgs>(args?: SelectSubset<T, AccountEntryFindFirstArgs<ExtArgs>>): Prisma__AccountEntryClient<$Result.GetResult<Prisma.$AccountEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountEntryFindFirstOrThrowArgs} args - Arguments to find a AccountEntry
     * @example
     * // Get one AccountEntry
     * const accountEntry = await prisma.accountEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountEntryClient<$Result.GetResult<Prisma.$AccountEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccountEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountEntries
     * const accountEntries = await prisma.accountEntry.findMany()
     * 
     * // Get first 10 AccountEntries
     * const accountEntries = await prisma.accountEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountEntryWithIdOnly = await prisma.accountEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountEntryFindManyArgs>(args?: SelectSubset<T, AccountEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccountEntry.
     * @param {AccountEntryCreateArgs} args - Arguments to create a AccountEntry.
     * @example
     * // Create one AccountEntry
     * const AccountEntry = await prisma.accountEntry.create({
     *   data: {
     *     // ... data to create a AccountEntry
     *   }
     * })
     * 
     */
    create<T extends AccountEntryCreateArgs>(args: SelectSubset<T, AccountEntryCreateArgs<ExtArgs>>): Prisma__AccountEntryClient<$Result.GetResult<Prisma.$AccountEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccountEntries.
     * @param {AccountEntryCreateManyArgs} args - Arguments to create many AccountEntries.
     * @example
     * // Create many AccountEntries
     * const accountEntry = await prisma.accountEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountEntryCreateManyArgs>(args?: SelectSubset<T, AccountEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccountEntries and returns the data saved in the database.
     * @param {AccountEntryCreateManyAndReturnArgs} args - Arguments to create many AccountEntries.
     * @example
     * // Create many AccountEntries
     * const accountEntry = await prisma.accountEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccountEntries and only return the `id`
     * const accountEntryWithIdOnly = await prisma.accountEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccountEntry.
     * @param {AccountEntryDeleteArgs} args - Arguments to delete one AccountEntry.
     * @example
     * // Delete one AccountEntry
     * const AccountEntry = await prisma.accountEntry.delete({
     *   where: {
     *     // ... filter to delete one AccountEntry
     *   }
     * })
     * 
     */
    delete<T extends AccountEntryDeleteArgs>(args: SelectSubset<T, AccountEntryDeleteArgs<ExtArgs>>): Prisma__AccountEntryClient<$Result.GetResult<Prisma.$AccountEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccountEntry.
     * @param {AccountEntryUpdateArgs} args - Arguments to update one AccountEntry.
     * @example
     * // Update one AccountEntry
     * const accountEntry = await prisma.accountEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountEntryUpdateArgs>(args: SelectSubset<T, AccountEntryUpdateArgs<ExtArgs>>): Prisma__AccountEntryClient<$Result.GetResult<Prisma.$AccountEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccountEntries.
     * @param {AccountEntryDeleteManyArgs} args - Arguments to filter AccountEntries to delete.
     * @example
     * // Delete a few AccountEntries
     * const { count } = await prisma.accountEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountEntryDeleteManyArgs>(args?: SelectSubset<T, AccountEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountEntries
     * const accountEntry = await prisma.accountEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountEntryUpdateManyArgs>(args: SelectSubset<T, AccountEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountEntries and returns the data updated in the database.
     * @param {AccountEntryUpdateManyAndReturnArgs} args - Arguments to update many AccountEntries.
     * @example
     * // Update many AccountEntries
     * const accountEntry = await prisma.accountEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccountEntries and only return the `id`
     * const accountEntryWithIdOnly = await prisma.accountEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccountEntry.
     * @param {AccountEntryUpsertArgs} args - Arguments to update or create a AccountEntry.
     * @example
     * // Update or create a AccountEntry
     * const accountEntry = await prisma.accountEntry.upsert({
     *   create: {
     *     // ... data to create a AccountEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountEntry we want to update
     *   }
     * })
     */
    upsert<T extends AccountEntryUpsertArgs>(args: SelectSubset<T, AccountEntryUpsertArgs<ExtArgs>>): Prisma__AccountEntryClient<$Result.GetResult<Prisma.$AccountEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccountEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountEntryCountArgs} args - Arguments to filter AccountEntries to count.
     * @example
     * // Count the number of AccountEntries
     * const count = await prisma.accountEntry.count({
     *   where: {
     *     // ... the filter for the AccountEntries we want to count
     *   }
     * })
    **/
    count<T extends AccountEntryCountArgs>(
      args?: Subset<T, AccountEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountEntryAggregateArgs>(args: Subset<T, AccountEntryAggregateArgs>): Prisma.PrismaPromise<GetAccountEntryAggregateType<T>>

    /**
     * Group by AccountEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountEntryGroupByArgs} args - Group by arguments.
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
      T extends AccountEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountEntryGroupByArgs['orderBy'] }
        : { orderBy?: AccountEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountEntry model
   */
  readonly fields: AccountEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccountEntry model
   */
  interface AccountEntryFieldRefs {
    readonly id: FieldRef<"AccountEntry", 'String'>
    readonly descricao: FieldRef<"AccountEntry", 'String'>
    readonly tipo: FieldRef<"AccountEntry", 'AccountType'>
    readonly parceiro: FieldRef<"AccountEntry", 'String'>
    readonly vencimento: FieldRef<"AccountEntry", 'DateTime'>
    readonly valor: FieldRef<"AccountEntry", 'Decimal'>
    readonly status: FieldRef<"AccountEntry", 'AccountStatus'>
    readonly createdAt: FieldRef<"AccountEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"AccountEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccountEntry findUnique
   */
  export type AccountEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountEntry
     */
    select?: AccountEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountEntry
     */
    omit?: AccountEntryOmit<ExtArgs> | null
    /**
     * Filter, which AccountEntry to fetch.
     */
    where: AccountEntryWhereUniqueInput
  }

  /**
   * AccountEntry findUniqueOrThrow
   */
  export type AccountEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountEntry
     */
    select?: AccountEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountEntry
     */
    omit?: AccountEntryOmit<ExtArgs> | null
    /**
     * Filter, which AccountEntry to fetch.
     */
    where: AccountEntryWhereUniqueInput
  }

  /**
   * AccountEntry findFirst
   */
  export type AccountEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountEntry
     */
    select?: AccountEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountEntry
     */
    omit?: AccountEntryOmit<ExtArgs> | null
    /**
     * Filter, which AccountEntry to fetch.
     */
    where?: AccountEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountEntries to fetch.
     */
    orderBy?: AccountEntryOrderByWithRelationInput | AccountEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountEntries.
     */
    cursor?: AccountEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountEntries.
     */
    distinct?: AccountEntryScalarFieldEnum | AccountEntryScalarFieldEnum[]
  }

  /**
   * AccountEntry findFirstOrThrow
   */
  export type AccountEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountEntry
     */
    select?: AccountEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountEntry
     */
    omit?: AccountEntryOmit<ExtArgs> | null
    /**
     * Filter, which AccountEntry to fetch.
     */
    where?: AccountEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountEntries to fetch.
     */
    orderBy?: AccountEntryOrderByWithRelationInput | AccountEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountEntries.
     */
    cursor?: AccountEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountEntries.
     */
    distinct?: AccountEntryScalarFieldEnum | AccountEntryScalarFieldEnum[]
  }

  /**
   * AccountEntry findMany
   */
  export type AccountEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountEntry
     */
    select?: AccountEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountEntry
     */
    omit?: AccountEntryOmit<ExtArgs> | null
    /**
     * Filter, which AccountEntries to fetch.
     */
    where?: AccountEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountEntries to fetch.
     */
    orderBy?: AccountEntryOrderByWithRelationInput | AccountEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountEntries.
     */
    cursor?: AccountEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountEntries.
     */
    skip?: number
    distinct?: AccountEntryScalarFieldEnum | AccountEntryScalarFieldEnum[]
  }

  /**
   * AccountEntry create
   */
  export type AccountEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountEntry
     */
    select?: AccountEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountEntry
     */
    omit?: AccountEntryOmit<ExtArgs> | null
    /**
     * The data needed to create a AccountEntry.
     */
    data: XOR<AccountEntryCreateInput, AccountEntryUncheckedCreateInput>
  }

  /**
   * AccountEntry createMany
   */
  export type AccountEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountEntries.
     */
    data: AccountEntryCreateManyInput | AccountEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountEntry createManyAndReturn
   */
  export type AccountEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountEntry
     */
    select?: AccountEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountEntry
     */
    omit?: AccountEntryOmit<ExtArgs> | null
    /**
     * The data used to create many AccountEntries.
     */
    data: AccountEntryCreateManyInput | AccountEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountEntry update
   */
  export type AccountEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountEntry
     */
    select?: AccountEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountEntry
     */
    omit?: AccountEntryOmit<ExtArgs> | null
    /**
     * The data needed to update a AccountEntry.
     */
    data: XOR<AccountEntryUpdateInput, AccountEntryUncheckedUpdateInput>
    /**
     * Choose, which AccountEntry to update.
     */
    where: AccountEntryWhereUniqueInput
  }

  /**
   * AccountEntry updateMany
   */
  export type AccountEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountEntries.
     */
    data: XOR<AccountEntryUpdateManyMutationInput, AccountEntryUncheckedUpdateManyInput>
    /**
     * Filter which AccountEntries to update
     */
    where?: AccountEntryWhereInput
    /**
     * Limit how many AccountEntries to update.
     */
    limit?: number
  }

  /**
   * AccountEntry updateManyAndReturn
   */
  export type AccountEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountEntry
     */
    select?: AccountEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountEntry
     */
    omit?: AccountEntryOmit<ExtArgs> | null
    /**
     * The data used to update AccountEntries.
     */
    data: XOR<AccountEntryUpdateManyMutationInput, AccountEntryUncheckedUpdateManyInput>
    /**
     * Filter which AccountEntries to update
     */
    where?: AccountEntryWhereInput
    /**
     * Limit how many AccountEntries to update.
     */
    limit?: number
  }

  /**
   * AccountEntry upsert
   */
  export type AccountEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountEntry
     */
    select?: AccountEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountEntry
     */
    omit?: AccountEntryOmit<ExtArgs> | null
    /**
     * The filter to search for the AccountEntry to update in case it exists.
     */
    where: AccountEntryWhereUniqueInput
    /**
     * In case the AccountEntry found by the `where` argument doesn't exist, create a new AccountEntry with this data.
     */
    create: XOR<AccountEntryCreateInput, AccountEntryUncheckedCreateInput>
    /**
     * In case the AccountEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountEntryUpdateInput, AccountEntryUncheckedUpdateInput>
  }

  /**
   * AccountEntry delete
   */
  export type AccountEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountEntry
     */
    select?: AccountEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountEntry
     */
    omit?: AccountEntryOmit<ExtArgs> | null
    /**
     * Filter which AccountEntry to delete.
     */
    where: AccountEntryWhereUniqueInput
  }

  /**
   * AccountEntry deleteMany
   */
  export type AccountEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountEntries to delete
     */
    where?: AccountEntryWhereInput
    /**
     * Limit how many AccountEntries to delete.
     */
    limit?: number
  }

  /**
   * AccountEntry without action
   */
  export type AccountEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountEntry
     */
    select?: AccountEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountEntry
     */
    omit?: AccountEntryOmit<ExtArgs> | null
  }


  /**
   * Model CashFlowEntry
   */

  export type AggregateCashFlowEntry = {
    _count: CashFlowEntryCountAggregateOutputType | null
    _avg: CashFlowEntryAvgAggregateOutputType | null
    _sum: CashFlowEntrySumAggregateOutputType | null
    _min: CashFlowEntryMinAggregateOutputType | null
    _max: CashFlowEntryMaxAggregateOutputType | null
  }

  export type CashFlowEntryAvgAggregateOutputType = {
    valor: Decimal | null
  }

  export type CashFlowEntrySumAggregateOutputType = {
    valor: Decimal | null
  }

  export type CashFlowEntryMinAggregateOutputType = {
    id: string | null
    data: Date | null
    tipo: $Enums.MovementType | null
    categoria: $Enums.CashFlowCategory | null
    descricao: string | null
    valor: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CashFlowEntryMaxAggregateOutputType = {
    id: string | null
    data: Date | null
    tipo: $Enums.MovementType | null
    categoria: $Enums.CashFlowCategory | null
    descricao: string | null
    valor: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CashFlowEntryCountAggregateOutputType = {
    id: number
    data: number
    tipo: number
    categoria: number
    descricao: number
    valor: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CashFlowEntryAvgAggregateInputType = {
    valor?: true
  }

  export type CashFlowEntrySumAggregateInputType = {
    valor?: true
  }

  export type CashFlowEntryMinAggregateInputType = {
    id?: true
    data?: true
    tipo?: true
    categoria?: true
    descricao?: true
    valor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CashFlowEntryMaxAggregateInputType = {
    id?: true
    data?: true
    tipo?: true
    categoria?: true
    descricao?: true
    valor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CashFlowEntryCountAggregateInputType = {
    id?: true
    data?: true
    tipo?: true
    categoria?: true
    descricao?: true
    valor?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CashFlowEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashFlowEntry to aggregate.
     */
    where?: CashFlowEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashFlowEntries to fetch.
     */
    orderBy?: CashFlowEntryOrderByWithRelationInput | CashFlowEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CashFlowEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashFlowEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashFlowEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CashFlowEntries
    **/
    _count?: true | CashFlowEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CashFlowEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CashFlowEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CashFlowEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CashFlowEntryMaxAggregateInputType
  }

  export type GetCashFlowEntryAggregateType<T extends CashFlowEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateCashFlowEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCashFlowEntry[P]>
      : GetScalarType<T[P], AggregateCashFlowEntry[P]>
  }




  export type CashFlowEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashFlowEntryWhereInput
    orderBy?: CashFlowEntryOrderByWithAggregationInput | CashFlowEntryOrderByWithAggregationInput[]
    by: CashFlowEntryScalarFieldEnum[] | CashFlowEntryScalarFieldEnum
    having?: CashFlowEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CashFlowEntryCountAggregateInputType | true
    _avg?: CashFlowEntryAvgAggregateInputType
    _sum?: CashFlowEntrySumAggregateInputType
    _min?: CashFlowEntryMinAggregateInputType
    _max?: CashFlowEntryMaxAggregateInputType
  }

  export type CashFlowEntryGroupByOutputType = {
    id: string
    data: Date
    tipo: $Enums.MovementType
    categoria: $Enums.CashFlowCategory
    descricao: string
    valor: Decimal
    createdAt: Date
    updatedAt: Date
    _count: CashFlowEntryCountAggregateOutputType | null
    _avg: CashFlowEntryAvgAggregateOutputType | null
    _sum: CashFlowEntrySumAggregateOutputType | null
    _min: CashFlowEntryMinAggregateOutputType | null
    _max: CashFlowEntryMaxAggregateOutputType | null
  }

  type GetCashFlowEntryGroupByPayload<T extends CashFlowEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CashFlowEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CashFlowEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CashFlowEntryGroupByOutputType[P]>
            : GetScalarType<T[P], CashFlowEntryGroupByOutputType[P]>
        }
      >
    >


  export type CashFlowEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    tipo?: boolean
    categoria?: boolean
    descricao?: boolean
    valor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cashFlowEntry"]>

  export type CashFlowEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    tipo?: boolean
    categoria?: boolean
    descricao?: boolean
    valor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cashFlowEntry"]>

  export type CashFlowEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    tipo?: boolean
    categoria?: boolean
    descricao?: boolean
    valor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cashFlowEntry"]>

  export type CashFlowEntrySelectScalar = {
    id?: boolean
    data?: boolean
    tipo?: boolean
    categoria?: boolean
    descricao?: boolean
    valor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CashFlowEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "tipo" | "categoria" | "descricao" | "valor" | "createdAt" | "updatedAt", ExtArgs["result"]["cashFlowEntry"]>

  export type $CashFlowEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CashFlowEntry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      data: Date
      tipo: $Enums.MovementType
      categoria: $Enums.CashFlowCategory
      descricao: string
      valor: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cashFlowEntry"]>
    composites: {}
  }

  type CashFlowEntryGetPayload<S extends boolean | null | undefined | CashFlowEntryDefaultArgs> = $Result.GetResult<Prisma.$CashFlowEntryPayload, S>

  type CashFlowEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CashFlowEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CashFlowEntryCountAggregateInputType | true
    }

  export interface CashFlowEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CashFlowEntry'], meta: { name: 'CashFlowEntry' } }
    /**
     * Find zero or one CashFlowEntry that matches the filter.
     * @param {CashFlowEntryFindUniqueArgs} args - Arguments to find a CashFlowEntry
     * @example
     * // Get one CashFlowEntry
     * const cashFlowEntry = await prisma.cashFlowEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CashFlowEntryFindUniqueArgs>(args: SelectSubset<T, CashFlowEntryFindUniqueArgs<ExtArgs>>): Prisma__CashFlowEntryClient<$Result.GetResult<Prisma.$CashFlowEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CashFlowEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CashFlowEntryFindUniqueOrThrowArgs} args - Arguments to find a CashFlowEntry
     * @example
     * // Get one CashFlowEntry
     * const cashFlowEntry = await prisma.cashFlowEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CashFlowEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, CashFlowEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CashFlowEntryClient<$Result.GetResult<Prisma.$CashFlowEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CashFlowEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashFlowEntryFindFirstArgs} args - Arguments to find a CashFlowEntry
     * @example
     * // Get one CashFlowEntry
     * const cashFlowEntry = await prisma.cashFlowEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CashFlowEntryFindFirstArgs>(args?: SelectSubset<T, CashFlowEntryFindFirstArgs<ExtArgs>>): Prisma__CashFlowEntryClient<$Result.GetResult<Prisma.$CashFlowEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CashFlowEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashFlowEntryFindFirstOrThrowArgs} args - Arguments to find a CashFlowEntry
     * @example
     * // Get one CashFlowEntry
     * const cashFlowEntry = await prisma.cashFlowEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CashFlowEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, CashFlowEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CashFlowEntryClient<$Result.GetResult<Prisma.$CashFlowEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CashFlowEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashFlowEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CashFlowEntries
     * const cashFlowEntries = await prisma.cashFlowEntry.findMany()
     * 
     * // Get first 10 CashFlowEntries
     * const cashFlowEntries = await prisma.cashFlowEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cashFlowEntryWithIdOnly = await prisma.cashFlowEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CashFlowEntryFindManyArgs>(args?: SelectSubset<T, CashFlowEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashFlowEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CashFlowEntry.
     * @param {CashFlowEntryCreateArgs} args - Arguments to create a CashFlowEntry.
     * @example
     * // Create one CashFlowEntry
     * const CashFlowEntry = await prisma.cashFlowEntry.create({
     *   data: {
     *     // ... data to create a CashFlowEntry
     *   }
     * })
     * 
     */
    create<T extends CashFlowEntryCreateArgs>(args: SelectSubset<T, CashFlowEntryCreateArgs<ExtArgs>>): Prisma__CashFlowEntryClient<$Result.GetResult<Prisma.$CashFlowEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CashFlowEntries.
     * @param {CashFlowEntryCreateManyArgs} args - Arguments to create many CashFlowEntries.
     * @example
     * // Create many CashFlowEntries
     * const cashFlowEntry = await prisma.cashFlowEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CashFlowEntryCreateManyArgs>(args?: SelectSubset<T, CashFlowEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CashFlowEntries and returns the data saved in the database.
     * @param {CashFlowEntryCreateManyAndReturnArgs} args - Arguments to create many CashFlowEntries.
     * @example
     * // Create many CashFlowEntries
     * const cashFlowEntry = await prisma.cashFlowEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CashFlowEntries and only return the `id`
     * const cashFlowEntryWithIdOnly = await prisma.cashFlowEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CashFlowEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, CashFlowEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashFlowEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CashFlowEntry.
     * @param {CashFlowEntryDeleteArgs} args - Arguments to delete one CashFlowEntry.
     * @example
     * // Delete one CashFlowEntry
     * const CashFlowEntry = await prisma.cashFlowEntry.delete({
     *   where: {
     *     // ... filter to delete one CashFlowEntry
     *   }
     * })
     * 
     */
    delete<T extends CashFlowEntryDeleteArgs>(args: SelectSubset<T, CashFlowEntryDeleteArgs<ExtArgs>>): Prisma__CashFlowEntryClient<$Result.GetResult<Prisma.$CashFlowEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CashFlowEntry.
     * @param {CashFlowEntryUpdateArgs} args - Arguments to update one CashFlowEntry.
     * @example
     * // Update one CashFlowEntry
     * const cashFlowEntry = await prisma.cashFlowEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CashFlowEntryUpdateArgs>(args: SelectSubset<T, CashFlowEntryUpdateArgs<ExtArgs>>): Prisma__CashFlowEntryClient<$Result.GetResult<Prisma.$CashFlowEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CashFlowEntries.
     * @param {CashFlowEntryDeleteManyArgs} args - Arguments to filter CashFlowEntries to delete.
     * @example
     * // Delete a few CashFlowEntries
     * const { count } = await prisma.cashFlowEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CashFlowEntryDeleteManyArgs>(args?: SelectSubset<T, CashFlowEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CashFlowEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashFlowEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CashFlowEntries
     * const cashFlowEntry = await prisma.cashFlowEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CashFlowEntryUpdateManyArgs>(args: SelectSubset<T, CashFlowEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CashFlowEntries and returns the data updated in the database.
     * @param {CashFlowEntryUpdateManyAndReturnArgs} args - Arguments to update many CashFlowEntries.
     * @example
     * // Update many CashFlowEntries
     * const cashFlowEntry = await prisma.cashFlowEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CashFlowEntries and only return the `id`
     * const cashFlowEntryWithIdOnly = await prisma.cashFlowEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CashFlowEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, CashFlowEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashFlowEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CashFlowEntry.
     * @param {CashFlowEntryUpsertArgs} args - Arguments to update or create a CashFlowEntry.
     * @example
     * // Update or create a CashFlowEntry
     * const cashFlowEntry = await prisma.cashFlowEntry.upsert({
     *   create: {
     *     // ... data to create a CashFlowEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CashFlowEntry we want to update
     *   }
     * })
     */
    upsert<T extends CashFlowEntryUpsertArgs>(args: SelectSubset<T, CashFlowEntryUpsertArgs<ExtArgs>>): Prisma__CashFlowEntryClient<$Result.GetResult<Prisma.$CashFlowEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CashFlowEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashFlowEntryCountArgs} args - Arguments to filter CashFlowEntries to count.
     * @example
     * // Count the number of CashFlowEntries
     * const count = await prisma.cashFlowEntry.count({
     *   where: {
     *     // ... the filter for the CashFlowEntries we want to count
     *   }
     * })
    **/
    count<T extends CashFlowEntryCountArgs>(
      args?: Subset<T, CashFlowEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CashFlowEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CashFlowEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashFlowEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CashFlowEntryAggregateArgs>(args: Subset<T, CashFlowEntryAggregateArgs>): Prisma.PrismaPromise<GetCashFlowEntryAggregateType<T>>

    /**
     * Group by CashFlowEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashFlowEntryGroupByArgs} args - Group by arguments.
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
      T extends CashFlowEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CashFlowEntryGroupByArgs['orderBy'] }
        : { orderBy?: CashFlowEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CashFlowEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCashFlowEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CashFlowEntry model
   */
  readonly fields: CashFlowEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CashFlowEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CashFlowEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CashFlowEntry model
   */
  interface CashFlowEntryFieldRefs {
    readonly id: FieldRef<"CashFlowEntry", 'String'>
    readonly data: FieldRef<"CashFlowEntry", 'DateTime'>
    readonly tipo: FieldRef<"CashFlowEntry", 'MovementType'>
    readonly categoria: FieldRef<"CashFlowEntry", 'CashFlowCategory'>
    readonly descricao: FieldRef<"CashFlowEntry", 'String'>
    readonly valor: FieldRef<"CashFlowEntry", 'Decimal'>
    readonly createdAt: FieldRef<"CashFlowEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"CashFlowEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CashFlowEntry findUnique
   */
  export type CashFlowEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlowEntry
     */
    select?: CashFlowEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlowEntry
     */
    omit?: CashFlowEntryOmit<ExtArgs> | null
    /**
     * Filter, which CashFlowEntry to fetch.
     */
    where: CashFlowEntryWhereUniqueInput
  }

  /**
   * CashFlowEntry findUniqueOrThrow
   */
  export type CashFlowEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlowEntry
     */
    select?: CashFlowEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlowEntry
     */
    omit?: CashFlowEntryOmit<ExtArgs> | null
    /**
     * Filter, which CashFlowEntry to fetch.
     */
    where: CashFlowEntryWhereUniqueInput
  }

  /**
   * CashFlowEntry findFirst
   */
  export type CashFlowEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlowEntry
     */
    select?: CashFlowEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlowEntry
     */
    omit?: CashFlowEntryOmit<ExtArgs> | null
    /**
     * Filter, which CashFlowEntry to fetch.
     */
    where?: CashFlowEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashFlowEntries to fetch.
     */
    orderBy?: CashFlowEntryOrderByWithRelationInput | CashFlowEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashFlowEntries.
     */
    cursor?: CashFlowEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashFlowEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashFlowEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashFlowEntries.
     */
    distinct?: CashFlowEntryScalarFieldEnum | CashFlowEntryScalarFieldEnum[]
  }

  /**
   * CashFlowEntry findFirstOrThrow
   */
  export type CashFlowEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlowEntry
     */
    select?: CashFlowEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlowEntry
     */
    omit?: CashFlowEntryOmit<ExtArgs> | null
    /**
     * Filter, which CashFlowEntry to fetch.
     */
    where?: CashFlowEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashFlowEntries to fetch.
     */
    orderBy?: CashFlowEntryOrderByWithRelationInput | CashFlowEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashFlowEntries.
     */
    cursor?: CashFlowEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashFlowEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashFlowEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashFlowEntries.
     */
    distinct?: CashFlowEntryScalarFieldEnum | CashFlowEntryScalarFieldEnum[]
  }

  /**
   * CashFlowEntry findMany
   */
  export type CashFlowEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlowEntry
     */
    select?: CashFlowEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlowEntry
     */
    omit?: CashFlowEntryOmit<ExtArgs> | null
    /**
     * Filter, which CashFlowEntries to fetch.
     */
    where?: CashFlowEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashFlowEntries to fetch.
     */
    orderBy?: CashFlowEntryOrderByWithRelationInput | CashFlowEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CashFlowEntries.
     */
    cursor?: CashFlowEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashFlowEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashFlowEntries.
     */
    skip?: number
    distinct?: CashFlowEntryScalarFieldEnum | CashFlowEntryScalarFieldEnum[]
  }

  /**
   * CashFlowEntry create
   */
  export type CashFlowEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlowEntry
     */
    select?: CashFlowEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlowEntry
     */
    omit?: CashFlowEntryOmit<ExtArgs> | null
    /**
     * The data needed to create a CashFlowEntry.
     */
    data: XOR<CashFlowEntryCreateInput, CashFlowEntryUncheckedCreateInput>
  }

  /**
   * CashFlowEntry createMany
   */
  export type CashFlowEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CashFlowEntries.
     */
    data: CashFlowEntryCreateManyInput | CashFlowEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CashFlowEntry createManyAndReturn
   */
  export type CashFlowEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlowEntry
     */
    select?: CashFlowEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlowEntry
     */
    omit?: CashFlowEntryOmit<ExtArgs> | null
    /**
     * The data used to create many CashFlowEntries.
     */
    data: CashFlowEntryCreateManyInput | CashFlowEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CashFlowEntry update
   */
  export type CashFlowEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlowEntry
     */
    select?: CashFlowEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlowEntry
     */
    omit?: CashFlowEntryOmit<ExtArgs> | null
    /**
     * The data needed to update a CashFlowEntry.
     */
    data: XOR<CashFlowEntryUpdateInput, CashFlowEntryUncheckedUpdateInput>
    /**
     * Choose, which CashFlowEntry to update.
     */
    where: CashFlowEntryWhereUniqueInput
  }

  /**
   * CashFlowEntry updateMany
   */
  export type CashFlowEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CashFlowEntries.
     */
    data: XOR<CashFlowEntryUpdateManyMutationInput, CashFlowEntryUncheckedUpdateManyInput>
    /**
     * Filter which CashFlowEntries to update
     */
    where?: CashFlowEntryWhereInput
    /**
     * Limit how many CashFlowEntries to update.
     */
    limit?: number
  }

  /**
   * CashFlowEntry updateManyAndReturn
   */
  export type CashFlowEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlowEntry
     */
    select?: CashFlowEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlowEntry
     */
    omit?: CashFlowEntryOmit<ExtArgs> | null
    /**
     * The data used to update CashFlowEntries.
     */
    data: XOR<CashFlowEntryUpdateManyMutationInput, CashFlowEntryUncheckedUpdateManyInput>
    /**
     * Filter which CashFlowEntries to update
     */
    where?: CashFlowEntryWhereInput
    /**
     * Limit how many CashFlowEntries to update.
     */
    limit?: number
  }

  /**
   * CashFlowEntry upsert
   */
  export type CashFlowEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlowEntry
     */
    select?: CashFlowEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlowEntry
     */
    omit?: CashFlowEntryOmit<ExtArgs> | null
    /**
     * The filter to search for the CashFlowEntry to update in case it exists.
     */
    where: CashFlowEntryWhereUniqueInput
    /**
     * In case the CashFlowEntry found by the `where` argument doesn't exist, create a new CashFlowEntry with this data.
     */
    create: XOR<CashFlowEntryCreateInput, CashFlowEntryUncheckedCreateInput>
    /**
     * In case the CashFlowEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CashFlowEntryUpdateInput, CashFlowEntryUncheckedUpdateInput>
  }

  /**
   * CashFlowEntry delete
   */
  export type CashFlowEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlowEntry
     */
    select?: CashFlowEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlowEntry
     */
    omit?: CashFlowEntryOmit<ExtArgs> | null
    /**
     * Filter which CashFlowEntry to delete.
     */
    where: CashFlowEntryWhereUniqueInput
  }

  /**
   * CashFlowEntry deleteMany
   */
  export type CashFlowEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashFlowEntries to delete
     */
    where?: CashFlowEntryWhereInput
    /**
     * Limit how many CashFlowEntries to delete.
     */
    limit?: number
  }

  /**
   * CashFlowEntry without action
   */
  export type CashFlowEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashFlowEntry
     */
    select?: CashFlowEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CashFlowEntry
     */
    omit?: CashFlowEntryOmit<ExtArgs> | null
  }


  /**
   * Model TeamMember
   */

  export type AggregateTeamMember = {
    _count: TeamMemberCountAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  export type TeamMemberMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    cargo: string | null
    role: $Enums.TeamUserRole | null
    status: $Enums.TeamUserStatus | null
    passwordHash: string | null
    observacoes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMemberMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    cargo: string | null
    role: $Enums.TeamUserRole | null
    status: $Enums.TeamUserStatus | null
    passwordHash: string | null
    observacoes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMemberCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    telefone: number
    cargo: number
    role: number
    status: number
    passwordHash: number
    observacoes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamMemberMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    cargo?: true
    role?: true
    status?: true
    passwordHash?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMemberMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    cargo?: true
    role?: true
    status?: true
    passwordHash?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMemberCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    cargo?: true
    role?: true
    status?: true
    passwordHash?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMember to aggregate.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamMembers
    **/
    _count?: true | TeamMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMemberMaxAggregateInputType
  }

  export type GetTeamMemberAggregateType<T extends TeamMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamMember[P]>
      : GetScalarType<T[P], AggregateTeamMember[P]>
  }




  export type TeamMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithAggregationInput | TeamMemberOrderByWithAggregationInput[]
    by: TeamMemberScalarFieldEnum[] | TeamMemberScalarFieldEnum
    having?: TeamMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamMemberCountAggregateInputType | true
    _min?: TeamMemberMinAggregateInputType
    _max?: TeamMemberMaxAggregateInputType
  }

  export type TeamMemberGroupByOutputType = {
    id: string
    nome: string
    email: string
    telefone: string | null
    cargo: string
    role: $Enums.TeamUserRole
    status: $Enums.TeamUserStatus
    passwordHash: string | null
    observacoes: string | null
    createdAt: Date
    updatedAt: Date
    _count: TeamMemberCountAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  type GetTeamMemberGroupByPayload<T extends TeamMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
            : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
        }
      >
    >


  export type TeamMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    cargo?: boolean
    role?: boolean
    status?: boolean
    passwordHash?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    cargo?: boolean
    role?: boolean
    status?: boolean
    passwordHash?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    cargo?: boolean
    role?: boolean
    status?: boolean
    passwordHash?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    cargo?: boolean
    role?: boolean
    status?: boolean
    passwordHash?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "cargo" | "role" | "status" | "passwordHash" | "observacoes" | "createdAt" | "updatedAt", ExtArgs["result"]["teamMember"]>

  export type $TeamMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamMember"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      telefone: string | null
      cargo: string
      role: $Enums.TeamUserRole
      status: $Enums.TeamUserStatus
      passwordHash: string | null
      observacoes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teamMember"]>
    composites: {}
  }

  type TeamMemberGetPayload<S extends boolean | null | undefined | TeamMemberDefaultArgs> = $Result.GetResult<Prisma.$TeamMemberPayload, S>

  type TeamMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamMemberCountAggregateInputType | true
    }

  export interface TeamMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamMember'], meta: { name: 'TeamMember' } }
    /**
     * Find zero or one TeamMember that matches the filter.
     * @param {TeamMemberFindUniqueArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamMemberFindUniqueArgs>(args: SelectSubset<T, TeamMemberFindUniqueArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamMemberFindUniqueOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamMemberFindFirstArgs>(args?: SelectSubset<T, TeamMemberFindFirstArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamMembers
     * const teamMembers = await prisma.teamMember.findMany()
     * 
     * // Get first 10 TeamMembers
     * const teamMembers = await prisma.teamMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamMemberFindManyArgs>(args?: SelectSubset<T, TeamMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamMember.
     * @param {TeamMemberCreateArgs} args - Arguments to create a TeamMember.
     * @example
     * // Create one TeamMember
     * const TeamMember = await prisma.teamMember.create({
     *   data: {
     *     // ... data to create a TeamMember
     *   }
     * })
     * 
     */
    create<T extends TeamMemberCreateArgs>(args: SelectSubset<T, TeamMemberCreateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamMembers.
     * @param {TeamMemberCreateManyArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamMemberCreateManyArgs>(args?: SelectSubset<T, TeamMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamMembers and returns the data saved in the database.
     * @param {TeamMemberCreateManyAndReturnArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamMember.
     * @param {TeamMemberDeleteArgs} args - Arguments to delete one TeamMember.
     * @example
     * // Delete one TeamMember
     * const TeamMember = await prisma.teamMember.delete({
     *   where: {
     *     // ... filter to delete one TeamMember
     *   }
     * })
     * 
     */
    delete<T extends TeamMemberDeleteArgs>(args: SelectSubset<T, TeamMemberDeleteArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamMember.
     * @param {TeamMemberUpdateArgs} args - Arguments to update one TeamMember.
     * @example
     * // Update one TeamMember
     * const teamMember = await prisma.teamMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamMemberUpdateArgs>(args: SelectSubset<T, TeamMemberUpdateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamMembers.
     * @param {TeamMemberDeleteManyArgs} args - Arguments to filter TeamMembers to delete.
     * @example
     * // Delete a few TeamMembers
     * const { count } = await prisma.teamMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamMemberDeleteManyArgs>(args?: SelectSubset<T, TeamMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamMemberUpdateManyArgs>(args: SelectSubset<T, TeamMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers and returns the data updated in the database.
     * @param {TeamMemberUpdateManyAndReturnArgs} args - Arguments to update many TeamMembers.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamMember.
     * @param {TeamMemberUpsertArgs} args - Arguments to update or create a TeamMember.
     * @example
     * // Update or create a TeamMember
     * const teamMember = await prisma.teamMember.upsert({
     *   create: {
     *     // ... data to create a TeamMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamMember we want to update
     *   }
     * })
     */
    upsert<T extends TeamMemberUpsertArgs>(args: SelectSubset<T, TeamMemberUpsertArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberCountArgs} args - Arguments to filter TeamMembers to count.
     * @example
     * // Count the number of TeamMembers
     * const count = await prisma.teamMember.count({
     *   where: {
     *     // ... the filter for the TeamMembers we want to count
     *   }
     * })
    **/
    count<T extends TeamMemberCountArgs>(
      args?: Subset<T, TeamMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamMemberAggregateArgs>(args: Subset<T, TeamMemberAggregateArgs>): Prisma.PrismaPromise<GetTeamMemberAggregateType<T>>

    /**
     * Group by TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberGroupByArgs} args - Group by arguments.
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
      T extends TeamMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamMemberGroupByArgs['orderBy'] }
        : { orderBy?: TeamMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamMember model
   */
  readonly fields: TeamMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeamMember model
   */
  interface TeamMemberFieldRefs {
    readonly id: FieldRef<"TeamMember", 'String'>
    readonly nome: FieldRef<"TeamMember", 'String'>
    readonly email: FieldRef<"TeamMember", 'String'>
    readonly telefone: FieldRef<"TeamMember", 'String'>
    readonly cargo: FieldRef<"TeamMember", 'String'>
    readonly role: FieldRef<"TeamMember", 'TeamUserRole'>
    readonly status: FieldRef<"TeamMember", 'TeamUserStatus'>
    readonly passwordHash: FieldRef<"TeamMember", 'String'>
    readonly observacoes: FieldRef<"TeamMember", 'String'>
    readonly createdAt: FieldRef<"TeamMember", 'DateTime'>
    readonly updatedAt: FieldRef<"TeamMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamMember findUnique
   */
  export type TeamMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findUniqueOrThrow
   */
  export type TeamMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findFirst
   */
  export type TeamMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findFirstOrThrow
   */
  export type TeamMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findMany
   */
  export type TeamMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember create
   */
  export type TeamMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data needed to create a TeamMember.
     */
    data: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
  }

  /**
   * TeamMember createMany
   */
  export type TeamMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamMember createManyAndReturn
   */
  export type TeamMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamMember update
   */
  export type TeamMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data needed to update a TeamMember.
     */
    data: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
    /**
     * Choose, which TeamMember to update.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember updateMany
   */
  export type TeamMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
  }

  /**
   * TeamMember updateManyAndReturn
   */
  export type TeamMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
  }

  /**
   * TeamMember upsert
   */
  export type TeamMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The filter to search for the TeamMember to update in case it exists.
     */
    where: TeamMemberWhereUniqueInput
    /**
     * In case the TeamMember found by the `where` argument doesn't exist, create a new TeamMember with this data.
     */
    create: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
    /**
     * In case the TeamMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
  }

  /**
   * TeamMember delete
   */
  export type TeamMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Filter which TeamMember to delete.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember deleteMany
   */
  export type TeamMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMembers to delete
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to delete.
     */
    limit?: number
  }

  /**
   * TeamMember without action
   */
  export type TeamMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
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


  export const SupplierScalarFieldEnum: {
    id: 'id',
    nomeFantasia: 'nomeFantasia',
    documento: 'documento',
    contato: 'contato',
    telefone: 'telefone',
    observacoes: 'observacoes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const InventoryItemScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    categoria: 'categoria',
    unidade: 'unidade',
    estoqueAtual: 'estoqueAtual',
    estoqueMinimo: 'estoqueMinimo',
    custoUnitario: 'custoUnitario',
    fornecedorId: 'fornecedorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InventoryItemScalarFieldEnum = (typeof InventoryItemScalarFieldEnum)[keyof typeof InventoryItemScalarFieldEnum]


  export const StockMovementScalarFieldEnum: {
    id: 'id',
    data: 'data',
    itemId: 'itemId',
    tipo: 'tipo',
    quantidade: 'quantidade',
    observacao: 'observacao',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StockMovementScalarFieldEnum = (typeof StockMovementScalarFieldEnum)[keyof typeof StockMovementScalarFieldEnum]


  export const AccountEntryScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    tipo: 'tipo',
    parceiro: 'parceiro',
    vencimento: 'vencimento',
    valor: 'valor',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountEntryScalarFieldEnum = (typeof AccountEntryScalarFieldEnum)[keyof typeof AccountEntryScalarFieldEnum]


  export const CashFlowEntryScalarFieldEnum: {
    id: 'id',
    data: 'data',
    tipo: 'tipo',
    categoria: 'categoria',
    descricao: 'descricao',
    valor: 'valor',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CashFlowEntryScalarFieldEnum = (typeof CashFlowEntryScalarFieldEnum)[keyof typeof CashFlowEntryScalarFieldEnum]


  export const TeamMemberScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    cargo: 'cargo',
    role: 'role',
    status: 'status',
    passwordHash: 'passwordHash',
    observacoes: 'observacoes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamMemberScalarFieldEnum = (typeof TeamMemberScalarFieldEnum)[keyof typeof TeamMemberScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'InventoryCategory'
   */
  export type EnumInventoryCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InventoryCategory'>
    


  /**
   * Reference to a field of type 'InventoryCategory[]'
   */
  export type ListEnumInventoryCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InventoryCategory[]'>
    


  /**
   * Reference to a field of type 'UnitType'
   */
  export type EnumUnitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UnitType'>
    


  /**
   * Reference to a field of type 'UnitType[]'
   */
  export type ListEnumUnitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UnitType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'MovementType'
   */
  export type EnumMovementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovementType'>
    


  /**
   * Reference to a field of type 'MovementType[]'
   */
  export type ListEnumMovementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovementType[]'>
    


  /**
   * Reference to a field of type 'AccountType'
   */
  export type EnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType'>
    


  /**
   * Reference to a field of type 'AccountType[]'
   */
  export type ListEnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType[]'>
    


  /**
   * Reference to a field of type 'AccountStatus'
   */
  export type EnumAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountStatus'>
    


  /**
   * Reference to a field of type 'AccountStatus[]'
   */
  export type ListEnumAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountStatus[]'>
    


  /**
   * Reference to a field of type 'CashFlowCategory'
   */
  export type EnumCashFlowCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CashFlowCategory'>
    


  /**
   * Reference to a field of type 'CashFlowCategory[]'
   */
  export type ListEnumCashFlowCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CashFlowCategory[]'>
    


  /**
   * Reference to a field of type 'TeamUserRole'
   */
  export type EnumTeamUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TeamUserRole'>
    


  /**
   * Reference to a field of type 'TeamUserRole[]'
   */
  export type ListEnumTeamUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TeamUserRole[]'>
    


  /**
   * Reference to a field of type 'TeamUserStatus'
   */
  export type EnumTeamUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TeamUserStatus'>
    


  /**
   * Reference to a field of type 'TeamUserStatus[]'
   */
  export type ListEnumTeamUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TeamUserStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: StringFilter<"Supplier"> | string
    nomeFantasia?: StringFilter<"Supplier"> | string
    documento?: StringFilter<"Supplier"> | string
    contato?: StringFilter<"Supplier"> | string
    telefone?: StringFilter<"Supplier"> | string
    observacoes?: StringNullableFilter<"Supplier"> | string | null
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    inventory?: InventoryItemListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    nomeFantasia?: SortOrder
    documento?: SortOrder
    contato?: SortOrder
    telefone?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inventory?: InventoryItemOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    documento?: string
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    nomeFantasia?: StringFilter<"Supplier"> | string
    contato?: StringFilter<"Supplier"> | string
    telefone?: StringFilter<"Supplier"> | string
    observacoes?: StringNullableFilter<"Supplier"> | string | null
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    inventory?: InventoryItemListRelationFilter
  }, "id" | "documento">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    nomeFantasia?: SortOrder
    documento?: SortOrder
    contato?: SortOrder
    telefone?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Supplier"> | string
    nomeFantasia?: StringWithAggregatesFilter<"Supplier"> | string
    documento?: StringWithAggregatesFilter<"Supplier"> | string
    contato?: StringWithAggregatesFilter<"Supplier"> | string
    telefone?: StringWithAggregatesFilter<"Supplier"> | string
    observacoes?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
  }

  export type InventoryItemWhereInput = {
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    id?: StringFilter<"InventoryItem"> | string
    nome?: StringFilter<"InventoryItem"> | string
    categoria?: EnumInventoryCategoryFilter<"InventoryItem"> | $Enums.InventoryCategory
    unidade?: EnumUnitTypeFilter<"InventoryItem"> | $Enums.UnitType
    estoqueAtual?: DecimalFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    estoqueMinimo?: DecimalFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    custoUnitario?: DecimalFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    fornecedorId?: StringNullableFilter<"InventoryItem"> | string | null
    createdAt?: DateTimeFilter<"InventoryItem"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryItem"> | Date | string
    fornecedor?: XOR<SupplierNullableScalarRelationFilter, SupplierWhereInput> | null
    movements?: StockMovementListRelationFilter
  }

  export type InventoryItemOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    unidade?: SortOrder
    estoqueAtual?: SortOrder
    estoqueMinimo?: SortOrder
    custoUnitario?: SortOrder
    fornecedorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fornecedor?: SupplierOrderByWithRelationInput
    movements?: StockMovementOrderByRelationAggregateInput
  }

  export type InventoryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    nome?: StringFilter<"InventoryItem"> | string
    categoria?: EnumInventoryCategoryFilter<"InventoryItem"> | $Enums.InventoryCategory
    unidade?: EnumUnitTypeFilter<"InventoryItem"> | $Enums.UnitType
    estoqueAtual?: DecimalFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    estoqueMinimo?: DecimalFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    custoUnitario?: DecimalFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    fornecedorId?: StringNullableFilter<"InventoryItem"> | string | null
    createdAt?: DateTimeFilter<"InventoryItem"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryItem"> | Date | string
    fornecedor?: XOR<SupplierNullableScalarRelationFilter, SupplierWhereInput> | null
    movements?: StockMovementListRelationFilter
  }, "id">

  export type InventoryItemOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    unidade?: SortOrder
    estoqueAtual?: SortOrder
    estoqueMinimo?: SortOrder
    custoUnitario?: SortOrder
    fornecedorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InventoryItemCountOrderByAggregateInput
    _avg?: InventoryItemAvgOrderByAggregateInput
    _max?: InventoryItemMaxOrderByAggregateInput
    _min?: InventoryItemMinOrderByAggregateInput
    _sum?: InventoryItemSumOrderByAggregateInput
  }

  export type InventoryItemScalarWhereWithAggregatesInput = {
    AND?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    OR?: InventoryItemScalarWhereWithAggregatesInput[]
    NOT?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryItem"> | string
    nome?: StringWithAggregatesFilter<"InventoryItem"> | string
    categoria?: EnumInventoryCategoryWithAggregatesFilter<"InventoryItem"> | $Enums.InventoryCategory
    unidade?: EnumUnitTypeWithAggregatesFilter<"InventoryItem"> | $Enums.UnitType
    estoqueAtual?: DecimalWithAggregatesFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    estoqueMinimo?: DecimalWithAggregatesFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    custoUnitario?: DecimalWithAggregatesFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    fornecedorId?: StringNullableWithAggregatesFilter<"InventoryItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InventoryItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InventoryItem"> | Date | string
  }

  export type StockMovementWhereInput = {
    AND?: StockMovementWhereInput | StockMovementWhereInput[]
    OR?: StockMovementWhereInput[]
    NOT?: StockMovementWhereInput | StockMovementWhereInput[]
    id?: StringFilter<"StockMovement"> | string
    data?: DateTimeFilter<"StockMovement"> | Date | string
    itemId?: StringFilter<"StockMovement"> | string
    tipo?: EnumMovementTypeFilter<"StockMovement"> | $Enums.MovementType
    quantidade?: DecimalFilter<"StockMovement"> | Decimal | DecimalJsLike | number | string
    observacao?: StringFilter<"StockMovement"> | string
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
    updatedAt?: DateTimeFilter<"StockMovement"> | Date | string
    item?: XOR<InventoryItemScalarRelationFilter, InventoryItemWhereInput>
  }

  export type StockMovementOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    itemId?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    observacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    item?: InventoryItemOrderByWithRelationInput
  }

  export type StockMovementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StockMovementWhereInput | StockMovementWhereInput[]
    OR?: StockMovementWhereInput[]
    NOT?: StockMovementWhereInput | StockMovementWhereInput[]
    data?: DateTimeFilter<"StockMovement"> | Date | string
    itemId?: StringFilter<"StockMovement"> | string
    tipo?: EnumMovementTypeFilter<"StockMovement"> | $Enums.MovementType
    quantidade?: DecimalFilter<"StockMovement"> | Decimal | DecimalJsLike | number | string
    observacao?: StringFilter<"StockMovement"> | string
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
    updatedAt?: DateTimeFilter<"StockMovement"> | Date | string
    item?: XOR<InventoryItemScalarRelationFilter, InventoryItemWhereInput>
  }, "id">

  export type StockMovementOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    itemId?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    observacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StockMovementCountOrderByAggregateInput
    _avg?: StockMovementAvgOrderByAggregateInput
    _max?: StockMovementMaxOrderByAggregateInput
    _min?: StockMovementMinOrderByAggregateInput
    _sum?: StockMovementSumOrderByAggregateInput
  }

  export type StockMovementScalarWhereWithAggregatesInput = {
    AND?: StockMovementScalarWhereWithAggregatesInput | StockMovementScalarWhereWithAggregatesInput[]
    OR?: StockMovementScalarWhereWithAggregatesInput[]
    NOT?: StockMovementScalarWhereWithAggregatesInput | StockMovementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockMovement"> | string
    data?: DateTimeWithAggregatesFilter<"StockMovement"> | Date | string
    itemId?: StringWithAggregatesFilter<"StockMovement"> | string
    tipo?: EnumMovementTypeWithAggregatesFilter<"StockMovement"> | $Enums.MovementType
    quantidade?: DecimalWithAggregatesFilter<"StockMovement"> | Decimal | DecimalJsLike | number | string
    observacao?: StringWithAggregatesFilter<"StockMovement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StockMovement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StockMovement"> | Date | string
  }

  export type AccountEntryWhereInput = {
    AND?: AccountEntryWhereInput | AccountEntryWhereInput[]
    OR?: AccountEntryWhereInput[]
    NOT?: AccountEntryWhereInput | AccountEntryWhereInput[]
    id?: StringFilter<"AccountEntry"> | string
    descricao?: StringFilter<"AccountEntry"> | string
    tipo?: EnumAccountTypeFilter<"AccountEntry"> | $Enums.AccountType
    parceiro?: StringFilter<"AccountEntry"> | string
    vencimento?: DateTimeFilter<"AccountEntry"> | Date | string
    valor?: DecimalFilter<"AccountEntry"> | Decimal | DecimalJsLike | number | string
    status?: EnumAccountStatusFilter<"AccountEntry"> | $Enums.AccountStatus
    createdAt?: DateTimeFilter<"AccountEntry"> | Date | string
    updatedAt?: DateTimeFilter<"AccountEntry"> | Date | string
  }

  export type AccountEntryOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    parceiro?: SortOrder
    vencimento?: SortOrder
    valor?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountEntryWhereInput | AccountEntryWhereInput[]
    OR?: AccountEntryWhereInput[]
    NOT?: AccountEntryWhereInput | AccountEntryWhereInput[]
    descricao?: StringFilter<"AccountEntry"> | string
    tipo?: EnumAccountTypeFilter<"AccountEntry"> | $Enums.AccountType
    parceiro?: StringFilter<"AccountEntry"> | string
    vencimento?: DateTimeFilter<"AccountEntry"> | Date | string
    valor?: DecimalFilter<"AccountEntry"> | Decimal | DecimalJsLike | number | string
    status?: EnumAccountStatusFilter<"AccountEntry"> | $Enums.AccountStatus
    createdAt?: DateTimeFilter<"AccountEntry"> | Date | string
    updatedAt?: DateTimeFilter<"AccountEntry"> | Date | string
  }, "id">

  export type AccountEntryOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    parceiro?: SortOrder
    vencimento?: SortOrder
    valor?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountEntryCountOrderByAggregateInput
    _avg?: AccountEntryAvgOrderByAggregateInput
    _max?: AccountEntryMaxOrderByAggregateInput
    _min?: AccountEntryMinOrderByAggregateInput
    _sum?: AccountEntrySumOrderByAggregateInput
  }

  export type AccountEntryScalarWhereWithAggregatesInput = {
    AND?: AccountEntryScalarWhereWithAggregatesInput | AccountEntryScalarWhereWithAggregatesInput[]
    OR?: AccountEntryScalarWhereWithAggregatesInput[]
    NOT?: AccountEntryScalarWhereWithAggregatesInput | AccountEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccountEntry"> | string
    descricao?: StringWithAggregatesFilter<"AccountEntry"> | string
    tipo?: EnumAccountTypeWithAggregatesFilter<"AccountEntry"> | $Enums.AccountType
    parceiro?: StringWithAggregatesFilter<"AccountEntry"> | string
    vencimento?: DateTimeWithAggregatesFilter<"AccountEntry"> | Date | string
    valor?: DecimalWithAggregatesFilter<"AccountEntry"> | Decimal | DecimalJsLike | number | string
    status?: EnumAccountStatusWithAggregatesFilter<"AccountEntry"> | $Enums.AccountStatus
    createdAt?: DateTimeWithAggregatesFilter<"AccountEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccountEntry"> | Date | string
  }

  export type CashFlowEntryWhereInput = {
    AND?: CashFlowEntryWhereInput | CashFlowEntryWhereInput[]
    OR?: CashFlowEntryWhereInput[]
    NOT?: CashFlowEntryWhereInput | CashFlowEntryWhereInput[]
    id?: StringFilter<"CashFlowEntry"> | string
    data?: DateTimeFilter<"CashFlowEntry"> | Date | string
    tipo?: EnumMovementTypeFilter<"CashFlowEntry"> | $Enums.MovementType
    categoria?: EnumCashFlowCategoryFilter<"CashFlowEntry"> | $Enums.CashFlowCategory
    descricao?: StringFilter<"CashFlowEntry"> | string
    valor?: DecimalFilter<"CashFlowEntry"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"CashFlowEntry"> | Date | string
    updatedAt?: DateTimeFilter<"CashFlowEntry"> | Date | string
  }

  export type CashFlowEntryOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    tipo?: SortOrder
    categoria?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CashFlowEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CashFlowEntryWhereInput | CashFlowEntryWhereInput[]
    OR?: CashFlowEntryWhereInput[]
    NOT?: CashFlowEntryWhereInput | CashFlowEntryWhereInput[]
    data?: DateTimeFilter<"CashFlowEntry"> | Date | string
    tipo?: EnumMovementTypeFilter<"CashFlowEntry"> | $Enums.MovementType
    categoria?: EnumCashFlowCategoryFilter<"CashFlowEntry"> | $Enums.CashFlowCategory
    descricao?: StringFilter<"CashFlowEntry"> | string
    valor?: DecimalFilter<"CashFlowEntry"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"CashFlowEntry"> | Date | string
    updatedAt?: DateTimeFilter<"CashFlowEntry"> | Date | string
  }, "id">

  export type CashFlowEntryOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    tipo?: SortOrder
    categoria?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CashFlowEntryCountOrderByAggregateInput
    _avg?: CashFlowEntryAvgOrderByAggregateInput
    _max?: CashFlowEntryMaxOrderByAggregateInput
    _min?: CashFlowEntryMinOrderByAggregateInput
    _sum?: CashFlowEntrySumOrderByAggregateInput
  }

  export type CashFlowEntryScalarWhereWithAggregatesInput = {
    AND?: CashFlowEntryScalarWhereWithAggregatesInput | CashFlowEntryScalarWhereWithAggregatesInput[]
    OR?: CashFlowEntryScalarWhereWithAggregatesInput[]
    NOT?: CashFlowEntryScalarWhereWithAggregatesInput | CashFlowEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CashFlowEntry"> | string
    data?: DateTimeWithAggregatesFilter<"CashFlowEntry"> | Date | string
    tipo?: EnumMovementTypeWithAggregatesFilter<"CashFlowEntry"> | $Enums.MovementType
    categoria?: EnumCashFlowCategoryWithAggregatesFilter<"CashFlowEntry"> | $Enums.CashFlowCategory
    descricao?: StringWithAggregatesFilter<"CashFlowEntry"> | string
    valor?: DecimalWithAggregatesFilter<"CashFlowEntry"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"CashFlowEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CashFlowEntry"> | Date | string
  }

  export type TeamMemberWhereInput = {
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    id?: StringFilter<"TeamMember"> | string
    nome?: StringFilter<"TeamMember"> | string
    email?: StringFilter<"TeamMember"> | string
    telefone?: StringNullableFilter<"TeamMember"> | string | null
    cargo?: StringFilter<"TeamMember"> | string
    role?: EnumTeamUserRoleFilter<"TeamMember"> | $Enums.TeamUserRole
    status?: EnumTeamUserStatusFilter<"TeamMember"> | $Enums.TeamUserStatus
    passwordHash?: StringNullableFilter<"TeamMember"> | string | null
    observacoes?: StringNullableFilter<"TeamMember"> | string | null
    createdAt?: DateTimeFilter<"TeamMember"> | Date | string
    updatedAt?: DateTimeFilter<"TeamMember"> | Date | string
  }

  export type TeamMemberOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrderInput | SortOrder
    cargo?: SortOrder
    role?: SortOrder
    status?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    nome?: StringFilter<"TeamMember"> | string
    telefone?: StringNullableFilter<"TeamMember"> | string | null
    cargo?: StringFilter<"TeamMember"> | string
    role?: EnumTeamUserRoleFilter<"TeamMember"> | $Enums.TeamUserRole
    status?: EnumTeamUserStatusFilter<"TeamMember"> | $Enums.TeamUserStatus
    passwordHash?: StringNullableFilter<"TeamMember"> | string | null
    observacoes?: StringNullableFilter<"TeamMember"> | string | null
    createdAt?: DateTimeFilter<"TeamMember"> | Date | string
    updatedAt?: DateTimeFilter<"TeamMember"> | Date | string
  }, "id" | "email">

  export type TeamMemberOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrderInput | SortOrder
    cargo?: SortOrder
    role?: SortOrder
    status?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamMemberCountOrderByAggregateInput
    _max?: TeamMemberMaxOrderByAggregateInput
    _min?: TeamMemberMinOrderByAggregateInput
  }

  export type TeamMemberScalarWhereWithAggregatesInput = {
    AND?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    OR?: TeamMemberScalarWhereWithAggregatesInput[]
    NOT?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamMember"> | string
    nome?: StringWithAggregatesFilter<"TeamMember"> | string
    email?: StringWithAggregatesFilter<"TeamMember"> | string
    telefone?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    cargo?: StringWithAggregatesFilter<"TeamMember"> | string
    role?: EnumTeamUserRoleWithAggregatesFilter<"TeamMember"> | $Enums.TeamUserRole
    status?: EnumTeamUserStatusWithAggregatesFilter<"TeamMember"> | $Enums.TeamUserStatus
    passwordHash?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    observacoes?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TeamMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TeamMember"> | Date | string
  }

  export type SupplierCreateInput = {
    id?: string
    nomeFantasia: string
    documento: string
    contato: string
    telefone: string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryItemCreateNestedManyWithoutFornecedorInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: string
    nomeFantasia: string
    documento: string
    contato: string
    telefone: string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryItemUncheckedCreateNestedManyWithoutFornecedorInput
  }

  export type SupplierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryItemUpdateManyWithoutFornecedorNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryItemUncheckedUpdateManyWithoutFornecedorNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: string
    nomeFantasia: string
    documento: string
    contato: string
    telefone: string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemCreateInput = {
    id?: string
    nome: string
    categoria: $Enums.InventoryCategory
    unidade: $Enums.UnitType
    estoqueAtual: Decimal | DecimalJsLike | number | string
    estoqueMinimo: Decimal | DecimalJsLike | number | string
    custoUnitario: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor?: SupplierCreateNestedOneWithoutInventoryInput
    movements?: StockMovementCreateNestedManyWithoutItemInput
  }

  export type InventoryItemUncheckedCreateInput = {
    id?: string
    nome: string
    categoria: $Enums.InventoryCategory
    unidade: $Enums.UnitType
    estoqueAtual: Decimal | DecimalJsLike | number | string
    estoqueMinimo: Decimal | DecimalJsLike | number | string
    custoUnitario: Decimal | DecimalJsLike | number | string
    fornecedorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: StockMovementUncheckedCreateNestedManyWithoutItemInput
  }

  export type InventoryItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: EnumInventoryCategoryFieldUpdateOperationsInput | $Enums.InventoryCategory
    unidade?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    estoqueAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estoqueMinimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: SupplierUpdateOneWithoutInventoryNestedInput
    movements?: StockMovementUpdateManyWithoutItemNestedInput
  }

  export type InventoryItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: EnumInventoryCategoryFieldUpdateOperationsInput | $Enums.InventoryCategory
    unidade?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    estoqueAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estoqueMinimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fornecedorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: StockMovementUncheckedUpdateManyWithoutItemNestedInput
  }

  export type InventoryItemCreateManyInput = {
    id?: string
    nome: string
    categoria: $Enums.InventoryCategory
    unidade: $Enums.UnitType
    estoqueAtual: Decimal | DecimalJsLike | number | string
    estoqueMinimo: Decimal | DecimalJsLike | number | string
    custoUnitario: Decimal | DecimalJsLike | number | string
    fornecedorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: EnumInventoryCategoryFieldUpdateOperationsInput | $Enums.InventoryCategory
    unidade?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    estoqueAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estoqueMinimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: EnumInventoryCategoryFieldUpdateOperationsInput | $Enums.InventoryCategory
    unidade?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    estoqueAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estoqueMinimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fornecedorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementCreateInput = {
    id?: string
    data: Date | string
    tipo: $Enums.MovementType
    quantidade: Decimal | DecimalJsLike | number | string
    observacao: string
    createdAt?: Date | string
    updatedAt?: Date | string
    item: InventoryItemCreateNestedOneWithoutMovementsInput
  }

  export type StockMovementUncheckedCreateInput = {
    id?: string
    data: Date | string
    itemId: string
    tipo: $Enums.MovementType
    quantidade: Decimal | DecimalJsLike | number | string
    observacao: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockMovementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: InventoryItemUpdateOneRequiredWithoutMovementsNestedInput
  }

  export type StockMovementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: StringFieldUpdateOperationsInput | string
    tipo?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementCreateManyInput = {
    id?: string
    data: Date | string
    itemId: string
    tipo: $Enums.MovementType
    quantidade: Decimal | DecimalJsLike | number | string
    observacao: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockMovementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: StringFieldUpdateOperationsInput | string
    tipo?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountEntryCreateInput = {
    id?: string
    descricao: string
    tipo: $Enums.AccountType
    parceiro: string
    vencimento: Date | string
    valor: Decimal | DecimalJsLike | number | string
    status: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountEntryUncheckedCreateInput = {
    id?: string
    descricao: string
    tipo: $Enums.AccountType
    parceiro: string
    vencimento: Date | string
    valor: Decimal | DecimalJsLike | number | string
    status: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    parceiro?: StringFieldUpdateOperationsInput | string
    vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    parceiro?: StringFieldUpdateOperationsInput | string
    vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountEntryCreateManyInput = {
    id?: string
    descricao: string
    tipo: $Enums.AccountType
    parceiro: string
    vencimento: Date | string
    valor: Decimal | DecimalJsLike | number | string
    status: $Enums.AccountStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    parceiro?: StringFieldUpdateOperationsInput | string
    vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    tipo?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    parceiro?: StringFieldUpdateOperationsInput | string
    vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashFlowEntryCreateInput = {
    id?: string
    data: Date | string
    tipo: $Enums.MovementType
    categoria: $Enums.CashFlowCategory
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CashFlowEntryUncheckedCreateInput = {
    id?: string
    data: Date | string
    tipo: $Enums.MovementType
    categoria: $Enums.CashFlowCategory
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CashFlowEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    categoria?: EnumCashFlowCategoryFieldUpdateOperationsInput | $Enums.CashFlowCategory
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashFlowEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    categoria?: EnumCashFlowCategoryFieldUpdateOperationsInput | $Enums.CashFlowCategory
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashFlowEntryCreateManyInput = {
    id?: string
    data: Date | string
    tipo: $Enums.MovementType
    categoria: $Enums.CashFlowCategory
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CashFlowEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    categoria?: EnumCashFlowCategoryFieldUpdateOperationsInput | $Enums.CashFlowCategory
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashFlowEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    categoria?: EnumCashFlowCategoryFieldUpdateOperationsInput | $Enums.CashFlowCategory
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    cargo: string
    role: $Enums.TeamUserRole
    status?: $Enums.TeamUserStatus
    passwordHash?: string | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamMemberUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    cargo: string
    role: $Enums.TeamUserRole
    status?: $Enums.TeamUserStatus
    passwordHash?: string | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamUserRoleFieldUpdateOperationsInput | $Enums.TeamUserRole
    status?: EnumTeamUserStatusFieldUpdateOperationsInput | $Enums.TeamUserStatus
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamUserRoleFieldUpdateOperationsInput | $Enums.TeamUserRole
    status?: EnumTeamUserStatusFieldUpdateOperationsInput | $Enums.TeamUserStatus
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateManyInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    cargo: string
    role: $Enums.TeamUserRole
    status?: $Enums.TeamUserStatus
    passwordHash?: string | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamUserRoleFieldUpdateOperationsInput | $Enums.TeamUserRole
    status?: EnumTeamUserStatusFieldUpdateOperationsInput | $Enums.TeamUserStatus
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamUserRoleFieldUpdateOperationsInput | $Enums.TeamUserRole
    status?: EnumTeamUserStatusFieldUpdateOperationsInput | $Enums.TeamUserStatus
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type InventoryItemListRelationFilter = {
    every?: InventoryItemWhereInput
    some?: InventoryItemWhereInput
    none?: InventoryItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InventoryItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    nomeFantasia?: SortOrder
    documento?: SortOrder
    contato?: SortOrder
    telefone?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeFantasia?: SortOrder
    documento?: SortOrder
    contato?: SortOrder
    telefone?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    nomeFantasia?: SortOrder
    documento?: SortOrder
    contato?: SortOrder
    telefone?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumInventoryCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryCategory | EnumInventoryCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryCategory[] | ListEnumInventoryCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryCategory[] | ListEnumInventoryCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryCategoryFilter<$PrismaModel> | $Enums.InventoryCategory
  }

  export type EnumUnitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitTypeFilter<$PrismaModel> | $Enums.UnitType
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type SupplierNullableScalarRelationFilter = {
    is?: SupplierWhereInput | null
    isNot?: SupplierWhereInput | null
  }

  export type StockMovementListRelationFilter = {
    every?: StockMovementWhereInput
    some?: StockMovementWhereInput
    none?: StockMovementWhereInput
  }

  export type StockMovementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryItemCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    unidade?: SortOrder
    estoqueAtual?: SortOrder
    estoqueMinimo?: SortOrder
    custoUnitario?: SortOrder
    fornecedorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryItemAvgOrderByAggregateInput = {
    estoqueAtual?: SortOrder
    estoqueMinimo?: SortOrder
    custoUnitario?: SortOrder
  }

  export type InventoryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    unidade?: SortOrder
    estoqueAtual?: SortOrder
    estoqueMinimo?: SortOrder
    custoUnitario?: SortOrder
    fornecedorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryItemMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    unidade?: SortOrder
    estoqueAtual?: SortOrder
    estoqueMinimo?: SortOrder
    custoUnitario?: SortOrder
    fornecedorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryItemSumOrderByAggregateInput = {
    estoqueAtual?: SortOrder
    estoqueMinimo?: SortOrder
    custoUnitario?: SortOrder
  }

  export type EnumInventoryCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryCategory | EnumInventoryCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryCategory[] | ListEnumInventoryCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryCategory[] | ListEnumInventoryCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryCategoryWithAggregatesFilter<$PrismaModel> | $Enums.InventoryCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInventoryCategoryFilter<$PrismaModel>
    _max?: NestedEnumInventoryCategoryFilter<$PrismaModel>
  }

  export type EnumUnitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitTypeWithAggregatesFilter<$PrismaModel> | $Enums.UnitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitTypeFilter<$PrismaModel>
    _max?: NestedEnumUnitTypeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumMovementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeFilter<$PrismaModel> | $Enums.MovementType
  }

  export type InventoryItemScalarRelationFilter = {
    is?: InventoryItemWhereInput
    isNot?: InventoryItemWhereInput
  }

  export type StockMovementCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    itemId?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    observacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockMovementAvgOrderByAggregateInput = {
    quantidade?: SortOrder
  }

  export type StockMovementMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    itemId?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    observacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockMovementMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    itemId?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    observacao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockMovementSumOrderByAggregateInput = {
    quantidade?: SortOrder
  }

  export type EnumMovementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel> | $Enums.MovementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovementTypeFilter<$PrismaModel>
    _max?: NestedEnumMovementTypeFilter<$PrismaModel>
  }

  export type EnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type EnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus
  }

  export type AccountEntryCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    parceiro?: SortOrder
    vencimento?: SortOrder
    valor?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountEntryAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type AccountEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    parceiro?: SortOrder
    vencimento?: SortOrder
    valor?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountEntryMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    tipo?: SortOrder
    parceiro?: SortOrder
    vencimento?: SortOrder
    valor?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountEntrySumOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type EnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type EnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountStatusFilter<$PrismaModel>
  }

  export type EnumCashFlowCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.CashFlowCategory | EnumCashFlowCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CashFlowCategory[] | ListEnumCashFlowCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CashFlowCategory[] | ListEnumCashFlowCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCashFlowCategoryFilter<$PrismaModel> | $Enums.CashFlowCategory
  }

  export type CashFlowEntryCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    tipo?: SortOrder
    categoria?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CashFlowEntryAvgOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type CashFlowEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    tipo?: SortOrder
    categoria?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CashFlowEntryMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    tipo?: SortOrder
    categoria?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CashFlowEntrySumOrderByAggregateInput = {
    valor?: SortOrder
  }

  export type EnumCashFlowCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CashFlowCategory | EnumCashFlowCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CashFlowCategory[] | ListEnumCashFlowCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CashFlowCategory[] | ListEnumCashFlowCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCashFlowCategoryWithAggregatesFilter<$PrismaModel> | $Enums.CashFlowCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCashFlowCategoryFilter<$PrismaModel>
    _max?: NestedEnumCashFlowCategoryFilter<$PrismaModel>
  }

  export type EnumTeamUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamUserRole | EnumTeamUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TeamUserRole[] | ListEnumTeamUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeamUserRole[] | ListEnumTeamUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTeamUserRoleFilter<$PrismaModel> | $Enums.TeamUserRole
  }

  export type EnumTeamUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamUserStatus | EnumTeamUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TeamUserStatus[] | ListEnumTeamUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeamUserStatus[] | ListEnumTeamUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTeamUserStatusFilter<$PrismaModel> | $Enums.TeamUserStatus
  }

  export type TeamMemberCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    cargo?: SortOrder
    role?: SortOrder
    status?: SortOrder
    passwordHash?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    cargo?: SortOrder
    role?: SortOrder
    status?: SortOrder
    passwordHash?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMemberMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    cargo?: SortOrder
    role?: SortOrder
    status?: SortOrder
    passwordHash?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTeamUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamUserRole | EnumTeamUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TeamUserRole[] | ListEnumTeamUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeamUserRole[] | ListEnumTeamUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTeamUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.TeamUserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTeamUserRoleFilter<$PrismaModel>
    _max?: NestedEnumTeamUserRoleFilter<$PrismaModel>
  }

  export type EnumTeamUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamUserStatus | EnumTeamUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TeamUserStatus[] | ListEnumTeamUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeamUserStatus[] | ListEnumTeamUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTeamUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.TeamUserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTeamUserStatusFilter<$PrismaModel>
    _max?: NestedEnumTeamUserStatusFilter<$PrismaModel>
  }

  export type InventoryItemCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<InventoryItemCreateWithoutFornecedorInput, InventoryItemUncheckedCreateWithoutFornecedorInput> | InventoryItemCreateWithoutFornecedorInput[] | InventoryItemUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutFornecedorInput | InventoryItemCreateOrConnectWithoutFornecedorInput[]
    createMany?: InventoryItemCreateManyFornecedorInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type InventoryItemUncheckedCreateNestedManyWithoutFornecedorInput = {
    create?: XOR<InventoryItemCreateWithoutFornecedorInput, InventoryItemUncheckedCreateWithoutFornecedorInput> | InventoryItemCreateWithoutFornecedorInput[] | InventoryItemUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutFornecedorInput | InventoryItemCreateOrConnectWithoutFornecedorInput[]
    createMany?: InventoryItemCreateManyFornecedorInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InventoryItemUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<InventoryItemCreateWithoutFornecedorInput, InventoryItemUncheckedCreateWithoutFornecedorInput> | InventoryItemCreateWithoutFornecedorInput[] | InventoryItemUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutFornecedorInput | InventoryItemCreateOrConnectWithoutFornecedorInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutFornecedorInput | InventoryItemUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: InventoryItemCreateManyFornecedorInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutFornecedorInput | InventoryItemUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutFornecedorInput | InventoryItemUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type InventoryItemUncheckedUpdateManyWithoutFornecedorNestedInput = {
    create?: XOR<InventoryItemCreateWithoutFornecedorInput, InventoryItemUncheckedCreateWithoutFornecedorInput> | InventoryItemCreateWithoutFornecedorInput[] | InventoryItemUncheckedCreateWithoutFornecedorInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutFornecedorInput | InventoryItemCreateOrConnectWithoutFornecedorInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutFornecedorInput | InventoryItemUpsertWithWhereUniqueWithoutFornecedorInput[]
    createMany?: InventoryItemCreateManyFornecedorInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutFornecedorInput | InventoryItemUpdateWithWhereUniqueWithoutFornecedorInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutFornecedorInput | InventoryItemUpdateManyWithWhereWithoutFornecedorInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type SupplierCreateNestedOneWithoutInventoryInput = {
    create?: XOR<SupplierCreateWithoutInventoryInput, SupplierUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutInventoryInput
    connect?: SupplierWhereUniqueInput
  }

  export type StockMovementCreateNestedManyWithoutItemInput = {
    create?: XOR<StockMovementCreateWithoutItemInput, StockMovementUncheckedCreateWithoutItemInput> | StockMovementCreateWithoutItemInput[] | StockMovementUncheckedCreateWithoutItemInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutItemInput | StockMovementCreateOrConnectWithoutItemInput[]
    createMany?: StockMovementCreateManyItemInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type StockMovementUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<StockMovementCreateWithoutItemInput, StockMovementUncheckedCreateWithoutItemInput> | StockMovementCreateWithoutItemInput[] | StockMovementUncheckedCreateWithoutItemInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutItemInput | StockMovementCreateOrConnectWithoutItemInput[]
    createMany?: StockMovementCreateManyItemInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type EnumInventoryCategoryFieldUpdateOperationsInput = {
    set?: $Enums.InventoryCategory
  }

  export type EnumUnitTypeFieldUpdateOperationsInput = {
    set?: $Enums.UnitType
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type SupplierUpdateOneWithoutInventoryNestedInput = {
    create?: XOR<SupplierCreateWithoutInventoryInput, SupplierUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutInventoryInput
    upsert?: SupplierUpsertWithoutInventoryInput
    disconnect?: SupplierWhereInput | boolean
    delete?: SupplierWhereInput | boolean
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutInventoryInput, SupplierUpdateWithoutInventoryInput>, SupplierUncheckedUpdateWithoutInventoryInput>
  }

  export type StockMovementUpdateManyWithoutItemNestedInput = {
    create?: XOR<StockMovementCreateWithoutItemInput, StockMovementUncheckedCreateWithoutItemInput> | StockMovementCreateWithoutItemInput[] | StockMovementUncheckedCreateWithoutItemInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutItemInput | StockMovementCreateOrConnectWithoutItemInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutItemInput | StockMovementUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: StockMovementCreateManyItemInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutItemInput | StockMovementUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutItemInput | StockMovementUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type StockMovementUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<StockMovementCreateWithoutItemInput, StockMovementUncheckedCreateWithoutItemInput> | StockMovementCreateWithoutItemInput[] | StockMovementUncheckedCreateWithoutItemInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutItemInput | StockMovementCreateOrConnectWithoutItemInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutItemInput | StockMovementUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: StockMovementCreateManyItemInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutItemInput | StockMovementUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutItemInput | StockMovementUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type InventoryItemCreateNestedOneWithoutMovementsInput = {
    create?: XOR<InventoryItemCreateWithoutMovementsInput, InventoryItemUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: InventoryItemCreateOrConnectWithoutMovementsInput
    connect?: InventoryItemWhereUniqueInput
  }

  export type EnumMovementTypeFieldUpdateOperationsInput = {
    set?: $Enums.MovementType
  }

  export type InventoryItemUpdateOneRequiredWithoutMovementsNestedInput = {
    create?: XOR<InventoryItemCreateWithoutMovementsInput, InventoryItemUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: InventoryItemCreateOrConnectWithoutMovementsInput
    upsert?: InventoryItemUpsertWithoutMovementsInput
    connect?: InventoryItemWhereUniqueInput
    update?: XOR<XOR<InventoryItemUpdateToOneWithWhereWithoutMovementsInput, InventoryItemUpdateWithoutMovementsInput>, InventoryItemUncheckedUpdateWithoutMovementsInput>
  }

  export type EnumAccountTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccountType
  }

  export type EnumAccountStatusFieldUpdateOperationsInput = {
    set?: $Enums.AccountStatus
  }

  export type EnumCashFlowCategoryFieldUpdateOperationsInput = {
    set?: $Enums.CashFlowCategory
  }

  export type EnumTeamUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.TeamUserRole
  }

  export type EnumTeamUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.TeamUserStatus
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumInventoryCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryCategory | EnumInventoryCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryCategory[] | ListEnumInventoryCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryCategory[] | ListEnumInventoryCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryCategoryFilter<$PrismaModel> | $Enums.InventoryCategory
  }

  export type NestedEnumUnitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitTypeFilter<$PrismaModel> | $Enums.UnitType
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumInventoryCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryCategory | EnumInventoryCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryCategory[] | ListEnumInventoryCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryCategory[] | ListEnumInventoryCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryCategoryWithAggregatesFilter<$PrismaModel> | $Enums.InventoryCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInventoryCategoryFilter<$PrismaModel>
    _max?: NestedEnumInventoryCategoryFilter<$PrismaModel>
  }

  export type NestedEnumUnitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitTypeWithAggregatesFilter<$PrismaModel> | $Enums.UnitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitTypeFilter<$PrismaModel>
    _max?: NestedEnumUnitTypeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumMovementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeFilter<$PrismaModel> | $Enums.MovementType
  }

  export type NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel> | $Enums.MovementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovementTypeFilter<$PrismaModel>
    _max?: NestedEnumMovementTypeFilter<$PrismaModel>
  }

  export type NestedEnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type NestedEnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus
  }

  export type NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountStatus[] | ListEnumAccountStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountStatusFilter<$PrismaModel>
  }

  export type NestedEnumCashFlowCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.CashFlowCategory | EnumCashFlowCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CashFlowCategory[] | ListEnumCashFlowCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CashFlowCategory[] | ListEnumCashFlowCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCashFlowCategoryFilter<$PrismaModel> | $Enums.CashFlowCategory
  }

  export type NestedEnumCashFlowCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CashFlowCategory | EnumCashFlowCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CashFlowCategory[] | ListEnumCashFlowCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CashFlowCategory[] | ListEnumCashFlowCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCashFlowCategoryWithAggregatesFilter<$PrismaModel> | $Enums.CashFlowCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCashFlowCategoryFilter<$PrismaModel>
    _max?: NestedEnumCashFlowCategoryFilter<$PrismaModel>
  }

  export type NestedEnumTeamUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamUserRole | EnumTeamUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TeamUserRole[] | ListEnumTeamUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeamUserRole[] | ListEnumTeamUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTeamUserRoleFilter<$PrismaModel> | $Enums.TeamUserRole
  }

  export type NestedEnumTeamUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamUserStatus | EnumTeamUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TeamUserStatus[] | ListEnumTeamUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeamUserStatus[] | ListEnumTeamUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTeamUserStatusFilter<$PrismaModel> | $Enums.TeamUserStatus
  }

  export type NestedEnumTeamUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamUserRole | EnumTeamUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TeamUserRole[] | ListEnumTeamUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeamUserRole[] | ListEnumTeamUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTeamUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.TeamUserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTeamUserRoleFilter<$PrismaModel>
    _max?: NestedEnumTeamUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumTeamUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamUserStatus | EnumTeamUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TeamUserStatus[] | ListEnumTeamUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeamUserStatus[] | ListEnumTeamUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTeamUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.TeamUserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTeamUserStatusFilter<$PrismaModel>
    _max?: NestedEnumTeamUserStatusFilter<$PrismaModel>
  }

  export type InventoryItemCreateWithoutFornecedorInput = {
    id?: string
    nome: string
    categoria: $Enums.InventoryCategory
    unidade: $Enums.UnitType
    estoqueAtual: Decimal | DecimalJsLike | number | string
    estoqueMinimo: Decimal | DecimalJsLike | number | string
    custoUnitario: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: StockMovementCreateNestedManyWithoutItemInput
  }

  export type InventoryItemUncheckedCreateWithoutFornecedorInput = {
    id?: string
    nome: string
    categoria: $Enums.InventoryCategory
    unidade: $Enums.UnitType
    estoqueAtual: Decimal | DecimalJsLike | number | string
    estoqueMinimo: Decimal | DecimalJsLike | number | string
    custoUnitario: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: StockMovementUncheckedCreateNestedManyWithoutItemInput
  }

  export type InventoryItemCreateOrConnectWithoutFornecedorInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutFornecedorInput, InventoryItemUncheckedCreateWithoutFornecedorInput>
  }

  export type InventoryItemCreateManyFornecedorInputEnvelope = {
    data: InventoryItemCreateManyFornecedorInput | InventoryItemCreateManyFornecedorInput[]
    skipDuplicates?: boolean
  }

  export type InventoryItemUpsertWithWhereUniqueWithoutFornecedorInput = {
    where: InventoryItemWhereUniqueInput
    update: XOR<InventoryItemUpdateWithoutFornecedorInput, InventoryItemUncheckedUpdateWithoutFornecedorInput>
    create: XOR<InventoryItemCreateWithoutFornecedorInput, InventoryItemUncheckedCreateWithoutFornecedorInput>
  }

  export type InventoryItemUpdateWithWhereUniqueWithoutFornecedorInput = {
    where: InventoryItemWhereUniqueInput
    data: XOR<InventoryItemUpdateWithoutFornecedorInput, InventoryItemUncheckedUpdateWithoutFornecedorInput>
  }

  export type InventoryItemUpdateManyWithWhereWithoutFornecedorInput = {
    where: InventoryItemScalarWhereInput
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyWithoutFornecedorInput>
  }

  export type InventoryItemScalarWhereInput = {
    AND?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
    OR?: InventoryItemScalarWhereInput[]
    NOT?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
    id?: StringFilter<"InventoryItem"> | string
    nome?: StringFilter<"InventoryItem"> | string
    categoria?: EnumInventoryCategoryFilter<"InventoryItem"> | $Enums.InventoryCategory
    unidade?: EnumUnitTypeFilter<"InventoryItem"> | $Enums.UnitType
    estoqueAtual?: DecimalFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    estoqueMinimo?: DecimalFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    custoUnitario?: DecimalFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    fornecedorId?: StringNullableFilter<"InventoryItem"> | string | null
    createdAt?: DateTimeFilter<"InventoryItem"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryItem"> | Date | string
  }

  export type SupplierCreateWithoutInventoryInput = {
    id?: string
    nomeFantasia: string
    documento: string
    contato: string
    telefone: string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierUncheckedCreateWithoutInventoryInput = {
    id?: string
    nomeFantasia: string
    documento: string
    contato: string
    telefone: string
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierCreateOrConnectWithoutInventoryInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutInventoryInput, SupplierUncheckedCreateWithoutInventoryInput>
  }

  export type StockMovementCreateWithoutItemInput = {
    id?: string
    data: Date | string
    tipo: $Enums.MovementType
    quantidade: Decimal | DecimalJsLike | number | string
    observacao: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockMovementUncheckedCreateWithoutItemInput = {
    id?: string
    data: Date | string
    tipo: $Enums.MovementType
    quantidade: Decimal | DecimalJsLike | number | string
    observacao: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockMovementCreateOrConnectWithoutItemInput = {
    where: StockMovementWhereUniqueInput
    create: XOR<StockMovementCreateWithoutItemInput, StockMovementUncheckedCreateWithoutItemInput>
  }

  export type StockMovementCreateManyItemInputEnvelope = {
    data: StockMovementCreateManyItemInput | StockMovementCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type SupplierUpsertWithoutInventoryInput = {
    update: XOR<SupplierUpdateWithoutInventoryInput, SupplierUncheckedUpdateWithoutInventoryInput>
    create: XOR<SupplierCreateWithoutInventoryInput, SupplierUncheckedCreateWithoutInventoryInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutInventoryInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutInventoryInput, SupplierUncheckedUpdateWithoutInventoryInput>
  }

  export type SupplierUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomeFantasia?: StringFieldUpdateOperationsInput | string
    documento?: StringFieldUpdateOperationsInput | string
    contato?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUpsertWithWhereUniqueWithoutItemInput = {
    where: StockMovementWhereUniqueInput
    update: XOR<StockMovementUpdateWithoutItemInput, StockMovementUncheckedUpdateWithoutItemInput>
    create: XOR<StockMovementCreateWithoutItemInput, StockMovementUncheckedCreateWithoutItemInput>
  }

  export type StockMovementUpdateWithWhereUniqueWithoutItemInput = {
    where: StockMovementWhereUniqueInput
    data: XOR<StockMovementUpdateWithoutItemInput, StockMovementUncheckedUpdateWithoutItemInput>
  }

  export type StockMovementUpdateManyWithWhereWithoutItemInput = {
    where: StockMovementScalarWhereInput
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyWithoutItemInput>
  }

  export type StockMovementScalarWhereInput = {
    AND?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
    OR?: StockMovementScalarWhereInput[]
    NOT?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
    id?: StringFilter<"StockMovement"> | string
    data?: DateTimeFilter<"StockMovement"> | Date | string
    itemId?: StringFilter<"StockMovement"> | string
    tipo?: EnumMovementTypeFilter<"StockMovement"> | $Enums.MovementType
    quantidade?: DecimalFilter<"StockMovement"> | Decimal | DecimalJsLike | number | string
    observacao?: StringFilter<"StockMovement"> | string
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
    updatedAt?: DateTimeFilter<"StockMovement"> | Date | string
  }

  export type InventoryItemCreateWithoutMovementsInput = {
    id?: string
    nome: string
    categoria: $Enums.InventoryCategory
    unidade: $Enums.UnitType
    estoqueAtual: Decimal | DecimalJsLike | number | string
    estoqueMinimo: Decimal | DecimalJsLike | number | string
    custoUnitario: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    fornecedor?: SupplierCreateNestedOneWithoutInventoryInput
  }

  export type InventoryItemUncheckedCreateWithoutMovementsInput = {
    id?: string
    nome: string
    categoria: $Enums.InventoryCategory
    unidade: $Enums.UnitType
    estoqueAtual: Decimal | DecimalJsLike | number | string
    estoqueMinimo: Decimal | DecimalJsLike | number | string
    custoUnitario: Decimal | DecimalJsLike | number | string
    fornecedorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryItemCreateOrConnectWithoutMovementsInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutMovementsInput, InventoryItemUncheckedCreateWithoutMovementsInput>
  }

  export type InventoryItemUpsertWithoutMovementsInput = {
    update: XOR<InventoryItemUpdateWithoutMovementsInput, InventoryItemUncheckedUpdateWithoutMovementsInput>
    create: XOR<InventoryItemCreateWithoutMovementsInput, InventoryItemUncheckedCreateWithoutMovementsInput>
    where?: InventoryItemWhereInput
  }

  export type InventoryItemUpdateToOneWithWhereWithoutMovementsInput = {
    where?: InventoryItemWhereInput
    data: XOR<InventoryItemUpdateWithoutMovementsInput, InventoryItemUncheckedUpdateWithoutMovementsInput>
  }

  export type InventoryItemUpdateWithoutMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: EnumInventoryCategoryFieldUpdateOperationsInput | $Enums.InventoryCategory
    unidade?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    estoqueAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estoqueMinimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fornecedor?: SupplierUpdateOneWithoutInventoryNestedInput
  }

  export type InventoryItemUncheckedUpdateWithoutMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: EnumInventoryCategoryFieldUpdateOperationsInput | $Enums.InventoryCategory
    unidade?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    estoqueAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estoqueMinimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fornecedorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemCreateManyFornecedorInput = {
    id?: string
    nome: string
    categoria: $Enums.InventoryCategory
    unidade: $Enums.UnitType
    estoqueAtual: Decimal | DecimalJsLike | number | string
    estoqueMinimo: Decimal | DecimalJsLike | number | string
    custoUnitario: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryItemUpdateWithoutFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: EnumInventoryCategoryFieldUpdateOperationsInput | $Enums.InventoryCategory
    unidade?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    estoqueAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estoqueMinimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: StockMovementUpdateManyWithoutItemNestedInput
  }

  export type InventoryItemUncheckedUpdateWithoutFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: EnumInventoryCategoryFieldUpdateOperationsInput | $Enums.InventoryCategory
    unidade?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    estoqueAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estoqueMinimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: StockMovementUncheckedUpdateManyWithoutItemNestedInput
  }

  export type InventoryItemUncheckedUpdateManyWithoutFornecedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: EnumInventoryCategoryFieldUpdateOperationsInput | $Enums.InventoryCategory
    unidade?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    estoqueAtual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estoqueMinimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    custoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementCreateManyItemInput = {
    id?: string
    data: Date | string
    tipo: $Enums.MovementType
    quantidade: Decimal | DecimalJsLike | number | string
    observacao: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockMovementUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateManyWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    observacao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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