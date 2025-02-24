// import { NextRequest, NextResponse } from 'next/server';
// import oracledb from 'oracledb';

// function assertEnv(name: string): string {
//   const value = process.env[name];
//   if (!value) {
//     throw new Error(`Missing environment variable: ${name}`);
//   }
//   return value;
// }

// export async function POST(request: NextRequest) {
//   let connection;

//   try {
//     const body = await request.json();
    
//     if (!body.title || !body.date || !body.time) {
//       return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
//     }

//     connection = await oracledb.getConnection({
//       user: assertEnv('ORACLE_USER'),
//       password: assertEnv('ORACLE_PASSWORD'),
//       connectString: assertEnv('ORACLE_CONNECTION_STRING')
//     });

//     const result = await connection.execute(
//       `INSERT INTO Reminder (UserID, ActivityID, ReminderTime, Title) 
//        VALUES (:userID, :activityID, TO_TIMESTAMP(:reminderTime, 'YYYY-MM-DD HH24:MI'), :title)`,
//       { 
//         userID: 1, // TODO: Replace with actual user ID from session
//         activityID: null, // TODO: Add activity selection to form if needed
//         reminderTime: `${body.date} ${body.time}`,
//         title: body.title
//       }
//     );

//     await connection.commit(); // Commit the transaction

//     return NextResponse.json({ message: 'Reminder set successfully', result });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json(
//       { error: 'Error setting reminder', details: err instanceof Error ? err.message : String(err) },
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

import { type NextRequest, NextResponse } from "next/server"
import { executeQuery } from "@/src/lib/db"

export async function GET() {
  try {
    const result = await executeQuery("SELECT * FROM REMINDER ORDER BY REMINDERTIME DESC")

    if (!result || !result.rows) {
      throw new Error("No data returned from the database")
    }

    console.log("Reminders fetched successfully:", result.rows)
    return NextResponse.json({ reminders: result.rows })
  } catch (err) {
    console.error("Error fetching reminders:", err)
    return NextResponse.json(
      {
        error: "Failed to fetch reminders",
        details: err instanceof Error ? err.message : String(err),
      },
      { status: 500 },
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!body.title || !body.date || !body.time) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const result = await executeQuery(
      `INSERT INTO REMINDER (UserID, ActivityID, ReminderTime, Title) 
       VALUES (:userID, :activityID, TO_TIMESTAMP(:reminderTime, 'YYYY-MM-DD HH24:MI'), :title)`,
      {
        userID: 1, // TODO: Replace with actual user ID from session
        activityID: null, // TODO: Add activity selection to form if needed
        reminderTime: `${body.date} ${body.time}`,
        title: body.title,
      },
    )

    if (!result) {
      throw new Error("No result returned from the database")
    }

    console.log("Reminder set successfully:", result)
    return NextResponse.json({
      message: "Reminder set successfully",
      result,
    })
  } catch (err) {
    console.error("Error setting reminder:", err)
    return NextResponse.json(
      {
        error: "Failed to set reminder",
        details: err instanceof Error ? err.message : String(err),
      },
      { status: 500 },
    )
  }
}

