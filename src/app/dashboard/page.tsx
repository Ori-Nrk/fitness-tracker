"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Workouts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Running - 30 mins</li>
              <li>Weight Training - 45 mins</li>
              <li>Yoga - 60 mins</li>
            </ul>
            <Link href="/workouts" className="block mt-4">
              <Button variant="outline" className="w-full">
                View All Workouts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Meals</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Breakfast - Oatmeal with fruits</li>
              <li>Lunch - Grilled chicken salad</li>
              <li>Dinner - Salmon with vegetables</li>
            </ul>
            <Link href="/diet" className="block mt-4">
              <Button variant="outline" className="w-full">
                View Diet Log
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Progress Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Weight: 70kg (-2kg this month)</p>
            <p>Body Fat: 18% (-1% this month)</p>
            <p>Muscle Mass: 55kg (+1kg this month)</p>
            <Link href="/progress" className="block mt-4">
              <Button variant="outline" className="w-full">
                View Detailed Progress
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}