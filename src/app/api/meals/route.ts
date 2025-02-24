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
    
//     if (!body.name || !body.calories || !body.protein || !body.carbs || !body.fat) {
//       return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
//     }

//     connection = await oracledb.getConnection({
//       user: assertEnv('ORACLE_USER'),
//       password: assertEnv('ORACLE_PASSWORD'),
//       connectString: assertEnv('ORACLE_CONNECTION_STRING')
//     });

//     const result = await connection.execute(
//       `INSERT INTO Food (FoodName, Calories, Protein, Carbs, Fat) 
//        VALUES (:name, :calories, :protein, :carbs, :fat)`,
//       { 
//         name: body.name,
//         calories: body.calories,
//         protein: body.protein,
//         carbs: body.carbs,
//         fat: body.fat
//       }
//     );

//     await connection.commit(); // Commit the transaction

//     return NextResponse.json({ message: 'Meal logged successfully', result });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json(
//       { error: 'Error logging meal', details: err instanceof Error ? err.message : String(err) },
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!body.name || !body.calories || !body.protein || !body.carbs || !body.fat) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const result = await executeQuery(
      `INSERT INTO FOOD (UserID, FoodName, Calories, Protein, Carbs, Fat) 
       VALUES (:userID, :name, :calories, :protein, :carbs, :fat)`,
      {
        userID: 1, // TODO: Replace with actual user ID from session
        name: body.name,
        calories: Number(body.calories),
        protein: Number(body.protein),
        carbs: Number(body.carbs),
        fat: Number(body.fat),
      },
    )

    return NextResponse.json({
      message: "Meal logged successfully",
      result,
    })
  } catch (err) {
    console.error("Error logging meal:", err)
    return NextResponse.json(
      {
        error: "Failed to log meal",
        details: err instanceof Error ? err.message : String(err),
      },
      { status: 500 },
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const result = await executeQuery("SELECT * FROM FOOD ORDER BY CreatedAt DESC")

    return NextResponse.json({ meals: result.rows })
  } catch (err) {
    console.error("Error fetching meals:", err)
    return NextResponse.json(
      {
        error: "Failed to fetch meals",
        details: err instanceof Error ? err.message : String(err),
      },
      { status: 500 },
    )
  }
}

