import star from "./star.png"
import backgroundPix from "./katie-zaferes.png"
export default function Card() {
    return (

        <div className="card">
            <img className="card--image" src={backgroundPix} alt="pix"></img>
            <div className="card--stats">
                <img className="card--star" src={star} alt="star"></img>
                <span className="gray">5.0</span>
                <span className="gray">(6) * </span>
                <span className="gray">USA</span>

            </div>
            <p>Learn wedding photography</p>
            <p><span className="bold">From $136 </span> / person</p>


        </div>
    )
}