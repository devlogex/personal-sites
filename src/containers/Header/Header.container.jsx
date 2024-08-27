import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import Slider from "../Slider/Slider.container";

const SHOW_SLIDER_PAGES = ["/"];

function Header() {
  const location = useLocation();
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    if (SHOW_SLIDER_PAGES.includes(location.pathname)) {
      !showSlider && setShowSlider(true);
    } else {
      setShowSlider(false);
    }
  }, [location.pathname, showSlider]);

  return (
    <div className={`hero_area ${showSlider ? "show_slider" : ""}`}>
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
            <a className="navbar-brand mr-5" href="index.html">
              <img src="images/logo.webp" alt="" />
              <span>DevlogEX</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                     Home 
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link to="/blog" className="nav-link">
                      Blog <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                </ul>
                <form className="form-inline">
                  <button
                    className="btn  my-2 my-sm-0 nav_search-btn"
                    type="button"
                  ></button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {showSlider && <Slider />}
    </div>
  );
}

export default Header;
