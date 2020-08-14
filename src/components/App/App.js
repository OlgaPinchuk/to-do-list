import React from "react";
import "./App.css";
import Header from "../Header/Header";
import ToDoList from "../ToDoList/ToDoList";

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../behavior/rootReducer';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default () => (
  <Provider store={store}>
    <Header />
    <ToDoList />
  </Provider>
);
