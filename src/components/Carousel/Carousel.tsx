/* eslint-disable react-hooks/exhaustive-deps */
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import CarouselFooter from "./CarouselFooter";
import FooterControl from "./FooterControl";
import { useEffect, useState } from "react";
import "./Carousel.css";

interface CarouselProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "id"> {
  images: string[];
  index?: number;
  footerIndicator?: boolean;
  footerControl?: boolean;
  footerControlOrientation?: "horizontal" | "vertical";
}

/**
 * Carousel component that displays a series of images with optional footer indicators and controls.
 *
 * @param {CarouselProps} props - The properties for the Carousel component.
 * @param {string[]} props.images - An array of image URLs to be displayed in the carousel.
 * @param {number} [props.index=0] - The initial index of the image to be displayed.
 * @param {boolean} [props.footerIndicator=true] - Whether to display footer indicators for the images.
 * @param {boolean} [props.footerControl=false] - Whether to display footer controls for navigating the images.
 * @param {"horizontal" | "vertical"} [props.footerControlOrientation="horizontal"] - The orientation of the footer controls.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Additional HTML attributes to be applied to the carousel container.
 *
 * @returns {JSX.Element} The rendered Carousel component.
 */
export const Carousel = ({
  images = [],
  index = 0,
  footerIndicator = true,
  footerControl = false,
  footerControlOrientation = "horizontal",
  ...props
}: CarouselProps): JSX.Element => {
  const [currentImg, setCurrentImg] = useState<string>("");
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(index);
  const [isFading, setIsFading] = useState<boolean>(false);

  const handleImgIndexChange = (direction: "increase" | "decrease") => {
    setCurrentImgIndex((prevIndex) => {
      if (direction === "increase") {
        return (prevIndex + 1) % images.length;
      } else {
        return (prevIndex - 1 + images.length) % images.length;
      }
    });
  };

  useEffect(() => {
    setIsFading(true);
    const timeoutId = setTimeout(() => {
      setCurrentImg(images[currentImgIndex]);
      setIsFading(false);
    }, 250);
    return () => clearTimeout(timeoutId);
  }, [currentImgIndex]);

  return (
    <div id={`carousel-container-${footerControlOrientation}`} {...props}>
      <figure className={`carousel-${footerControlOrientation}`} id="carousel">
        <LeftArrow
          onClick={() => handleImgIndexChange("decrease")}
          imagesLength={images.length}
        />
        <img
          alt="img"
          src={currentImg}
          className={`carousel-images ${isFading ? "fade-out" : ""}`}
        />
        <RightArrow
          onClick={() => handleImgIndexChange("increase")}
          imagesLength={images.length}
        />
        {footerIndicator ? (
          <CarouselFooter
            currentImgIndex={currentImgIndex}
            imagesLength={images.length}
            setCurrentImgIndex={setCurrentImgIndex}
          />
        ) : null}
      </figure>
      {footerControl ? (
        <FooterControl
          images={images}
          footerControlOrientation={footerControlOrientation}
          setCurrentImgIndex={setCurrentImgIndex}
        />
      ) : null}
    </div>
  );
};

export default Carousel;
