import { createStore } from "redux";
import { reducer } from "./reducer";

const store = createStore(reducer);

console.log(store);
console.log(store.getState());
store.dispatch({ type: "INCREMENT" });
console.log(store.getState());
store.dispatch({ type: "INCREMENT" });
console.log(store.getState());
store.dispatch({ type: "DECREMENT" });
console.log(store.getState());
