import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { GiPlainCircle } from "react-icons/gi";
import "./new_footer.scss";

const New_footer = () => {
  return (
    <>
      <div className="nfooter-parent parent">
        <div className="nfooter-cont cont">
          <div className="left">
            <p className="desc">
            Let's Grab a Coffee. Drop by our office, we're happy to meet up and discuss your digital marketing needs.
            </p>
            <h2 className="title">
              Interested in working with us?
            </h2>
            <a href="mailto:info@diwiseglobal.com" className="mail">
              info@diwiseglobal.com
            </a>
            <div className="line"></div>
            <div className="icon-link">
              <a href="https://www.facebook.com/DIwiseLtd" target="_blank">
                Facebook <span className="icon"><FaArrowRight /></span>
              </a>
              <a href="https://www.instagram.com/diwiseltd/" target="_blank">
                Instagram <span className="icon"><FaArrowRight /></span>
              </a>
              <a href="https://www.linkedin.com/company/diwiseltd" target="_blank">
                LinkedIn <span className="icon"><FaArrowRight /></span>
              </a>
              <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FDIwiseLtd" target="_blank">
                X <span className="icon"><FaArrowRight /></span>
              </a>
            </div>
          </div>
          <div className="right">
            <div className="iconlink">
              <div className="link1">
                <a href="/">
                  Home<span className="icon1"><FaArrowRight /></span>
                </a>
              </div>
              <div className="link2">
                <a href="about">
                  About <span className="icon1"><FaArrowRight /></span>
                </a>
              </div>
              <div className="link3">
                <a href="/#home_casestudy">
                  Case Studies <span className="icon1"><FaArrowRight /></span>
                </a>
              </div>
              <div className="link4">
                <a href="blogs">
                  Blogs <span className="icon1"><FaArrowRight /></span>
                </a>
              </div>
              <div className="link5">
                <a href="contact">
                  Contact Us <span className="icon1"><FaArrowRight /></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-parent parent">
        <div className="copyright-cont cont">
          <div className="left">
            <p>© 2024 | All Rights Reserved | DIwise</p>
          </div>
          <div className="right">
            <a href="/privacy">
              <span className="circle1"><GiPlainCircle /></span>
              Privacy Policy
            </a>
            <a href="/term">
              <span className="circle1"><GiPlainCircle /></span>
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default New_footer;
