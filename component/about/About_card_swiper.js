import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./about_card-swiper.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation"; // Import navigation styles

// import required modules
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import Image from "next/image";

const About_card_swiper = (props) => {
  return (
    <div className="about-parent parent">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        // slidesPerView={"auto"}
        loop={true} // Enable looping
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 1,
          depth: 200,
          modifier: 0.5,
          slideShadows: true,
        }}
        navigation={true} // Enable navigation arrows
        // pagination={true}
        initialSlide={2}
        modules={[EffectCoverflow, Navigation,Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {props.swiperImg.map((item, index) => (
          <SwiperSlide>
            <Image
              key={index}
              src={item.image}
              alt="Image"
              className="responsive-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default About_card_swiper;
