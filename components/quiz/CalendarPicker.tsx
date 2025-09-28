"use client"

import React, { useState } from 'react'
import { Calendar, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { 
  getNext14Days, 
  getAvailableTimeSlots, 
  formatTimeSlot,
  timezones 
} from '@/lib/quiz-questions'

interface CalendarPickerProps {
  onDateSelect: (date: string) => void
  onTimeSelect: (time: string) => void
  onTimezoneSelect: (timezone: string) => void
  selectedDate?: string
  selectedTime?: string
  selectedTimezone?: string
}

export function CalendarPicker({
  onDateSelect,
  onTimeSelect,
  onTimezoneSelect,
  selectedDate,
  selectedTime,
  selectedTimezone = "America/New_York"
}: CalendarPickerProps) {
  const [availableDates] = useState(getNext14Days())
  const [timeSlots, setTimeSlots] = useState<string[]>([])
  
  const handleDateSelect = (dateStr: string) => {
    onDateSelect(dateStr)
    const date = new Date(dateStr)
    const slots = getAvailableTimeSlots(date)
    setTimeSlots(slots)
    // Reset time selection when date changes
    if (selectedTime) {
      onTimeSelect('')
    }
  }
  
  const formatDate = (date: Date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`
  }
  
  return (
    <div className="space-y-6">
      <div>
        <Label className="text-base font-semibold mb-3 flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Select a Date
        </Label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {availableDates.map((date) => {
            const dateStr = date.toISOString().split('T')[0]
            const isSelected = selectedDate === dateStr
            
            return (
              <Button
                key={dateStr}
                type="button"
                variant={isSelected ? "default" : "outline"}
                className={`
                  h-auto py-3 px-2 flex flex-col items-center justify-center
                  ${isSelected ? 'bg-skool-red hover:bg-skool-red/90 text-white' : ''}
                `}
                onClick={() => handleDateSelect(dateStr)}
              >
                <span className="text-xs font-normal">
                  {formatDate(date)}
                </span>
                <span className="text-lg font-semibold">
                  {date.getDate()}
                </span>
              </Button>
            )
          })}
        </div>
      </div>
      
      {selectedDate && timeSlots.length > 0 && (
        <div>
          <Label className="text-base font-semibold mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Select a Time (EST)
          </Label>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-48 overflow-y-auto">
            {timeSlots.map((time) => {
              const isSelected = selectedTime === time
              
              return (
                <Button
                  key={time}
                  type="button"
                  variant={isSelected ? "default" : "outline"}
                  className={`
                    ${isSelected ? 'bg-skool-red hover:bg-skool-red/90 text-white' : ''}
                  `}
                  onClick={() => onTimeSelect(time)}
                >
                  {formatTimeSlot(time)}
                </Button>
              )
            })}
          </div>
        </div>
      )}
      
      {selectedDate && selectedTime && (
        <div>
          <Label htmlFor="timezone" className="text-base font-semibold mb-3">
            Your Timezone
          </Label>
          <RadioGroup
            id="timezone"
            value={selectedTimezone}
            onValueChange={onTimezoneSelect}
            className="space-y-2"
          >
            {timezones.map((tz) => (
              <div key={tz.value} className="flex items-center space-x-2">
                <RadioGroupItem value={tz.value} id={tz.value} />
                <Label 
                  htmlFor={tz.value} 
                  className="font-normal cursor-pointer flex-1"
                >
                  {tz.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      )}
    </div>
  )
}