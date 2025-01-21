import { useEffect, useState } from "react";
import imagesLimits from "../imagesLimits";

interface IFooterControlDimensions {
  imagesLimit: number;
}

export const useSetFooterControlDimentions = (
  orientation: string
): IFooterControlDimensions => {
  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const [carouselHeight, setCarouselHeight] = useState<number>(0);
  const [imagesLimit, setImagesLimit] = useState<number>(0);

  useEffect(() => {
    const carousel = document.getElementById("carousel");
    if (carousel) {
      orientation === "horizontal"
        ? setCarouselWidth(
            parseFloat(carousel.getBoundingClientRect().width.toString())
          )
        : setCarouselHeight(
            parseFloat(carousel.getBoundingClientRect().height.toString())
          );
    }
  }, [carouselWidth, carouselHeight, orientation]);

  useEffect(() => {
    const foundLimit = imagesLimits.find((limit) => {
      return carouselWidth >= limit.starts && carouselWidth <= limit.ends;
    });
    if (foundLimit) setImagesLimit(foundLimit.limit);
  }, [carouselWidth]);

  return { imagesLimit };
};
