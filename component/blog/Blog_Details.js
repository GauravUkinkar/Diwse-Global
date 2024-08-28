import React from "react";
import "./blog_details.scss";
import Button_comp from "../button/Button_comp";
import { SlCalender } from "react-icons/sl";
import { IoTimeOutline } from "react-icons/io5";

const Blog_Details = ({ data }) => {
  const categories = [
    {
      title: "Business",
      total: 2,
      link: "#",
    },
    {
      title: "Health",
      total: 3,
      link: "#",
    },
    {
      title: "Social",
      total: 9,
      link: "#",
    },
    {
      title: "Technology",
      total: 0,
      link: "#",
    },
  ];

  const recentPosts = [
    {
      date: "12/12/1222",
      time: "10:10 PM",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequuntur!",
      link: "#",
      imgSrc:
        "https://img.freepik.com/free-photo/close-up-cutting-plant-leaves_23-2148905280.jpg?t=st=1723310026~exp=1723313626~hmac=1ff2a36de003258b64f0909d982340552e8b607a737183cd7ca2579fdc24dec2&w=996",
    },
    {
      date: "12/12/1222",
      time: "12:44 AM",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequuntur!",
      link: "#",
      imgSrc:
        "https://img.freepik.com/free-photo/hands-cataloging-uncooked-buckwheat-gray_114579-39041.jpg?t=st=1723310287~exp=1723313887~hmac=c7face0f0b671ab2a17d03a07a8a25f5ce3e2ef7504d3163edf7ed681c0ec408&w=996",
    },
    {
      date: "24/12/2015",
      time: "12:44 AM",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequuntur!",
      link: "#",
      imgSrc:
        "https://img.freepik.com/free-photo/close-up-cutting-plant-leaves_23-2148905280.jpg?t=st=1723310026~exp=1723313626~hmac=1ff2a36de003258b64f0909d982340552e8b607a737183cd7ca2579fdc24dec2&w=996",
    },
  ];

  return (
    <div className="blog-details-parent parent">
      <div className="blog-details-cont cont">
        <div className="left">
          <div className="img-box bg-img-cover"></div>
          <div className="date-time-box">
            <div className="date-icon">
              <SlCalender />
              <div className="date">{data.date}</div>
            </div>
            <div className="time-icon">
              <IoTimeOutline />
              <div className="time">12:54 AM</div>
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
                  <div className="category-title">{category.title}</div>
                  <div className="total">({category.total})</div>
                </a>
                <div className="line"></div>
              </div>
            ))}
          </div>
          <div className="recent-post">
            <h4>
              Recent <span>Posts</span>
            </h4>
            {recentPosts.map((post, index) => (
              <div key={index}>
                <a href={post.link} className="recent-post-box">
                  <div
                    className="left bg-img-cover"
                    style={{ backgroundImage: `url(${post.imgSrc})` }}
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
