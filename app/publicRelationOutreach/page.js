"use client";

import React, { useEffect, useState } from "react";
import "../digitalmarketing/service.scss";

import { MdKeyboardArrowDown } from "react-icons/md";
import Faq from "@/component/faq/Faq";


import AOS from "aos";
import "aos/dist/aos.css";
import Service3 from "@/component/servicesection3/Service3";

import img1 from "../../public/assets/business-setup.jpg";
import topimg from "../../public/assets/public-relation.jpg";
const page = () => {
  

    const [activeIndex, setActiveIndex] = useState(0);
  
    const toggleFaq = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
   

  const serviceDetails = [
    {
      srNo: 1,
      title: "Media Relations",
      content:
        "Cultivate Media Relationships: Build strong connections with influential media outlets to secure positive coverage and enhance your brand's visibility.",
        
    },
    {
      srNo: 2,
      title: "Strategic Press Release Distribution",
      content:
        "Amplify Your Message: Distribute targeted press releases that resonate with your audience and drive meaningful media coverage. Our global network ensures your news reaches the right people in the right markets.",
    },
    {
      srNo: 3,
      title: "Crisis Communication Management",
      content:
        "Protect Your Brand: Be prepared for challenges with our effective crisis management strategies. We provide swift and strategic communication to safeguard your reputation during difficult times.",
    },
  ];

  const list = [
    {
      title: "Press Release Management",
      content:
        "Amplify Your Message. Our team will craft compelling press releases, distribute them to relevant media outlets, and ensure your key messages reach your target audience.",
        image: img1
    },
    {
      title: "Influencer and Media Outreach",
      content:
        "Partner with Influencers. We'll identify and collaborate with influential figures, bloggers, and media professionals to amplify your brand's message and reach a wider audience.",
        image: img1
    },
    {
      title: "Event Coordination and Promotion",
      content:
        "Create Memorable Experiences. Our event planning experts will organise and promote impactful events, such as product launches, press conferences, and community activities, to generate media coverage and public interest.",
        image: img1
    },
  ];

  const faqContent = [
    {
      title: "Brand Storytelling",
      content:
        "Craft compelling brand stories that capture your audience’s attention. We create and deliver narratives that highlight your brand’s values and impact, enhancing your overall brand image.",
    },
    {
      title: "Influencer Partnerships",
      content:
        "Leverage influencer relationships to boost your brand’s credibility and reach. We connect you with key influencers who align with your brand’s message and audience.",
    },
    {
      title: "Event Management",
      content:
        "Organize impactful events that engage your audience and build brand awareness. From product launches to media briefings, we handle all aspects of event planning and execution.",
    },
    {
      title: "Reputation Monitoring",
      content:
        "Monitor and analyze public perception of your brand. We track media mentions and online sentiment to proactively manage and improve your brand’s reputation.",
    },
  ];

  useEffect(() => {

    AOS.init();
  }, []);
  return (
    <>
      <div className="service-hero-parent parent">
        <div className="service-hero-cont cont">
          <div className="left" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            <h3 className="section-headding">Public Relations & Media Outreach</h3>
            <p className="service-p">
            Manage Your Reputation Globally: Our global PR services include media relations, press release distribution, and crisis management. We help you build and maintain a positive brand reputation across multiple markets, ensuring effective communication and crisis preparedness.
            </p>
            <form action="">
              <input type="email" placeholder="Your email address" />
              <button type="submit" className="submit-btn">
                Get Started
              </button>
            </form>
          </div>
          <div className="right relationoutreach bg-img-cover" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            {/* <div className="right-img-box bg-img-cover"></div> */}
          </div>
        </div>
      </div>

      <div className="service-detail-parent parent">
        <div className="service-detail-cont cont">
          <div className="top">
            <h3 className="heading">
            Elevate Your Brand with DIwise <br /> <span className="gradient-text">Global's PR Expertise</span>
            </h3>
            <p className="para">
            Enhance your brand's reputation and reach a global audience with our strategic PR and media outreach services. Our team of PR professionals will develop targeted campaigns that ensure your message is heard loud and clear across all markets.
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
              <h5 className="left-heding"><span className="gradient-text">Global PR</span> Strategy</h5>
              <p>
              Elevate Your Global Brand. Our experts develop tailored PR strategies that resonate across cultures, ensuring your brand maintains a positive image and effectively reaches international audiences.
              </p>
            </div>

            <div className="right">
              <h5 className="left-heding"><span className="gradient-text">Media </span> Training</h5>
              <p>
              Empower Your Spokespeople. Prepare your team for media interactions with our expert training programs. We equip your spokespeople with the skills to represent your brand confidently and effectively in any market.
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
            Why Choose Diwise Global for  <span className="gradient-text">Public Relations & Media Outreach?</span>
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