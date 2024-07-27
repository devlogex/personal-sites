import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogPosts } from "@/fetchers";
import "./style.css";

const BlogPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      const posts = await fetchBlogPosts();
      setPost(posts[postId]);
    };

    loadPost();
  }, [postId]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container" id="blog-post">
      <h1>{post.title}</h1>
      <p>
        {post.date} by {post.author}
      </p>
      <p>Tags: {post.tags?.join(", ")}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPost;
