"use client"
import Header_main from "@/component/header/Header_main";
import "./globals.scss";
import img1 from "../public/assets/bg-orange.png";
import img2 from "../public/assets/bg-red.png";
import Cursor from "@/component/cursor/Cursor";
import New_footer from "@/component/footer/New_footer";
import Script from 'next/script';
import Tools from "@/component/contactsidebar/Tools";
import PageToTop from "@/component/pagetotop/PageToTop";
import { Helmet } from "react-helmet";


const GA_TRACKING_ID = 'G-8E86NYGDL3'; // Your Google Analytics tracking ID

export default function RootLayout({ children }) {
  const styling = {
    backgroundImage: `url('${img1.src}')`,
  };
  const styling1 = {
    backgroundImage: `url('${img2.src}')`,
  };




  
  return (
    <html lang="en">
      <body className="body">
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />
           <Helmet>
        <meta charSet="utf-8" />
        <title>Agro Products - Onkar World | Premium Agricultural Sourcing</title>
        <meta name="description" content="Onkar World specializes in the procurement and distribution of high-quality agro products. We source the best agricultural commodities to meet global demand while maintaining quality and sustainability." />
        <meta name="keywords" content="Onkar World, agro products, agricultural sourcing, global agriculture, high-quality agro products, sustainable agriculture, bulk agricultural products, farming products, agricultural trade" />
      </Helmet>
        <div className="transition"></div>
        <div className="transition t2"></div>
        <div className="transition t3"></div>
        <div className="transition t4"></div>
         
        <Cursor />
        {/* <div className="left-side-image side-image" style={styling}></div>
        <div className="right-side-image side-image" style={styling1}></div> */}
        <div className="content">
        <Tools/>
          <Header_main />
       <PageToTop />
          {children}
          <New_footer />
        </div>
      </body>
    </html>
  );
}
