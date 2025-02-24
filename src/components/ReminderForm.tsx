// 

// import React, { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// export function ReminderForm() {
//   const [reminder, setReminder] = useState({
//     title: '',
//     date: '',
//     time: '',
//   });
//   const [message, setMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setMessage('');
//     setIsLoading(true);

//     try {
//       const response = await fetch('/api/reminders', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(reminder),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage('Reminder set successfully!');
//         setReminder({ title: '', date: '', time: '' });
//       } else {
//         setMessage(`Error: ${data.error || 'Failed to set reminder'}`);
//       }
//     } catch (error) {
//       setMessage('An error occurred while setting the reminder.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Card className="w-full max-w-md mx-auto">
//       <CardHeader>
//         <CardTitle>Set a Reminder</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="title">Reminder Title</Label>
//             <Input
//               id="title"
//               value={reminder.title}
//               onChange={(e) => setReminder({ ...reminder, title: e.target.value })}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="date">Date</Label>
//             <Input
//               id="date"
//               type="date"
//               value={reminder.date}
//               onChange={(e) => setReminder({ ...reminder, date: e.target.value })}
//               required
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="time">Time</Label>
//             <Input
//               id="time"
//               type="time"
//               value={reminder.time}
//               onChange={(e) => setReminder({ ...reminder, time: e.target.value })}
//               required
//             />
//           </div>
//           <Button type="submit" disabled={isLoading}>
//             {isLoading ? 'Setting Reminder...' : 'Set Reminder'}
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

interface ReminderFormProps {
  onReminderAdded: () => void
}

export function ReminderForm({ onReminderAdded }: ReminderFormProps) {
  const [reminder, setReminder] = useState({
    title: "",
    date: "",
    time: "",
  })
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/reminders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reminder),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage("Reminder set successfully!")
        setReminder({ title: "", date: "", time: "" })
        onReminderAdded() // Call this function to refresh the reminder list
      } else {
        setMessage(`Error: ${data.error || "Failed to set reminder"}`)
      }
    } catch (error) {
      setMessage("An error occurred while setting the reminder.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto mb-8">
      <CardHeader>
        <CardTitle>Set a Reminder</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Reminder Title</Label>
            <Input
              id="title"
              value={reminder.title}
              onChange={(e) => setReminder({ ...reminder, title: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              value={reminder.date}
              onChange={(e) => setReminder({ ...reminder, date: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="time">Time</Label>
            <Input
              id="time"
              type="time"
              value={reminder.time}
              onChange={(e) => setReminder({ ...reminder, time: e.target.value })}
              required
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Setting Reminder..." : "Set Reminder"}
          </Button>
          {message && <p className="mt-4 text-sm text-center">{message}</p>}
        </form>
      </CardContent>
    </Card>
  )
}

