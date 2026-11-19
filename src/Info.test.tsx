import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Info from "./Info";

test("shows the Bittrees mission and keeps the DAO, ecosystem, and home links", () => {
  render(
    <MemoryRouter>
      <Info />
    </MemoryRouter>
  );

  expect(document.querySelector("#about-content")).toHaveTextContent(
    /^We’re dedicated to making business simpler and more impactful by harnessing the power of technology, all while nurturing and fortifying bonds within the metaverse community and extending these connections even further\.$/
  );
  expect(screen.getByRole("heading", { name: "DAO" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Ecosystem" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Explore products" })).toHaveAttribute("href", "https://index.bittrees.org");
  expect(screen.queryByRole("link", { name: "Report a website issue" })).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Bittrees home" })).toHaveAttribute("href", "/");
  expect(screen.getByRole("link", { name: "Back to home" })).toHaveAttribute("href", "/");
  expect(screen.queryByRole("link", { name: /AI/i })).not.toBeInTheDocument();
  expect(document.querySelectorAll('a[href^="https://"]')).toHaveLength(4);
});
