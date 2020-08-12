import { TOGGLE_THEME } from "./actionTypes";
import { createReducer } from "./createReducer";

const initialState = "light";

export const themeReducer = createReducer(initialState, {
  [TOGGLE_THEME]: toggleTheme,
});

function toggleTheme(state, action) {
  return state === "light"
    ? "dark"
    : "light";
}
