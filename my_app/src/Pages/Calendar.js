import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import events from "../lib/Events.js";
import "./Calendar.css"

export default function App() {
  return (
    <div className="App">
      <FullCalendar className="calendar"
        defaultView="dayGridMonth"
        height={650}
        aspectRatio={5}
        header={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        themeSystem="Simplex"
        plugins={[dayGridPlugin]}
        events={events}
      />
    </div>
  );
}