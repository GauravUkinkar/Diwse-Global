import React, { useEffect, useState } from "react";
import "./accordian.scss";
import axios from "axios";
import Link from "next/link";

const Accordian = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}blog/getallblogs`);
        const mapped = response.data.map((item)=>item.data)
      setData(mapped.reverse());

  

     
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
            {data?.slice(0, 3).map((blog, index) => (
              <div className="blogs-navigation imageHover" key={index}>
                <Link href={`/blogdetails?slug=${blog.title.trim().split(" ").join("_")}`} className="blog-para imageHover"  data-index={index} >
                  {blog.title}

                  <span className="rightend">
                    <span className="date">{blog.date}</span>
                    {/* <span className="btnbllog">{blog.category}</span> */}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordian;