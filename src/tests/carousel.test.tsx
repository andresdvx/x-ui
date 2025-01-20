import { render, screen, fireEvent } from "@testing-library/react";

describe("button component", () => {
  test('should render a button with text "Next"', () => {
    render(<button>Next</button>);

    const button = screen.getByText("Next");
    expect(button).toBeInTheDocument();
  });

  test('handleClick function should be called once', ()=>{
    const handleClick = jest.fn();
    render(<button onClick={(handleClick)}>Next</button>)

    const button = screen.getByText("Next");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
});
