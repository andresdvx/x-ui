import Circle from "./svg/CircleCarouselFooter";
import "./Carousel.css";

interface CarouselFooterProps {
  currentImgIndex: number;
  imagesLength: number;
  setCurrentImgIndex?: (index: number) => void;
}

const CarouselFooter = ({
  currentImgIndex,
  imagesLength,
  setCurrentImgIndex,
}: CarouselFooterProps) => {
  return (
    <footer className="carouselFooter" aria-label="carousel footer">
      {Array.from({ length: imagesLength }).map((_, index) => (
        <Circle
          key={index}
          size={15}
          color={currentImgIndex === index ? "#007bff" : "#ccc"}
          setCurrentImgIndex={
            setCurrentImgIndex && (() => setCurrentImgIndex(index))
          }
        />
      ))}
    </footer>
  );
};

export default CarouselFooter;
