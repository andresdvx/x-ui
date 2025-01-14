import React from "react";
import RightArrowIcon from "./svg/RightArrowIcon";
import "./Carousel.css";

interface RightArrowProps {
  setCurrentImgIndex: (index: number) => void;
  currentImgIndex: number;
  imagesLength: number;
}

const RightArrow = ({ setCurrentImgIndex, currentImgIndex, imagesLength } : RightArrowProps) => {

  const handleClick = (evt : React.MouseEvent<HTMLButtonElement>) => {

    evt.stopPropagation();

    if (currentImgIndex === imagesLength - 1) {
      setCurrentImgIndex(0);
      return;
    }
    setCurrentImgIndex(currentImgIndex + 1);
  };

  return imagesLength == 1 ? null : (
    <button className="rightArrowButton" onClick={handleClick} aria-label="right arrow">
      <RightArrowIcon />
    </button>
  );
};

export default RightArrow;

