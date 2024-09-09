import React from 'react'
import "./card_comp.scss"
import { GrLocation } from "react-icons/gr";
import { IoCallSharp } from "react-icons/io5";
const CardComp = (props) => {
  return (
    <>
      <div className="branches parent">
        <div className="branches-cont">
          <div className="branch1 bg-img-cover branch">
            <div className="country">
              <div className="flag bg-img-cover"   ></div>
              <p>India</p>
            </div>

            <a href="tel:+918482936866" className="number">
              <span  className="icon">
                <IoCallSharp />
              </span>{" "}
              <span>+91 8482936866</span>
            </a>
            <a
              href="https://maps.app.goo.gl/nN6Vi6L55yzdAU6h9"
              className="address"
              target="_blank"
            >
              <span className="icon">
                <GrLocation />
              </span>
              <span  className='address-text'>
                Office no. 214-216, 10 Biz Park,Near Symbiosis Law College,
                Airport Road,Vimannagar, Pune- 411014
              </span>
            </a>
          </div>
          <div className="branch2 bg-img-cover branch"   >
            <div className="country">
              <div className="flag "></div>
              <p>UAE</p>
            </div>

            <a href="tel:+971508060418" className="number">
              <span className="icon">
                <IoCallSharp />
              </span>{" "}
              <span>+971508060418</span>
            </a>
            <a
              href="https://maps.app.goo.gl/5HJr7gqHrCPyjLTKA"
              className="address"
              target="_blank"
            >
              <span className="icon">
                <GrLocation />
              </span>
              <span className='address-text'>
                Office no. 1304 | Building no. LB19 | JAZFA View 18-19, Jebel
                Ali Free Zone, PO Box 262746 Downtown Jabel Ali - Dubai - United
                Arab Emirates
              </span>
            </a>
          </div>
          <div className="branch3 bg-img-cover branch">
            <div className="country">
              <div className="flag bg-img-cover"></div>
              <p>United Kingdom</p>
            </div>

            <a href="tel:+447398814161" className="number">
              <span className="icon">
                <IoCallSharp />
              </span>{" "}
              <span>+44 7398814161</span>
            </a>
            <a
              href="https://maps.app.goo.gl/nN6Vi6L55yzdAU6h9"
              className="address"
              target="_blank"
            >
              <span className="icon">
                <GrLocation />
              </span>
              <span className='address-text'>
                Docklands Business Centre, Suite 12/3D 10-16 Tiller Road,
                London, England E14 8PX
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardComp
