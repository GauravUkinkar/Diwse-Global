import React, { useEffect, useState } from "react";
import "./blog_details.scss";
import Button_comp from "../button/Button_comp";
import { SlCalender } from "react-icons/sl";
import { IoTimeOutline } from "react-icons/io5";
import axios from "axios";

const Blog_Details = ({ data }) => {



  const [updatedBlogs, setUpdatedBlogs] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.diwiseglobal.com/auth/blogs/"
      );
      setUpdatedBlogs(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const [categories,setCategories] = useState([])
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://api.diwiseglobal.com/auth/categories/"
      );

      setCategories(response.data)
    } catch (err) {}
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="blog-details-parent parent">
      <div className="blog-details-cont cont">
        <div className="left">
          <div
            className="img-box bg-img-cover"
            style={{ background: `url(${data.image})` }}
          ></div>
          <div className="date-time-box">
            <div className="date-icon">
              <SlCalender />
              <div className="date">{data.date}</div>
            </div>
            <div className="time-icon">
              <IoTimeOutline />
              <div className="time">{data.time}</div>
            </div>
          </div>
          <h4 className="blog-title">{data.title}</h4>

          <p
            className="blog-desc"
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></p>
          <div className="btn">
            <Button_comp btn_text="All Blogs" />
          </div>
        </div>
        <div className="right">
          <div className="categories">
            <h4>
              Blog <span>Categories</span>
            </h4>
            {categories.map((category, index) => (
              <div className="category-main-box" key={index}>
                <a href={category.link} className="category-box">
                  <div className="category-title">{category.category_name}</div>
                  <div className="total">({category.items})</div>
                </a>
                <div className="line"></div>
              </div>
            ))}
          </div>
          <div className="recent-post">
            <h4>
              Recent <span>Posts</span>
            </h4>
            {updatedBlogs &&
              updatedBlogs.map((post, index) => (
                <div key={index}>
                  <a href={post.link} className="recent-post-box">
                    <div
                      className="left bg-img-cover"
                      style={{ backgroundImage: `url(${post.image})` }}
                    ></div>
                    <div className="right">
                      <div className="date-time">
                        <div className="date-icon">
                          <SlCalender />
                          <div className="date">{post.date}</div>
                        </div>
                        <div className="time-icon">
                          <IoTimeOutline />
                          <div className="time">{post.time}</div>
                        </div>
                      </div>
                      <div className="title">{post.title}</div>
                    </div>
                  </a>
                  <div className="line"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog_Details;
