import React from "react";
import "./style.css";

const PostItem = (post) => {
  return (
    <div className="col-lg-4 mb-5">
      <div className="post-entry d-block small-post-entry-v">
        <div className="thumbnail">
          <a href="single.html">
            <img src="assets/img_2.jpg" alt="" className="img-fluid" />
          </a>
        </div>
        <div className="content">
          <div className="post-meta mb-1">
            <a href="/" className="category">
              Business
            </a>
            ,{" "}
            <a href="/" className="category">
              Travel
            </a>
            &mdash;
            <span className="date">July 2, 2020</span>
          </div>
          <h2 className="heading mb-3">
            <a href="single.html">
              Your most unhappy customers are your greatest source of learning.
            </a>
          </h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <a href="/" className="post-author d-flex align-items-center">
            <div className="author-pic">
              <img src="assets/person_1.jpg" alt="" />
            </div>
            <div className="text">
              <strong>Sergy Campbell</strong>
              <span>CEO and Founder</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
