"use client"

import * as React from "react"
import ReactCalendar from "react-calendar"
import { cn } from "@/lib/utils"

const Calendar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof ReactCalendar>
>(({ className, ...props }, ref) => (
  <ReactCalendar
    ref={ref}
    className={cn(
      "p-3 bg-white rounded-lg shadow-md",
      className
    )}
    locale="es-ES"
    {...props}
  />
))
Calendar.displayName = "Calendar"

export { Calendar }
