import React from "react";
import RightArrowIcon from "./svg/RightArrowIcon";
import "./Carousel.css";
interface RightArrowProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  imagesLength: number;
}

const RightArrow = ({ imagesLength, ...props }: RightArrowProps): JSX.Element | null => {
  return imagesLength == 1 ? null : (
    <button className="rightArrowButton" {...props} aria-label="right arrow">
      <RightArrowIcon />
    </button>
  );
};

export default RightArrow;
