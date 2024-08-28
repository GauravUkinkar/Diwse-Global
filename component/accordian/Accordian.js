"use client";
import React, { useEffect, useState } from "react";
import "./accordian.scss";
import axios from "axios";
const Accordian = () => {
  const accordianContent = [
    "Cutting-Edge Social Media: Stay Ahead of the Curve",
    "Social Media: Your Springboard to Media Fame",
    "The Science of User Experience (UX): Designing websites that convert",
  ];



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
      <div className="accordian-parent parent ">
        <div className="accoridan-cont cont">
          <h3 className="heading">
            Stay Ahead of the Curve with Our Digital Insights
          </h3>
          <div className="blogs-list">
            {data && data.slice(0,3).map((data, index) => (
              <a href="/blogs" className="blog-para imagehover" key={index}>
                {data.title}

                <span className="rightend">
                  <span className="date">{data.date}</span>
                  <span className="btnbllog">{data.category}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordian;
