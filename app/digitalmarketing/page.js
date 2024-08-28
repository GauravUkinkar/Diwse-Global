"use client";

import React, { useEffect, useState } from "react";
import "../digitalmarketing/service.scss";

import { MdKeyboardArrowDown } from "react-icons/md";
import Faq from "@/component/faq/Faq";

import AOS from "aos";
import "aos/dist/aos.css";
import Service3 from "@/component/servicesection3/Service3";
import topimg from "../../public/assets/digital_marketing/4th.jpg";
import img1 from '../../public/assets/sevice3/seo.png'
import img2 from '../../public/assets/sevice3/content.png'
import img3 from '../../public/assets/sevice3/social.png'
import img4 from '../../public/assets/sevice3/EmailMarketing.svg';
import img5 from '../../public/assets/sevice3/pay-per.svg';

const page = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const serviceDetails = [
    {
      srNo: 1,
      title: "Advanced SEO Techniques",
      content:
        "Drive Organic Growth. Our expert SEO team applies cutting-edge strategies, including keyword research and on-page optimization, to boost your search engine rankings and attract qualified traffic.",
    },
    {
      srNo: 2,
      title: "Data-Driven Marketing Solutions",
      content:
        "Maximise ROI. Leverage data-driven insights to optimise your marketing campaigns for precise targeting and measurable improvements in return on investment.",
    },
    {
      srNo: 3,
      title: "Engaging Content Creation",
      content:
        "Captivate Your Audience. Develop high-quality, relevant content that resonates with your target audience, establishes your brand as an industry leader, and drives engagement.",
    },
  ];
  // ----------Swiper content List -------\


  const list = [
    {
      title: "Search Engine Optimisation",
      content:
        "Boost Your Visibility: Our expert SEO strategies help your website rank higher in search engine results, attracting organic traffic and increasing brand awareness.",
        image: img1
    },
    {
      title: "Social Media Marketing",
      content:
        "Engage Your Audience: Connect with your target audience on popular social media platforms, build brand loyalty, and drive traffic to your website.",
      image: img3
    },
    {
      title: "Content Marketing",
      content:
        "Create Value: Develop high-quality, engaging content that attracts, informs, and converts your audience into customers.",
      image: img2
    },
    {
      title: "Email Marketing",
      content:
        "Nurture Relationships: Build lasting relationships with your customers through targeted email campaigns that deliver valuable content and drive conversions.",
      image: img4
    },
    {
      title: "Pay-Per-Click Advertising",
      content:
        "Achieve Immediate Results: Leverage paid advertising to reach your target audience quickly, drive traffic to your website, and generate leads or sales.",
      image: img5
    }
  ];

  const faqContent = [
    {
      title: " Global Reach",
      content:
        "With a presence in India, the UK, and UAE, we have the experience and expertise to help your business succeed in diverse markets.",
    },
    {
      title: " Tailored Strategies",
      content:
        "We understand that each business is unique, which is why we create customized digital marketing plans that align with your specific goals and target audience.",
    },
    {
      title: " Data-Driven Decisions",
      content:
        "We believe in making informed decisions based on data. Our strategies are backed by in-depth analytics and performance metrics to ensure optimal results.",
    },
    {
      title: " End-to-End Solutions",
      content:
        "From strategy development to execution and analysis, we offer comprehensive digital marketing services that cover all aspects of your online presence.",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="service-hero-parent parent">
        <div className="service-hero-cont cont">
          <div
            className="left"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <h3 className="section-headding">Digital Marketing & SEO</h3>
            <p className="service-p">
              Elevate Your Online Presence: Our comprehensive digital marketing strategies, including SEO, content marketing, social media management, and paid advertising, are designed to enhance your visibility, drive global engagement, and boost your bottom line.
            </p>
            <form action="">
              <input type="email" placeholder="Your email address" />
              <button type="submit" className="submit-btn">
                Get Started
              </button>
            </form>
          </div>
          <div
            className="right digitalmarketing bg-img-cover"
            data-aos="fade-down"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            {/* <div className="right-img-box bg-img-cover"></div> */}
          </div>
        </div>
      </div>

      <div className="service-detail-parent parent">
        <div className="service-detail-cont cont">
          {/* ------------------TOP---------------- */}

          <div className="top">
            <h3 className="heading">
              Expert Digital Marketing for
              <br />{" "}
              <span className="gradient-text">Global Impact</span>
            </h3>
            <p className="para">
              DIwise Global offers expert digital marketing services tailored to help your business stand out on a global scale. Our deep understanding of SEO and cutting-edge techniques ensure that your brand is visible, relevant, and engaging to international audiences. We leverage global trends and insights to deliver results that drive growth and impact.
            </p>
          </div>
          {/* ------------------Middle---------------- */}
          <div className="middle">
            <div className="left">
              <div className="back-image bg-img-cover"></div>
              <div className="front-image bg-img-cover"></div>
            </div>
            <div className="right">
              {serviceDetails.map((item) => (
                <div
                  className="content"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-duration="1000"
                >
                  <div className="left">{item.srNo}</div>
                  <div className="right">
                    <h5>{item.title}</h5>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ------------------BOTTOM---------------- */}
          <div className="bottom">
            <div className="left">
              <h5 className="left-heding">
                <span className="gradient-text">Effective Ad</span> Campaigns
              </h5>
              <p className="bootom-section-para">
                Maximise Reach: Implement targeted advertising campaigns across various platforms to reach your ideal audience, drive conversions, and increase brand awareness.
              </p>
            </div>

            <div className="right">
              <h5 className="left-heding">
                <span className="gradient-text">Comprehensive</span> Analysis
              </h5>
              <p className="bootom-section-para">
                Measure and Improve: Conduct regular analysis of your marketing campaigns to track performance, identify areas for improvement, and make data-driven adjustments to optimise your overall digital strategy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Service3
        contbgimg={topimg}
        list={list}

      />

      <div className="service-faq-parent parent">
        <div className="service-faq-cont cont">
          <div className="left">
            <h4 className="hedding">
              Why Choose Diwise Global for{" "}
              <span className="gradient-text">Digital Marketing & SEO?</span>
            </h4>
            {faqContent.map((item, index) => (
              <Faq
                key={index}
                heading={item.title}
                content={item.content}
                isActive={activeIndex === index}
                onToggle={() => toggleFaq(index)}
              />
            ))}
          </div>
          <div className="right bg-img-cover">
            {/* <div className="image">

            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
