"use client";
import React, { useEffect, useState } from "react";
import "./blog.scss";
import Blog_Details from "@/component/blog/Blog_Details";
import axios from "axios";
import Link from "next/link";
import AOS from "aos";

// Sample blog data array
const blogData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image:
      "https://img.freepik.com/free-photo/close-up-cutting-plant-leaves_23-2148905280.jpg?t=st=1723205318~exp=1723208918~hmac=bee76a809d5085aed8124f68f1d0ba3234a9ec185bd7cc86dbed3e53cb524207&w=1380",
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

  const active = () => {
    const newblog = visibleblog + 3;
    setVisibleBlogs(newblog);
    setBlogs(blogData.slice(0, newblog));
  };

  const [data, setdata] = useState([]);
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "https://api.diwiseglobal.com/auth/blogs/"
      );
      setdata(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <>
      <div className="blog-parent-b  parent">
        <div className="top-color  parent">
          <div className="top-color-cont cont">
            <h3 className="about-heading">
              Latest <span className="gradient-text">Blogs</span>
            </h3>
            <p className="about-para">
              Stay updated with the latest trends and tips in digital marketing
              and web development. Our blog offers expert advice and industry
              insights to keep you informed and inspired.
            </p>
          </div>
        </div>
      </div>
      <div className="blog-parent parent">
        <div className="blog-cont cont">
          <div className="card-box" data-aos="fade-up">
            {data &&
              data.slice(0, visibleblog).map((blog,index) => (
                <Link
                  href={`/blogdetail/${blog.id}`}
                  className="card-link"
                  key={index}
                >
                  <div className="card">
                    <div className="card-data">
                      <div
                        className="card-image bg-img-cover"
                        style={{ backgroundImage: `url(${blog.image})` }}
                      ></div>
                      <h4 className="card-title">{blog.title}</h4>
                      <p
                        className="short-desc"
                        dangerouslySetInnerHTML={{
                          __html: blog.description.slice(0, 150),
                        }}
                      >
                      </p>
                    </div>
                    <div className="bottom-card">
                      <div className="category">{blog.category}</div>
                      <div className="date">{blog.date}</div>
                    </div>
                  </div>
                </Link>
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
    </>
  );
};

export default Blogs;
