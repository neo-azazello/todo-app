import { render, screen } from "@testing-library/react";
import Statistics from "../Statistics";
import TodoContextProvider from "../../../context/TodoContext";
import { setLocalStorage } from "../../../services/LocalStorage";

const items = [
  {
    todo: "Take a note",
    due: "2022-04-01",
    id: 1648874401775,
    complete: true,
    order: 1,
  },
  {
    todo: "Brush teeth",
    due: "2022-04-13",
    id: 1648874401776,
    complete: true,
    order: 2,
  },
  {
    todo: "Go to bed",
    due: "2022-04-23",
    id: 1648874401777,
    complete: true,
    order: 3,
  },
];

describe("Testing Statistics Component", () => {
  it("should return valid complete amount and due tasks count", () => {
    setLocalStorage("todo", {
      todos: items,
      editedTodo: null,
      lastTodoItemOrder: 0,
    });

    render(
      <TodoContextProvider>
        <Statistics />
      </TodoContextProvider>
    );

    const completedCount = screen.getByTestId("completed-count");
    expect(completedCount).toHaveTextContent(3);

    const dueTaskCount = screen.getByTestId("due-todo");
    expect(dueTaskCount).toHaveTextContent(1);

    setLocalStorage(null);
  });
});
