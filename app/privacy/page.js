import React from "react";
import "./privacy.scss"

const Page = () => {
  return (
    <>
      <div className="privacy-parent parent">
        <div className="privacy-cont cont">
          <h1 classname="title">Privacy Policy</h1>
          <p>
            At DIwise Global, we respect your privacy and are committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, and protect your data when you use our
            services.
          </p>
          <h4 classname="title">
            1.Information We Collect
          </h4>
          <p>
          1.1 Personal Information: When you visit our website, we may collect personal information that you voluntarily provide, such as your name, email address, phone number, and any other information you choose to share with us.
          </p>
          <p>
          1.2 Usage Data: We automatically collect information about your visit to our website, including your IP address, browser type, operating system, pages visited, and the date and time of your visit. This data helps us understand our website's usage and improve our services accordingly.
          </p>
          <p>1.3 Cookies and Tracking Technologies: We use cookies and similar tracking technologies to enhance the browsing experience, analyse website traffic, and deliver personalised content. You can control cookie settings through your browser preferences.</p>
          <h4 classname="title">
            2. How We Use Your Information
          </h4>{" "}
          <p>
          2.1 To Provide and Improve Our Services: We use your personal information to deliver the services you request, respond to your inquiries, and improve our website's functionality and user experience.
          </p>{" "}
          <p>
          2.2 To Communicate with You: We may use your contact information to send you updates, newsletters, marketing materials, and other communications related to our services. You can opt out of receiving marketing communications at any time.
          </p>
          <p>2.3 To Analyse and Enhance Our Website: We use usage data to analyse trends, track user interactions, and improve the content and performance of our website.</p>
          <h4 classname="title">3. How We Share Your Information</h4>
          <p>
          3.1 Service Providers: We may share your information with third-party service providers who assist us in operating our website, processing payments, and performing other functions on our behalf. These service providers are obligated to protect your information and use it only for the purposes for which it was disclosed.
          </p>
          <p>3.2 Legal Requirements: We may disclose your information if required to do so by law, regulation, or legal process or in response to valid requests by public authorities.</p>
          <p>3.3 Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction. We will notify you of any such change and provide you with the option to opt-out.</p>
          <h4 classname="title">4. Data Security</h4>
          <p>
          We implement reasonable security measures to protect your information from unauthorised access, use, or disclosure. However, no data transmission over the Internet or electronic storage system is completely secure, so we cannot guarantee the absolute security of your information.
          </p>
        
          
          <h4 classname="title">5. Your Choices</h4>
          <p>
          5.1 Access and Update: You may access and update your personal information by contacting us directly. We will make reasonable efforts to ensure your information is accurate and complete.
          </p>{" "}
          <p>5.2 Opt-Out: You can opt out of receiving marketing communications by following the unsubscribe instructions provided in those communications.</p>
          <p>5.3 Cookies: You can manage your cookie preferences through your browser settings. Note that disabling cookies may affect the functionality of our website.</p>
          <h4 classname="title">6. Children's Privacy</h4>
          <p>
          Our website is not intended for children under the age of 13. We do not knowingly collect or solicit personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.
          </p>{" "}
          <h4 classname="title">7. Changes to This Privacy Policy</h4>
          <p>
            {" "}
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on our website. Your continued use of our website after any changes constitutes your acceptance of the revised policy.
          </p>{" "}
          <h4 classname="title">8. Contact Us</h4>
          <p>
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            info@diwiseglobal.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
