"use client";

import React, { useEffect, useRef } from "react";
import "../Axonic_casestudy/casestudy.scss";
import Button_comp from "@/component/button/Button_comp";
import { LuDot } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";
import About_card_swiper from "@/component/about/About_card_swiper";
import akka1 from "../../public/assets/casestudy/akka/akka1.webp";
import akka2 from "../../public/assets/casestudy/akka/akka2.webp";
import akka3 from "../../public/assets/casestudy/akka/akka3.webp";
import akka4 from "../../public/assets/casestudy/akka/akka4.webp";
import akka5 from"../../public/assets/casestudy/akka/akka5.webp";
import akka6 from "../../public/assets/casestudy/akka/akka6.webp";

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
      image: akka1,
    },
    {
      image: akka2,
    },
    {
      image: akka3,
    },
    {
      image: akka4,
    },
    {
      image: akka5,
    },
    {
      image: akka6,
    },
  ];

  return (
    <>
      <div className="case-study-page parent">
        <div className="case-study-page-cont cont">
          <h3 className="case-heading" data-aos="fade-up">
            <span className="gradient-text">
              <a href="https://akkafoundation.in/" target="_blank">
                {" "}
                Lending a Helping
                {" "}
              </a>
            </span>{" "}
            Hand to the Akka Foundation Digitally
          </h3>
          <p className="case-para" data-aos="fade-up" data-aos-delay="200">
            Recognising the importance of digital technology in advancing social causes, DIwise has leveraged its expertise to support the Akka Foundation's mission. By providing comprehensive digital solutions, we have helped amplify their reach and impact.

          </p>
          <div data-aos="fade-up" data-aos-delay="400">
            <Button_comp link="/contact" btn_text="Get Started" />
          </div>
        </div>
      </div>

      <div className="case-study-second parent" ref={caseStudyTrigger}>
        <div
          className="case-study-second-cont akk-top-img cont bg-img-cover"
          ref={caseStudy}
          data-aos="fade-up"
          data-aos-delay="600"
        ></div>
      </div>

      <div className="case-study-third parent">
        <div className="case-study-third-cont cont">
          <div className="top">
            <h4 className="heading" data-aos="fade-up" data-aos-delay="200">
              Proven Results  <span className="gradient-text">DIwise</span>
            </h4>
          </div>

          <div className="middle">
            <div className="left" data-aos="fade-up" data-aos-delay="300">
              <p className="middlepara">
                Through our tailored marketing strategies, we have successfully raised awareness of the Akka Foundation's initiatives and inspired individuals to contribute to their noble cause. Our efforts have resulted in increased donations, volunteer participation, and positive social change
              </p>
            </div>
            <div className="btnlist" data-aos="fade-up" data-aos-delay="400">
              <div className="case-btn">Digital Marketing and SEO
              </div>
              <div className="case-btn">Content Creation and Management
              </div>
              <div className="case-btn">SWebsite Development and Maintenance


              </div>
              <div className="case-btn">Online Fundraising Campaigns
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
