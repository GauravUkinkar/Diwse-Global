import React, { useEffect } from "react";
import "./accordian.scss";
import axios from "axios";
const Accordian = () => {
  const accordianContent = [
    "Cutting-Edge Social Media: Stay Ahead of the Curve",
    "Social Media: Your Springboard to Media Fame",
    "The Science of User Experience (UX): Designing websites that convert",
  ];

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("https://api.diwiseglobal.com/auth/blogs/");
      console.log(response);
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
            {accordianContent.map((content, index) => (
              <a href="/blogs" className="blog-para imagehover" key={index}>
                {content}

                <span className="rightend">
                  <span className="date">20-03-2024</span>
                  <span className="btnbllog">category</span>
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
