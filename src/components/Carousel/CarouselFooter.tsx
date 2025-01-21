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
}: CarouselFooterProps): JSX.Element => {
  const showedImages = Array.from({
    length: imagesLength >= 5 ? 5 : imagesLength,
  });

  return (
    <footer className="carouselFooter" aria-label="carousel footer">
      <div
        style={{
          display: "flex",
          backgroundColor: "gray",
          borderRadius: "10px",
          gap: "5px",
          padding: "3px 7px",
          marginBottom: "5px",
          overflow: "hidden",
        }}
      >
        {showedImages.map((_, index) => {
          return (
            <Circle
              color={currentImgIndex === index ? "#007bff" : "#ffffff"}
              size={12}
              key={index}
              setCurrentImgIndex={() =>
                setCurrentImgIndex && setCurrentImgIndex(index)
              }
            />
          );
        })}
      </div>
    </footer>
  );
};

export default CarouselFooter;
