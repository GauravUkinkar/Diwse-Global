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
    // const scrollDiv = document.querySelector(".scrollDiv");

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Move the default cursor
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
      } 
      
      // else if (e.target.classList.contains("scroll")) {
      //   cursor.style.display = "none";
      //   imageContainer.style.display = "none";
      //   scrollDiv.style.display = "flex";
      //   gsap.to(scrollDiv, {
      //     x: clientX,
      //     y: clientY,
      //     duration: 0.1,
      //   });
      // } 
      
      else {
        cursor.style.display = "flex";
        imageContainer.style.display = "none";
        // scrollDiv.style.display = "none";
      }
    };

    const onMouseLeave = () => {
 
      gsap.to(cursor, { opacity: 0, scale: 0 });
      gsap.to(imageContainer, { opacity: 0 });
      // gsap.to(scrollDiv, { opacity: 0 });
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [hovered]);

  return (
    <>
      <div className="cursor">
        <div className="dot"></div>
      </div>

      {/* <div className="scrollDiv">scroll</div> */}

      <div className="image-container">
        {images.length > 0 && (
          <img src={images[currentImageIndex]} alt="Hovered" />
        )}
      </div>
    </>
  );
}

export default Cursor;
