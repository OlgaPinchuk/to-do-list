import { createStore, combineReducers } from "redux";
import {
  saveTodo,
  completeTodo,
  showCompleted,
  toggleTheme,
} from "./src/actionTypes";
import { todosReducer } from "./src/todosReducer";
import { themeReducer } from "./src/themeReducer";
import { completedShownReducer } from "./src/completedShownReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  theme: themeReducer,
  completedShown: completedShownReducer,
});

const store = createStore(rootReducer);

console.log(store);
console.log(store.getState());

store.dispatch(saveTodo("First todo"));
store.dispatch(saveTodo("Second todo"));
store.dispatch(saveTodo("Third todo"));
console.log(store.getState());

store.dispatch(completeTodo(1));
console.log(store.getState());

store.dispatch(showCompleted(true));
console.log(store.getState());

store.dispatch(toggleTheme());
console.log(store.getState());

store.dispatch(toggleTheme());
console.log(store.getState());
