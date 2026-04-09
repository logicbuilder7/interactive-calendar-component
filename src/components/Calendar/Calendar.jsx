"use client";

import { motion } from "framer-motion";
import DarkModeToggle from "../DarkModeToggle";

import Header from "./Header";
import CalendarGrid from "./CalendarGrid";
import NotesPanel from "../Notes/NotesPanel";
import { useCalendar } from "../../hooks/useCalendar";

export default function Calendar() {
  const calendar = useCalendar();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl overflow-hidden max-w-5xl w-full relative"
    >
      {/* 🌙 Dark Mode Toggle */}
      <DarkModeToggle />

      {/* HERO SECTION */}
<div className="relative h-60">
  <img
    src="/images/hero.jpg"
    alt="hero"
    className="w-full h-full object-cover"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

  {/* Blue diagonal */}
  <div className="absolute bottom-0 w-full h-20 bg-blue-500 clip-diagonal"></div>

  {/* TEXT */}
  <div className="absolute bottom-4 right-6 text-white text-right">
    <h3 className="text-sm opacity-90">
      {calendar.currentMonth.getFullYear()}
    </h3>

    <h2 className="text-3xl font-bold drop-shadow-lg tracking-wide">
      {calendar.currentMonth.toLocaleString("default", {
        month: "long",
      })}
    </h2>
  </div>
</div>

      {/* CONTENT */}
      <div className="grid md:grid-cols-3 gap-4 p-4">
        {/* Notes */}
        <NotesPanel
          startDate={calendar.startDate}
          endDate={calendar.endDate}
        />

        {/* Calendar */}
        <div className="md:col-span-2">
          <Header {...calendar} />
          <CalendarGrid {...calendar} />
        </div>
      </div>
    </motion.div>
  );
}