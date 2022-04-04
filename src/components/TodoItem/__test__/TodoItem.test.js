import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoItem from "../TodoItem";

const list = {
  todo: "Hello",
  due: "2022-04-03",
  id: 1648874401775,
  complete: false,
  order: 1,
};
const todoOperations = jest.fn;
const index = 0;

describe("Testing TodoItem component", () => {
  it("should return an element", async () => {
    render(
      <TodoItem
        isFirstItem={index === 0}
        isLastItem={index === list.length - 1}
        todo={list}
        todoOperations={todoOperations}
      />
    );

    const doneCheckbox = screen.getByRole("checkbox", { checked: false });
    expect(doneCheckbox.checked).toEqual(false);

    const todoHeading = screen.getByTitle(/Hello/i);
    expect(todoHeading).toHaveTextContent(/Hello/i);

    const todoDue = screen.getByRole("heading", { level: 6 });
    expect(todoDue).toHaveTextContent(/April 3, 2022/i);
  });
});
