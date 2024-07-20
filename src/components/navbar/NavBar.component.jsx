import React, { useEffect, useState } from "react";
import "./style.css";

const NavBar = ({ logo = "", items = [] }) => {
  const [isNavLinkVisible, setIsNavLinkVisible] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleBurgerClick = () => {
    setIsNavLinkVisible(!isNavLinkVisible);
  };

  const handleItemClick = () => {
    setIsNavLinkVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scroll Down
        setShowNavbar(false);
      } else {
        // Scroll Up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navItems = items.map((item, index) => (
    <li key={index} onClick={handleItemClick}>
      <a href={item.link}>{item.name}</a>
    </li>
  ));

  return (
    <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
      <div className="logo">
        <a href="/">{logo}</a>
      </div>
      <ul className={`nav-links ${isNavLinkVisible ? "nav-active" : ""}`}>
        {navItems}
      </ul>
      <div className="burger" onClick={handleBurgerClick}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default NavBar;
