import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faInstagram, 
    faFacebookSquare, 
    faDiscord, 
    faGithubSquare 
} from '@fortawesome/free-brands-svg-icons';

function Socials() {
    return (
        <>
            <ul className="socUl">
                <li className="socLi">
                    <a 
                    href="https://www.instagram.com/ahilnvs/" 
                    className="icon-anchor" 
                    >
                        <FontAwesomeIcon icon={faInstagram} className="icon-about"/>
                        <p>Instagram</p>
                    </a>
                </li>

                <li className="socLi">
                    <a 
                    href="https://www.facebook.com/alvin.shin.35"
                    className="icon-anchor" 
                    >
                        <FontAwesomeIcon icon={faFacebookSquare} className="icon-about"/>
                        <p>Facebook</p>
                    </a>
                </li>

                <li className="socLi">
                    <a 
                        href="https://discordapp.com/users/536390989892550677" 
                        className="icon-anchor" 
                        >
                            <FontAwesomeIcon icon={faDiscord} className="icon-about discord"/>
                            <p>Discord</p>
                    </a>
                </li>

                <li className="socLi">
                    <a 
                    href="https://github.com/AlvinShin"
                    className="icon-anchor" 
                    >
                        <FontAwesomeIcon icon={faGithubSquare} className="icon-about"/>
                        <p>GitHub</p>
                    </a>
                </li>
            </ul>
        </>
    );
}
 
export default Socials;