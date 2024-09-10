"use client";

import React, { useEffect, useRef } from "react";
import "../Axonic_casestudy/casestudy.scss";
import Button_comp from "@/component/button/Button_comp";
import { LuDot } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";
import About_card_swiper from "@/component/about/About_card_swiper";
import nvm1 from "../../public/assets/casestudy/nvm/nvm1.webp";
import nvm2 from "../../public/assets/casestudy/nvm/nvm2.webp";
import nvm3 from "../../public/assets/casestudy/nvm/nvm3.webp";
import nvm4 from "../../public/assets/casestudy/nvm/nvm4.webp";
import nvm5 from "../../public/assets/casestudy/nvm/nvm5.webp";
import nvm6 from "../../public/assets/casestudy/nvm/nvm6.webp";


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
      image: nvm1,
    },
    {
      image: nvm2,
    },
    {
      image: nvm3,
    },
    {
      image: nvm4,
    },
    {
      image: nvm5,
    },
    {
      image: nvm6,
    },
  ];

  return (
    <>
      <div className="case-study-page parent">
        <div className="case-study-page-cont cont">
          <h3 className="case-heading" data-aos="fade-up">
            <span className="gradient-text">
              <a href="https://nvminfratech.com/" target="_blank">
                {" "}
                Building Brand{" "}
              </a>
            </span>{" "}
             and Growing Capital with NVM Capital
          </h3>
          <p className="case-para" data-aos="fade-up" data-aos-delay="200">
          As NVM Capital's trusted digital partner, DIwise provided comprehensive expertise to enhance their online visibility and reach. Our tailored marketing strategies helped them connect with a wider audience and showcase their unique offerings.

          </p>
          <div data-aos="fade-up" data-aos-delay="400">
            <Button_comp link="/contact" btn_text="Get Started" />
          </div>
        </div>
      </div>

      <div className="case-study-second parent" ref={caseStudyTrigger}>
        <div
          className="case-study-second-cont nvm-top-img cont bg-img-cover"
          ref={caseStudy}
          data-aos="fade-up"
          data-aos-delay="600"
        ></div>
      </div>

      <div className="case-study-third parent">
        <div className="case-study-third-cont cont">
          <div className="top">
            <h4 className="heading" data-aos="fade-up" data-aos-delay="200">
            Proven <span className="gradient-text">Results</span>
            </h4>
          </div>

          <div className="middle">
            <div className="left" data-aos="fade-up" data-aos-delay="300">
              <p className="middlepara">
              Through our effective digital marketing services, we successfully built NVM Capital's brand and attracted a larger customer base. We generated valuable leads and positioned them as a leading provider in their industry.

              </p>
            </div>
            <div className="btnlist" data-aos="fade-up" data-aos-delay="400">
              <div className="case-btn">Digital Marketing and SEO
              </div>
              <div className="case-btn">Social Media Ad Campaigns </div>
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
