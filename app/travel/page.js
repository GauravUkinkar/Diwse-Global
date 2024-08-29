"use client";

import React, { useEffect, useRef } from "react";
import "../Axonic_casestudy/casestudy.scss";
import Button_comp from "@/component/button/Button_comp";
import { LuDot } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";
import About_card_swiper from "@/component/about/About_card_swiper";
import travels from "../../public/assets/img/travel.png";
import travel_fb from "../../public/assets/img/travel_facebook.png"
import travel_insta from "../../public/assets/img/travel_instagram.png"
import travel_package from "../../public/assets/img/travel_package.png"
import travel_destination from "../../public/assets/img/travel_des.webp"

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

  const travelImages = [
    {
      image: travels,
    },
    {
      image: travel_fb,
    },
    {
      image: travel_insta,
    },
    {
      image: travel_package,
    },
    {
      image: travel_destination,
    },
  ];

  return (
    <>
      <div className="case-study-page parent">
        <div className="case-study-page-cont cont">
          <h3 className="case-heading" data-aos="fade-up">
            When
            <span className="gradient-text">
              <a href="https://www.travelandtaste.com.au/" target="_blank">
                {" "}
                Travel and Taste
              </a>
            </span>{" "}
            Got the taste of Digital Adventures
          </h3>
          <p className="case-para" data-aos="fade-up" data-aos-delay="200">
            Our collaboration with Travel and Taste was a journey filled with
            adventures and digital innovation. DIwise played a pivotal role in
            their digital transformation, empowering them to offer unforgettable
            travel experiences and personalised itineraries. Through strategic
            campaigns and engaging social media content, we helped them achieve
            their goals and exceed customer expectations.
          </p>
          <div data-aos="fade-up" data-aos-delay="400">
            <Button_comp link="/contact" btn_text="Get Started" />
          </div>
        </div>
      </div>

      <div className="case-study-second parent" ref={caseStudyTrigger}>
        <div
          className="case-study-second-cont top-imgt cont bg-img-cover"
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
                Our shared passion for travel ignited our excitement to work
                with Travel and Taste. By crafting innovative strategies,
                creating engaging content, and generating valuable leads, we've
                helped them achieve remarkable results. Our dedication to
                excellence has solidified our reputation as a trusted partner in
                the travel industry.
              </p>
            </div>
            <div className="btnlist" data-aos="fade-up" data-aos-delay="400">
              <div className="case-btn">Digital Marketing & SEO</div>
              <div className="case-btn">Web development</div>
              <div className="case-btn">Lead Generation Campaigns</div>
              <div className="case-btn">Branding & Creative Services</div>
              <div className="case-btn">Ads and Social media campaigns</div>
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
            className="left section-imgt bg-img-cover"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div>
          <div className="right" data-aos="fade-up" data-aos-delay="400">
            <h3 className="fifth-section-heading">
              Why <span className="gradient-text">Clients Trust DIwise</span>
            </h3>
            <p className="fifth-section-para">
              At DIwise, we believe in building strong partnerships based on
              mutual understanding and trust. By deeply understanding our
              clients' unique goals, stories, and perspectives, we develop
              customised strategies that deliver exceptional results.
            </p>

            <div className="list-item">
              <p>
                Here are a few other things that might make us popular among our
                clients:
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
      <About_card_swiper swiperImg={travelImages} />
    </>
  );
};

export default page;
