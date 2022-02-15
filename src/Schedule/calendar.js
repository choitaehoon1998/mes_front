import React,{useState} from "react";


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

    const handleSelectDates = (info) => {
        alert(info.startStr + " 에 대한 일정을 작성하시겠습니까?");
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
            />
        </div>
    );
}
export default Calendar;