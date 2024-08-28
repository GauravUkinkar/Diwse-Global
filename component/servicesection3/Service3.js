import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './service3.scss';

// import topimg from " ../../../public/assets/dgmarketing.jpg"

function Service3(props) {
 
    return (
        <>
            {/* -------service-top-section------ */}
            <div className="service-top-section parent">
                <div
                    className="service-top-cont bg-img-cover cont"
                    style={{ backgroundImage: `url(${props.contbgimg.src})` }}
                >
                </div>
            </div>

            {/* -------service-bottom-section------ */}
            <div className="service-bottom-section parent bg-img-cover">
                <div className="service-bottom-cont  cont">
                    {/* {list.map((item) => (
                        <div className="service-bottom-card">
                            <div className="card-img-box bg-img-cover"></div>
                            <div className="service-card-content">
                                <h3 className='service-card-title'>{item.title}</h3>
                                <p>{item.content} </p>
                            </div>
                        </div>
                    ))} */}



                    <Swiper
                        spaceBetween={50}
                        centeredSlides={false}
                        slidesPerView={3}
                        autoplay={{
                            delay: 250000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            280: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                              },
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                              },
                            350: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                              },
                            690: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            780: {
                              slidesPerView: 2,
                              spaceBetween: 40,
                            },
                            1024: {
                              slidesPerView: 3,
                              spaceBetween: 50,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                              },
                          }}
                        pagination={{
                            clickable: false,
                        }}
                        navigation={true}
                        modules={[Autoplay,  Navigation]}
                        className="mySwiper"
                    >

                        {props.list.map((item) => (
                            <SwiperSlide >
                                <div className="slide-card">
                                    <div className="slide-card-img1 bg-img-cover" style={{ backgroundImage: `url(${item.image.src})` }} >
                                    </div>
                                    <h4 className="slide-heading">{item.heading} </h4>
                                    <p>{item.content}
                                    </p>
                                </div>

                            </SwiperSlide>
                        ))
                        }
                    </Swiper>

                </div>
            </div>
        </>
    )
}

export default Service3