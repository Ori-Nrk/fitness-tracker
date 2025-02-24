// import { NextRequest, NextResponse } from 'next/server';
// import oracledb from 'oracledb';

// function assertEnv(name: string): string {
//   const value = process.env[name];
//   if (!value) {
//     throw new Error(`Missing environment variable: ${name}`);
//   }
//   return value;
// }

// export async function GET(request: NextRequest) {
//   let connection;

//   try {
//     connection = await oracledb.getConnection({
//       user: assertEnv('ORACLE_USER'),
//       password: assertEnv('ORACLE_PASSWORD'),
//       connectString: assertEnv('ORACLE_CONNECTION_STRING')
//     });

//     const result = await connection.execute(
//       'SELECT 1 AS test FROM DUAL',
//       {}, // Empty bind object (required)
//       { outFormat: oracledb.OUT_FORMAT_OBJECT } // Options to return results as objects
//     );
    
//     return NextResponse.json({ 
//       message: 'Successfully connected to Oracle database',
//       result 
//     });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json(
//       { 
//         error: 'Failed to connect to database', 
//         details: err instanceof Error ? err.message : String(err) 
//       },
//       { status: 500 }
//     );
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error('Error closing connection:', err instanceof Error ? err.message : String(err));
//       }
//     }
//   }
// }

import { NextRequest, NextResponse } from 'next/server';
import { executeQuery } from '@/src/lib/db';

export async function GET(request: NextRequest) {
  try {
    const result = await executeQuery(
      'SELECT table_name FROM user_tables'
    );
    
    return NextResponse.json({ 
      message: 'Successfully connected to Oracle database',
      tables: result.rows 
    });
  } catch (err) {
    console.error('Database connection error:', err);
    return NextResponse.json(
      { 
        error: 'Failed to connect to database', 
        details: err instanceof Error ? err.message : String(err) 
      },
      { status: 500 }
    );
  }
}