import { render, screen } from "@testing-library/react";
import UserList from "../components/UserList";

describe("UserList", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("shows loading state", () => {
    global.fetch.mockReturnValue(new Promise(() => {}));

    render(<UserList endpoint="/api/users" />);

    expect(screen.getByText("Loading users...")).toBeInTheDocument();
  });

  test("renders users on success", async () => {
    global.fetch.mockResolvedValue({
      ok: true,
      json: async () => [
        { id: 1, name: "Ava", role: "QA" },
        { id: 2, name: "Noah" },
      ],
    });

    render(<UserList endpoint="/api/users" />);

    expect(await screen.findByText("Ava")).toBeInTheDocument();
    expect(await screen.findByText("Noah")).toBeInTheDocument();
    expect(screen.queryByText("(Dev)")).not.toBeInTheDocument();
  });

  test("renders error state", async () => {
    global.fetch.mockResolvedValue({
      ok: false,
      json: async () => [],
    });

    render(<UserList endpoint="/api/users" />);

    expect(
      await screen.findByText("Unable to load users."),
    ).toBeInTheDocument();
  });

  test("renders error state when request fails", async () => {
    global.fetch.mockRejectedValue(new Error("Network error"));

    render(<UserList endpoint="/api/users" />);

    expect(
      await screen.findByText("Unable to load users."),
    ).toBeInTheDocument();
  });
});
