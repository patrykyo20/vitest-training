import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../components/Counter";
import { test, expect } from "vitest";
import "@testing-library/jest-dom";

test("It should render Counter component", function renderComponent() {
  render(<Counter initialValue={400} />);
});

test("It should check a initialValue", function renderComponent() {
  render(<Counter initialValue={400} />);
  const currentCount = screen.getByTestId("counter");
  expect(currentCount.textContent).toBe("400");
});

test("It should check a initialValue", function renderComponent() {
  render(<Counter initialValue={400} />);
  const currentCount = screen.getByTestId("counter");
  const resetButton = screen.getByRole('button', { name: "reset" });

  fireEvent.click(resetButton);
  expect(currentCount.textContent).toBe("0");
});

test("Value when InitialValue = 65, after 2 clicking button shoud be 67", function renderComponent() {
  render(<Counter initialValue={65} />);
  const currentCount = screen.getByTestId("counter");
  const incrementButton = screen.getByRole("button", { name: "Increment (+)" });

  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  expect(currentCount.textContent).toBe("67");
});