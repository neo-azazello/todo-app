import { ACTIONS } from "./actionTypes";

export function Reduce(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_NEW_TODO:
      return [...state, action.payload];

    case ACTIONS.CHECK_AS_COMPLETE:
      return state.map((todo) => {
        if (todo.id === Number(action.payload.id)) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    case ACTIONS.EDIT_TODO:
      return state.map((todo) => {
        if (todo.id === Number(action.payload.id)) {
          return { ...todo, ...action.payload };
        }
        return todo;
      });

    case ACTIONS.DELETE_TODO:
      return state.filter((todo) => {
        return todo.id !== action.payload.id;
      });

    case ACTIONS.MOVE_UP:
      return state.map((todo) => {
        if (todo.id === Number(action.payload.id)) {
          return { ...todo, order: todo.order - 1 };
        }
        return todo;
      });

    case ACTIONS.MOVE_DOWN:
      return state.map((todo) => {
        if (todo.id === Number(action.payload.id)) {
          return { ...todo, order: todo.order + 1 };
        }
        return todo;
      });

    default:
      return state;
  }
}
