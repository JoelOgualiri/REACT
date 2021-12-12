export default function Greeting() {
    const date = new Date();
    const hours = date.getHours();
    let timeofDay

    if (hours < 12) {
        timeofDay = "morning"
    } else if (hours >= 12 && hours < 13) {
        timeofDay = "afternoon"
    } else {
        timeofDay = "night"
    }
    return (
        <div >
            <h1 >Good <span className="bold">{timeofDay}!</span></h1>
        </div>

    )
}