import { useEffect, useState } from "react";
import imagesLimits from "./imagesLimits";
import "./Carousel.css";

interface FooterControlProps {
  images: string[];
  footerControlOrientation?: "horizontal" | "vertical";
  setCurrentImgIndex: (index: number) => void;
}

const FooterControl = ({ images, setCurrentImgIndex, footerControlOrientation = "horizontal" }: FooterControlProps) => {
  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const [imagesLimit, setImagesLimit] = useState<number>(0);

  useEffect(() => {
    const carousel = document.getElementById("carousel");
    if (carousel) {
      setCarouselWidth(
        parseFloat(carousel.getBoundingClientRect().width.toString())
      );
    }
  }, [imagesLimit, carouselWidth]);

  useEffect(() => {
    const foundLimit = imagesLimits.find((limit) => {
      return carouselWidth >= limit.starts && carouselWidth <= limit.ends;
    });
    if (foundLimit) setImagesLimit(foundLimit.limit);
  }, [carouselWidth]);

  return (
    <div className={`footer-control-${footerControlOrientation}`}>
      {images.map((image, index) => {
        if (index > imagesLimit - 1) {
          return null;
        }
        return (
          <img
            src={image}
            alt=""
            key={image}
            className=""
            onClick={() => setCurrentImgIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default FooterControl;
