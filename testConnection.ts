import * as oracledb from 'oracledb';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

// Verify environment variables are loaded
if (!process.env.ORACLE_USER || !process.env.ORACLE_PASSWORD || !process.env.ORACLE_CONNECT_STRING) {
  console.error('Missing required environment variables');
  process.exit(1);
}

async function testConnection() {
  try {
    console.log('Attempting to connect to Oracle database...');
    console.log('Environment variables:', {
      user: process.env.ORACLE_USER,
      connectString: process.env.ORACLE_CONNECT_STRING
    });
    
    const connection = await oracledb.getConnection({
      user: process.env.ORACLE_USER as string,
      password: process.env.ORACLE_PASSWORD as string,
      connectString: process.env.ORACLE_CONNECT_STRING as string
    });

    console.log('Successfully connected!');
    const result = await connection.execute('SELECT 1 FROM DUAL');
    console.log('Test query result:', result);
    await connection.close();

  } catch (err) {
    if (err instanceof Error) {
      console.error('Connection error details:', {
        errorMessage: err.message,
        cause: err.cause
      });
    } else {
      console.error('Unknown error:', err);
    }
  }
}

testConnection();