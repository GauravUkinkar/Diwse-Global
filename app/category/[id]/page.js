"use client";
import React, { useEffect, useState } from "react";
import "../../blogs/blog.scss";
import axios from "axios";
import Link from "next/link";
import AOS from "aos";
import { useParams } from "next/navigation";

// Sample blog data array


const Blogs = () => {

  const [visibleblog,setVisibleBlogs] = useState(3)
  const [data, setdata] = useState([]);
  const {id} = useParams()
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        `https://api.diwiseglobal.com/auth/category/${id}/`
      );
      setdata(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="blog-parent-b  parent">
        <div className="top-color  parent">
          <div className="top-color-cont cont">
            <h3 className="about-heading">
              Blog <span className="gradient-text"> Category</span>
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
        <div className="blog-cont cont" data-aos="fade-up">
          <div className="card-box" data-aos="fade-up" data-aos-delay="200">
            {data &&
              data.slice(0, visibleblog).map((blog, index) => (
                <Link
                  href={`/blogdetail/${blog.id}`}
                  className="card-link"
                  key={index}
                >
                  <div className="card">
                    <div className="card-data">
                      <div
                        className="card-image bg-img-cover"
                        style={{ backgroundImage: `url(https://api.diwiseglobal.com${blog.image})` }}
                      ></div>
                      <h4 className="card-title">{blog.title}</h4>
                      <p
                        className="short-desc"
                        dangerouslySetInnerHTML={{
                          __html: blog.description.slice(0, 150),
                        }}
                      ></p>
                    </div>
                    <div className="bottom-card">
                      <div className="category">{blog.category}</div>
                      <div className="date">{blog.date}</div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          {data  && (
            <div className="load-more">
              <button className="btn1">
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
