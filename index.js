import { createStore } from "redux";
import { reducer } from "./reducer";
import { increment, decrement } from "./actionTypes";

const store = createStore(reducer);

console.log(store);
console.log(store.getState());
store.dispatch(increment(5));
console.log(store.getState());
store.dispatch(increment(10));
console.log(store.getState());
store.dispatch(decrement(-2));
console.log(store.getState());
