import { createContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/reducer";
import { getLocalStorage, setLocalStorage } from "../services/LocalStorage";

export const todoContext = createContext(null);

function TodoContextProvider(props) {
  const initialState = {
    todos: getLocalStorage("todo") || [],
    editedTodo: null,
    get lastTodoItemOrder() {
      return this.todos.length !== 0
        ? this.todos[this.todos.length - 1].order
        : 0;
    },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setLocalStorage("todo", state);
  }, [state]);

  return (
    <todoContext.Provider value={{ state, dispatch }}>
      {props.children}
    </todoContext.Provider>
  );
}

export default TodoContextProvider;
