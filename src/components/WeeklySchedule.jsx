import WeeklyScheduleItem from "./weeklyScheduleItem";

//currently hard-coded
function WeeklySchedule() {
    return (
        <>
            <div>
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
            <div className="container">
                <WeeklyScheduleItem></WeeklyScheduleItem>
            </div>
        </>
    );
}

export default WeeklySchedule;