# 📅 Interactive Calendar Component

A polished, interactive calendar component built using **React (Next.js)** inspired by a physical wall calendar design.

---

## 🚀 Features

### 🖼️ Wall Calendar Aesthetic

* Hero image at the top acting as a visual anchor
* Clean, modern UI inspired by real wall calendars

### 📅 Day Range Selection

* Click and drag to select a range of dates
* Clear visual states for:

  * Start date
  * End date
  * Selected range

### 📝 Notes Section

* Add notes for selected dates or ranges
* Simple and intuitive UI
* Stored using client-side storage

### 🌙 Dark Mode

* Toggle between light and dark themes
* Fully responsive styling

### ✨ Animations

* Smooth hover and click animations using Framer Motion
* Interactive UI for better user experience

### 📱 Responsive Design

* Desktop: Side-by-side layout (calendar + notes)
* Mobile: Stacked layout for better usability

---

## 🛠️ Tech Stack

* React (Next.js)
* Tailwind CSS
* Framer Motion
* date-fns

---

## 📂 Folder Structure

```
src/
 ├── app/
 │   ├── page.jsx
 │   └── layout.jsx
 │
 ├── components/
 │   ├── Calendar/
 │   │   ├── Calendar.jsx
 │   │   ├── CalendarGrid.jsx
 │   │   ├── DayCell.jsx
 │   │   └── Header.jsx
 │   │
 │   ├── Notes/
 │   │   └── NotesPanel.jsx
 │   │
 │   └── DarkModeToggle.jsx
 │
 ├── hooks/
 │   └── useCalendar.js
 │
 └── styles/
     └── globals.css
```

---

## ⚙️ Setup Instructions

```bash
# Clone the repository
git clone <your-repo-link>

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open: http://localhost:3000

---

## 🎯 Key Highlights

* Clean component architecture
* Interactive drag-based selection
* Focus on UI/UX details
* Fully frontend (no backend required)

---

## 🙌 Conclusion

This project demonstrates strong frontend fundamentals including UI design, state management, responsiveness, and interactive user experience.

---
