import React from "react";
import { IoArrowForward } from "react-icons/io5";
const Button_comp = (props) => {
  return (
    <>
      <button class="learn-more">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">{props.btn_text}</span>
      </button>
    </>
  );
};

export default Button_comp;
