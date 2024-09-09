"use client";

import React, { useEffect, useRef } from "react";
import "../Axonic_casestudy/casestudy.scss";
import Button_comp from "@/component/button/Button_comp";
import { LuDot } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";
import About_card_swiper from "@/component/about/About_card_swiper";
import hccs from "../../public/assets/img/hcc.webp";
import hcc_about from "../../public/assets/img/hcc_about.webp";
import hcc_fb from "../../public/assets/img/hcc_fb.webp";
import hcc_insta from "../../public/assets/img/hcc_insta.webp";
import hcc_link from "../../public/assets/img/hcc_link.webp";
import hccp from "../../public/assets/img/hcc-p.webp"

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

  const hccImages = [
    {
      image: hccs,
    },
    {
      image: hcc_about,
    },
    {
      image: hcc_fb,
    },
    {
      image: hcc_insta,
    },
    {
      image: hcc_link,
    },
    {
      image: hccp,
    },
  ];

  return (
    <>
      <div className="case-study-page parent">
        <div className="case-study-page-cont cont">
          <h3 className="case-heading" data-aos="fade-up">
            <span className="gradient-text">
              <a href="https://www.healthcareconcierge.net/" target="_blank">
                {" "}
               Spreading Smiles 
{" "}
              </a>
            </span>{" "}
            and Laughter with The Team Dental 
          </h3>
          <p className="case-para" data-aos="fade-up" data-aos-delay="200">
          As their trusted digital partner, DIwise provided comprehensive strategies to elevate their online visibility and attract new patients. We leverage our expertise to create a positive and engaging digital experience for their audience.

          </p>
          <div data-aos="fade-up" data-aos-delay="400">
            <Button_comp link="/contact" btn_text="Get Started" />
          </div>
        </div>
      </div>

      <div className="case-study-second parent" ref={caseStudyTrigger}>
        <div
          className="case-study-second-cont denatl-top-img cont bg-img-cover"
          ref={caseStudy}
          data-aos="fade-up"
          data-aos-delay="600"
        ></div>
      </div>

      <div className="case-study-third parent">
        <div className="case-study-third-cont cont">
          <div className="top">
            <h4 className="heading" data-aos="fade-up" data-aos-delay="200">
              Proven Results  <span className="gradient-text"></span>
            </h4>
          </div>

          <div className="middle">
            <div className="left" data-aos="fade-up" data-aos-delay="300">
              <p className="middlepara">
              Through our targeted marketing efforts, we successfully built the brand and increased patient acquisition. Our effective campaigns generated leads and promoted The Team Dental as a preferred choice for dental care. Our dedication to delivering exceptional results has solidified our partnership.

              </p>
            </div>
            <div className="btnlist" data-aos="fade-up" data-aos-delay="400">
              <div className="case-btn">Digital Marketing and SEO
              </div>
              <div className="case-btn">Web Development
              </div>
              <div className="case-btn">Branding and Creative Services
              </div>
              <div className="case-btn">Public Relations Outreach
              </div>
              <div className="case-btn">Social Media Ad Campaigns 

              </div>
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
              Why <span className="gradient-text">Clients Trust DIwise</span>
            </h3>
            <p className="fifth-section-para">
            At DIwise, we believe in building strong partnerships based on mutual understanding and trust. By deeply understanding our clients' unique goals, stories, and perspectives, we develop customised strategies that deliver exceptional results.

            </p>

            <div className="list-item">
              <p>
              Here are a few other things that might make us popular among our clients:

              </p>
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
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <About_card_swiper swiperImg={hccImages} />
    </>
  );
};

export default page;
