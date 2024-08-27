"use client";

import React, { useEffect, useRef } from "react";
import { IoArrowForward } from "react-icons/io5";
import "./about.scss";
import {
  RiDoubleQuotesL,
  RiDoubleQuotesR,
  RiLinkedinFill,
} from "react-icons/ri";
import img from "../../public/assets/home/about/track-record.jpg"
import img1 from "../../public/assets/home/about/global.jpg"
import img2 from "../../public/assets/home/about/innovative.jpg"
import img3 from "../../public/assets/home/about/customised.jpg"
import img4 from "../../public/assets/home/about/result.jpg"
import img5 from "../../public/assets/home/about/client.jpg"

import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Home_Card_Swiper from "@/component/home/home_card_swiper";
import { FaSearchengin } from "react-icons/fa";

const page = () => {
  const cardData = [
    {
      image: img,
      title: "Proven Track Record",
      description:
        "With years of experience and a proven track record, DIwise Global has helped numerous businesses achieve their digital goals.",
    },
    {
      image:img1,
      title: "Global Expertise",
      description:
        "Our team of experts has a deep understanding of the global digital landscape, ensuring your brand reaches audiences worldwide.",
    },
    {
      image:img2,
      title: "Innovative Solutions",
      description:
        "We stay ahead of the curve by constantly exploring, implementing  and analysing innovative digital strategies and tools.",
    },
    {
      image:img3,
      title: "Customised Approach",
      description:
        "We tailor our services to meet the unique needs of your business, ensuring maximum impact and engagement.",
    },
    {
      image:img4,
      title: "Results-Driven",
      description:
        " Our focus is on delivering tangible results that drive your business growth, we base our processes on the results they provide. ",
    },
    {
      image:img5,
      title: "Client Satisfaction",
      description:
        "We prioritise client satisfaction and build long-term partnerships based on trust and collaboration that benefits mutually. ",
    },
  ];

  const counterRef = useRef(null);

  useEffect(() => {
    AOS.init();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
            observer.disconnect(); // Stop observing after counting starts
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    const counters = document.querySelectorAll(".countNum");
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 100;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  };

  const countingList = [
    { count: 200, title: "Completed Project" },
    { count: 90, title: "Active Clients" },
    { count: 10, title: "Awards Won" },
  ];

  return (
    <>
      <Head>
        <title>
          About Us | Diwise Global - Leading Digital Marketing Agency
        </title>
        <meta
          name="description"
          content="Learn more about Diwise Global, our mission, values, and the team behind our success. Discover how we build powerful brands and drive digital growth."
        />
      </Head>
      <div className="about-parent parent">
        <div className="top-color parent">
          <div className="top-color-cont cont">
            <h3 className="about-heading">
              About <span className="gradient-text"> DIwise</span>
            </h3>
            <p className="about-para">
              Elevate Your Brand, Dominate the Digital World
            </p>
          </div>
        </div>
        <div className="images-parent parent">
          <div className="bottom-images cont">
            <div
              className="image image1 sqaure bg-img-cover"
              data-aos="fade-up"
            ></div>
            <div
              className="image image2 rect bg-img-cover"
              data-aos="fade-up"
              data-aos-delay="200"
            ></div>
            <div
              className="image image3 sqaure bg-img-cover"
              data-aos="fade-up"
              data-aos-delay="300"
            ></div>
            <div
              className="image image4 rect bg-img-cover"
              data-aos="fade-up"
              data-aos-delay="400"
            ></div>
          </div>
        </div>
      </div>

      <div className="about-section-two-parent parent">
        <div className="about-section-two-cont cont">
          

        <div className="vision-mission ">
        <div className="left"  data-aos="fade-up" data-aos-delay="200">
        <h3 classname="ntitle">
              Our &nbsp;
              <span className="gradient-text">DIstinct Culture</span>
            </h3>
          
          <p>The Diwise family thrives on the principles of teamwork, innovation, creativity, and unwavering commitment. Our reputation for meeting deadlines reflects our unparalleled work culture that fosters continuous learning and growth.</p>
          </div>
          <div className="right">
            <div className="top"  data-aos="fade-up" data-aos-delay="200">
            <h3>
              Our &nbsp;
              <span className="gradient-text">Mission</span>
            </h3>
             
              <p>Our mission is to lead the way in dynamic and evolving digital marketing strategies, consistently delivering outstanding results.
              </p>
            </div>
            <div className="bottomm"  data-aos="fade-up" data-aos-delay="200">
            <h3>
              Our &nbsp;
              <span className="gradient-text">Vision</span>
            </h3>
            <p>Empowering Businesses Through Innovative Digital Solutions: At Diwise, we envision a future where businesses thrive in the digital landscape.</p>
            </div>
          </div>
        </div>

          <div className="bottom cont">
            <h3 data-aos="fade-up" data-aos-delay="200">
              Your Global Digital Success &nbsp;
              <span className="gradient-text">Starts Here…</span>
            </h3>

            {/* <p className="bottom-text" data-aos="fade-up" data-aos-delay="200">
              Diwise Global transforms your vision into global success with
              expert digital marketing, from setup to brand building. Let us
              amplify your impact and drive growth worldwide.
            </p> */}
            {/* <div className="service-list">
              <div className="list" data-aos="fade-up" data-aos-delay="300">
                <div className="icon bg-img-contain icon1">
     
                </div>

                <h6>Strategic Planning</h6>
                <p>
                  We meticulously craft strategies that align with your business
                  goals, ensuring your success in diverse markets.
                </p>
              </div>
              <div className="list" data-aos="fade-up" data-aos-delay="500">
                <div className="icon bg-img-contain icon2"></div>

                <h6>Innovative Marketing</h6>
                <p>
                  Our creative marketing approaches are designed to captivate
                  your audience, driving engagement and growth.
                </p>
              </div>
              <div className="list" data-aos="fade-up" data-aos-delay="700">
                <div className="icon bg-img-contain icon3"></div>

                <h6>In-Depth Research</h6>
                <p>
                  Gain insights that matter. Our in-depth research empowers your
                  decisions, guiding your business to thrive globally.
                </p>
              </div>
            </div> */}
            <Home_Card_Swiper
              cards={cardData}
              showButton={false}
              showImage={true}
              cardHeight="450px"
              data-aos="fade-up"
              data-aos-delay="200"            
              

              

            />
          </div>
        </div>
      </div>

      {/* <div className="aboutfourth-section-parent parent">
        <div className="about-fourthsection-cont cont">
          <div className="left" data-aos="fade-down">
            <h3 className="heading" data-aos="fade-up" data-aos-delay="200">
              Our <span className="gradient-text">Mission</span>
            </h3>
            <p data-aos="fade-up" data-aos-delay="300">
              At Diwise Global, our mission is to empower businesses for global
              success with innovative digital solutions. We deliver results that
              exceed expectations, using our expertise to navigate international
              markets and tailor strategies to your unique needs. Committed to
              excellence and creativity, we drive impactful results and help
              establish a thriving global presence.
            </p>
          </div>
          <div
            className="middle bg-img-cover"
            data-aos="fade-up"
            data-aos-delay="500"
          ></div>
          <div
            className="right"
            data-aos="fade-right"
            data-aos-delay="700"
            ref={counterRef}
          >
            {countingList.map((item) => (
              <div className="counting" key={item.title}>
                <h5 className="countNum" data-target={item.count}>
                  0
                </h5>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className="founder-parent parent">
        <div
          className="founder-cont cont"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 data-aos-delay="400">
            Meet Our <span className="gradient-text">Founder</span>
          </h3>

          <div className="founder">
            <div className="image" data-aos-delay="600"></div>

            <div className="content" data-aos-delay="800">
              <a
                href="https://prajaktamarwaha.com/"
                target="_blank"
                className="name1"
              >
                Prajakta Marwaha
              </a>
              <h5 className="desgination">Founder and Managing Director</h5>
              <p className="founder-about">
                "Marketing is about building partnerships and adding value to
                their brand." <br />
                As the visionary leader of DIwise Global, Prajakta Marwaha
                brings unparalleled expertise and a strategic mindset. Her deep
                understanding of digital marketing and innovative approach drive
                our team towards exceptional results. Her commitment to
                understanding client needs and building long-term partnerships
                ensures sustainable growth and success.
              </p>
              <div className="social-media">
                <p className="icon">
                  <span>
                    <RiLinkedinFill />
                  </span>
                  Let's Connect
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="review-parent parent">
        <div className="review-cont cont">
          <div className="left">
            <div className="top">
              <h3>
                What Our Clients <span className="gradient-text">Say</span>
              </h3>
            </div>
            <div className="middle">
              <p>
                "Diwise Global has been instrumental in our growth. Their
                expertise and innovative approach have elevated our brand and
                driven remarkable results."
              </p>
              <p>- Client Name</p>
            </div>
          </div>
          <div className="right">
            <div className="top">
              <h3>
                Success Stories <span className="gradient-text">Unveiled</span>
              </h3>
            </div>
            <div className="middle">
              <p>
                Discover how our clients have achieved their goals and exceeded
                expectations with our tailored digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default page;
