"use client"
import React from "react";
import "./tools.scss";
import { SiWhatsapp } from "react-icons/si";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
const Tools = () => {
  return (
    <div className="tool-parent">
      <a href="https://wa.me/+971508060418" className="side-whatsapp manage-icons" target="__blank"  >
        <SiWhatsapp  className="whatsapp-icon" />{" "}
        <span className="whatsapp-span">Chat Now</span>
      </a>
      <a href="mailto:info@diwiseglobal.com" className="side-mail manage-icons" target="__blank" >
        <IoMailOutline className="mail-icon" />{" "}
        <span className="email-span">Enquire Now</span>
      </a>
      <a href="tel:+971508060418" className="side-phone manage-icons" >
        {" "}
        <FiPhone className="phone-icon" />{" "}
        <span className="phone-span">Call Now</span>
      </a>

      
    </div>
  );
};

export default Tools;
