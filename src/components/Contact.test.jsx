import { render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
import Contact from "./Contact";

// Testcase to check loading of a component

// describe is used to combine the similar test cases together
describe("Contact Us Page Test Case", () => {
  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  // Testing for button
  it("Should load button inside Contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button"); // Pass
    // const button = screen.getByText("Random");  // Fail
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside Contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes.length)
    expect(inputBoxes.length).toBe(2);
    //expect(inputBoxes.length).not.toBe(3);
  });
});
