"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import logoImage from "../../public/assets/logo/newlogo/svwhite.svg";
import "./header.scss";
import Link from "next/link";

const Header_main = () => {
  const [navbar, setNavbar] = useState({
    serviceList: false,
    mobNav: false,
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
      path: "/businessLaunchpad",
      name: "Business Launchpad",
      images: "assets/icons/navIcon/Dcoument.png",
      className: "image2",
    },
    {
      path: "/digitalmarketing",
      name: "Digital Marketing ",
      images: "assets/icons/navIcon/digital_marketing-1.png",
      className: "image1",
    },    
    {
      path: "/brandinganddesign",
      name: "Branding and Design",
      images: "assets/icons/navIcon/digital_marketing.png",
      className: "image3",
    },
    {
      path: "/publicRelationOutreach",
      name: "Public Relations ",
      images: "assets/icons/navIcon/PR.png",
      className: "image4",
    },
    {
      path: "/webdevelopment",
      name: "Website Development",
      images: "assets/icons/navIcon/Development.png",
      className: "image5",
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
          <Link href="/" className="logo">
            <Image src={logoImage} className="logo-img" width={100} />
          </Link>
          <div className="links" >
            <Link href="/" className="link image link1 ">
              Home
            </Link>
            <Link href="/about" className="link link2">
              About
            </Link>
            <Link
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
            </Link>
            <Link href="/#home_casestudy" className="link link4">
              {" "}
              Case Studies
            </Link>
            <Link href="/blogs" className="link link5">
              {" "}
              Blogs
            </Link>
          </div>

          <div className="flex-end">
            <Link href="/contact" className="btn1">
              Get Started
            </Link>

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
              {servicelists.map((item, index) => (
                <Link href={item.path} key={index} className="link  link1">
                  <div
                    className="top bg-img-contain"  id={item.className}
                    style={{ backgroundImage: `url(${item.images})` }}
                  ></div>

                  <h5>{item.name}</h5>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      {navbar.mobNav && (
        <div className="mob-nav">
          <div className="top">
            <div className="logo2">
              <Image src={logoImage} className="logo-img-mobile" width={100} />
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
            <Link
              href="/"
              className="link link1"
              onClick={() => setNavbar({ ...navbar, mobNav: false })}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="link link2"
              onClick={() => setNavbar({ ...navbar, mobNav: false })}
            >
              About
            </Link>
            <div
              className="link link3"
              onClick={() => setMobService(!mobService)}
              style={{ cursor: "pointer" }}
            >
              Service
              <span className="downArrow arrow">
                {mobService ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </span>
            </div>
            <div className={`service-list ${mobService ? "active" : ""}`}>
              <div className="list">
                {servicelists.map((item, index) => (
                  <Link
                    href={item.path}
                    key={index}
                    onClick={() => setNavbar({ ...navbar, mobNav: false })}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/#home_casestudy"
              onClick={() => {
                closeAll();
                setNavbar((element) => ({
                  ...element,
                  mobNav: false,
                }));
              }}
              className="link link4"
            >
              Case Studies
            </Link>

            <Link
              href="/blogs"
              className="link link5"
              onClick={() => setNavbar({ ...navbar, mobNav: false })}
            >
              Blogs
            </Link>
            <Link
              className="btn1"
              href="/contact"
              style={{ marginTop: "20px" }}
              onClick={() => setNavbar({ ...navbar, mobNav: false })}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header_main;
