import React from "react";
import "./style.css";

function Slider() {
  return (
    <section className=" slider_section position-relative">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          >
            01
          </li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1">
            02
          </li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <div>
                      <h1>
                        Design Dreams <br />
                        <span>Inspire Creative Soul</span>
                      </h1>
                      <p>
                        Step into a world where imagination meets innovation.
                        Discover the art of creation, one idea at a time.
                      </p>
                      <div className="btn-box">
                        <a href="/blog" className="btn-1">
                          Explore More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <div>
                      <div>
                        <h1>
                          Empower Ideas <br />
                          <span>Transform Reality</span>
                        </h1>
                        <p>
                          Unlock your potential and bring your vision to life.
                          Explore limitless possibilities with us.
                        </p>
                        <div className="btn-box">
                          <a href="/blog" className="btn-1">
                            Explore More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom_carousel-control">
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Slider;
