"use client";

import React, { useEffect, useRef } from "react";
import "../Axonic_casestudy/casestudy.scss";
import Button_comp from "@/component/button/Button_comp";
import { LuDot } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";
import About_card_swiper from "@/component/about/About_card_swiper";
import tij1 from "../../public/assets/casestudy/tij/tij1.webp";
import tij2 from "../../public/assets/casestudy/tij/tij2.webp";
import tij3 from "../../public/assets/casestudy/tij/tij3.webp";
import tij4 from "../../public/assets/casestudy/tij/tij4.webp";
import tij5 from "../../public/assets/casestudy/tij/tij5.webp";
import tij6 from "../../public/assets/casestudy/tij/tij6.webp";
import { Helmet } from "react-helmet";

const page = () => {
  const caseStudy = useRef();
  const caseStudyTrigger = useRef();

  useEffect(() => {
    AOS.init();
  }, []);

  const listItem = [
    "Custom strategies tailored to your unique goals.",    "Experience with global reach across multiple markets.",
    "Proven success with a track record of measurable outcomes.",
    "Innovative approaches and cutting-edge digital solutions.",
    "Client focus is key, as your success is our top priority.",
    "Transparent and open communication at every step.",
  ];

  const hccImages = [
    {
      image: tij1,
    },
    {
      image: tij2,
    },
    {
      image: tij3,
    },
    {
      image: tij4,
    },
    {
      image: tij5,
    },
    {
      image: tij6,
    },
  ];

  return (
    <>
    <Helmet>
        <title>Revolutionising Digital Solutions | DIwise</title>
        <meta
          name="description"
          content="Explore how DIwise drives digital transformation by leveraging innovative technology to enhance accessibility and efficiency in various industries."
        />
        <meta
          name="keywords"
          content="digital transformation, innovative technology, accessibility, efficiency, digital marketing, technology solutions, industry transformation, business innovation, customer engagement, digital strategy"
        />
      </Helmet>
      <div className="case-study-page parent">
        <div className="case-study-page-cont cont">
          <h3 className="case-heading" data-aos="fade-up">
          Digitally Experiencing the Best of India with   
            <span className="gradient-text">
              <a href="https://www.travelandtaste.com.au/" target="_blank">
              {" "}
               The Indian Journey
            
               {" "}
              </a>
            </span>{" "}
             
          </h3>
          <p className="case-para" data-aos="fade-up" data-aos-delay="200">
          Understanding that travel is about the journey, not just the destination, DIwise helped The Indian Journey reach a wider audience through strategic digital marketing. As their all-around digital partner, we provided comprehensive expertise to enhance their online presence.

          </p>
          <div data-aos="fade-up" data-aos-delay="400">
            <Button_comp link="/contact" btn_text="Get Started" />
          </div>
        </div>
      </div>

      <div className="case-study-second parent" ref={caseStudyTrigger}>
        <div
          className="case-study-second-cont tij-top-img cont bg-img-cover"
          ref={caseStudy}
          data-aos="fade-up"
          data-aos-delay="600"
        ></div>
      </div>

      <div className="case-study-third parent">
        <div className="case-study-third-cont cont">
          <div className="top">
            <h4 className="heading" data-aos="fade-up" data-aos-delay="200">
            Proven Results With <span className="gradient-text">DIwise</span>
            </h4>
          </div>

          <div className="middle">
            <div className="left" data-aos="fade-up" data-aos-delay="300">
              <p className="middlepara">
              Through our tailored marketing services, we successfully built the brand and attracted a larger audience. We generated leads for travellers while simultaneously promoting India as a desirable destination. Our expertise has delivered exceptional results that exceed expectations.

              </p>
            </div>
            <div className="btnlist" data-aos="fade-up" data-aos-delay="400">
              <div className="case-btn">Digital Marketing and Search Engine Optimisation (SEO)</div>
              <div className="case-btn">Web Development</div>
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
