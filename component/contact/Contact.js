"use client"

import React, { useEffect } from "react";
import "./contact.scss";
import { delay, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className="contact-parent parent">
      <div className="contact-cont cont" >
        <div className="left" data-aos="fade-up">
          <h2 className="c-title"><span className="gradient-text">Get in Touch</span> with Diwise Global</h2>
          <div className="line"></div>
          <form className="contact-form">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="text"
              name="number"
              placeholder="Phone Number"
              required
            />
            <textarea name="message" placeholder="Message" required></textarea>
            <a href="#" className="btn1" type="submit">
              Send Message
            </a>
          </form>
        </div>
        <div className="right bg-img-cover" data-aos="fade-down"></div>
      </div>
    </div>
  );
};

export default Contact;
