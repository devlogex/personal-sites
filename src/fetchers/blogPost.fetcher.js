import matter from "gray-matter";
import { marked } from "marked";

export const fetchBlogPosts = async () => {
  const context = require.context("@/data/posts", false, /\.md$/);
  const posts = [];

  for (const key of context.keys()) {
    const post = await fetch(context(key));
    const text = await post.text();
    const { data, content } = matter(text);
    const htmlContent = marked(content);
    posts.push({ ...data, content: htmlContent });
  }

  return posts;
};
