import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LeftArrow from "../../components/Carousel/LeftArrow";
import RightArrow from "../../components/Carousel/RightArrow";
import { Carousel } from "../../components/Carousel";

describe("carousel general component", () => {
  const images: string[] = [
    "https://i.pinimg.com/736x/0a/68/a9/0a68a9a695997041ad4c6df4f5de21f1.jpg",
    "https://i.pinimg.com/236x/66/9b/7c/669b7cd897de9b80bf779fee82023eda.jpg",
    "https://i.pinimg.com/236x/ab/d4/ec/abd4ec7695cd5b5b7c172df3ab628901.jpg",
  ];
  
  // test to carousel component
  test("should render general carousel", () => {
    render(<Carousel images={images} />);

    const carousel = document.getElementById("carousel");
    expect(carousel).toBeInTheDocument();
  });

  test("carousel - should render with default footer control", () => {
    render(<Carousel images={images} footerControl />);
    const footerControl = screen.getByLabelText("footer-control");
    expect(footerControl).toBeInTheDocument();
  });

  test("carousel - should render without carousel footer indicator", () => {
    render(<Carousel images={images} footerIndicator={false} />);
    const footerIndicator = document.getElementById("footer-indicator");
    expect(footerIndicator).not.toBeInTheDocument();
  });

  //test ti left button
  test("right button - should render", () => {
    render(<RightArrow imagesLength={2} />);
    const rightArrow = screen.getByLabelText("right-arrow-button");
    expect(rightArrow).toBeInTheDocument();
  });

  test("right button - should not render if imagesLength is equal to 1", () => {
    render(<RightArrow imagesLength={1} />);
    const rightArrow = document.querySelector("rightArrowButton");
    expect(rightArrow).not.toBeInTheDocument();
  });

  test("right button - onClick function should be called once", () => {
    const handleClick = jest.fn();
    render(<RightArrow imagesLength={3} onClick={handleClick("increment")} />);
    const rightArrow = document.querySelector("rightArrowButton");
    if (rightArrow) {
      userEvent.click(rightArrow);
    }
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // test to left button
  test("left button - should render", () => {
    render(<LeftArrow imagesLength={2} />);
    const leftArrow = screen.getByLabelText("left-arrow-button");
    expect(leftArrow).toBeInTheDocument();
  });

  test("left button - should not render if imagesLength is equal to 1", () => {
    render(<LeftArrow imagesLength={1} />);
    const leftArrow = document.querySelector("leftArrowButton");
    expect(leftArrow).not.toBeInTheDocument();
  });

  test("left button - onClick function should be called once", () => {
    const handleClick = jest.fn();
    render(<LeftArrow imagesLength={3} onClick={handleClick("decrement")} />);
    const leftArrow = document.querySelector("leftArrowButton");
    if (leftArrow) {
      userEvent.click(leftArrow);
    }
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
