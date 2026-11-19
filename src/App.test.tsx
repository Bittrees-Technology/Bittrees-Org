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
  expect(screen.queryByRole("link", { name: "eCrypt" })).not.toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "DAO" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Ecosystem" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Explore products" })).toHaveAttribute("href", "https://index.bittrees.org");
  expect(screen.getAllByRole("link", { name: "About Bittrees" })).toHaveLength(2);
  for (const link of screen.getAllByRole("link", { name: "About Bittrees" })) {
    expect(link).toHaveAttribute("href", "/info");
  }
  expect(document.querySelectorAll('a[href^="https://"]')).toHaveLength(4);
});
