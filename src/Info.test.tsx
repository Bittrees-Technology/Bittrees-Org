import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Info from "./Info";

test("explains the DAO and ecosystem with useful destinations and a route back home", () => {
  render(
    <MemoryRouter>
      <Info />
    </MemoryRouter>
  );

  expect(screen.getByText(/Governance, Research and Capital make up the Bittrees DAO/)).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "DAO" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Ecosystem" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Explore products" })).toHaveAttribute("href", "https://index.bittrees.org");
  expect(screen.getByRole("link", { name: "Report a website issue" })).toHaveAttribute("href", "https://github.com/Bittrees-Technology/Bittrees-Org/issues");
  expect(screen.getByRole("link", { name: "Bittrees home" })).toHaveAttribute("href", "/");
  expect(screen.getByRole("link", { name: "Back to home" })).toHaveAttribute("href", "/");
  expect(screen.queryByRole("link", { name: /AI/i })).not.toBeInTheDocument();
  expect(document.querySelectorAll('a[href^="https://"]')).toHaveLength(5);
});
