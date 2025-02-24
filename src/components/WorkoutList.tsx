import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"

type Workout = {
  ACTIVITYID: number
  ACTIVITYNAME: string
  ACTIVITYTYPE: string
  DURATION: number
  CALORIESBURNED: number
  CREATEDAT: string
}

type WorkoutListProps = {
  workouts: Workout[]
}

export function WorkoutList({ workouts }: WorkoutListProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recent Workouts</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {workouts.map((workout) => (
            <li key={workout.ACTIVITYID} className="border-b pb-2">
              <h3 className="font-semibold">{workout.ACTIVITYNAME}</h3>
              <p>Type: {workout.ACTIVITYTYPE}</p>
              <p>Duration: {workout.DURATION} minutes</p>
              <p>Calories Burned: {workout.CALORIESBURNED}</p>
              <p className="text-sm text-gray-500">{new Date(workout.CREATEDAT).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

