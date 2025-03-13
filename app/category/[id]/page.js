"use client";
import React, { useEffect, useState, useCallback } from "react";
import "../../blogs/blog.scss";
import axios from "axios";
import Link from "next/link";
import AOS from "aos";
import { useParams } from "next/navigation";

const Blogs = () => {
  const [categoryname, setCategoryname] = useState("");
  const [visibleblog, setVisibleBlogs] = useState(3);
  const [data, setData] = useState([]);
  const { id } = useParams();

  const fetchBlogs = useCallback(async () => {
    if (!id) return; // Prevent API call if id is not available

    try {
      const response = await axios.get(
        `https://api.diwiseglobal.com/auth/category/${id}/`
      );
      
      if (response.data.length > 0) {
        setData(response.data);
        setCategoryname(response.data[0].category);
      } else {
        setData([]);
        setCategoryname("No Category Found");
      }
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  }, [id]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="blog-parent-b parent">
        <div className="top-color parent">
          <div className="top-color-cont cont">
            <h3 className="about-heading">{categoryname || "Loading..."}</h3>
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
            {data.length > 0 ? (
              data.slice(0, visibleblog).map((blog) => (
                <Link
                  href={`/blogdetail/${blog.id}`}
                  className="card-link"
                  key={blog.id}
                >
                  <div className="card">
                    <div className="card-data">
                      <div
                        className="card-image bg-img-cover"
                        style={{
                          backgroundImage: `url(https://api.diwiseglobal.com${blog.image})`,
                        }}
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
              ))
            ) : (
              <p>No blogs available for this category.</p>
            )}
          </div>

          {data.length > 3 && (
            <div className="load-more">
              <button
                className="btn1"
                onClick={() => setVisibleBlogs((prev) => prev + 3)}
              >
                Load More Blogs
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blogs;
