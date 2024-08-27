"use client";

import React, { useEffect, useState } from "react";
import "../digitalmarketing/service.scss";

import { MdKeyboardArrowDown } from "react-icons/md";
import Faq from "@/component/faq/Faq";


import AOS from "aos";
import "aos/dist/aos.css";
import Service3 from "@/component/servicesection3/Service3";
const page = () => {
  

    const [activeIndex, setActiveIndex] = useState(0);
  
    const toggleFaq = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
   

  const serviceDetails = [
    {
      srNo: 1,
      title: " Tailored Market Entry Strategies",
      content:
      "Navigate New Markets: Our experts develop customised strategies that consider regional nuances, helping you establish a strong foothold in your target international markets.",
    },
    {
      srNo: 2,
      title: " Legal Compliance and Regulatory Guidance",
      content:
      "Ensure Compliance: Stay compliant with international regulations, tax laws, and industry standards, minimising risks and ensuring smooth operations.",
    },
    {
      srNo: 3,
      title: "Operational Optimisation and Consulting",
      content:
        "Streamline Your Business: Our consulting services help you optimise your operations, enhance efficiency, and drive sustainable growth..",
    },
  ];

  const list = [
    {
      title: "Company Formation and Registration",
      content:
        "Establish Your Business. Let us guide you through the legal and administrative processes of setting up your new business, including selecting the optimal business structure, registering your company, and obtaining necessary licences and permits.",
    },
    {
      title: "Comprehensive Business Planning",
      content:
        "Chart Your Course. Our expert consultants will help you develop detailed business plans, conduct thorough market research, and create strategic roadmaps that align with your long-term goals.",
    },
    {
      title: "Regulatory Compliance and Legal Advisory",
      content:
        "Navigate the Legal Landscape. Stay compliant with local regulations, tax laws, and industry-specific requirements, ensuring smooth operations and mitigating risks with our expert legal advice.",
    },
  ];

  const faqContent = [
    {
      title: " Global Expertise",
      content:
        "Benefit from our deep understanding of international markets and regulations.",
    },
    {
      title: " Tailored Strategies",
      content:
        "Receive customized business solutions that align with your specific goals and market conditions.",
    },
    {
      title: " End-to-End Support",
      content:
        "From initial planning to full execution, we provide comprehensive support at every stage of your business expansion",
    },
    {
      title: " Risk Mitigation",
      content:
        "Our expertise helps you identify and mitigate potential risks, ensuring a smooth and successful market entry.",
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
            <h3 className="section-headding">Business Setup & Consulting</h3>
            <p className="service-p">
            Expand Your Global Reach: Our experienced consultants provide expert guidance on setting up operations in international markets. We help you navigate legal compliance, develop effective market entry strategies, and optimise your operations for global success.
            </p>
            <form action="">
              <input type="email" placeholder="Your email address" />
              <button type="submit" className="submit-btn">
                Get Started
              </button>
            </form>
          </div>
          <div className="right businessSetup bg-img-cover" data-aos="fade-right" data-aos-delay="600" data-aos-duration="1000">
            {/* <div className="right-img-box bg-img-cover"></div> */}
          </div>
        </div>
      </div>

      <div className="service-detail-parent parent">
        <div className="service-detail-cont cont">
          <div className="top">
            <h3 className="heading">
            Propel Your Business to Global Heights with <span className="gradient-text">  DIwise Global
            </span>
            </h3>
            <p className="para">
            Our expert consulting services empower businesses to conquer international markets with confidence. From navigating legal complexities to developing effective market entry strategies, we provide comprehensive support that ensures your business thrives on a global scale.
            </p>
          </div>

          <div className="middle">
            <div className="left">
              <div className="back-image bg-img-cover"></div>
              <div className="front-image bg-img-cover"></div>
            </div>
            <div className="right">
              {serviceDetails.map((item) => (
                <div className="content" data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000" >
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
              <h5 className="left-heding"><span className="gradient-text">Global Expansion </span> Consultation</h5>
              <p>
              Create a Roadmap: Develop a comprehensive global expansion plan that aligns with your long-term goals, backed by in-depth market analysis, strategic positioning, and financial projections.
              </p>
            </div>

            <div className="right">
              <h5 className="left-heding"><span className="gradient-text">Strategies for  </span> Global Success</h5>
              <p>
              Achieve Your Objectives: Our strategic planning services guide you through the process of setting clear goals, conducting market research, and developing effective strategies to achieve your global ambitions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Service3 />
     

      <div className="service-faq-parent parent">
        <div className="service-faq-cont cont">
          <div className="left">

            <h4 className="hedding">
            Why Choose Diwise Global for <span className="gradient-text">Business Setup & Consulting?</span>
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