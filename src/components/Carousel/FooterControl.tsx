import './Carousel.css'

interface FooterControlProps {
  images: string[];
  setCurrentImgIndex: (index: number) => void;
}

const FooterControl = ({ images, setCurrentImgIndex } : FooterControlProps) => {
  return (
    <div className="footer-control">
      {images.map((image, index) => {
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

