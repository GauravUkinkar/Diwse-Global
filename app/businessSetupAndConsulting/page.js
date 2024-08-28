"use client";

import React, { useEffect, useState } from "react";
import "../digitalmarketing/service.scss";

import { MdKeyboardArrowDown } from "react-icons/md";
import Faq from "@/component/faq/Faq";


import AOS from "aos";
import "aos/dist/aos.css";
import Service3 from "@/component/servicesection3/Service3";

import img1 from "../../public/assets/bussiness-setup/CompanyFormationandRegistration.svg";

import img2 from "../../public/assets/bussiness-setup/ComprehensiveBusinessPlanning.svg"

import img3 from '../../public/assets/bussiness-setup/RegulatoryComplianceandLegalAdvisory.svg'
import topimg from "../../public/assets/bussiness-setup/business_setup_third_section.webp";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";



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
      title: "Legal Compliance and Regulatory Guidance",
      content:
        "Ensure Compliance: Stay compliant with international regulations, tax laws, and industry standards, minimising risks and ensuring smooth operations.",
    },
    {
      srNo: 3,
      title: "Operational Optimisation and Consulting",
      content:
        "Streamline Your Business: Our consulting services help you optimise your operations, enhance efficiency, and drive sustainable growth.",
    },
  ];

  const list = [
    {
      title: "Company Formation and Registration",
      content:
        "Establish Your Business. Let us guide you through the legal and administrative processes of setting up your new business.",
      image: img1
    },
    {
      title: "Comprehensive Business Planning",
      content:
        "Chart Your Course. Our expert consultants will help you develop detailed business plans, and strategic roadmaps that align with your goals.",
      image: img2
    },
    {
      title: "Legal Compliance and Advisory",
      content:
        "Navigate the Legal Landscape. Stay compliant with local regulations, tax laws, and industry-specific requirements with our expert legal advice.",
      image: img3
    },
  ];

  const faqContent = [
    {
      title: " Who can benefit from your services?",
      content:
        "Our services are for startups, expanding businesses, and those entering new markets.",
    },
    {
      title: "What services do you offer? ",
      content:
        "We offer company formation, business planning, regulatory compliance, market research, financial planning, operational consulting, and global expansion strategies.",
    },
    {
      title: "How long does a business setup take?",
      content:
        "The timeline varies, but we strive for efficiency.",
    },
    {
      title: "Can you help with funding? ",
      content:
        "Yes, we can guide you through various funding options, including venture capital, angel investors, bank loans, grants, and crowdfunding.",
    },
  ];

  useEffect(() => {

    AOS.init();
  }, []);


  const [email, setEmail] = useState("");
  const submitEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.diwiseglobal.com/auth/contact/",
        {
          email,
        }
      );
      toast.success("Thank You for Your Inquiry in DIwise!");
      setEmail("")
    } catch (err) {}
  };
  return (
    <>
      <div className="service-hero-parent parent">
        <div className="service-hero-cont cont">
          <div className="left">
            <h3 className="section-headding">Business Setup & Consulting</h3>
            <p className="service-p">
              Expand Your Global Reach: Our experienced consultants provide expert guidance on setting up operations in international markets. We help you navigate legal compliance, develop effective market entry strategies, and optimise your operations for global success.

            </p>
            <form onSubmit={submitEmail}>
              <input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
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
              Propel Your Business to Global Heights with
              <span className="gradient-text">DIwise Global
              </span>
            </h3>
            <p className="para">
              Our expert consulting services empower businesses to conquer international markets with confidence. From navigating legal complexities to developing effective market entry strategies, we provide comprehensive support that ensures your business thrives on a global scale.
            </p>
          </div>

          <div className="middle">
            <div className="left">
              <div className="back-image business_setup_back bg-img-cover"></div>
              <div className="front-image business_setup_front bg-img-cover"></div>
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
              <p className="bootom-section-para">
                Create a Roadmap: Develop a comprehensive global expansion plan that aligns with your long-term goals, backed by in-depth market analysis, strategic positioning, and financial projections.
              </p>
            </div>
          
            <div className="right">
              <h5 className="left-heding"><span className="gradient-text">Strategic  for
              </span> Global Success</h5>
              <p className="bootom-section-para">
                Achieve Your Objectives: Our strategic planning services guide you through the process of setting clear goals, conducting market research, and developing effective strategies to achieve your global ambitions.

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
            FAQs for Business Setup & <span className="gradient-text">Consulting Services
              </span>
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
          <div className="right business_setup_faq bg-img-cover">
            {/* <div className="image">

            </div> */}
          </div>
        </div>
      </div>
      <Toaster/>
    </>
  );
};

export default page;