"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Button } from "@/src/components/ui/button"

export default function FitnessTracker() {
  const [workout, setWorkout] = useState({
    name: "",
    type: "",
    duration: "",
    caloriesBurned: "",
  })

  const [meal, setMeal] = useState({
    name: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
  })

  const [reminder, setReminder] = useState({
    title: "",
    date: "",
    time: "",
  })

  const [errors, setErrors] = useState({
    workouts: "",
    meals: "",
    reminders: "",
  })

  const handleWorkoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/workouts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(workout),
      })
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      setWorkout({ name: "", type: "", duration: "", caloriesBurned: "" })
      setErrors((prev) => ({ ...prev, workouts: "" }))
    } catch (error) {
      setErrors((prev) => ({ ...prev, workouts: "Failed to log workout" }))
    }
  }

  const handleMealSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/meals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(meal),
      })
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      setMeal({ name: "", calories: "", protein: "", carbs: "", fat: "" })
      setErrors((prev) => ({ ...prev, meals: "" }))
    } catch (error) {
      setErrors((prev) => ({ ...prev, meals: "Failed to log meal" }))
    }
  }

  const handleReminderSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/reminders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reminder),
      })
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      setReminder({ title: "", date: "", time: "" })
      setErrors((prev) => ({ ...prev, reminders: "" }))
    } catch (error) {
      setErrors((prev) => ({ ...prev, reminders: "Failed to set reminder" }))
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="flex h-16 items-center px-4">
          <h1 className="text-xl font-semibold">Fitness Tracker</h1>
          <nav className="ml-6 flex items-center space-x-4">
            <a href="#" className="text-sm font-medium">
              Dashboard
            </a>
            <a href="#" className="text-sm font-medium">
              Workouts
            </a>
            <a href="#" className="text-sm font-medium">
              Diet
            </a>
            <a href="#" className="text-sm font-medium">
              Progress
            </a>
          </nav>
        </div>
      </nav>

      <main className="container mx-auto p-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Workout Form */}
          <Card>
            <CardHeader>
              <CardTitle>Log a Workout</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleWorkoutSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="workoutName">Workout Name</Label>
                  <Input
                    id="workoutName"
                    value={workout.name}
                    onChange={(e) => setWorkout((prev) => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="workoutType">Type</Label>
                  <Input
                    id="workoutType"
                    value={workout.type}
                    onChange={(e) => setWorkout((prev) => ({ ...prev, type: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (minutes)</Label>
                  <Input
                    id="duration"
                    type="number"
                    value={workout.duration}
                    onChange={(e) => setWorkout((prev) => ({ ...prev, duration: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="caloriesBurned">Calories Burned</Label>
                  <Input
                    id="caloriesBurned"
                    type="number"
                    value={workout.caloriesBurned}
                    onChange={(e) => setWorkout((prev) => ({ ...prev, caloriesBurned: e.target.value }))}
                    required
                  />
                </div>
                <Button type="submit">Log Workout</Button>
                {errors.workouts && <p className="text-sm text-red-500 mt-2">{errors.workouts}</p>}
              </form>
            </CardContent>
          </Card>

          {/* Meal Form */}
          <Card>
            <CardHeader>
              <CardTitle>Log a Meal</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleMealSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="mealName">Meal Name</Label>
                  <Input
                    id="mealName"
                    value={meal.name}
                    onChange={(e) => setMeal((prev) => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="calories">Calories</Label>
                  <Input
                    id="calories"
                    type="number"
                    value={meal.calories}
                    onChange={(e) => setMeal((prev) => ({ ...prev, calories: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="protein">Protein (g)</Label>
                  <Input
                    id="protein"
                    type="number"
                    value={meal.protein}
                    onChange={(e) => setMeal((prev) => ({ ...prev, protein: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="carbs">Carbs (g)</Label>
                  <Input
                    id="carbs"
                    type="number"
                    value={meal.carbs}
                    onChange={(e) => setMeal((prev) => ({ ...prev, carbs: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fat">Fat (g)</Label>
                  <Input
                    id="fat"
                    type="number"
                    value={meal.fat}
                    onChange={(e) => setMeal((prev) => ({ ...prev, fat: e.target.value }))}
                    required
                  />
                </div>
                <Button type="submit">Log Meal</Button>
                {errors.meals && <p className="text-sm text-red-500 mt-2">{errors.meals}</p>}
              </form>
            </CardContent>
          </Card>

          {/* Reminder Form */}
          <Card>
            <CardHeader>
              <CardTitle>Set a Reminder</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleReminderSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="reminderTitle">Reminder Title</Label>
                  <Input
                    id="reminderTitle"
                    value={reminder.title}
                    onChange={(e) => setReminder((prev) => ({ ...prev, title: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={reminder.date}
                    onChange={(e) => setReminder((prev) => ({ ...prev, date: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={reminder.time}
                    onChange={(e) => setReminder((prev) => ({ ...prev, time: e.target.value }))}
                    required
                  />
                </div>
                <Button type="submit">Set Reminder</Button>
                {errors.reminders && <p className="text-sm text-red-500 mt-2">{errors.reminders}</p>}
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Lists Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Workouts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">No recent workouts</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Meals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">No recent meals</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Reminders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">No upcoming reminders</div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

