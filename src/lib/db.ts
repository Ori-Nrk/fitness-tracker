import * as oracledb from "oracledb"
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

// Initialize Oracle client
try {
  // Set Oracle client directory - adjust path according to your installation
  oracledb.initOracleClient({ libDir: '/opt/oracle/instantclient_19_8' });
} catch (err) {
  console.warn('Oracle Client library already initialized');
}

// Get a connection from the pool
export async function getConnection() {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.ORACLE_USER!,
      password: process.env.ORACLE_PASSWORD!,
      connectString: process.env.ORACLE_CONNECT_STRING!
    });
    return connection;
  } catch (err) {
    console.error('Error getting connection:', err);
    throw err;
  }
}

// Execute a query and return results
export async function executeQuery(sql: string, params: any[] = []) {
  let connection;
  try {
    connection = await getConnection();
    const result = await connection.execute(sql, params, { outFormat: oracledb.OUT_FORMAT_OBJECT });
    return result.rows;
  } catch (err) {
    console.error('Error executing query:', err);
    throw err;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
}

