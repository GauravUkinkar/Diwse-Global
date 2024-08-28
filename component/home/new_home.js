"use client";
import React, { useEffect } from "react";
import Button_comp from "../button/Button_comp";
import Icon from "../dynamicIcon/Icon";
import "../home/new_home.scss";
import { motion } from "framer-motion";
import img from "../../public/assets/home/hcc.jpg"

const New_home = () => {
  useEffect(() => {
    const rightElement = document.querySelector(".right");
    setTimeout(() => {
      rightElement.classList.add("animate");
    }, 500);
  }, []);
  return (
    <>
      <div className="home-parent parent">
        <div className="home-cont cont">
          {/* Left section */}
          <div className="left">
            <h1 className="title">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
              >
                Expand Your World,
              </motion.div>
              <br />
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="gradient-text">Digitally</span>
              </motion.div>
            </h1>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="desc">
                At DIwise Global, we're your strategic digital partner,
                elevating your brand to a global stage. With innovative
                solutions and a proven track record, we empower businesses to
                thrive in the digital landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Button_comp btn_text="Go Global Today " link="contact" />
            </motion.div>
          </div>

          {/* Right section */}
          <div className="right">
          
          <div className="video-box" data-aos="fade-up">
          <video autoPlay muted loop width="100%">
            <source src="/assets/home.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
            {/* <div className="img-box"></div> */}
        
          </div>
        </div>
      </div>
    </>
  );
};

export default New_home;
