import React from "react";
import "./card_comp.scss";
import { GrLocation } from "react-icons/gr";
import { IoCallSharp } from "react-icons/io5";
const CardComp = (props) => {
  return (
    <>
      <div
        className="branches parent"
        style={{
          paddingBottom: `${props.paddingB}`,
        }}
      >
        <div className="branches-cont">
          {props.branchesData.map((item, index) => (
            <div
              className="branch bg-img-cover branch"
              key={index}
              style={{ background: `url(${item.branch_img.src})` }}
            >
              <div className="overlay">
                <div className="country">
                  <div
                    className="flag bg-img-cover"
                    style={{
                      background: `url(${item.flag_img.src})`,
                    }}
                  ></div>
                  {props.heading ? (
                    <h3 className="heading">{item.countryName}</h3>
                  ) : (
                    <p>{item.countryName}</p>
                  )}
                </div>

                <p className="branchdesc">{item.branch_desc}</p>
                <a href={item.number_link} className="number">
                  <span className="icon">{item.CallIcon}</span>{" "}
                  <span>{item.number_text}</span>
                </a>
                <a href={item.address_link} className="address" target="_blank">
                  <span className="icon">{item.locationIcon}</span>
                  <span className="address-text">{item.address_text}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardComp;
