import profile from "../profile.jpg"
export default function Header() {
    return (
        <div>
            <img className="profilepic" src={profile} alt="profile pic"></img>
        </div>
    )

}