import React from 'react';
import './NavBar.style.css';

const NavBar = () => {
    const [isNavLinkVisible, setIsNavLinkVisible] = React.useState(false);
    const handleBurgerClick = () => {
        setIsNavLinkVisible(!isNavLinkVisible);
    }

    return (
        <nav className="navbar">
            <div className="logo">Haku</div>
            <ul className={`nav-links ${isNavLinkVisible ? 'nav-active' : ''}`}>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="burger" onClick={handleBurgerClick}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default NavBar;