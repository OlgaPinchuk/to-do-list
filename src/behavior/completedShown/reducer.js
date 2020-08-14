import { createReducer } from "../createReducer";
import { COMPLETED_SHOWN } from "./actionTypes";

const initialState = false;

export default createReducer(initialState, {
  [COMPLETED_SHOWN]: showCompleted,
});

function showCompleted(state, action) {
  const { completedShown } = action;

  if (completedShown === state)
    return state;

  return completedShown;
}
