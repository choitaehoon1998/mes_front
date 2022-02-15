import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import React,{Component} from "react";

const Calendar = () => {

    return(
        <div className="App">
        <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        />
        </div>
    );
}
export default Calendar;