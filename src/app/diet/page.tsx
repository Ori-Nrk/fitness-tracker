"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";

export default function DietPage() {
  const [showForm, setShowForm] = useState(false);
  const form = useForm({
    defaultValues: {
      mealType: "",
      foodItem: "",
      calories: "",
      protein: "",
      carbs: "",
      fat: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Here you would typically send this data to your backend
    setShowForm(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Diet Tracker</h1>
      <div className="mb-8">
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "Log New Meal"}
        </Button>
      </div>
      
      {showForm && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Log New Meal</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="mealType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Meal Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select meal type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="breakfast">Breakfast</SelectItem>
                          <SelectItem value="lunch">Lunch</SelectItem>
                          <SelectItem value="dinner">Dinner</SelectItem>
                          <SelectItem value="snack">Snack</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Choose the type of meal you had.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="foodItem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Food Item</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="e.g. Grilled Chicken Salad" />
                      </FormControl>
                      <FormDescription>
                        Enter the name of the food item or dish.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="calories"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Calories</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter the number of calories.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="protein"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Protein (g)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="carbs"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Carbs (g)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fat"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fat (g)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
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
          <CardTitle>Today's Meals</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-2">Meal</th>
                <th className="pb-2">Food Item</th>
                <th className="pb-2">Calories</th>
                <th className="pb-2">Protein</th>
                <th className="pb-2">Carbs</th>
                <th className="pb-2">Fat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">Breakfast</td>
                <td>Oatmeal with fruits</td>
                <td>300</td>
                <td>10g</td>
                <td>50g</td>
                <td>5g</td>
              </tr>
              <tr>
                <td className="py-2">Lunch</td>
                <td>Grilled chicken salad</td>
                <td>400</td>
                <td>30g</td>
                <td>20g</td>
                <td>15g</td>
              </tr>
              <tr>
                <td className="py-2">Dinner</td>
                <td>Salmon with vegetables</td>
                <td>500</td>
                <td>35g</td>
                <td>30g</td>
                <td>20g</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}