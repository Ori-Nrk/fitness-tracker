// // import { NextRequest, NextResponse } from 'next/server';
// // import oracledb from 'oracledb';

// // function assertEnv(name: string): string {
// //   const value = process.env[name];
// //   if (!value) {
// //     throw new Error(`Missing environment variable: ${name}`);
// //   }
// //   return value;
// // }

// // export async function POST(request: NextRequest) {
// //   let connection;

// //   try {
// //     const body = await request.json();
    
// //     if (!body.name || !body.type || !body.duration || !body.caloriesBurned) {
// //       return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
// //     }

// //     connection = await oracledb.getConnection({
// //       user: assertEnv('ORACLE_USER'),
// //       password: assertEnv('ORACLE_PASSWORD'),
// //       connectString: assertEnv('ORACLE_CONNECTION_STRING')
// //     });

// //     const result = await connection.execute(
// //       `INSERT INTO Activity (ActivityName, ActivityType, Duration, CaloriesBurned) 
// //        VALUES (:name, :type, :duration, :caloriesBurned)`,
// //       { 
// //         name: body.name,
// //         type: body.type,
// //         duration: body.duration,
// //         caloriesBurned: body.caloriesBurned
// //       }
// //     );

// //     await connection.commit(); // Commit the transaction

// //     return NextResponse.json({ message: 'Workout logged successfully', result });
// //   } catch (err) {
// //     console.error(err);
// //     return NextResponse.json(
// //       { error: 'Error logging workout', details: err instanceof Error ? err.message : String(err) },
// //       { status: 500 }
// //     );
// //   } finally {
// //     if (connection) {
// //       try {
// //         await connection.close();
// //       } catch (err) {
// //         console.error('Error closing connection:', err instanceof Error ? err.message : String(err));
// //       }
// //     }
// //   }
// // }

// import { NextRequest, NextResponse } from 'next/server';
// import { executeQuery } from '@/lib/db';

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
    
//     if (!body.name || !body.type || !body.duration || !body.caloriesBurned) {
//       return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
//     }

//     const result = await executeQuery(
//       `INSERT INTO ACTIVITY (UserID, ActivityName, ActivityType, Duration, CaloriesBurned) 
//        VALUES (:userID, :name, :type, :duration, :caloriesBurned)`,
//       { 
//         userID: 1, // TODO: Replace with actual user ID from session
//         name: body.name,
//         type: body.type,
//         duration: Number(body.duration),
//         caloriesBurned: Number(body.caloriesBurned)
//       }
//     );

//     return NextResponse.json({ 
//       message: 'Workout logged successfully',
//       result 
//     });
//   } catch (err) {
//     console.error('Error logging workout:', err);
//     return NextResponse.json(
//       { 
//         error: 'Failed to log workout', 
//         details: err instanceof Error ? err.message : String(err) 
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function GET(request: NextRequest) {
//   try {
//     const result = await executeQuery(
//       'SELECT * FROM ACTIVITY ORDER BY CreatedAt DESC'
//     );

//     return NextResponse.json({ workouts: result.rows });
//   } catch (err) {
//     console.error('Error fetching workouts:', err);
//     return NextResponse.json(
//       { 
//         error: 'Failed to fetch workouts', 
//         details: err instanceof Error ? err.message : String(err) 
//       },
//       { status: 500 }
//     );
//   }
// }

// import { type NextRequest, NextResponse } from "next/server"
// import { executeQuery } from "@/lib/db"

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json()

//     if (!body.name || !body.type || !body.duration || !body.caloriesBurned) {
//       return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
//     }

//     const result = await executeQuery(
//       `INSERT INTO ACTIVITY (UserID, ActivityName, ActivityType, Duration, CaloriesBurned) 
//        VALUES (:userID, :name, :type, :duration, :caloriesBurned)`,
//       {
//         userID: 1, // TODO: Replace with actual user ID from session
//         name: body.name,
//         type: body.type,
//         duration: Number(body.duration),
//         caloriesBurned: Number(body.caloriesBurned),
//       },
//     )

//     return NextResponse.json({
//       message: "Workout logged successfully",
//       result,
//     })
//   } catch (err) {
//     console.error("Error logging workout:", err)
//     return NextResponse.json(
//       {
//         error: "Failed to log workout",
//         details: err instanceof Error ? err.message : String(err),
//       },
//       { status: 500 },
//     )
//   }
// }

// export async function GET(request: NextRequest) {
//   try {
//     const result = await executeQuery("SELECT * FROM ACTIVITY ORDER BY CreatedAt DESC")

//     return NextResponse.json({ workouts: result.rows })
//   } catch (err) {
//     console.error("Error fetching workouts:", err)
//     return NextResponse.json(
//       {
//         error: "Failed to fetch workouts",
//         details: err instanceof Error ? err.message : String(err),
//       },
//       { status: 500 },
//     )
//   }
// }

// import { type NextRequest, NextResponse } from "next/server"
// import { executeQuery } from "@/src/lib/db"

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json()

//     if (!body.name || !body.type || !body.duration || !body.caloriesBurned) {
//       return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
//     }

//     const result = await executeQuery(
//       `INSERT INTO ACTIVITY (UserID, ActivityName, ActivityType, Duration, CaloriesBurned) 
//        VALUES (:userID, :name, :type, :duration, :caloriesBurned)`,
//       {
//         userID: 1, // TODO: Replace with actual user ID from session
//         name: body.name,
//         type: body.type,
//         duration: Number(body.duration),
//         caloriesBurned: Number(body.caloriesBurned),
//       },
//     )

//     return NextResponse.json({
//       message: "Workout logged successfully",
//       result,
//     })
//   } catch (err) {
//     console.error("Error logging workout:", err)
//     return NextResponse.json(
//       {
//         error: "Failed to log workout",
//         details: err instanceof Error ? err.message : String(err),
//       },
//       { status: 500 },
//     )
//   }
// }

// export async function GET() {
//   try {
//     const result = await executeQuery("SELECT * FROM ACTIVITY ORDER BY CREATEDAT DESC")

//     return NextResponse.json({ workouts: result.rows })
//   } catch (err) {
//     console.error("Error fetching workouts:", err)
//     return NextResponse.json(
//       {
//         error: "Failed to fetch workouts",
//         details: err instanceof Error ? err.message : String(err),
//       },
//       { status: 500 },
//     )
//   }
// }

import { NextResponse } from "next/server"
import { executeQuery } from "@/src/lib/db"

export async function GET() {
  try {
    const result = await executeQuery("SELECT * FROM ACTIVITY ORDER BY CREATEDAT DESC")

    console.log("Workouts fetched successfully:", result.rows)
    return NextResponse.json({ workouts: result.rows })
  } catch (err) {
    console.error("Error fetching workouts:", err)
    return NextResponse.json(
      {
        error: "Failed to fetch workouts",
        details: err instanceof Error ? err.message : String(err),
      },
      { status: 500 },
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (!body.name || !body.type || !body.duration || !body.caloriesBurned) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const result = await executeQuery(
      `INSERT INTO ACTIVITY (UserID, ActivityName, ActivityType, Duration, CaloriesBurned) 
       VALUES (:userID, :name, :type, :duration, :caloriesBurned)`,
      {
        userID: 1, // TODO: Replace with actual user ID from session
        name: body.name,
        type: body.type,
        duration: Number(body.duration),
        caloriesBurned: Number(body.caloriesBurned),
      },
    )

    console.log("Workout logged successfully:", result)
    return NextResponse.json({
      message: "Workout logged successfully",
      result,
    })
  } catch (err) {
    console.error("Error logging workout:", err)
    return NextResponse.json(
      {
        error: "Failed to log workout",
        details: err instanceof Error ? err.message : String(err),
      },
      { status: 500 },
    )
  }
}

