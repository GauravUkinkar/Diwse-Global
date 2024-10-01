"use client"; // Add this line at the top

import Contact from "@/component/contact/Contact";
import React, { useEffect, useState } from "react";
import "./contact_page.scss";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import CardComp from "@/component/card_comp/CardComp";
import indiaBranch from "../../public/assets/New_folder/delhi.jpg";
import uaeBranch from "../../public/assets/New_folder/dubai.webp";
import ukBranch from "../../public/assets/New_folder/uk.webp";
import indiaFlag from "../../public/assets/New_folder/flag.jpg";
import uaelag from "../../public/assets/New_folder/uae_flag.webp";
import ukFlag from "../../public/assets/New_folder/uk_flag.webp";
import { IoCallSharp } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { Helmet } from "react-helmet";
const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const [branchesData, setBranchesData] = useState([
    {
      branch_img: indiaBranch,
      flag_img: indiaFlag,
      countryName: "India",
      number_link: "tel:+918482936866",
      number_text: "+91 8482936866",
      CallIcon: <IoCallSharp />,
      address_link: "https://maps.app.goo.gl/nN6Vi6L55yzdAU6h9",
      locationIcon: <GrLocation />,
      mouseLeave: true,
      togglePattern: true,
      address_text:
        "Office no. 214-216, 10 Biz Park,Near Symbiosis Law College, Airport Road,Vimannagar, Pune- 411014",
    },
    {
      branch_img: uaeBranch,
      flag_img: uaelag,
      countryName: "UAE",
      number_link: "tel:+971508060418",
      number_text: "+971-50-8060418",
      CallIcon: <IoCallSharp />,
      address_link: "https://maps.app.goo.gl/5HJr7gqHrCPyjLTKA",
      locationIcon: <GrLocation />,
      flagePosition: "left center",
      mouseLeave: true,
      togglePattern: true,
      address_text:
        "Office no. 1304 | Building no. LB19 | JAZFA View 18-19, Jebel Ali Free Zone, PO Box 262746 Downtown Jabel Ali - Dubai - United Arab Emirates",
    },
    {
      branch_img: ukBranch,
      flag_img: ukFlag,
      countryName: "London",
      number_link: "tel:+447398814161",
      number_text: "+44 7398 814161",
      CallIcon: <IoCallSharp />,
      address_link: "https://maps.app.goo.gl/nN6Vi6L55yzdAU6h9",
      locationIcon: <GrLocation />,
      mouseLeave: true,
      togglePattern: true,
      address_text:
        "Docklands Business Centre, Suite 12/3D 10-16 Tiller Road, London, England E14 8PX",
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
  <title>Contact Us | DIwise</title>
  <meta name="description" content="Get in touch with DIwise to learn more about our digital marketing solutions. We are here to answer your questions and provide support for your business needs." />
  <meta name="keywords" content="contact us, digital marketing, customer support, business inquiries, DIwise, get in touch, service questions, client relations" />
</Helmet>

      <Contact />
      <div className="branches contact-branch parent">
        <CardComp
          branchesData={branchesData}
          paddingB="80px"
          heading={true}
          class="hoverClass"
          onMouseEnter={handleMouseEnter} // Pass these functions as props
          onMouseLeave={handleMouseLeave}
        />
        {/* <div className="contact-branches-cont">
          {branchesData.map((item, index) => (
            <div
              className="contact-branch bg-img-cover"
              key={index}
              style={{ background: `url(${item.branch_img.src})` }}
            >
              <div className="contact-overlay">
              <div className="contact-branch_site">
              <div className="country">
                  <div
                    className="flag"
                    style={{
                      background: `url(${item.flag_img.src})`,
                      backgroundPosition: item.flagePosition || "center center",
                    }}
                  ></div>

                  <p>{item.countryName}</p>
                </div>
              </div>

              <div className="back-details">
              <a href={item.number_link} className="number">
                  <span className="icon">{item.CallIcon}</span>{" "}
                  <span>{item.number_text}</span>
                </a>
                <a href={item.address_link} className="address" target="_blank">
                  <span className="icon">{item.locationIcon}</span>
                  <span className="address-text">{item.address_text}</span>
                </a>
              </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default page;
