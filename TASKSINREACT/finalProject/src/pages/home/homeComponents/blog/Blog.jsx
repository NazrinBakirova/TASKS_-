import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "./blogData";
import './blogStyle/blog.css'; 

const Blog = () => {
  return (
    <div className="blog-section">
      <h2 className="blog-title">Latest Blog</h2>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.image} alt={post.title} />
            <div className="blog-content">
              <p>
                <span>{post.author}</span> 📅 {post.date}
              </p>
              <h3>{post.title}</h3>
              <p>{post.short}</p>
              <Link to={`/blog/${post.id}`}>Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
