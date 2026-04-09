export default function Header({ currentMonth, nextMonth, prevMonth }) {
  return (
    <div className="flex justify-between items-center mb-3">
      <button onClick={prevMonth}>←</button>
      <h2 className="font-semibold">
        {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
      </h2>
      <button onClick={nextMonth}>→</button>
    </div>
  );
}