import React from "react";
import "./footer.scss";
import logo from "../../public/assets/logo/logo.png";
import Image from "next/image";
import { IoIosMailUnread } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-parent parent">
      <div className="footer-cont cont">
        <div className="line"></div>
        <div className="footer-box">
          <div className="box1">
            <div className="logo">
              <Image src={logo} alt="logo" />
            </div>
            <div className="mail-box">
              <div className="icon">
                <IoIosMailUnread />
              </div>
              <div className="text">testing@gmail.com</div>
            </div>
            <div className="phone-box">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <div className="text">+91 9090989789</div>
            </div>
          </div>
          <div className="box2">
            <h3 className="f-title">Lorem, ipsum.</h3>
            <a href="">link1</a>
            <a href="">link1</a>
            <a href="">link1</a>
            <a href="">link1</a>
            <a href="">link1</a>
          </div>
          <div className="box3">
            <h3 className="f-title">Lorem, ipsum.</h3>
            <a href="">link1</a>
            <a href="">link1</a>
            <a href="">link1</a>
            <a href="">link1</a>
            <a href="">link1</a>
          </div>
          <div className="box4">
            <h3 className="f-title">Lorem, ipsum.</h3>
            <a href="">link1</a>
            <a href="">link1</a>
            <a href="">link1</a>
            <a href="">link1</a>
            <a href="">link1</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">© 2024 Made in DI-wise</p>
          <p className="copyright1">All Rights Reserved</p>
          <div className="social-icons">
            <a className="icon1"><FaFacebookF /></a>
            <a className="icon2"><AiFillInstagram /></a>
            <a className="icon3"><FaTwitter /></a>
            <a className="icon4"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
