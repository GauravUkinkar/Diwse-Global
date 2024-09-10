"use Client";

import React, { useEffect, useState } from "react";
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
        <h3 className="heading_text">
          <span className="gradient-text">{props.highlight_heading}</span>
          {props.Main_heading}
        </h3>
        <div className="branches-cont">
          {props.branchesData.map((item, index) => (
            <div
              className={`branch bg-img-cover ${props.class} ${
                item.mouseLeave
                  ? "branch bg-img-cover flipAgainCard"
                  : `${props.class} branch`
              }`}
              key={index}
              style={{ background: `url(${item.branch_img.src})` }}
              onMouseLeave={() => props.onMouseLeave(index)}
              onMouseEnter={() => props.onMouseEnter(index)}
            >
              <div className="overlay">
                <>
                  {item.togglePattern ? (
                 <div className="branch_site">
                     <div className="country">
                      <div
                        className="flag"
                        style={{
                          background: `url(${item.flag_img.src})`,
                          backgroundPosition:
                            item.flagePosition || "center center",
                        }}
                      ></div>
                      {props.heading ? (
                        <h3 className="heading">{item.countryName}</h3>

                      ) : (
                        <p>{item.countryName}</p>
                 

                      )}
                    </div>
                    <p>
                      Office
                    </p>
                 </div>

                  ) : (
                    <p className="branchdesc">{item.branch_desc}</p>
                  )}
                </>
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
