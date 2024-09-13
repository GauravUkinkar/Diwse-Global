"use client";
import Home_main from "@/component/home/home_main";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import "../app/Style/home.scss";
import { Autoplay, Pagination } from "swiper/modules";
import Accordian from "@/component/accordian/Accordian";
import Contact from "@/component/contact/Contact";
import Home_Card_Swiper from "@/component/home/home_card_swiper";
import Logo_Corousel from "@/component/home/logo_corousel";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../public/assets/home/axonic.webp";
import img2 from "../public/assets/home/Travel-and-Taste.webp";
import img3 from "../public/assets/home/hcc.webp";
import img4 from "../public/assets/home/onkar.webp";
import img5 from "../public/assets/home/nvm.jpg";
import img6 from "../public/assets/home/Akka-Foundation.webp";
import img7 from "../public/assets/home/The-Team-Dental.webp";
import img8 from "../public/assets/home/The-Indian-Journey.webp";
import img9 from "../public/assets/home/Pandoza.webp";
import "swiper/swiper-bundle.css";
import Head from "next/head";
import { FaSearchengin } from "react-icons/fa";
import { MdBrandingWatermark, MdDeveloperMode } from "react-icons/md";
import { SiWikimediafoundation } from "react-icons/si";
import { TbBusinessplan } from "react-icons/tb";
import New_home from "@/component/home/new_home";
import { Toaster } from "react-hot-toast";
import nimg from "../public/assets/icons/navIcon/Dcoument.png";
import Link from "next/link";
import indiaBranch from "../public/assets/New_folder/delhi.jpg";
import uaeBranch from "../public/assets/New_folder/dubai.webp";
import ukBranch from "../public/assets/New_folder/uk.webp";
import indiaFlag from "../public/assets/New_folder/flag.jpg";
import uaelag from "../public/assets/New_folder/uae_flag.webp";
import ukFlag from "../public/assets/New_folder/uk_flag.webp";
import CardComp from "@/component/card_comp/CardComp";
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const [swiperNavigation, setSwiperNavigation] = useState(false);

  const cardData = [
    {
      icon: "assets/icons/navIcon/digital_marketing-1.png",
      title: "Digital Marketing",
      description:
        "Elevate your online presence. From crafting engaging content and managing your social media, we'll drive global visibility and engagement.",
      buttonText: "Get Started",
      link: "digitalmarketing",
    },
    {
      icon: "assets/icons/navIcon/Development.png",
      title: "Web  Development",
      description:
        "Bring your digital vision to life. We specialise in creating user-friendly, responsive designs with the latest technology to meet your needs.",
      buttonText: "Get Started",
      link: "webdevelopment",
    },
    {
      icon: "assets/icons/navIcon/digital_marketing.png",
      title: "Branding and Design",
      description:
        "Make Your Brand Unforgettable. Our team of creatives will design your logo, develop your brand story, and produce engaging multimedia content.",
      buttonText: "Get Started",
      link: "prandbranding",
    },
    {
      icon: "assets/icons/navIcon/Dcoument.png",
      title: "Business Launchpad",
      description:
        "Expand your business globally. We offer comprehensive support, from developing market entry strategies to providing operational consulting.",
      buttonText: "Get Started",
      link: "businessSetupAndConsulting",
    },
    {
      icon: "assets/icons/navIcon/PR.png",
      title: "Public Relations",
      description:
        "Manage Your Reputation Globally. We help you build and maintain a positive brand reputation, ensuring effective communication.",
      buttonText: "Get Started",
      link: "publicRelationOutreach",
    },
  ];
  const videoBoxRef = useRef(null);
  useEffect(() => {
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
      url: "/Axonic_casestudy",
    },
    {
      title: "When Travel and Taste Got the taste of Digital Adventures",
      content:
        "DIwise powered Travel and Taste's digital transformation, enabling them to offer unforgettable culinary experiences and personalised travel itineraries.",
      imgage: img2,
      url: "/travel",
    },
    {
      title: "Healthcare Concierge Shakes hand to medical tourism digitally",
      content:
        "DIwise played a crucial role in digitising healthcare concierge services, facilitating seamless medical tourism experiences for patients worldwide.",
      imgage: img3,
      url: "/hcc",
    },
    {
      title: "Trading the best of the world, Onkar World’s Digital Partner",
      content:
        "DIwise partnered with Onkar World to enhance their online presence and drive global trade through effective digital marketing strategies.",
      imgage: img4,
      url: "/onkar",
    },
    {
      title: "Building Brand and Growing Capital with NVM Capital",
      content:
        "DIwise powered NVM Capital's digital transformation, enabling them to deliver exceptional services to their customers and establish a strong online presence.",
      imgage: img5,
      url: "/nvm",
    },
    {
      title: "Lending a Helping Hand to the Akka Foundation Digitally ",
      content:
        "DIwise serves as the digital partner to the Akka Foundation, a non-profit organisation dedicated to empowering the underprivileged.",
      imgage: img6,
      url: "/akka-foundation",
    },
    {
      title: "Spreading Smiles and Laughter with The Team Dental ",
      content:
        "DIwise helped The Team Dental bring smiles to faces by enhancing their online presence and promoting their dental services.",
      imgage: img7,
      url: "/theTeamDental",
    },
    {
      title:
        "Digitally Experiencing the Best of India with The Indian Journey ",
      content:
        "DIwise has brought The Indian Journey to the forefront of digital experiences, offering innovative solutions that create unforgettable memories.",
      imgage: img8,
      url: "/theIndianJourney",
    },
    // {
    //   title: "pandoza",
    //   content:
    //     "DIwise partnered with Onkar World to enhance their online presence and drive global trade through effective digital marketing strategies.",
    //   imgage: img9,
    //   url: "/pandoza",
    // },
  ];

  useEffect(() => {
    const handlePagination = () => {
      if (window.innerWidth < 500) {
        setSwiperNavigation(true);
      }
    };

    window.addEventListener("resize", handlePagination);

    return () => {
      window.removeEventListener("resize", handlePagination);
    };
  }, []);

  const [branchesData, setBranchesData] = useState([
    {
      branch_img: indiaBranch,
      flag_img: indiaFlag,
      countryName: "India",
      mouseLeave: true,
      togglePattern: true,
      branch_desc:
        "As the technological powerhouse of our network, our Indian office serves as the nerve centre of our technical prowess. Our brilliant team of tech wizards operates from this bustling hub, crafting cutting-edge solutions that drive our digital success.",
    },
    {
      branch_img: uaeBranch,
      flag_img: uaelag,
      countryName: "UAE",
      flagePosition: "left center",
      mouseLeave: true,
      togglePattern: true,
      branch_desc:
        "The gleaming heart of our global operations, our UAE head office is the epicentre of innovation and expansion. From this bustling metropolis, we orchestrate brilliant campaigns and execute flawless strategies, harnessing the region's boundless potential.",
    },
    {
      branch_img: ukBranch,
      flag_img: ukFlag,
      countryName: "London",
      mouseLeave: true,
      togglePattern: true,
      branch_desc:
        "Standing as the bridge between East and West, our London office is a strategic outpost that connects our Asian operations. This global city provides the perfect platform for forging international partnerships and tapping into the European market.",
    },
  ]);

  const handleMouseLeave = (index) => {
    const updatedBranches = branchesData.map((item, i) => {
      if (i === index) {
        item.mouseLeave = true;

        setTimeout(() => {
          setBranchesData((prevBranches) =>
            prevBranches.map((item, idx) =>
              idx === index ? { ...item, togglePattern: true } : item
            )
          );
        }, 600);
      }
      return item;
    });

    setBranchesData(updatedBranches);
  };

  const handleMouseEnter = (index) => {
    const updatedBranches = branchesData.map((item, i) => {
      if (i === index) {
        item.mouseLeave = false;

        setTimeout(() => {
          setBranchesData((prevBranches) =>
            prevBranches.map((item, idx) =>
              idx === index ? { ...item, togglePattern: false } : item
            )
          );
        }, 600);
      }
      return item;
    });

    setBranchesData(updatedBranches);
  };

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
          <video
            autoPlay
            muted
            loop
            playsInline
            width="100%"
            className="video-laptop"
          >
            <source src="/assets/dvideo.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <video
            autoPlay
            muted
            loop
            playsInline
            width="100%"
            className="video-mobile"
          >
            <source src="/assets/mob-video.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* 3 Section - Logo carousel */}
      <div data-aos="fade-up">
        <Logo_Corousel />
      </div>
      <div className="pt-[40px]">
        <CardComp
          branchesData={branchesData}
          highlight_heading="Our digital marketing empire"
          Main_heading=" is anchored by three strategic strongholds"
          paddingB="40px"
          heading={true}
          class="hoverClass"
          onMouseEnter={handleMouseEnter} // Pass these functions as props
          onMouseLeave={handleMouseLeave}
        />
      </div>

      {/* 4 Section - Card swiper section */}
      <div className="fourth-section parent" data-aos="fade-down">
        <div className="fourth-section-cont cont">
          <h3 className="title">
            Our Digital Suite of{" "}
            <span className="gradient-text"> Services </span>
          </h3>
          <p className="desc">
            Our comprehensive suite of digital services is designed to propel
            your business to new heights, internationally.
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
            cardHeight="300px"
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
        <div id="home_casestudy"></div>
      </div>

      {/* 5th Section - Swiper section */}

      <div className="fifth-section parent">
        <Swiper
          className="mySwiper"
          spaceBetween={10}
          centeredSlides={true}
          slidesPerView={1.8}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={true}
          navigation={false}
          modules={[Autoplay, Pagination]}
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
            <SwiperSlide className="bg-img-cover " key={index}>
              <div
                className="image "
                style={{ background: `url(${item.imgage.src})` }}
              >
                <div className="overlay">
                  <Link href={item.url} className="case-btn">
                    View
                  </Link>
                  <h4>
                    <span className="gradient-text"></span> {item.title}
                  </h4>
                  <p>{item.content}</p>
                </div>
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
