import { useState, useEffect } from "react";

export default function NotesPanel({ startDate, endDate }) {
  const [note, setNote] = useState("");

  const key = startDate
    ? `note-${startDate.toDateString()}-${endDate?.toDateString() || ""}`
    : "note-default";

  useEffect(() => {
    const saved = localStorage.getItem(key);
    if (saved) setNote(saved);
    else setNote("");
  }, [key]);

  const saveNote = () => {
    localStorage.setItem(key, note);
  };

  return (
    <div className="bg-gray-50 p-4 rounded-xl shadow-inner">
      <h3 className="font-semibold mb-2">Notes</h3>

      <textarea
        className="w-full h-40 border rounded p-2"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write notes for selected date..."
      />

      <button
        onClick={saveNote}
        className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg"
      >
        Save Notes
      </button>
    </div>
  );
}