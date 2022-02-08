import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookSquare, faDiscord, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

class footer extends Component {
    render() { 
        return (
            <>  
                <footer>
                    <div className="row">
                        <div className="footer-logo-div">
                            <h1>Alvin Shin</h1>
                            <p>Photography</p>
                        </div>
                        <div className="socials">
                            <a 
                            href="https://www.instagram.com/ahilnvs/" 
                            className="icon" 
                            >
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                            <a 
                            href="https://www.facebook.com/alvin.shin.35" 
                            className="icon" 
                            >
                                <FontAwesomeIcon icon={faFacebookSquare}/>
                            </a>
                            <a 
                            href="https://discordapp.com/users/536390989892550677" 
                            className="icon" 
                            >
                                <FontAwesomeIcon icon={faDiscord}/>
                            </a>
                            <a 
                            href="https://github.com/AlvinShin" 
                            className="icon" 
                            >
                                <FontAwesomeIcon icon={faGithubSquare}/>
                            </a>
                        </div>
                    </div>
                    
                    <p className="cr">© Alvin Shin 2022. All rights reserved.</p>
                </footer>
            </>
        );
    }
}
 
export default footer;