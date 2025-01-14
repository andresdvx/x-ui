import "./Carousel.css";

interface CarouselFooterProps {
  currentImgIndex: number;
  imagesLength: number;
}

const CarouselFooter = ({
  currentImgIndex,
  imagesLength,
}: CarouselFooterProps) => {
  return (
    <footer className="carouselFooter" aria-label="carousel footer">
      <span className="carouselFooterInfo">
        {currentImgIndex + 1} / {imagesLength}
      </span>
    </footer>
  );
};

export default CarouselFooter;
