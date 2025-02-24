declare module "oracledb" {
  export interface ConnectionAttributes {
    user: string
    password: string
    connectString: string
    autoCommit?: boolean
    stmtCacheSize?: number
    connectTimeout?: number
  }

  export interface ExecuteOptions {
    outFormat?: number
    autoCommit?: boolean
    extendedMetaData?: boolean
    fetchArraySize?: number
    maxRows?: number
  }

  export interface Connection {
    rollback(): Promise<void>
    commit(): Promise<void>
    execute(sql: string, binds?: any, options?: ExecuteOptions): Promise<Result>
    close(): Promise<void>
  }

  export interface Result {
    rows: any[]
    resultSet?: ResultSet
    metaData: ColumnMetaData[]
    rowsAffected?: number
    outBinds?: any[]
  }

  export interface ResultSet {
    close(): Promise<void>
    getRow(): Promise<any[]>
    getRows(numRows: number): Promise<any[]>
  }

  export interface ColumnMetaData {
    name: string
    dbType: number
    dbTypeString: string
    byteSize: number
    precision?: number
    scale?: number
    nullable?: boolean
  }

  export interface InitOracleClientOptions {
    libDir: string
    configDir?: string
    errorUrl?: string
    driverName?: string
  }

  export function getConnection(connectionAttributes: ConnectionAttributes): Promise<Connection>
  export function initOracleClient(options: InitOracleClientOptions): void

  export const OUT_FORMAT_OBJECT: number
  export const OUT_FORMAT_ARRAY: number

  export let thin: boolean

  // Add other constants and types as needed
  export const DEFAULT: number
  export const DB_TYPE_VARCHAR: number
  export const DB_TYPE_NUMBER: number
  export const DB_TYPE_DATE: number
  // ... other DB_TYPE constants

  export const BIND_IN: number
  export const BIND_INOUT: number
  export const BIND_OUT: number

  export const STRING: number
  export const NUMBER: number
  export const DATE: number
  // ... other data type constants
}

