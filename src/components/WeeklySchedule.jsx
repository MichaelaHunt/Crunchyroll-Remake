import WeeklyScheduleItem from "./weeklyScheduleItem";
import './WeeklySchedule.css';
//currently hard-coded
/*
short term goal: 
when you click on the different dates, it underlines the date you clicked on

Long term goal: 
when you click on the different dates, it displays a different schedule associated with that date
*/
function WeeklySchedule() {
    return (
        <>
            <div className="body">
                <ul id="week-info">
                    <li>
                        <h3 className="dates">26</h3>
                        <h4 className="weekdayNames">Sun</h4>
                    </li>
                    <li>
                        <h3 className="dates">27</h3>
                        <h4 className="weekdayNames">Mon</h4>
                    </li>
                    <li>
                        <h3 className="dates">28</h3>
                        <h4 className="weekdayNames">Tue</h4>
                    </li>
                    <li>
                        <h3 className="dates">29</h3>
                        <h4 className="weekdayNames">Wed</h4>
                    </li>
                    <li>
                        <h3 className="dates">30</h3>
                        <h4 className="weekdayNames">Thu</h4>
                    </li>
                    <li>
                        <h3 className="dates">31</h3>
                        <h4 className="weekdayNames">Fri</h4>
                    </li>
                    <li>
                        <h3 className="dates">1</h3>
                        <h4 className="weekdayNames">Sat</h4>
                    </li>
                </ul>
            </div>
            <div className="container scrollContainer">
                <WeeklyScheduleItem></WeeklyScheduleItem>
                <WeeklyScheduleItem></WeeklyScheduleItem>
                <WeeklyScheduleItem></WeeklyScheduleItem>
                <WeeklyScheduleItem></WeeklyScheduleItem>
                <WeeklyScheduleItem></WeeklyScheduleItem>
                <WeeklyScheduleItem></WeeklyScheduleItem>
                <WeeklyScheduleItem></WeeklyScheduleItem>
                <WeeklyScheduleItem></WeeklyScheduleItem>
            </div>
        </>
    );
}

export default WeeklySchedule;