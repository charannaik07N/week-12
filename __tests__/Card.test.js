import { render, screen } from "@testing-library/react";
import Card from "../components/Card";

describe("Card", () => {
  test("renders without crashing", () => {
    render(
      <Card title="Profile">
        <p>Card body</p>
      </Card>,
    );

    expect(screen.getByText("Profile")).toBeInTheDocument();
  });

  test("renders children and footer", () => {
    render(
      <Card title="Account" footer="Updated 2 hours ago">
        <p>Details</p>
      </Card>,
    );

    expect(screen.getByText("Details")).toBeInTheDocument();
    expect(screen.getByText("Updated 2 hours ago")).toBeInTheDocument();
  });
});
