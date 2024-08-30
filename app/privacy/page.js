import React from "react";
import "./privacy.scss";

const Page = () => {
  return (
    <>
      <div className="privacy-parent parent">
        <div className="privacy-cont cont">
          <h1>Privacy Policy</h1>
          <p>
            At DIwise Global, we respect your privacy and are committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, and protect your data when you use our
            services.
          </p>
          <h4>1. Information We Collect Personal Information:</h4>
          <p>
            {" "}
            We collect information like your name, email address, phone number,
            and company details when you sign up for our services or contact us.
            Usage Information: We gather data on how you use our website,
            including your IP address and browsing activity.
          </p>
         <p>Cookies: We use cookies to improve your experience and
          analyze website usage.</p>
          <h4>2. How We Use Your Information Service Delivery:</h4>{" "}
          <p>
            We use your information to provide our services, such as Digital
            Marketing & SEO, Web & App Development, and more. Communication: We
            may contact you with updates, respond to inquiries, and send
            promotional materials (you can opt out anytime).
          </p>{" "}
          <p>Service Improvement: We analyze data to enhance our offerings
          and user experience.<br></br></p>
          <h4>3. Sharing Your Information</h4>
          <p>
            {" "}
            We do not sell your personal information. We may share it with
            trusted partners for service delivery and comply with legal
            obligations.
          </p>
          <h4>4. Data Security</h4>
          <p>
            {" "}
            We implement measures to protect your data, but please note that no
            method is completely secure.
          </p>
          <h4>5. Your Choices</h4>
          <p>
            {" "}
            You can access, update, or delete your information by contacting us.
            You can also opt out of marketing communications.{" "}
          </p>{" "}
          <h4>6. Third-Party Links</h4>
          <p>
            {" "}
            Our website may link to third-party sites. We are not responsible
            for their privacy practices.
          </p>{" "}
          <h4>7. Changes to This Policy</h4>
          <p>
            {" "}
            We may update this Privacy Policy occasionally and will notify you
            of significant changes.
          </p>{" "}
          <h4>8. Contact Us</h4>
          <p>
            {" "}
            For questions about this policy, please contact us at
            info@diwiseglobal.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
