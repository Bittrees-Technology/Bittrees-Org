import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Info from "./Info";

test("renders the description and a route back home", () => {
  render(
    <MemoryRouter>
      <Info />
    </MemoryRouter>
  );

  expect(screen.getByText(/Bittrees brings together governance, research and capital/i)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Bittrees" })).toHaveAttribute("href", "/");
});
