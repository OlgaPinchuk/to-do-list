import { createReducer } from "./createReducer";
import { SAVE_TODO, COMPLETE_TODO } from "./actionTypes";

const initialState = [];

export const todosReducer = createReducer(initialState, {
  [SAVE_TODO]: saveTodo,
  [COMPLETE_TODO]: completeTodo,
});

function saveTodo(state, action) {
  return [
    {
      text: action.text,
      id: action.id,
      completed: false,
    },
    ...state,
  ]
}

function completeTodo(state, action) {
  const index = state.findIndex((item) => item.id === action.id);
  if (index === -1)
    return state;

  return state.map((item, i) => index === i
    ? { ...item, completed: true }
    : item);
}