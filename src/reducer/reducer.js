import { ACTIONS } from "./actionTypes";

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_NEW_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case ACTIONS.CHECK_AS_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === Number(action.payload.id)) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        }),
      };

    case ACTIONS.SELECT_EDITED_TODO:
      return {
        ...state,
        editedTodo: action.payload,
      };

    case ACTIONS.UPDATE_SELECTED_TODO:
      return {
        ...state,
        editedTodo: null,
        todos: state.todos.map((todo) => {
          if (todo.id === Number(action.payload.id)) {
            return action.payload;
          }
          return todo;
        }),
      };

    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload.id;
        }),
      };

    case ACTIONS.MOVE:
      return {
        ...state,
        todos: action.payload,
      };

    case ACTIONS.SET_TODO_MARK_STATUS:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === Number(action.payload.id)) {
            return action.payload;
          }
          return todo;
        }),
      };

    default:
      return state;
  }
}
