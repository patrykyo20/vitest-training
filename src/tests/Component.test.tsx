import "@testing-library/jest-dom";
import { test, expect } from "vitest";
import Component from "../components/Component";
import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import { userEvent } from "@storybook/test";

test("It should render component", function renderComponent() {
  render(<Component />);
});

test("It should show element getById", function findElementById() {
  render(<Component />);
  const currentCount = screen.getByTestId("current-count");
  expect(currentCount.textContent).toBe("Count: 0");
});

test("It should show element getById", function findElementById() {
  render(<Component />);
  const currentCount = screen.getByTestId("current-count");
  expect(currentCount).toHaveClass("counter");
});

test("It should find the incrementButton and see action", async function findElementById() {
  render(<Component />);
  const currentCount = screen.getByTestId("current-count");
  const incrementButton = await screen.findByText('Decrement (-)')
  fireEvent.click(incrementButton)
  expect(currentCount).toHaveTextContent("Count: -1");
});

// user click

test("It should find the incrementButton and see action", async function findElementById() {
  const user = userEvent.setup();
  render(<Component />);
  const currentCount = screen.getByTestId("current-count");
  expect(currentCount).toHaveTextContent("Count: 0");
  const incrementButton = await screen.findByText("Decrement (-)");
  await user.click(incrementButton);
  expect(currentCount).toHaveTextContent("Count: -1");
});


