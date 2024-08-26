import React from "react";
import "./style.css";

const HomePage = () => {
  return (
    <div id="home">
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their
                </p>
                <a href="/">Get Started</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/about-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="body_bg layout_padding">
        <section className="service_section ">
          <div className="container">
            <div className="heading_container">
              <h2>At Your Service</h2>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img src="images/s-1.png" alt="" />
                  </div>
                  <h4>Written with Love</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content t,
                  </p>
                  <a href="/">Read More</a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box align-items-end align-items-md-start text-right text-md-left">
                  <div className="img-box">
                    <img src="images/s-2.png" alt="" />
                  </div>
                  <h4>Fast Turnaround</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                  </p>
                  <a href="/">Read More</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img src="images/s-3.png" alt="" />
                  </div>
                  <h4>Up to Date</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like now
                    use Lorem Ipsum as their default model text,
                  </p>
                  <a href="/">Read More</a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box align-items-end align-items-md-start text-right text-md-left">
                  <div className="img-box">
                    <img src="images/s-4.png" alt="" />
                  </div>
                  <h4>Premium Content</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                  </p>
                  <a href="/">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="info_section layout_padding">
        <div className="footer_contact">
          <div className="heading_container">
            <h2>Contact Us</h2>
          </div>
          <div className="box">
            <a href="/" className="img-box">
              <img src="images/location.png" alt="" className="img-1" />
              <img src="images/location-o.png" alt="" className="img-2" />
            </a>
            <a href="/" className="img-box">
              <img src="images/call.png" alt="" className="img-1" />
              <img src="images/call-o.png" alt="" className="img-2" />
            </a>
            <a href="/" className="img-box">
              <img src="images/envelope.png" alt="" className="img-1" />
              <img src="images/envelope-o.png" alt="" className="img-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
