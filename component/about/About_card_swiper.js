import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./about_card-swiper.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation"; // Import navigation styles

// import required modules
import { EffectCoverflow, Navigation } from "swiper/modules";
import Image from "next/image";
import img1 from "../../public/assets/img/abhay.webp";
import img2 from "../../public/assets/img/akka.webp";
import img3 from "../../public/assets/img/prajakta.webp";
import img4 from "../../public/assets/img/travel.webp";
import img5 from "../../public/assets/img/gastro.webp";
// import img6 from '../../public/assets/img/Axonic.png';
import img7 from "../../public/assets/img/apn.webp";
import img8 from "../../public/assets/img/deeva.webp";
import img9 from "../../public/assets/img/dental.webp";
import img10 from "../../public/assets/img/onkar.webp";
import img11 from "../../public/assets/img/spn.webp";
import img12 from "../../public/assets/img/Sai-digitek.webp";
import img13 from "../../public/assets/img/Tij.webp";
import img14 from "../../public/assets/img/prashant.webp";
import img15 from "../../public/assets/img/pandoza.webp";
import img16 from "../../public/assets/img/medical.webp";
import img17 from "../../public/assets/img/diwise.webp";
import img18 from "../../public/assets/img/swami.webp";
import img19 from "../../public/assets/img/nvm.webp";
import img20 from "../../public/assets/img/narmada.webp";
import img21 from "../../public/assets/img/vdmf.webp";
import img22 from "../../public/assets/img/align.webp";
import img23 from "../../public/assets/img/hcc.webp";

const About_card_swiper = (props) => {
  return (
    <div className="about-parent parent">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true} // Enable looping
        coverflowEffect={{
          rotate: 50,
          stretch: 1,
          depth: 200,
          modifier: 0.5,
          slideShadows: true,
        }}
        navigation={true} // Enable navigation arrows
        initialSlide={2}
        modules={[EffectCoverflow, Navigation]}
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
