import Image from '../assets/images/aot.webp';

function WeeklyScheduleItem() {
    return (
        <>
            <div className="item">
                <h3 className="time">11:00am</h3>
                <img src={Image}></img>
                <div>
                    <h3 id="title">Attack on Titan</h3>
                </div>
                <h4>Episode 22</h4>
            </div>
        </>
    );
}

export default WeeklyScheduleItem;