"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";

export default function WorkoutsPage() {
  const [showForm, setShowForm] = useState(false);
  const form = useForm({
    defaultValues: {
      workoutType: "",
      duration: "",
      caloriesBurned: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Here you would typically send this data to your backend
    setShowForm(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Workouts</h1>
      <div className="mb-8">
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "Log New Workout"}
        </Button>
      </div>
      
      {showForm && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Log New Workout</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="workoutType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Workout Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select workout type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="running">Running</SelectItem>
                          <SelectItem value="weightlifting">Weightlifting</SelectItem>
                          <SelectItem value="yoga">Yoga</SelectItem>
                          <SelectItem value="cycling">Cycling</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Choose the type of workout you did.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Duration (minutes)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter the duration of your workout in minutes.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="caloriesBurned"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Calories Burned</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormDescription>
                        Estimate the number of calories burned during your workout.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Recent Workouts</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-2">Date</th>
                <th className="pb-2">Type</th>
                <th className="pb-2">Duration</th>
                <th className="pb-2">Calories Burned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">2023-06-01</td>
                <td>Running</td>
                <td>30 mins</td>
                <td>300 kcal</td>
              </tr>
              <tr>
                <td className="py-2">2023-05-30</td>
                <td>Weight Training</td>
                <td>45 mins</td>
                <td>200 kcal</td>
              </tr>
              <tr>
                <td className="py-2">2023-05-28</td>
                <td>Yoga</td>
                <td>60 mins</td>
                <td>150 kcal</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}