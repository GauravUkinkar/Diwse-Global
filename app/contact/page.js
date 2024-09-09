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

const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <>
      <Contact />

      <div className="branches parent">
        <div className="branches-cont cont">
          <div className="branch1 bg-img-cover branch">
            <div className="country">
              <div className="flag bg-img-cover"></div>
              <p>India</p>
            </div>

            <a href="tel:+918482936866" className="number">
              <span>
                <IoCallSharp />
              </span>{" "}
              <span>+91 8482936866</span>
            </a>
            <a
              href="https://maps.app.goo.gl/nN6Vi6L55yzdAU6h9"
              className="address"
              target="_blank"
            >
              <span>
                <GrLocation />
              </span>
              <span>
                Office no. 214-216, 10 Biz Park,Near Symbiosis Law College,
                Airport Road,Vimannagar, Pune- 411014
              </span>
            </a>
          </div>
          <div className="branch2 bg-img-cover branch">
            <div className="country">
              <div className="flag "></div>
              <p>UAE</p>
            </div>

            <a href="tel:+971508060418" className="number">
              <span>
                <IoCallSharp />
              </span>{" "}
              <span>+971508060418</span>
            </a>
            <a
              href="https://maps.app.goo.gl/5HJr7gqHrCPyjLTKA"
              className="address"
              target="_blank"
            >
              <span>
                <GrLocation />
              </span>
              <span>
                Office no. 1304 | Building no. LB19 | JAZFA View 18-19, Jebel
                Ali Free Zone, PO Box 262746 Downtown Jabel Ali - Dubai - United
                Arab Emirates
              </span>
            </a>
          </div>
          <div className="branch3 bg-img-cover branch">
            <div className="country">
              <div className="flag bg-img-cover"></div>
              <p>United Kingdom</p>
            </div>

            <a href="tel:+447398814161" className="number">
              <span>
                <IoCallSharp />
              </span>{" "}
              <span>+44 7398814161</span>
            </a>
            <a
              href="https://maps.app.goo.gl/nN6Vi6L55yzdAU6h9"
              className="address"
              target="_blank"
            >
              <span>
                <GrLocation />
              </span>
              <span>
                Docklands Business Centre, Suite 12/3D 10-16 Tiller Road,
                London, England E14 8PX
              </span>
            </a>
          </div>
        </div>
      </div>
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
