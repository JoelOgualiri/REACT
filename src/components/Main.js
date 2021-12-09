import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



import { faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function Main() {
    return (
        <main>

            <h1 className="title--name">Joel Ogualiri</h1>
            <h2 className="title--job">Frontend Developer</h2>

            <div className="contact">
                <button className="email"><span><FontAwesomeIcon icon={faEnvelope} /></span> Email</button>
                <button className="linkedIn"><span><FontAwesomeIcon icon={faLinkedin} /></span>LinkedIn</button>
            </div>

            <div className="bio">
                <h1>About</h1>
                <p>I have over 2 years of experience in React, CSS, JavaScript, HTML, and JEST. I am an avid student of technology.  </p>
                <h1>Interests</h1>
                <p>Reader. Travel geek. Chess player. Coffee fanatic. Artist.   </p>

            </div>
            <div className="footer">
                <footer>

                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faEnvelope} />
                </footer>
            </div>


        </main>
    )

}