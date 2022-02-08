import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'none'
        })
    }

    const [toggle, setToggle] = useState(false);
    const [width, setWindowWidth] = useState(0);

    const toggleNav = () => {
        setToggle(!toggle);
    }

    const resetNav = () => {
        setToggle(false);
        scrollToTop();
    }

    const getMenuClass = () => {
        let className = "burger ";
        className += (toggle === true) ? "toggle" : "untoggle";
        return className;
    }

    const getNavClass = () => {
        let className = "nav-links ";
        className += (toggle === true) ? "nav-active" : "";
        return className;
    }

    const updateDim = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    }

    useEffect( () => {
        updateDim();
        window.addEventListener("resize", updateDim);
        
        return () => 
        window.removeEventListener("resize", updateDim);
    }, []);

    
    return (
        <>
            <nav>
                <div className="logo"><h4>Alvin Shin</h4></div>
                { width > 1000 && // pops in the ul inside of navbar
                    <>
                        <ul className={getNavClass()}>
                            <li><Link to="/" onClick={resetNav}>Home</Link></li>
                            <li><Link to="/photography/portfolio" onClick={resetNav}>Portfolio</Link></li>
                            <li><Link to="/photography/about" onClick={resetNav}>About</Link></li>
                        </ul>
                    </>
                }
                <div className={getMenuClass()} onClick={(toggleNav)}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
            { width <= 1000 && // pops OUT the ul OUT of the navbar
                <ul className={getNavClass()}>
                    <li><Link to="/" onClick={resetNav}>Home</Link></li>
                    <li><Link to="/photography/portfolio" onClick={resetNav}>Portfolio</Link></li>
                    <li><Link to="/photography/about" onClick={resetNav}>About</Link></li>
                </ul>
            }
        </>
    );
}

export default Navbar;
