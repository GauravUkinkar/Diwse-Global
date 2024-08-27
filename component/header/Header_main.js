"use client";

import React, { useEffect, useState } from "react";
import logoImage from "../../assets/logo.png";
import Image from "next/image";
import "./header.scss";
import { FaGripLines } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { MdKeyboardArrowUp } from "react-icons/md";
import branding from "../../public/assets/icons/branding.gif";
import Icon from "../dynamicIcon/Icon";

const Header_main = () => {
  const [navbar, setNavbar] = useState({
    serviceList: false,
    mobNav: false,
    // mobService: false,
    headerblur: false,
  });

  const closeAll = () => {
    setNavbar({
      serviceList: false,
      mobNav: false,
      mobService: false,
      headerblur: true,
    });
  };

  // const [serviceList, setServiceList] = useState(true);

  const [mobService, setMobService] = useState(false);

  const scrollingHeader = () => {
    if (window.scrollY > 50) {
      setNavbar((element) => ({
        ...element,
        headerblur: true,
      }));
    } else {
      setNavbar((element) => ({
        ...element,
        headerblur: false,
      }));
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollingHeader);

    return () => {
      document.removeEventListener("scroll", scrollingHeader);
    };
  }, []);

  const servicelists = [
    {
      path: "/digitalmarketing",
      name: "Digital Marketing",
      images: "assets/image1.jpg",
    },
    {
      path: "/businessSetupAndConsulting",
      name: "Business Setup And Consulting",
      images: "assets/business-setup.jpg",
    },
    {
      path: "/prandbranding",
      name: "Branding & Creative Services",
      images: "assets/branding.jpg",
    },
    {
      path: "/publicRelationOutreach",
      name: "Public Relation Outreach",
      images: "assets/public-relation.jpg",
    },
    {
      path: "/webdevelopment",
      name: "Web Development",
      images: "assets/website-development.jpg",
    },
  ];

  return (
    <>
      <div
        className={
          navbar.headerblur
            ? "header-parent parent scrolling"
            : "header-parent parent"
        }
      >
        <div
          className={
            navbar.serviceList
              ? "header-cont cont border-header"
              : "header-cont cont"
          }
        >
          <a href="/" className="logo scroll">
            <Image src={logoImage} className="logo-img" width={100} />
          </a>
          <div className="links">
            <a href="/" className="link image link1 " >
              Home
            </a>
            <a href="/about" className="link link2">
              About
            </a>
            <a
              href=""
              className="link link3"
              onMouseEnter={() => {
                closeAll();
                setNavbar((element) => ({
                  ...element,
                  serviceList: true,
                }));
              }}
            >
              Service
              <span className="downArrow arrow">
                <MdKeyboardArrowDown />
              </span>
            </a>
            <a href="/#home_casestudy" className="link link4">
              {" "}
              Case Studies
            </a>
            <a href="/blogs" className="link link5">
              {" "}
              Blogs
            </a>
          </div>

          <div className="flex-end">
            <a href="/contact" className="btn1">
              Get Started
            </a>

            <div
              className="hamburgur-btn"
              onClick={() => {
                closeAll();
                setNavbar((element) => ({
                  ...element,
                  mobNav: true,
                }));
              }}
            >
              <FaGripLines />
            </div>
          </div>
        </div>
        {navbar.serviceList && (
          <div className="option cont" onMouseLeave={closeAll}>
            <div className="bottom">
              {servicelists.map((item) => (
                <a href={item.path} className="link  link1">
                  <div
                    className="top bg-img-cover"
                    style={{ backgroundImage: `url(${item.images})` }}
                  ></div>
                  <h5>{item.name}</h5>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* {navbar.mobNav && (
        <div className="mob-nav">
          <div className="top">
            <div className="logo">
              <Image src={logoImage} />
            </div>
            <div
              className="cross"
              onClick={() => {
                closeAll();
                setNavbar((element) => ({
                  ...element,
                  mobNav: false,
                }));
              }}
            >
              <RxCross1 />
            </div>
          </div>
          <div className="menus">
            <a href="/" className="link link1 ">
              Home
            </a>
            <a href="/about" className="link link2">
              About
            </a>
            <div
              href=""
              className="link link3"
              onClick={() => setMobService(!mobService)}
            >
              Service
              <span className="downArrow arrow">
                <MdKeyboardArrowDown />
              </span>
            </div>
            <div
              href=""
              className={
                mobService ? "link service-list active" : "link service-list"
              }
            >
              <div className="list">
                {
                  servicelists.map((item)=>(
                    <a href={item.path}>
                      {item.name}
                    </a>

                  ))
                }

              </div>
            </div>
            <a href="/Casestudy" className="link link4">
              {" "}
              Case Studies
            </a>
            <a href="blogs" className="link link5">
              {" "}
              Blogs
            </a>
            <a className="btn1" href="/contact" style={{ marginTop: "20px" }}>
              Get Started
            </a>
          </div>
        </div>
      )} */}
      {navbar.mobNav && (
  <div className="mob-nav" >
    <div className="top">
      <div className="logo">
        <Image src={logoImage} />
      </div>
      <div
        className="cross"
        onClick={() => {
          closeAll();
          setNavbar((element) => ({
            ...element,
            mobNav: false,
          }));
        }}
      >
        <RxCross1 />
      </div>
    </div>
    <div className="menus">
      <a href="/" className="link link1">
        Home
      </a>
      <a href="/about" className="link link2">
        About
      </a>
      <div
        className="link link3"
        onClick={() => setMobService(!mobService)}
        style={{ cursor: 'pointer' }}
      >
        Service
        <span className="downArrow arrow">
          <MdKeyboardArrowDown />
        </span>
      </div>
      <div
        className={`service-list ${mobService ? "active" : ""}`}
      >
        <div className="list">
          {servicelists.map((item) => (
            <a href={item.path} key={item.name}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <a href="/#home_casestudy" className="link link4">
        Case Studies
      </a>
      <a href="/blogs" className="link link5">
        Blogs
      </a>
      <a className="btn1" href="/contact" style={{ marginTop: "20px" }}>
        Get Started
      </a>
    </div>
  </div>
)}

    </>
  );
};

export default Header_main;
