import React from "react";
import { IoArrowForward } from "react-icons/io5";
const Button_comp = (props) => {
  return (
    <>
      <a href={props.link} className="learn-more-link">
        <button class="learn-more">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">{props.btn_text}</span>
        </button>
      </a>
    </>
  );
};

export default Button_comp;
