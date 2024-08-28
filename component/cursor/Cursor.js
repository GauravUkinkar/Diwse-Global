"use client";

import React, { useEffect, useState } from "react";
import "./cursor.scss";
import gsap from "gsap";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import image1 from "../../public/assets/image1.jpg";
import image2 from "../../public/assets/image2.jpg";
import image3 from "../../public/assets/image3.jpg";
import Image from "next/image";
import axios from "axios";
function Cursor() {
  const [data, setData] = useState([]);
  const fetchBlogsImage = async () => {
    try {
      const response = await axios.get(
        "https://api.diwiseglobal.com/auth/blogs/"
      );
      const filterImage = response.data.data
        .filter((item) => item.image)
        .map((item) => item.image);
      console.log(filterImage, "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
      setData(filterImage);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlogsImage();
  });
  const [currentImage, setCurrentImage] = useState(null);
  // const images = data;
  const images = [image1,image2,image3]
  console.log(images,"ketan")
  useEffect(() => {
    const cursor = document.getElementsByClassName("cursor")[0];
    const imageElement = document.querySelectorAll(".imagehover");
    const body = document.querySelectorAll(".body");

    const dot = document.querySelector(".dot");
    const onMouseMove = (e) => {
      const text = document.querySelector(".scrollDiv");
      const { clientX, clientY } = e;

      // Move custom cursor
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        opacity: 1,
        scale: 1,
      });
      if (text) {
        gsap.to(text, {
          x: clientX,
          y: clientY,
          duration: 0.1,
        });
      }

      if (e.target.classList.contains("scroll")) {
        if (text) {
          text.style.display = "flex";
        }
        cursor.style.display = "none";
      } else if (text) {
        text.style.display = "none";

        cursor.style.display = "flex";
      }
    };
    const onMouseEnterImage = (index) => {
      gsap.to(cursor, {
        width: "300px",
        height: "200px",
        borderRadius: "25px",
        overflow: "hidden",
        // duration: 0.1,
      });
      setCurrentImage(images[index]);

      if (dot) {
        dot.style.display = "none";
      }
    };

    const onMouseLeaveImage = () => {
      gsap.to(cursor, {
        scale: 1,
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "transperant",
        border: "1px solid #ffffff",
        opacity: 1,
        overflow: "visible",
        // duration: 0.05,
      });

      setCurrentImage(null);

      if (dot) {
        dot.style.display = "block";
      }
    };

    const mouseleaveBody = () => {
      gsap.to(cursor, {
        duration: 0.1,
        opacity: 0,
        scale: 0,
      });
    };
    document.addEventListener("mousemove", onMouseMove);

    imageElement.forEach((item, index) => {
      item.addEventListener("mouseenter", () => onMouseEnterImage(index));
      item.addEventListener("mouseleave", onMouseLeaveImage);
    });

    body.forEach((item) => {
      item.addEventListener("mouseleave", mouseleaveBody);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);

      imageElement.forEach((item, index) => {
        item.removeEventListener("mouseenter", () => onMouseEnterImage(index));
        item.removeEventListener("mouseleave", onMouseLeaveImage);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor">
        <div className="dot"></div>

        {currentImage && (
          <div className="imagecontainer">
            <Image
              src={currentImage}
              alt="Cursor Image"
              width={300}
              height={200}
            />
          </div>
        )}
      </div>

      <div className="scrollDiv">
        scroll
        <span className="leftIcon icon">
          <MdOutlineKeyboardArrowLeft />
        </span>
        <span className="rightIcon ">
          <MdOutlineKeyboardArrowLeft />
        </span>
      </div>

      <div className="blurcursor"></div>
    </>
  );
}

export default Cursor;
