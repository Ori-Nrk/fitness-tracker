"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";

export default function ProgressPage() {
  const [showForm, setShowForm] = useState(false);
  const form = useForm({
    defaultValues: {
      weight: "",
      bodyFat: "",
      muscleMass: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Here you would typically send this data to your backend
    setShowForm(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Progress Tracker</h1>
      <div className="mb-8">
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "Log New Measurements"}
        </Button>
      </div>
      
      {showForm && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Log New Measurements</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="weight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Weight (kg)</FormLabel>
                      <FormControl>
                        <Input type="number" step="0.1" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter your current weight in kilograms.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bodyFat"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Body Fat (%)</FormLabel>
                      <FormControl>
                        <Input type="number" step="0.1" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter your current body fat percentage.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="muscleMass"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Muscle Mass (kg)</FormLabel>
                      <FormControl>
                        <Input type="number" step="0.1" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter your current muscle mass in kilograms.
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
          <CardTitle>Progress History</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-2">Date</th>
                <th className="pb-2">Weight (kg)</th>
                <th className="pb-2">Body Fat (%)</th>
                <th className="pb-2">Muscle Mass (kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">2023-06-01</td>
                <td>70</td>
                <td>18</td>
                <td>55</td>
              </tr>
              <tr>
                <td className="py-2">2023-05-15</td>
                <td>71</td>
                <td>19</td>
                <td>54</td>
              </tr>
              <tr>
                <td className="py-2">2023-05-01</td>
                <td>72</td>
                <td>19</td>
                <td>54</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}