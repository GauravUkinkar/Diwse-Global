import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "./about_card-swiper.scss"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';  // Import navigation styles

// import required modules
import { EffectCoverflow, Navigation } from 'swiper/modules';
import Image from 'next/image';
import img1 from '../../public/assets/img/abhay.png';
import img2 from '../../public/assets/img/akka.png';
import img3 from '../../public/assets/img/prajakta.png'; 
import img4 from '../../public/assets/img/travel.png';
import img5 from '../../public/assets/img/gastro.png';
// import img6 from '../../public/assets/img/Axonic.png';
import img7 from '../../public/assets/img/apn.png';
import img8 from '../../public/assets/img/deeva.png';
import img9 from '../../public/assets/img/dental.png';
import img10 from '../../public/assets/img/onkar.png';
import img11 from '../../public/assets/img/spn.png';
import img12 from '../../public/assets/img/Sai-digitek.png';
import img13 from '../../public/assets/img/Tij.png';
import img14 from '../../public/assets/img/prashant.png';
import img15 from '../../public/assets/img/pandoza.png';
import img16 from '../../public/assets/img/medical.png';
import img17 from '../../public/assets/img/diwise.png';
import img18 from '../../public/assets/img/swami.png';
import img19 from '../../public/assets/img/nvm.png';
import img20 from '../../public/assets/img/narmada.png';
import img21 from '../../public/assets/img/vdmf.png';
import img22 from '../../public/assets/img/align.png';
import img23 from '../../public/assets/img/hcc.png';


const About_card_swiper = () => {
  return (
    <div className="about-parent parent">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}  // Enable looping
        coverflowEffect={{
          rotate: 50,
          stretch: 1,
          depth: 200,
          modifier: 0.5,
          slideShadows: true,
        }}
        navigation={true}  // Enable navigation arrows
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
        <SwiperSlide>
          <Image src={img1} alt="Abhay Chopada" className="responsive-image" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={img2} alt="Akka Foundation" className="responsive-image" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={img3} alt="Prajakta Marwaha" className="responsive-image" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={img4} alt="Travel & Taste" className="responsive-image" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={img5} alt="Gastrosurgery" className="responsive-image" />
        </SwiperSlide>
        {/* <SwiperSlide>
        <Image src={img6} alt="Axonic Health" className="responsive-image" />
        </SwiperSlide> */}
        <SwiperSlide>
        <Image src={img7} alt="Arvind Patil Nilangekar" className="responsive-image" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={img8} alt="Deeva Karnani Shah" className="responsive-image" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={img9} alt="The Team Dental" className="responsive-image" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={img10} alt="Onkar Sugars" className="responsive-image" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={img11} alt="Sambhaji Patil Nilangekar" className="responsive-image" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={img12} alt="Sai-digitek" className="responsive-image" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={img13} alt="The Indian Journey" className="responsive-image" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={img14} alt="Prashant Patil" className="responsive-image" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={img15} alt="Pandoza Solutions" className="responsive-image" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={img16} alt="Medical Licensing" className="responsive-image" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={img17} alt="Diwise uk" className="responsive-image" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={img18} alt="Shri Swami Samarth Smart City Nilanga" className="responsive-image" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={img19} alt="NVM Infratech" className="responsive-image" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={img20} alt="Narmada Solvent" className="responsive-image" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={img21} alt="Vdmf" className="responsive-image" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={img22} alt="The Aligner Dentist" className="responsive-image" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={img23} alt="Healthcare concierge" className="responsive-image" />
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  )
  
 vbnj}

export default About_card_swiper;
