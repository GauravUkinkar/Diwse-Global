import React from "react";
import "../home/logo_corousel.scss";
// Importing logos
import logo1 from "../../public/assets/logo/facebook.webp";
import logo2 from "../../public/assets/logo/adobe.webp";
import logo3 from "../../public/assets/logo/figma.webp";
import logo4 from "../../public/assets/logo/google-2.webp";
import logo5 from "../../public/assets/logo/google-ads.webp";
import logo6 from "../../public/assets/logo/google-analytics.webp";
import logo7 from "../../public/assets/logo/instagram.webp";
import logo8 from "../../public/assets/logo/linkedin.webp";
import logo9 from "../../public/assets/logo/react.webp";
import logo10 from "../../public/assets/logo/semrush.webp";
import logo11 from "../../public/assets/logo/woocommerce.webp";
import logo12 from "../../public/assets/logo/wordpress.webp";
import logo13 from "../../public/assets/logo/threads.webp";
import Image from "next/image";

const data = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
];

const LogoCarousel = () => {
  return (
    <div className="third-section">
      <div className="marquee">
        <div className="marqueeContent">
          {data.map((img, index) => (
            <Image key={index} src={img} alt={`Logo ${index}`} />
          ))}
          {data.map((img, index) => (
            <Image key={index + data.length} src={img} alt={`Logo ${index + data.length}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
