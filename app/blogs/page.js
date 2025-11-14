"use client";
import React, { useEffect, useState } from "react";
import "./blog.scss";
import Blog_Details from "@/component/blog/Blog_Details";
import axios from "axios";
import Link from "next/link";
import AOS from "aos";
import { Helmet } from "react-helmet";

const Blogs = () => {
  const [visibleblog, setVisibleBlogs] = useState(3);
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState([]);
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "https://tomcat.diwise.in/DiwiseGlobalAdminPanel/blog/getallblogs"
      );

      const mapped = response.data.reverse().map((item) => item.data);
      const sorted = mapped.sort((a, b) => new Date(b.date) - new Date(a.date));
      setdata(sorted);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
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
      <Helmet>
        <title>Insights and Trends | DIwise Blog</title>
        <meta
          name="description"
          content="Discover insights on digital marketing, branding businesses, content strategy, and social media marketing in the digital marketing world."
        />
        <meta
          name="keywords"
          content="blog, digital transformation, technology trends, industry insights, expert opinions, innovation, business strategies, digital marketing, customer engagement, digital marketing, branding businesses, content strategy, social media marketing, digital marketing world"
        />
      </Helmet>

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
        {loading ? (
          <div className="loader"></div>
        ) : (
          <div className="blog-cont cont" data-aos="fade-up">
            <div className="card-box" data-aos="fade-up" data-aos-delay="200">
              {data &&
                data.slice(0, visibleblog).map((blog, index) => (
                  <Link
                    href={`/blogdetails?slug=${blog.title
                      .trim()
                      .split(" ")
                      .join("_")}`}
                    className="card-link"
                    key={index}
                  >
                    <div className="card">
                      <div className="card-data">
                        <div className="card-image bg-img-cover">
                          <img
                            src={blog?.featuredImage}
                            alt={blog?.alter_text}
                          />
                        </div>
                        <h4 className="card-title">{blog.title}</h4>
                        <p
                          className="short-desc"
                          dangerouslySetInnerHTML={{
                            __html: blog.description.slice(0, 100),
                          }}
                        ></p>
                      </div>
                      <div className="bottom-card">
                        <div className="category">{blog?.category}</div>
                        <div className="date">{blog?.date}</div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            {data.length > 3 && visibleblog < data.length && (
              <div className="load-more">
                <button
                  className="btn1"
                  onClick={() => setVisibleBlogs(visibleblog + 3)}
                >
                  Load More Blog
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Blogs;
