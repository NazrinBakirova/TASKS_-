import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./blogData";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogPosts.find((item) => item.id === parseInt(id));

  if (!blog) return <div>Blog not found.</div>;

  return (
    <div style={{ padding: "50px", maxWidth: "800px", margin: "auto" }}>
      <h1>{blog.title}</h1>
      <p><strong>{blog.author}</strong> – {blog.date}</p>
      <img src={blog.image} alt={blog.title} style={{ width: "100%", margin: "20px 0" }} />
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
