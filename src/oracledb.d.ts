declare module 'oracledb' {
    export interface ConnectionAttributes {
      user: string;
      password: string;
      connectString: string;
      autoCommit?: boolean;
    }
  
    export interface ExecuteOptions {
      outFormat?: number;
    }
  
    export interface Connection {
      execute(sql: string, binds: any, options?: ExecuteOptions): Promise<any>;
      close(): Promise<void>;
    }
  
    export function getConnection(connectionAttributes: ConnectionAttributes): Promise<Connection>;
  
    export const OUT_FORMAT_OBJECT: number;
  }