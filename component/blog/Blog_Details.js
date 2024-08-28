import React from "react";
import "./blog_details.scss";
import Button_comp from "../button/Button_comp";
import { SlCalender } from "react-icons/sl";
import { IoTimeOutline } from "react-icons/io5";

const Blog_Details = () => {
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
              <div className="date">12/12/1212</div>
            </div>
            <div className="time-icon">
              <IoTimeOutline />
              <div className="time">12:54 AM</div>
            </div>
          </div>
          <h4 className="blog-title">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
            quaerat!
          </h4>
          <p className="blog-desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            aliquam nisi obcaecati, error voluptates maiores at alias unde
            commodi in quos assumenda hic corporis, distinctio vel doloribus
            accusamus earum velit rerum exercitationem enim debitis odit eos?
            Libero provident quis sapiente reiciendis voluptate quasi,
            praesentium repellendus. Aperiam excepturi dolore, quam voluptas
            architecto vero placeat velit blanditiis! Tempora nulla quibusdam,
            non provident deserunt esse enim optio eveniet asperiores tempore
            amet ut id molestiae rem, est facilis minima saepe unde laborum
            neque odit molestias? Perferendis ullam magnam expedita minima,
            dolorem optio facere non maxime nemo quidem perspiciatis
            necessitatibus blanditiis consectetur molestiae deleniti
            consequuntur placeat recusandae cupiditate possimus quo ea. Atque
            nam laborum commodi repellat! Aperiam expedita accusantium ea,
            delectus culpa, fuga dolor necessitatibus repellat recusandae animi
            sint iste aliquam accusamus laudantium dolorum quae magni quaerat
            eum! Totam error consequuntur, cumque accusamus est saepe debitis
            dolore voluptas, voluptatum inventore vel cum iusto in voluptatibus,
            dicta quasi dolorem aspernatur possimus. Laboriosam minus debitis
            labore saepe rerum illo reprehenderit cupiditate, repudiandae
            doloremque praesentium odio porro adipisci voluptate consectetur
            deserunt nulla nemo veniam enim repellat dolore eveniet? Officia
            rerum quia, voluptatibus placeat accusantium consequatur blanditiis,
            est aspernatur earum incidunt ut natus vel vitae optio. Ad, ipsam
            sit.
          </p>
          <div className="btn">
            <Button_comp btn_text="All Blogs" />
          </div>
        </div>
        <div className="right">
          <div className="categories">
            <h4>Blog <span>Categories</span></h4>
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
            <h4>Recent <span>Posts</span></h4>
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
