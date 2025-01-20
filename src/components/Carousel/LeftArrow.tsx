import React from "react";
import LeftArrowIcon from "./svg/LeftArrowIcon";
import "./Carousel.css";

interface LeftArrowProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  imagesLength: number;
}

const LeftArrow = ({imagesLength, ...props } : LeftArrowProps) => {

  return imagesLength == 1 ? null : (
    <button className="leftArrowButton" {...props} aria-label="left arrow">
      <LeftArrowIcon />
    </button>
  );
};

export default LeftArrow;

