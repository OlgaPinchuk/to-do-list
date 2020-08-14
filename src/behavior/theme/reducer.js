import { TOGGLE_THEME } from "./actions";
import { createReducer } from "../utils/createReducer";

const initialState = "light";

export default createReducer(initialState, {
  [TOGGLE_THEME]: toggleTheme,
});

function toggleTheme(state, action) {
  return state === "light"
    ? "dark"
    : "light";
}
