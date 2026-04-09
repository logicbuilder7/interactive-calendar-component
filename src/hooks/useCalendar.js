import { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
  getDay,
} from "date-fns";

export function useCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const start = startOfMonth(currentMonth);
  const end = endOfMonth(currentMonth);

  const days = eachDayOfInterval({ start, end });

  const startDay = getDay(start);
  const emptyDays = Array.from({ length: startDay });

  return {
    currentMonth,
    days,
    emptyDays,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    isDragging,
    setIsDragging,
    nextMonth: () => setCurrentMonth(addMonths(currentMonth, 1)),
    prevMonth: () => setCurrentMonth(subMonths(currentMonth, 1)),
  };
}