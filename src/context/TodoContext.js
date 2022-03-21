import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";
import { ACTIONS } from "../reducer/actionTypes";
import { Reduce } from "../reducer/reducer";
import { getLocalStorage, setLocalStorage } from "../services/LocalStorage";

export const TodoContext = createContext(null);

function TodoContextProvider(props) {
  const initialState = getLocalStorage("todo") || [];
  const [todos, dispatch] = useReducer(Reduce, initialState);

  const [todoId, setTodoId] = useState(null);
  const [close, isClosed] = useState(false);

  useEffect(() => {
    setLocalStorage("todo", todos);
  }, [todos]);

  const addNewTodo = (e) => {
    const { todo, due } = e.target;
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_NEW_TODO,
      payload: {
        id: Date.now(),
        todo: todo.value,
        due: due.value,
        complete: false,
        order: 0,
      },
    });

    todo.value = "";
    due.value = null;
  };

  const markAsDone = (e) => {
    dispatch({
      type: ACTIONS.CHECK_AS_COMPLETE,
      payload: { id: e.target.value },
    });
  };

  const getTodoId = useCallback((id) => {
    setTodoId(id);
  }, []);

  const cancelOperation = () => {
    isClosed((prevCheck) => !prevCheck);
  };

  const updateTodo = (e) => {
    const { todo, due } = e.target;
    e.preventDefault();
    dispatch({
      type: ACTIONS.EDIT_TODO,
      payload: {
        id: todoId,
        todo: todo.value,
        due: due.value,
        complete: false,
      },
    });
    todo.value = "";
    due.value = null;
    isClosed((prevCheck) => !prevCheck);
  };

  const deleteTodo = (id) => {
    dispatch({
      type: ACTIONS.DELETE_TODO,
      payload: { id },
    });
  };

  const moveUp = (id) => {
    dispatch({
      type: ACTIONS.MOVE_UP,
      payload: { id },
    });
  };

  const moveDown = (id) => {
    dispatch({
      type: ACTIONS.MOVE_DOWN,
      payload: { id },
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addNewTodo,
        markAsDone,
        getTodoId,
        todoId,
        updateTodo,
        deleteTodo,
        cancelOperation,
        close,
        moveUp,
        moveDown,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
