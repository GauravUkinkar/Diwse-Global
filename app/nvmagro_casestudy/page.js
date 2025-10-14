"use client";

import Button_comp from "@/component/button/Button_comp";
import React, { useRef } from "react";
import nvm_agro from "../../public/assets/nvm_agro.webp"

const Page = () => {
      const CaseStudy = useRef();
      const CaseStudyTrigger = useRef();
  return (
    <>
      <div className="case-study-page parent">
        <div className="case-study-page-cont cont">
          <h3 className="case-heading" data-aos="fade-up">
            <span className="gradient-text">
              <a href="https://nvmagro.com/" target="_blank">
                {" "}
                NVM Agro:
              </a>
            </span>
             Cultivating Growth through Digital Transformation
          </h3>
          <p className="case-para" data-aos="fade-up" data-aos-delay="200">
            NVM Agro Private Limited is a Pune-based agribusiness firm
            established in 2018. Specializing in diverse agricultural services,
            the company aims to enhance its digital presence to better serve the
            farming community and expand its market reach.
          </p>
          <div data-aos="fade-up" data-aos-delay="400">
            <Button_comp link="/contact" btn_text="Get Started" />
          </div>
        </div>
      </div>

      <div className="case-study-second parent" ref={CaseStudyTrigger}>
        <div
          className="case-study-second-cont  nvmagro-img cont bg-img-cover"
          style={{backgroundImage:`url(${nvm_agro.src})`}}
          ref={CaseStudy}
          data-aos="fade-up"
          data-aos-delay="600"
        ></div>
      </div>
        <div className="case-study-third parent">
        <div className="case-study-third-cont cont">
          <div className="top">
            <h4 className="heading" data-aos="fade-up" data-aos-delay="200">
              Results Achieved <span className="gradient-text">DIwise</span>
            </h4>
          </div>

          <div className="middle">
            <div className="left" data-aos="fade-up" data-aos-delay="300">
              <p className="middlepara">
              {`  Through our comprehensive marketing services, we've been
                instrumental in positioning Axonic as a pioneering force in the
                industry. By delivering exceptional results that exceed client
                expectations, we've solidified our reputation as a trusted
                partner.`}
              </p>
            </div>
            <div className="btnlist" data-aos="fade-up" data-aos-delay="400">
              <div className="case-btn">
                Digital Marketing and Search Engine Optimization (SEO)
              </div>
              <div className="case-btn">Web and App Development</div>
              <div className="case-btn">UX/UI designing</div>
              <div className="case-btn">Branding and Creative Services</div>
              <div className="case-btn">Public Relations Outreach</div>
            </div>
          </div>

          <div className="bottom" data-aos="fade-up" data-aos-delay="500">
            <Button_comp link="/contact" btn_text="Get Started" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
