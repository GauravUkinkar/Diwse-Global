"use client";

import React, { useEffect, useState } from "react";
import "./cursor.scss";
import gsap from "gsap";
import axios from "axios";

function Cursor() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
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

    fetchImages();

    const cursor = document.getElementsByClassName("cursor")[0];
    const imageContainer =
      document.getElementsByClassName("image-container")[0];
    const scrolldiv = document.getElementsByClassName("scrollDiv");
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;

      console.log("Hovered element:", e.target);
      console.log(
        "Has imageHover class:",
        e.target.classList.contains("imageHover")
      );

      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        opacity: 1,
        scale: 1,
      });

      if (e.target.classList.contains("imageHover")) {
        const index = e.target.getAttribute("data-index");
        cursor.style.display = "none";
        imageContainer.style.display = "block";
        gsap.to(imageContainer, {
          x: clientX,
          y: clientY,
          duration: 0.1,
        });

        setCurrentImageIndex(index);
      } else if (e.target.classList.contains("scroll")) {
        cursor.style.display = "none";
        scrolldiv.style.display = "flex";
        gsap.to(scrolldiv, {
          x: clientX,
          y: clientY,
          duration: 0.1,
        });
      } else {
        cursor.style.display = "flex";
        imageContainer.style.display = "none";
      }
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [images]);

  return (
    <>
      <div className="cursor">
        <div className="dot"></div>
      </div>

      <div className="scrollDiv">scroll</div>

      <div className="image-container">
        {images.length > 0 && (
          <img src={images[currentImageIndex]} alt="Hovered" />
        )}
      </div>
    </>
  );
}

export default Cursor;
