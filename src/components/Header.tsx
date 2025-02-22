import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Fitness Tracker
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/dashboard" className="hover:underline">Dashboard</Link></li>
            <li><Link href="/workouts" className="hover:underline">Workouts</Link></li>
            <li><Link href="/diet" className="hover:underline">Diet</Link></li>
            <li><Link href="/progress" className="hover:underline">Progress</Link></li>
            <li><Link href="/reminders" className="hover:underline">Reminders</Link></li>
            {session ? (
              <li><button onClick={() => signOut()} className="hover:underline">Sign Out</button></li>
            ) : (
              <li><Link href="/api/auth/signin" className="hover:underline">Sign In</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}