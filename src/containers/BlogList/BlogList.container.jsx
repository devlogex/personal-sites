import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBlogPosts } from "@/fetchers";
import "./style.css";

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const posts = await fetchBlogPosts();
      setPosts(posts);
    };

    loadPosts();
  }, []);

  return (
    <div className="blog-list container">
      {posts.map((post, index) => (
        <div key={index} className="blog-post-summary">
          <h2>{post.title}</h2>
          <p>
            {post.date} by {post.author}
          </p>
          <p>Tags: {post.tags.join(", ")}</p>
          <Link to={`/blog/${index}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
