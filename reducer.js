import {
  SAVE_TODO,
  COMPLETE_TODO,
  COMPLETED_SHOWN,
  TOGGLE_THEME,
} from "./actionTypes";
import { createReducer } from "./createReducer";

const themes = ["light", "dark"];

const initState = {
  todos: [],
  theme: "light",
  completedShown: false,
};

export const reducer = createReducer(initState, {
  [SAVE_TODO]: saveTodo,
  [COMPLETE_TODO]: completeTodo,
  [COMPLETED_SHOWN]: showCompleted,
  [TOGGLE_THEME]: toggleTheme,
});

function saveTodo(state, action) {
  return {
    ...state,
    todos: [
      {
        text: action.text,
        id: action.id,
        completed: false,
      },
      ...state.todos,
    ],
  };
}

function completeTodo(state, action) {
  const stateTodos = [...state.todos];
  const index = state.todos.findIndex((item) => item.id === action.id);

  if (index !== -1) {
    stateTodos[index].completed = true;
  }
  return {
    ...state,
    todos: [...stateTodos],
  };
}

function showCompleted(state, action) {
  const { completedShown } = action;
  return {
    ...state,
    completedShown,
  };
}

function toggleTheme(state, action) {
  const newTheme = state.theme === "light" ? "dark" : "light";
  return {
    ...state,
    theme: newTheme,
  };
}
