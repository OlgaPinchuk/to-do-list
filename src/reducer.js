import { createReducer } from './createReducer';
import { INCREMENT, DECREMENT } from './actions';

const initialState = { counter: 0 }

export const reducer = createReducer(initialState, {
  [INCREMENT]: increment,
  [DECREMENT]: decrement,
});

function increment(state, action) {
  return { counter: state.counter + action.by };
}

function decrement(state, action) {
  return { counter: state.counter - action.by };
}
