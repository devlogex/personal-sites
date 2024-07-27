import matter from "gray-matter";
import { marked } from "marked";

const fetchListPosts = async () => {
  const response = await fetch("/data/posts/list.json");
  const data = await response.json();
  return data;
};

export const fetchBlogPosts = async () => {
  const postFiles = await fetchListPosts();

  const posts = [];

  for (const postPath of postFiles) {
    const response = await fetch(postPath);
    const text = await response.text();
    const { data, content } = matter(text);
    const htmlContent = marked(content);
    posts.push({ ...data, content: htmlContent });
  }

  return posts;
};
