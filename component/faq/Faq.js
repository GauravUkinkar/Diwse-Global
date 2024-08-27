"use client";

import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Faq = ({ heading, content, isActive, onToggle }) => {
  return (
    <div className={isActive ? "faq active" : "faq"}  onClick={onToggle}>
      <h5 className="title">
        {heading}
        <span className={isActive ? "icon active" : "icon"}>
          <MdKeyboardArrowDown />
        </span>
      </h5>
      <p className={isActive ? "content active" : "content"}>{content}</p>
    </div>
  );
};

export default Faq;