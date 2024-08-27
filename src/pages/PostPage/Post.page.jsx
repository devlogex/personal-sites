import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogPost } from "@/fetchers";
import "./style.css";
import { formatDate } from "@/utils/common.utils";

const PostPage = (props) => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      const post = await fetchBlogPost(slug);
      setPost(post);
    };

    loadPost();
  }, [slug]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <div className="section post-section pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center">
                <img
                  src="assets/person_1.jpg"
                  alt=""
                  className="author-pic img-fluid rounded-circle mx-auto"
                />
              </div>
              <h2 className="heading text-center">{post?.title}</h2>
              <span className="d-block text-center">{post?.author}</span>
              <span className="date d-block text-center small text-uppercase text-black-50 mb-5">
                {formatDate(post?.date)}
              </span>
              <img
                src={post?.background?.url}
                alt=""
                className="img-fluid rounded mb-4"
              />

              <div
                id="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
