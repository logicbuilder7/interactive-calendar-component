import DayCell from "./DayCell";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarGrid({
  days,
  emptyDays,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  isDragging,
  setIsDragging,
}) {
  return (
    <div>
      <div className="grid grid-cols-7 mb-2 text-sm font-medium text-gray-500">
        {weekDays.map((d) => (
          <div key={d} className="text-center">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {emptyDays.map((_, i) => <div key={i}></div>)}

        {days.map((day, i) => (
          <DayCell
            key={i}
            day={day}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            isDragging={isDragging}
            setIsDragging={setIsDragging}
          />
        ))}
      </div>
    </div>
  );
}