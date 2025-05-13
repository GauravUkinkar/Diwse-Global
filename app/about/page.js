"use client";
import { useEffect, useRef, useState } from "react";
import { RiLinkedinFill } from "react-icons/ri";
import img5 from "../../public/assets/home/about/client.webp";
import img3 from "../../public/assets/home/about/customised.webp";
import img1 from "../../public/assets/home/about/global.webp";
import img2 from "../../public/assets/home/about/innovative.webp";
import img4 from "../../public/assets/home/about/result.webp";
import img from "../../public/assets/home/about/track-record-new.webp";
import "./about.scss";
import Home_Card_Swiper from "@/component/home/home_card_swiper";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import CardComp from "@/component/card_comp/CardComp";

import indiaBranch from "../../public/assets/New_folder/delhi.jpg";
import uaeBranch from "../../public/assets/New_folder/dubai.webp";
import ukBranch from "../../public/assets/New_folder/uk.webp";
import indiaFlag from "../../public/assets/New_folder/flag.jpg";
import uaelag from "../../public/assets/New_folder/uae_flag.webp";
import ukFlag from "../../public/assets/New_folder/uk_flag.webp";
import { Helmet } from "react-helmet";

const Page = () => {
  const cardData = [
    {
      image: img,
      title: "Proven Track Record",
      description:
        "With years of experience and a proven track record, DIwise Global has helped numerous businesses achieve their digital goals.",
    },
    {
      image: img1,
      title: "Global Expertise",
      description:
        "Our team of experts has a deep understanding of the global digital landscape, ensuring your brand reaches audiences worldwide.",
    },
    {
      image: img2,
      title: "Innovative Solutions",
      description:
        "We stay ahead of the curve by constantly exploring, implementing  and analysing innovative digital strategies and tools.",
    },
    {
      image: img3,
      title: "Customised Approach",
      description:
        "We tailor our services to meet the unique needs of your business, ensuring maximum impact and engagement.",
    },
    {
      image: img4,
      title: "Results-Driven",
      description:
        " Our focus is on delivering tangible results that drive your business growth, we base our processes on the results they provide. ",
    },
    {
      image: img5,
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
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = counterRef.current; // Store ref in a variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
      <Helmet>
        <title>
          About Us | Diwise Global - Leading Digital Marketing Agency
        </title>
        <meta
          name="description"
          content=" Your digital transformation partner offering innovative digital marketing solutions, branding strategies, and social media excellence."
        />
        <meta
          name="keywords"
          content="digital transformation partner, digital marketing solutions, branding strategies, social media"
        />
        <meta name="author" content="Diwise Global" />

        <meta property="og:url" content="https://www.diwiseglobal.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Diwise Global" />
      </Helmet>
      <div className="about-parent parent">
        <div className="top-color parent">
          <div className="top-color-cont cont">
            <h3 className="about-heading">
              About <span className="gradient-text"> DIwise</span>
            </h3>
            <p className="about-para">
              Our digital marketing empire is anchored by three strategic
              strongholds - the glittering metropolis of Dubai, the tech-savvy
              hub of India, and the cosmopolitan crossroads of London.
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
          </div>
        </div>
      </div>

      <CardComp
        branchesData={branchesData}
        highlight_heading="Our digital marketing empire"
        Main_heading=" is anchored by three strategic strongholds"
        paddingB="80px"
        heading={true}
        class="hoverClass"
        onMouseEnter={handleMouseEnter} // Pass these functions as props
        onMouseLeave={handleMouseLeave}
      />
      <div className="about-section-two-parent parent">
        <div className="about-section-two-cont cont">
          <div
            className="vision-mission "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="left">
              <h3 classname="ntitle">
                Our <br />
                <br />
                <span className="gradient-text">Distinct Culture</span>
              </h3>

              <p>
                At DIwise Global, we foster a collaborative and innovative
                culture that values teamwork, creativity, and unwavering
                commitment. Our reputation for meeting deadlines is a testament
                to our unparalleled work ethic and dedication to continuous
                learning and growth.
              </p>
            </div>
            <div className="right">
              <div className="top">
                <h3>
                  Our <br />
                  <br />
                  <span className="gradient-text">Mission</span>
                </h3>

                <p>
                  To be a global leader in dynamic and evolving digital
                  marketing strategies, consistently delivering exceptional
                  results that exceed client expectations.
                </p>
              </div>
              <div className="bottomm">
                <h3>
                  Our <br />
                  <br />
                  <span className="gradient-text">Vision</span>
                </h3>
                <p>
                  At DIwise Global, we envision a future where businesses thrive
                  in the digital landscape, achieving their goals and realising
                  their full potential.
                </p>
              </div>
            </div>
          </div>

          <div className="bottom cont">
            <h3>
              Your Global Digital Success <br />
              <br />
              <span className="gradient-text">Starts Here…</span>
            </h3>

            <Home_Card_Swiper
              cards={cardData}
              showButton={false}
              showImage={true}
              cardHeight="450px"
              data-aos="fade-up"
              data-aos-delay="200"
              alignTitle="center"
              alignDescription="center"
            />
          </div>
        </div>
      </div>

      <div className="founder-parent parent">
        <div
          className="founder-cont cont"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 data-aos-delay="400" className="heading">
            Meet Our <span className="gradient-text">Founder</span>
          </h3>

          <div className="founder ">
            <div className="image" data-aos-delay="600"></div>

            <div className="content" data-aos-delay="800">
              <a
                href="https://prajaktamarwaha.com/"
                target="_blank"
                className="name1"
              >
                Prajakta Marwaha
              </a>
              <h5 className="desgination">( Founder and Managing Director )</h5>
              <p className="founder-about">
                <i>
                  <b className="gradient-text" style={{ fontWeight: "700" }}>
                    {`"Best marketing strategy ever, CARE." - Gary V`}
                  </b>
                </i>
                <br />
                <br />
                As the visionary leader of DIwise Global, Prajakta Marwaha
                brings unparalleled expertise and a strategic mindset. Her deep
                understanding of digital marketing and innovative approach
                drives our team towards exceptional results. Her commitment to
                understanding client needs and building long-term partnerships
                ensures sustainable growth and success.
              </p>
              <div className="social-media">
                <a
                  href="https://www.linkedin.com/in/prajakta-marwaha-507b6410a/"
                  target="_blank"
                  className="icon"
                >
                  <span className="Linkdin-icon">
                    <RiLinkedinFill />
                  </span>
                  {`Let's Connect`}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
