import React from "react";
import "./accordian.scss";
const Accordian = () => {
  const accordianContent = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, omnis.",
  ];

  return (
    <>
      <div className="accordian-parent parent ">
        <div className="accoridan-cont cont">
          <h3 className="heading">
            Stay Ahead of the Curve with Our Digital Insights
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
