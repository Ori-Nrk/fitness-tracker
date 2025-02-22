import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight, Dumbbell, Apple, Target } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Track Your Fitness Journey
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Achieve your fitness goals with our comprehensive tracking platform. Monitor workouts, diet, and progress all in one place.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/dashboard">
                <Button size="lg" className="inline-flex items-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-4 bg-blue-50 rounded-full">
                <Dumbbell className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold">Track Workouts</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Log and monitor your exercise routines with detailed tracking of sets, reps, and progress.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-4 bg-green-50 rounded-full">
                <Apple className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold">Monitor Diet</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Keep track of your daily nutrition with our comprehensive diet logging system.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-4 bg-purple-50 rounded-full">
                <Target className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold">Set Goals</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Set and track your fitness goals with progress monitoring and achievement tracking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}