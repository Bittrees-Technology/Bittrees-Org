import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Info from "./Info";

test("renders the mission and a route back home", () => {
  render(
    <MemoryRouter>
      <Info />
    </MemoryRouter>
  );

  expect(screen.getByText(/making business simpler and more impactful/i)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Bittrees" })).toHaveAttribute("href", "/");
});
