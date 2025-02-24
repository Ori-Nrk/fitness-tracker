import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"

type Meal = {
  FOODID: number
  FOODNAME: string
  CALORIES: number
  PROTEIN: number
  CARBS: number
  FAT: number
  CREATEDAT: string
}

type MealListProps = {
  meals: Meal[]
}

export function MealList({ meals }: MealListProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recent Meals</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {meals.map((meal) => (
            <li key={meal.FOODID} className="border-b pb-2">
              <h3 className="font-semibold">{meal.FOODNAME}</h3>
              <p>Calories: {meal.CALORIES}</p>
              <p>Protein: {meal.PROTEIN}g</p>
              <p>Carbs: {meal.CARBS}g</p>
              <p>Fat: {meal.FAT}g</p>
              <p className="text-sm text-gray-500">{new Date(meal.CREATEDAT).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

