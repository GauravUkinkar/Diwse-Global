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
      title: "Custom Web Development",
      content:
        "Your Digital Showcase. Create a website that perfectly reflects your brand identity and drives business objectives. Our expert developers craft responsive, user-friendly designs that captivate your audience.",
    },
    {
      srNo: 2,
      title: "Mobile App Development",
      content:
        "Elevate User Engagement. Enhance your reach and user experience with custom mobile apps. Our team specialises in developing innovative iOS and Android applications that deliver seamless performance across all devices.",
    },
    {
      srNo: 3,
      title: "User Experience (UX) Design",
      content:
        "Focus on User Needs. Prioritise user satisfaction with our expert UX design services. We create intuitive interfaces that are both functional and engaging, ensuring a positive user experience.",
    },
  ];

  const list = [
    {
      title: "Custom Website Development",
      content:
        "Designing and building responsive, user-friendly websites tailored to meet the specific needs and goals of a business or organisation.",
    },
    {
      title: "UI/UX Design",
      content:
        "Crafting intuitive and visually appealing user interfaces and experiences that enhance usability, engagement, and customer satisfaction across websites and mobile apps.",
    },
    {
      title: "E-commerce Solutions",
      content:
        "Developing and integrating secure, scalable ecommerce platforms with features like shopping carts, payment gateways, and inventory management systems.",
    },
  ];

  const faqContent = [
    {
      title: "Expert Development Team",
      content:
        "Work with experienced developers who specialize in creating high-quality web and mobile solutions.",
    },
    {
      title: "Focus on UX",
      content:
        "Benefit from our commitment to delivering exceptional user experiences that enhance engagement and satisfaction.",
    },
    {
      title: "Innovative Technology",
      content:
        "Utilize the latest technology to ensure your web and app solutions are cutting-edge and future-proof.",
    },
    {
      title: "Comprehensive Services",
      content:
        "Enjoy end-to-end development services, from initial concept and design to final deployment and support.",
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
            <h3 className="section-headding">Web & App Development</h3>
            <p className="service-p">
            Tailored Digital Solutions: We create custom web and mobile apps that not only look great but also deliver exceptional user experiences. Our focus on responsive design and cutting-edge technology ensures your digital assets are optimised for global audiences.
            </p>
            <form action="">
              <input type="email" placeholder="Your email address" />
              <button type="submit" className="submit-btn">
                Get Started
              </button>
            </form>
          </div>
          <div className="right web-image bg-img-cover" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            {/* <div className="right-img-box bg-img-cover"></div> */}
          </div>
        </div>
      </div>

      <div className="service-detail-parent parent">
        <div className="service-detail-cont cont">
          <div className="top">
            <h3 className="heading">
            DIwise Custom Web & App <span className="gradient-text"> Solutions for Growth</span>
            </h3>
            <p className="para">
            Our team of skilled developers crafts cutting-edge web and mobile applications that captivate your audience and drive results. From sleek websites to powerful mobile apps, we ensure your digital presence is engaging, user-friendly, and aligned with your business goals.
            </p>
          </div>

          <div className="middle">
            <div className="left">
              <div className="back-image bg-img-cover" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000"></div>
              <div className="front-image bg-img-cover" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000"></div>
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
              <h5 className="left-heding">Innovative <span className="gradient-text">Web Solutions</span></h5>
              <p>
              Elevate Your Digital Presence: Our team of skilled developers crafts cutting-edge web solutions that captivate your audience and drive results. From sleek websites to interactive web applications, we ensure your digital presence is engaging and effective.
              </p>
            </div>

            <div className="right">
              <h5 className="left-heding">Mobile <span className="gradient-text">App Development
              </span></h5>
              <p>
              Enhance Your Reach: Expand your reach and engage your audience on the go with our expert mobile app development services. We specialise in creating high-performance iOS and Android apps that deliver exceptional user experiences and drive business growth.
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
            Why Choose Diwise Global for <span className="gradient-text">Web & App Development?</span>
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
          
          </div>
        </div>
      </div>
    </>
  );
};

export default page;