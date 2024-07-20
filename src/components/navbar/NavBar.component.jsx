import React from "react";
import "./style.css";

const NavBar = ({ logo = "", items = [] }) => {
  const [isNavLinkVisible, setIsNavLinkVisible] = React.useState(false);
  const handleBurgerClick = () => {
    setIsNavLinkVisible(!isNavLinkVisible);
  };

  const navItems = items.map((item, index) => (
    <li key={index}>
      <a href={item.link}>{item.name}</a>
    </li>
  ));

  return (
    <nav className="navbar">
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
