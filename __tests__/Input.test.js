import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import Input from "../components/Input";

function ControlledInput() {
  const [value, setValue] = useState("");

  return (
    <Input
      label="Name"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder="Type here"
    />
  );
}

describe("Input", () => {
  test("renders without crashing", () => {
    render(<Input label="Email" value="" onChange={() => {}} />);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  test("accepts typing with userEvent", async () => {
    const user = userEvent.setup();

    render(<ControlledInput />);
    const input = screen.getByRole("textbox", { name: "Name" });

    await user.type(input, "Alex");

    expect(input).toHaveValue("Alex");
  });

  test("updates value with fireEvent", () => {
    const handleChange = jest.fn();

    render(<Input label="City" value="" onChange={handleChange} />);

    fireEvent.change(screen.getByRole("textbox", { name: "City" }), {
      target: { value: "Berlin" },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
