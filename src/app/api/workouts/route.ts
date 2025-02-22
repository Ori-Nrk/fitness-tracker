// import { NextResponse } from 'next/server';
// import { getServerSession } from "next-auth/next";
// import { db } from '@/lib/db"
// import oracledb from 'oracledb';

// export async function GET() {
//   const session = await getServerSession();
//   if (!session || !session.user) {
//     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//   }

//   try {
//     const connection = await db.connect();
//     const result = await connection.execute(
//       'SELECT * FROM workouts WHERE user_id = :userId',
//       { userId: session.user.id },
//       { outFormat: oracledb.OUT_FORMAT_OBJECT }
//     );
//     await connection.close();

//     return NextResponse.json(result.rows);
//   } catch (error) {
//     console.error('Error fetching workouts:', error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }

// export async function POST(request: Request) {
//   const session = await getServerSession();
//   if (!session || !session.user) {
//     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//   }

//   try {
//     const { name, type, duration, caloriesBurned } = await request.json();
//     const connection = await db.connect();
//     const result = await connection.execute(
//       'INSERT INTO workouts (user_id, name, type, duration, calories_burned) VALUES (:userId, :name, :type, :duration, :caloriesBurned)',
//       { userId: session.user.id, name, type, duration, caloriesBurned },
//       { autoCommit: true }
//     );
//     await connection.close();

//     return NextResponse.json({ message: 'Workout logged successfully' });
//   } catch (error) {
//     console.error('Error logging workout:', error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }

import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next";
import { db } from '@/lib/db';
import oracledb from 'oracledb';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const connection = await db.connect();
    try {
      const result = await connection.execute(
        'SELECT * FROM workouts WHERE user_id = :userId',
        { userId: session.user.id },
        { outFormat: oracledb.OUT_FORMAT_OBJECT }
      );
      return NextResponse.json(result.rows);
    } finally {
      await connection.close();
    }
  } catch (error) {
    console.error('Error fetching workouts:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { name, type, duration, caloriesBurned } = await request.json();
    const connection = await db.connect();
    try {
      await connection.execute(
        'INSERT INTO workouts (user_id, name, type, duration, calories_burned) VALUES (:userId, :name, :type, :duration, :caloriesBurned)',
        { userId: session.user.id, name, type, duration, caloriesBurned }
      );
      return NextResponse.json({ message: 'Workout logged successfully' });
    } finally {
      await connection.close();
    }
  } catch (error) {
    console.error('Error logging workout:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}