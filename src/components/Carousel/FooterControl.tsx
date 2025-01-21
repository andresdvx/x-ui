import { useSetFooterControlDimentions } from "./hooks/useSetFooterControlDimentions";
import "./Carousel.css";

interface FooterControlProps {
  images: string[];
  setCurrentImgIndex: (index: number) => void;
  footerControlOrientation?: "horizontal" | "vertical";
}

const FooterControl = ({
  images,
  setCurrentImgIndex,
  footerControlOrientation = "horizontal",
}: FooterControlProps): JSX.Element => {
  const { imagesLimit } = useSetFooterControlDimentions(
    footerControlOrientation
  );

  return (
    <div className={`footer-control-${footerControlOrientation}`} aria-label="footer-control">
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
