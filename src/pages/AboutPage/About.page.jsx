import React from "react";
import "./style.css";

const AboutPage = () => {
  return (
    <div id="about">
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Me</h2>
                </div>
                <p>
                  Hello! I am a versatile software engineer, specializing in
                  backend development. With over four years of experience, my
                  expertise lies in Python and Django, where I excel in creating
                  robust, real-time systems for Parcel Perform. I also have a
                  strong background in DevOps and frontend technologies,
                  enabling me to build and manage full-stack applications
                  effectively.
                </p>
                <a href="#experiences">Experiences</a>
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

      <div className="body_bg layout_padding" id="experiences">
        <section className="service_section ">
          <div className="container">
            <div className="heading_container">
              <h2>Experiences</h2>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img
                      src="images/pp_icon.png"
                      alt=""
                      width={40}
                      height={40}
                    />
                  </div>
                  <h4>Backend Developer at Parcel Perform</h4>
                  <h6>2022 - Present</h6>
                  <p>
                    Parcel Perform is a leading global logistics technology
                    company specializing in end-to-end parcel tracking and
                    business intelligence solutions.
                  </p>
                  <p>
                    Collaborate with product owners and engineers to enhance
                    feature development and troubleshoot complex issues.
                  </p>
                  <a href="/">Read More</a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box align-items-end align-items-md-start text-right text-md-left">
                  <div className="img-box">
                    <img
                      src="images/fpt_icon.jpg"
                      alt=""
                      width={40}
                      height={40}
                    />
                  </div>
                  <h4>Fullstack developer at FPT Software</h4>
                  <h6>2020-2022</h6>
                  <p>
                    FPT Software is a global technology and IT services company
                    headquartered in Vietnam, with a strong presence in the US,
                    Europe, and Asia.
                  </p>
                  <p>
                    Worked closely with cross-functional teams to deliver
                    tailored solutions that meet the strategic needs of clients
                    in the American and European markets.
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
            <h2>Contact Me</h2>
          </div>
          <div className="box">
            <a href="https://www.linkedin.com/in/devlogex/" rel="nofollow">
              <img
                src="images/linkedin.png"
                alt=""
                height={55}
                className="img-1"
              />
            </a>
            <a href="https://github.com/devlogex" rel="nofollow">
              <img
                src="images/github.png"
                alt=""
                height={65}
                className="img-1"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
