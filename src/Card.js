import star from "./star.png"
//import backgroundPix from "./images/katie-zaferes.png"//
export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    console.log(props)
    return (


        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}

            <img className="card--image" src={props.coverImg} width="50" alt="pix"></img>
            <div className="card--stats">
                <img className="card--star" src={star} alt="star"></img>
                <span className="gray">{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) •</span>
                <span className="gray">{props.location}</span>

            </div>
            <p className="card--title">{props.comment}</p>
            <p className="card--price"><span className="bold">From ${props.price} </span> / person</p>


        </div>




    )
}