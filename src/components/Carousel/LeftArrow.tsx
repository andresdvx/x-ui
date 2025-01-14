import React from "react";
import LeftArrowIcon from "./svg/LeftArrowIcon";
import "./Carousel.css";

interface LeftArrowProps {
  setCurrentImgIndex: (index: number) => void;
  currentImgIndex: number;
  imagesLength: number;
}

const LeftArrow = ({ setCurrentImgIndex, currentImgIndex, imagesLength } : LeftArrowProps) => {

  const handleClick = (evt : React.MouseEvent<HTMLButtonElement>) => {
    
    evt.stopPropagation();
    
    if (currentImgIndex === 0) {
      setCurrentImgIndex(imagesLength - 1);
      return;
    }
    setCurrentImgIndex(currentImgIndex - 1);
  };

  return imagesLength == 1 ? null : (
    <button className="leftArrowButton" onClick={handleClick} aria-label="left arrow">
      <LeftArrowIcon />
    </button>
  );
};

export default LeftArrow;

