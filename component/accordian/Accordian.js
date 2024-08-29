import React, { useEffect, useState } from "react";
import "./accordian.scss";
import axios from "axios";

const Accordian = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://api.diwiseglobal.com/auth/blogs/");
        setData(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <div className="accordian-parent parent">
        <div className="accoridan-cont cont">
          <h3 className="heading">
            Stay Digitalised with our <span className="gradeint-text">Blog Insights</span>
          </h3>
          <div className="blogs-list">
            {data.slice(0, 3).map((blog, index) => (
              <div className="blogs-navigation imageHover" key={index}>
                <a href="/blogs" className="blog-para imageHover"  data-index={index} >
                  {blog.title}

                  <span className="rightend">
                    <span className="date">{blog.date}</span>
                    <span className="btnbllog">{blog.category}</span>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordian;