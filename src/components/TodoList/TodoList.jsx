import React, { useCallback, useContext, useMemo } from "react";
import { todoContext } from "../../context/TodoContext";
import TodoItem from "../TodoItem/TodoItem";
import NoData from "../NoData/NoData";
import { ACTIONS } from "../../reducer/actionTypes";

function TodoList() {
  const { state, dispatch } = useContext(todoContext);

  const setEditedTodo = useCallback(
    (todo) => {
      dispatch({
        type: ACTIONS.SELECT_EDITED_TODO,
        payload: todo,
      });
    },
    [dispatch]
  );

  const setTodoMarkStatus = useCallback(
    (todo) => {
      dispatch({
        type: ACTIONS.CHECK_AS_COMPLETE,
        payload: { ...todo, completed: !todo.completed },
      });
    },
    [dispatch]
  );

  const deleteTodo = useCallback(
    (id) => {
      dispatch({
        type: ACTIONS.DELETE_TODO,
        payload: { id },
      });
    },
    [dispatch]
  );

  const move = useCallback(
    (currentOrder, directionOrder) => {
      const newTodos = state.todos.map((todo) => ({
        ...todo,
        order:
          todo.order === currentOrder
            ? directionOrder
            : todo.order === directionOrder
            ? currentOrder
            : todo.order,
      }));
      dispatch({
        type: ACTIONS.MOVE,
        payload: newTodos,
      });
    },
    [dispatch, state.todos]
  );

  const todoOperations = useMemo(
    () => ({
      setEditedTodo,
      setTodoMarkStatus,
      deleteTodo,
      move,
    }),
    [setEditedTodo, setTodoMarkStatus, deleteTodo, move]
  );

  return (
    <>
      {state?.todos?.length !== 0 ? (
        state.todos
          .sort((a, b) => a.order - b.order)
          .map((todo, index, self) => (
            <TodoItem
              isFirstItem={index === 0}
              isLastItem={index === self.length - 1}
              todo={todo}
              key={todo.id}
              todoOperations={todoOperations}
            />
          ))
      ) : (
        <NoData />
      )}
    </>
  );
}

export default TodoList;
