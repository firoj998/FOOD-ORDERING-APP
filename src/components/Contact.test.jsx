import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Contact from "./Contact";

test("Should load contact us component", () => {
  render(<Contact />); 
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
