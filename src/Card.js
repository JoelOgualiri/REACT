import star from "./star.png"
//import backgroundPix from "./images/katie-zaferes.png"//
export default function Card(props) {
    console.log(props.image)


    return (


        <div className="card">

            <img className="card--image" src={props.image} width="50" alt="pix"></img>
            <div className="card--stats">
                <img className="card--star" src={star} alt="star"></img>
                <span className="gray">{props.rating}</span>
                <span className="gray">{props.review}</span>
                <span className="gray">USA</span>

            </div>
            <p>{props.comment}</p>
            <p><span className="bold">From ${props.price} </span> / person</p>


        </div>




    )
}