import { TOGGLE_THEME } from "./actionTypes";
import { createReducer } from "../createReducer";
import { THEME_LIGHT, THEME_DARK } from "./themeConstants";

const initialState = THEME_LIGHT;

export default createReducer(initialState, {
  [TOGGLE_THEME]: toggleTheme,
});

function toggleTheme(state, action) {
  return state === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
}
