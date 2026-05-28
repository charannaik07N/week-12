import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../components/Button";

describe("Button", () => {
  test("renders without crashing", () => {
    render(<Button label="Save" />);
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
  });

  test("renders text from props", () => {
    render(<Button label="Submit" />);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("handles click with userEvent", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<Button label="Click Me" onClick={handleClick} />);
    await user.click(screen.getByRole("button", { name: "Click Me" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("can be clicked with fireEvent", () => {
    const handleClick = jest.fn();

    render(<Button label="Fire" onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button", { name: "Fire" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("falls back to primary variant for unknown variant", () => {
    render(<Button label="Fallback" variant="ghost" />);

    const button = screen.getByRole("button", { name: "Fallback" });

    expect(button).toHaveClass("bg-zinc-900");
  });

  test("renders disabled state", () => {
    render(<Button label="Disabled" disabled />);

    expect(screen.getByRole("button", { name: "Disabled" })).toBeDisabled();
  });
});
