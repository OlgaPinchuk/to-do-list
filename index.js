import { createStore, combineReducers } from "redux";
import { reducer as todosReducer, saveTodo, completeTodo } from "./src/behavior/todos";
import { reducer as themeReducer, toggleTheme } from "./src/behavior/theme";
import { reducer as completedShownReducer, showCompleted } from "./src/behavior/completedShown";

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
