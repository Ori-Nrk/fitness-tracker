import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fitness Tracker',
  description: 'Track your workouts, diet, and progress',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-primary text-primary-foreground shadow-md">
            <nav className="container mx-auto px-4 py-4">
              <ul className="flex space-x-4">
                <li><Link href="/dashboard" className="hover:underline">Dashboard</Link></li>
                <li><Link href="/workouts" className="hover:underline">Workouts</Link></li>
                <li><Link href="/diet" className="hover:underline">Diet</Link></li>
                <li><Link href="/progress" className="hover:underline">Progress</Link></li>
              </ul>
            </nav>
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-primary text-primary-foreground mt-8">
            <div className="container mx-auto px-4 py-4 text-center">
              © 2023 Fitness Tracker. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}