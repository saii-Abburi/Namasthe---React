import{ render, screen } from "@testing-library/react";
import Contact from "../Contact.js"
import "@testing-library/jest-dom";

test("Contact us form is tested that loaded or not ", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Contact us Button is loaded or not ", () => {
  render(<Contact />);
  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("Contact us input field is loaded or not ", () => {
  render(<Contact />);
  const inputField = screen.getByPlaceholderText("Enter your email");

  expect(inputField).toBeInTheDocument();
});
