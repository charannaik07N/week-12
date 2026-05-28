import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/Counter";

describe("Counter", () => {
  test("renders without crashing", () => {
    render(<Counter initialCount={5} />);
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  test("uses default initial count", () => {
    render(<Counter />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("increments with userEvent", async () => {
    const user = userEvent.setup();

    render(<Counter initialCount={0} />);
    await user.click(screen.getByRole("button", { name: "+" }));

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("decrements with fireEvent", () => {
    render(<Counter initialCount={2} />);

    fireEvent.click(screen.getByRole("button", { name: "-" }));

    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
