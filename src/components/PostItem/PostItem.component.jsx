import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { formatDate } from "@/utils/common.utils";

const PostItem = ({ post }) => {
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
            <span className="date">{formatDate(post.date)}</span>
          </div>
          <p>{post.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
