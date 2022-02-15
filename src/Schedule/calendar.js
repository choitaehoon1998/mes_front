import React,{useState} from "react";

import { Calendar } from "fullcalendar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridePlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimeGridPlugin from "@fullcalendar/timegrid";

import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "./calendar.css";

const Calendar = () => {
    const calendarComponentRef = () => React.createRef();

    const [schedule, setSchedule] = useState([
        {
        title: "",
        start: "",
        end: ""
        }
        
    ])
    
    const handleDateClick = (arg) => {
        alert(arg.dateStr)
    }
    

    const handleSelectDates = (info) => {
        alert(info.startStr + " 를 선택");
        const title = prompt("일정 이름");
        console.log(info);
        if (title!=null){
            const newEvent = {
                title,
                start: info.startStr,
                end: info.endStr,
            };
            const daata = [newEvent];
            setSchedule(daata);
            console.log(daata);
            console.log(schedule)
        }else{
            console.log("null");
        }
    }

    return(
        <div className="d" >
            
            <FullCalendar
                locale="ko"
                plugins={[
                    dayGridPlugin,
                    timeGridePlugin,
                    interactionPlugin,
                    resourceTimeGridPlugin
                ]}
                editable="true"
                selectable="true"
                displayEventTime="true"
                eventClick={event => {
                    console.log(event.event._def.publicId);
                }}
                events={schedule}
                ref={calendarComponentRef}
                select={handleSelectDates}
                eventLimit={3}
            />
        </div>
    );
}
export default Calendar;