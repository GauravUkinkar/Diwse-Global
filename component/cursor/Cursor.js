"use client";

import React, { useEffect, useState } from "react";
import "./cursor.scss";
import gsap from "gsap";
import axios from "axios";

function Cursor() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://api.diwiseglobal.com/auth/blogs/"
      );
      setImages(
        response.data.data
          .filter((item) => item.image)
          .map((item) => item.image)
      );
    } catch (error) {
      console.error("Error fetching images", error);
    }
  };

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const imageContainer = document.querySelector(".image-container");
    const scrollDivs = document.querySelectorAll(".scroll");
    const dot = document.querySelector(".dot"); // Assuming this exists
    const scrollDiv = document.querySelector(".scrollDiv"); // Assuming this exists

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;

      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        opacity: 1,
        scale: 1,
      });

      if (e.target.classList.contains("imageHover")) {
        if (!hovered) {
          setHovered(true);
          fetchImages();
        }

        const index = e.target.getAttribute("data-index");
        cursor.style.display = "none";
        imageContainer.style.display = "block";
        gsap.to(imageContainer, {
          x: clientX,
          y: clientY,
          duration: 0.1,
        });

        setCurrentImageIndex(index);
      } else {
        cursor.style.display = "flex";
        imageContainer.style.display = "none";
      }
    };

    const onMouseEnterScroll = () => {
      gsap.to(cursor, {
        height: "100px",
        width: "100px",
        backgroundColor: "#fe62016b",
        border: "none",
        // duration:0.1
      });

      if (scrollDiv) {
        scrollDiv.style.display = "flex";
      }
      if (dot) {
        dot.style.display = "none";
      }
    };

    const onMouseLeaveScroll = () => {
      gsap.to(cursor, {
        scale: 1,
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "transparent",
        border: "1px solid #ffffff",
        opacity: 1,
        overflow: "visible",
        duration:0.8
      });

      if (scrollDiv) {
        scrollDiv.style.display = "none";
      }
      if (dot) {
        dot.style.display = "block";
      }
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, scale: 0 });
      gsap.to(imageContainer, { opacity: 0 });
    };

    scrollDivs.forEach((item) => {
      item.addEventListener("mouseenter", onMouseEnterScroll);
      item.addEventListener("mouseleave", onMouseLeaveScroll);
    });
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      scrollDivs.forEach((item) => {
        item.removeEventListener("mouseenter", onMouseEnterScroll);
        item.removeEventListener("mouseleave", onMouseLeaveScroll);
      });
    };
  }, [hovered]);

  return (
    <>
      <div className="cursor">
        <div className="dot"></div>
        <div className="scrollDiv">


          <p>
            scroll
          </p>
        </div>
      </div>

      <div className="image-container">
        {images.length > 0 && (
          <img src={images[currentImageIndex]} alt="Hovered" />
        )}
      </div>
    </>
  );
}

export default Cursor;
