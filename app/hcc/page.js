"use client";

import React, { useEffect, useReducer, useRef } from "react";
import "../Casestudy/Axonic_casestudy/casestudy.scss";
import Button_comp from "@/component/button/Button_comp";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LuDot } from "react-icons/lu";
import gsap from "gsap";
import About_card_swiper from "@/component/about/About_card_swiper";

function hcc() {
  const caseStudy = useRef();
  const caseStudyTrigger = useRef();

  const listItem = [
    "Custom Strategies: Tailored to your unique goals.",
    "Global Reach: Experience across multiple markets.",
    "Proven Success: A track record of measurable outcomes.",
    "Innovative Approaches: Cutting-edge digital solutions.",
    "Client Focus: Your success is our top priority.",
    "Clear Communication: Transparent and open at every step.",
  ];

  return (
    <>
      <div className="case-study-page parent">
        <div className="case-study-page-cont cont">
          <h3 className="case-heading">
            Discover How We Drive{" "}
            <span className="gradient-text">Global Success</span>
          </h3>
          <p className="case-para">
            At Diwise Global, we pride ourselves on delivering exceptional
            results for our clients. Our case studies showcase how our
            innovative digital solutions and strategic expertise have
            transformed businesses across various industries. Each case study
            provides a detailed look at the challenges faced, the solutions
            implemented, and the impressive outcomes achieved.
          </p>
          <Button_comp btn_text="Get Started" />
        </div>
      </div>

      <div className="case-study-second parent" ref={caseStudyTrigger}>
        <div className="case-study-second-cont cont" ref={caseStudy}></div>
      </div>

      <div className="case-study-third parent">
        <div className="case-study-third-cont cont">
          <div className="top">
            <h4 className="heading">
              Proven <span className="gradient-text">Results</span>
            </h4>
          </div>

          <div className="middle">
            <div className="left">
              <p className="middlepara">
                Discover the real-world impact of our digital solutions. Our
                case studies highlight how we’ve helped businesses grow,
                innovate, and succeed in a competitive global market.
              </p>
            </div>
            <div className="btnlist">
              <div className="case-btn">Digital Marketing & SEO</div>
              <div className="case-btn">Web & App Development</div>
              <div className="case-btn">Branding & Creative Services</div>
              <div className="case-btn">Branding & Creative Services</div>
              <div className="case-btn">Branding & Creative Services</div>
              <div className="case-btn">Branding & Creative Services</div>
              {/* <div className="case-btn">Business Setup & Consulting</div>
              <div className="case-btn">Public Relations & Media Outreach</div> */}
            </div>
          </div>

          <div className="bottom">
            <Button_comp btn_text="get Started" />
          </div>
        </div>
      </div>
      {/* imagescreenshot carousel */}

      {/* fifth section */}

      <div className="fifth-parent parent">
        <div className="fifth-section-cont cont">
          <div className="left"></div>
          <div className="right">
            <h3 className="fifth-section-heading">
              Why Our Clients <span className="gradient-text">Trust Us</span>
            </h3>
            <p className="fifth-section-para">
              Clients trust Diwise Global because we consistently deliver
              results that matter. Our personalized approach, combined with
              global expertise and a commitment to innovation, ensures success
              for every project.
            </p>

            <div className="list-item">
              {listItem.map((item) => (
                <p className="listItem">
                  <span>
                    <LuDot />
                  </span>

                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <About_card_swiper />
    </>
  )
}

export default hcc
