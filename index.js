import { createStore } from "redux";
import { reducer } from "./reducer";
import {
  saveTodo,
  completeTodo,
  showCompleted,
  toggleTheme,
} from "./actionTypes";

const store = createStore(reducer);

console.log(store);
console.log(store.getState());

store.dispatch(saveTodo("First todo"));
store.dispatch(saveTodo("Second todo"));
store.dispatch(saveTodo("Third todo"));
console.log(store.getState());

store.dispatch(completeTodo(1));
console.log(store.getState());

store.dispatch(showCompleted(false));
console.log(store.getState());

store.dispatch(toggleTheme());
console.log(store.getState());

store.dispatch(toggleTheme());
console.log(store.getState());
