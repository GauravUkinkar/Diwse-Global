"use client";

import React, { useEffect, useRef } from "react";
import "../Axonic_casestudy/casestudy.scss";
import Button_comp from "@/component/button/Button_comp";
import { LuDot } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";
import About_card_swiper from "@/component/about/About_card_swiper";

const page = () => {
  const caseStudy = useRef();
  const caseStudyTrigger = useRef();

  useEffect(() => {
    AOS.init();
  }, []);

  const listItem = [
    "Custom strategies tailored to your unique goals.",
    "Experience with global reach across multiple markets.",
    "Proven success with a track record of measurable outcomes.",
    "Innovative approaches and cutting-edge digital solutions.",
    "Client focus is key, as your success is our top priority.",
    "Transparent and open communication at every step.",
  ];

  return (
    <>
      <div className="case-study-page parent">
        <div className="case-study-page-cont cont">
          <h3 className="case-heading" data-aos="fade-up">
          Trading the best of the world,
            <span className="gradient-text"><a href="https://onkarsugars.com/" target="_blank"> Onkar World’s </a></span> Digital Partner

          </h3>
          <p className="case-para" data-aos="fade-up" data-aos-delay="200">
          As Onkar World's digital partner, DIwise played a crucial role in establishing their online presence and driving global trade. Through effective digital marketing strategies, we helped them solidify their position as the first and only trading company worldwide and generated valuable leads through targeted social media campaigns.
          </p>
          <div data-aos="fade-up" data-aos-delay="400">
            <Button_comp btn_text="Get Started" />
          </div>
        </div>
      </div>

      <div className="case-study-second parent" ref={caseStudyTrigger}>
        <div
          className="case-study-second-cont top-img cont bg-img-cover"
          ref={caseStudy}
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
              Our commitment to excellence has enabled us to deliver exceptional results for Onkar World, solidifying our reputation as a trusted partner in the global trade industry. Through our innovative digital marketing strategies, we've helped them enhance their online presence, attract new customers, and drive sustainable growth.
              </p>
            </div>
            <div className="btnlist" data-aos="fade-up" data-aos-delay="400">
              <div className="case-btn">Digital Marketing & SEO</div>
              <div className="case-btn">Web development</div>
              <div className="case-btn">Lead Generation Campaigns</div>
              <div className="case-btn">Branding and Creative Services</div>
              <div className="case-btn">Public Relations Outreach</div>
              
            </div>
          </div>

          <div className="bottom" data-aos="fade-up" data-aos-delay="500">
            <Button_comp btn_text="Get Started" />
          </div>
        </div>
      </div>

      <div className="fifth-parent parent">
        <div className="fifth-section-cont cont ">
          <div className="left section-img bg-img-cover" data-aos="fade-up" data-aos-delay="200"></div>
          <div className="right" data-aos="fade-up" data-aos-delay="400">
            <h3 className="fifth-section-heading">
            Why <span className="gradient-text">Clients Trust DIwise</span>
            </h3>
            <p className="fifth-section-para">
            At DIwise, we believe in building strong partnerships based on mutual understanding and trust. By deeply understanding our clients' unique goals, stories, and perspectives, we develop customised strategies that deliver exceptional results.
            </p>

            <div className="list-item">
              <p>Here are a few other things that might make us popular among our clients:</p>
              {listItem.map((item, index) => (
                <p className="listItem" data-aos="fade-up" data-aos-delay={600 + index * 100} key={index}>
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
  );
};

export default page;
 