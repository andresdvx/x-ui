import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import CarouselFooter from "./CarouselFooter";
import FooterControl from "./FooterControl";
import { useEffect, useState } from "react";
import "./Carousel.css";

interface CarouselProps {
  images: string[];
  index?: number;
  footerControl?: boolean;
}

/**
*Carousel component to display images in a carousel
*@param images: Array of images to be displayed in the carousel
*@param index: Index of the image to be displayed first
*@param footerControl: Boolean to display footer control
*/
export const Carousel = ({images = [],index = 0,footerControl = false}: CarouselProps) => {

  const [currentImg, setCurrentImg] = useState<string>("");
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(index);
  const [isFading, setIsFading] = useState<boolean>(false);

  useEffect(() => {
    setIsFading(true);
    const timeoutId = setTimeout(() => {
      setCurrentImg(images[currentImgIndex]);
      setIsFading(false);
    }, 250);
    return () => clearTimeout(timeoutId);
  }, [currentImgIndex, images]);

  return (
    <>
      <figure className="carousel" id="carousel">
        <LeftArrow
          setCurrentImgIndex={setCurrentImgIndex}
          currentImgIndex={currentImgIndex}
          imagesLength={images.length}
        />
        <img
          alt="img"
          src={currentImg}
          className={`carousel-images ${isFading ? "fade-out" : ""}`}
        />
        <RightArrow
          setCurrentImgIndex={setCurrentImgIndex}
          currentImgIndex={currentImgIndex}
          imagesLength={images.length}
        />
        <CarouselFooter
          currentImgIndex={currentImgIndex}
          imagesLength={images.length}
        />
      </figure>
      {footerControl ? (
        <FooterControl
          images={images}
          setCurrentImgIndex={setCurrentImgIndex}
        />
      ) : null}
    </>
  );
};

export default Carousel;
