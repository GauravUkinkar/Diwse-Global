"use client";

import React, { useEffect, useState } from "react";
import "../digitalmarketing/service.scss";

import { MdKeyboardArrowDown } from "react-icons/md";
import Faq from "@/component/faq/Faq";


import AOS from "aos";
import "aos/dist/aos.css";
import Service3 from "@/component/servicesection3/Service3";

import topimg from "../../public/assets/branding.jpg";
import img1 from '../../public/assets/sevice3/social.png';
import img2 from '../../public/assets/sevice3/social.png';
import img3 from '../../public/assets/sevice3/social.png';


const page = () => {
  

    const [activeIndex, setActiveIndex] = useState(0);
  
    const toggleFaq = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
   

  const serviceDetails = [
    {
      srNo: 1,
      title: "Logo Design",
      content:
        "Create a distinctive logo that represents your brand’s identity. Our design experts craft logos that are both unique and memorable.",
    },
    {
      srNo: 2,
      title: "Brand Identity Creation",
      content:
        "Develop a cohesive brand identity with our tailored solutions. We design visual elements and messaging that reflect your brand’s core values and vision.",
    },
    {
      srNo: 3,
      title: "Multimedia Content Production",
      content:
        "Produce engaging multimedia content that captures attention. From videos to infographics, we create content that enhances your brand’s presence across various platforms.",
    },
  ];



  
  const list = [
    {
      title: "Brand Strategy",
      content:
        "Develop a strategic approach to brand growth. We help you define your brand’s vision and position in the market.",
      image: img1
    },
    {
      title: "Visual Consistency",
      content:
        "Ensure your brand’s visuals are consistent across all platforms. We design elements that unify your brand’s look and feel.",
      image: img2
    },
    {
      title: "Creative Storytelling",
      content:
        "Tell your brand’s story with powerful impact. We craft compelling narratives that deeply connect with your audience.",
      image: img3
    },
   
  ];


  const faqContent = [
    {
      title: "Global Expertise",
      content:
        "Benefit from our experience in crafting effective brand strategies for international markets.",
    },
    {
      title: "Tailored Solutions",
      content:
        "Receive customized branding services that align with your specific business needs and goals.",
    },
    {
      title: " Innovative Design",
      content:
        "Leverage our creative design solutions to ensure your brand stands out and makes a lasting impression.",
    },
    {
      title: "Comprehensive Approach",
      content:
        "Enjoy end-to-end branding services, from initial concept to final execution, for a cohesive brand experience.",
    },
  ];

  useEffect(() => {

    AOS.init();
  }, []);
  return (
    <>
      <div className="service-hero-parent parent">
        <div className="service-hero-cont cont">
          <div className="left">
            <h3 className="section-headding">Branding & Creative Services</h3>
            <p className="service-p">
              In today's digital landscape, a powerful online presence is crucial for global success. At Diwise Global, we excel in developing sophisticated digital marketing strategies that elevate your brand's visibility and foster meaningful engagement across international markets. Our approach is designed to help your business not only compete but thrive on a global stage.
            </p>
            <form action="">
              <input type="email" placeholder="Your email address" />
              <button type="submit" className="submit-btn">
                Get Started
              </button>
            </form>
          </div>
          <div className="right prbranding bg-img-cover" data-aos="fade-right" data-aos-delay="600" data-aos-duration="1000">
            {/* <div className="right-img-box bg-img-cover"></div> */}
          </div>
        </div>
      </div>

      <div className="service-detail-parent parent">
        <div className="service-detail-cont cont">
          <div className="top">
            <h3 className="heading">
              Elevate Your Brand with<br /> <span className="gradient-text">Diwise Global's Expertise</span>
            </h3>
            <p className="para">
              Our expertise in digital marketing and SEO ensures that your business stands out in a crowded marketplace. We combine cutting-edge techniques with a deep understanding of global trends to deliver results that matter.
            </p>
          </div>

          <div className="middle">
            <div className="left">
              <div className="back-image bg-img-cover"></div>
              <div className="front-image bg-img-cover"></div>
            </div>
            <div className="right">
              {serviceDetails.map((item) => (
                <div className="content" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000" >
                  <div className="left">{item.srNo}</div>
                  <div className="right">
                    <h5>{item.title}</h5>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bottom">
            <div className="left">
              <h5 className="left-heding"><span className="gradient-text">Strategic</span> Branding</h5>
              <p>
                Gain valuable insights with our comprehensive market consultation services. We analyze market trends, competitive landscapes, and consumer behavior to provide strategic recommendations that drive your business forward. Our expert team helps you navigate complex markets, identify opportunities, and develop effective strategies to achieve your goals.
              </p>
            </div>

            <div className="right">
              <h5 className="left-heding"><span className="gradient-text">Sales</span> Research</h5>
              <p>
                Enhance your sales strategies with our in-depth sales research services. We conduct thorough analyses of market conditions, customer preferences, and competitive positioning to provide actionable insights. Our research helps you understand market dynamics, optimize your sales approach, and make data-driven decisions to boost your business performance.
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
              Why Choose Diwise Global for <span className="gradient-text">Digital Marketing & SEO?</span>
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