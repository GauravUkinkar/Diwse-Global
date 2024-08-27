"use client";
import React, { useState } from "react";
import "./blog.scss";
import Blog_Details from "@/component/blog/Blog_Details";

// Sample blog data array
const blogData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "https://img.freepik.com/free-photo/close-up-cutting-plant-leaves_23-2148905280.jpg?t=st=1723205318~exp=1723208918~hmac=bee76a809d5085aed8124f68f1d0ba3234a9ec185bd7cc86dbed3e53cb524207&w=1380",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dicta sint velit assumenda soluta aut veritatis obcaecati et? Culpa perspiciatis.",
    category: "News",
    date: "08/08/2024",
    link: "#",
  },
  {
    id: 2,
    title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    image: "path_to_image_2.jpg",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    category: "Technology",
    date: "08/07/2024",
    link: "#",
  },
  {
    id: 3,
    title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    image: "path_to_image_2.jpg",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    category: "Technology",
    date: "08/07/2024",
    link: "#",
  },
  {
    id: 4,
    title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    image: "path_to_image_2.jpg",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    category: "Technology",
    date: "08/07/2024",
    link: "#",
  },
  {
    id: 5,
    title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    image: "path_to_image_2.jpg",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    category: "Technology",
    date: "08/07/2024",
    link: "#",
  },
  {
    id: 6,
    title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    image: "path_to_image_2.jpg",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    category: "Technology",
    date: "08/07/2024",
    link: "#",
  },
  {
    id: 7,
    title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    image: "path_to_image_2.jpg",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    category: "Technology",
    date: "08/07/2024",
    link: "#",
  },
  {
    id: 8,
    title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    image: "path_to_image_2.jpg",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    category: "Technology",
    date: "08/07/2024",
    link: "#",
  },
  {
    id: 9,
    title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    image: "path_to_image_2.jpg",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    category: "Technology",
    date: "08/07/2024",
    link: "#",
  },
  
];

const Blogs = () => {
  const [visibleblog, setVisibleBlogs] = useState(3);
  const [blogs, setBlogs] = useState(blogData.slice(0, 6));
  const active = () => {
    const newblog = visibleblog + 3;
    setVisibleBlogs(newblog);
    setBlogs(blogData.slice(0, newblog));
  };

  return (
    <>
    <div className="blog-parent-b  parent">
        <div className="top-color  parent">
          <div className="top-color-cont cont">
            <h3 className="about-heading">
           Latest <span className="gradient-text">Blogs</span>
            </h3>
            <p className="about-para">
            Stay updated with the latest trends and tips in digital marketing and web development. Our blog offers expert advice and industry insights to keep you informed and inspired.
              

            </p>
          </div>
        </div>
       
      </div>
    <div className="blog-parent parent">
      <div className="blog-cont cont">
        <div className="card-box">
          {blogs.map((blog) => (
            <a href={blog.link} className="card-link" key={blog.id}>
              <div className="card">
                <div className="card-data">
                  <div
                    className="card-image bg-img-cover"
                    style={{ backgroundImage: `url(${blog.image})` }}
                  ></div>
                  <h4 className="card-title">{blog.title}</h4>
                  <p className="short-desc">{blog.description}</p>
                </div>
                <div className="bottom-card">
                  <div className="category">{blog.category}</div>
                  <div className="date">{blog.date}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
        {visibleblog < blogData.length && (
          <div className="load-more">
            <button className="btn1" onClick={active}>
              Load More Blog
            </button>
          </div>
        )}
      </div>
     
    </div>
    <Blog_Details />
    </>
    

    
  );
};

export default Blogs;
