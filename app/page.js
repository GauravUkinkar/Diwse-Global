"use client";
import Home_main from "@/component/home/home_main";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import "../app/Style/home.scss";

import { Autoplay } from "swiper/modules";

import Accordian from "@/component/accordian/Accordian";
import Contact from "@/component/contact/Contact";
import Home_Card_Swiper from "@/component/home/home_card_swiper";
import Logo_Corousel from "@/component/home/logo_corousel";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../public/assets/home/axonic.jpg";
import img2 from "../public/assets/home/Travel-and-Taste.jpg";
import img3 from "../public/assets/home/hcc.jpg";
import img4 from "../public/assets/home/onkar.webp";
import "swiper/swiper-bundle.css";

import Head from "next/head";
import { FaSearchengin } from "react-icons/fa";
import { MdBrandingWatermark, MdDeveloperMode } from "react-icons/md";
import { SiWikimediafoundation } from "react-icons/si";
import { TbBusinessplan } from "react-icons/tb";
import New_home from "@/component/home/new_home";
import { Toaster } from "react-hot-toast";
import nimg from "../public/assets/icons/navIcon/Dcoument.png"

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const cardData = [
    {
      icon: "assets/icons/navIcon/digital_marketing-1.png",
      title: "Digital Marketing & SEO",
      description:
        "Elevate your online presence. From crafting engaging content and managing your social media, we'll drive global visibility and engagement.",
      buttonText: "Get Started",
      link:'digitalmarketing'
    },
    {
      icon: "assets/icons/navIcon/Development.png",
      title: "Web & App Development",
      description:
        "Bring your digital vision to life. We specialise in creating user-friendly, responsive designs that leverage the latest technology to meet your business needs.",
      buttonText: "Get Started",
      link:'webdevelopment'
    },
    {
      icon: "assets/icons/navIcon/digital_marketing.png",
      title: "Branding & Creative Services",
      description:
        "Make Your Brand Unforgettable. Our team of creative experts will design your logo, develop your brand story, and produce engaging multimedia content.",
      buttonText: "Get Started",
      link:'prandbranding'
    },
    {
      icon: "assets/icons/navIcon/Dcoument.png",
      title: "Business Setup & Consulting",
      description:
        "Expand your business globally. We offer comprehensive support, from developing effective market entry strategies to providing ongoing operational consulting.",
      buttonText: "Get Started",
      link:'businessSetupAndConsulting'
    },
    {
      icon: "assets/icons/navIcon/PR.png",
      title: "Public Relations & Media Outreach",
      description:
        "Manage Your Reputation Globally. We help you build and maintain a positive brand reputation across multiple markets, ensuring effective communication.",
      buttonText: "Get Started",
      link:'publicRelationOutreach'
    },
  ];

  const videoBoxRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
    });

    // GSAP animation for video section
    gsap.fromTo(
      videoBoxRef.current,
      { scale: 0.5, borderRadius: "10px" },
      {
        scale: 1,
        borderRadius: "0px",
        scrollTrigger: {
          trigger: videoBoxRef.current,
          start: "top 80%",
          end: "bottom 80%",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  const caseStudies = [
    {
      title: "Revolutionising healthcare delivery with AxonCare by Axonic",
      content:
        "DIwise helped AxonCare transform healthcare delivery through innovative digital solutions, improving patient outcomes and accessibility.",
      imgage: img1,
      url: "/Casestudy/Axonic_casestudy",
    },
    {
      title: "When Travel and Taste Got the taste of Digital Adventures",
      content:
        "DIwise powered Travel and Taste's digital transformation, enabling them to offer unforgettable culinary experiences and personalised travel itineraries.",
      imgage: img2,
      url: "/Casestudy/travel",
    },
    {
      title: "Healthcare Concierge Shakes hand to medical tourism digitally",
      content:
        "DIwise played a crucial role in digitising healthcare concierge services, facilitating seamless medical tourism experiences for patients worldwide.",
      imgage: img3,
      url: "/Casestudy/hcc",
    },
    {
      title: "Trading the best of the world, Onkar World’s Digital Partner",
      content:
        "DIwise partnered with Onkar World to enhance their online presence and drive global trade through effective digital marketing strategies.",
      imgage: img4,
      url: "/Casestudy/onkar",
    },
  ];
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Digital Marketing, Brand Building, SEO, Social Media Marketing, Online Growth, Diwise Global, Marketing Agency, Brand Identity"
        />
        <meta
          name="description"
          content="Diwise Global specializes in creating powerful brand identities and driving growth through innovative digital marketing strategies. Partner with us to elevate your brand and achieve exceptional online success."
        />
      </Head>
      {/* 1 Section - One side text and one side 3D model */}
      {/* <Home_main /> */}
      <New_home />

      {/* 2 Section - Video section */}
      <div className="second-section" ref={videoBoxRef}>
        <div className="video-box" data-aos="fade-up">
          <video autoPlay muted loop playsInline width="100%">
            <source src="/assets/dvideo.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* 3 Section - Logo carousel */}
      <div data-aos="fade-up">
        <Logo_Corousel />
      </div>

      {/* 4 Section - Card swiper section */}
      <div className="fourth-section parent" data-aos="fade-down">
        <div className="fourth-section-cont cont">
          <h3 className="title">
            Our Digital Suite of <br />{" "}
            <span className="gradient-text">Services </span>
          </h3>
          <p className="desc">
            Our comprehensive suite of digital services is designed to propel
            your business to new heights, both domestically and internationally.
          </p>
          {/* <Home_Card_Swiper
            cards={cardData}
            showButton={true}
            showImage={false}
            cardHeight="350px"
         
          /> */}
          <Home_Card_Swiper
            cards={cardData}
            showButton={true}
            showImage={false}
            cardHeight="350px"
            gridTemplateColumns="repeat(3,1fr)"
            gridarea="2/1/3/4"
            display="grid"
            Icongridarea="1/1/2/2"
            titlegridarea="1/2/2/4"
            titleLineHeight="120%"
            titleCenter="center"
            titleHeight="100%"
            titledisplay="flex"
          />
        </div>
      </div>

      {/* 5th Section - Swiper section */}
      <div
        id="home_casestudy"
        className="fifth-section parent"
        data-aos="fade-up"
      >
        <Swiper
          className="mySwiper"
          spaceBetween={10}
          centeredSlides={true}
          slidesPerView={1.8}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay]}
          breakpoints={{
            1100: {
              centeredSlides: true,
            },
            700: {
              centeredSlides: false,
              slidesPerView: 2,
              spaceBetween: 10,
            },
            345: {
              slidesPerView: 1,
            },
          }}
        >
          {caseStudies.map((item, index) => (
            <SwiperSlide className="bg-img-cover" key={index}>
              <div
                className="image scroll"
                style={{ background: `url(${item.imgage.src})` }}
              >
                <div className="overlay"></div>
                <a href={item.url} className="case-btn">
                  View
                </a>
                <h4>
                  <span className="gradient-text"></span> {item.title}
                </h4>
                <p>{item.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 6th Section - Accordion */}
      <div data-aos="fade-down">
        <Accordian />
      </div>

      {/* 7th Section - Contact form */}
      <div data-aos="fade-up">
        <Contact />
      </div>

      {/* 8th Section - Footer */}
      {/* <Footer /> */}

      <Toaster />
    </>
  );
}
