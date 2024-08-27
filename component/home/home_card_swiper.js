import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../home/home_card_swiper.scss";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Home_Card_Swiper = ({ cards, showButton = true, showImage= true, cardHeight = 'auto' }) => {
  return (
    <div className="card-parent">
      <div className="card-box">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={false}
          autoplay={{ delay: 2000 }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          breakpoints={{
            300: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {cards &&
            cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="card" style={{ height: cardHeight }}>
                  <div className="top-card">
                    <div className="icon">{card.icon}</div>
                    
                      {showImage && card.image && (
                        <div className="top-img bg-img-cover" style={{ background: `url(${card.image.src})` }}></div>
                      )}
                    <h4 className="card-title ">{card.title}</h4>
                    <p className="card-desc">{card.description}</p>
                  </div>
                  {showButton && (
                    <div className="bottom-card">
                      <a href="#" className="btn1">
                        {card.buttonText}
                      </a>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home_Card_Swiper;
