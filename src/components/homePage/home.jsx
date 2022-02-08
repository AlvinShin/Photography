import React from 'react';
import { Link } from 'react-router-dom';
import SlideShow from './slide';

function Home() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'none'
        })
    }
    return (
        <div className="page">
            <div className="title-home">
                <h1>Alvin Shin</h1>
                <p>Photography</p>
                <Link to="/portfolio" 
                className="port-btn"
                onClick={scrollToTop}
                >
                    view portfolio
                </Link>
            </div>
        </div>
    );
}
 
export default Home;