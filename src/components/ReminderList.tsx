import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"

type Reminder = {
  REMINDERID: number
  TITLE: string
  REMINDERTIME: string
}

type ReminderListProps = {
  reminders: Reminder[]
}

export function ReminderList({ reminders }: ReminderListProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Upcoming Reminders</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {reminders.map((reminder) => (
            <li key={reminder.REMINDERID} className="border-b pb-2">
              <h3 className="font-semibold">{reminder.TITLE}</h3>
              <p>Time: {new Date(reminder.REMINDERTIME).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

