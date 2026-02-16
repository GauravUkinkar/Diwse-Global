"use client";
import Header_main from "@/component/header/Header_main";
import "./globals.scss";
import img1 from "../public/assets/bg-orange.png";
import img2 from "../public/assets/bg-red.png";
import Cursor from "@/component/cursor/Cursor";
import New_footer from "@/component/footer/New_footer";
import Script from "next/script";
import Tools from "@/component/contactsidebar/Tools";
import PageToTop from "@/component/pagetotop/PageToTop";
import { Helmet } from "react-helmet";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GA_TRACKING_ID = "G-0DFK4RD3VY";
const FB_PIXEL_ID = "937697050830102";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typeof window.gtag === "function") {
        window.gtag("config", GA_TRACKING_ID, {
          page_path: pathname,
        });
      }
    }, 500); // Wait to ensure gtag is available

    return () => clearTimeout(timeout);
  }, [pathname]);

  const styling = {
    backgroundImage: `url('${img1.src}')`,
  };
  const styling1 = {
    backgroundImage: `url('${img2.src}')`,
  };

  return (
    <html lang="en" suppressHydrationWarning>

      <body className="body">
        {/* Google Analytics */}
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
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Facebook Pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Facebook Pixel noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt="Facebook Pixel"
          />
        </noscript>

        {/* Meta tags */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>Diwise Global - Digital Marketing Company.</title>
          <meta
            name="description"
            content="Elevate your brand with expert digital marketing, social media strategies, branding, web design, and global solutions to boost your online presence."
          />
          <meta
            name="keywords"
            content="web marketing, digital marketing strategies, marketing strategies, media marketing, digital branding"
          />
        </Helmet>

        {/* Transitions */}
        <div className="transition"></div>
        <div className="transition t2"></div>
        <div className="transition t3"></div>
        <div className="transition t4"></div>

        <Cursor />

        {/* Optional side images */}
        {/* <div className="left-side-image side-image" style={styling}></div>
        <div className="right-side-image side-image" style={styling1}></div> */}

        <div className="content">
          <Tools />
          <Header_main />
          <PageToTop />
          {children}
          <New_footer />
        </div>
      </body>
    </html>
  );
}
