import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders the Bittrees destinations", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole("img", { name: "Bittrees" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Bittrees, Inc." })).toHaveAttribute(
    "href",
    "https://gov.bittrees.org"
  );
  expect(screen.getByRole("link", { name: "Research" })).toHaveAttribute(
    "href",
    "https://research.bittrees.org"
  );
  expect(screen.getByRole("link", { name: "Capital" })).toHaveAttribute(
    "href",
    "https://capital.bittrees.org"
  );
});
