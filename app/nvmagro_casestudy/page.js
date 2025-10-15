"use client";

import Button_comp from "@/component/button/Button_comp";
import React, { useRef } from "react";
import nvm_agro from "../../public/assets/nvm_agro.webp";
import { LuDot } from "react-icons/lu";
import "../Axonic_casestudy/casestudy.scss"
const Page = () => {
  const CaseStudy = useRef();
  const CaseStudyTrigger = useRef();

  const listItem = [
    {
      bold: "Tailored Strategies:",
      para: "Every plan is customized to align with your goals.",
    },
    {
      bold: "Global Experience:",
      para: "Expertise that spans multiple markets and industries.",
    },
    {
      bold: "Proven Results:",
      para: "A strong track record of measurable success.",
    },
    {
      bold: "Innovation First: ",
      para: "Creative thinking backed by advanced digital solutions.",
    },
    {
      bold: "Client-Centric Approach:",
      para: "Your growth and success remain our highest priority.",
    },
    {
      bold: "Transparent Communication:",
      para: "Clear, honest collaboration at every stage.",
    },
  ];
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
          style={{ backgroundImage: `url(${nvm_agro.src})` }}
          ref={CaseStudy}
          data-aos="fade-up"
          data-aos-delay="600"
        ></div>
      </div>
      <div className="case-study-third parent">
        <div className="case-study-third-cont cont">
          <div className="top">
            <h4 className="heading" data-aos="fade-up" data-aos-delay="200">
              Proven Results with <span className="gradient-text">DIwise</span>
            </h4>
          </div>

          <div className="middle">
            <div className="left" data-aos="fade-up" data-aos-delay="300">
              <p className="middlepara">
                {`  Our dedication to excellence has empowered us to achieve remarkable outcomes for NVM Agro, strengthening our position as a reliable partner in the agricultural trade sector. Through innovative digital marketing strategies, we’ve helped them build a strong online presence, reach new audiences, and drive consistent, sustainable growth.`}
              </p>
            </div>
            <div className="btnlist" data-aos="fade-up" data-aos-delay="400">
              <div className="case-btn">
                Digital Marketing and Search Engine Optimization (SEO)
              </div>
              <div className="case-btn">Web Development</div>
              <div className="case-btn">Lead Generation Campaigns</div>
              <div className="case-btn">Branding and Creative Services</div>
              <div className="case-btn">Public Relations Outreach</div>
            </div>
          </div>

          <div className="bottom" data-aos="fade-up" data-aos-delay="500">
            <Button_comp link="/contact" btn_text="Get Started" />
          </div>
        </div>
      </div>

      <div className="fifth-parent parent">
        <div className="fifth-section-cont cont ">
          <div
            className="left section-img bg-img-cover"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div>
          <div className="right" data-aos="fade-up" data-aos-delay="400">
            <h3 className="fifth-section-heading">
              Why
              <span className="gradient-text">Clients Trust DIwise</span>
            </h3>
            <p className="fifth-section-para">
              {` At DIwise, we focus on creating lasting partnerships built on trust and a deep understanding of our clients’ goals and vision. By immersing ourselves in each client’s story, we craft tailored strategies that consistently deliver impactful results.
`}
            </p>

            <div className="list-item">
              <p>Here’s what makes us a preferred choice for our clients:</p>
              {listItem.map((item, index) => (
                <p
                  className="listItem"
                  data-aos="fade-up"
                  data-aos-delay={600 + index * 100}
                  key={index}
                >
                  <span>
                    <LuDot />
                  </span>
                 <strong>{item?.bold}</strong>
                  <strong className="para" >{item?.para}</strong>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
