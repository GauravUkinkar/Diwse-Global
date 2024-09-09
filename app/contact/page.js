"use client"; // Add this line at the top

import Contact from "@/component/contact/Contact";
import React, { useEffect, useState } from "react";
import "./contact_page.scss";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { IoCallSharp } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import CardComp from "@/component/card_comp/CardComp";


const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <>
      <Contact />
<CardComp/>
  
      {/* <div className="contact-box-p parent">
        <div className="contact-box cont">
          <div className="box box1" data-aos="fade-up" >
            <h3 className="title g">Address</h3>
            <div className="add-box">
              <div className="icon">
                <GrLocation />
              </div>
              <p className="desc-d">
                <a
                  href="https://maps.app.goo.gl/nN6Vi6L55yzdAU6h9"
                  target="_blank"
                >
                  Office no. 214-216, 10 Biz Park,Near Symbiosis Law College,
                  Airport Road,Vimannagar, Pune- 411014
                </a>
              </p>
            </div>
            <div className="add-box">
              <div className="icon">
                <GrLocation />
              </div>
              <p className="desc-d">
                <a
                  href="https://maps.app.goo.gl/LVSP2ZzFGkCNvMbB9"
                  target="_blank"
                >
                  Docklands Business Centre, Suite 12/3D 10-16 Tiller Road,
                  London, England E14 8PX
                </a>
              </p>
            </div>
        
          </div>
          <div className="right" data-aos="fade-up">
          <div className="box box2" >
            <h3 className="title">Contact</h3>
            <div className="add-box">
              <div className="icon">
                <IoCallSharp />
              </div>
              <p className="desc-d">
                <a href="tel:+918482936866">+91 8482936866</a>
              </p>
            </div>
            <div className="add-box">
              <div className="icon">
                <IoCallSharp />
              </div>
              <p className="desc-d">
                <a href="tel:+447398814161">+44 7398 814161</a>
              </p>
            </div>
          
          </div>
          <div className="box"  >
            <h3 className="title">Social Media</h3>
            <div className="social-i">
              <a href="https://www.facebook.com/DIwiseLtd" target="_blank" className="social">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/diwiseltd/" target="_blank" className="social">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FDIwiseLtd" target="_blank" className="social">
                <FaXTwitter />
              </a>
              <a href="https://www.linkedin.com/company/diwiseltd" target="_blank" className="social">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default page;
