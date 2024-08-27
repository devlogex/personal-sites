import React, { useEffect, useState } from "react";
import { fetchBlogPosts } from "@/fetchers";
import { Loading, PostItem } from "@/components";
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
      <div id="blog-page">
        <div className="section">
          <div className="container">
            <div className="row">
              <Loading isLoading={loading}>
                {posts.map((post, index) => (
                  <PostItem key={index} post={post} />
                ))}
              </Loading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
