import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./blogData";
import './style.scss'
import Header from "../../../../components/header/Header";
import Footer from '../../../../components/footer/Footer'
const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogPosts.find((item) => item.id === parseInt(id));

  if (!blog) return <div>Blog not found.</div>;

  return (
   <div>
    <Header/>
    <div style={{ padding: "50px", maxWidth: "800px", margin: "auto"}}>
      <h1>{blog.title}</h1>
      <p className="author"><strong>{blog.author}</strong> – {blog.date}</p>
      <img src={blog.image} alt={blog.title} style={{ width: "100%", margin: "20px 0" }} />
      <h4>{blog.shortContent}</h4>
      <p>{blog.content}</p>
    </div>
    <Footer/>
    </div>
  );
};

export default BlogDetail;
