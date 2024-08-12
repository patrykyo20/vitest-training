import { fireEvent, render, screen } from "@testing-library/react";
import AddItems from "../components/AddItems";
import { expect, it } from "vitest";

it("It should render AddItems Component", function renderComponent() {
  render(<AddItems propsItem={""} />);
});

it("It should check the item input exist", function checkInputExist() {
  render(<AddItems propsItem={""} />);
  const currentInput = screen.getByPlaceholderText("enter the name of item");
  expect(currentInput);
});

it("It should check button is disabled when input has no value", function checkButtonDisabled() {
  render(<AddItems propsItem={""} />);
  const currentButton = screen.getByRole("button", { name: "Add item" });
  expect(currentButton).toBeDisabled();
});

it("It should check button is enabled when input has value", function checkButtonEnabled() {
  render(<AddItems propsItem={"habababa"} />);
  const currentInput = screen.getByPlaceholderText("enter the name of item");
  const currentButton = screen.getByRole("button", { name: "Add item" });

  expect(currentInput.textContent).toBe('');
  expect(currentButton).toBeEnabled();
});

it("It should when button is clicked, add new Item", function addNewItem() {
  render(<AddItems propsItem={"habababa"} />);
  const allItems = screen.getByTestId("allItems");
  const currentButton = screen.getByRole("button", { name: "Add item" });
  fireEvent.click(currentButton);
  expect(allItems.childElementCount).toBe(1);
});

it("It should remove a item, when is ('X') button clicked", function removeItem() {
  render(<AddItems propsItem={"habababa"} />);
  const allItems = screen.getByTestId("allItems");
  const currentButton = screen.getByRole("button", { name: "Add item" });
  fireEvent.click(currentButton);
  expect(allItems.childElementCount).toBe(1);
  const removeItemButton = screen.getByTestId("removeItem");
  fireEvent.click(removeItemButton);
  expect(allItems.childElementCount).toBe(0);
});