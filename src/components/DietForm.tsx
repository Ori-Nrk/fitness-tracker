
// import React, { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// export function DietForm() {
//   const [meal, setMeal] = useState({
//     name: '',
//     calories: '',
//     protein: '',
//     carbs: '',
//     fat: '',
//   });
//   const [message, setMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setMessage('');
//     setIsLoading(true);

//     try {
//       const response = await fetch('/api/meals', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(meal),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage('Meal logged successfully!');
//         setMeal({ name: '', calories: '', protein: '', carbs: '', fat: '' });
//       } else {
//         setMessage(`Error: ${data.error || 'Failed to log meal'}`);
//       }
//     } catch (error) {
//       setMessage('An error occurred while logging the meal.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Card className="w-full max-w-md mx-auto">
//       <CardHeader>
//         <CardTitle>Log a Meal</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="name">Meal Name</Label>
//             <Input
//               id="name"
//               value={meal.name}
//               onChange={(e) => setMeal({ ...meal, name: e.target.value })}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="calories">Calories</Label>
//             <Input
//               id="calories"
//               type="number"
//               value={meal.calories}
//               onChange={(e) => setMeal({ ...meal, calories: e.target.value })}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="protein">Protein (g)</Label>
//             <Input
//               id="protein"
//               type="number"
//               value={meal.protein}
//               onChange={(e) => setMeal({ ...meal, protein: e.target.value })}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="carbs">Carbs (g)</Label>
//             <Input
//               id="carbs"
//               type="number"
//               value={meal.carbs}
//               onChange={(e) => setMeal({ ...meal, carbs: e.target.value })}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="fat">Fat (g)</Label>
//             <Input
//               id="fat"
//               type="number"
//               value={meal.fat}
//               onChange={(e) => setMeal({ ...meal, fat: e.target.value })}
//               required
//             />
//           </div>
//           <Button type="submit" disabled={isLoading}>
//             {isLoading ? 'Logging Meal...' : 'Log Meal'}
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

interface DietFormProps {
  onMealAdded: () => void
}

export function DietForm({ onMealAdded }: DietFormProps) {
  const [meal, setMeal] = useState({
    name: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
  })
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/meals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(meal),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage("Meal logged successfully!")
        setMeal({ name: "", calories: "", protein: "", carbs: "", fat: "" })
        onMealAdded() // Call this function to refresh the meal list
      } else {
        setMessage(`Error: ${data.error || "Failed to log meal"}`)
      }
    } catch (error) {
      setMessage("An error occurred while logging the meal.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto mb-8">
      <CardHeader>
        <CardTitle>Log a Meal</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Meal Name</Label>
            <Input id="name" value={meal.name} onChange={(e) => setMeal({ ...meal, name: e.target.value })} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="calories">Calories</Label>
            <Input
              id="calories"
              type="number"
              value={meal.calories}
              onChange={(e) => setMeal({ ...meal, calories: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="protein">Protein (g)</Label>
            <Input
              id="protein"
              type="number"
              value={meal.protein}
              onChange={(e) => setMeal({ ...meal, protein: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="carbs">Carbs (g)</Label>
            <Input
              id="carbs"
              type="number"
              value={meal.carbs}
              onChange={(e) => setMeal({ ...meal, carbs: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fat">Fat (g)</Label>
            <Input
              id="fat"
              type="number"
              value={meal.fat}
              onChange={(e) => setMeal({ ...meal, fat: e.target.value })}
              required
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Logging Meal..." : "Log Meal"}
          </Button>
          {message && <p className="mt-4 text-sm text-center">{message}</p>}
        </form>
      </CardContent>
    </Card>
  )
}

