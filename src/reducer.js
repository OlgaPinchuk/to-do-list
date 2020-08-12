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
    ...state, // test 1
    todos: [
      {
        text: action.text,
        id: action.id,
        completed: false,
      }, // test 2 - new item is added, test 3 - new item is added first
      ...state.todos, // test 4 - existing items are preserved
    ],
  };
}

function completeTodo(state, action) {
  // test 1 - updates existing todo and returns new state
  // test 2 - during updated of existing todo item - return new object
  // test 3 - doesn't update state if todo doesn't exist
  // test 4 - preserves existing todos during update
  const index = state.todos.findIndex((item) => item.id === action.id);
  if (index === -1)
    return state;

  return {
    ...state,
    todos: state.todos.map((item, i) => index === i
      ? { ...item, completed: true }
      : item),
  };
}

function showCompleted(state, action) {
  const { completedShown } = action;

  if (completedShown === state.completedShown)
    return state;

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
