import logo from "../react-logo.png"

export default function Header() {
    return (
        <div className="nav">
            <img src={logo} style={{ width: 50 }} alt="logo"></img>
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}