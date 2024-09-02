"use client";

import React, { useEffect, useState } from "react";
import "../digitalmarketing/service.scss";

import { MdKeyboardArrowDown } from "react-icons/md";
import Faq from "@/component/faq/Faq";

import AOS from "aos";
import "aos/dist/aos.css";
import Service3 from "@/component/servicesection3/Service3";

import topimg from "../../public/assets/prbranding/content-1.jpg";
import img1 from "../../public/assets/prbranding/LogoDesigning.svg";
import img2 from "../../public/assets/prbranding/BrandIdentityDevelopment.svg";
import img3 from "../../public/assets/prbranding/MultimediaContentProduction.svg";
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
      title: "Brand Strategy and Identity Development",
      content:
        "Define Your Brand: Our experts will work with you to develop a comprehensive brand strategy that aligns with your business goals, target audience, and values. We'll create a unique brand identity that sets you apart.",
    },
    {
      srNo: 2,
      title: "Logo Design and Branding Guidelines",
      content:
        "Create a Visual Identity: We'll design a memorable and visually appealing logo that captures the essence of your brand. We'll also provide comprehensive branding guidelines to ensure consistency across all marketing materials.",
    },
    {
      srNo: 3,
      title: "Content Creation (Copywriting, Design, Multimedia)",
      content:
        "Engage Your Audience: Our creative team will produce high-quality content that resonates with your target audience. We offer copywriting, design, and multimedia services to create engaging and effective marketing materials.",
    },
  ];

  const list = [
    {
      title: "Logo Designing ",
      content:
        "Your Brand's Visual Identity. Our skilled designers will create a unique and memorable logo that perfectly captures the essence of your brand.",
      image: img1,
    },
    {
      title: "Brand Identity Development",
      content:
        "A Cohesive Brand. Develop a strong and consistent brand identity with our tailored solutions that reflect your brand's core values and vision.",
      image: img2,
    },
    {
      title: "Multimedia Content Production",
      content:
        "Captivate Your Audience. Engage your audience with compelling multimedia content. We create content that enhances your brand's presence across platforms.",
      image: img3,
    },
  ];

  const faqContent = [
    {
      title: "What is the branding process like?",
      content:
        "Our collaborative process involves understanding your vision, creating a strategy, and developing a brand identity that aligns with your goals.",
    },
    {
      title: "How long does branding take?",
      content:
        "The timeline varies depending on the project's complexity, but we strive for efficiency. Expect the process to take approximately 4-8 weeks.",
    },
    {
      title: "What creative services do you offer?",
      content:
        "We offer a wide range of services, including logo design, content creation, brand messaging, and marketing materials.",
    },
    {
      title: "How do you ensure alignment with our brand values?",
      content:
        "We prioritise understanding your brand's values throughout the creative process to ensure all deliverables are consistent and effectively communicate your unique selling points.",
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
      setEmail("");
    } catch (err) {}
  };
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
            <h3 className="section-headding">Branding and Creative Services </h3>
            <p className="service-p">
              Build a Memorable Brand: Our expert branding team will develop a
              strong and distinctive brand identity that resonates with your
              target audience worldwide. From logo design to content creation,
              we ensure your brand stands out in the global marketplace.
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
          <div
            className="right prbranding bg-img-cover "
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-duration="1000"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              width="100%"
              className="video-laptop"
            >
              <source
                src="/assets/servicevideos/prbranding.mp4"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="service-detail-parent parent">
        <div className="service-detail-cont cont">
          {/* ------------------TOP---------------- */}
          <div
            className="top"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <h3 className="heading">
              Elevate Your Brand with
              <br /> <span className="gradient-text">DIwise Global</span>
            </h3>
            <p className="para">
              Our expertise in branding and creative services ensures that your
              business stands out in a crowded marketplace. We combine
              innovative strategies with a deep understanding of global trends
              to deliver results that matter. From crafting compelling brand
              identities to producing engaging multimedia content, our team is
              dedicated to helping you make a lasting impression.
            </p>
          </div>
          {/* ------------------Middle---------------- */}
          <div className="middle">
            <div
              className="left"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="back-image prback bg-img-cover"></div>
              <div className="front-image prfront bg-img-cover"></div>
            </div>
            <div className="right">
              {serviceDetails.map((item, index) => (
                <div className="content" key={index}>
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
          <div
            className="bottom"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <div className="left">
              <h5 className="left-heding">
                <span className="gradient-text">Brand</span> Positioning
              </h5>
              <p className="bootom-section-para">
                Craft Your Message: We'll help you develop clear and compelling
                brand messaging that effectively communicates your unique value
                proposition to your target audience.
              </p>
            </div>

            <div className="right">
              <h5 className="left-heding">
                Creative<span className="gradient-text"> Campaigns</span>{" "}
              </h5>
              <p className="bootom-section-para">
                Launch Successful Campaigns: Our creative team will develop
                innovative and effective marketing campaigns tailored to your
                specific goals. We'll create a variety of marketing materials,
                including print ads, digital banners, social media content, and
                more.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Service3 bgImage="top center" contbgimg={topimg} list={list} />

      <div className="service-faq-parent parent">
        <div className="service-faq-cont cont">
          <div
            className="left"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
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
          <div
            className="right bg-img-cover"
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-duration="1000"
          >
            {/* <div className="image">

            </div> */}
          </div>
        </div>
      </div>

      <Toaster />
    </>
  );
};

export default page;
