import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBlogPosts } from "@/fetchers";
import { Loading } from "@/components";
import "./style.css";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const posts = await fetchBlogPosts();
      setPosts(posts);
      setLoading(false);
    };

    loadPosts();
  }, []);

  return (
    <div className="container" id="blog-list">
      <Loading isLoading={loading}>
        {posts.map((post, index) => (
          <div key={index} className="blog-post-summary">
            <h2>{post.title}</h2>
            <p>
              {post.date} by {post.author}
            </p>
            <p>Tags: {post.tags?.join(", ")}</p>
            <Link to={`/blog/${index}`}>Read More</Link>
          </div>
        ))}
      </Loading>
    </div>
  );
};

export default BlogList;
