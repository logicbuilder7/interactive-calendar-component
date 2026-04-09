"use client";

import { motion } from "framer-motion";
import { isSameDay, isWithinInterval, isToday } from "date-fns";

export default function DayCell({
  day,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  isDragging,
  setIsDragging,
}) {
  // 🎨 BASE STYLE
  let style =
    "hover:bg-blue-100 hover:scale-105 transition duration-200 ease-in-out";

  // ⭐ TODAY HIGHLIGHT (ring effect)
  if (isToday(day)) {
    style += " ring-2 ring-blue-500";
  }

  // 🔥 WEEKEND COLOR
  if (day.getDay() === 0 || day.getDay() === 6) {
    style += " text-red-400";
  }

  // ✅ SELECTED START / END
  if (startDate && isSameDay(day, startDate)) {
    style = "bg-blue-600 text-white shadow-md scale-105";
  } else if (endDate && isSameDay(day, endDate)) {
    style = "bg-blue-600 text-white shadow-md scale-105";
  }

  // 📅 RANGE SELECTION
  else if (
    startDate &&
    endDate &&
    isWithinInterval(day, { start: startDate, end: endDate })
  ) {
    style = "bg-blue-200";
  }

  // 🖱️ DRAG FUNCTIONS
  const handleMouseDown = () => {
    setStartDate(day);
    setEndDate(null);
    setIsDragging(true);
  };

  const handleMouseEnter = () => {
    if (isDragging && startDate) {
      if (day > startDate) setEndDate(day);
      else {
        setEndDate(startDate);
        setStartDate(day);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseUp={handleMouseUp}
      className={`p-3 text-center rounded-lg cursor-pointer ${style}`}
    >
      {day.getDate()}
    </motion.div>
  );
}