import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  console.log(post.tags);
  return (
    <div className="col-lg-4 mb-5">
      <div className="post-entry d-block small-post-entry-v">
        <div className="thumbnail">
          <Link to={`/blog/${post.slug}`}>
            <img src={post.image} alt="" className="img-fluid" />
          </Link>
        </div>
        <div className="content">
          <h2 className="heading mb-3">
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <div className="post-meta mb-1">
            <span className="date">July 2, 2020</span>
          </div>
          <p>{post.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
