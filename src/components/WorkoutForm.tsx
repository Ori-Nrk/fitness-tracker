// 

// import React, { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// export function WorkoutForm() {
//   const [workout, setWorkout] = useState({
//     name: '',
//     type: '',
//     duration: '',
//     caloriesBurned: '',
//   });
//   const [message, setMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setMessage('');
//     setIsLoading(true);

//     try {
//       const response = await fetch('/api/workouts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(workout),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage('Workout logged successfully!');
//         setWorkout({ name: '', type: '', duration: '', caloriesBurned: '' });
//       } else {
//         setMessage(`Error: ${data.error || 'Failed to log workout'}`);
//       }
//     } catch (error) {
//       setMessage('An error occurred while logging the workout.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Card className="w-full max-w-md mx-auto">
//       <CardHeader>
//         <CardTitle>Log a Workout</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="name">Workout Name</Label>
//             <Input
//               id="name"
//               value={workout.name}
//               onChange={(e) => setWorkout({ ...workout, name: e.target.value })}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="type">Type</Label>
//             <Input
//               id="type"
//               value={workout.type}
//               onChange={(e) => setWorkout({ ...workout, type: e.target.value })}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="duration">Duration (minutes)</Label>
//             <Input
//               id="duration"
//               type="number"
//               value={workout.duration}
//               onChange={(e) => setWorkout({ ...workout, duration: e.target.value })}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="caloriesBurned">Calories Burned</Label>
//             <Input
//               id="caloriesBurned"
//               type="number"
//               value={workout.caloriesBurned}
//               onChange={(e) => setWorkout({ ...workout, caloriesBurned: e.target.value })}
//               required
//             />
//           </div>
//           <Button type="submit" disabled={isLoading}>
//             {isLoading ? 'Logging Workout...' : 'Log Workout'}
//           </Button>
//           {message && <p className="mt-4 text-sm text-center">{message}</p>}
//         </form>
//       </CardContent>
//     </Card>
//   );
// }

"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"

interface WorkoutFormProps {
  onWorkoutAdded: () => void
}

export function WorkoutForm({ onWorkoutAdded }: WorkoutFormProps) {
  const [workout, setWorkout] = useState({
    name: "",
    type: "",
    duration: "",
    caloriesBurned: "",
  })
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/workouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workout),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage("Workout logged successfully!")
        setWorkout({ name: "", type: "", duration: "", caloriesBurned: "" })
        onWorkoutAdded() // Call this function to refresh the workout list
      } else {
        setMessage(`Error: ${data.error || "Failed to log workout"}`)
      }
    } catch (error) {
      setMessage("An error occurred while logging the workout.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto mb-8">
      <CardHeader>
        <CardTitle>Log a Workout</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Workout Name</Label>
            <Input
              id="name"
              value={workout.name}
              onChange={(e) => setWorkout({ ...workout, name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="type">Type</Label>
            <Input
              id="type"
              value={workout.type}
              onChange={(e) => setWorkout({ ...workout, type: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="duration">Duration (minutes)</Label>
            <Input
              id="duration"
              type="number"
              value={workout.duration}
              onChange={(e) => setWorkout({ ...workout, duration: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="caloriesBurned">Calories Burned</Label>
            <Input
              id="caloriesBurned"
              type="number"
              value={workout.caloriesBurned}
              onChange={(e) => setWorkout({ ...workout, caloriesBurned: e.target.value })}
              required
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Logging Workout..." : "Log Workout"}
          </Button>
          {message && <p className="mt-4 text-sm text-center">{message}</p>}
        </form>
      </CardContent>
    </Card>
  )
}

