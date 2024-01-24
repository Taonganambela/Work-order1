import React, { useState } from 'react'
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"




type datePickerProps = {
    title: string,
    dateType: string
}

function DatePicker({dateType, title}: datePickerProps) {
    const [date, setDate] = useState<Date>()

  return (
    <div className=''>
    <h1 className='font-bold'>{title}</h1>

         <Popover>
      <PopoverTrigger asChild>
      
        <Button
          variant={"outline"}
          className={cn(
            "justify-start text-left font-normal p-[28px] w-60",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span></span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
    </div>
  )
}

export default DatePicker;