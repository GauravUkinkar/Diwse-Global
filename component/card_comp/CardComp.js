"use Client";

import React, { useEffect, useState } from "react";
import "./card_comp.scss";
import { GrLocation } from "react-icons/gr";
import { IoCallSharp } from "react-icons/io5";
const CardComp = (props) => {
  console.log("my props", props.branchesData[0].number_link);
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
          <br/>{props.Main_heading}
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
                        <h3 className="heading">{item.countryName} Office</h3>
                      ) : (
                        <p>{item.countryName}</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <>
                    {item.branch_desc ? (
                      <p className="branchdesc">{item.branch_desc}</p>
                    ) : (
                      <div className="super-class">
                     
                            <a href={item.number_link} className="number">
                              <span className="icon">{item.CallIcon}</span>{" "}
                              <span>{item.number_text}</span>
                            </a>
                         
                        
                            <a
                              href={item.address_link}
                              className="address"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="icon">{item.locationIcon}</span>
                              <span className="address-text">
                                {item.address_text}
                              </span>
                            </a>
                         
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardComp;
