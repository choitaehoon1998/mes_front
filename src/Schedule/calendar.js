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
            title: "sdsd",
            start: "2022-02-15",
            end: "2022-02-15"
        }
    ])
    
    const eventdelet = () => {
        const a = window.confirm("일정을 삭제하시겠습니까?");
            if(a){
                alert("삭제되었습니다.");
                setSchedule({
                    title: "",
                    start: "",
                    end: ""
                })
            }else{
            }
            console.log(schedule);
    }
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
        }else{
            console.log("null");
        }
    }

    return(
        <div className="d">
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
                    console.log(event);
                }}
                events={schedule}
                ref={calendarComponentRef}
                select={handleSelectDates}
                eventClick={eventdelet}
            />
        </div>
    );
}
export default Calendar;