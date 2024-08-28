"use client";

import React, { useEffect, useState } from "react";
import "../digitalmarketing/service.scss";

import { MdKeyboardArrowDown } from "react-icons/md";
import Faq from "@/component/faq/Faq";


import AOS from "aos";
import "aos/dist/aos.css";
import img1 from '../../public/assets/sevice3/social.png';
import topimg from '../../public/assets/web-development/web_third_section.jpeg'
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
        image: img1
    },
    {
      title: "UI/UX Design",
      content:
        "Crafting intuitive and appealing user interfaces and experiences that enhance usability and customer satisfaction across websites and mobile apps.",
        image: img1
    },
    {
      title: "E-commerce Solutions",
      content:
        "Developing secure, scalable ecommerce platforms with features like shopping carts, payment gateways, and inventory management systems.",
        image: img1
    },
  ];

  const faqContent = [
    {
      title: "What is the web development process ?",
      content:
        "The process involves discovery, design, development, testing, launch, and maintenance.",
    },
    {
      title: "How long does it take to develop a website ?",
      content:
        "The timeline depends on complexity and specific requirements. Smaller sites may take a few weeks, while larger ones can take several months.",
    },
    {
      title: "What are the different types of websites ?",
      content:
        "Static, dynamic, e-commerce, and CMS websites.",
    },
    {
      title: "How much does web development cost ?",
      content:
        "The cost depends on factors like complexity, features, design, and developer experience. Request a quote for an accurate estimate.",
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
              <div className="back-image web-back-image bg-img-cover" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000"></div>
              <div className="front-image web-front-image bg-img-cover" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000"></div>
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
              <p  className="bootom-section-para" >
              Elevate Your Digital Presence: Our team of skilled developers crafts cutting-edge web solutions that captivate your audience and drive results. From sleek websites to interactive web applications, we ensure your digital presence is engaging and effective.
              </p>
            </div>

            <div className="right">
              <h5 className="left-heding">Mobile <span className="gradient-text">App Development
              </span></h5>
              <p  className="bootom-section-para" >
              Enhance Your Reach: Expand your reach and engage your audience on the go with our expert mobile app development services. We specialise in creating high-performance iOS and Android apps that deliver exceptional user experiences and drive business growth.
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
           
             FAQs for Web & App <span className="gradient-text">Development Services</span>
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
          <div className="right web_faq bg-img-cover">
          
          </div>
        </div>
      </div>
    </>
  );
};

export default page;