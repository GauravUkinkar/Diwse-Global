"use client";

import React, { useEffect, useState } from "react";
import "./contact.scss";
import { delay, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { name } from "file-loader";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const Contact = () => {
  const [formdata, setformdata] = useState({
    fullname: "",
    email: "",
    contact: "",
    message: "",
  });
  
  useEffect(() => {
    AOS.init();
  }, []);



  const contactSubmission = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.diwiseglobal.com/auth/contact/",
        formdata
      );
      toast.success("Thank You for Your Inquiry in DIwise!");
      setformdata({
        fullname: "",
        email: "",
        contact: "",
        message: "",
      });
    } catch (err) {
      toast.error("Failed to submit form !");
    }
  };

  return (
    <>
      <div className="contact-parent parent">
        <div className="contact-cont cont">
          <div className="left" data-aos="fade-up">
            <h2 className="c-title">
              <span className="gradient-text bold_text">Get in Touch</span> <span className="light_text">
              with Diwise
              Global
              </span>
            </h2>
            <div className="line"></div>
            <form className="contact-form" onSubmit={contactSubmission}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formdata.fullname}
                onChange={(e) =>
                  setformdata({ ...formdata, fullname: e.target.value })
                }
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formdata.email}
                onChange={(e) =>
                  setformdata({ ...formdata, email: e.target.value })
                }
              />
              <input
                type="text"
                name="number"
                placeholder="Phone Number"
                required
                value={formdata.contact}
                onChange={(e) =>
                  setformdata({ ...formdata, contact: e.target.value })
                }
              />
              <textarea
                name="message"
                placeholder="Message"
                required
                value={formdata.message}
                onChange={(e) =>
                  setformdata({ ...formdata, message: e.target.value })
                }
              ></textarea>
              <button className="btn1" type="submit">
                Send Message
              </button>
            </form>
          </div>
          <div className="right bg-img-cover" data-aos="fade-down"></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
