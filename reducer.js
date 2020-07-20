import { INCREMENT, DECREMENT } from "./actionTypes";

const initState = {
  counter: 0,
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return increment(state, action);

    case DECREMENT:
      return decrement(state, action);

    default:
      return state;
  }
};

function increment(state, action) {
  return {
    counter: state.counter + action.counter,
  };
}

function decrement(state, action) {
  return {
    counter: state.counter - action.counter,
  };
}
