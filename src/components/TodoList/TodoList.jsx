import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import TodoItem from "../TodoItem/TodoItem";
import NoData from "../NoData/NoData";

function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <>
      {todos.length !== 0 ? (
        todos
          .sort((a, b) => a.order - b.order)
          .map((todo) => (
            <TodoItem key={todo.id} length={todos.length} {...todo} />
          ))
      ) : (
        <NoData />
      )}
    </>
  );
}

export default TodoList;
